/**
 * ポートフォリオの唯一の情報源(single source of truth)。
 *
 * このファイルだけを編集して `npm run build` を実行すれば index.html が再生成されます。
 * HTML を直接編集する必要はありません。
 *
 * 内容の出典: 職務経歴書(2026年7月時点)
 */

/* ------------------------------------------------------------------ *
 * 表示トグル(Tweaks)
 * ------------------------------------------------------------------ */
export const flags = {
  /** 制作物セクションを表示する。false にするとセクションとナビ項目の両方が消えます。 */
  showWorks: true,
  /** 資格セクションを表示する。 */
  showCertifications: true,

  // ↓ 公開前に URL / アドレスを入れてから true にしてください。
  //   職務経歴書には電話番号しか記載がなかったため、初期値は false にしています。
  //   (電話番号は公開ページに載せない方針で、意図的に含めていません)
  /** サイドバーの GitHub リンク */
  showGitHub: false,
  /** サイドバーの Zenn リンク */
  showZenn: false,
  /** サイドバーの Email ボタン */
  showEmail: false,
};

/* ------------------------------------------------------------------ *
 * プロフィール
 * ------------------------------------------------------------------ */
export const profile = {
  eyebrow: 'Engineer Portfolio',
  name: '友野 弘樹',
  nameKana: 'ともの ひろき',
  nameEn: 'Hiroki Tomono',
  role: 'フルスタックエンジニア',
  location: '神奈川県',
  /** 顔写真。assets/img/ に置いたファイルへのパス。null ならプレースホルダー表示。 */
  portrait: null,
  portraitAlt: '友野 弘樹のプロフィール写真',
  /** <meta name="description"> に使われます。 */
  description:
    'フルスタックエンジニア 友野 弘樹のポートフォリオ。エンジニア歴10年超、Ruby on Rails を主軸にフロントエンドからインフラまで一貫して対応。自社プロダクト「Mogupick」を代表兼リードエンジニアとして推進しています。',
};

export const links = {
  // 公開前に実際の URL / アドレスに置き換えてください(flags で表示を制御します)。
  github: '',
  zenn: '',
  email: '',
};

/* ------------------------------------------------------------------ *
 * 自己紹介
 * ------------------------------------------------------------------ */
