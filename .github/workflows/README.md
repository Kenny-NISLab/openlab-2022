# CI/CD for GitHub Actions

![Push Main Branch](https://github.com/kogepanh/openlab/workflows/Push%20Main%20Branch/badge.svg)
![Pull Request Main Branch](https://github.com/kogepanh/openlab/workflows/Pull%20Request%20Main%20Branch/badge.svg)
![Push Develop Branch](https://github.com/kogepanh/openlab/workflows/Push%20Develop%20Branch/badge.svg)
![Pull Request Develop Branch](https://github.com/kogepanh/openlab/workflows/Pull%20Request%20Develop%20Branch/badge.svg)

[GitHub Actions](https://github.co.jp/features/actions) を用いて [CI/CD](https://ja.wikipedia.org/wiki/CI/CD) を構築しています。  
主に [main](https://github.com/kogepanh/openlab) ブランチと [develop](https://github.com/kogepanh/openlab/tree/develop) ブランチに対してワークフローを自動化し、ビルド・デプロイを機能させています。

---

## All Workflows

- [pull_request for develop branch](##pull_request-for-develop-branch)
- [push for develop branch](##push-for-develop-branch)
- [pull_request for main branch](##pull_request-for-main-branch)
- [push for main branch](##push-for-main-branch)

### pull_request for develop branch

[develop](https://github.com/kogepanh/openlab/tree/develop) ブランチへの pull_request をトリガーに以下のジョブを実行。ジョブが成功した時のみ pull_request が可能です。

- リポジトリをチェックアウト ([actions/checkout](https://github.com/actions/checkout))
- [Node.js](https://nodejs.org/ja/) 環境を立ち上げ ([actions/setup-node](https://github.com/actions/setup-node))
- 環境変数 `.env` を設定
- package のインストール
- [Vue.js](https://jp.vuejs.org/) プロジェクトのビルド

### push for develop branch

[develop](https://github.com/kogepanh/openlab/tree/develop) ブランチへの push(merge) をトリガーに以下のジョブを実行。

- [Slack](https://slack.com/) に通知

### pull_request for main branch

[main](https://github.com/kogepanh/openlab/) ブランチへの pull_request をトリガーに以下のジョブを実行。  
pull_request に対して 1 人以上のレビューがなければマージすることはできません。

- [Slack](https://slack.com/) に通知

### push for develop branch

[main](https://github.com/kogepanh/openlab/) ブランチへの push(merge) をトリガーに以下のジョブを実行。

- リポジトリをチェックアウト ([actions/checkout](https://github.com/actions/checkout))
- [Node.js](https://nodejs.org/ja/) 環境を立ち上げ ([actions/setup-node](https://github.com/actions/setup-node))
- 環境変数 `.env` を設定
- package のインストール
- [Vue.js](https://jp.vuejs.org/) プロジェクトのビルド
- [Firebase](https://firebase.google.com/) にデプロイ
  - [Firebase Hosting](https://firebase.google.com/products/hosting?hl=ja) にプロジェクトをデプロイ
  - [Firebase Functions](https://firebase.google.com/products/functions?hl=ja) に関数をデプロイ
- [Slack](https://slack.com/) に通知

---

## How to Use

[GitHub Actions Document](https://docs.github.com/ja/actions)

> GitHub Actions はイベント駆動型で、指定されたイベントが発生した後に一連のコマンドを実行できます。 たとえば、誰かがリポジトリのプルリクエストを作成するたびに、ソフトウェアテストスクリプトを実行するコマンドを自動的に実行できます。  
> GitHub Actions は、YAML 構文を使用して、イベント、ジョブ、およびステップを定義します。 これらの YAML ファイルは、コードリポジトリの .github/workflows というディレクトリに保存されます。

### [ワークフローファイルの構文について](https://docs.github.com/ja/actions/learn-github-actions/introduction-to-github-actions#%E3%83%AF%E3%83%BC%E3%82%AF%E3%83%95%E3%83%AD%E3%83%BC%E3%83%95%E3%82%A1%E3%82%A4%E3%83%AB%E3%82%92%E7%90%86%E8%A7%A3%E3%81%99%E3%82%8B)

|            |                                                                  |
| :--------: | :--------------------------------------------------------------- |
|  `name:`   | GitHub リポジトリの [Actions] タブに表示されるワークフローの名前 |
|   `on:`    | ワークフローファイルを自動的にトリガーするイベントを指定         |
|  `jobs:`   | ワークフローファイルで実行されるすべてのジョブをグループ化       |
| `runs-on:` | GitHub によってホストされている新しい仮想マシンを指定            |
|  `steps:`  | ジョブで実行されるすべてのステップをグループ化                   |
| `- uses:`  | コミュニティアクションのを取得                                   |
|  `- run:`  | ランナーでコマンドを実行するようにジョブに指示                   |
