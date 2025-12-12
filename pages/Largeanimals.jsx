import React, { useState } from 'react';
import { Play, CheckCircle, Award, Users, Milk, Heart, Shield, Leaf, TrendingUp, Zap, Factory, TestTube, Pill } from 'lucide-react';
import Navbar from '../layouts/Navbar.jsx';
import Footer from '../layouts/Footer.jsx';

// Import assets
import LargeAnimal1 from '../assets/large-animals1.mp4';
import LargeAnimal2 from '../assets/large-animals2.png';
import LargeAnimal3 from '../assets/large-animals3.png';
import LargeAnimal4 from '../assets/large-animals4.png';
import LargeAnimal6 from '../assets/largeanimals6.mp4';

// YouTube video IDs
const youtubeVideos = [
  { id: 'qraSMR0jR68', title: 'Farmer Success Story 1', farmer: 'Rajesh Patel, Gujarat' },
  { id: 'mcz19oqlIPw', title: 'Product Review', farmer: 'Sunita Sharma, Punjab' },
  { id: 'H3EY3DOoHIA', title: 'Farm Transformation', farmer: 'Mohammed Khan, UP' },
  { id: 'inrfUQ4V148', title: 'Expert Testimonial', farmer: 'Dr. Singh, Veterinarian' },
  { id: 'CgUSsrtyyig', title: 'Success Story 2', farmer: 'Anil Kumar, Rajasthan' }
];

