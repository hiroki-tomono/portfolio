/**
 * ポートフォリオの唯一の情報源(single source of truth)。
 *
 * このファイルだけを編集して `npm run build` を実行すれば index.html が再生成されます。
 * HTML を直接編集する必要はありません。
 *
 * 内容の出典: 職務経歴書(2026年7月時点)。2026年11月に転職活動向けに見直し、
 * 実績の数値は GitHub / Slack / Datadog の記録で裏づけています。
 */

/* ------------------------------------------------------------------ *
 * 表示トグル(Tweaks)
 * ------------------------------------------------------------------ */
export const flags = {
  /** 制作物セクションを表示する。false にするとセクションとナビ項目の両方が消えます。 */
  showWorks: true,
  /** 資格セクションを表示する。 */
  showCertifications: true,

  // ↓ links に URL / アドレスを入れてから true にしてください。
  //   (電話番号は公開ページに載せない方針で、意図的に含めていません)
  /** サイドバーの GitHub リンク */
  showGitHub: false,
  /** サイドバーの Zenn リンク */
  showZenn: false,
  /** サイドバーの Email ボタン */
  showEmail: true,
};

/* ------------------------------------------------------------------ *
 * プロフィール
 * ------------------------------------------------------------------ */
export const profile = {
  eyebrow: 'Engineer Portfolio',
  name: '友野 弘樹',
  nameKana: 'ともの ひろき',
  nameEn: 'Hiroki Tomono',
  role: 'Webエンジニア',
  /** 肩書きの下に出る、強みを示す一行。null なら表示しません。 */
  tagline: 'Rails × プロダクト開発・性能改善',
  location: '神奈川県',
  /** ブラウザのタブと OGP に出るページタイトル。 */
  pageTitle: '友野弘樹 | ポートフォリオ',
  /**
   * 顔写真。assets/img/ に置いたファイルへのパス。null ならプレースホルダー表示。
   * 正方形に近い画像が理想です（132px の円形に切り抜かれます）。
   */
  portrait: 'assets/img/myself.png',
  portraitAlt: '友野 弘樹のプロフィール写真',
  /**
   * 円形に切り抜くときの位置。横長の写真で顔が中央からずれている場合に調整します。
   * 例: 'center 30%'（上寄りを表示）、'60% 25%'（右上を表示）。
   */
  portraitPosition: null,
  /** <meta name="description"> に使われます。 */
  description:
    'Webエンジニア 友野 弘樹のポートフォリオ。エンジニア歴10年超、Ruby on Rails を主軸にフロントエンドからインフラまで一貫して対応。自社プロダクト「Mogupick」を代表兼リードエンジニアとして立ち上げました。',
};

export const links = {
  // 表示の有無は flags で制御します。空文字のものは flags 側も false のままにしてください。
  github: '',
  zenn: '',
  email: 'sato1208hiro@gmail.com',
};

/* ------------------------------------------------------------------ *
 * 自己紹介
 * ------------------------------------------------------------------ */
export const about = {
  /** 概要(リード文) */
  summary:
    'エンジニア歴10年超のWebエンジニアです。Ruby on Rails(8年)を主軸としたバックエンド開発に加え、React / Next.js / Vue.js によるフロントエンド開発、AWS・Terraform を用いたインフラ構築まで一貫して対応できます。金融、流通、教育、マッチングプラットフォームなど多業種のシステム開発に携わり、要件定義からリリース・保守運用まで全工程の経験があります。自社プロダクト「Mogupick」(イベント・キッチンカー向けモバイルオーダープラットフォーム)を代表兼リードエンジニアとして立ち上げ、企画から実証実験までを一貫して担当しました。現在はフリーランスとして教育系プラットフォームの開発保守を担当しています。',

  /** 自己PR。見出しの色は categories のキーで指定します。 */
  highlights: [
    {
      category: 'be',
      title: 'バックエンドからインフラまで一気通貫の対応力',
      body: 'Rails API の設計・実装を中心に、React / Next.js でのフロントエンド開発、AWS 上でのインフラ構築・Terraform 管理、Stripe を用いた決済機能や Solid Queue による非同期処理基盤の設計など、プロダクト開発に必要な技術領域を幅広くカバーできます。本番のモニタリングから見つけた遅い API を改善し、応答時間を最大約95%短縮しました。自社プロダクト Mogupick では、企画から実証実験までを共同創業者と2名で担いました。',
    },
    {
      category: 'ai',
      title: 'AI駆動開発の実践とチームへの展開',
      body: 'Claude Code を使った AI 駆動開発を、設計・実装・テストコード作成・リファクタリングの各工程で業務に取り入れています。自社プロダクト Mogupick では開発から運用までを Claude Code 前提で進め、教育系プラットフォームの案件では、結合テストケースの作成などに使う Claude Code の共有スキルを整備し、チームで使えるようにしました。',
    },
    {
      category: 'fe',
      title: '合意形成とレビュー、障害対応で築いた信頼',
      body: '教育系プラットフォームの案件には2021年から参画し、5年以上契約が続いています。他メンバーの Pull Request を1,100件以上レビューしてきました。設計方針を変えるときは、論点と理由を文書にまとめ、PdM やチームと合意してから進めています。障害時の影響範囲の調査のように手間のかかる作業も自分から引き受け、原因と再発防止策をポストモーテムにまとめてチームに共有しています。',
    },
  ],
};

