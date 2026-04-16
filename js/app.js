// ─────────────────────────────────────────────────────────────────────────────
// js/app.js  —  Rendering + all interactivity
// Depends on: products.js (data) and assets/images.js (IMGS)
// ─────────────────────────────────────────────────────────────────────────────

const CONTACT = {
  email: 'lukas@ep-factory.com',
  wa:    '447926592081',
};

// ── DOM helpers ───────────────────────────────────────────────────────────────
const $ = (sel, ctx = document) => ctx.querySelector(sel);
const $$ = (sel, ctx = document) => [...ctx.querySelectorAll(sel)];

function el(tag, attrs = {}, ...children) {
  const node = document.createElement(tag);
  for (const [k, v] of Object.entries(attrs)) {
    if (k === 'html') node.innerHTML = v;
    else if (k === 'class') node.className = v;
    else node.setAttribute(k, v);
  }
  children.forEach(c => c && node.append(typeof c === 'string' ? document.createTextNode(c) : c));
  return node;
}

// ── Badge builder ─────────────────────────────────────────────────────────────
function renderBadges(badges) {
  return badges.map(b => el('span', { class: `badge ${b.cls || ''}` }, b.text));
}

// ── Bar card (with ingredient toggle) ────────────────────────────────────────
let _uid = 0;
function renderBarCard(product) {
  const uid = ++_uid;
  const panelId = `ing-panel-${uid}`;

  const card = el('div', { class: 'card' });

  // Image with skeleton loader
  const imgWrap = el('div', { class: `card-img ${product.imgCls || ''}` });
  const img = el('img', { src: IMGS[product.imgKey], alt: product.alt, loading: 'lazy' });
  img.addEventListener('load', () => imgWrap.classList.add('img-loaded'));
  imgWrap.append(img);
  card.append(imgWrap);

  // Body
  const body = el('div', { class: 'card-body' });

  const meta = el('div', { class: 'card-meta' });
  renderBadges(product.badges).forEach(b => meta.append(b));
  body.append(meta);

  body.append(el('h3', { html: product.title }));
  body.append(el('p', { class: 'card-desc' }, product.desc));

  // Toggle button
  const label = el('span', { class: 'ing-label' }, product.btnLabel);
  const btn   = el('button', { class: 'ing-toggle', 'data-panel-id': panelId });
  btn.dataset.openLabel = product.btnLabel;
  btn.onclick = () => toggleIng(btn);
  btn.append(label);
  body.append(btn);

  // Panel
  const inner = el('div', { class: 'ing-inner', html: product.ingredients });
  const ctaBtn = el('a', {
    class: 'ing-wholesale-cta',
    href: `https://wa.me/${CONTACT.wa}?text=${encodeURIComponent(`Hi Lukas, I'd like to get wholesale specs for: ${product.alt}`)}`,
    target: '_blank',
  }, '\uD83D\uDCCB View Wholesale Specs');
  const panel = el('div', { class: 'ing-panel', id: panelId });
  panel.append(inner, ctaBtn);
  body.append(panel);

  card.append(body);
  return card;
}

// ── Pouch card (toggle with bullets + wholesale CTA) ─────────────────────────
function renderPouchCard(product) {
  const uid = ++_uid;
  const panelId = `ing-panel-${uid}`;

  const card = el('div', { class: 'card' });

  const imgWrap = el('div', { class: 'card-img pouch-photo' });
  const img = el('img', { src: IMGS[product.imgKey], alt: product.alt, loading: 'lazy' });
  img.addEventListener('load', () => imgWrap.classList.add('img-loaded'));
  imgWrap.append(img);
  card.append(imgWrap);

  const body = el('div', { class: 'card-body' });

  const meta = el('div', { class: 'card-meta' });
  renderBadges(product.badges).forEach(b => meta.append(b));
  body.append(meta);

  body.append(el('h3', { html: product.title }));
  body.append(el('p', { class: 'card-desc', html: product.desc }));

  // Toggle button
  const label = el('span', { class: 'ing-label' }, 'View Details');
  const btn   = el('button', { class: 'ing-toggle', 'data-panel-id': panelId });
  btn.dataset.openLabel = 'View Details';
  btn.onclick = () => toggleIng(btn);
  btn.append(label);
  body.append(btn);

  // Panel with bullets + full product info + CTA
  const inner = el('div', { class: 'ing-inner' });

  // Highlights
  const ul = el('ul', { class: 'card-bullets' });
  product.bullets.forEach(b => ul.append(el('li', {}, b)));
  inner.append(ul);

  // Ingredients
  if (product.ingredients) {
    inner.append(el('p', { class: 'ing-section-head' }, 'Ingredients'));
    inner.append(el('p', { class: 'ing-text', html: product.ingredients }));
  }

  // Allergen note
  if (product.allergens) {
    inner.append(el('p', { class: 'ing-allergen', html: product.allergens }));
  }

  // Nutrition table
  if (product.nutrition) {
    const n = product.nutrition;
    inner.append(el('p', { class: 'ing-section-head' }, 'Nutrition (per 100g)'));
    inner.insertAdjacentHTML('beforeend', `
      <div class="nutri-table">
        <div class="nutri-row"><span>Energy</span><span>${n.energy}</span></div>
        <div class="nutri-row"><span>Fat</span><span>${n.fat}</span></div>
        <div class="nutri-row nutri-sub"><span>of which saturates</span><span>${n.saturates}</span></div>
        <div class="nutri-row"><span>Carbohydrate</span><span>${n.carbs}</span></div>
        <div class="nutri-row nutri-sub"><span>of which sugars</span><span>${n.sugars}</span></div>
        <div class="nutri-row"><span>Fibre</span><span>${n.fibre}</span></div>
        <div class="nutri-row"><span>Protein</span><span>${n.protein}</span></div>
        <div class="nutri-row"><span>Salt</span><span>${n.salt}</span></div>
      </div>
    `);
  }

  const ctaBtn = el('a', {
    class: 'ing-wholesale-cta',
    href: `https://wa.me/${CONTACT.wa}?text=${encodeURIComponent(`Hi Lukas, I'd like to get wholesale specs for: ${product.alt}`)}`,
    target: '_blank',
  }, '\uD83D\uDCCB View Wholesale Specs');

  const panel = el('div', { class: 'ing-panel', id: panelId });
  panel.append(inner, ctaBtn);
  body.append(panel);

  card.append(body);
  return card;
}

