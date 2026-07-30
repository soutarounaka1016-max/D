import { filterGlossary, glossary } from './glossary.js';

const searchInput = document.querySelector('#search');
const clearButton = document.querySelector('#clear-search');
const resultCount = document.querySelector('#result-count');
const glossaryList = document.querySelector('#glossary-list');
const emptyState = document.querySelector('#empty-state');
const alphabetNav = document.querySelector('#alphabet-nav');

function escapeHtml(value) {
  return String(value)
    .replaceAll('&', '&amp;')
    .replaceAll('<', '&lt;')
    .replaceAll('>', '&gt;')
    .replaceAll('"', '&quot;')
    .replaceAll("'", '&#039;');
}

function renderAlphabet(items) {
  const letters = [...new Set(items.map((item) => item.term.charAt(0).toUpperCase()))];
  alphabetNav.innerHTML = letters
    .map((letter) => `<a href="#group-${letter}" aria-label="${letter}から始まる用語へ">${letter}</a>`)
    .join('');
  alphabetNav.hidden = letters.length === 0;
}

function render(items) {
  resultCount.textContent = `${items.length} / ${glossary.length}語`;
  emptyState.hidden = items.length !== 0;
  glossaryList.hidden = items.length === 0;

  const groups = items.reduce((map, item) => {
    const letter = item.term.charAt(0).toUpperCase();
    if (!map.has(letter)) map.set(letter, []);
    map.get(letter).push(item);
    return map;
  }, new Map());
  glossaryList.innerHTML = [...groups.entries()]
    .map(([letter, terms]) => `
      <section class="letter-group" id="group-${letter}" aria-labelledby="heading-${letter}">
        <div class="letter-heading">
          <h2 id="heading-${letter}">${letter}</h2>
          <span>${terms.length}語</span>
        </div>
        <div class="card-grid">
          ${terms.map((item) => `
            <article class="term-card">
              <div class="term-card__top">
                <div>
                  <h3>${escapeHtml(item.term)}</h3>
                  <p class="reading">${escapeHtml(item.reading)}</p>
                </div>
                <span class="category">${escapeHtml(item.category)}</span>
              </div>
              <p class="summary">${escapeHtml(item.summary)}</p>
              <div class="example">
                <span>たとえば</span>
                <p>${escapeHtml(item.example)}</p>
              </div>
            </article>
          `).join('')}
        </div>
      </section>
    `)
    .join('');

  renderAlphabet(items);
}

function updateSearch() {
  const results = filterGlossary(glossary, searchInput.value);
  clearButton.hidden = searchInput.value.length === 0;
  render(results);
}

searchInput.addEventListener('input', updateSearch);
clearButton.addEventListener('click', () => {
  searchInput.value = '';
  searchInput.focus();
  updateSearch();
});

document.querySelector('#year').textContent = new Date().getFullYear();
render(glossary);
