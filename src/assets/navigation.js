const siteHeader = document.querySelector('.site-header');
const menuToggle = document.querySelector('.menu-toggle');
if (siteHeader && menuToggle) {
  siteHeader.classList.add('navigation-ready');
  menuToggle.hidden = false;
  const closeMenu = () => {
    siteHeader.classList.remove('menu-open');
    menuToggle.setAttribute('aria-expanded', 'false');
    menuToggle.textContent = 'Menu';
  };
  menuToggle.addEventListener('click', () => {
    const open = siteHeader.classList.toggle('menu-open');
    menuToggle.setAttribute('aria-expanded', String(open));
    menuToggle.textContent = open ? 'Close' : 'Menu';
  });
  siteHeader.addEventListener('keydown', event => {
    if (event.key === 'Escape' && siteHeader.classList.contains('menu-open')) {
      closeMenu();
      menuToggle.focus();
    }
  });
  siteHeader.querySelectorAll('.site-navigation a').forEach(link => link.addEventListener('click', closeMenu));
}

const themeToggle = document.querySelector('.theme-toggle');
const themeRoot = document.documentElement;

if (themeToggle) {
  const label = themeToggle.querySelector('.theme-toggle-label');
  const setTheme = theme => {
    const dark = theme === 'dark';
    themeRoot.dataset.theme = dark ? 'dark' : 'light';
    themeToggle.setAttribute('aria-pressed', String(dark));
    themeToggle.setAttribute('aria-label', dark ? 'Switch to light mode' : 'Switch to dark mode');
    if (label) label.textContent = dark ? 'Light mode' : 'Dark mode';
  };

  let savedTheme = 'dark';
  try { savedTheme = localStorage.getItem('cs-theory-theme') === 'light' ? 'light' : 'dark'; } catch (e) {}
  setTheme(savedTheme);
  themeToggle.addEventListener('click', () => {
    const nextTheme = themeRoot.dataset.theme === 'dark' ? 'light' : 'dark';
    try { localStorage.setItem('cs-theory-theme', nextTheme); } catch (e) {}
    setTheme(nextTheme);
  });
}

const batchSize = 5;
const renderPastEventPagination = ({ reset = false } = {}) => {
  const pastList = document.querySelector('#past-events-list');
  const showMore = document.querySelector('#show-more');
  const archiveStatus = document.querySelector('#archive-status');
  const archiveFooter = document.querySelector('.archive-footer');
  if (!pastList || !showMore || !archiveStatus || !archiveFooter) return;

  const entries = [...pastList.querySelectorAll('article')];
  if (reset || !pastList.dataset.visibleCount) pastList.dataset.visibleCount = String(batchSize);
  const visibleCount = Number(pastList.dataset.visibleCount);
  entries.forEach((entry, index) => { entry.hidden = index >= visibleCount; });
  const shown = Math.min(visibleCount, entries.length);
  archiveStatus.textContent = `Showing ${shown} of ${entries.length} ${entries.length === 1 ? 'entry' : 'entries'}`;
  showMore.hidden = shown >= entries.length;
  archiveFooter.hidden = entries.length === 0;
};

const showMore = document.querySelector('#show-more');
if (showMore) {
  showMore.addEventListener('click', () => {
    const pastList = document.querySelector('#past-events-list');
    if (!pastList) return;
    const visibleCount = Number(pastList.dataset.visibleCount || batchSize);
    const firstNewEntry = pastList.querySelectorAll('article')[visibleCount]?.querySelector('a');
    pastList.dataset.visibleCount = String(visibleCount + batchSize);
    renderPastEventPagination();
    // Continue keyboard reading at the first newly revealed title.
    firstNewEntry?.focus({ preventScroll: true });
  });
  renderPastEventPagination({ reset: true });
  document.addEventListener('content:updated', () => renderPastEventPagination({ reset: true }));
}