/* ------------------------------------------------------------------ *
 * スキルカテゴリ
 *
 * ここで定義した色が、スキルセットのバー・年数の数字・自己PRの見出し・
 * 職務経歴の使用技術チップで共通して使われます。
 * ------------------------------------------------------------------ */
export const categories = {
  be:    { title: 'バックエンド',             rgb: '20,73,142'  },
  fe:    { title: 'フロントエンド',           rgb: '213,48,101' },
  infra: { title: 'インフラ・ミドルウェア',   rgb: '47,165,156' },
  ai:    { title: 'AI活用',                   rgb: '106,43,184' },
  other: { title: 'その他',                   rgb: '108,114,120' },
};

/**
 * バーが満タン（100%）になる経験年数。デザイン仕様どおり8年。
 * 8年以上はすべて満タン（クランプ）になります。
 *
 * null にすると、全スキル中の最長年数を 100% とした相対表示に切り替わり、
 * 8年 / 9年 / 10年 の差が見えるようになります。
 */
export const skillBarMaxYears = 8;

/**
 * スキルセット。職務経歴に登場する技術のうち、応募先へのアピールにつながるものを掲載しています。
 * 古い技術や短期間だけ使ったもの(Eclipse・SVN・JP1・VBA・Windows・Ubuntu・
 * Amazon EC2 / S3・React Native)は、職務経歴の技術タグにだけ残しています。
 *
 * カテゴリ（技術領域）の中を、さらに `subs`（言語 / フレームワーク など）で
 * 分けます。`label` を空文字にすると小見出しなしで並びます。
 *
 *   years … 経験年数。バーの「長さ」になります(1年未満は「◯ヶ月」表示)。
 *   level … 習熟度 1〜5。バーの「色の濃さ」になります。
 *
 * 年数の根拠:
 *   - 職務経歴書の「主要なスキルサマリー」に記載があるものはその値
 *     （Ruby 9年 / JavaScript 10年 など、入社前の経験も含む自己申告値）
 *   - 記載がないものは職務経歴の参画期間を積算した値（重複期間は二重に数えない）
 *
 * ※ level は職務経歴書に記載がないため、経験年数と直近の実務での使用状況から
 *    暫定で設定しています。実感に合わせて調整してください。
 */
