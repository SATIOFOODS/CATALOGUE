// ─────────────────────────────────────────────────────────────────────────────
// js/products.js  —  All product data in one place
// To add / edit a product: update the relevant array below and re-run renderAll()
// ─────────────────────────────────────────────────────────────────────────────

const SVEIKERIS = [
  {
    imgKey: 'sveik_protein_almond',
    alt: 'Sveikeris Protein Almond',
    badges: [{ text: '50g' }, { text: 'Sugar-Free', cls: 'caramel' }, { text: 'Protein', cls: 'caramel' }, { text: 'No GMO', cls: 'clean' }, { text: 'No Palm Oil', cls: 'clean' }],
    title: 'Sveikeris Protein Almond',
    desc: 'A soft coconut and almond bar naturally sweetened with dates, coated in rich sugar-free chocolate.',
    btnLabel: 'Show Ingredients',
    ingredients: 'Cocoa butter, coconut, cocoa mass, sweetener (maltitol), almonds 10.5%, dates, milk protein concentrate, rice flour, rapeseed oil, emulsifiers (sunflower and rapeseed lecithins), table salt, sodium carbonate, flavoring (vanillin). <em>May contain traces of gluten, peanuts, and other nuts.</em>',
  },
  {
    imgKey: 'sveik_double_choco',
    alt: 'Sveikeris Double Choco',
    badges: [{ text: '50g' }, { text: 'Vegan' }, { text: 'No GMO', cls: 'clean' }, { text: 'No Palm Oil', cls: 'clean' }],
    title: 'Sveikeris Double Choco',
    desc: 'A double chocolate bar with peanut and coconut, naturally sweetened with dates, enrobed in rich chocolate with a delicate crispy crunch.',
    btnLabel: 'Show Ingredients',
    ingredients: 'Peanuts, coconuts, cocoa mass, cocoa butter, dates, cocoa powder, table salt, emulsifiers (sunflower lecithin, polyglycerol polyricinoleate), sweetener (maltitol), flavoring (vanillin). <em>May contain traces of other nuts.</em>',
  },
  {
    imgKey: 'sveik_coconut_strawberry',
    alt: 'Sveikeris Coconut Strawberry',
    badges: [{ text: '50g' }, { text: 'Strawberry', cls: 'red' }, { text: 'Sugar-Free', cls: 'caramel' }, { text: 'No GMO', cls: 'clean' }, { text: 'No Palm Oil', cls: 'clean' }],
    title: 'Sveikeris Coconut Strawberry',
    desc: 'A strawberry and coconut bar with natural date sweetness, enrobed in sugar-free white chocolate with a light crispy texture from rice crunch and freeze-dried berries.',
    btnLabel: 'Show Ingredients',
    ingredients: 'Coconuts (49%), sweetener (maltitol), dates, cocoa butter, rice flour, freeze-dried strawberry powder (2.4%), whole milk powder, emulsifier (rapeseed lecithin), rapeseed oil, table salt, sodium carbonate, flavoring (vanillin). <em>May contain traces of gluten, peanuts, and other nuts.</em>',
  },
  {
    imgKey: 'sveik_protein_coconut_strawberry',
    alt: 'Sveikeris Protein Coconut Strawberry',
    badges: [{ text: '50g' }, { text: 'Protein', cls: 'caramel' }, { text: 'Strawberry', cls: 'red' }],
    title: 'Sveikeris Protein Coconut Strawberry',
    desc: 'A strawberry and coconut protein bar with natural date sweetness, enrobed in sugar-free white chocolate with a light crispy texture from rice crunch and freeze-dried berries.',
    btnLabel: 'Show Ingredients',
    ingredients: 'White chocolate 39.8% (sweetener maltitol, cocoa butter, whole milk powder, skim milk powder, emulsifier rapeseed lecithin, natural flavoring), coconut 36.3%, macadamia nuts 12.4%, agave syrup, milk protein concentrate, strawberry powder 2.4%, flavoring. <em>May contain traces of peanuts and other nuts.</em>',
  },
  {
    imgKey: 'sveik_dark_cocoa_crisp',
    alt: 'Sveikeris Dark Choco Cocoa Crisp',
    badges: [{ text: '50g' }, { text: 'Sugar-Free', cls: 'caramel' }, { text: 'No GMO', cls: 'clean' }, { text: 'No Palm Oil', cls: 'clean' }],
    title: 'Sveikeris Dark Choco Cocoa Crisp',
    desc: 'A crispy cocoa bar with peanut and coconut, naturally sweetened with dates and enrobed in sugar-free dark chocolate.',
    btnLabel: 'Show Ingredients',
    ingredients: 'Dark chocolate 44.7% (cocoa mass, sweetener (maltitol), cocoa butter, emulsifiers (sunflower lecithin, polyglycerol polyricinoleate), flavoring (vanillin)), peanut butter, dates, low-fat cocoa powder 4%, rice crisps (rice flour 87%, rapeseed oil, salt, sodium carbonate), coconut cream, cocoa butter, emulsifier (sunflower lecithin), acidity regulator (potassium carbonates), table salt. <em>May contain traces of other nuts.</em>',
  },
  {
    imgKey: 'sveik_white_cocoa_crisp',
    alt: 'Sveikeris White Choco Cocoa Crisp',
    badges: [{ text: '50g' }, { text: 'Sugar-Free', cls: 'caramel' }, { text: 'No GMO', cls: 'clean' }, { text: 'No Palm Oil', cls: 'clean' }],
    title: 'Sveikeris White Choco Cocoa Crisp',
    desc: 'A crispy cocoa bar with peanut and coconut, naturally sweetened with dates and enrobed in sugar-free white chocolate.',
    btnLabel: 'Show Ingredients',
    ingredients: 'Cocoa butter, peanuts, coconut, sweetener (maltitol), cocoa mass, dates, low-fat cocoa powder, rice flour, whole milk powder, flavoring (vanillin), rapeseed oil, sodium carbonate, emulsifiers (sunflower and rapeseed lecithins), acidity regulator (potassium carbonate), table salt. <em>May contain traces of other nuts.</em>',
  },
  {
    imgKey: 'sveik_matcha',
    alt: 'Sveikeris Creamy Coconut Strawberry Matcha',
    badges: [{ text: '50g' }, { text: 'Matcha', cls: 'green' }, { text: 'Sugar-Free', cls: 'caramel' }],
    title: 'Sveikeris Creamy Coconut, Strawberry &amp; Matcha',
    desc: 'A creamy coconut and macadamia bar with a hint of strawberry, coated in matcha white sugar-free chocolate.',
    btnLabel: 'Show Ingredients',
    ingredients: 'Coconut 36.2%, white chocolate 19.9% (sweetener maltitol, cocoa butter, whole milk powder, skim milk powder, emulsifier rapeseed lecithin, natural flavoring), white chocolate with matcha 19.9% (cocoa butter, sweeteners (erythritol, steviol glycosides), whole milk powder, skim milk powder, chicory fiber, matcha powder (3%), emulsifier sunflower lecithin, bourbon vanilla), macadamia nuts 12.4%, agave syrup, milk protein concentrate, strawberry powder 2.4%, flavoring. <em>May contain traces of peanuts and other nuts.</em>',
  },
];

