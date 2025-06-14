import { useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';

function OrderSuccess() {
  const location = useLocation();
  const { orderNumber, total, email } = location.state || {};

  useEffect(() => {
    // Scroll to top when component mounts
    window.scrollTo(0, 0);
  }, []);

  if (!orderNumber) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-gray-800 mb-4">Order not found</h2>
          <Link
            to="/"
            className="bg-primary-500 text-white px-6 py-3 rounded-lg hover:bg-primary-600 transition-colors"
          >
            Return Home
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="bg-white rounded-xl shadow-md p-8 text-center animate-fade-in">
          {/* Success Icon */}
          <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
            <svg className="w-10 h-10 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
            </svg>
          </div>

          <h1 className="text-3xl lg:text-4xl font-serif font-bold text-gray-800 mb-4">
            Order Confirmed!
          </h1>
          
          <p className="text-xl text-gray-600 mb-8">
            Thank you for your purchase. Your order has been successfully placed.
          </p>

          {/* Order Details */}
          <div className="bg-gray-50 rounded-lg p-6 mb-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-left">
              <div>
                <h3 className="text-sm font-semibold text-gray-800 mb-2">Order Number</h3>
                <p className="text-lg font-mono text-primary-600">{orderNumber}</p>
              </div>
              
              <div>
                <h3 className="text-sm font-semibold text-gray-800 mb-2">Total Amount</h3>
                <p className="text-lg font-semibold text-gray-800">${total?.toFixed(2)}</p>
              </div>
              
              <div>
                <h3 className="text-sm font-semibold text-gray-800 mb-2">Email Confirmation</h3>
                <p className="text-gray-600">{email}</p>
              </div>
              
              <div>
                <h3 className="text-sm font-semibold text-gray-800 mb-2">Estimated Delivery</h3>
                <p className="text-gray-600">5-7 business days</p>
              </div>
            </div>
          </div>

          {/* What's Next */}
          <div className="text-left mb-8">
            <h2 className="text-xl font-semibold text-gray-800 mb-4">What happens next?</h2>
            <div className="space-y-3">
              <div className="flex items-start space-x-3">
                <div className="w-6 h-6 bg-primary-100 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                  <span className="text-primary-600 text-sm font-semibold">1</span>
                </div>
                <div>
                  <h3 className="font-medium text-gray-800">Order Confirmation</h3>
                  <p className="text-gray-600 text-sm">You'll receive an email confirmation shortly with your order details.</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-3">
                <div className="w-6 h-6 bg-primary-100 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                  <span className="text-primary-600 text-sm font-semibold">2</span>
                </div>
                <div>
                  <h3 className="font-medium text-gray-800">Preparation</h3>
                  <p className="text-gray-600 text-sm">Our artisans will carefully prepare and package your handmade items.</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-3">
                <div className="w-6 h-6 bg-primary-100 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                  <span className="text-primary-600 text-sm font-semibold">3</span>
                </div>
                <div>
                  <h3 className="font-medium text-gray-800">Shipping</h3>
                  <p className="text-gray-600 text-sm">You'll receive tracking information once your order ships.</p>
                </div>
              </div>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/products"
              className="bg-primary-500 text-white px-8 py-3 rounded-full font-semibold hover:bg-primary-600 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
            >
              Continue Shopping
            </Link>
            
            <Link
              to="/orders"
              className="border-2 border-primary-500 text-primary-500 px-8 py-3 rounded-full font-semibold hover:bg-primary-500 hover:text-white transition-all duration-300"
            >
              View Orders
            </Link>
          </div>

          {/* Support */}
          <div className="mt-8 pt-8 border-t border-gray-200">
            <p className="text-gray-600 mb-4">
              Need help with your order?
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center text-sm">
              <Link
                to="/contact"
                className="text-primary-600 hover:text-primary-500 transition-colors"
              >
                Contact Support
              </Link>
              <span className="hidden sm:inline text-gray-400">•</span>
              <Link
                to="/faq"
                className="text-primary-600 hover:text-primary-500 transition-colors"
              >
                FAQ
              </Link>
              <span className="hidden sm:inline text-gray-400">•</span>
              <Link
                to="/shipping"
                className="text-primary-600 hover:text-primary-500 transition-colors"
              >
                Shipping Info
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default OrderSuccess;