export const skillGroups = [
  {
    category: 'be',
    subs: [
      {
        label: '言語',
        skills: [
          { name: 'Ruby', years: 9, level: 5 },
          { name: 'Java', years: 5, level: 3 },
        ],
      },
      {
        label: 'フレームワーク',
        skills: [
          { name: 'Ruby on Rails',    years: 8, level: 5 },
          { name: 'Spring Framework', years: 2, level: 3 },
        ],
      },
      {
        label: 'ライブラリ・サービス',
        skills: [
          { name: 'RSpec',       years: 6, level: 4 },
          { name: 'JUnit',       years: 2, level: 2 },
          { name: 'Solid Queue', years: 1, level: 3 },
          { name: 'Stripe',      years: 1, level: 3 },
        ],
      },
    ],
  },
  {
    category: 'fe',
    subs: [
      {
        label: '言語',
        skills: [
          { name: 'JavaScript', years: 10,    level: 4 },
          { name: 'TypeScript', years: 4,     level: 4 },
        ],
      },
      {
        label: 'フレームワーク',
        skills: [
          { name: 'React',        years: 5,      level: 4 },
          { name: 'Next.js',      years: 5,      level: 4 },
          { name: 'jQuery',       years: 2,      level: 3 },
          { name: 'Vue.js',       years: 1.5,    level: 3 },
          { name: 'Nuxt.js',      years: 1,      level: 3 },
        ],
      },
    ],
  },
  {
    category: 'infra',
    subs: [
      {
        label: 'データベース',
        skills: [
          { name: 'MySQL',      years: 8, level: 4 },
          { name: 'PostgreSQL', years: 4, level: 4 },
          { name: 'Oracle',     years: 3, level: 3 },
          { name: 'BigQuery',   years: 1, level: 2 },
        ],
      },
      {
        label: 'クラウド・インフラ',
        skills: [
          { name: 'AWS',        years: 5,    level: 4 },
          { name: 'Vercel',     years: 1,    level: 3 },
          { name: 'Terraform',  years: 0.5,  level: 3 },
        ],
      },
      {
        label: '開発環境・ツール',
        skills: [
          { name: 'Git',            years: 8, level: 5 },
          { name: 'Docker',         years: 6, level: 4 },
          { name: 'Datadog',        years: 2, level: 4 },
          { name: 'GitHub Actions', years: 1, level: 4 },
          { name: 'ChatOps',        years: 1, level: 3 },
          { name: 'Resend',         years: 1, level: 3 },
        ],
      },
    ],
  },
  {
    category: 'ai',
    subs: [
      {
        label: '',
        skills: [{ name: 'AI駆動開発', years: 1, level: 4 }],
      },
    ],
  },
];

/* ------------------------------------------------------------------ *
 * 制作物(flags.showWorks が false のときは出力されません)
 * ------------------------------------------------------------------ */
export const works = [
  {
    title: 'Mogupick',
    role: '代表 兼 リードエンジニア',
    /** 役職バッジの色。categories のキー、または任意の CSS 色。 */
    roleCategory: 'be',
    desc: 'イベント・キッチンカー向けのモバイルオーダープラットフォーム。サービスコンセプトの策定からアーキテクチャ設計、実装、AWS 上のインフラ構築・運用まで全工程を担当しました。実証実験を経て、2026年8月に事業を終了しました。',
    tags: ['Rails API', 'Next.js', 'Stripe', 'AWS / Terraform'],
    /** 公開 URL。null ならリンクにならず、カードとして表示されます。 */
    href: 'https://lp.mogupick.majiyuru.com/merchant',

    /**
     * 画像。assets/img/ に置いたファイルへのパス。null ならプレースホルダー表示。
     *
     * ※ 現在のロゴはシンボルマークのみを再現した SVG です。公式のロゴデータが
     *    手元にある場合は assets/img/mogupick-logo.svg を差し替えてください。
     *    カードのタイトルに「Mogupick」が出るため、ロゴタイプ（文字部分）は
     *    重複を避けて入れていません。
     */
    image: 'assets/img/mogupick-logo.svg',
    /** 'cover'（既定・スクリーンショット向け）か 'contain'（ロゴ向け・余白をとって全体を表示）。 */
    imageFit: 'contain',
    /** 画像が未設定のときのプレースホルダー文言。 */
    placeholder: 'ロゴ',
  },
];

/* ------------------------------------------------------------------ *
 * 職務経歴のフェーズ(働き方の区分)
 *
 * 各 career エントリの `phase` がこのキーを指します。表示順もこの配列の順。
 * 期間の見出しは、そのフェーズに属するエントリから自動で算出されます。
 * ------------------------------------------------------------------ */
export const careerPhases = [
  { key: 'product',   title: '自社プロダクト',  subtitle: '事業として開発',           rgb: '47,165,156'  },
  { key: 'freelance', title: 'フリーランス',    subtitle: '個人事業主として参画',     rgb: '213,48,101' },
  { key: 'ses',       title: 'SES・受託開発',   subtitle: '客先常駐・受託として参画', rgb: '20,73,142'  },
];

