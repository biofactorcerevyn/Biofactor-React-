import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  FaShieldAlt, 
  FaBacteria, 
  FaFlask, 
  FaChartLine,
  FaLeaf,
  FaArrowRight,
  FaSearch,
  FaFilter,
  FaGlassWhiskey,
  FaTint,
  FaDog
} from 'react-icons/fa';
import { GiCow, GiMilkCarton, GiWaterDrop } from "react-icons/gi";
import Navbar from '../layouts/Navbar';
import Footer from '../layouts/Footer';

// Import all images
import buffalo_Livon_1 from '../assets/buffalo_Livon_1.png';
import buffalo_Biomast from '../assets/buffalo_Biomast.png';
import buffalo_Caliber from '../assets/buffalo_Caliber.png';    
import buffalo_Calsegel from '../assets/buffalo_Calsegel.png';
import buffalo_Gallant from '../assets/buffalo_Gallant.png';
import buffalo_Germcidaa from '../assets/buffalo_Germcidaa.png';
import buffalo_FactminNeo_1 from '../assets/buffalo_FactminNeo_1.png';
import buffalo_Biomise from '../assets/buffalo_Biomise.png';
import buffalo_biofactor from '../assets/buffalo_biofactor.png';

const RuminantsProducts = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [activeFilter, setActiveFilter] = useState('all');
  const [activeProduct, setActiveProduct] = useState(null);

  // Products data with images
  const products = [
    {
      id: 1,
      name: 'Gallant',
      category: 'nutrition',
      icon: <FaLeaf className="text-3xl" />,
      image: buffalo_Gallant,
      description: 'Prevents anemia, Provides nutritional support to animal body.',
      detailedDescription: 'Gallant is a comprehensive nutritional supplement specifically formulated for ruminants. It prevents anemia effectively and provides complete nutritional support to enhance overall animal health and improve blood parameters.',
      features: [
        'Prevents anemia effectively',
        'Complete nutritional support',
        'Enhances overall health',
        'Improves blood parameters'
      ],
      benefits: ['Increased vitality', 'Better feed conversion', 'Improved immunity'],
      dosage: '10-20g per animal daily mixed with feed',
      color: 'from-emerald-500 to-green-600'
    },
    {
      id: 2,
      name: 'Biomast',
      category: 'health',
      icon: <FaBacteria className="text-3xl" />,
      image: buffalo_Biomast,
      description: 'Prevents Bovine Mastitis effectively and immediately.',
      detailedDescription: 'Biomast is an advanced formula designed to prevent and control bovine mastitis. Its fast-acting formula provides immediate protection while ensuring long-term udder health.',
      features: [
        'Effective mastitis prevention',
        'Immediate action',
        'Long-lasting protection',
        'Safe for dairy animals'
      ],
      benefits: ['Reduced treatment costs', 'Improved milk quality', 'Longer productive life'],
      dosage: 'Apply topically as directed',
      color: 'from-blue-500 to-cyan-600'
    },
    {
      id: 3,
      name: 'Caliber',
      category: 'milk',
      icon: <GiMilkCarton className="text-3xl" />,
      image: buffalo_Caliber,
      description: 'Enhances milk production, fat %, SNF % and persistency of lactation.',
      detailedDescription: 'Caliber is a specialized supplement that boosts milk production while improving milk quality. It increases fat percentage and SNF content, ensuring higher profitability for dairy farmers.',
      features: [
        'Increases milk production',
        'Improves fat percentage',
        'Enhances SNF percentage',
        'Extends lactation period'
      ],
      benefits: ['Higher milk yield', 'Better milk quality', 'Extended lactation'],
      dosage: '15-25g per animal daily',
      color: 'from-purple-500 to-pink-600'
    },
    {
      id: 4,
      name: 'Germcidaa',
      category: 'sanitation',
      icon: <FaShieldAlt className="text-3xl" />,
      image: buffalo_Germcidaa,
      description: 'Requires less time than all other disinfectants.',
      detailedDescription: 'Germcidaa is a powerful, fast-acting disinfectant that provides broad-spectrum protection against pathogens. Its time-efficient application makes it ideal for busy farming operations.',
      features: [
        'Fast-acting disinfectant',
        'Broad-spectrum protection',
        'Time-efficient application',
        'High effectiveness rate'
      ],
      benefits: ['Quick sanitation', 'Reduced infection risk', 'Cost-effective'],
      dosage: 'Dilute 1:100 for surface disinfection',
      color: 'from-red-500 to-orange-600'
    },
    {
      id: 5,
      name: 'FactminNeo',
      category: 'nutrition',
      icon: <FaFlask className="text-3xl" />,
      image: buffalo_FactminNeo_1,
      description: 'Improves Calcium intake and milk production.',
      detailedDescription: 'FactminNeo optimizes calcium absorption and utilization in ruminants, leading to improved bone health and enhanced milk production.',
      features: [
        'Enhances calcium absorption',
        'Boosts milk production',
        'Improves bone health',
        'Optimizes mineral balance'
      ],
      benefits: ['Stronger bones', 'Higher milk yield', 'Better mineral utilization'],
      dosage: '10-15g per animal daily',
      color: 'from-amber-500 to-yellow-600'
    },
    {
      id: 6,
      name: 'Biomise',
      category: 'growth',
      icon: <FaChartLine className="text-3xl" />,
      image: buffalo_Biomise,
      description: 'Maximize growth and minimize the risk of enteric disease.',
      detailedDescription: 'Biomise promotes healthy growth in young ruminants while protecting against enteric diseases. It improves feed efficiency and ensures optimal weight gain.',
      features: [
        'Promotes healthy growth',
        'Prevents enteric diseases',
        'Improves feed efficiency',
        'Enhances weight gain'
      ],
      benefits: ['Faster growth', 'Reduced mortality', 'Better feed conversion'],
      dosage: '5-10g per animal daily for young stock',
      color: 'from-green-500 to-emerald-600'
    },
    {
      id: 7,
      name: 'Calsegel',
      category: 'milk',
      icon: <GiWaterDrop className="text-3xl" />,
      image: buffalo_Calsegel,
      description: 'Improves calcium content in milk fortified with Magnesium.',
      detailedDescription: 'Calsegel enhances milk calcium content through its magnesium-fortified formula, improving both milk quality and animal health.',
      features: [
        'Enhances milk calcium content',
        'Magnesium fortified formula',
        'Improves milk quality',
        'Supports animal health'
      ],
      benefits: ['Better milk composition', 'Improved animal health', 'Higher market value'],
      dosage: '10-20g per animal daily',
      color: 'from-teal-500 to-cyan-600'
    },
    {
      id: 8,
      name: 'Livon',
      category: 'health',
      icon: <GiCow className="text-3xl" />,
      image: buffalo_Livon_1,
      description: 'Choline Chloride prevents fatty liver syndrome.',
      detailedDescription: 'Livon contains choline chloride which effectively prevents fatty liver syndrome in ruminants, improving liver function and metabolic health.',
      features: [
        'Prevents fatty liver syndrome',
        'Contains choline chloride',
        'Improves liver function',
        'Enhances metabolic health'
      ],
      benefits: ['Healthy liver function', 'Improved metabolism', 'Better overall health'],
      dosage: '15-25g per animal daily',
      color: 'from-indigo-500 to-blue-600'
    }
  ];

  // Categories for filtering - using proper icons
  const categories = [
    { id: 'all', name: 'All Products', icon: <GiCow /> },
    { id: 'nutrition', name: 'Nutrition', icon: <FaLeaf /> },
    { id: 'health', name: 'Health', icon: <FaShieldAlt /> },
    { id: 'milk', name: 'Milk Production', icon: <GiMilkCarton /> },
    { id: 'growth', name: 'Growth', icon: <FaChartLine /> },
    { id: 'sanitation', name: 'Sanitation', icon: <FaBacteria /> }
  ];

  // Filter products based on search and category
  const filteredProducts = products.filter(product => {
    const matchesSearch = product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         product.description.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory = activeFilter === 'all' || product.category === activeFilter;
    return matchesSearch && matchesCategory;
  });

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      <Navbar />
      
      {/* Hero Section with Buffalo Background */}
      <section className="relative h-[80vh] min-h-[600px] overflow-hidden">
        {/* Background Image with Overlay */}
        <div className="absolute inset-0">
          <img 
            src={buffalo_biofactor}
            alt="Buffalo Herd Background"
            className="w-full h-full object-cover"
            onError={(e) => {
              e.target.onerror = null;
              e.target.src = 'https://images.unsplash.com/photo-1546445317-29f4545e9d53?w=1920&h=1080&fit=crop&auto=format';
            }}
          />
          <div className="absolute inset-0 bg-gradient-to-r from-emerald-900/90 via-emerald-800/85 to-green-900/90"></div>
          <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-emerald-900/40"></div>
        </div>
        
        {/* Hero Content */}
        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="container relative mx-auto px-4 h-full flex flex-col justify-center"
        >
          <div className="text-center max-w-5xl mx-auto">
            <motion.div 
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 0.2, duration: 0.5, type: "spring" }}
              className="inline-flex justify-center mb-8"
            >
              <div className="p-5 bg-white/20 backdrop-blur-lg rounded-3xl border-2 border-white/30 shadow-2xl">
                <GiCow className="text-5xl text-emerald-200" />
              </div>
            </motion.div>
            
            <motion.h1 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.7 }}
              className="text-5xl md:text-7xl font-bold mb-6 leading-tight tracking-tight"
            >
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-emerald-300 to-green-300">BIOFACTOR</span>
            </motion.h1>
            
            <motion.p 
              initial={{ opacity: 0, y: 25 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.7 }}
              className="text-2xl md:text-4xl text-emerald-200 font-semibold mb-4"
            >
              Boosting Growth, Enhancing Productivity.
            </motion.p>
            
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.7 }}
              className="text-xl text-emerald-100 mb-10 max-w-3xl mx-auto leading-relaxed"
            >
              Premium Ruminants Products for Optimal Animal Health and Maximum Farm Profitability
            </motion.p>
            
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.6, duration: 0.5 }}
              className="flex flex-col sm:flex-row gap-4 justify-center"
            >
              <a 
                href="#products" 
                className="inline-flex items-center justify-center px-8 py-4 bg-white text-emerald-700 font-bold rounded-full hover:bg-emerald-50 transform hover:scale-105 transition-all duration-300 shadow-2xl hover:shadow-3xl text-lg"
              >
                <span>Explore Products</span>
                <FaArrowRight className="ml-3 animate-pulse" />
              </a>
              <a 
                href="/contact" 
                className="inline-flex items-center justify-center px-8 py-4 bg-transparent border-2 border-white text-white font-bold rounded-full hover:bg-white/10 transform hover:scale-105 transition-all duration-300 text-lg"
              >
                <span>Contact Experts</span>
              </a>
            </motion.div>
          </div>
        </motion.div>
        
        
      </section>

      {/* Products Section */}
      <section id="products" className="py-24 bg-white">
        <div className="container mx-auto px-4">
          {/* Section Header */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <span className="inline-block px-6 py-3 bg-emerald-100 text-emerald-700 rounded-full text-sm font-semibold mb-6 shadow-lg">
              PREMIUM RUMINANTS SOLUTIONS
            </span>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Specialized Products for <span className="text-emerald-600">Optimal Performance</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Scientifically formulated products designed to enhance ruminant health, productivity, and farm profitability
            </p>
          </motion.div>

          {/* Search and Filter Bar */}
          <div className="mb-16">
            <div className="flex flex-col lg:flex-row gap-6 justify-between items-center">
              {/* Search Bar */}
              <div className="w-full lg:w-1/2">
                <div className="relative group">
                  <FaSearch className="absolute left-5 top-1/2 transform -translate-y-1/2 text-gray-400 group-focus-within:text-emerald-500 transition-colors" />
                  <input
                    type="text"
                    placeholder="Search products by name or description..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="w-full pl-14 pr-12 py-4 rounded-2xl border-2 border-gray-200 focus:border-emerald-500 focus:ring-4 focus:ring-emerald-100 focus:outline-none bg-gray-50 transition-all duration-300 text-lg"
                  />
                  {searchQuery && (
                    <button
                      onClick={() => setSearchQuery('')}
                      className="absolute right-5 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600 text-xl"
                    >
                      ×
                    </button>
                  )}
                </div>
              </div>

              {/* Filter Categories */}
              <div className="w-full lg:w-auto">
                <div className="flex flex-wrap gap-3 justify-center">
                  {categories.map((category) => (
                    <motion.button
                      key={category.id}
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      onClick={() => setActiveFilter(category.id)}
                      className={`flex items-center px-5 py-3 rounded-full transition-all duration-300 font-medium ${
                        activeFilter === category.id
                          ? 'bg-gradient-to-r from-emerald-500 to-green-500 text-white shadow-xl'
                          : 'bg-gray-100 text-gray-700 hover:bg-gray-200 shadow-md'
                      }`}
                    >
                      <span className="mr-3 text-lg">{category.icon}</span>
                      <span>{category.name}</span>
                    </motion.button>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Products Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
            {filteredProducts.map((product, index) => (
              <motion.div
                key={product.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -15 }}
                className="group cursor-pointer"
                onClick={() => setActiveProduct(product)}
              >
                <div className="bg-white rounded-3xl shadow-2xl border border-gray-100 hover:shadow-3xl transition-all duration-500 overflow-hidden h-full transform hover:scale-[1.02]">
                  {/* Product Image */}
                  <div className="h-48 overflow-hidden">
                    <img 
                      src={product.image} 
                      alt={product.name}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className={`absolute top-0 left-0 right-0 h-2 bg-gradient-to-r ${product.color}`}></div>
                  </div>

                  {/* Product Header */}
                  <div className={`relative bg-gradient-to-r ${product.color} p-6`}>
                    <div className="absolute top-0 right-0 w-40 h-40 bg-white/10 rounded-full -translate-y-20 translate-x-20"></div>
                    <div className="relative z-10">
                      <div className="flex justify-center mb-4">
                        <div className="p-4 bg-white/20 backdrop-blur-md rounded-2xl shadow-lg">
                          {product.icon}
                        </div>
                      </div>
                      <h3 className="text-2xl font-bold text-white text-center">{product.name}</h3>
                      <div className="text-center mt-2">
                        <span className="inline-block px-3 py-1 bg-white/20 text-white text-sm rounded-full">
                          {product.category.charAt(0).toUpperCase() + product.category.slice(1)}
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* Product Content */}
                  <div className="p-6">
                    <p className="text-gray-600 text-center mb-6 leading-relaxed text-lg">
                      {product.description}
                    </p>
                    
                    {/* Features List */}
                    <div className="space-y-3 mb-8">
                      {product.features.slice(0, 3).map((feature, idx) => (
                        <div key={idx} className="flex items-center">
                          <div className="flex-shrink-0 w-6 h-6 bg-emerald-100 rounded-full flex items-center justify-center mr-4">
                            <div className="w-3 h-3 bg-emerald-500 rounded-full"></div>
                          </div>
                          <span className="text-gray-700 font-medium">{feature}</span>
                        </div>
                      ))}
                    </div>

                    {/* Action Button */}
                    <div className="flex flex-col gap-3">
                      <button className="w-full py-3.5 bg-gradient-to-r from-emerald-50 to-green-50 text-emerald-700 font-bold rounded-xl hover:from-emerald-100 hover:to-green-100 transition-all duration-300 flex items-center justify-center group-hover:shadow-lg border border-emerald-100">
                        <span>View Details</span>
                        <FaArrowRight className="ml-3 group-hover:translate-x-2 transition-transform duration-300" />
                      </button>
                      <div className="text-center">
                        <span className="text-sm text-gray-500">Dosage: {product.dosage}</span>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* No Results Message */}
          {filteredProducts.length === 0 && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-center py-20"
            >
              <div className="inline-block p-8 bg-gradient-to-br from-gray-50 to-white rounded-3xl shadow-2xl border border-gray-100">
                <div className="p-4 bg-emerald-100 rounded-2xl inline-block mb-6">
                  <FaSearch className="text-4xl text-emerald-600" />
                </div>
                <h3 className="text-2xl font-bold text-gray-800 mb-3">No products found</h3>
                <p className="text-gray-600 mb-6">Try adjusting your search or filter criteria</p>
                <button 
                  onClick={() => {setSearchQuery(''); setActiveFilter('all');}}
                  className="px-6 py-3 bg-emerald-500 text-white font-semibold rounded-xl hover:bg-emerald-600 transition-colors"
                >
                  Reset Filters
                </button>
              </div>
            </motion.div>
          )}
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-24 bg-gradient-to-b from-emerald-50 to-white">
        <div className="container mx-auto px-4">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-20"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-8">
              Why Choose <span className="text-emerald-600">Biofactor</span>?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our commitment to excellence ensures superior results for your farming operations
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: <FaChartLine className="text-5xl" />,
                title: "Proven Results",
                description: "Backed by years of research and field trials showing significant improvements in animal performance"
              },
              {
                icon: <FaShieldAlt className="text-5xl" />,
                title: "Quality Assurance",
                description: "Manufactured under strict quality control standards ensuring purity and effectiveness"
              },
              {
                icon: <FaLeaf className="text-5xl" />,
                title: "Natural & Safe",
                description: "Formulated with natural ingredients that are safe for animals and the environment"
              },
              {
                icon: <FaFlask className="text-5xl" />,
                title: "Expert Formulation",
                description: "Developed by veterinary nutritionists and animal health experts"
              }
            ].map((benefit, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="group"
              >
                <div className="bg-white rounded-3xl p-8 shadow-xl hover:shadow-3xl transition-all duration-500 h-full border border-gray-100 hover:border-emerald-200">
                  <div className="inline-block p-4 bg-gradient-to-r from-emerald-500 to-green-500 text-white rounded-2xl mb-6 group-hover:scale-110 transition-transform duration-300">
                    {benefit.icon}
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">{benefit.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{benefit.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Application Guide */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div 
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-8">
                Expert <span className="text-emerald-600">Guidance</span> & Support
              </h2>
              <p className="text-xl text-gray-600 mb-10 leading-relaxed">
                We provide comprehensive support to ensure you get the best results from our products
              </p>
              
              <div className="space-y-8">
                {[
                  {
                    title: "Technical Consultation",
                    description: "Our team of veterinary experts provides personalized guidance for your specific farm needs"
                  },
                  {
                    title: "Farm Assessment",
                    description: "Comprehensive farm visits to assess conditions and recommend optimal solutions"
                  },
                  {
                    title: "Training Programs",
                    description: "Regular training sessions for farm staff on proper product application and animal care"
                  }
                ].map((item, index) => (
                  <div key={index} className="flex items-start group">
                    <div className="flex-shrink-0 w-12 h-12 bg-emerald-100 rounded-2xl flex items-center justify-center mr-6 group-hover:bg-emerald-200 transition-colors">
                      <div className="w-6 h-6 bg-emerald-500 rounded-full"></div>
                    </div>
                    <div>
                      <h4 className="text-xl font-bold text-gray-900 mb-2">{item.title}</h4>
                      <p className="text-gray-600">{item.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="absolute -inset-6 bg-gradient-to-r from-emerald-400 to-green-500 rounded-[2.5rem] opacity-10 blur-3xl"></div>
              <div className="relative bg-gradient-to-br from-emerald-600 to-green-700 rounded-[2.5rem] p-10 text-white shadow-2xl">
                <div className="mb-10">
                  <h3 className="text-3xl font-bold mb-4">Get Started Today</h3>
                  <p className="text-emerald-100 text-lg">
                    Transform your ruminant farming with our premium products
                  </p>
                </div>
                
                <div className="space-y-6">
                  {[
                    "Free initial consultation",
                    "Customized product recommendations",
                    "Implementation support",
                    "Regular follow-up and monitoring"
                  ].map((item, index) => (
                    <div key={index} className="bg-white/10 p-5 rounded-2xl backdrop-blur-sm border border-white/20">
                      <h4 className="font-bold mb-2 text-lg">{item}</h4>
                      <p className="text-sm text-emerald-100">
                        Our comprehensive approach ensures your success
                      </p>
                    </div>
                  ))}
                </div>
                
                <div className="mt-10 pt-8 border-t border-white/20">
                  <button className="w-full py-4 bg-white text-emerald-700 font-bold rounded-xl hover:bg-emerald-50 transition-all duration-300 shadow-lg hover:shadow-xl text-lg">
                    <a href="/contact">Schedule a Consultation</a>
                  </button>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      

      {/* Modal for Product Details */}
      {activeProduct && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 bg-black/70 flex items-center justify-center p-4 z-50 backdrop-blur-sm"
          onClick={() => setActiveProduct(null)}
        >
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.9, opacity: 0 }}
            className="bg-white rounded-3xl max-w-4xl w-full max-h-[90vh] overflow-y-auto"
            onClick={(e) => e.stopPropagation()}
          >
            <div className={`relative bg-gradient-to-r ${activeProduct.color} p-8`}>
              <button
                onClick={() => setActiveProduct(null)}
                className="absolute top-6 right-6 w-10 h-10 bg-white/20 rounded-full flex items-center justify-center text-white hover:bg-white/30 transition-colors"
              >
                ×
              </button>
              <div className="flex flex-col md:flex-row items-center gap-8">
                <img 
                  src={activeProduct.image} 
                  alt={activeProduct.name}
                  className="w-48 h-48 object-contain rounded-2xl bg-white/20 p-4"
                />
                <div className="text-white">
                  <h3 className="text-4xl font-bold mb-4">{activeProduct.name}</h3>
                  <p className="text-xl mb-6">{activeProduct.description}</p>
                  <div className="flex flex-wrap gap-3">
                    <span className="px-4 py-2 bg-white/20 rounded-full">
                      {activeProduct.category}
                    </span>
                    <span className="px-4 py-2 bg-white/20 rounded-full">
                      Dosage: {activeProduct.dosage}
                    </span>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="p-8">
              <h4 className="text-2xl font-bold text-gray-900 mb-6">Product Details</h4>
              <p className="text-gray-600 text-lg mb-8 leading-relaxed">
                {activeProduct.detailedDescription}
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
                <div>
                  <h5 className="text-xl font-bold text-gray-900 mb-4">Key Features</h5>
                  <ul className="space-y-3">
                    {activeProduct.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center">
                        <div className="w-2 h-2 bg-emerald-500 rounded-full mr-3"></div>
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div>
                  <h5 className="text-xl font-bold text-gray-900 mb-4">Benefits</h5>
                  <ul className="space-y-3">
                    {activeProduct.benefits.map((benefit, idx) => (
                      <li key={idx} className="flex items-center">
                        <div className="w-2 h-2 bg-emerald-500 rounded-full mr-3"></div>
                        <span>{benefit}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
              
              <div className="border-t border-gray-200 pt-8">
                <button className="w-full py-4 bg-gradient-to-r from-emerald-500 to-green-500 text-white font-bold rounded-xl hover:from-emerald-600 hover:to-green-600 transition-all duration-300 text-lg">
                  Contact for Pricing & Orders
                </button>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}

      <Footer />
    </div>
  );
};

export default RuminantsProducts;