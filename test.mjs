import assert from 'node:assert/strict';
import test from 'node:test';
import { filterGlossary, glossary, normalizeText } from './glossary.js';

test('contains exactly 30 terms', () => {
  assert.equal(glossary.length, 30);
});

test('terms are alphabetically sorted', () => {
  const terms = glossary.map(({ term }) => term);
  const sorted = [...terms].sort((a, b) => a.localeCompare(b, 'en', { sensitivity: 'base' }));
  assert.deepEqual(terms, sorted);
});

test('terms are unique', () => {
  assert.equal(new Set(glossary.map(({ term }) => term.toLowerCase())).size, 30);
});

test('every term has required beginner fields', () => {
  for (const item of glossary) {
    for (const field of ['term', 'reading', 'summary', 'example', 'category']) {
      assert.equal(typeof item[field], 'string');
      assert.ok(item[field].trim().length > 0, `${item.term}.${field} is empty`);
    }
  }
});

test('searches English case-insensitively', () => {
  const results = filterGlossary(glossary, 'BRANCH').map(({ term }) => term);
  assert.ok(results.includes('Branch'));
  assert.ok(results.includes('Default branch'));
  assert.ok(results.length >= 2);
});

test('searches Japanese descriptions and readings', () => {
  assert.ok(filterGlossary(glossary, '公開').some(({ term }) => term === 'Deploy'));
  assert.deepEqual(filterGlossary(glossary, 'プルリクエスト').map(({ term }) => term), ['Pull request']);
});

test('supports multiple search tokens', () => {
  const results = filterGlossary(glossary, 'main 統合').map(({ term }) => term);
  assert.ok(results.includes('Merge'));
  assert.ok(results.every((term) => ['Default branch', 'Merge', 'Pull request'].includes(term)));
});

test('normalizes full-width text and spaces', () => {
  assert.equal(normalizeText('  ＧｉｔＨｕｂ　Ｐａｇｅｓ  '), 'github pages');
});
