import fallbackImage from '../assets/Images/placeholder.jpg';
import banyan_tree from '../assets/Images/banyan_tree.jpeg';
import tigerImage from '../assets/Images/tiger.jpeg';
import pavo_cristatus from '../assets/Images/pavo_cristatus.jpeg';
import cyperus_alternifolius from '../assets/Images/cyperus_alternifolius.jpg';
import castalius_rosimon from '../assets/Images/Fauna/castalius_rosimon.jpg';
import chilades_pandava from '../assets/Images/Fauna/chilades_pandava.jpg';
import chilades_trochylus from '../assets/Images/Fauna/chilades_trochylus.jpg';
import zizula_hylax from '../assets/Images/Fauna/zizula_hylax.jpeg';
import acraea_terpsicore from '../assets/Images/Fauna/acraea_terpsicore.jpg';
import danaus_chrysippus from '../assets/Images/Fauna/danaus_chrysippus.jpg';
import euthalia_nais from '../assets/Images/Fauna/euthalia_nais.jpeg';
import hypolimnas_misippus from '../assets/Images/Fauna/hypolimnas_misippus.jpg';
import junonia_hierta from '../assets/Images/Fauna/junonia_hierta.jpg';
import junonia_lemonias from '../assets/Images/Fauna/junonia_lemonias.jpg';
import junonia_orithya from '../assets/Images/Fauna/junonia_orithya.jpg';
import melanitis_leda from '../assets/Images/Fauna/melanitis_leda.jpeg';
import pachliopta_aristolochiae from '../assets/Images/Fauna/pachliopta_aristolochiae.jpg';
import pachliopta_hector from '../assets/Images/Fauna/pachliopta_hector.jpg';
import papilio_demoleus from '../assets/Images/Fauna/papilio_demoleus.jpeg';
import mangifera_indica from '../assets/Images/Flora/mangifera_indica.jpg';
// import passiflora_caerulea from '../assets/Images/Flora/passiflora_caerulea.jpeg';
// import senna_siamea from '../assets/Images/Flora/senna_siamea.jpg';
// import hardwickia_binata_anjan from '../assets/Images/Flora/hardwickia_binata_anjan.jpg';
// import nyctanthes_arbor_tristis from '../assets/Images/Flora/nyctanthes_arbor_tristis.jpg';
// import anthocephalus_kadamba from '../assets/Images/Flora/anthocephalus_kadamba.jpg';
// import lagerstroemia_indica from '../assets/Images/Flora/lagerstroemia_indica.jpg';
// import lagerstroemia_speciosa from '../assets/Images/Flora/lagerstroemia_speciosa.jpg';
// import crinum_asiaticum from '../assets/Images/Flora/crinum_asiaticum.jpg';
// import lantana_camara from '../assets/Images/Flora/lantana_camara.jpg';
// import cymbopogon_coloratus from '../assets/Images/Flora/cymbopogon_coloratus.jpg';
// import gardenia_jasminoides from '../assets/Images/Flora/gardenia_jasminoides.jpg';
// import dracaena_reflexa from '../assets/Images/Flora/dracaena_reflexa.jpg';
// import allamanda_cathartica from '../assets/Images/Flora/allamanda_cathartica.jpg';
// import quisqualis_indica from '../assets/Images/Flora/quisqualis_indica.jpg';
// import ipomoea_carica from '../assets/Images/Flora/ipomoea_carica.jpg';
// import trachelospermum_jasminoides from '../assets/Images/Flora/trachelospermum_jasminoides.jpg';
import green_chiretta from '../assets/Images/Flora/green_chiretta.jpg';
import porcupine_flower from '../assets/Images/Flora/porcupine_flower.jpg';
// import maderaspatnam_blepharis from '../assets/Images/Flora/maderaspatnam_blepharis.jpg';
// import prostrate_justicia from '../assets/Images/Flora/prostrate_justicia.jpg';
// import crested_lepidagathis from '../assets/Images/Flora/crested_lepidagathis.jpg';
// import russells_stenosiphonium from '../assets/Images/Flora/russells_stenosiphonium.jpg';
import giant_false_agave from '../assets/Images/Flora/giant_false_agave.jpg';
// import axil_buchanania from '../assets/Images/Flora/axil_buchanania.jpg';
// import indian_ash_tree from '../assets/Images/Flora/indian_ash_tree.jpg';
// import karonda from '../assets/Images/Flora/karonda.jpg';
// import conkerberry from '../assets/Images/Flora/conkerberry.jpg';
// import dwarf_date_palm from '../assets/Images/Flora/dwarf_date_palm.jpg';
// import wild_date_palm from '../assets/Images/Flora/wild_date_palm.jpg';
// import caralluma from '../assets/Images/Flora/caralluma.jpg';
// import indian_tylophora from '../assets/Images/Flora/indian_tylophora.jpg';
// import shatavari from '../assets/Images/Flora/shatavari.jpg';
// import east_indian_globe_thistle from '../assets/Images/Flora/east_indian_globe_thistle.jpg';
// import forest_trumpet from '../assets/Images/Flora/forest_trumpet.jpg';
// import fukien_tea from '../assets/Images/Flora/fukien_tea.jpg';
// import coldenia from '../assets/Images/Flora/coldenia.jpg';
// import coconut_tree from '../assets/Images/Flora/coconut_tree.jpg';
// import amla from '../assets/Images/Flora/amla.jpg';
// import custard_apple from '../assets/Images/Flora/custard_apple.jpg';
// import jamun from '../assets/Images/Flora/jamun.jpg';
// import jackfruit from '../assets/Images/Flora/jackfruit.jpg';
// import sweet_orange from '../assets/Images/Flora/sweet_orange.jpg';
// import pomegranate from '../assets/Images/Flora/pomegranate.jpg';
// import sapota from '../assets/Images/Flora/sapota.jpg';
// import fig from '../assets/Images/Flora/fig.jpg';
// import neem from '../assets/Images/Flora/neem.jpg';
// import bael from '../assets/Images/Flora/bael.jpg';
// import peepal from '../assets/Images/Flora/peepal.jpg';
// import wild_date from '../assets/Images/Flora/wild_date.jpg';

