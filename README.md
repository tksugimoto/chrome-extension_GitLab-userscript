# GitLab用Chrome拡張
GitLabのMergeRequestでcommit（のdiff）を見るとコミットメッセージが表示されない問題に対処する

# 使用準備
1. `./chrome-extension/js/` に `private_token.js` を作る
    ```
    cp chrome-extension/js/private_token.{template.,}js
    ```
1. GitLabから Private Token を取得
1. `./chrome-extension/js/private_token.js` に Private Token を書き込む
1. Chrome拡張を開発者モードでインストールする
    - `./chrome-extension/` フォルダを拡張管理ページにドラッグ・アンド・ドロップ

# 動作確認済みGitLab
- [x] オンプレ版 (11.1.4)
- [ ] SaaS版

