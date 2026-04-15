// ─────────────────────────────────────────────────────────────────────────────
// js/products.js - All product data in one place
// To add / edit a product: update the relevant array below and re-run renderAll()
// ─────────────────────────────────────────────────────────────────────────────

const SVEIKERIS = [
  {
    imgKey: 'sveik_protein_almond',
    alt: 'Protein Almond bar 50g',
    badges: [{ text: '50g' }, { text: 'Sugar-Free', cls: 'caramel' }, { text: 'Protein', cls: 'caramel' }, { text: 'No GMO', cls: 'clean' }, { text: 'No Palm Oil', cls: 'clean' }],
    title: 'Sveikeris Protein Almond',
    desc: 'A high-protein, sugar-free bar with strong everyday appeal. Coconut and almond with a soft bite, coated in rich chocolate.',
    btnLabel: 'View Ingredients',
    ingredients: 'Cocoa butter, coconut, cocoa mass, sweetener (maltitol), almonds 10.5%, dates, milk protein concentrate, rice flour, rapeseed oil, emulsifiers (sunflower and rapeseed lecithins), table salt, sodium carbonate, flavoring (vanillin). <em>May contain traces of gluten, peanuts, and other nuts.</em>',
  },
  {
    imgKey: 'sveik_double_choco',
    alt: 'Double Choco bar 50g',
    badges: [{ text: '50g' }, { text: 'Vegan' }, { text: 'No GMO', cls: 'clean' }, { text: 'No Palm Oil', cls: 'clean' }, { text: 'Fiber-Rich', cls: 'fiber' }],
    title: 'Sveikeris Double Choco',
    desc: 'A chocolate-heavy bar built for indulgence. Peanut, coconut, and cocoa with a soft crunch texture - a reliable seller for chocolate lovers.',
    btnLabel: 'View Ingredients',
    ingredients: 'Peanuts, coconuts, cocoa mass, cocoa butter, dates, cocoa powder, table salt, emulsifiers (sunflower lecithin, polyglycerol polyricinoleate), sweetener (maltitol), flavoring (vanillin). <em>May contain traces of other nuts.</em>',
  },
  {
    imgKey: 'sveik_coconut_strawberry',
    alt: 'Coconut Strawberry bar 50g',
    badges: [{ text: '50g' }, { text: 'Strawberry', cls: 'red' }, { text: 'Sugar-Free', cls: 'caramel' }, { text: 'No GMO', cls: 'clean' }, { text: 'No Palm Oil', cls: 'clean' }, { text: 'Fiber-Rich', cls: 'fiber' }],
    title: 'Sveikeris Coconut Strawberry',
    desc: 'A lighter, fruit-forward option with wide appeal. Strawberry and coconut with a soft crunch - ideal for customers looking for a sweeter profile without added sugar.',
    btnLabel: 'View Ingredients',
    ingredients: 'Coconuts (49%), sweetener (maltitol), dates, cocoa butter, rice flour, freeze-dried strawberry powder (2.4%), whole milk powder, emulsifier (rapeseed lecithin), rapeseed oil, table salt, sodium carbonate, flavoring (vanillin). <em>May contain traces of gluten, peanuts, and other nuts.</em>',
  },
  {
    imgKey: 'sveik_protein_coconut_strawberry',
    alt: 'Protein Coconut Strawberry bar 50g',
    badges: [{ text: '50g' }, { text: 'Protein', cls: 'caramel' }, { text: 'Strawberry', cls: 'red' }],
    title: 'Sveikeris Protein Coconut Strawberry',
    desc: 'A protein-focused version of a proven flavour. Sweet, soft, and functional - built for gym, convenience, and health-led retail.',
    btnLabel: 'View Ingredients',
    ingredients: 'White chocolate 39.8% (sweetener maltitol, cocoa butter, whole milk powder, skim milk powder, emulsifier rapeseed lecithin, natural flavoring), coconut 36.3%, macadamia nuts 12.4%, agave syrup, milk protein concentrate, strawberry powder 2.4%, flavoring. <em>May contain traces of peanuts and other nuts.</em>',
  },
  {
    imgKey: 'sveik_dark_cocoa_crisp',
    alt: 'Dark Choco Cocoa Crisp bar 50g',
    badges: [{ text: '50g' }, { text: 'Sugar-Free', cls: 'caramel' }, { text: 'No GMO', cls: 'clean' }, { text: 'No Palm Oil', cls: 'clean' }, { text: 'Fiber-Rich', cls: 'fiber' }],
    title: 'Sveikeris Dark Choco Cocoa Crisp',
    desc: 'A crunch-driven bar with deeper cocoa flavour. Peanut, coconut, and crisp texture - strong for customers wanting a less sweet profile.',
    btnLabel: 'View Ingredients',
    ingredients: 'Dark chocolate 44.7% (cocoa mass, sweetener (maltitol), cocoa butter, emulsifiers (sunflower lecithin, polyglycerol polyricinoleate), flavoring (vanillin)), peanut butter, dates, low-fat cocoa powder 4%, rice crisps (rice flour 87%, rapeseed oil, salt, sodium carbonate), coconut cream, cocoa butter, emulsifier (sunflower lecithin), acidity regulator (potassium carbonates), table salt. <em>May contain traces of other nuts.</em>',
  },
  {
    imgKey: 'sveik_white_cocoa_crisp',
    alt: 'White Choco Cocoa Crisp bar 50g',
    badges: [{ text: '50g' }, { text: 'Sugar-Free', cls: 'caramel' }, { text: 'No GMO', cls: 'clean' }, { text: 'No Palm Oil', cls: 'clean' }, { text: 'Fiber-Rich', cls: 'fiber' }],
    title: 'Sveikeris White Choco Cocoa Crisp',
    desc: 'A lighter alternative to dark cocoa crisp. Same crunch, smoother profile - better suited for wider mass appeal.',
    btnLabel: 'View Ingredients',
    ingredients: 'Cocoa butter, peanuts, coconut, sweetener (maltitol), cocoa mass, dates, low-fat cocoa powder, rice flour, whole milk powder, flavoring (vanillin), rapeseed oil, sodium carbonate, emulsifiers (sunflower and rapeseed lecithins), acidity regulator (potassium carbonate), table salt. <em>May contain traces of other nuts.</em>',
  },
  {
    imgKey: 'sveik_matcha',
    alt: 'Coconut Strawberry Matcha bar 50g',
    badges: [{ text: '50g' }, { text: 'Matcha', cls: 'green' }, { text: 'Sugar-Free', cls: 'caramel' }],
    title: 'Sveikeris Creamy Coconut, Strawberry &amp; Matcha',
    desc: 'A niche, high-margin flavour. Matcha, coconut, and strawberry - designed to stand out in trend-driven or specialty ranges.',
    btnLabel: 'View Ingredients',
    ingredients: 'Coconut 36.2%, white chocolate 19.9% (sweetener maltitol, cocoa butter, whole milk powder, skim milk powder, emulsifier rapeseed lecithin, natural flavoring), white chocolate with matcha 19.9% (cocoa butter, sweeteners (erythritol, steviol glycosides), whole milk powder, skim milk powder, chicory fiber, matcha powder (3%), emulsifier sunflower lecithin, bourbon vanilla), macadamia nuts 12.4%, agave syrup, milk protein concentrate, strawberry powder 2.4%, flavoring. <em>May contain traces of peanuts and other nuts.</em>',
  },
];

