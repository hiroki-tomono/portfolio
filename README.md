# portfolio

エンジニアポートフォリオ（1ページ完結）。ビルドツールなしの静的サイトです。

Claude Design で作成した案B（資料風の2カラム構成）をそのまま実装しています。

## 構成

```
data/portfolio.js     ← 内容と表示トグルの唯一の情報源。編集するのはここだけ
build.js              ← data/portfolio.js から index.html を生成（依存パッケージなし）
index.html            ← 生成物。直接編集しない
assets/css/style.css  ← スタイル
assets/img/           ← 顔写真・スクリーンショットの置き場
```

`index.html` は完全な静的 HTML です。閲覧時に JavaScript は不要で、そのまま
どこにでも置けます。

## 編集のしかた

1. `data/portfolio.js` を編集する
2. `npm run build`（= `node build.js`）を実行する
3. `index.html` の差分もあわせてコミットする

Node.js 18 以上が必要です。インストールするパッケージはありません。

ローカルで確認する場合:

```sh
npm run build
python3 -m http.server   # → http://localhost:8000
```

## data/portfolio.js の要点

### 表示トグル（`flags`）

デザインの Tweaks パネルに対応します。

| フラグ | 効果 |
| --- | --- |
| `showWorks` | 制作物セクションとサイドバーのナビ項目を出し分け |
| `showGitHub` / `showZenn` / `showEmail` | サイドバーの各リンクを出し分け |

`false` にした要素は HTML そのものに出力されません（CSS で隠すのではありません）。

### スキルセット

各スキルは `years`（経験年数）と `level`（習熟度 1〜5）を持ちます。

- **バーの長さ = 経験年数** — 0年で 20%、8年以上で 100%
- **バーの色の濃さ = 習熟度** — level 1〜5 が不透明度 0.12 / 0.25 / 0.45 / 0.7 / 1 に対応
- 年数はバーの外にカテゴリ色の大きな数字で表示されます

色は `categories` で定義され、スキルセットのバー・年数の数字・職務経歴の
「使用技術」チップで共通して使われます。カテゴリを増やす場合は `categories` に
キーを足せば、両方に反映されます。

### 画像

`profile.portrait` と各 `works[].image` に `assets/img/` 配下のパスを入れると
写真が表示されます。`null` のままなら点線のプレースホルダーが表示されます。

## デプロイ（GitHub Pages）

ビルド済みのファイルをそのまま配信できます。リポジトリの
Settings → Pages → Source で「Deploy from a branch」を選び、`main` / `(root)`
を指定してください。GitHub Actions の設定は不要です。

## レスポンシブ / 印刷

- 幅 960px 以下でサイドバーが上に回り込み、スキル・制作物・職務経歴が1カラムになります
- 印刷時はナビとリンクを省き、職務経歴書として出力できるようにしています

## 内容について

現在入っている経歴・制作物はデザイン時のサンプルデータ（早瀬 湊）です。
公開前に `data/portfolio.js` の内容を差し替えてください。
