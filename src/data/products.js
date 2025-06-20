import IMG1 from '../assets/magnet1.jpeg';
import IMG2 from '../assets/magnet2.jpeg';
import IMG3 from '../assets/img10.jpg';
import IMG4 from '../assets/img1.jpg';
import IMG5 from '../assets/img2.jpg';
import IMG6 from '../assets/img3.jpg';
import IMG7 from '../assets/img4.jpg';
import IMG8 from '../assets/img5.jpg';
import IMG9 from '../assets/img6.jpg';
import IMG11 from '../assets/img8.jpg';
import IMG12 from '../assets/Candle bouquet.jpeg';
import IMG13 from '../assets/img17.png';
import IMG14 from '../assets/CANDLE.png'
import IMG15 from '../assets/CANDLE1.png'
import IMG16 from '../assets/CANDLE2.png'
import IMG17 from '../assets/CANDLE3.png'
import IMG18 from '../assets/TISSUE PAINTING.jpeg';
import IMG19 from '../assets/VAS.jpeg';


export const products = [
  {
    id: 1,
    name: "Costomized fridge magnet (Atleast 2 pieces order for one time.) ",
    price: 600,
    originalPrice: 799,
    category: "Fridge Magnets",
    description: "Add a personal touch to your space with our customized fridge magnets! Perfect for memories, quotes, or branding – designed just for you.",
    images: [
     IMG1,IMG2,IMG3
    ],
    featured: true,
    inStock: true,
    rating: 4.8,
    reviews: 127,
    tags: ["fridgecraft", "costamized", "craft"]
  },
  {
    id: 2,
    name: "Wooden Photo Frame",
    price: 1800 ,
    category: "Frames",
    description: "Beautifully crafted vintage-style wooden photo frame with intricate carved details. Perfect for displaying your cherished memories. Made from reclaimed oak wood with a natural finish.",
    images: [
      IMG8,IMG9,IMG7
    ],
    featured: true,
    inStock: true,
    rating: 4.6,
    reviews: 89,
    tags: ["vintage", "wood", "handmade", "rustic"]
  },
  {
    id: 3,
    name: "Customized Vas",
    price: 1200,
    originalPrice: 1499,
    category: "Miniature art",
    description: "Romantic heart-shaped wall art perfect for Valentine's Day or year-round decoration. Hand-painted with love and featuring delicate floral patterns in soft pink and gold tones.",
    images: [
     IMG19
    ],
    featured: true,
    inStock: true,
    rating: 4.9,
    reviews: 203,
    tags: ["valentine", "romantic", "wall art", "handpainted"]
  },
  {
    id: 4,
    name: "Texture art" ,
    price: 600,
    category: "Tissue art",
    description: "Calming lavender essential oil candle perfect for relaxation and stress relief. Made with premium lavender oil and natural soy wax for a pure, therapeutic experience.",
    images: [
      IMG18
    ],
    featured: false,
    inStock: false,
    rating: 4.1,
    reviews: 156,
    tags: ["lavender", "essential oil", "relaxation", "aromatherapy"]
  },
  {
    id: 5,
    name: "Candle Bouquet ",
    price: 244,
    category: "VALENTINE SPECIAL",
    description: "Set of three rustic barnwood frames in varying sizes. Perfect for creating a gallery wall with your favorite photos. Each frame is unique with natural weathering and character.",
    images: [
      IMG12
    ],
    featured: false,
    inStock: true,
    rating: 4.8,
    reviews: 72,
    tags: ["rustic", "barnwood", "set", "gallery wall"]
  },
  {
    id: 6,
    name: "Cented candles",
    price: 300,
    category: "Candles",
    description: "Elegant wooden keepsake box for storing love letters, photos, and precious memories. Hand-engraved with romantic quotes and finished with a soft velvet interior.",
    images: [
     IMG14,IMG15,IMG16,IMG17
    ],
    featured: false,
    inStock: true,
    rating: 4.8,
    reviews: 94,
    tags: ["keepsake", "romantic", "wooden", "engraved"]
  },
  {
    id: 7,
    name: "Customized hoops",
    price: 799,
    originalPrice: 999.00,
    category: "Hoops",
    description: "Refreshing eucalyptus mint candle set featuring three different sizes. Perfect for creating a spa-like atmosphere at home. Made with natural essential oils and soy wax.",
    images: [
      IMG13
    ],
    featured: false,
    inStock: true,
    rating: 4.6,
    reviews: 118,
    tags: ["eucalyptus", "mint", "spa", "trio set"]
  },
];

export const categories = [
  { id: 'all', name: 'All Products', count: products.length },
  { id: 'Fridge Magnets', name: 'Fridge Magnets', count: products.filter(p => p.category === 'Fridge Magnets').length },
  { id: 'Frames', name: 'Frames', count: products.filter(p => p.category === 'Frames').length },
  { id: 'Tissue art', name: "Tissue art", count: products.filter(p => p.category === 'Tissue art').length },
  { id: 'VALENTINE SPECIAL', name: "VALENTINE SPECIAL", count: products.filter(p => p.category === 'VALENTINE SPECIAL').length },
  { id: 'Candles', name: "Candles", count: products.filter(p => p.category === 'Candles').length },
  { id: 'Hoops', name: "Hoops", count: products.filter(p => p.category === 'Hoops').length }

];