const SIGNATURE = [
  {
    imgKey: 'dubai_choco',
    alt: 'Dubai Choco bar 50g',
    imgCls: 'product-photo',
    badges: [{ text: '50g' }, { text: 'Pistachio', cls: 'green' }],
    title: 'Dubai Choco',
    desc: 'The viral pistachio-kunafa profile driving demand. Layered texture, strong flavour, and high shelf impact.',
    btnLabel: 'View Details',
    ingredients: '<strong>Key features:</strong> Pistachio cream filling - Crispy kataifi pastry layers - Dark chocolate coating',
  },
  {
    imgKey: 'crunchy_strawberry',
    alt: 'Dubai Style Strawberry Kunafa bar 50g',
    imgCls: 'product-photo',
    badges: [{ text: '50g' }, { text: 'Strawberry', cls: 'red' }],
    title: 'Dubai Style Strawberry Kunafa',
    desc: 'A sweet-tangy variation of the trending kunafa format. Crunchy, eye-catching, and built for broad appeal.',
    btnLabel: 'View Details',
    ingredients: '<strong>Key features:</strong> Crispy kunafa for perfect crunch - Sweet-tangy strawberry filling - White chocolate coating',
  },
  {
    imgKey: 'pistachio_bar',
    alt: 'Pistachio Bar No Added Sugar 25g',
    imgCls: 'product-photo',
    badges: [{ text: '25g' }, { text: 'No Added Sugar', cls: 'green' }],
    title: 'Pistachio Bar No Added Sugar',
    desc: 'Compact, clean-label option with strong pistachio demand. Ideal for checkout placement and low-sugar ranges.',
    btnLabel: 'View Details',
    ingredients: '<strong>Key features:</strong> No added sugar - Pistachio filling - Dark chocolate coating - 25g compact size',
  },
];

