// const { items } = require('./output/output.json');

// const categories = []
const text = `[
  "Slings",           "HP fittings",    'Pipe spools',
  'Fittings',         'Air compressor', 'Manifolds',
  'Lab equipment',    'Valves',         'Pumps',
  'Warehouse',        'Instruments',    'Containers',
  'Generators',       'Power tools',    'Drip trays',
  'Safety equipment', 'Water jet',      'Filter Units',
  'Flanges',          'Spray nozzles',  'Lance',
  'Hoses',            'Heat Exchanger', 'Air hoses',
  'Steam hoses',      'Heater',         'ISO-tanks',
  'Catalyst',         undefined,        'Mixing tanks',
  'Suction Needles',  'Leak test',      'Spades',
  'Steam boilers',    'Strainers',      'Tricycles',
  'Pneumatic',        'Vices',          'Whipchecks',
  'HP hoses',         'Lifting',        'Amine',
  'Miscellaneous',    'Lighting',       'Tools',
  'Tank cleaning'
]`;

// for(item of items){
//   if(item["B"] === undefined)
//     console.log(item)
//   categories.push(item["B"])
// }

// const uniqueCategories = [...new Set(categories)]
// console.log(uniqueCategories);

const text1 = text.replace(/'/g, '"');

console.log(text1);
