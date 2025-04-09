
function setLang(lang) {
  document.querySelectorAll('[data-en]').forEach(el => {
    el.textContent = el.getAttribute('data-' + lang);
  });
}
window.onload = () => setLang('en');
