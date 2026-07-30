# FACTORY_STATUS

## Product
- App: GitHub はじめて用語集
- AI Factory OS: Version 0.6
- Target: GitHub初心者
- Release target: 正式完成
- Progress state: 完成

## Core Journey Contract
1. 初期表示で30語がアルファベット順に並ぶ。
2. 英語、読み方、日本語説明、例、カテゴリから検索できる。
3. 検索解除後に30語へ戻る。
4. 0件時に明確な空状態が表示される。
5. Chromium・WebKit、desktop・iPad・mobile相当で主要操作と表示を確認する。

## Evidence Index
- Unit/data tests: `npm test` 8/8 success
- Product PR: `#1` merged
- Release Gate PR: `#2` merged
- Product commit: `ca8ec0cb954452bb0e35297d9c29003ad6a30ff3`
- Deployment workflow commit: `045ce420dd74a3b075e847a5922b8e82c371f824`
- Successful Pages Run: `30509827731` rerun attempt
- Build: success
- Deploy: success
- Public browser verification: success
- Browsers: Chromium and WebKit
- Viewports: desktop, mobile and iPad equivalent
- Public URL: `https://soutarounaka1016-max.github.io/D/`

## Release State
- Implementation: complete
- Pull request: complete
- Main merge: complete
- Static and browser CI: passed
- GitHub Pages: deployed
- Public E2E: passed
- Release Gate: **PASSED**
- Completion judgment: **完成**

## Repository Rename
- Desired name: `github-glossary`
- Current name: `D`
- Attempted route: GitHub Actions calling `PATCH /repos/{owner}/{repo}`
- Result: GitHub returned HTTP 403 `Resource not accessible by integration`
- Required permission: `administration: write`
- The current GitHub connector and Actions `GITHUB_TOKEN` do not expose that permission.
- The failed temporary rename workflow was removed from the release branch.

## Known Constraints
- Repository rename remains an account-administration action outside the current connected tool surface.
- The released application itself is fully usable at the verified public URL above.