// ── Ingredient toggle ─────────────────────────────────────────────────────────
function toggleIng(btn) {
  const panel = document.getElementById(btn.dataset.panelId);
  const isOpen = panel.classList.contains('open');

  if (!isOpen) {
    panel.style.maxHeight = panel.scrollHeight + 'px';
  } else {
    panel.style.maxHeight = '0';
  }
  panel.classList.toggle('open', !isOpen);
  btn.classList.toggle('open', !isOpen);
}

// ── EP Factory picker ─────────────────────────────────────────────────────────
const pickerState = { flavor: null, choc: null, size: null };

function renderFlavorGrid(container) {
  EP_FLAVORS.forEach(f => {
    const btn = el('button', { class: 'flavor-btn', 'data-flavor': f.label });
    const img = el('img', { class: 'fimg', src: IMGS[f.imgKey], alt: f.label });
    const lbl = document.createTextNode(f.label);
    btn.append(img, lbl);
    btn.onclick = () => {
      $$('.flavor-btn', container).forEach(b => b.classList.remove('selected'));
      btn.classList.add('selected');
      pickerState.flavor = f.label;
      updateSummary();
    };
    container.append(btn);
  });
}

function renderChocGrid(container) {
  EP_COATINGS.forEach(c => {
    const btn = el('button', { class: 'choc-btn', 'data-choc': c.value });
    btn.innerHTML = `<span class="dot" style="${c.dotStyle}"></span>${c.label}`;
    btn.onclick = () => {
      $$('.choc-btn', container).forEach(b => b.classList.remove('selected'));
      btn.classList.add('selected');
      pickerState.choc = c.value;
      updateSummary();
    };
    container.append(btn);
  });
}

function renderSizeOptions(container) {
  EP_SIZES.forEach(s => {
    const btn = el('button', { class: 'size-btn', 'data-size': s });
    btn.textContent = s;
    btn.onclick = () => {
      $$('.size-btn', container).forEach(b => b.classList.remove('selected'));
      btn.classList.add('selected');
      pickerState.size = s;
      updateSummary();
    };
    container.append(btn);
  });
}

function updateSummary() {
  const box      = document.getElementById('summaryBox');
  const titleEl  = document.getElementById('summaryTitle');
  const descEl   = document.getElementById('summaryDesc');
  const ctaEmail = document.getElementById('ctaEmail');
  const { flavor, choc, size } = pickerState;
  const all = flavor && choc && size;

  if (!flavor && !choc && !size) { box.classList.remove('visible'); return; }
  box.classList.add('visible');

  const f = flavor || '(not selected)';
  const c = choc   || '(not selected)';
  const s = size   || '(not selected)';

  titleEl.textContent = `${f} - ${c}`;
  descEl.textContent  = `Size: ${s} - ${all ? 'Ready to enquire! Hit Contact below.' : 'Complete your selections to get a quote.'}`;

  if (all) {
    const subj = encodeURIComponent(`Custom Bar Enquiry - ${f}`);
    const body = encodeURIComponent(
      `Hi Lukas,\n\nI would like to enquire about a custom bar order:\n\n` +
      `  Filling: ${f}\n  Chocolate coating: ${c}\n  Size / format: ${s}\n\n` +
      `Could you please provide information on minimum order quantities and lead times?\n\n` +
      `Looking forward to hearing from you,\n[Your name]`
    );
    ctaEmail.href = `mailto:${CONTACT.email}?subject=${subj}&body=${body}`;
    ctaEmail.style.opacity = '1';
    ctaEmail.style.pointerEvents = 'auto';
  } else {
    ctaEmail.href = '#';
    ctaEmail.style.opacity = '0.45';
    ctaEmail.style.pointerEvents = 'none';
  }
}

