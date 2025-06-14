import { Link } from 'react-router-dom';
import { products } from '../data/products';
import ProductCard from '../components/ProductCard';
import VIDEO from '../assets/img20.mp4';

function Home() {
  const featuredProducts = products.filter(product => product.featured);

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-primary-50 to-secondary-50 py-20 lg:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8 animate-slide-up">
              <h1 className="text-4xl lg:text-6xl font-serif font-bold text-gray-800 leading-tight">
                Handcrafted with
                <span className="text-primary-500"> Love</span>
              </h1>
              <p className="text-xl text-gray-600 leading-relaxed">
                Discover unique, artisanal decorative items that bring warmth and personality to your home. 
                Each piece is carefully crafted by skilled artisans with passion and attention to detail.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  to="/products"
                  className="bg-primary-500 text-white px-8 py-4 rounded-full font-semibold text-lg hover:bg-primary-600 transition-all duration-300 text-center shadow-lg hover:shadow-xl transform hover:-translate-y-1"
                >
                  Shop Now
                </Link>
                <Link
                  to="/about"
                  className="border-2 border-primary-500 text-primary-500 px-8 py-4 rounded-full font-semibold text-lg hover:bg-primary-500 hover:text-white transition-all duration-300 text-center"
                >
                  Learn More
                </Link>
              </div>
            </div>
            <div className="relative animate-fade-in">
              <div className="aspect-square rounded-full bg-gradient-to-br from-primary-200 to-secondary-200 p-8">
                <video
                  src={VIDEO}
                  alt="Handmade decorative items"
                  className="w-full h-full object-cover object-center rounded-full shadow-2xl"
                  autoPlay
                  muted
                  loop
                ></video>
              </div>
              <div className="absolute -top-4 -right-4 w-24 h-24 bg-accent-500 rounded-full opacity-80 animate-pulse"></div>
              <div className="absolute -bottom-6 -left-6 w-16 h-16 bg-secondary-500 rounded-full opacity-60 animate-pulse delay-1000"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-serif font-bold text-gray-800 mb-4">
              Why Choose Handmade Haven
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Every product in our collection is unique and made with the finest materials and craftsmanship.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center space-y-4 animate-slide-up">
              <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto">
                <svg className="w-8 h-8 text-primary-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-800">Made with Love</h3>
              <p className="text-gray-600">
                Each item is crafted with care and attention to detail by skilled artisans who take pride in their work.
              </p>
            </div>
            
            <div className="text-center space-y-4 animate-slide-up delay-150">
              <div className="w-16 h-16 bg-secondary-100 rounded-full flex items-center justify-center mx-auto">
                <svg className="w-8 h-8 text-secondary-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-800">Quality Guaranteed</h3>
              <p className="text-gray-600">
                We use only the finest materials and techniques to ensure every product meets our high standards.
              </p>
            </div>
            
            <div className="text-center space-y-4 animate-slide-up delay-300">
              <div className="w-16 h-16 bg-accent-100 rounded-full flex items-center justify-center mx-auto">
                <svg className="w-8 h-8 text-accent-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-800">Fast Shipping</h3>
              <p className="text-gray-600">
                Quick and secure delivery to your doorstep, with careful packaging to protect your purchase.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-serif font-bold text-gray-800 mb-4">
              Featured Products
            </h2>
            <p className="text-xl text-gray-600">
              Discover our most popular handcrafted items
            </p>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredProducts.map((product, index) => (
              <div key={product.id} className={`animate-slide-up delay-${index * 100}`}>
                <ProductCard product={product} />
              </div>
            ))}
          </div>
          
          <div className="text-center mt-12">
            <Link
              to="/products"
              className="inline-flex items-center space-x-2 bg-primary-500 text-white px-8 py-3 rounded-full font-semibold hover:bg-primary-600 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
            >
              <span>View All Products</span>
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="py-16 bg-gradient-to-r from-primary-500 to-secondary-500">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl lg:text-4xl font-serif font-bold text-white mb-4">
            Stay in Touch
          </h2>
          <p className="text-xl text-white opacity-90 mb-8">
            Get updates on new products, special offers, and artisan stories
          </p>
          
          <div className="max-w-md mx-auto">
            <div className="flex flex-col sm:flex-row gap-4">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-6 py-3 rounded-full text-gray-800 placeholder-gray-500 focus:outline-none focus:ring-4 focus:ring-white focus:ring-opacity-50"
              />
              <button className="bg-white text-primary-500 px-8 py-3 rounded-full font-semibold hover:bg-gray-100 transition-colors">
                Subscribe
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Home;