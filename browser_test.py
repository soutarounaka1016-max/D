from contextlib import contextmanager
from http.server import SimpleHTTPRequestHandler, ThreadingHTTPServer
from pathlib import Path
from threading import Thread
import os

from playwright.sync_api import sync_playwright

BASE = Path(__file__).parent.resolve()
VIEWPORTS = [
    ('desktop', {'width': 1440, 'height': 1000}),
    ('ipad', {'width': 820, 'height': 1180}),
    ('mobile', {'width': 390, 'height': 844}),
]


class QuietHandler(SimpleHTTPRequestHandler):
    def log_message(self, format, *args):
        pass


@contextmanager
def static_server():
    handler = lambda *args, **kwargs: QuietHandler(*args, directory=str(BASE), **kwargs)
    server = ThreadingHTTPServer(('127.0.0.1', 0), handler)
    thread = Thread(target=server.serve_forever, daemon=True)
    thread.start()
    try:
        yield f'http://127.0.0.1:{server.server_port}/index.html'
    finally:
        server.shutdown()
        thread.join(timeout=5)


def assert_page(page, url: str, label: str):
    errors = []
    page.on('pageerror', lambda exc: errors.append(str(exc)))
    page.goto(url, wait_until='networkidle')
    page.wait_for_selector('.term-card')
    assert page.locator('.term-card').count() == 30, f'{label}: initial card count'
    assert page.locator('#result-count').inner_text() == '30 / 30語'

    page.locator('#search').fill('プルリクエスト')
    assert page.locator('.term-card').count() == 1, f'{label}: search result count'
    assert page.locator('.term-card h3').inner_text() == 'Pull request'
    assert page.locator('#result-count').inner_text() == '1 / 30語'

    page.locator('#clear-search').click()
    assert page.locator('.term-card').count() == 30, f'{label}: clear search'

    page.locator('#search').fill('存在しない用語')
    assert page.locator('#empty-state').is_visible(), f'{label}: empty state'
    assert page.locator('#glossary-list').is_hidden(), f'{label}: list hidden'

    page.locator('#clear-search').click()
    body_width = page.locator('body').evaluate('(el) => el.scrollWidth')
    viewport_width = page.evaluate('window.innerWidth')
    assert body_width <= viewport_width + 1, f'{label}: horizontal overflow {body_width}>{viewport_width}'
    assert errors == [], f'{label}: JavaScript errors: {errors}'


with static_server() as url, sync_playwright() as p:
    use_system_chromium = os.environ.get('PLAYWRIGHT_USE_SYSTEM_CHROMIUM') == '1'
    if use_system_chromium:
        browsers = [('chromium', p.chromium, {'executable_path': '/usr/bin/chromium', 'args': ['--no-sandbox']})]
    else:
        browsers = [('chromium', p.chromium, {}), ('webkit', p.webkit, {})]

    for browser_name, browser_type, launch_options in browsers:
        browser = browser_type.launch(**launch_options)
        try:
            for viewport_name, viewport in VIEWPORTS:
                page = browser.new_page(viewport=viewport)
                assert_page(page, url, f'{browser_name}/{viewport_name}')
                page.close()
        finally:
            browser.close()

print('Browser checks passed for configured browsers and desktop/iPad/mobile viewports')