const Largeanimals = () => {
  const [activeVideo, setActiveVideo] = useState(null);

  // Stats data
  const stats = [
    { 
      icon: <Users className="w-6 h-6 md:w-8 md:h-8" />, 
      value: "500+", 
      label: "Happy Farmers", 
      color: "bg-gradient-to-br from-blue-500 to-blue-600" 
    },
    { 
      icon: <Milk className="w-6 h-6 md:w-8 md:h-8" />, 
      value: "10 Liters", 
      label: "Milk per Buffalo", 
      color: "bg-gradient-to-br from-emerald-500 to-emerald-600" 
    },
    { 
      icon: <Heart className="w-6 h-6 md:w-8 md:h-8" />, 
      value: "5,00,000+", 
      label: "Animals Benefited", 
      color: "bg-gradient-to-br from-amber-500 to-amber-600" 
    },
    { 
      icon: <Award className="w-6 h-6 md:w-8 md:h-8" />, 
      value: "100%", 
      label: "Quality Assurance", 
      color: "bg-gradient-to-br from-violet-500 to-violet-600" 
    }
  ];

  // Features data
  const features = [
    { 
      icon: <Zap className="w-8 h-8" />, 
      title: "Enhanced Nutrition", 
      description: "Specialized mineral and vitamin supplements for optimal animal health",
      color: "text-blue-600 bg-blue-50"
    },
    { 
      icon: <Shield className="w-8 h-8" />, 
      title: "Immunity Boosters", 
      description: "Microbial solutions that strengthen natural defense systems",
      color: "text-emerald-600 bg-emerald-50"
    },
    { 
      icon: <Leaf className="w-8 h-8" />, 
      title: "Natural Solutions", 
      description: "Herbal and probiotic formulations for sustainable farming",
      color: "text-amber-600 bg-amber-50"
    },
    { 
      icon: <TrendingUp className="w-8 h-8" />, 
      title: "Growth Promotion", 
      description: "Products that accelerate healthy development and weight gain",
      color: "text-violet-600 bg-violet-50"
    }
  ];

  // Products data - Only 3 cards as requested
  const products = [
    { 
      name: "Milk Boosters", 
      image: LargeAnimal2, 
      description: "Increase milk production naturally with our scientifically formulated supplements",
      category: "Production",
      link: '/ruminants-products'
    },
    { 
      name: "Health Supplements", 
      image: LargeAnimal3, 
      description: "Complete nutritional support for optimal animal health and vitality",
      category: "Wellness",
      link: '/ruminants-products'
    },
    { 
      name: "Immunity Boosters", 
      image: LargeAnimal4, 
      description: "Strengthen natural defenses with our advanced immunity formulations",
      category: "Protection",
      link: '/ruminants-products'
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      <Navbar />

      {/* Hero Video Section */}
      <section className="relative h-[85vh] md:h-[90vh] overflow-hidden">
        {/* Video Background */}
        <div className="absolute inset-0">
          <video
            autoPlay
            muted
            loop
            playsInline
            className="w-full h-full object-cover"
            poster="https://images.unsplash.com/photo-1527153857715-3908f2bae5e8?w=1920&q=80"
          >
            <source src={LargeAnimal6} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
          <div className="absolute inset-0 bg-gradient-to-r from-gray-900/80 via-gray-900/60 to-transparent"></div>
          <div className="absolute inset-0 bg-gradient-to-t from-gray-900/70 via-transparent to-transparent"></div>
        </div>

        {/* Hero Content */}
        <div className="relative z-10 h-full flex items-center">
          <div className="container mx-auto px-4 md:px-6 lg:px-8">
            <div className="max-w-2xl">
              <div className="mb-6 animate-fade-in-up">
                <div className="inline-flex items-center px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full mb-4">
                  <span className="text-sm font-semibold text-white">Innovative Veterinary Solutions</span>
                </div>
              </div>
              
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight animate-fade-in-up animation-delay-200">
                Boosting Animal Health,
                <span className="block text-emerald-300 mt-2">Enhancing Growth.</span>
              </h1>
              
              <p className="text-lg md:text-xl text-gray-200 mb-8 max-w-xl leading-relaxed animate-fade-in-up animation-delay-300">
                Transforming livestock health with premium veterinary solutions and nutritional supplements backed by science and innovation.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 animate-fade-in-up animation-delay-400">
                <a 
                  href="/ruminants-products"
                  className="px-8 py-3 bg-emerald-500 text-white rounded-lg font-semibold hover:bg-emerald-600 transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl text-center"
                >
                  Explore Products
                </a>
                <button className="px-8 py-3 bg-transparent border-2 border-white text-white rounded-lg font-semibold hover:bg-white/10 transform hover:scale-105 transition-all duration-300">
                 <a href="/contact">Contact Experts</a>
                </button>
              </div>
            </div>
          </div>
        </div>

        
      </section>

      {/* Stats Section */}
      <section id="stats" className="py-12 md:py-16 bg-gradient-to-r from-gray-900 to-gray-800">
        <div className="container mx-auto px-4 md:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
            {stats.map((stat, index) => (
              <div 
                key={index}
                className="text-center transform hover:scale-105 transition-all duration-300 animate-fade-in-up"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className={`inline-flex items-center justify-center w-14 h-14 md:w-16 md:h-16 rounded-xl ${stat.color} mb-4 mx-auto shadow-lg`}>
                  <div className="text-white">
                    {stat.icon}
                  </div>
                </div>
                <div className="text-2xl md:text-3xl font-bold text-white mb-2">{stat.value}</div>
                <div className="text-gray-300 font-medium text-sm md:text-base">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Biofactor Section */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4 md:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <div className="animate-slide-in-left">
              <div className="mb-6">
                <span className="text-emerald-600 font-semibold tracking-wider uppercase">Why Choose Us</span>
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mt-2">
                  Why <span className="text-blue-600">Biofactor</span>
                </h2>
              </div>
              
              <p className="text-gray-600 mb-8 leading-relaxed">
                BIOFACTOR specializes in veterinary animal growth products, offering minerals and microbial solutions 
                that enhance nutrition, immunity, and overall health. These products support better digestion, higher 
                productivity, and sustainable animal farming, ensuring stronger, healthier livestock for farmers and the industry.
              </p>
              
              <div className="space-y-5">
                <div className="flex items-start animate-fade-in-up animation-delay-100">
                  <div className="flex-shrink-0">
                    <CheckCircle className="w-6 h-6 text-emerald-500 mt-1" />
                  </div>
                  <div className="ml-4">
                    <h4 className="font-semibold text-gray-900 mb-1">Innovative Solutions</h4>
                    <p className="text-gray-600">We specialize in the development, registration, and commercialization of innovative solutions.</p>
                  </div>
                </div>
                
                <div className="flex items-start animate-fade-in-up animation-delay-200">
                  <div className="flex-shrink-0">
                    <CheckCircle className="w-6 h-6 text-emerald-500 mt-1" />
                  </div>
                  <div className="ml-4">
                    <h4 className="font-semibold text-gray-900 mb-1">Quality Manufacturing</h4>
                    <p className="text-gray-600">High-quality products manufactured under strict GMP standards with European quality assurance.</p>
                  </div>
                </div>
                
                <div className="flex items-start animate-fade-in-up animation-delay-300">
                  <div className="flex-shrink-0">
                    <CheckCircle className="w-6 h-6 text-emerald-500 mt-1" />
                  </div>
                  <div className="ml-4">
                    <h4 className="font-semibold text-gray-900 mb-1">Comprehensive Range</h4>
                    <p className="text-gray-600">Complete solutions for both livestock and companion animals with scientific formulations.</p>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Video on the right side */}
            <div className="animate-slide-in-right">
              <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                <video
                  autoPlay
                  muted
                  loop
                  playsInline
                  className="w-full h-64 md:h-80 object-cover"
                  poster="https://images.unsplash.com/photo-1551766842-3d0e67aae9b9?w=800&h=600&fit=crop"
                >
                  <source src={LargeAnimal1} type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent"></div>
                <div className="absolute bottom-4 left-4">
                  <div className="flex items-center px-3 py-1.5 bg-white/90 backdrop-blur-sm rounded-full">
                    <Play className="w-4 h-4 text-emerald-600 mr-2" />
                    <span className="text-sm font-medium text-gray-900">Success Stories</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Veterinary Health Section - Left & Right Layout */}
      <section className="py-16 md:py-24 bg-gray-50">
        <div className="container mx-auto px-4 md:px-6 lg:px-8">
          <div className="text-center mb-12 md:mb-16 animate-fade-in-up">
            <span className="text-blue-600 font-semibold tracking-wider uppercase">Our Expertise</span>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mt-2">
              Veterinary <span className="text-emerald-600">Solutions</span>
            </h2>
          </div>

          {/* Left Column: Veterinary Health */}
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 mb-16">
            <div className="animate-slide-in-left">
              <div className="bg-white rounded-xl shadow-lg p-8 h-full border border-gray-100">
                <div className="flex items-center mb-6">
                  <div className="w-12 h-12 bg-gradient-to-br from-blue-50 to-blue-100 rounded-xl flex items-center justify-center mr-4">
                    <Pill className="w-6 h-6 text-blue-600" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900">Veterinary Health</h3>
                </div>
                <p className="text-gray-600 mb-6">
                  We specialize in veterinary medicines across various pharmaceutical forms for livestock and companion animals. Our high-quality finished products are manufactured in Europe under Good Manufacturing Practices (GMP) and distributed following Good Distribution Practices (GDP). Our registration dossiers meet the strictest regulatory standards, ensuring compliance with top regulatory agencies.
                </p>
                <div className="space-y-4">
                  <div className="flex items-start">
                    <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                    <span className="text-gray-700">GMP certified manufacturing facilities</span>
                  </div>
                  <div className="flex items-start">
                    <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                    <span className="text-gray-700">Strict regulatory compliance standards</span>
                  </div>
                  <div className="flex items-start">
                    <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                    <span className="text-gray-700">European quality benchmarks</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Column: API Suppliers */}
            <div className="animate-slide-in-right">
              <div className="bg-white rounded-xl shadow-lg p-8 h-full border border-gray-100">
                <div className="flex items-center mb-6">
                  <div className="w-12 h-12 bg-gradient-to-br from-emerald-50 to-emerald-100 rounded-xl flex items-center justify-center mr-4">
                    <TestTube className="w-6 h-6 text-emerald-600" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900">API Suppliers</h3>
                </div>
                <p className="text-gray-600 mb-6">
                  We are leading suppliers of active pharmaceutical ingredients (APIs) for veterinary medicine manufacturing. Our APIs are sourced from certified manufacturers and undergo rigorous quality testing to ensure purity, potency, and safety for animal consumption.
                </p>
                <div className="space-y-4">
                  <div className="flex items-start">
                    <div className="w-2 h-2 bg-emerald-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                    <span className="text-gray-700">High-purity pharmaceutical ingredients</span>
                  </div>
                  <div className="flex items-start">
                    <div className="w-2 h-2 bg-emerald-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                    <span className="text-gray-700">Certified manufacturing partners</span>
                  </div>
                  <div className="flex items-start">
                    <div className="w-2 h-2 bg-emerald-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                    <span className="text-gray-700">Global sourcing network with quality assurance</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Nutraceuticals Section - Center */}
          <div className="max-w-3xl mx-auto animate-fade-in-up">
            <div className="bg-white rounded-xl shadow-lg p-8 border border-gray-100">
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-gradient-to-br from-amber-50 to-amber-100 rounded-xl flex items-center justify-center mr-4">
                  <Leaf className="w-6 h-6 text-amber-600" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900">Nutraceuticals for Animals</h3>
              </div>
              <p className="text-gray-600 mb-6">
                Our advanced nutritional supplements and herbal formulations are scientifically developed for optimal animal health and performance. These nutraceuticals provide essential nutrients, improve digestion, enhance immunity, and promote overall well-being for livestock and companion animals.
              </p>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-3">
                  <div className="flex items-start">
                    <div className="w-2 h-2 bg-amber-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                    <span className="text-gray-700">Natural, scientifically-formulated ingredients</span>
                  </div>
                  <div className="flex items-start">
                    <div className="w-2 h-2 bg-amber-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                    <span className="text-gray-700">Performance-enhancing formulations</span>
                  </div>
                </div>
                <div className="space-y-3">
                  <div className="flex items-start">
                    <div className="w-2 h-2 bg-amber-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                    <span className="text-gray-700">Sustainable farming solutions</span>
                  </div>
                  <div className="flex items-start">
                    <div className="w-2 h-2 bg-amber-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                    <span className="text-gray-700">Improved feed conversion ratios</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Feature Cards */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-16">
            {features.map((feature, index) => (
              <div 
                key={index}
                className="bg-white rounded-lg p-6 shadow-md hover:shadow-lg transition-all duration-300 border border-gray-100 animate-fade-in-up"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className={`w-12 h-12 ${feature.color} rounded-lg flex items-center justify-center mb-4`}>
                  {feature.icon}
                </div>
                <h4 className="font-bold text-gray-900 mb-2">{feature.title}</h4>
                <p className="text-gray-600 text-sm leading-relaxed">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Products Section - Only 3 Cards */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4 md:px-6 lg:px-8">
          <div className="text-center mb-12 md:mb-16 animate-fade-in-up">
            <span className="text-emerald-600 font-semibold tracking-wider uppercase">Our Offerings</span>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mt-2">
              Our <span className="text-blue-600">Products</span>
            </h2>
            <p className="text-gray-600 mt-4 max-w-2xl mx-auto">
              Discover our comprehensive range of veterinary products designed for optimal animal health and productivity
            </p>
          </div>

          {/* Only 3 product cards as requested */}
          <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            {products.map((product, index) => (
              <div 
                key={index}
                className="group relative overflow-hidden rounded-xl shadow-lg hover:shadow-xl transition-all duration-500 border border-gray-100 animate-fade-in-up"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="relative overflow-hidden">
                  <div className="absolute top-4 left-4 z-10">
                    <span className="px-3 py-1 bg-white/90 backdrop-blur-sm text-xs font-semibold text-gray-700 rounded-full">
                      {product.category}
                    </span>
                  </div>
                  <img 
                    src={product.image}
                    alt={product.name}
                    className="w-full h-56 object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent"></div>
                </div>
                <div className="p-6">
                  <h3 className="text-lg font-bold text-gray-900 mb-2">{product.name}</h3>
                  <p className="text-gray-600 text-sm mb-4">{product.description}</p>
                  <a 
                    href={product.link}
                    className="block px-4 py-2.5 bg-gray-50 text-gray-700 rounded-lg font-medium hover:bg-gray-100 transition-all duration-300 text-sm text-center"
                  >
                    Learn More
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* YouTube Videos in Farmer Testimonials Section */}
      <section className="py-16 md:py-24 bg-gray-50">
        <div className="container mx-auto px-4 md:px-6 lg:px-8">
          <div className="text-center mb-12 md:mb-16 animate-fade-in-up">
            <span className="text-blue-600 font-semibold tracking-wider uppercase">Farmer Testimonials</span>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mt-2">
              Real Stories, <span className="text-emerald-600">Real Results</span>
            </h2>
            <p className="text-gray-600 mt-4 max-w-2xl mx-auto">
              Watch our farmers share their success stories with Biofactor products. Click any video to play directly on this page.
            </p>
          </div>

          {/* Main Video Player */}
          {activeVideo && (
            <div className="mb-12 animate-fade-in-up">
              <div className="relative rounded-2xl overflow-hidden shadow-2xl bg-black">
                <div className="relative pt-[56.25%]"> {/* 16:9 Aspect Ratio */}
                  <iframe
                    src={`https://www.youtube.com/embed/${activeVideo}?autoplay=1&rel=0&modestbranding=1`}
                    title="YouTube video player"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    className="absolute top-0 left-0 w-full h-full"
                  ></iframe>
                </div>
                <div className="p-6 bg-gradient-to-r from-gray-900 to-gray-800">
                  <h3 className="text-xl font-bold text-white mb-2">
                    {youtubeVideos.find(v => v.id === activeVideo)?.title}
                  </h3>
                  <p className="text-gray-300 text-sm mb-3">
                    {youtubeVideos.find(v => v.id === activeVideo)?.farmer}
                  </p>
                  <button 
                    onClick={() => setActiveVideo(null)}
                    className="text-sm text-gray-300 hover:text-white transition-colors flex items-center"
                  >
                    <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                    </svg>
                    Close Video
                  </button>
                </div>
              </div>
            </div>
          )}

          {/* Video Thumbnails Grid - 5 YouTube videos */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-6">
            {youtubeVideos.map((video, index) => (
              <div 
                key={video.id}
                className="group cursor-pointer animate-fade-in-up"
                style={{ animationDelay: `${index * 100}ms` }}
                onClick={() => setActiveVideo(video.id)}
              >
                <div className="relative rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 transform group-hover:-translate-y-2">
                  <div className="relative pt-[75%]"> {/* 4:3 Aspect Ratio for thumbnails */}
                    <img 
                      src={`https://img.youtube.com/vi/${video.id}/hqdefault.jpg`}
                      alt={video.title}
                      className="absolute top-0 left-0 w-full h-full object-cover"
                      onError={(e) => {
                        e.target.onerror = null;
                        e.target.src = 'https://images.unsplash.com/photo-1543466835-00a7907e9de1?w=400&h=300&fit=crop';
                      }}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent"></div>
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="w-12 h-12 bg-red-600 rounded-full flex items-center justify-center transform group-hover:scale-110 transition-transform duration-300 shadow-lg">
                        <Play className="w-6 h-6 text-white ml-1" fill="white" />
                      </div>
                    </div>
                    <div className="absolute bottom-0 left-0 right-0 p-4">
                      <h4 className="text-sm font-semibold text-white line-clamp-2 mb-1">{video.title}</h4>
                      <p className="text-xs text-gray-300">{video.farmer}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      
      <Footer />

      {/* Custom CSS for animations */}
      <style jsx>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        @keyframes slideInLeft {
          from {
            opacity: 0;
            transform: translateX(-30px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }
        
        @keyframes slideInRight {
          from {
            opacity: 0;
            transform: translateX(30px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }
        
        @keyframes bounce {
          0%, 100% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(-10px);
          }
        }
        
        .animate-fade-in-up {
          animation: fadeInUp 0.8s ease-out forwards;
          opacity: 0;
        }
        
        .animate-slide-in-left {
          animation: slideInLeft 0.8s ease-out forwards;
          opacity: 0;
        }
        
        .animate-slide-in-right {
          animation: slideInRight 0.8s ease-out forwards;
          opacity: 0;
        }
        
        .animate-bounce {
          animation: bounce 2s ease-in-out infinite;
        }
        
        .animation-delay-100 {
          animation-delay: 100ms;
        }
        
        .animation-delay-200 {
          animation-delay: 200ms;
        }
        
        .animation-delay-300 {
          animation-delay: 300ms;
        }
        
        .animation-delay-400 {
          animation-delay: 400ms;
        }
        
        .animation-delay-500 {
          animation-delay: 500ms;
        }
        
        .line-clamp-2 {
          display: -webkit-box;
          -webkit-line-clamp: 2;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }
      `}</style>
    </div>
  );
};

export default Largeanimals;