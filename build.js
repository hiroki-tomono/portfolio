#!/usr/bin/env node
/**
 * data/portfolio.js から index.html を生成する。
 *
 *   node build.js        （= npm run build）
 *
 * 依存パッケージなし。生成された index.html は完全な静的 HTML なので、
 * そのまま GitHub Pages などに置けます（実行時に JS は不要）。
 */

import { writeFileSync } from 'node:fs';
import { fileURLToPath } from 'node:url';
import { dirname, join } from 'node:path';

import {
  flags,
  profile,
  links,
  about,
  categories,
  skillGroups,
  works,
  career,
  footer,
} from './data/portfolio.js';

const ROOT = dirname(fileURLToPath(import.meta.url));

/* ------------------------------------------------------------------ *
 * ヘルパー
 * ------------------------------------------------------------------ */

/** HTML テキスト / 属性値のエスケープ。 */
const esc = (value) =>
  String(value)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#39;');

/** カテゴリキーを解決する。未知のキーは other にフォールバック。 */
const cat = (key) => categories[key] ?? categories.other;

/**
 * バーの長さ。経験年数 0年 = 20%、8年以上 = 100%。
 * 0年でも「そこにバーがある」ことが分かるよう 20% の下駄を履かせている。
 */
const barWidth = (years) => Math.round(Math.min(20 + (years / 8) * 80, 100)) + '%';

/** バーの濃さ。習熟度 1〜5 に対応する不透明度。 */
const LEVEL_ALPHA = [0.12, 0.25, 0.45, 0.7, 1];
const barAlpha = (level) => LEVEL_ALPHA[Math.min(Math.max(level, 1), 5) - 1];

/** 空要素を落として改行で連結する。 */
const lines = (...parts) => parts.filter(Boolean).join('\n');

/**
 * 画像スロット。src があれば <img>、なければ点線のプレースホルダー。
 * shape は 'circle' | 'rounded'。
 */
const imgSlot = ({ src, alt, placeholder, shape, indent = '' }) => {
  const cls = `img-slot img-slot--${shape}`;
  if (src) {
    return `${indent}<div class="${cls}"><img src="${esc(src)}" alt="${esc(alt ?? '')}" loading="lazy" decoding="async"></div>`;
  }
  return lines(
    `${indent}<div class="${cls}" role="img" aria-label="${esc(placeholder)}">`,
    `${indent}  <span class="img-slot__ring" aria-hidden="true"></span>`,
    `${indent}  <span class="img-slot__caption" aria-hidden="true">${esc(placeholder)}</span>`,
    `${indent}</div>`
  );
};

/* ------------------------------------------------------------------ *
 * パーツ
 * ------------------------------------------------------------------ */

const renderNav = () =>
  lines(
    '        <nav class="sidebar__nav" aria-label="ページ内ナビゲーション">',
    '          <a href="#about">自己紹介</a>',
    '          <a href="#skills">スキルセット</a>',
    flags.showWorks ? '          <a href="#works">制作物</a>' : null,
    '          <a href="#career">職務経歴</a>',
    '        </nav>'
  );

const renderLinks = () => {
  const items = lines(
    flags.showGitHub
      ? `          <a class="pill pill--outline" href="${esc(links.github)}" rel="noopener noreferrer" target="_blank">GitHub</a>`
      : null,
    flags.showZenn
      ? `          <a class="pill pill--outline" href="${esc(links.zenn)}" rel="noopener noreferrer" target="_blank">Zenn</a>`
      : null,
    flags.showEmail
      ? `          <a class="pill pill--solid" href="mailto:${esc(links.email)}">Email</a>`
      : null
  );
  if (!items) return null;
  return lines('        <div class="sidebar__links">', items, '        </div>');
};

const renderSidebar = () =>
  lines(
    '      <aside class="card sidebar">',
    '        <div class="sidebar__portrait">',
    imgSlot({
      src: profile.portrait,
      alt: profile.portraitAlt,
      placeholder: '顔写真',
      shape: 'circle',
      indent: '          ',
    }),
    '        </div>',
    '        <div class="sidebar__identity">',
    `          <p class="sidebar__eyebrow">${esc(profile.eyebrow)}</p>`,
    `          <h1 class="sidebar__name">${esc(profile.name)}</h1>`,
    '          <div class="sidebar__rule" aria-hidden="true"></div>',
    `          <p class="sidebar__role">${esc(profile.role)}</p>`,
    `          <p class="sidebar__location">${esc(profile.location)}</p>`,
    '        </div>',
    renderNav(),
    renderLinks(),
    '      </aside>'
  );

const renderAbout = () =>
  lines(
    '        <section class="card section" id="about" aria-labelledby="about-title">',
    '          <p class="section__eyebrow">About</p>',
    '          <h2 class="section__title" id="about-title">自己紹介</h2>',
    `          <p class="about__body">${esc(about)}</p>`,
    '        </section>'
  );

const renderSkill = (skill, group) =>
  lines(
    '              <div class="skill">',
    `                <span class="skill__name">${esc(skill.name)}</span>`,
    // バーの長さ=経験年数、色の濃さ=習熟度。数値は年数の欄で読めるので装飾扱い。
    '                <div class="skill__track" aria-hidden="true">',
    `                  <div class="skill__bar" style="--bar-width: ${barWidth(skill.years)}; --bar-color: rgba(${group.rgb}, ${barAlpha(skill.level)});"></div>`,
    '                </div>',
    '                <span class="skill__years">',
    `                  <span class="skill__years-num">${esc(skill.years)}</span><span class="skill__years-unit">年</span>`,
    '                </span>',
    '              </div>'
  );

