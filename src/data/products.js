import IMG1 from '../assets/magnet1.jpeg';
import IMG2 from '../assets/magnet2.jpeg';
import IMG3 from '../assets/img10.jpg';
import IMG4 from '../assets/img1.jpg';
import IMG5 from '../assets/img2.jpg';
import IMG6 from '../assets/img3.jpg';
import IMG7 from '../assets/img4.jpg';
import IMG8 from '../assets/img5.jpg';
import IMG9 from '../assets/img6.jpg';
import IMG10 from '../assets/img7.jpg';
import IMG11 from '../assets/img8.jpg';
import IMG12 from '../assets/img9.jpg';
import IMG13 from '../assets/img10.jpg';
import IMG14 from '../assets/img11.jpg';
import IMG15 from '../assets/img12.jpg';
import IMG16 from '../assets/img13.jpg';


export const products = [
  {
    id: 1,
    name: "Costomized fridge magnet ",
    price: 28.99,
    originalPrice: 35.99,
    category: "candles",
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
    price: 45.00,
    category: "frames",
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
    name: "Miniature art",
    price: 32.50,
    originalPrice: 42.00,
    category: "valentine",
    description: "Romantic heart-shaped wall art perfect for Valentine's Day or year-round decoration. Hand-painted with love and featuring delicate floral patterns in soft pink and gold tones.",
    images: [
      "https://images.pexels.com/photos/1557652/pexels-photo-1557652.jpeg?auto=compress&cs=tinysrgb&w=800",
      "https://images.pexels.com/photos/1557651/pexels-photo-1557651.jpeg?auto=compress&cs=tinysrgb&w=800"
    ],
    featured: true,
    inStock: true,
    rating: 4.9,
    reviews: 203,
    tags: ["valentine", "romantic", "wall art", "handpainted"]
  },
  {
    id: 4,
    name: "Lavender Essential Oil Candle",
    price: 24.99,
    category: "candles",
    description: "Calming lavender essential oil candle perfect for relaxation and stress relief. Made with premium lavender oil and natural soy wax for a pure, therapeutic experience.",
    images: [
      "https://images.pexels.com/photos/4207892/pexels-photo-4207892.jpeg?auto=compress&cs=tinysrgb&w=800",
      "https://images.pexels.com/photos/4207893/pexels-photo-4207893.jpeg?auto=compress&cs=tinysrgb&w=800"
    ],
    featured: false,
    inStock: true,
    rating: 4.7,
    reviews: 156,
    tags: ["lavender", "essential oil", "relaxation", "aromatherapy"]
  },
  {
    id: 5,
    name: "Rustic Barnwood Frame Set",
    price: 78.00,
    category: "frames",
    description: "Set of three rustic barnwood frames in varying sizes. Perfect for creating a gallery wall with your favorite photos. Each frame is unique with natural weathering and character.",
    images: [
      "https://images.pexels.com/photos/4239127/pexels-photo-4239127.jpeg?auto=compress&cs=tinysrgb&w=800",
      "https://images.pexels.com/photos/4239128/pexels-photo-4239128.jpeg?auto=compress&cs=tinysrgb&w=800"
    ],
    featured: false,
    inStock: true,
    rating: 4.5,
    reviews: 72,
    tags: ["rustic", "barnwood", "set", "gallery wall"]
  },
  {
    id: 6,
    name: "Love Letter Keepsake Box",
    price: 39.99,
    category: "valentine",
    description: "Elegant wooden keepsake box for storing love letters, photos, and precious memories. Hand-engraved with romantic quotes and finished with a soft velvet interior.",
    images: [
      "https://images.pexels.com/photos/1666065/pexels-photo-1666065.jpeg?auto=compress&cs=tinysrgb&w=800",
      "https://images.pexels.com/photos/1666066/pexels-photo-1666066.jpeg?auto=compress&cs=tinysrgb&w=800"
    ],
    featured: false,
    inStock: true,
    rating: 4.8,
    reviews: 94,
    tags: ["keepsake", "romantic", "wooden", "engraved"]
  },
  {
    id: 7,
    name: "Eucalyptus Mint Candle Trio",
    price: 65.00,
    originalPrice: 80.00,
    category: "candles",
    description: "Refreshing eucalyptus mint candle set featuring three different sizes. Perfect for creating a spa-like atmosphere at home. Made with natural essential oils and soy wax.",
    images: [
      "https://images.pexels.com/photos/7319070/pexels-photo-7319070.jpeg?auto=compress&cs=tinysrgb&w=800",
      "https://images.pexels.com/photos/7319071/pexels-photo-7319071.jpeg?auto=compress&cs=tinysrgb&w=800"
    ],
    featured: false,
    inStock: false,
    rating: 4.6,
    reviews: 118,
    tags: ["eucalyptus", "mint", "spa", "trio set"]
  },
  {
    id: 8,
    name: "Antique Gold Mirror Frame",
    price: 89.99,
    category: "frames",
    description: "Ornate antique gold mirror frame with intricate baroque-style details. Perfect as a statement piece for any room. Hand-finished with gold leaf for an authentic vintage look.",
    images: [
      "https://images.pexels.com/photos/4239091/pexels-photo-4239091.jpeg?auto=compress&cs=tinysrgb&w=800",
      "https://images.pexels.com/photos/4239092/pexels-photo-4239092.jpeg?auto=compress&cs=tinysrgb&w=800"
    ],
    featured: false,
    inStock: true,
    rating: 4.9,
    reviews: 45,
    tags: ["antique", "gold", "baroque", "mirror"]
  }
];

export const categories = [
  { id: 'all', name: 'All Products', count: products.length },
  { id: 'candles', name: 'Candles', count: products.filter(p => p.category === 'candles').length },
  { id: 'frames', name: 'Frames', count: products.filter(p => p.category === 'frames').length },
  { id: 'valentine', name: "Valentine's Day", count: products.filter(p => p.category === 'valentine').length }
];