// ── Pricing tables ────────────────────────────────────────────────────────────
function renderPriceCard(title, rows, container) {
  const card = el('div', { class: 'price-card' });
  card.append(el('h5', {}, title));
  rows.forEach(r => {
    const row = el('div', { class: 'price-row' });
    row.append(el('span', {}, r.label));
    row.append(el('strong', {}, r.price));
    card.append(row);
  });
  container.append(card);
}

// ── Scroll-triggered card animations (IntersectionObserver) ───────────────────
function initCardAnimations() {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry, i) => {
      if (entry.isIntersecting) {
        // Stagger delay based on position within its grid
        const siblings = [...entry.target.parentElement.children];
        const idx = siblings.indexOf(entry.target);
        entry.target.style.transitionDelay = `${idx * 0.07}s`;
        entry.target.classList.add('in-view');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.1 });

  $$('.card').forEach(card => observer.observe(card));
}

// ── Active nav link on scroll ─────────────────────────────────────────────────
function initActiveNav() {
  const sections = $$('section[id]');
  const navLinks = $$('.nav-links a');

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        navLinks.forEach(a => {
          a.classList.toggle('active', a.getAttribute('href') === `#${entry.target.id}`);
        });
      }
    });
  }, { rootMargin: '-40% 0px -55% 0px' });

  sections.forEach(s => observer.observe(s));
}

// ── Back to top ───────────────────────────────────────────────────────────────
function initBackToTop() {
  const btn = document.getElementById('backToTop');
  window.addEventListener('scroll', () => {
    btn.classList.toggle('visible', window.scrollY > 400);
  }, { passive: true });
  btn.addEventListener('click', () => window.scrollTo({ top: 0, behavior: 'smooth' }));
}

// ── Mobile nav ────────────────────────────────────────────────────────────────
function initNav() {
  const navLinks = document.getElementById('navLinks');
  const hamburger = document.getElementById('navHamburger');

  hamburger.addEventListener('click', () => {
    navLinks.classList.toggle('mobile-open');
    hamburger.classList.toggle('open');
  });

  // Close on link click
  $$('a', navLinks).forEach(a => {
    a.addEventListener('click', () => {
      navLinks.classList.remove('mobile-open');
      hamburger.classList.remove('open');
    });
  });

  // Close on outside click
  document.addEventListener('click', e => {
    if (!navLinks.contains(e.target) && !hamburger.contains(e.target)) {
      navLinks.classList.remove('mobile-open');
      hamburger.classList.remove('open');
    }
  });
}

// ── Main render ───────────────────────────────────────────────────────────────
function renderAll() {
  // Sveikeris
  const sveikGrid = document.getElementById('sveikerisGrid');
  let subGrid = null;
  SVEIKERIS.forEach(p => {
    if (p.group) {
      const groupWrap = el('div', { class: 'product-group' });
      const lbl = el('div', { class: 'product-group-label' });
      lbl.textContent = p.group;
      subGrid = el('div', { class: 'product-subgrid' });
      groupWrap.append(lbl, subGrid);
      sveikGrid.append(groupWrap);
    }
    subGrid.append(renderBarCard(p));
  });

  // Signature
  const sigGrid = document.getElementById('signatureGrid');
  SIGNATURE.forEach(p => sigGrid.append(renderBarCard(p)));

  // Crunch bites
  const crunchGrid = document.getElementById('crunchGrid');
  CRUNCH_BITES.forEach(p => crunchGrid.append(renderPouchCard(p)));

  // EP Factory picker
  renderFlavorGrid(document.getElementById('flavorGrid'));
  renderChocGrid(document.getElementById('chocGrid'));
  renderSizeOptions(document.getElementById('sizeGrid'));

  // Pricing
  const pgrid = document.getElementById('pricingGrid');
  renderPriceCard('Crunch Bites', PRICING.crunchBites, pgrid);
  renderPriceCard('Real Chocolate', PRICING.real, pgrid);
  renderPriceCard('Compound Chocolate', PRICING.compound, pgrid);

  // WhatsApp pre-fill on pvt label button
  const waBtn = document.getElementById('pvtWa');
  if (waBtn) {
    waBtn.href = `https://wa.me/${CONTACT.wa}?text=${encodeURIComponent('Hi Lukas, I\'m interested in private label options for your chocolate bars.')}`;
  }
  const summaryWa = document.getElementById('summaryWa');
  if (summaryWa) {
    summaryWa.href = `https://wa.me/${CONTACT.wa}`;
  }

  // Init all behaviours after DOM is populated
  initNav();
  initCardAnimations();
  initActiveNav();
  initBackToTop();
}

document.addEventListener('DOMContentLoaded', renderAll);
