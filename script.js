// Utilitaires DOM
const $ = (sel, ctx=document) => ctx.querySelector(sel);


// Année dynamique dans le footer
(function setYear(){
const y = new Date().getFullYear();
const el = document.getElementById('year');
if (el) el.textContent = y;
})();


// Menu mobile
(function mobileNav(){
const btn = $('.nav-toggle');
const menu = $('#site-menu');
if (!btn || !menu) return;
btn.addEventListener('click', () => {
const open = menu.classList.toggle('open');
btn.setAttribute('aria-expanded', String(open));
});
})();


// Élévation du header au scroll
(function elevateHeader(){
const header = document.querySelector('.site-header');
if (!header) return;
const onScroll = () => {
const y = window.scrollY || document.documentElement.scrollTop;
header.style.boxShadow = y > 10 ? '0 8px 24px rgba(0,0,0,.25)' : 'none';
};
window.addEventListener('scroll', onScroll, {passive:true});
onScroll();
})();


// Scroll doux interne
(function smoothScroll(){
document.addEventListener('click', (e) => {
})();
