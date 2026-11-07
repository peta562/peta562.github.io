document.querySelectorAll('[data-filter]').forEach(button => {
 button.addEventListener('click', () => {
  document.querySelectorAll('[data-filter]').forEach(item => { const selected = item === button; item.classList.toggle('active', selected); item.setAttribute('aria-pressed', String(selected)); });
  document.querySelectorAll('[data-category]').forEach(card => { card.hidden = button.dataset.filter !== 'all' && card.dataset.category !== button.dataset.filter; });
 });
});