export const about = {
  /** 概要(リード文) */
  summary:
    'エンジニア歴10年超のフルスタックエンジニアです。Ruby on Rails(7年半)を主軸としたバックエンド開発に加え、React / Next.js / Vue.js によるフロントエンド開発、AWS・Terraform を用いたインフラ構築まで一貫して対応できます。金融、流通、教育、マッチングプラットフォームなど多業種のシステム開発に携わり、要件定義からリリース・保守運用まで全工程の経験があります。現在は自社プロダクト「Mogupick」(イベント・キッチンカー向けモバイルオーダープラットフォーム)の企画・開発を代表兼リードエンジニアとして推進しながら、受託開発にも対応しています。',

  /** 自己PR。見出しの色は categories のキーで指定します。 */
  highlights: [
    {
      category: 'be',
      title: 'バックエンドからインフラまで一気通貫の対応力',
      body: 'Rails API の設計・実装を中心に、React / Next.js でのフロントエンド開発、AWS 上でのインフラ構築・Terraform 管理、Stripe を用いた決済機能や Solid Queue による非同期処理基盤の設計など、プロダクト開発に必要な技術領域を幅広くカバーできます。自社プロダクト Mogupick では企画からリリースまでを代表2名体制で担っており、少人数チームでの即戦力として貢献できます。',
    },
    {
      category: 'ai',
      title: 'AI駆動開発による高い生産性',
      body: 'Claude Code を活用した AI 駆動開発を業務に本格導入しており、設計・実装・テストコード作成・リファクタリングの各工程で開発速度と品質の両立を実現しています。新しい技術やツールを積極的に取り入れ、開発プロセスの改善に継続的に取り組んでいます。',
    },
    {
      category: 'fe',
      title: '信頼関係の構築力とプロアクティブな姿勢',
      body: 'これまで参画したすべてのプロジェクトでチームメンバーや顧客との信頼関係の構築に成功しています。常に「どうすれば良くなるか」を考え、他の人が敬遠するタスクも積極的に担当し、チームの課題を自ら発見して改善案を提示してきました。早めのレスポンス、自発的な情報発信、否定から入らないコミュニケーションを心がけ、チーム全体の生産性向上に貢献しています。',
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
  be:    { title: 'バックエンド',     rgb: '20,73,142'  },
  fe:    { title: 'フロントエンド',   rgb: '213,48,101' },
  infra: { title: 'インフラ・その他', rgb: '47,165,156' },
  ai:    { title: 'AI活用',           rgb: '106,43,184' },
  other: { title: 'その他',           rgb: '108,114,120' },
};

/**
 * スキルセット。経験年数は職務経歴書の「主要なスキルサマリー」に準拠。
 *
 *   years … 経験年数。バーの「長さ」になります(1年未満は「◯ヶ月」表示)。
 *           バーは全スキル中の最長年数を 100% とした相対表示です。
 *   level … 習熟度 1〜5。バーの「色の濃さ」になります。
 *
 * ※ level は職務経歴書に記載がないため、経験年数と直近の実務での使用状況から
 *    暫定で設定しています。実感に合わせて調整してください。
 */
export const skillGroups = [
  {
    category: 'be',
    skills: [
      { name: 'Ruby',             years: 9, level: 5 },
      { name: 'Ruby on Rails',    years: 8, level: 5 },
      { name: 'Java',             years: 5, level: 3 },
      { name: 'Spring Framework', years: 2, level: 3 },
    ],
  },
  {
    category: 'fe',
    skills: [
      { name: 'JavaScript',  years: 10,    level: 4 },
      { name: 'React.js',    years: 5,     level: 4 },
      { name: 'jQuery',      years: 2,     level: 3 },
      { name: 'Vue.js',      years: 1,     level: 3 },
      { name: 'React Native', years: 1 / 12, level: 1 },
    ],
  },
  {
    category: 'infra',
    skills: [
      { name: 'AWS',       years: 5,   level: 4 },
      { name: 'BigQuery',  years: 1,   level: 2 },
      { name: 'Terraform', years: 0.5, level: 3 },
    ],
  },
  {
    category: 'ai',
    skills: [
      { name: 'AI駆動開発 (Claude Code)', years: 1, level: 4 },
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
    desc: 'イベント・キッチンカー向けのモバイルオーダープラットフォーム。サービスコンセプトの策定からアーキテクチャ設計、実装、AWS 上のインフラ構築・運用まで全工程を担当しています。',
    tags: ['Rails API', 'Next.js', 'Stripe', 'AWS / Terraform'],
    /** 公開 URL。null ならリンクにならず、カードとして表示されます。 */
    href: 'https://lp.mogupick.com/merchant',

    // ロゴ画像を assets/img/mogupick-logo.svg（または .png）として置き、
    // 下の image のコメントを外してください。ファイルを置くまでは
    // プレースホルダーが表示されます。
    /** 画像。assets/img/ に置いたファイルへのパス。null ならプレースホルダー表示。 */
    image: null,
    // image: 'assets/img/mogupick-logo.svg',
    /** 'cover'（既定・スクリーンショット向け）か 'contain'（ロゴ向け・余白をとって全体を表示）。 */
    imageFit: 'contain',
    /** 画像が未設定のときのプレースホルダー文言。 */
    placeholder: 'ロゴ',
  },
];

/* ------------------------------------------------------------------ *
 * 職務経歴(新しい順)
 *
 * techs の各要素は [表示名, categories のキー]。
 * スキルセットと同じ色でチップが描画されます。
 * ------------------------------------------------------------------ */
export const career = [
  {
    period: '2025.06 – 現在',
    duration: null,
    title: 'イベント・キッチンカー向けモバイルオーダープラットフォームの立ち上げ',
    role: '代表 兼 リードエンジニア',
    team: '2名',
    desc: '自社プロダクト「Mogupick」の企画・設計・開発を推進。バックエンドは Rails API、フロントエンドは Next.js(Vercel デプロイ)、決済は Stripe、非同期処理は Solid Queue、メール配信は Resend で構成しています。AWS 上のインフラを Terraform でコード管理し、GitHub Actions による CI/CD パイプラインと ChatOps による運用自動化を構築。AI駆動開発(Claude Code)を全面的に活用し、少人数チームで高い生産性を実現しています。',
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
    period: '2021.09 – 現在',
    duration: null,
    title: '教育系プラットフォームの開発保守',
    role: '開発メンバー',
    team: '5〜12名',
    desc: '学習管理プラットフォームサービスの開発・保守に4年以上継続して従事(SES 案件として開始後、フリーランス転向後も継続中)。Rails + React / Next.js による SPA 構成のアプリケーションで、機能開発・改修・パフォーマンス改善を担当しています。スクラム体制のもとアジャイル開発を実践し、BigQuery を用いたデータ分析基盤との連携や、AI駆動開発による開発効率の向上にも取り組んでいます。',
    phases: ['実装', 'テスト', '保守・運用'],
    techs: [
      ['Ruby', 'be'],
      ['Rails', 'be'],
      ['MySQL', 'be'],
      ['RSpec', 'be'],
      ['React', 'fe'],
      ['Next.js', 'fe'],
      ['AWS', 'infra'],
      ['BigQuery', 'infra'],
      ['Docker', 'infra'],
      ['Git', 'infra'],
      ['AI駆動開発 (Claude Code)', 'ai'],
    ],
  },
  {
    period: '2023.01 – 2023.12',
    duration: '11ヶ月',
    title: '副業マッチングプラットフォームの新規リプレース、および既存システムの改修',
    role: '開発メンバー',
    team: '5名',
    desc: '副業マッチングサービスの既存システム改修および新規リプレイスに副業として参画。既存システムでは Rails / JavaScript による軽微な修正を中心に、インボイス制度対応などの法制度関連の改修を担当しました。新規リプレイスでは SPA 構成(Rails API + Nuxt.js)での開発に携わり、email / GitHub / Facebook によるマルチプロバイダ認証機能の設計・実装を担当しました。',
    phases: ['実装', 'テスト'],
    techs: [
      ['Ruby', 'be'],
      ['Rails', 'be'],
      ['MySQL', 'be'],
      ['RSpec', 'be'],
      ['JavaScript', 'fe'],
      ['Vue.js', 'fe'],
      ['Docker', 'infra'],
      ['Git', 'infra'],
    ],
  },
  {
    period: '2021.04 – 2021.09',
    duration: '6ヶ月',
    title: 'アプリマーケティングプラットフォームのコア機能改修',
    role: '開発メンバー',
    team: '4名',
    desc: 'アプリマーケティングプラットフォームのカスタマイズ開発(API)およびコア機能の改修に参画。Rails API の機能追加・改修と、Vue.js による SPA 構成の管理画面の改修を担当しました。AWS / Docker 環境での開発・テスト・運用を経験し、フルリモート体制でのチーム開発に従事しました。',
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
    period: '2021.01 – 2021.03',
    duration: '3ヶ月',
    title: 'ビジネスシーンにおける顧客との新たな非対面コミュニケーションツールの新規開発',
    role: 'サブリーダー',
    team: '3〜4名',
    desc: 'SMS 送信をトリガーとしたプッシュ型チャットサービスの新規開発にサブリーダーとして参画。Rails + ActionCable + Vue.js / TypeScript によるリアルタイムチャット機能の設計・実装を担当しました。AWS(EC2 / S3)上への本番環境構築、Docker 導入、Sentry → Slack 通知による監視体制の整備など、インフラ・運用面も含めた包括的な開発経験を積みました。',
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
    period: '2018.10 – 2020.12',
    duration: '26ヶ月',
    title: 'イベント用品のレンタル・販売サービスの業務システムのリプレース',
    role: '開発メンバー',
    team: '3〜5名',
    desc: 'レンタル業務販売管理システムの刷新プロジェクトに立ち上げ当初から約2年間参画。Java / Spring Framework を用いたバックエンド開発を中心に、システム方式設計やシステム基盤構築のサポートを担当しました。生産性向上の取り組みとして、Excel 管理の DB 設計書から Repository / Entity ファイルを自動生成する VBA マクロを開発。自身の開発業務に加え、他メンバーの技術サポートや遅延タスクの巻き取りなど、チーム全体の進捗を支える役割も担いました。',
    phases: ['基本設計', '実装', 'テスト'],
    techs: [
      ['Java', 'be'],
      ['Spring', 'be'],
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
    period: '2018.07 – 2018.09',
    duration: '2ヶ月',
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
    period: '2018.05 – 2018.06',
    duration: '2ヶ月',
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
    period: '2018.04',
    duration: '1ヶ月',
    title: 'イベントの入退場管理アプリケーションのモバイル版の開発',
    role: '開発メンバー',
    team: '2名',
    desc: 'イベント会場向けの入退場管理アプリケーション(モバイル版)の開発に参画。React Native を用いたモバイルアプリの実装を担当しました。短期間・少人数のプロジェクトで、途中参画ながらスピーディに実装を完了しました。',
    phases: ['実装'],
    techs: [
      ['React Native', 'fe'],
      ['Windows', 'infra'],
      ['Git', 'infra'],
    ],
  },
  {
    period: '2015.07 – 2018.03',
    duration: '33ヶ月',
    title: '大手金融システムの開発保守',
    role: '開発＆保守メンバー',
    team: '4〜14名',
    desc: '大手金融機関向け基幹システムの開発および保守に約3年間従事。Java / Oracle / JP1 を用いたバッチ処理やオンライン機能の設計・実装・テストを担当しました。顧客へのヒアリング用資料作成(仕様確認・工数根拠提示)、基本設計書、テスト設計書(単体・IT・ST)の作成を経験し、上流工程から保守運用まで一通りの開発プロセスを習得しました。チーム規模は最大14名で、大規模プロジェクトにおけるチーム開発の進め方を身につけました。',
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
