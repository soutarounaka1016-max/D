# FACTORY_STATUS

## Product
- App: GitHub はじめて用語集
- AI Factory OS: Version 0.6
- Target: GitHub初心者
- Release type: 正式完成

## Core Journey Contract
1. 初期表示で30語がアルファベット順に並ぶ。
2. 英語、読み方、日本語説明、例、カテゴリから検索できる。
3. 検索解除後に30語へ戻る。
4. 0件時に明確な空状態が表示される。
5. Chromium・WebKit、desktop・iPad・mobile相当で主要操作と表示を確認する。

## Evidence Index
- Unit/data tests: `npm test` (local pass: 8/8)
- Browser tests: `python3 browser_test.py` (GitHub ActionsでChromium・WebKitを実行)
- CI: `.github/workflows/ci.yml`
- Deploy: `.github/workflows/pages.yml`
- Factory manifest: `factory-manifest.json`

## Release State
- Implementation: branch implemented
- Pull request: pending
- Main merge: pending
- GitHub Pages: pending
- Public E2E: pending
- Release Gate: pending

## Known Constraints
- 新規Repository作成専用操作がないため、接続済みの空Repository `D` をBootstrap対象として利用する。
- Pagesの初回有効化は `actions/configure-pages` の `enablement: true` で試行し、Actionsログと公開URLで成否を確認する。
