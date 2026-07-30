import os
import time

from playwright.sync_api import sync_playwright

PUBLIC_URL = os.environ.get('PUBLIC_URL', '').strip()
if not PUBLIC_URL:
    raise RuntimeError('PUBLIC_URL is required')

TARGETS = [
    ('chromium/desktop', 'chromium', {'width': 1440, 'height': 1000}),
    ('chromium/mobile', 'chromium', {'width': 390, 'height': 844}),
    ('webkit/ipad', 'webkit', {'width': 820, 'height': 1180}),
]


def open_with_retry(page):
    last_error = None
    for attempt in range(6):
        try:
            response = page.goto(PUBLIC_URL, wait_until='networkidle', timeout=30_000)
            if response and response.ok:
                return response
            status = response.status if response else 'no response'
            last_error = AssertionError(f'HTTP response was not successful: {status}')
        except Exception as error:  # Deployment propagation can be briefly delayed.
            last_error = error
        if attempt < 5:
            time.sleep(10)
    raise last_error


def verify(page, label):
    errors = []
    page.on('pageerror', lambda exc: errors.append(str(exc)))
    open_with_retry(page)
    page.wait_for_selector('.term-card')

    assert page.locator('.term-card').count() == 30, f'{label}: initial cards'
    assert page.locator('#result-count').inner_text() == '30 / 30語'

    page.locator('#search').fill('プルリクエスト')
    assert page.locator('.term-card').count() == 1, f'{label}: Japanese search'
    assert page.locator('.term-card h3').inner_text() == 'Pull request'

    page.locator('#clear-search').click()
    assert page.locator('.term-card').count() == 30, f'{label}: clear search'

    page.locator('#search').fill('存在しない用語')
    assert page.locator('#empty-state').is_visible(), f'{label}: empty state'

    page.locator('#clear-search').click()
    body_width = page.locator('body').evaluate('(element) => element.scrollWidth')
    viewport_width = page.evaluate('window.innerWidth')
    assert body_width <= viewport_width + 1, f'{label}: horizontal overflow'
    assert errors == [], f'{label}: JavaScript errors: {errors}'


with sync_playwright() as playwright:
    browsers = {}
    try:
        for label, browser_name, viewport in TARGETS:
            if browser_name not in browsers:
                browsers[browser_name] = getattr(playwright, browser_name).launch()
            page = browsers[browser_name].new_page(viewport=viewport)
            verify(page, label)
            page.close()
    finally:
        for browser in browsers.values():
            browser.close()

print(f'Public Release Gate passed: {PUBLIC_URL}')