const renderSkills = () => {
  const groups = skillGroups.map((g) => {
    const c = cat(g.category);
    return lines(
      `            <div class="skill-group" style="--cat-color: rgb(${c.rgb});">`,
      '              <div class="skill-group__head">',
      '                <span class="skill-group__dot" aria-hidden="true"></span>',
      `                <h3 class="skill-group__title">${esc(c.title)}</h3>`,
      '              </div>',
      '              <div class="skill-group__list">',
      g.skills.map((s) => renderSkill(s, c)).join('\n'),
      '              </div>',
      '            </div>'
    );
  });

  return lines(
    '        <section class="card section" id="skills" aria-labelledby="skills-title">',
    '          <p class="section__eyebrow">Skills</p>',
    '          <h2 class="section__title" id="skills-title">スキルセット</h2>',
    '          <div class="skills">',
    groups.join('\n'),
    '          </div>',
    '        </section>'
  );
};

const renderWorks = () => {
  if (!flags.showWorks) return null;

  const cards = works.map((w) => {
    const roleColor = categories[w.roleCategory]
      ? `rgb(${categories[w.roleCategory].rgb})`
      : w.roleCategory;
    return lines(
      `            <a class="work" href="${esc(w.href)}">`,
      '              <div class="work__thumb">',
      imgSlot({
        src: w.image,
        alt: `${w.title}のスクリーンショット`,
        placeholder: 'スクリーンショット',
        shape: 'rounded',
        indent: '                ',
      }),
      '              </div>',
      '              <div class="work__body">',
      '                <div class="work__head">',
      `                  <h3 class="work__title">${esc(w.title)}</h3>`,
      `                  <span class="work__role" style="--role-color: ${esc(roleColor)};">${esc(w.role)}</span>`,
      '                </div>',
      `                <p class="work__desc">${esc(w.desc)}</p>`,
      '                <div class="work__tags">',
      w.tags.map((t) => `                  <span class="tag">${esc(t)}</span>`).join('\n'),
      '                </div>',
      '              </div>',
      '            </a>'
    );
  });

  return lines(
    '        <section class="card section" id="works" aria-labelledby="works-title">',
    '          <p class="section__eyebrow">Works</p>',
    '          <h2 class="section__title" id="works-title">制作物</h2>',
    '          <div class="works">',
    cards.join('\n'),
    '          </div>',
    '        </section>'
  );
};

const renderCareer = () => {
  const entries = career.map((c) =>
    lines(
      '            <div class="career__entry">',
      `              <div class="career__period">${esc(c.period)}</div>`,
      '              <div>',
      `                <h3 class="career__title">${esc(c.title)}</h3>`,
      `                <p class="career__desc">${esc(c.desc)}</p>`,
      '                <div class="career__techs">',
      '                  <span class="career__techs-label">使用技術</span>',
      c.techs
        .map(
          ([name, key]) =>
            `                  <span class="chip" style="--cat-rgb: ${cat(key).rgb};">${esc(name)}</span>`
        )
        .join('\n'),
      '                </div>',
      '              </div>',
      '            </div>'
    )
  );

  return lines(
    '        <section class="card section" id="career" aria-labelledby="career-title">',
    '          <p class="section__eyebrow">Career</p>',
    '          <h2 class="section__title" id="career-title">職務経歴</h2>',
    '          <div class="career">',
    entries.join('\n'),
    '          </div>',
    '        </section>'
  );
};

/** 検索エンジン向けの構造化データ。 */
const renderJsonLd = () => {
  const sameAs = [
    flags.showGitHub ? links.github : null,
    flags.showZenn ? links.zenn : null,
  ].filter(Boolean);

  const person = {
    '@context': 'https://schema.org',
    '@type': 'Person',
    name: profile.name,
    jobTitle: profile.role,
    description: profile.description,
    address: { '@type': 'PostalAddress', addressLocality: profile.location },
    knowsAbout: skillGroups.flatMap((g) => g.skills.map((s) => s.name)),
    ...(sameAs.length ? { sameAs } : {}),
    ...(flags.showEmail ? { email: `mailto:${links.email}` } : {}),
  };

  // </script> がデータに混入しても壊れないようにエスケープする。
  const json = JSON.stringify(person, null, 2).replace(/</g, '\\u003c');
  return lines('  <script type="application/ld+json">', json, '  </script>');
};

/* ------------------------------------------------------------------ *
 * ページ全体
 * ------------------------------------------------------------------ */

const html = lines(
  '<!DOCTYPE html>',
  '<html lang="ja">',
  '<head>',
  '  <meta charset="utf-8">',
  '  <meta name="viewport" content="width=device-width, initial-scale=1">',
  `  <title>${esc(profile.name)} | ${esc(profile.role)}</title>`,
  `  <meta name="description" content="${esc(profile.description)}">`,
  `  <meta property="og:title" content="${esc(profile.name)} | ${esc(profile.role)}">`,
  `  <meta property="og:description" content="${esc(profile.description)}">`,
  '  <meta property="og:type" content="profile">',
  '  <link rel="preconnect" href="https://fonts.googleapis.com">',
  '  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>',
  '  <link rel="stylesheet" href="./assets/css/style.css">',
  renderJsonLd(),
  '</head>',
  '<body>',
  '  <!-- このファイルは data/portfolio.js から生成されています。直接編集せず、',
  '       データを書き換えて `npm run build` を実行してください。 -->',
  '  <div class="page">',
  renderSidebar(),
  '      <main class="main">',
  renderAbout(),
  renderSkills(),
  renderWorks(),
  renderCareer(),
  `        <p class="footer">${esc(footer)}</p>`,
  '      </main>',
  '  </div>',
  '</body>',
  '</html>',
  ''
);

const out = join(ROOT, 'index.html');
writeFileSync(out, html, 'utf8');
console.log(`built ${out} (${html.length.toLocaleString()} bytes)`);