/* ------------------------------------------------------------------ *
 * 職務経歴(新しい順)
 *
 * techs の各要素は [表示名, categories のキー]。
 * スキルセットと同じ色でチップが描画されます。
 * ------------------------------------------------------------------ */
export const career = [
  {
    phase: 'product',
    start: '2025.06', end: '2026.08', durationMonths: null,
    title: 'イベント・キッチンカー向けモバイルオーダープラットフォームの立ち上げ',
    role: '代表 兼 リードエンジニア',
    team: '2名',
    desc: '自社プロダクト「Mogupick」の企画・設計・開発を推進。バックエンドは Rails API、フロントエンドは Next.js(Vercel デプロイ)、決済は Stripe、非同期処理は Solid Queue、メール配信は Resend で構成しました。AWS 上のインフラを Terraform でコード管理し、GitHub Actions による CI/CD パイプラインと ChatOps による運用自動化を構築。AI駆動開発(Claude Code)を全面的に活用し、2名で開発から運用までを担いました。イベント会社やキッチンカープラットフォームの運営企業と実証実験を行い、導入店舗の運用負荷が最大の課題であることを確かめたうえで、2026年8月に事業を終了しました。',
    phases: ['企画', '要件定義', '基本設計', '詳細設計', '実装', 'テスト', '保守・運用'],
    techs: [
      ['Ruby', 'be'],
      ['Rails', 'be'],
      ['PostgreSQL', 'be'],
      ['Solid Queue', 'be'],
      ['Stripe', 'be'],
      ['RSpec', 'be'],
      ['Next.js', 'fe'],
      ['Vercel', 'fe'],
      ['AWS', 'infra'],
      ['Terraform', 'infra'],
      ['Docker', 'infra'],
      ['GitHub Actions', 'infra'],
      ['ChatOps', 'infra'],
      ['Resend', 'infra'],
      ['Git', 'infra'],
      ['AI駆動開発 (Claude Code)', 'ai'],
    ],
  },
  {
    phase: 'freelance',
    start: '2021.09', end: null, durationMonths: null,
    title: '教育系プラットフォームの開発保守',
    role: '開発メンバー',
    team: '5〜12名',
    desc: '学習管理プラットフォームサービスの開発・保守に5年以上継続して従事。Rails + React / Next.js(TypeScript)による SPA 構成のアプリケーションで、仕様策定・設計から実装、運用までを担当しています。新機能では仕様書と設計書を自ら作成してチームのレビューを取りまとめ、論理削除の導入などの設計方針は論点と理由を文書に整理して PdM と合意しながら進めています。本番のモニタリング(Datadog APM)から遅い API を自ら見つけて起票し、実行計画の分析とクエリ・インデックスの改善で応答時間を最大約95%短縮しました。外部の教材事業者向け連携 API の開発と外部向けドキュメントの整備、サービス間 API へのトークン認証の導入などのセキュリティ対応も主導しました。障害発生時には、ログから影響を受けた校舎・生徒を特定して CS(カスタマーサポート)の個別連絡を支えるとともに、原因調査と再発防止策をポストモーテムにまとめています。参画以来、他メンバーの Pull Request を1,100件以上レビューしています。AI駆動開発では、結合テストケース作成などの Claude Code のチーム共有スキルを整備しました。スクラム体制のもとアジャイル開発を実践し、BigQuery を用いたデータ分析基盤との連携にも対応。SES 案件として開始し、フリーランス転向後も継続しています。',
    phases: ['要件定義', '基本設計', '詳細設計', '実装', 'テスト', '保守・運用'],
    techs: [
      ['Ruby', 'be'],
      ['Rails', 'be'],
      ['MySQL', 'be'],
      ['RSpec', 'be'],
      ['React', 'fe'],
      ['Next.js', 'fe'],
      ['TypeScript', 'fe'],
      ['AWS', 'infra'],
      ['BigQuery', 'infra'],
      ['Datadog', 'infra'],
      ['Docker', 'infra'],
      ['Git', 'infra'],
      ['AI駆動開発 (Claude Code)', 'ai'],
    ],
  },
  {
    phase: 'freelance',
    start: '2023.01', end: '2023.12', durationMonths: 11,
    title: '副業マッチングプラットフォームの新規リプレース、および既存システムの改修',
    role: '開発メンバー',
    team: '5名',
    desc: '副業マッチングサービスの既存システム改修および新規リプレースに副業として参画。既存システムでは Rails / JavaScript で、インボイス制度対応などの法制度関連の改修を担当しました。新規リプレースでは SPA 構成(Rails API + Nuxt.js)での開発に携わり、email / GitHub / Facebook によるマルチプロバイダ認証機能の設計・実装を担当しました。',
    phases: ['実装', 'テスト'],
    techs: [
      ['Ruby', 'be'],
      ['Rails', 'be'],
      ['MySQL', 'be'],
      ['RSpec', 'be'],
      ['JavaScript', 'fe'],
      ['Vue.js', 'fe'],
      ['Nuxt.js', 'fe'],
      ['Docker', 'infra'],
      ['Git', 'infra'],
    ],
  },
  {
    phase: 'ses',
    start: '2021.04', end: '2021.09', durationMonths: 6,
    title: 'アプリマーケティングプラットフォームのコア機能改修',
    role: '開発メンバー',
    team: '4名',
    desc: 'アプリマーケティングプラットフォームのカスタマイズ開発(API)およびコア機能の改修に参画。Rails API の機能追加・改修と、Vue.js による SPA 構成の管理画面の改修を担当しました。AWS / Docker 環境での開発・テスト・運用も担当し、フルリモート体制でチーム開発を行いました。',
    phases: ['実装', 'テスト', '保守・運用'],
    techs: [
      ['Ruby', 'be'],
      ['Rails', 'be'],
      ['MySQL', 'be'],
      ['RSpec', 'be'],
      ['Vue.js', 'fe'],
      ['AWS', 'infra'],
      ['Docker', 'infra'],
      ['Ubuntu', 'infra'],
      ['Git', 'infra'],
    ],
  },
  {
    phase: 'ses',
    start: '2021.01', end: '2021.03', durationMonths: 3,
    title: 'ビジネスシーンにおける顧客との新たな非対面コミュニケーションツールの新規開発',
    role: 'サブリーダー',
    team: '3〜4名',
    desc: 'SMS 送信をトリガーとしたプッシュ型チャットサービスの新規開発にサブリーダーとして参画。チャット機能の技術選定を行い、Rails + ActionCable + Vue.js / TypeScript によるリアルタイムチャット機能を設計・実装しました。顧客とのやり取りを担当し、他メンバーのコードレビューとフォローも行いました。AWS(EC2 / S3)上への本番環境構築、Docker 導入、Sentry → Slack 通知による監視体制の整備まで、インフラ・運用面も担当しました。',
    phases: ['要件定義', '基本設計', '実装', 'テスト', '保守・運用'],
    techs: [
      ['Ruby', 'be'],
      ['Rails', 'be'],
      ['PostgreSQL', 'be'],
      ['Vue.js', 'fe'],
      ['TypeScript', 'fe'],
      ['AWS', 'infra'],
      ['Amazon EC2', 'infra'],
      ['Amazon S3', 'infra'],
      ['Docker', 'infra'],
      ['Ubuntu', 'infra'],
      ['Git', 'infra'],
    ],
  },
  {
    phase: 'ses',
    start: '2018.10', end: '2020.12', durationMonths: 26,
    title: 'イベント用品のレンタル・販売サービスの業務システムのリプレース',
    role: '開発メンバー',
    team: '3〜5名',
    desc: 'レンタル業務販売管理システムの刷新プロジェクトに立ち上げ当初から約2年間参画。Java / Spring Framework を用いたバックエンド開発を中心に、システム方式設計やシステム基盤構築のサポートを担当しました。生産性向上の取り組みとして、Excel 管理の DB 設計書から Repository / Entity ファイルを自動生成する VBA マクロを開発。自身の開発業務に加え、他メンバーの技術サポートや遅延タスクの巻き取りなど、チーム全体の進捗を支える役割も担いました。',
    phases: ['基本設計', '実装', 'テスト'],
    techs: [
      ['Java', 'be'],
      ['Spring Framework', 'be'],
      ['MySQL', 'be'],
      ['PostgreSQL', 'be'],
      ['JUnit', 'be'],
      ['jQuery', 'fe'],
      ['Ubuntu', 'infra'],
      ['Git', 'infra'],
      ['VBA', 'other'],
    ],
  },
  {
    phase: 'ses',
    start: '2018.07', end: '2018.09', durationMonths: 2,
    title: 'TV番組広告登録ツールの刷新',
    role: 'リーダー',
    team: '3名',
    desc: '社内業務ツールを Rails アプリケーションへ刷新するプロジェクトにリーダーとして参画。3名チームのマネジメントに加え、顧客折衝、スケジューリング・スコープ調整、要件定義から設計・開発・テスト(仕様書作成〜実施)・リリースまで全工程を主導しました。初のリーダーポジションでプロジェクトを完遂しています。',
    phases: ['要件定義', '基本設計', '詳細設計', '実装', 'テスト'],
    techs: [
      ['Ruby', 'be'],
      ['Rails', 'be'],
      ['MySQL', 'be'],
      ['RSpec', 'be'],
      ['jQuery', 'fe'],
      ['Ubuntu', 'infra'],
      ['Git', 'infra'],
    ],
  },
  {
    phase: 'ses',
    start: '2018.05', end: '2018.06', durationMonths: 2,
    title: '不動産情報のコンテンツフィルタリングシステム(API)の開発',
    role: '開発メンバー',
    team: '3名',
    desc: 'Ruby on Rails を用いた API 開発および RSpec によるテストコードの作成を担当。本案件で初めて Rails 開発に携わり、Ruby エンジニアとしてのキャリアの起点となりました。',
    phases: ['実装', 'テスト'],
    techs: [
      ['Ruby', 'be'],
      ['Rails', 'be'],
      ['MySQL', 'be'],
      ['RSpec', 'be'],
      ['Ubuntu', 'infra'],
      ['Git', 'infra'],
    ],
  },
  {
    phase: 'ses',
    start: '2018.04', end: '2018.04', durationMonths: 1,
    title: 'イベントの入退場管理アプリケーションのモバイル版の開発',
    role: '開発メンバー',
    team: '2名',
    desc: 'イベント会場向けの入退場管理アプリケーション(モバイル版)の開発に、2名体制のプロジェクトへ途中から参画。React Native を用いたモバイルアプリの実装を担当しました。',
    phases: ['実装'],
    techs: [
      ['React Native', 'fe'],
      ['Windows', 'infra'],
      ['Git', 'infra'],
    ],
  },
  {
    phase: 'ses',
    start: '2015.07', end: '2018.03', durationMonths: 33,
    title: '大手金融システムの開発保守',
    role: '開発＆保守メンバー',
    team: '4〜14名',
    desc: '大手金融機関向け基幹システムの開発および保守に約3年間従事。Java / Oracle / JP1 を用いたバッチ処理やオンライン機能の設計・実装・テストを担当しました。顧客へのヒアリング用資料作成(仕様確認・工数根拠提示)、基本設計書、テスト設計書(単体・IT・ST)の作成を担当し、上流工程から保守運用までの工程に携わりました。',
    phases: ['要件定義', '基本設計', '実装', 'テスト', '保守・運用'],
    techs: [
      ['Java', 'be'],
      ['Oracle', 'be'],
      ['JP1', 'other'],
      ['Eclipse', 'other'],
      ['SVN', 'other'],
      ['Windows', 'infra'],
    ],
  },
];

/* ------------------------------------------------------------------ *
 * 資格(新しい順。flags.showCertifications が false のときは出力されません)
 * ------------------------------------------------------------------ */
export const certifications = [
  { date: '2019.12', name: 'ネットワークスペシャリスト' },
  { date: '2019.06', name: 'データベーススペシャリスト' },
  { date: '2017.11', name: '情報セキュリティマネジメント' },
  { date: '2016.02', name: 'Ruby技術者認定試験 (Gold)' },
  { date: '2015.08', name: 'Ruby技術者認定試験 (Silver)' },
  { date: '2015.06', name: '応用情報技術者' },
  { date: '2015.06', name: 'Oracle Certified Java Programmer, Gold SE7' },
  { date: '2015.03', name: 'Oracle Certified Java Programmer, Silver SE7' },
  { date: '2014.10', name: '基本情報技術者' },
];

export const footer = '© 2026 Hiroki Tomono';