const getImage = (image) => {
  try {
    // Check if the image exists
    if (image) {
      return image;
    }
    throw new Error('Image not found');
  } catch (error) {
    // Return the fallback image if the image is missing
    return fallbackImage;
  }
};

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
        image: getImage(pavo_cristatus)  
      },
      // {
      //   id: 2,
      //   name: 'Panthera tigris tigris',
      //   commonName: 'Bengal Tiger',
      //   class: 'Mammalia',
      //   phylum: 'Chordata',
      //   order: 'Carnivora',
      //   family: 'Felidae',
      //   conservationStatus: 'Endangered',
      //   habitat: 'Mangrove forests',
      //   description: 'Largest tiger subspecies',
      //   population: '<2,500',
      //   diet: 'Carnivorous',
      //   lifespan: '8-10 years (wild)',
      //   size: '270-310 cm (length)',
      //   image: getImage(tigerImage) 
      // }
      
      ,
        {
        id: 3,
        name: 'Castalius rosimon',
        commonName: 'Common Pierrot',
        class: 'Insecta',
        phylum: 'Arthropoda',
        order: 'Lepidoptera',
        family: 'Lycaenidae',
        conservationStatus: 'Not Evaluated',
        habitat: 'Open woodlands, gardens',
        description: 'A small butterfly with black and white markings',
        population: 'Stable',
        diet: 'Nectar',
        lifespan: 'Few weeks',
        size: '20-30 mm wingspan',
        image: getImage(castalius_rosimon)
    },
    {
        id: 4,
        name: 'Chilades pandava',
        commonName: 'Plains Cupid',
        class: 'Insecta',
        phylum: 'Arthropoda',
        order: 'Lepidoptera',
        family: 'Lycaenidae',
        conservationStatus: 'Not Evaluated',
        habitat: 'Urban gardens, forests',
        description: 'Small butterfly with blue upper wings and brown undersides',
        population: 'Stable',
        diet: 'Nectar',
        lifespan: 'Few weeks',
        size: '20-30 mm wingspan',
        image: getImage(chilades_pandava)
    },
    {
        id: 5,
        name: 'Chilades trochylus',
        commonName: 'Grass Jewel',
        class: 'Insecta',
        phylum: 'Arthropoda',
        order: 'Lepidoptera',
        family: 'Lycaenidae',
        conservationStatus: 'Not Evaluated',
        habitat: 'Grasslands, open areas',
        description: 'One of the smallest butterflies, brown with white streaks',
        population: 'Stable',
        diet: 'Nectar',
        lifespan: 'Few weeks',
        size: '15-25 mm wingspan',
        image: getImage(chilades_trochylus)
    },
    {
        id: 6,
        name: 'Zizula hylax',
        commonName: 'Tiny Grass Blue',
        class: 'Insecta',
        phylum: 'Arthropoda',
        order: 'Lepidoptera',
        family: 'Lycaenidae',
        conservationStatus: 'Not Evaluated',
        habitat: 'Grasslands, urban areas',
        description: 'Very small butterfly with blue upper wings and greyish undersides',
        population: 'Stable',
        diet: 'Nectar',
        lifespan: 'Few weeks',
        size: '15-25 mm wingspan',
        image: getImage(zizula_hylax)
    },
    {
        id: 7,
        name: 'Acraea terpsicore',
        commonName: 'Tawny Coster',
        class: 'Insecta',
        phylum: 'Arthropoda',
        order: 'Lepidoptera',
        family: 'Nymphalidae',
        conservationStatus: 'Not Evaluated',
        habitat: 'Open fields, scrublands',
        description: 'Bright orange butterfly with black spots and wavy edges',
        population: 'Stable',
        diet: 'Nectar',
        lifespan: 'Few weeks',
        size: '50-60 mm wingspan',
        image: getImage(acraea_terpsicore)
    },
      {
        id: 8,
        name: 'Danaus chrysippus',
        commonName: 'Plain Tiger / African Monarch',
        class: 'Insecta',
        phylum: 'Arthropoda',
        order: 'Lepidoptera',
        family: 'Nymphalidae',
        conservationStatus: 'Not Evaluated',
        habitat: 'Grasslands, gardens, open forests',
        description: 'Bright orange butterfly with black and white markings, similar to the Monarch butterfly',
        population: 'Stable',
        diet: 'Nectar',
        lifespan: 'Few weeks',
        size: '70-80 mm wingspan',
        image: getImage(danaus_chrysippus)
    },
    {
        id: 9,
        name: 'Euthalia nais',
        commonName: 'Baronet',
        class: 'Insecta',
        phylum: 'Arthropoda',
        order: 'Lepidoptera',
        family: 'Nymphalidae',
        conservationStatus: 'Not Evaluated',
        habitat: 'Dry forests, scrublands',
        description: 'Medium-sized butterfly with orange-brown wings and black markings',
        population: 'Stable',
        diet: 'Nectar',
        lifespan: 'Few weeks',
        size: '55-65 mm wingspan',
        image: getImage(euthalia_nais)
    },
    {
        id: 10,
        name: 'Hypolimnas misippus',
        commonName: 'Danaid Eggfly',
        class: 'Insecta',
        phylum: 'Arthropoda',
        order: 'Lepidoptera',
        family: 'Nymphalidae',
        conservationStatus: 'Not Evaluated',
        habitat: 'Forests, gardens, meadows',
        description: 'Mimics the Plain Tiger butterfly; females resemble the monarch species',
        population: 'Stable',
        diet: 'Nectar',
        lifespan: 'Few weeks',
        size: '70-80 mm wingspan',
        image: getImage(hypolimnas_misippus)
    },
    {
        id: 11,
        name: 'Junonia hierta',
        commonName: 'Yellow Pansy',
        class: 'Insecta',
        phylum: 'Arthropoda',
        order: 'Lepidoptera',
        family: 'Nymphalidae',
        conservationStatus: 'Not Evaluated',
        habitat: 'Open fields, grasslands',
        description: 'Bright yellow butterfly with black and blue spots',
        population: 'Stable',
        diet: 'Nectar',
        lifespan: 'Few weeks',
        size: '45-55 mm wingspan',
        image: getImage(junonia_hierta)
    },
    {
        id: 12,
        name: 'Junonia lemonias',
        commonName: 'Lemon Pansy',
        class: 'Insecta',
        phylum: 'Arthropoda',
        order: 'Lepidoptera',
        family: 'Nymphalidae',
        conservationStatus: 'Not Evaluated',
        habitat: 'Open grasslands, gardens',
        description: 'Brown butterfly with eye-like spots on wings',
        population: 'Stable',
        diet: 'Nectar',
        lifespan: 'Few weeks',
        size: '45-55 mm wingspan',
        image: getImage(junonia_lemonias)
    },
    {
        id: 13,
        name: 'Junonia orithya',
        commonName: 'Blue Pansy',
        class: 'Insecta',
        phylum: 'Arthropoda',
        order: 'Lepidoptera',
        family: 'Nymphalidae',
        conservationStatus: 'Not Evaluated',
        habitat: 'Open fields, gardens',
        description: 'Striking blue butterfly with black borders and orange eye spots',
        population: 'Stable',
        diet: 'Nectar',
        lifespan: 'Few weeks',
        size: '50-60 mm wingspan',
        image: getImage(junonia_orithya)
    },
    {
        id: 14,
        name: 'Melanitis leda',
        commonName: 'Common Evening Brown',
        class: 'Insecta',
        phylum: 'Arthropoda',
        order: 'Lepidoptera',
        family: 'Nymphalidae',
        conservationStatus: 'Not Evaluated',
        habitat: 'Forests, gardens, scrublands',
        description: 'A brown butterfly with eye spots, often active during dusk',
        population: 'Stable',
        diet: 'Nectar',
        lifespan: 'Few weeks',
        size: '60-70 mm wingspan',
        image: getImage(melanitis_leda)
    },
    {
        id: 15,
        name: 'Pachliopta aristolochiae',
        commonName: 'Common Rose',
        class: 'Insecta',
        phylum: 'Arthropoda',
        order: 'Lepidoptera',
        family: 'Papilionidae',
        conservationStatus: 'Not Evaluated',
        habitat: 'Gardens, forests',
        description: 'Black butterfly with red spots and tails on the hindwings',
        population: 'Stable',
        diet: 'Nectar',
        lifespan: 'Few weeks',
        size: '80-100 mm wingspan',
        image: getImage(pachliopta_aristolochiae)
    },
    {
        id: 16,
        name: 'Pachliopta hector',
        commonName: 'Crimson Rose',
        class: 'Insecta',
        phylum: 'Arthropoda',
        order: 'Lepidoptera',
        family: 'Papilionidae',
        conservationStatus: 'Not Evaluated',
        habitat: 'Forests, gardens, coastal areas',
        description: 'Black butterfly with bright crimson-red spots and tail-like extensions',
        population: 'Stable',
        diet: 'Nectar',
        lifespan: 'Few weeks',
        size: '90-110 mm wingspan',
        image: getImage(pachliopta_hector)
    },
    {
        id: 17,
        name: 'Papilio demoleus',
        commonName: 'Common Lime Butterfly',
        class: 'Insecta',
        phylum: 'Arthropoda',
        order: 'Lepidoptera',
        family: 'Papilionidae',
        conservationStatus: 'Not Evaluated',
        habitat: 'Gardens, orchards',
        description: 'Yellow and black patterned butterfly, a common citrus pest',
        population: 'Stable',
        diet: 'Nectar',
        lifespan: 'Few weeks',
        size: '80-100 mm wingspan',
        image: getImage(papilio_demoleus)
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
        image: getImage(banyan_tree)  
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
        image: getImage(mangifera_indica)  
      },
      {
        id: 5,
        name: 'Passiflora caerulea',
        commonName: 'Rakhee flower',
        class: 'Magnoliopsida',
        phylum: 'Tracheophyta',
        order: 'Malpighiales',
        family: 'Passifloraceae',
        conservationStatus: 'Least Concern',
        habitat: 'Tropical and subtropical regions',
        description: 'Ornamental vine with intricate blue and white flowers',
        population: 'Stable',
        diet: 'Thrives in well-drained, fertile soil with balanced nutrients',
        growthType: 'Perennial',
        height: '3-9 m (as a vine)',
        image: getImage(fallbackImage)  
      },
      {
        id: 6,
        name: 'Senna siamea',
        commonName: 'Cassia siamea',
        class: 'Magnoliopsida',
        phylum: 'Tracheophyta',
        order: 'Fabales',
        family: 'Fabaceae',
        conservationStatus: 'Least Concern',
        habitat: 'Tropical regions',
        description: 'A fast-growing tree with yellow flowers, often used for shade and timber',
        population: 'Stable',
        diet: 'Not applicable (photosynthetic)',
        lifespan: '40-60 years',
        size: '10-18 meters in height',
        image: getImage(fallbackImage)  
      },
      {
        id: 7,
        name: 'Hardwickia binata anjan',
        commonName: 'Hardwickia',
        class: 'Magnoliopsida',
        phylum: 'Tracheophyta',
        order: 'Fabales',
        family: 'Fabaceae',
        conservationStatus: 'Least Concern',
        habitat: 'Dry deciduous forests',
        description: 'A large tree with durable wood, commonly used for construction and furniture',
        population: 'Stable',
        diet: 'Not applicable (photosynthetic)',
        lifespan: '80-120 years',
        size: '20-30 meters in height',
        image: getImage(fallbackImage)  
      },
      {
        id: 8,
        name: 'Nyctanthes arbor-tristis',
        commonName: 'Harshingar',
        class: 'Magnoliopsida',
        phylum: 'Tracheophyta',
        order: 'Lamiales',
        family: 'Oleaceae',
        conservationStatus: 'Least Concern',
        habitat: 'Tropical and subtropical regions',
        description: 'A small tree or shrub with fragrant white-orange flowers, often used in traditional medicine',
        population: 'Stable',
        diet: 'Not applicable (photosynthetic)',
        lifespan: '30-50 years',
        size: '3-10 meters in height',
        image: getImage(fallbackImage) 
      },
      {
        id: 9,
        name: 'Anthocephalus kadamba',
        commonName: 'Kadamba',
        class: 'Magnoliopsida',
        phylum: 'Tracheophyta',
        order: 'Gentianales',
        family: 'Rubiaceae',
        conservationStatus: 'Least Concern',
        habitat: 'Tropical rainforests and riverbanks',
        description: 'A large, evergreen tree with fragrant, spherical flowers, often associated with cultural significance in India',
        population: 'Stable',
        diet: 'Not applicable (photosynthetic)',
        lifespan: '50-100 years',
        size: '20-40 meters in height',
        image: getImage( fallbackImage)  
      },
      {
        id: 10,
        name: 'Lagerstroemia indica',
        commonName: 'Lagerstroemia',
        class: 'Magnoliopsida',
        phylum: 'Tracheophyta',
        order: 'Myrtales',
        family: 'Lythraceae',
        conservationStatus: 'Least Concern',
        habitat: 'Temperate and subtropical regions',
        description: 'A small to medium tree with vibrant flowers, commonly used in ornamental gardening',
        population: 'Stable',
        diet: 'Not applicable (photosynthetic)',
        lifespan: '40-60 years',
        size: '5-10 meters in height',
        image: getImage(fallbackImage)  
      },
      {
        id: 11,
        name: 'Lagerstroemia speciosa',
        commonName: 'Lagerstroemia',
        class: 'Magnoliopsida',
        phylum: 'Tracheophyta',
        order: 'Myrtales',
        family: 'Lythraceae',
        conservationStatus: 'Least Concern',
        habitat: 'Tropical and subtropical regions',
        description: 'A larger species of Lagerstroemia with purple flowers, often planted for shade and beauty',
        population: 'Stable',
        diet: 'Not applicable (photosynthetic)',
        lifespan: '50-80 years',
        size: '10-20 meters in height',
        image: getImage(fallbackImage)  
      },
      {
        id: 12,
        name: 'Cyperus alternifolius',
        commonName: 'Umbrella sedge',
        class: 'Liliopsida',
        phylum: 'Tracheophyta',
        order: 'Poales',
        family: 'Cyperaceae',
        conservationStatus: 'Least Concern',
        habitat: 'Wetlands and water gardens',
        description: 'Ornamental plant with umbrella-like foliage',
        population: 'Stable',
        diet: 'Requires consistently moist, fertile soil',
        uses: 'Ornamental',
        growthType: 'Perennial',
        height: '0.5-1.5 m',
        image: getImage(fallbackImage)  
      },
      {
        id: 13,
        name: 'Crinum asiaticum',
        commonName: 'Crinum lily',
        class: 'Liliopsida',
        phylum: 'Tracheophyta',
        order: 'Asparagales',
        family: 'Amaryllidaceae',
        conservationStatus: 'Least Concern',
        habitat: 'Tropical and subtropical regions',
        description: 'Ornamental plant with large white flowers',
        population: 'Stable',
        diet: 'Prefers rich, well-drained soil with organic matter',
        uses: 'Ornamental',
        growthType: 'Perennial',
        height: '0.5-1.5 m',
        image: getImage(fallbackImage)  
      },
      {
        id: 14,
        name: 'Lantana camara',
        commonName: 'Lantana yellow, red, orange, white, and purple',
        class: 'Magnoliopsida',
        phylum: 'Tracheophyta',
        order: 'Lamiales',
        family: 'Verbenaceae',
        conservationStatus: 'Least Concern',
        habitat: 'Tropical and subtropical regions',
        description: 'Ornamental shrub with multicolored flowers',
        population: 'Stable',
        diet: 'Grows well in well-drained, moderately fertile soil',
        uses: 'Ornamental',
        growthType: 'Perennial',
        height: '0.5-2 m',
        image: getImage(fallbackImage)  
        },
      {
        id: 15,
        name: 'Cymbopogon coloratus',
        commonName: 'Cymbopogon',
        class: 'Liliopsida',
        phylum: 'Tracheophyta',
        order: 'Poales',
        family: 'Poaceae',
        conservationStatus: 'Least Concern',
        habitat: 'Tropical and subtropical regions',
        description: 'Aromatic grass used for essential oils',
        population: 'Stable',
        diet: 'Prefers well-drained, sandy or loamy soil',
        uses: 'Medicinal, Aromatic',
        growthType: 'Perennial',
        height: '0.5-2 m',
        image: getImage(fallbackImage)
      },
      {
        id: 16,
        name: 'Gardenia jasminoides',
        commonName: 'Garudvardanam',
        class: 'Magnoliopsida',
        phylum: 'Tracheophyta',
        order: 'Gentianales',
        family: 'Rubiaceae',
        conservationStatus: 'Least Concern',
        habitat: 'Tropical and subtropical regions',
        description: 'Fragrant flowering shrub',
        population: 'Stable',
        diet: 'Thrives in well-drained, acidic soil with organic matter',
        uses: 'Ornamental, Aromatic',
        growthType: 'Perennial',
        height: '0.5-2 m',
        image: getImage(fallbackImage)
      },
      {
        id: 17,
        name: 'Dracaena reflexa',
        commonName: 'Dracaena',
        class: 'Liliopsida',
        phylum: 'Tracheophyta',
        order: 'Asparagales',
        family: 'Asparagaceae',
        conservationStatus: 'Least Concern',
        habitat: 'Tropical regions',
        description: 'Ornamental plant with variegated leaves',
        population: 'Stable',
        diet: 'Prefers well-drained, loamy soil with moderate nutrients',
        uses: 'Ornamental',
        growthType: 'Perennial',
        height: '1-3 m',
        image: getImage(fallbackImage)
      },
      {
        id: 18,
        name: 'Allamanda cathartica',
        commonName: 'Allamanda',
        class: 'Magnoliopsida',
        phylum: 'Tracheophyta',
        order: 'Gentianales',
        family: 'Apocynaceae',
        conservationStatus: 'Least Concern',
        habitat: 'Tropical regions',
        description: 'Ornamental plant with bright yellow flowers',
        population: 'Stable',
        diet: 'Thrives in well-drained, fertile soil with organic matter',
        growthType: 'Perennial',
        height: '1-3 m',
        image: getImage(fallbackImage)
      },
      {
        id: 19,
        name: 'Quisqualis indica',
        commonName: 'Radha Manohar',
        class: 'Magnoliopsida',
        phylum: 'Tracheophyta',
        order: 'Myrtales',
        family: 'Combretaceae',
        conservationStatus: 'Least Concern',
        habitat: 'Tropical and subtropical regions',
        description: 'Ornamental vine with fragrant flowers that change color',
        population: 'Stable',
        diet: 'Prefers rich, loamy soil with good drainage',
        growthType: 'Perennial',
        height: '3-10 m (as a vine)',
        image: getImage(fallbackImage)
      },
      {
        id: 20,
        name: 'Ipomoea carica',
        commonName: 'Ipomoea',
        class: 'Magnoliopsida',
        phylum: 'Tracheophyta',
        order: 'Solanales',
        family: 'Convolvulaceae',
        conservationStatus: 'Least Concern',
        habitat: 'Tropical and subtropical regions',
        description: 'Ornamental vine with trumpet-shaped flowers',
        population: 'Stable',
        diet: 'Grows well in moderately fertile, well-drained soil',
        growthType: 'Perennial',
        height: '2-4 m (as a vine)',
        image: getImage(fallbackImage)
      },
      {
        id: 21,
        name: 'Trachelospermum jasminoides',
        commonName: 'Star jasmine',
        class: 'Magnoliopsida',
        phylum: 'Tracheophyta',
        order: 'Gentianales',
        family: 'Apocynaceae',
        conservationStatus: 'Least Concern',
        habitat: 'Tropical and subtropical regions',
        description: 'Fragrant flowering vine with star-shaped white flowers',
        population: 'Stable',
        diet: 'Prefers fertile, well-drained soil with organic compost',
        growthType: 'Perennial',
        height: '3-6 m (as a vine)',
        image: getImage(fallbackImage)
      },
      {
        id: 22,
        name: 'Passiflora caerulea',
        commonName: 'Rakhee flower',
        class: 'Magnoliopsida',
        phylum: 'Tracheophyta',
        order: 'Malpighiales',
        family: 'Passifloraceae',
        conservationStatus: 'Least Concern',
        habitat: 'Tropical and subtropical regions',
        description: 'Ornamental vine with intricate blue and white flowers',
        population: 'Stable',
        diet: 'Thrives in well-drained, fertile soil with balanced nutrients',
        growthType: 'Perennial',
        height: '3-9 m (as a vine)',
        image: getImage(fallbackImage)
      },
       {
    id: 23,
    name: "Andrographis paniculata",
    commonName: "Green Chiretta / Kalmegh",
    class: "Magnoliopsida",
    phylum: "Tracheophyta",
    order: "Lamiales",
    family: "Acanthaceae",
    conservationStatus: "Not Evaluated",
    habitat: "Tropical and subtropical regions; commonly found in moist, shady places",
    description: "An annual herb known for its bitter taste; has small white flowers with purple markings",
    age: "Typically one growing season",
    height: "30-110 cm",
    lifespan: "Annual",
    image: getImage(fallbackImage)
  },
  {
    id: 24,
    name: "Barleria prionitis",
    commonName: "Porcupine Flower",
    class: "Magnoliopsida",
    phylum: "Tracheophyta",
    order: "Lamiales",
    family: "Acanthaceae",
    conservationStatus: "Not Evaluated",
    habitat: "Tropical and subtropical regions; often found in open fields and along roadsides",
    description: "A spiny shrub with bright yellow flowers; used in traditional medicine",
    age: "Perennial",
    height: "1-2 meters",
    lifespan: "Several years",
    image: getImage(fallbackImage)
  },
  {
    id: 25,
    name: "Blepharis maderaspatensis",
    commonName: "Maderaspatnam Blepharis",
    class: "Magnoliopsida",
    phylum: "Tracheophyta",
    order: "Lamiales",
    family: "Acanthaceae",
    conservationStatus: "Not Evaluated",
    habitat: "Dry and rocky areas, often in open grasslands",
    description: "A small herb with blue to purple flowers; used in traditional medicine",
    age: "Annual",
    height: "10-30 cm",
    lifespan: "Short-lived",
    image: getImage(fallbackImage)
  },
  {
    id: 26,
    name: "Justicia prostrata",
    commonName: "Prostrate Justicia",
    class: "Magnoliopsida",
    phylum: "Tracheophyta",
    order: "Lamiales",
    family: "Acanthaceae",
    conservationStatus: "Not Evaluated",
    habitat: "Moist and shady regions, often near streams and wetlands",
    description: "A creeping herb with small purple flowers; commonly used as ground cover",
    age: "Annual",
    height: "5-20 cm",
    lifespan: "Short-lived",
    image: getImage(fallbackImage)
  },
  {
    id: 27,
    name: "Lepidagathis cristata",
    commonName: "Crested Lepidagathis",
    class: "Magnoliopsida",
    phylum: "Tracheophyta",
    order: "Lamiales",
    family: "Acanthaceae",
    conservationStatus: "Not Evaluated",
    habitat: "Rocky slopes and dry grasslands",
    description: "A small herb with striking blue or violet flowers with crested lobes",
    age: "Annual",
    height: "15-50 cm",
    lifespan: "Short-lived",
    image: getImage(fallbackImage) 
  },
  {
    id: 28,
    name: "Stenosiphonium russellianum",
    commonName: "Russell's Stenosiphonium",
    class: "Magnoliopsida",
    phylum: "Tracheophyta",
    order: "Lamiales",
    family: "Acanthaceae",
    conservationStatus: "Not Evaluated",
    habitat: "Moist and shaded areas, often found in forests",
    description: "A small herbaceous plant with tubular blue flowers",
    age: "Annual",
    height: "30-70 cm",
    lifespan: "Short-lived",
    image: getImage(fallbackImage)
  },
  {
    id: 29,
    name: "Furcraea foetida",
    commonName: "Giant False Agave",
    class: "Liliopsida",
    phylum: "Tracheophyta",
    order: "Asparagales",
    family: "Agavaceae",
    conservationStatus: "Not Evaluated",
    habitat: "Tropical and subtropical regions; often found in dry areas",
    description: "A large, fast-growing succulent with sword-like leaves",
    age: "Perennial",
    height: "1.5-3 meters",
    lifespan: "Several decades",
    image: getImage(fallbackImage)
  },
  {
    id: 30,
    name: "Buchanania axillaris",
    commonName: "Axil Buchanania",
    class: "Magnoliopsida",
    phylum: "Tracheophyta",
    order: "Sapindales",
    family: "Anacardiaceae",
    conservationStatus: "Not Evaluated",
    habitat: "Tropical forests and dry deciduous regions",
    description: "A medium-sized tree with simple leaves and small white flowers",
    age: "Perennial",
    height: "10-15 meters",
    lifespan: "Several decades",
    image: getImage(fallbackImage)
  },
  {
    id: 31,
    name: "Lannea coromandelica",
    commonName: "Indian Ash Tree",
    class: "Magnoliopsida",
    phylum: "Tracheophyta",
    order: "Sapindales",
    family: "Anacardiaceae",
    conservationStatus: "Not Evaluated",
    habitat: "Tropical dry forests and plains",
    description: "A deciduous tree with rough bark and small red flowers; used for timber and medicinal purposes",
    age: "Perennial",
    height: "10-20 meters",
    lifespan: "Several decades",
    image: getImage(fallbackImage)},
  {
    id: 32,
    name: "Carissa carandas",
    commonName: "Karonda / Bengal Currant",
    class: "Magnoliopsida",
    phylum: "Tracheophyta",
    order: "Gentianales",
    family: "Apocynaceae",
    conservationStatus: "Not Evaluated",
    habitat: "Tropical and subtropical regions; commonly found in dry scrub and forests",
    description: "A spiny shrub with white flowers and edible, tangy fruits",
    age: "Perennial",
    height: "2-3 meters",
    lifespan: "Several decades",
    image: getImage(fallbackImage)
  },
  {
    id: 33,
    name: 'Carissa spinarum L.',
    commonName: 'Conkerberry',
    class: 'Magnoliopsida',
    phylum: 'Tracheophyta',
    order: 'Gentianales',
    family: 'Apocynaceae',
    conservationStatus: 'Not Evaluated',
    habitat: 'Dry forests and scrublands.',
    description: 'A thorny shrub bearing small, edible black berries.',
    age: 'Perennial',
    height: '1 to 3 meters',
    lifespan: 'Several decades',
    image: getImage(fallbackImage)
  },
  {
    id: 34,
    name: 'Phoenix humilis (L.) Cav.',
    commonName: 'Dwarf Date Palm',
    class: 'Liliopsida',
    phylum: 'Tracheophyta',
    order: 'Arecales',
    family: 'Arecaceae',
    conservationStatus: 'Not Evaluated',
    habitat: 'Tropical and subtropical regions.',
    description: 'A small palm species with a slender trunk and feather-like leaves.',
    age: 'Perennial',
    height: '2–4 meters',
    lifespan: '50–100 years',
    image: getImage(fallbackImage)
  },
  {
    id: 35,
    name: 'Phoenix sylvestris (L.) Roxb.',
    commonName: 'Wild Date Palm',
    class: 'Liliopsida',
    phylum: 'Tracheophyta',
    order: 'Arecales',
    family: 'Arecaceae',
    conservationStatus: 'Not Evaluated',
    habitat: 'Riverbanks and dry forests.',
    description: 'A tall palm with edible dates and a fibrous trunk.',
    age: 'Perennial',
    height: '10–15 meters',
    lifespan: '100+ years',
    image: getImage(fallbackImage)
  },
  {
    id: 36,
    name: 'Caralluma adscendens (Roxb.) Haw.',
    commonName: 'Caralluma',
    class: 'Magnoliopsida',
    phylum: 'Tracheophyta',
    order: 'Gentianales',
    family: 'Asclepiadaceae',
    conservationStatus: 'Not Evaluated',
    habitat: 'Arid and rocky regions.',
    description: 'A succulent herb with fleshy stems and star-shaped flowers.',
    age: 'Perennial',
    height: '30–60 cm',
    lifespan: 'Several years',
    image: getImage(fallbackImage)
  },
  {
    id: 37,
    name: 'Tylophora indica (Burm.f.) Merr.',
    commonName: 'Indian Tylophora',
    class: 'Magnoliopsida',
    phylum: 'Tracheophyta',
    order: 'Gentianales',
    family: 'Asclepiadaceae',
    conservationStatus: 'Not Evaluated',
    habitat: 'Moist deciduous forests.',
    description: 'A twining vine with medicinal properties, used in Ayurveda.',
    age: 'Perennial',
    height: 'Climbing up to 2 meters',
    lifespan: 'Several years',
    image: getImage(fallbackImage)
  },
  {
    id: 38,
    name: 'Asparagus racemosus Willd.',
    commonName: 'Shatavari',
    class: 'Liliopsida',
    phylum: 'Tracheophyta',
    order: 'Asparagales',
    family: 'Asparagaceae',
    conservationStatus: 'Not Evaluated',
    habitat: 'Tropical and subtropical forests.',
    description: 'A climbing plant known for its medicinal tuberous roots.',
    age: 'Perennial',
    height: '1–2 meters',
    lifespan: 'Several years',
    image: getImage(fallbackImage)
  },
  {
    id: 39,
    name: 'Sphaeranthus indicus L.',
    commonName: 'East Indian Globe Thistle',
    class: 'Magnoliopsida',
    phylum: 'Tracheophyta',
    order: 'Asterales',
    family: 'Asteraceae',
    conservationStatus: 'Not Evaluated',
    habitat: 'Wetlands and grasslands.',
    description: 'A medicinal herb with spherical purple flowers.',
    age: 'Annual',
    height: '30–60 cm',
    lifespan: '1 year',
    image: getImage(fallbackImage)
  },
  {
    id: 40,
    name: 'Dolichandrone atrovirens (Heyne ex Roth) Sprague',
    commonName: 'Forest Trumpet',
    class: 'Magnoliopsida',
    phylum: 'Tracheophyta',
    order: 'Lamiales',
    family: 'Bignoniaceae',
    conservationStatus: 'Not Evaluated',
    habitat: 'Tropical and subtropical forests.',
    description: 'A sapling tree with trumpet-shaped flowers.',
    age: 'Perennial',
    height: 'Up to 10 meters',
    lifespan: 'Several decades',
    image: getImage(fallbackImage)
  },
  {
    id: 41,
    name: 'Carmona retusa (Vahl) Masamune',
    commonName: 'Fukien Tea',
    class: 'Magnoliopsida',
    phylum: 'Tracheophyta',
    order: 'Boraginales',
    family: 'Boraginaceae',
    conservationStatus: 'Not Evaluated',
    habitat: 'Tropical forests and coastal areas.',
    description: 'A small shrub often used for bonsai with tiny white flowers.',
    age: 'Perennial',
    height: '1–3 meters',
    lifespan: 'Several decades',
    image: getImage(fallbackImage)
  },
  {
    id: 42,
    name: 'Coldenia procumbens L.',
    commonName: 'Coldenia',
    class: 'Magnoliopsida',
    phylum: 'Tracheophyta',
    order: 'Boraginales',
    family: 'Boraginaceae',
    conservationStatus: 'Not Evaluated',
    habitat: 'Dry and sandy areas.',
    description: 'A low-growing, mat-forming herb with medicinal uses.',
    age: 'Annual',
    height: '5–15 cm',
    lifespan: '1 year',
    image: getImage(fallbackImage)
  },
      { 

    id: 43, 

    name: 'Cocos nucifera', 

    commonName: 'Coconut Tree', 

    class: 'Liliopsida', 

    phylum: 'Tracheophyta', 

    order: 'Arecales', 

    family: 'Arecaceae', 

    conservationStatus: 'Not Evaluated', 

    habitat: 'Tropical coastal regions', 

    description: 'Tall palm tree known for its large, edible fruit, the coconut.', 

    age: '60-80 years', 

    height: '20-30 meters', 

    lifespan: '60-100 years', 

    image: getImage(fallbackImage)
} ,
      { 

    id: 44, 

    name: 'Emblica officinale', 

    commonName: 'Amla', 

    class: 'Magnoliopsida', 

    phylum: 'Tracheophyta', 

    order: 'Malpighiales', 

    family: 'Phyllanthaceae', 

    conservationStatus: 'Least Concern', 

    habitat: 'Tropical and subtropical regions', 

    description: 'A small to medium-sized tree known for its sour, vitamin C-rich fruit.', 

    age: '50-70 years', 

    height: '8-18 meters', 

    lifespan: '60-70 years', 

    image: getImage(fallbackImage) 

} ,
      { 

    id: 45, 

    name: 'Annona squamosa Linn.', 

    commonName: 'Custard Apple', 

    class: 'Magnoliopsida', 

    phylum: 'Tracheophyta', 

    order: 'Magnoliales', 

    family: 'Annonaceae', 

    conservationStatus: 'Least Concern', 

    habitat: 'Tropical and subtropical regions', 

    description: 'A small tree known for its sweet, pulpy fruit with a scaly texture.', 

    age: '20-25 years', 

    height: '3-8 meters', 

    lifespan: '20-30 years', 

    image: getImage(fallbackImage) 

} ,
      { 

    id: 46, 

    name: 'Syzygium cumini', 

    commonName: 'Jamun', 

    class: 'Magnoliopsida', 

    phylum: 'Tracheophyta', 

    order: 'Myrtales', 

    family: 'Myrtaceae', 

    conservationStatus: 'Least Concern', 

    habitat: 'Tropical and subtropical regions', 

    description: 'An evergreen tree known for its dark purple, edible berries with a tangy flavor.', 

    age: '100+ years', 

    height: '10-30 meters', 

    lifespan: '50-100 years', 

    image: getImage(fallbackImage) 

} ,
      { 

    id: 47, 

    name: 'Artocarpus heterophyllus', 

    commonName: 'Jackfruit', 

    class: 'Magnoliopsida', 

    phylum: 'Tracheophyta', 

    order: 'Rosales', 

    family: 'Moraceae', 

    conservationStatus: 'Least Concern', 

    habitat: 'Tropical regions', 

    description: 'A large, tropical tree known for producing the largest tree-borne fruit, with edible sweet bulbs.', 

    age: '100+ years', 

    height: '8-25 meters', 

    lifespan: '60-70 years', 

    image: getImage(fallbackImage) 

} ,
      { 

    id: 48, 

    name: 'Citrus sinensis', 

    commonName: 'Sweet Orange', 

    class: 'Magnoliopsida', 

    phylum: 'Tracheophyta', 

    order: 'Sapindales', 

    family: 'Rutaceae', 

    conservationStatus: 'Not Evaluated', 

    habitat: 'Tropical and subtropical regions', 

    description: 'A small to medium-sized tree known for its sweet, juicy orange fruit.', 

    age: '50-100 years', 

    height: '7-15 meters', 

    lifespan: '50-100 years', 

    image: getImage(fallbackImage) 

} ,
      { 

    id: 49, 

    name: 'Punica granatum', 

    commonName: 'Pomegranate', 

    class: 'Magnoliopsida', 

    phylum: 'Tracheophyta', 

    order: 'Myrtales', 

    family: 'Lythraceae', 

    conservationStatus: 'Least Concern', 

    habitat: 'Tropical and subtropical regions', 

    description: 'A deciduous shrub or small tree known for its large, red fruit filled with juicy seeds.', 

    age: '200+ years', 

    height: '5-10 meters', 

    lifespan: '50-200 years', 

    image: getImage(fallbackImage) 

} ,
      { 

    id: 50, 

    name: 'Manilkara zapota', 

    commonName: 'Sapota', 

    class: 'Magnoliopsida', 

    phylum: 'Tracheophyta', 

    order: 'Ericales', 

    family: 'Sapotaceae', 

    conservationStatus: 'Least Concern', 

    habitat: 'Tropical regions', 

    description: 'An evergreen tree known for its sweet, brown, edible fruit with a grainy texture.', 

    age: '50-100 years', 

    height: '9-18 meters', 

    lifespan: '60-100 years', 

    image: getImage(fallbackImage) 

} ,
      { 

    id: 51, 

    name: 'Ficus carica', 

    commonName: 'Fig', 

    class: 'Magnoliopsida', 

    phylum: 'Tracheophyta', 

    order: 'Rosales', 

    family: 'Moraceae', 

    conservationStatus: 'Least Concern', 

    habitat: 'Subtropical and Mediterranean regions', 

    description: 'A small deciduous tree or large shrub known for its edible fruit, the fig.', 

    age: '50-100 years', 

    height: '3-10 meters', 

    lifespan: '50-75 years', 

    image: getImage(fallbackImage) 

} ,
      { 

    id: 52, 

    name: 'Azadirachta indica', 

    commonName: 'Neem', 

    class: 'Magnoliopsida', 

    phylum: 'Tracheophyta', 

    order: 'Sapindales', 

    family: 'Meliaceae', 

    conservationStatus: 'Least Concern', 

    habitat: 'Tropical and subtropical regions', 

    description: 'A large, fast-growing evergreen tree known for its medicinal properties and bitter seeds.', 

    age: '150-200 years', 

    height: '15-30 meters', 

    lifespan: '150-200 years', 

    image: getImage(fallbackImage) 

} ,
      { 

    id: 53, 

    name: 'Aegle marmelos', 

    commonName: 'Bael', 

    class: 'Magnoliopsida', 

    phylum: 'Tracheophyta', 

    order: 'Sapindales', 

    family: 'Rutaceae', 

    conservationStatus: 'Least Concern', 

    habitat: 'Tropical and subtropical regions', 

    description: 'A medium-sized deciduous tree known for its fragrant flowers and edible, hard-shelled fruit.', 

    age: '100+ years', 

    height: '6-15 meters', 

    lifespan: '60-100 years', 

    image: getImage(fallbackImage) 

},
      { 

    id: 54, 

    name: 'Ficus religiosa', 

    commonName: 'Peepal', 

    class: 'Magnoliopsida', 

    phylum: 'Tracheophyta', 

    order: 'Rosales', 

    family: 'Moraceae', 

    conservationStatus: 'Least Concern', 

    habitat: 'Tropical and subtropical regions', 

    description: 'A large, long-living, sacred fig tree known for its heart-shaped leaves.', 

    age: '200+ years', 

    height: '20-30 meters', 

    lifespan: 'Up to 1500 years', 

    image: getImage(fallbackImage) 

} ,
      { 

    id: 55, 

    name: 'Phoenix sylvestris', 

    commonName: 'Wild Date', 

    class: 'Liliopsida', 

    phylum: 'Tracheophyta', 

    order: 'Arecales', 

    family: 'Arecaceae', 

    conservationStatus: 'Least Concern', 

    habitat: 'Tropical and subtropical regions, often near water sources', 

    description: 'A tall palm tree known for its sweet, edible fruit similar to dates.', 

    age: '100+ years', 

    height: '10-15 meters', 

    lifespan: '100-150 years', 

    image: getImage(fallbackImage) 

} 

    ]
  }
];

export default taxonomy;
