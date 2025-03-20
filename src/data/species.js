import banyan_tree from '../assets/Images/banyan_tree.jpeg';
import tigerImage from '../assets/Images/tiger.jpeg';
import pavo_cristatus from '../assets/Images/pavo_cristatus.jpeg';
const taxonomy = [
  {
    kingdom: 'Animalia',
    type: 'Fauna',
    children: [
      {
        id: 1,
        name: 'Pavo cristatus',
        commonName: 'Indian Peafowl',
        class: 'Aves',
        phylum: 'Chordata',
        order: 'Galliformes',
        family: 'Phasianidae',
        conservationStatus: 'Least Concern',
        habitat: 'Deciduous forests',
        description: 'National bird of India with colorful plumage',
        population: 'Stable',
        diet: 'Omnivorous',
        lifespan: '10-25 years',
        size: '100-120 cm (body), 150-160 cm (train)',
        image: pavo_cristatus  // Added image path here
      },
      {
        id: 2,
        name: 'Panthera tigris tigris',
        commonName: 'Bengal Tiger',
        class: 'Mammalia',
        phylum: 'Chordata',
        order: 'Carnivora',
        family: 'Felidae',
        conservationStatus: 'Endangered',
        habitat: 'Mangrove forests',
        description: 'Largest tiger subspecies',
        population: '<2,500',
        diet: 'Carnivorous',
        lifespan: '8-10 years (wild)',
        size: '270-310 cm (length)',
        image: tigerImage // Added image path here
      }
    ]
  },
  {
    kingdom: 'Plantae',
    type: 'Flora',
    children: [
      {
        id: 3,
        name: 'Ficus benghalensis',
        commonName: 'Banyan Tree',
        class: 'Magnoliopsida',
        phylum: 'Tracheophyta',
        order: 'Rosales',
        family: 'Moraceae',
        conservationStatus: 'Not Evaluated',
        habitat: 'Tropical regions',
        description: 'National tree of India with aerial roots',
        age: '200+ years',
        height: '20-30 meters',
        lifespan: 'Indefinite through prop roots',
        image: banyan_tree  // Added image path here
      },
      {
        id: 4,
        name: 'Mangifera indica',
        commonName: 'Mango Tree',
        class: 'Magnoliopsida',
        phylum: 'Tracheophyta',
        order: 'Sapindales',
        family: 'Anacardiaceae',
        conservationStatus: 'Not Evaluated',
        habitat: 'Tropical regions',
        description: 'Tropical fruit tree',
        age: '100+ years',
        height: '10-15 meters',
        lifespan: '100-150 years',
        image: banyan_tree
      },
      {
        id: 5,
        name: 'Ficus benghalensis',
        commonName: 'Banyan Tree',
        class: 'Magnoliopsida',
        phylum: 'Tracheophyta',
        order: 'Rosales',
        family: 'Moraceae',
        conservationStatus: 'Not Evaluated',
        habitat: 'Tropical regions',
        description: 'National tree of India with aerial roots',
        age: '200+ years',
        height: '20-30 meters',
        lifespan: 'Indefinite through prop roots',
        image: banyan_tree  // Added image path here
      },
      
    ]
  }
];

export default taxonomy;
