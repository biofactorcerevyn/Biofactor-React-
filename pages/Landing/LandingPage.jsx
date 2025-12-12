import React, { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { 
  FiArrowRight, 
  FiCheckCircle, 
  FiTarget,
  FiMap,
  FiUsers,
  FiShield,
  FiGlobe,
  FiHome,
  FiUser,
  FiMail,
  FiLogIn
} from "react-icons/fi";

// Import your assets
import news1 from "../../assets/news1.webp";
import news2 from "../../assets/news2.jpg";
import Agriculture from "../../assets/Agriculture.jpg";
import Aquaculture from "../../assets/Aquaculture.png";
import Poultry from "../../assets/Poultry.png";
import LargeAnimals from "../../assets/Large Animals.png";
import whatissoil from "../../assets/whatissoil.jpeg";
import microbesImg from "../../assets/Microbes.png";
import mineralsImg from "../../assets/Minerals.png";
import biofactor_logo from "../../assets/biofactor_logo.png";
import homebottom from "../../assets/homebottom.png";
import MapImage from "../../assets/Map.png";
import homeVideo from "../../assets/home.mp4"; // Your background video
import Navbar from '../../layouts/Navbar';
import Footer from '../../layouts/Footer';

const placeholderImages = {
  agriculture: "https://images.unsplash.com/photo-1500382017468-9049fed747ef?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
  aquaculture: "https://images.unsplash.com/photo-1517824806704-9040b037703b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
  poultry: "https://images.unsplash.com/photo-1602774895672-b5288e806240?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
  "large animals": "https://images.unsplash.com/photo-1542736667-069246bdbc6d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
  microbes: "https://images.unsplash.com/photo-1532187863486-abf9dbad1b69?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
  minerals: "https://images.unsplash.com/photo-1595126731003-755959b6baf8?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
};

const LandingPage = () => {
  const heroRef = useRef(null);
  const videoRef = useRef(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [autoPlay, setAutoPlay] = useState(true);

  useEffect(() => {
    // Mute and loop video
    if (videoRef.current) {
      videoRef.current.muted = true;
      videoRef.current.loop = true;
      videoRef.current.playsInline = true;
      videoRef.current.autoplay = true;
    }
  }, []);

  // Auto-play functionality for testimonials
  useEffect(() => {
    if (!autoPlay) return;
    
    const interval = setInterval(() => {
      handleNext();
    }, 5000); // Change slide every 5 seconds

    return () => clearInterval(interval);
  }, [currentIndex, autoPlay]);

  const fadeInUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut"
      }
    }
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const scaleIn = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  // Areas we are solving for
  const solvingAreas = [
    { 
      id: 1, 
      name: 'Agriculture', 
      image: Agriculture,
      description: 'Sustainable farming solutions',
      link: '/agriculture'
    },
    { 
      id: 2, 
      name: 'Aquaculture', 
      image: Aquaculture,
      description: 'Water ecosystem management',
      link: '/aquaculture-products'
    },
    { 
      id: 3, 
      name: 'Poultry', 
      image: Poultry,
      description: 'Livestock health solutions',
      link: '/poultry'
    },
    { 
      id: 4, 
      name: 'Large Animals', 
      image: LargeAnimals,
      description: 'Animal health and nutrition',
      link: '/large-animals'
    },
  ];

  // Impact Areas
  const impactStats = [
    { id: 1, value: '8', label: 'Patents', icon: '📜', color: "text-green-600" },
    { id: 2, value: '35', label: 'Proprietary Strains', icon: '🧬', color: "text-blue-600" },
    { id: 3, value: '2200+', label: 'Dealer Network', icon: '🏪', color: "text-amber-600" },
    { id: 4, value: '5,00,000+', label: 'Farmer Network', icon: '👨‍🌾', color: "text-purple-600" },
  ];

  // Technology Areas
  const technologies = [
    { 
      id: 1,
      name: 'Bioencapsulation Technology', 
      description: 'Advanced encapsulation for better delivery',
      icon: '🔬'
    },
    { 
      id: 2,
      name: 'Metabiotics', 
      description: 'Next-generation probiotic solutions',
      icon: '🦠'
    },
    { 
      id: 3,
      name: 'Metabolomic Assisted Plant Marker Molecules', 
      description: 'Precision plant health monitoring',
      icon: '🌱'
    },
    { 
      id: 4,
      name: 'Metabolomic Assisted Micron Sized Particles', 
      description: 'Micro-particle technology for enhanced efficacy',
      icon: '⚡'
    },
  ];

  // News Articles
  const newsArticles = [
    {
      id: 1,
      title: 'Biofactor & UOH Partner for Nano-Enabled Agriculture',
      source: 'Deccan Chronicle',
      date: 'Nov 18, 2022',
      link: 'https://www.deccanchronicle.com/general/biofactor-uoh-partner-for-nano-enabled-agriculture-1866052',
      image: news1
    },
    {
      id: 2,
      title: 'Hyd-based Biofactor Eyes Global Market with Belom Foliar Nutriments',
      source: 'ANI News',
      date: 'Nov 21, 2023',
      link: 'https://www.aninews.in/news/business/business/hyd-based-biofactor-eyes-global-market-with-belom-foliar-nutriments20231121181920/',
      image: news2
    },
  ];

  // Testimonials
  const testimonials = [
    { 
      id: 1, 
      videoId: 'CgUSsrtyyig', 
      title: 'Organic Farmer Success Story with Biofactor',
      description: 'How bio-fertilizers transformed crop yield'
    },
    { 
      id: 2, 
      videoId: '36PVHUwKhYs', 
      title: 'Sustainable Farming Practices Revolution',
      description: 'Real results from our agricultural solutions'
    },
    { 
      id: 3, 
      videoId: 'lpFfi8Dh3e4', 
      title: 'Farmer Testimonial: Soil Health Improvement',
      description: 'Witnessing the transformation first-hand'
    },
    { 
      id: 4, 
      videoId: 'K-tJ1X9LnTg', 
      title: 'Success with Biofactor Crop Protection',
      description: 'Reduced chemical usage, increased productivity'
    },
    { 
      id: 5, 
      videoId: '_5Y39YzqGeU', 
      title: 'Farmer Experience with Bio-Stimulants',
      description: 'Enhanced growth and better quality produce'
    },
    { 
      id: 6, 
      videoId: 'CgUSsrtyyig', 
      title: 'Testimonial 6: Organic Transformation',
      description: 'Complete journey to organic farming'
    },
  ];

  const handleNext = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === Math.ceil(testimonials.length / 3) - 1 ? 0 : prevIndex + 1
    );
  };

  const handlePrev = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? Math.ceil(testimonials.length / 3) - 1 : prevIndex - 1
    );
  };

  const handleMouseEnter = () => setAutoPlay(false);
  const handleMouseLeave = () => setAutoPlay(true);

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 via-emerald-50 to-teal-50">
      {/* Navigation */}
      <Navbar />

      {/* Hero Section with Video Background */}
      <section 
        ref={heroRef} 
        className="relative min-h-screen flex items-center justify-center overflow-hidden"
      >
        {/* Video Background */}
        <div className="absolute inset-0 z-0">
          <video
            ref={videoRef}
            autoPlay
            muted
            loop
            playsInline
            preload="auto"
            className="w-full h-full object-cover"
            style={{ filter: 'brightness(0.8)' }}
          >
            <source src={homeVideo} type="video/mp4" />
            {/* Fallback image if video doesn't load */}
            <div className="absolute inset-0 bg-gradient-to-br from-green-900 to-emerald-900"></div>
          </video>
          <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-black/30 to-transparent"></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="text-center space-y-8"
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.3, duration: 0.8 }}
            >
              <span className="inline-flex items-center gap-2 px-6 py-3 bg-white/20 backdrop-blur-sm text-white rounded-full text-lg font-semibold mb-8 border border-white/30">
                <FiCheckCircle className="text-green-300" /> 
                Pioneering Sustainable Agriculture
              </span>
            </motion.div>
            
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-tight drop-shadow-2xl">
              <span className="text-green-300">Revolutionizing</span> Agriculture
              <br />
              With <span className="text-emerald-300">Science</span> & Innovation
            </h1>
            
            <p className="text-xl md:text-2xl text-green-100 leading-relaxed max-w-4xl mx-auto drop-shadow-lg">
              Creating cutting-edge technology in sustainable agriculture. 
              Transforming supply chains for environmental sustainability and healthier ecosystems.
            </p>
            
            <motion.div 
              className="flex flex-col sm:flex-row gap-6 justify-center pt-8"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.5 }}
            >
              <Link
                to="/about"
                className="px-10 py-5 rounded-full bg-gradient-to-r from-green-500 to-emerald-600 text-white font-semibold text-lg shadow-2xl hover:shadow-3xl hover:scale-105 transition-all duration-300 inline-flex items-center justify-center gap-3 group"
              >
                <span>EXPLORE MORE</span>
                <FiArrowRight className="text-xl group-hover:translate-x-2 transition-transform duration-300" />
              </Link>
              <Link
                to="/contact"
                className="px-10 py-5 rounded-full bg-white/20 backdrop-blur-md text-white font-semibold text-lg border-2 border-white/40 hover:bg-white/30 hover:border-white/60 transition-all duration-300 hover:scale-105 shadow-xl"
              >
                CONTACT US
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* About Biofactor Section */}
      <section id="about" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            className="text-center mb-16"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeInUp}
          >
            <span className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-green-100 to-emerald-100 text-green-700 rounded-full text-sm font-semibold mb-4">
              <FiCheckCircle className="text-green-600" /> About Biofactor
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Revolutionizing Sustainable Agriculture
            </h2>
          </motion.div>

          <motion.div 
            className="grid md:grid-cols-2 gap-12 lg:gap-16 items-center"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
          >
            <motion.div className="space-y-6" variants={fadeInUp}>
              <p className="text-lg md:text-xl text-gray-700 leading-relaxed font-medium">
                Biofactor is a trailblazer in sustainable agriculture, specializing in bio-fertilizers, 
                bio-stimulants, and crop protection solutions.
              </p>
              <p className="text-gray-600 leading-relaxed">
                Our innovative products enhance soil health, boost crop productivity, and promote 
                sustainable farming practices while maintaining environmental balance.
              </p>
              <p className="text-lg text-green-700 font-medium leading-relaxed bg-gradient-to-r from-green-50 to-emerald-50 p-6 rounded-2xl border border-green-100">
                By transforming the agricultural supply chain, we drive environmental sustainability 
                and create a healthier, more resilient ecosystem for future generations.
              </p>
            </motion.div>

            <motion.div className="grid grid-cols-2 gap-4 lg:gap-6" variants={fadeInUp}>
              <div className="relative h-56 sm:h-64 lg:h-72 rounded-2xl overflow-hidden group">
                <img 
                  src={microbesImg} 
                  alt="Microbes"
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  onError={(e) => {
                    e.target.src = placeholderImages.microbes;
                  }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent flex items-end">
                  <div className="p-6 w-full transform translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                    <span className="text-white font-semibold text-lg">Microbial Technology</span>
                    <p className="text-green-100 text-sm mt-1">Advanced biological solutions</p>
                  </div>
                </div>
              </div>
              <div className="relative h-56 sm:h-64 lg:h-72 rounded-2xl overflow-hidden group mt-8 lg:mt-12">
                <img 
                  src={mineralsImg} 
                  alt="Minerals"
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  onError={(e) => {
                    e.target.src = placeholderImages.minerals;
                  }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent flex items-end">
                  <div className="p-6 w-full transform translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                    <span className="text-white font-semibold text-lg">Mineral Enrichment</span>
                    <p className="text-green-100 text-sm mt-1">Essential nutrient solutions</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Areas We Are Solving For */}
      <section id="solutions" className="py-20 bg-gradient-to-b from-white to-green-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            className="text-center mb-16"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeInUp}
          >
            <span className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-green-100 to-emerald-100 text-green-700 rounded-full text-sm font-semibold mb-4">
              <FiTarget className="text-green-600" /> Our Focus Areas
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Areas We Are Solving For
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Comprehensive sustainable solutions across key agricultural domains
            </p>
          </motion.div>

          <motion.div 
            className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
          >
            {solvingAreas.map((area) => (
              <Link key={area.id} to={area.link}>
                <motion.div 
                  className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 group cursor-pointer overflow-hidden"
                  variants={scaleIn}
                  whileHover={{ y: -8 }}
                >
                  <div className="relative h-48 overflow-hidden">
                    <img 
                      src={area.image} 
                      alt={area.name}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                      onError={(e) => {
                        e.target.src = placeholderImages[area.name.toLowerCase()];
                      }}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
                  </div>

                  <div className="p-6">
                    <div className="flex items-center justify-between mb-3">
                      <h3 className="text-xl font-bold text-gray-900">{area.name}</h3>
                      <span className="text-green-600 text-lg">→</span>
                    </div>
                    <p className="text-gray-600">{area.description}</p>
                  </div>
                </motion.div>
              </Link>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Impact Dashboard + Map Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start">
            {/* Impact Dashboard */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={fadeInUp}
              className="space-y-8"
            >
              <div className="space-y-4">
                <span className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-green-100 to-emerald-100 text-green-700 rounded-full text-sm font-semibold">
                  <FiUsers className="text-green-600" /> Our Impact
                </span>
                <h2 className="text-3xl sm:text-4xl font-bold text-gray-900">
                  Making a Difference in Agriculture
                </h2>
                <p className="text-gray-600">
                  Years of innovation and dedication have resulted in significant achievements across the agricultural sector.
                </p>
              </div>

              <div className="grid grid-cols-2 gap-6">
                {impactStats.map((stat) => (
                  <motion.div 
                    key={stat.id}
                    className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-2xl p-6 border border-green-100 hover:border-green-200 transition-colors duration-300 group"
                    whileHover={{ scale: 1.03 }}
                  >
                    <div className="flex items-center gap-3 mb-4">
                      <div className="text-3xl">{stat.icon}</div>
                      <div>
                        <p className={`text-3xl sm:text-4xl font-bold mb-1 ${stat.color}`}>{stat.value}</p>
                        <p className="text-gray-600 font-medium text-sm">{stat.label}</p>
                      </div>
                    </div>
                    <div className="h-1 bg-gradient-to-r from-green-200 to-emerald-200 rounded-full overflow-hidden">
                      <div 
                        className="h-full bg-gradient-to-r from-green-400 to-emerald-500"
                        style={{ width: '85%' }}
                      ></div>
                    </div>
                  </motion.div>
                ))}
              </div>

              <div className="flex flex-wrap gap-4">
                <span className="inline-flex items-center gap-2 px-4 py-2 bg-green-100 text-green-700 rounded-full font-semibold">
                  <FiShield className="text-green-600" /> FCO Certified
                </span>
                <span className="inline-flex items-center gap-2 px-4 py-2 bg-blue-100 text-blue-700 rounded-full font-semibold">
                  <FiShield className="text-blue-600" /> CIB Approved
                </span>
              </div>
            </motion.div>

            {/* Map Section */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={fadeInUp}
              className="relative"
            >
              <div className="bg-gradient-to-br from-green-600 to-emerald-700 rounded-3xl overflow-hidden shadow-2xl">
                <div className="p-6 lg:p-8">
                  <div className="flex items-center justify-between mb-6">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-full bg-emerald-500 flex items-center justify-center">
                        <FiGlobe className="text-white text-xl" />
                      </div>
                      <div>
                        <h3 className="text-xl font-bold text-white">Our Global Presence</h3>
                        <p className="text-emerald-200 text-sm">Nationwide Network</p>
                      </div>
                    </div>
                    <span className="px-3 py-1 bg-emerald-500/20 text-emerald-100 text-xs font-medium rounded-full">
                      Active Nationwide
                    </span>
                  </div>

                  <div className="relative bg-gradient-to-br from-emerald-800 to-green-900 rounded-2xl overflow-hidden h-64 lg:h-80">
                    <img 
                      src={MapImage} 
                      alt="India Map showing Biofactor presence"
                      className="w-full h-full object-contain p-4"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-emerald-900/50 to-transparent"></div>
                    
                    {/* Animated markers */}
                    <div className="absolute top-1/4 left-1/4 w-3 h-3">
                      <div className="absolute inset-0 bg-green-400 rounded-full animate-ping"></div>
                      <div className="absolute inset-0 bg-green-500 rounded-full"></div>
                    </div>
                    <div className="absolute top-1/3 right-1/3 w-3 h-3">
                      <div className="absolute inset-0 bg-green-400 rounded-full animate-ping" style={{ animationDelay: '0.2s' }}></div>
                      <div className="absolute inset-0 bg-green-500 rounded-full"></div>
                    </div>
                    <div className="absolute bottom-1/3 left-1/3 w-3 h-3">
                      <div className="absolute inset-0 bg-green-400 rounded-full animate-ping" style={{ animationDelay: '0.4s' }}></div>
                      <div className="absolute inset-0 bg-green-500 rounded-full"></div>
                    </div>
                  </div>

                  <div className="mt-6 grid grid-cols-2 gap-4">
                    <div className="bg-emerald-800/30 rounded-xl p-4 backdrop-blur-sm">
                      <p className="text-emerald-200 text-sm mb-1">States Covered</p>
                      <p className="text-white text-2xl font-bold">8+</p>
                    </div>
                    <div className="bg-emerald-800/30 rounded-xl p-4 backdrop-blur-sm">
                      <p className="text-emerald-200 text-sm mb-1">Active Dealers</p>
                      <p className="text-white text-2xl font-bold">2,200+</p>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Technology Section */}
      <section id="technology" className="py-20 bg-gradient-to-b from-white to-green-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            className="text-center mb-16"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeInUp}
          >
            <span className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-green-100 to-emerald-100 text-green-700 rounded-full text-sm font-semibold mb-4">
              🔬 Our Technology
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Innovative Solutions Driving Agriculture
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Cutting-edge technologies developed through years of research and innovation
            </p>
          </motion.div>

          <motion.div 
            className="grid md:grid-cols-2 gap-6 lg:gap-8"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
          >
            {technologies.map((tech) => (
              <motion.div 
                key={tech.id}
                className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 group overflow-hidden"
                variants={scaleIn}
                whileHover={{ y: -4 }}
              >
                <div className="p-6 lg:p-8">
                  <div className="flex items-start gap-6">
                    <div className="text-4xl group-hover:scale-110 transition-transform duration-300 flex-shrink-0">
                      {tech.icon}
                    </div>
                    <div className="space-y-3">
                      <h3 className="text-xl font-bold text-gray-900">{tech.name}</h3>
                      <p className="text-gray-600 leading-relaxed">{tech.description}</p>
                      <div className="pt-4">
                        <span className="inline-flex items-center gap-2 text-green-600 font-medium group-hover:text-green-700 transition-colors">
                          Learn more
                          <span className="group-hover:translate-x-1 transition-transform">→</span>
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Soil Health Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <motion.div 
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={fadeInUp}
              className="space-y-6"
            >
              <span className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-amber-100 to-orange-100 text-amber-700 rounded-full text-sm font-semibold">
                🌱 Soil Health Initiative
              </span>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900">
                What is Soil Health?
              </h2>
              <div className="space-y-4">
                <p className="text-gray-600 leading-relaxed">
                  Soil health refers to the condition of soil in terms of its biological, chemical, 
                  and physical properties that support plant growth, maintain environmental quality, 
                  and promote sustainable agricultural productivity.
                </p>
                <p className="text-gray-600 leading-relaxed">
                  Healthy soil is rich in organic matter, nutrients, and microorganisms, has good 
                  structure and drainage, and retains moisture efficiently while supporting biodiversity.
                </p>
              </div>
              <Link 
                to="/soil-health" 
                className="inline-flex items-center gap-3 text-green-600 hover:text-green-700 font-semibold text-lg group mt-6"
              >
                <span>Explore Soil Solutions</span>
                <span className="group-hover:translate-x-2 transition-transform duration-300">→</span>
              </Link>
            </motion.div>

            <motion.div 
              className="relative h-80 sm:h-96 lg:h-[480px] rounded-3xl overflow-hidden group"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={fadeInUp}
            >
              <img 
                src={whatissoil} 
                alt="Soil Health"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent flex items-end">
                <div className="p-6 lg:p-8 w-full">
                  <p className="text-white text-lg font-medium">Healthy Soil = Healthy Crops</p>
                  <p className="text-green-100 text-sm mt-1">Foundation of sustainable agriculture</p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Biofactor in News */}
      <section id="news" className="py-20 bg-gradient-to-b from-white to-green-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            className="text-center mb-16"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeInUp}
          >
            <span className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-green-100 to-emerald-100 text-green-700 rounded-full text-sm font-semibold mb-4">
              📰 Latest Updates
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Biofactor in News
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Stay updated with our latest achievements and media coverage
            </p>
          </motion.div>

          <motion.div 
            className="grid md:grid-cols-2 gap-6 lg:gap-8 max-w-6xl mx-auto"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
          >
            {newsArticles.map((article) => (
              <motion.div 
                key={article.id}
                className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden group"
                variants={scaleIn}
                whileHover={{ y: -6 }}
              >
                <div className="relative h-48 sm:h-56 overflow-hidden">
                  <img 
                    src={article.image} 
                    alt={article.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute top-4 right-4">
                    <span className="px-3 py-1 bg-white/90 backdrop-blur-sm text-green-700 text-xs font-medium rounded-full">
                      Featured
                    </span>
                  </div>
                </div>
                <div className="p-6 lg:p-8">
                  <div className="flex items-center justify-between text-sm text-gray-500 mb-4">
                    <span className="font-medium">{article.source}</span>
                    <span>{article.date}</span>
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-4 leading-tight">
                    {article.title}
                  </h3>
                  <a 
                    href={article.link} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-green-600 hover:text-green-700 font-semibold group"
                  >
                    <span>Read Full Article</span>
                    <span className="group-hover:translate-x-2 transition-transform duration-300">→</span>
                  </a>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Testimonials Section with Enhanced Carousel */}
      <section id="testimonials" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            className="text-center mb-12"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeInUp}
          >
            <span className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-green-100 to-emerald-100 text-green-700 rounded-full text-sm font-semibold mb-4">
              🎥 Testimonials
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Hear From Our Farmers
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Real stories from farmers who have transformed their practices with Biofactor
            </p>
          </motion.div>

          {/* Enhanced Testimonials with Carousel */}
          <motion.div 
            className="relative"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeInUp}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
          >
            {/* Navigation Buttons */}
            <div className="absolute top-1/2 left-0 right-0 flex justify-between items-center -translate-y-1/2 z-10 pointer-events-none px-2">
              <button
                onClick={handlePrev}
                className="bg-white/90 backdrop-blur-sm text-green-700 p-3 rounded-full shadow-2xl hover:bg-white hover:scale-110 transition-all duration-300 pointer-events-auto group border border-green-100"
                aria-label="Previous testimonials"
              >
                <svg 
                  className="w-6 h-6 group-hover:-translate-x-1 transition-transform" 
                  fill="none" 
                  stroke="currentColor" 
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                </svg>
              </button>
              <button
                onClick={handleNext}
                className="bg-white/90 backdrop-blur-sm text-green-700 p-3 rounded-full shadow-2xl hover:bg-white hover:scale-110 transition-all duration-300 pointer-events-auto group border border-green-100"
                aria-label="Next testimonials"
              >
                <svg 
                  className="w-6 h-6 group-hover:translate-x-1 transition-transform" 
                  fill="none" 
                  stroke="currentColor" 
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </button>
            </div>

            {/* Carousel Container */}
            <div className="overflow-hidden px-4">
              <motion.div 
                className="flex gap-6 lg:gap-8"
                animate={{ x: `-${currentIndex * 100}%` }}
                transition={{ type: "spring", stiffness: 300, damping: 30 }}
              >
                {testimonials.map((testimonial, index) => (
                  <div 
                    key={testimonial.id}
                    className="flex-shrink-0 w-full md:w-1/2 lg:w-1/3 px-2"
                    style={{ minWidth: 'calc(33.333% - 1rem)' }}
                  >
                    <div className="bg-white rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-500 overflow-hidden group h-full border border-green-100 hover:border-green-200">
                      {/* Video Thumbnail */}
                      <div className="relative h-48 overflow-hidden">
                        <img 
                          src={`https://img.youtube.com/vi/${testimonial.videoId}/maxresdefault.jpg`} 
                          alt={testimonial.title}
                          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                          onError={(e) => {
                            e.target.src = `https://img.youtube.com/vi/${testimonial.videoId}/hqdefault.jpg`;
                          }}
                        />
                        {/* Gradient Overlay */}
                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                        
                        {/* Play Button */}
                        <div className="absolute inset-0 flex items-center justify-center">
                          <div className="w-20 h-20 bg-white/90 rounded-full flex items-center justify-center transform scale-100 group-hover:scale-110 transition-all duration-300 backdrop-blur-sm">
                            <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-emerald-600 rounded-full flex items-center justify-center group-hover:from-green-600 group-hover:to-emerald-700 transition-all duration-300 shadow-lg">
                              <span className="text-3xl text-white ml-1">▶</span>
                            </div>
                          </div>
                        </div>
                        
                        {/* Video Duration Badge */}
                        <div className="absolute bottom-4 right-4 bg-black/70 text-white text-xs font-medium px-2 py-1 rounded">
                          2:30
                        </div>
                      </div>
                      
                      {/* Content */}
                      <div className="p-6 flex flex-col h-40">
                        <div className="mb-4">
                          <h3 className="text-lg font-bold text-gray-900 mb-2 line-clamp-2">
                            {testimonial.title}
                          </h3>
                          <p className="text-sm text-gray-500 line-clamp-2">
                            {testimonial.description}
                          </p>
                        </div>
                        
                        <div className="mt-auto">
                          <a 
                            href={`https://youtu.be/${testimonial.videoId}`}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center justify-center gap-2 bg-gradient-to-r from-green-600 to-emerald-600 hover:from-green-700 hover:to-emerald-700 text-white font-medium py-2.5 px-5 rounded-full transition-all duration-300 w-full group/btn shadow-md hover:shadow-lg"
                          >
                            <span>Watch Video</span>
                            <span className="group-hover/btn:translate-x-1 transition-transform duration-300">▶</span>
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </motion.div>
            </div>

            {/* Indicators */}
            <div className="flex justify-center items-center gap-2 mt-8">
              {Array.from({ length: Math.ceil(testimonials.length / 3) }).map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${
                    index === currentIndex 
                      ? 'bg-green-600 w-8' 
                      : 'bg-green-300 hover:bg-green-400'
                  }`}
                  aria-label={`Go to slide ${index + 1}`}
                />
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-green-700 via-green-800 to-emerald-900">
        <motion.div 
          className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 1 }}
        >
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="mb-8"
          >
            <img 
              src={homebottom} 
              alt="Sustainable Agriculture" 
              className="mx-auto w-full max-w-4xl rounded-3xl shadow-2xl"
            />
          </motion.div>
          
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-6"
          >
            Join the Sustainable Agriculture Revolution
          </motion.h2>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
            className="text-xl text-green-100 mb-8 max-w-2xl mx-auto"
          >
            Together, we can create a sustainable future for agriculture and protect our planet for generations to come
          </motion.p>
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5 }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <Link 
              to="/contact" 
              className="inline-flex items-center justify-center gap-2 bg-white hover:bg-gray-50 text-green-700 font-semibold py-3.5 px-8 rounded-full transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
            >
              <span>GET IN TOUCH</span>
              <FiArrowRight className="text-lg" />
            </Link>
          </motion.div>
        </motion.div>
      </section>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default LandingPage;