const CRUNCH_BITES = [
  {
    imgKey: 'pistachio_oh',
    alt: 'Pistachi-OH! 75g pouch',
    badges: [{ text: '75g' }, { text: 'Pistachio', cls: 'green' }, { text: 'Resealable' }],
    title: 'Pistachi-OH! Kunafa Crunch Bites',
    desc: 'The flavour that\'s already winning. Pistachio + chocolate + crunch - built for high-demand markets and fast rotation.',
    bullets: [
      'Rich pistachio centre with high-density filling.',
      'Crispy kunafa crunch that stands out instantly.',
      'Thick milk chocolate coating for full satisfaction.',
      'Resealable pouch - longer shelf life, less waste.',
    ],
  },
  {
    imgKey: 'berry_oh',
    alt: 'Berry-OH! 75g pouch',
    badges: [{ text: '75g' }, { text: 'Strawberry', cls: 'red' }, { text: 'Resealable' }],
    title: 'Berry-OH! Strawberry Kunafa Bites',
    desc: 'A safer mass-market option. Sweet, tangy, and highly snackable - designed for broad appeal and consistent sales.',
    bullets: [
      'Crispy kunafa texture for a unique bite.',
      'Sweet-tangy strawberry profile with wide appeal.',
      'Smooth white chocolate coating.',
      'Resealable for convenience and repeat use.',
    ],
  },
];

const EP_FLAVORS = [
  { label: 'Double Chocolate',       imgKey: 'ep_double_chocolate' },
  { label: 'Protein Peanut',         imgKey: 'ep_protein_peanut' },
  { label: 'Protein Coco Macadamia', imgKey: 'ep_protein_coco_macadamia' },
  { label: 'Protein Almond',         imgKey: 'ep_protein_almond' },
  { label: 'Crunchy Pistachio',      imgKey: 'ep_crunchy_pistachio' },
  { label: 'Dark Cocoa Crisp',       imgKey: 'ep_dark_cocoa_crisp' },
  { label: 'Crunchy Strawberry',     imgKey: 'ep_crunchy_strawberry' },
  { label: 'Strawberry Matcha',      imgKey: 'ep_strawberry_matcha' },
  { label: 'White Cocoa Crisp',      imgKey: 'ep_white_cocoa_crisp' },
  { label: 'Protein Strawberry',     imgKey: 'ep_protein_strawberry' },
  { label: 'Peanut Butter',          imgKey: 'ep_peanut_butter' },
];

const EP_COATINGS = [
  { label: 'Dark',     value: 'Dark Chocolate',     dotStyle: 'background:#3d1c07' },
  { label: 'White',    value: 'White Chocolate',    dotStyle: 'background:#f5e6c8;border:1px solid #ccc' },
  { label: 'Milk',     value: 'Milk Chocolate',     dotStyle: 'background:#8b5e3c' },
  { label: 'Matcha',   value: 'Matcha Chocolate',   dotStyle: 'background:#7aa15a' },
  { label: 'SF Dark',  value: 'Sugar-Free Dark',    dotStyle: 'background:#3d1c07;outline:2px solid #d4a843;outline-offset:1px' },
  { label: 'SF White', value: 'Sugar-Free White',   dotStyle: 'background:#f5e6c8;outline:2px solid #d4a843;outline-offset:1px' },
  { label: 'SF Milk',  value: 'Sugar-Free Milk',    dotStyle: 'background:#8b5e3c;outline:2px solid #d4a843;outline-offset:1px' },
  { label: 'SF Matcha',value: 'Sugar-Free Matcha',  dotStyle: 'background:#7aa15a;outline:2px solid #d4a843;outline-offset:1px' },
];

const EP_SIZES = ['15g', '25g', '50g', '1kg Pick & Mix'];

const PRICING = {
  crunchBites: [
    { label: '75g Pistachio (Pistachi-OH!)', price: '£1.30' },
    { label: '75g Strawberry (Berry-OH!)',   price: '£1.10' },
  ],
  real: [
    { label: '50g Pistachio',             price: '£0.94' },
    { label: '50g Other Flavors',         price: '£0.85' },
    { label: '25g Pistachio',             price: '£0.51' },
    { label: '25g Other Flavors',         price: '£0.47' },
    { label: '1kg Pistachio Pick & Mix',  price: '£15.36' },
    { label: '1kg Other Flavors Pick & Mix', price: '£12.80' },
  ],
  compound: [
    { label: '50g Pistachio',             price: '£0.85' },
    { label: '50g Other Flavors',         price: '£0.77' },
    { label: '25g Pistachio',             price: '£0.47' },
    { label: '25g Other Flavors',         price: '£0.43' },
    { label: '1kg Pistachio Pick & Mix',  price: '£13.65' },
    { label: '1kg Other Flavors Pick & Mix', price: '£11.09' },
  ],
};
