const viewSections = [...document.querySelectorAll('[data-view-section]')];
const defaultViewTarget = {
  home: 'top',
  systems: 'systems',
  hexagrams: 'hexagrams',
  special: 'talisman-atlas',
  folk: 'survey-workbench',
  tools: 'tools',
  library: 'library',
  practice: 'practice'
};

function viewForTarget(target) {
  return target?.closest('[data-view-section]')?.dataset.viewSection || 'home';
}

function activateView(view, targetId = defaultViewTarget[view] || 'top', options = {}) {
  viewSections.forEach(section => {
    section.toggleAttribute('data-view-active', section.dataset.viewSection === view);
  });

  document.querySelectorAll('[data-view-target]').forEach(button => {
    button.classList.toggle('active', button.dataset.viewTarget === view);
  });

  document.querySelectorAll('.desktop-nav a').forEach(link => {
    const target = document.querySelector(link.getAttribute('href'));
    link.classList.toggle('active', viewForTarget(target) === view);
  });

  const target = document.getElementById(targetId) || document.getElementById(defaultViewTarget[view]);
  if (options.updateHash !== false) history.pushState({ view }, '', `#${targetId}`);

  requestAnimationFrame(() => {
    if (target) target.scrollIntoView({ behavior: options.instant ? 'auto' : 'smooth', block: 'start' });
    else window.scrollTo({ top: 0, behavior: options.instant ? 'auto' : 'smooth' });
  });
}

document.querySelectorAll('[data-view-target]').forEach(button => {
  button.addEventListener('click', () => activateView(button.dataset.viewTarget));
});

document.querySelectorAll('a[href^="#"]').forEach(link => {
  link.addEventListener('click', event => {
    const id = link.getAttribute('href').slice(1) || 'top';
    const target = document.getElementById(id);
    if (!target) return;
    event.preventDefault();
    activateView(viewForTarget(target), id);
  });
});

function activateFromHash() {
  const id = location.hash.slice(1) || 'top';
  const target = document.getElementById(id);
  activateView(viewForTarget(target), id, { updateHash: false, instant: true });
}

window.addEventListener('popstate', activateFromHash);
activateFromHash();