const SIGNATURE = [
  {
    imgKey: 'dubai_choco',
    alt: 'Dubai Choco',
    imgCls: 'product-photo',
    badges: [{ text: '50g' }, { text: 'Pistachio', cls: 'green' }],
    title: 'Dubai Choco',
    desc: 'The viral Dubai-style chocolate bar with layers of pistachio cream and crispy kataifi, enrobed in rich dark chocolate. A sensory experience in every bite.',
    btnLabel: 'Show Details',
    ingredients: '<strong>Key features:</strong> Pistachio cream filling - Crispy kataifi pastry layers - Dark chocolate coating',
  },
  {
    imgKey: 'crunchy_strawberry',
    alt: 'Dubai Style Strawberry Kunafa',
    imgCls: 'product-photo',
    badges: [{ text: '50g' }, { text: 'Strawberry', cls: 'red' }],
    title: 'Dubai Style Strawberry Kunafa',
    desc: 'A crunchy strawberry kunafa bar inspired by Dubai-style desserts. Crispy kunafa, sweet-tangy strawberry, coated in premium white chocolate - Middle Eastern meets European.',
    btnLabel: 'Show Details',
    ingredients: '<strong>Key features:</strong> Crispy kunafa for perfect crunch - Sweet-tangy strawberry filling - White chocolate coating',
  },
  {
    imgKey: 'pistachio_bar',
    alt: 'Pistachio Bar No Added Sugar',
    imgCls: 'product-photo',
    badges: [{ text: '25g' }, { text: 'No Added Sugar', cls: 'green' }],
    title: 'Pistachio Bar No Added Sugar',
    desc: 'Pistachio filling bar with no added sugar, coated in dark chocolate. Clean-label snacking with premium nut content - guilt-free indulgence.',
    btnLabel: 'Show Details',
    ingredients: '<strong>Key features:</strong> No added sugar - Premium pistachio filling - Dark chocolate coating - 25g compact size',
  },
];

const CRUNCH_BITES = [
  {
    imgKey: 'pistachio_oh',
    alt: 'Pistachi-OH! Kunafa Crunch Bites',
    badges: [{ text: '75g' }, { text: 'Pistachio', cls: 'green' }, { text: 'Resealable' }],
    title: 'Pistachi-OH! Kunafa Crunch Bites',
    desc: 'The OG crunch dunker. A smart Middle Eastern &amp; European flavor crossover, packed into bite-sized squares.',
    bullets: [
      'Creamy, high-density pistachio center.',
      'Crispy kataifi (kunafa) crunch you can actually hear.',
      'Thickly coated in premium milk chocolate.',
      'Resealable pouch for peak freshness.',
    ],
  },
  {
    imgKey: 'berry_oh',
    alt: 'Berry-OH! Strawberry Kunafa Bites',
    badges: [{ text: '75g' }, { text: 'Strawberry', cls: 'red' }, { text: 'Resealable' }],
    title: 'Berry-OH! Strawberry Kunafa Bites',
    desc: 'The berry that hits different. A playful Middle Eastern &amp; European fusion, bringing sweet and tangy together in a perfect bite.',
    bullets: [
      'Crispy kataifi (kunafa) for the perfect textured crunch.',
      'Real strawberry notes for a sweet-tangy twist.',
      'Enrobed in smooth, premium white chocolate.',
      'Resealable pouch for on-the-go sharing.',
    ],
  },
];

const EP_FLAVORS = [
  { label: 'Double Chocolate',      icon: '&#127851;' },
  { label: 'Protein Peanut',        icon: '&#129372;' },
  { label: 'Protein Coco Macadamia',icon: '&#129381;' },
  { label: 'Protein Almond',        icon: '&#127792;' },
  { label: 'Crunchy Pistachio',     icon: '&#127808;' },
  { label: 'Dark Cocoa Crisp',      icon: '&#129395;' },
  { label: 'Crunchy Strawberry',    icon: '&#127827;' },
  { label: 'Strawberry Matcha',     icon: '&#127861;' },
  { label: 'White Cocoa Crisp',     icon: '&#129293;' },
  { label: 'Protein Strawberry',    icon: '&#128170;' },
  { label: 'Peanut Butter',         icon: '&#129379;' },
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
