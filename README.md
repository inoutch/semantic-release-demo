# semantic-release-demo
[![CircleCI](https://circleci.com/gh/inoutch/semantic-release-demo.svg?style=shield)](https://circleci.com/gh/inoutch/semantic-release-demo)

### semantic-releaseとは?

- gitコミットのコメントから, 次のバージョンやリリースノートを自動的に生成
- npmレポジトリへ自動でpublishする

https://github.com/semantic-release/semantic-release

### デモの内容
- npmレポジトリに自作のライブラリ(helloModules)をpublsihすることを想定

## semantic-releaseの流れ(デモ)
- GitHubのWebhookにてCircleCIを走らせる
- CircleCIでテストを走らせる

  ```
  $ npm run test
  ```

- CIがパスするとsemantic-releaseが走り, GitHubとnpmにpublishされる

  ```
  npm run semantic-release
  ```

## その他
- Release Noteの自動生成といったGitHub連携のために, CIで環境変数`$GH_TOKEN`の設定が必要
- npmレポジトリへのpublishにも, CIで環境変数`$NPM_TOKEN`の設定が必要
