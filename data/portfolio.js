/**
 * ポートフォリオの唯一の情報源(single source of truth)。
 *
 * このファイルだけを編集して `npm run build` を実行すれば index.html が再生成されます。
 * HTML を直接編集する必要はありません。
 */

/* ------------------------------------------------------------------ *
 * 表示トグル(Tweaks)
 * ------------------------------------------------------------------ */
export const flags = {
  /** 制作物セクションを表示する。false にするとセクションとナビ項目の両方が消えます。 */
  showWorks: true,
  /** サイドバーの GitHub リンク */
  showGitHub: true,
  /** サイドバーの Zenn リンク */
  showZenn: true,
  /** サイドバーの Email ボタン */
  showEmail: true,
};

/* ------------------------------------------------------------------ *
 * プロフィール
 * ------------------------------------------------------------------ */
export const profile = {
  eyebrow: 'Engineer Portfolio',
  name: '早瀬 湊',
  nameEn: 'Hayase Minato',
  role: 'バックエンドエンジニア',
  location: '神奈川県茅ヶ崎市',
  /** 顔写真。assets/img/ に置いたファイルへのパス。null ならプレースホルダー表示。 */
  portrait: null,
  portraitAlt: '早瀬 湊のプロフィール写真',
  /** <meta name="description"> に使われます。 */
  description:
    'バックエンドエンジニア 早瀬 湊のポートフォリオ。Ruby on Rails と AWS を中心に、要件整理から設計・実装・運用までを一貫して担当しています。',
};

export const links = {
  github: 'https://github.com/',
  zenn: 'https://zenn.dev/',
  email: 'hello@example.com',
};

/* ------------------------------------------------------------------ *
 * 自己紹介
 * ------------------------------------------------------------------ */
export const about =
  'Web受託開発を経て、現在は自社サービスのバックエンド開発を担当しています。Ruby on RailsとAWSでの開発経験が長く、近年は業務へのAI活用にも取り組んでいます。要件の整理から設計・実装・運用まで一貫して担当できることが強みです。新しい技術を追うことよりも、確実に動き続けるものを丁寧につくることを大切にしています。';

/* ------------------------------------------------------------------ *
 * スキルカテゴリ
 *
 * ここで定義した色が、スキルセットのバー・年数の数字・職務経歴の
 * 使用技術チップで共通して使われます。
 * ------------------------------------------------------------------ */
export const categories = {
  be:    { title: 'バックエンド',     rgb: '20,73,142'  },
  fe:    { title: 'フロントエンド',   rgb: '213,48,101' },
  infra: { title: 'インフラ・その他', rgb: '47,165,156' },
  ai:    { title: 'AI活用',           rgb: '106,43,184' },
  other: { title: 'その他',           rgb: '108,114,120' },
};

/**
 * スキルセット。
 *
 *   years … 経験年数。バーの「長さ」になります(0年=20%, 8年以上=100%)。
 *   level … 習熟度 1〜5。バーの「色の濃さ」になります。
 *
 * `category` は categories のキー。スキルセットに並べる順序はこの配列の順です。
 */
export const skillGroups = [
  {
    category: 'be',
    skills: [
      { name: 'Ruby / Rails',  years: 8, level: 5 },
      { name: 'PostgreSQL',    years: 8, level: 4 },
      { name: 'Redis',         years: 5, level: 3 },
      { name: 'Python',        years: 3, level: 3 },
    ],
  },
  {
    category: 'fe',
    skills: [
      { name: 'TypeScript / React', years: 4, level: 3 },
      { name: 'Hotwire',            years: 3, level: 4 },
      { name: 'Tailwind CSS',       years: 3, level: 3 },
    ],
  },
  {
    category: 'infra',
    skills: [
      { name: 'AWS',          years: 6, level: 4 },
      { name: 'Docker / CI',  years: 5, level: 4 },
      { name: 'Terraform',    years: 3, level: 3 },
      { name: 'Datadog',      years: 2, level: 2 },
    ],
  },
  {
    category: 'ai',
    skills: [
      { name: 'LLM API連携',        years: 2, level: 3 },
      { name: 'RAG構築',            years: 1, level: 2 },
      { name: 'AIコーディング支援', years: 2, level: 3 },
    ],
  },
];

/* ------------------------------------------------------------------ *
 * 制作物(flags.showWorks が false のときは出力されません)
 * ------------------------------------------------------------------ */
export const works = [
  {
    title: 'シフト管理SaaS',
    role: '設計・開発・運用',
    /** 役職バッジの色。categories のキー、または任意の CSS 色。 */
    roleCategory: 'be',
    desc: '飲食チェーン向けのシフト作成・勤怠管理サービス。設計からAWS上の運用まで一貫して担当しました。',
    tags: ['Rails', 'PostgreSQL', 'AWS'],
    href: '#',
    /** スクリーンショット。assets/img/ に置いたファイルへのパス。null ならプレースホルダー表示。 */
    image: null,
  },
  {
    title: '順番待ち受付システム',
    role: '開発',
    roleCategory: 'infra',
    desc: 'クリニック向けのWeb受付・呼び出しシステム。Hotwireによる画面のリアルタイム更新を実装しました。',
    tags: ['Rails', 'Hotwire', 'Redis'],
    href: '#',
    image: null,
  },
  {
    title: '議事録要約ツール',
    role: '個人開発',
    roleCategory: 'ai',
    desc: '社内向けの会議録音の文字起こし・要約ツール。LLM APIの精度検証から運用設計までを担当しました。',
    tags: ['Python', 'LLM API', 'GCP'],
    href: '#',
    image: null,
  },
];

/* ------------------------------------------------------------------ *
 * 職務経歴
 *
 * techs の各要素は [表示名, categories のキー]。
 * スキルセットと同じ色でチップが描画されます。
 * ------------------------------------------------------------------ */
export const career = [
  {
    period: '2022 – 現在',
    title: '自社サービス企業 / バックエンドエンジニア',
    desc: 'BtoB SaaSのバックエンド開発を担当。API設計、パフォーマンス改善、AI機能の導入検証を推進しています。',
    techs: [
      ['Rails', 'be'],
      ['PostgreSQL', 'be'],
      ['TypeScript / React', 'fe'],
      ['AWS', 'infra'],
      ['Datadog', 'infra'],
      ['LLM API連携', 'ai'],
      ['RAG構築', 'ai'],
    ],
  },
  {
    period: '2018 – 2022',
    title: 'Web受託開発会社 / エンジニア',
    desc: 'Ruby on Railsを中心とした受託開発に従事。要件定義から保守まで、10件以上の案件を担当しました。',
    techs: [
      ['Rails', 'be'],
      ['Redis', 'be'],
      ['Hotwire', 'fe'],
      ['AWS', 'infra'],
      ['Terraform', 'infra'],
      ['Docker / CI', 'infra'],
    ],
  },
  {
    period: '2017',
    title: 'AWS認定ソリューションアーキテクト 取得',
    desc: 'インフラ設計の体系的な知識を習得し、以降の案件でクラウド設計を担当するようになりました。',
    techs: [['AWS', 'infra']],
  },
  {
    period: '2015 – 2018',
    title: 'SIer / システムエンジニア',
    desc: 'Javaによる業務システム開発からキャリアを開始。基本設計・詳細設計・テストの基礎を学びました。',
    techs: [
      ['Java', 'other'],
      ['Oracle DB', 'other'],
    ],
  },
];

export const footer = '© 2026 Hayase Minato';
