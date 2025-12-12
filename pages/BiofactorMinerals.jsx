import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { FiArrowRight, FiCheckCircle, FiUsers, FiMap, FiTarget, FiHome, FiUser, FiMail, FiLogIn } from "react-icons/fi";
import { motion } from 'framer-motion';

// Import your assets
import mineralsVideo from "./../assets/minerals.mp4";
import minerals1 from "./../assets/minerals1.png";
import minerals2 from "./../assets/minerals2.png";
import minerals3 from "./../assets/minerals3.png";
import Navbar from '../layouts/Navbar';
import Footer from '../layouts/Footer';
const BiofactorMinerals = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const videoRef = useRef(null);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.muted = true;
      videoRef.current.loop = true;
      videoRef.current.playsInline = true;
      videoRef.current.autoplay = true;
    }
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  // Image paths for fallbacks
  const imagePaths = {
    soilMinerals: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80',
    plantGrowth: 'https://images.unsplash.com/photo-1566305977571-5666677c6e98?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80',
    fieldApplication: 'https://images.unsplash.com/photo-1625246333195-78d9c38ad449?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80',
  };

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

  const mineralBenefits = [
    {
      icon: '⚡',
      title: 'Immediate Absorption',
      description: 'Direct nutrient uptake through roots and leaves'
    },
    {
      icon: '🌱',
      title: 'Enhanced Growth',
      description: 'Optimal nutrient delivery for vigorous plant development'
    },
    {
      icon: '🛡️',
      title: 'Stress Resilience',
      description: 'Strengthened plants that withstand environmental challenges'
    },
    {
      icon: '🌍',
      title: 'Environmental Safety',
      description: 'No harmful runoff or soil contamination'
    }
  ];

  const mamsFeatures = [
    'Micron-sized particles for maximum absorption',
    'Metabolite-assisted nutrient delivery',
    'Targeted release for optimal timing',
    '100% plant-available nutrients',
    'Reduced environmental footprint',
    'Compatible with organic farming'
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation - Same as Homepage */}
      <Navbar />
      {/* Hero Section with Video Background */}
      <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Video Background */}
        <div className="absolute inset-0 z-0">
          <video
            ref={videoRef}
            autoPlay
            muted
            loop
            playsInline
            className="w-full h-full object-cover brightness-75"
          >
            <source src={mineralsVideo} type="video/mp4" />
            <div className="absolute inset-0 bg-gradient-to-br from-green-900 to-emerald-900"></div>
          </video>
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/40 to-transparent"></div>
          
          {/* Floating Mineral Particles */}
          <div className="absolute inset-0 overflow-hidden">
            {[...Array(15)].map((_, i) => (
              <div 
                key={i}
                className="absolute rounded-full bg-white/10 animate-float"
                style={{
                  width: `${Math.random() * 60 + 20}px`,
                  height: `${Math.random() * 60 + 20}px`,
                  top: `${Math.random() * 100}%`,
                  left: `${Math.random() * 100}%`,
                  animationDelay: `${Math.random() * 20}s`,
                  animationDuration: `${Math.random() * 30 + 20}s`
                }}
              ></div>
            ))}
          </div>
        </div>

        {/* Hero Content */}
        <div className="relative z-30 text-center px-4 py-16 max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="space-y-8"
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.3, duration: 0.8 }}
            >
              <span className="inline-flex items-center gap-2 px-6 py-3 bg-white/20 backdrop-blur-sm text-white rounded-full text-lg font-semibold mb-8 border border-white/30">
                <FiCheckCircle className="text-green-300" /> 
                Mineral Technology
              </span>
            </motion.div>
            
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-tight drop-shadow-2xl">
              <span className="text-green-300">Minerals</span> Perfected
              <br />
              By <span className="text-emerald-300">Science</span>
            </h1>
            
            <p className="text-xl md:text-2xl text-green-100 leading-relaxed max-w-4xl mx-auto drop-shadow-lg">
              Unlocking soil's hidden treasures with MAMSP technology—where every nutrient finds its perfect form
            </p>
            
            <motion.div 
              className="flex flex-col sm:flex-row gap-6 justify-center pt-8"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.5 }}
            >
              <a 
                href="#content-start" 
                className="px-10 py-5 rounded-full bg-gradient-to-r from-green-500 to-emerald-600 text-white font-semibold text-lg shadow-2xl hover:shadow-3xl hover:scale-105 transition-all duration-300 inline-flex items-center justify-center gap-3 group"
              >
                <span>DISCOVER MAMSP</span>
                <FiArrowRight className="text-xl group-hover:translate-x-2 transition-transform duration-300" />
              </a>
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

      {/* Main Content */}
      <main id="content-start" className="py-20 bg-gradient-to-b from-white to-emerald-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Paragraph 1 - Left Image */}
          <section className="mb-24">
            <motion.div 
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={staggerContainer}
              className="flex flex-col lg:flex-row items-center gap-12"
            >
              {/* Image Container */}
              <motion.div 
                className="lg:w-1/2"
                variants={fadeInUp}
              >
                <div className="relative rounded-2xl overflow-hidden shadow-2xl group">
                  <img 
                    src={minerals1} 
                    alt="Soil mineral ecosystem"
                    className="w-full h-64 lg:h-96 object-cover group-hover:scale-110 transition-transform duration-700"
                    onError={(e) => {
                      e.target.src = imagePaths.soilMinerals;
                    }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent flex items-end">
                    <div className="p-6 w-full">
                      <p className="text-white font-semibold text-lg">Soil Mineral Ecosystem</p>
                      <p className="text-green-100 text-sm mt-1">Nature's hidden network</p>
                    </div>
                  </div>
                </div>
              </motion.div>
              
              {/* Text Content */}
              <motion.div 
                className="lg:w-1/2"
                variants={fadeInUp}
              >
                <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">
                  The Quiet <span className="text-green-600">Rhythm of Nature</span>
                </h2>
                <div className="space-y-4 text-gray-600 text-lg leading-relaxed">
                  <p>
                    In the quiet rhythm of nature, plants reach deep into the earth, seeking the lifeblood of their growth—an intricate symphony of nutrients, each essential and irreplaceable.
                  </p>
                  <p>
                    Yet, the soil's gifts are not always easy to grasp. Conventional fertilizers, heavy with promise, often falter in their task, offering nutrients in forms too complex, too distant from the delicate needs of the plant.
                  </p>
                  <p className="font-medium text-green-700 bg-green-50 p-4 rounded-xl border border-green-100">
                    These nutrients, trapped in their chemical cages, linger in the soil, slow to release their bounty, while the world around them bears the weight of their unintended consequences—rivers burdened with runoff, soils leached of life.
                  </p>
                </div>
              </motion.div>
            </motion.div>
          </section>

          {/* MAMSP Technology Section */}
          <section className="mb-24">
            <motion.div 
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInUp}
              className="text-center mb-16"
            >
              <span className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-green-100 to-emerald-100 text-green-700 rounded-full text-sm font-semibold mb-4">
                ✨ MAMSP Technology
              </span>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-800 mb-4">
                <span className="text-green-600">Metabolite-Assisted</span> Micron-Sized Particles
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Revolutionizing plant nutrition through advanced delivery technology
              </p>
            </motion.div>

            <div className="flex flex-col lg:flex-row-reverse items-center gap-12">
              {/* Image Container */}
              <motion.div 
                className="lg:w-1/2"
                variants={fadeInUp}
              >
                <div className="relative rounded-2xl overflow-hidden shadow-2xl group">
                  <img 
                    src={minerals2} 
                    alt="MAMSP Technology"
                    className="w-full h-64 lg:h-96 object-cover group-hover:scale-110 transition-transform duration-700"
                    onError={(e) => {
                      e.target.src = 'https://images.unsplash.com/photo-1635070041078-e363dbe005cb?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80';
                    }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent flex items-end">
                    <div className="p-6 w-full">
                      <p className="text-white font-semibold text-lg">MAMSP Technology</p>
                      <p className="text-green-100 text-sm mt-1">Revolutionary nutrient delivery</p>
                    </div>
                  </div>
                </div>
              </motion.div>
              
              {/* Text Content */}
              <motion.div 
                className="lg:w-1/2"
                variants={fadeInUp}
              >
                <h3 className="text-3xl font-bold text-gray-800 mb-6">
                  A <span className="text-green-600">Different Way</span>
                </h3>
                <div className="space-y-4 text-gray-600 text-lg leading-relaxed">
                  <p>
                    But at Biofactor, we envisioned a different way—a way where nature's whispers are heard and answered.
                  </p>
                  <p>
                    Enter <span className="font-bold text-green-700">Metabolite-Assisted Micron-Sized Particles (MAMSP)</span>, a technology that mirrors the elegance of the natural world. These particles, as fine as dust on the wind, are crafted to be just the right size, carrying nutrients in a form that plants can drink in directly, like the first rain after a long drought.
                  </p>
                  <p className="font-medium text-green-700 bg-green-50 p-4 rounded-xl border border-green-100">
                    No waiting, no barriers—only immediate nourishment, absorbed through roots and leaves, coursing through the plant's veins like a river of life.
                  </p>
                </div>

                {/* Technology Features */}
                <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-4">
                  {mamsFeatures.map((feature, index) => (
                    <div key={index} className="flex items-start space-x-3 p-3 bg-green-50 rounded-lg hover:bg-green-100 transition-colors">
                      <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                        <span className="text-white text-sm">✓</span>
                      </div>
                      <span className="text-gray-700">{feature}</span>
                    </div>
                  ))}
                </div>
              </motion.div>
            </div>
          </section>

          {/* Benefits Section */}
          <section id="benefits" className="mb-24">
            <motion.div 
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInUp}
              className="text-center mb-12"
            >
              <span className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-green-100 to-emerald-100 text-green-700 rounded-full text-sm font-semibold mb-4">
                ⭐ Transformative Benefits
              </span>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-800 mb-4">
                Why Choose <span className="text-green-600">MAMSP</span> Technology?
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Experience the revolution in plant nutrition with proven benefits
              </p>
            </motion.div>
            
            <motion.div 
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={staggerContainer}
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12"
            >
              {mineralBenefits.map((benefit, index) => (
                <motion.div 
                  key={index}
                  variants={fadeInUp}
                  className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border border-green-100 group"
                >
                  <div className="text-5xl mb-6 transform group-hover:scale-110 transition-transform duration-300 flex justify-center">
                    {benefit.icon}
                  </div>
                  <h3 className="text-xl font-bold text-gray-800 mb-4 text-center">{benefit.title}</h3>
                  <p className="text-gray-600 text-center">{benefit.description}</p>
                </motion.div>
              ))}
            </motion.div>
          </section>

          {/* Paragraph 3 - Left Image */}
          <section className="mb-24">
            <motion.div 
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={staggerContainer}
              className="flex flex-col lg:flex-row items-center gap-12"
            >
              {/* Image Container */}
              <motion.div 
                className="lg:w-1/2"
                variants={fadeInUp}
              >
                <div className="relative rounded-2xl overflow-hidden shadow-2xl group">
                  <img 
                    src={minerals3} 
                    alt="Plant growth with minerals"
                    className="w-full h-64 lg:h-96 object-cover group-hover:scale-110 transition-transform duration-700"
                    onError={(e) => {
                      e.target.src = imagePaths.plantGrowth;
                    }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent flex items-end">
                    <div className="p-6 w-full">
                      <p className="text-white font-semibold text-lg">Enhanced Plant Growth</p>
                      <p className="text-green-100 text-sm mt-1">Vigorous and healthy development</p>
                    </div>
                  </div>
                </div>
              </motion.div>
              
              {/* Text Content */}
              <motion.div 
                className="lg:w-1/2"
                variants={fadeInUp}
              >
                <h3 className="text-3xl font-bold text-gray-800 mb-6">
                  A <span className="text-green-600">Revolution</span> in Plant Nutrition
                </h3>
                <div className="space-y-4 text-gray-600 text-lg leading-relaxed">
                  <p>
                    MAMSP is more than just a solution; it is a revolution in how we feed the earth. These micron-sized particles unlock the soil's treasures, making every element available in its purest, most usable form.
                  </p>
                  <p>
                    The result is a harmony of growth—plants that rise with strength, their leaves full and green, their roots deep and anchored.
                  </p>
                  <p className="font-medium text-green-700 bg-green-50 p-4 rounded-xl border border-green-100">
                    Across fields and climates, from the fertile valleys to the wind-swept plains, MAMSP shows its power, proving that with the right touch, nature can flourish without the scars of modern agriculture.
                  </p>
                </div>
              </motion.div>
            </motion.div>
          </section>

          {/* Technology Showcase */}
          <section className="mb-24">
            <motion.div 
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInUp}
              className="bg-gradient-to-br from-green-600 to-emerald-700 rounded-3xl p-8 md:p-12 text-white shadow-2xl"
            >
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                <div>
                  <h3 className="text-3xl md:text-4xl font-bold mb-6">
                    The Science Behind <span className="text-emerald-200">MAMSP</span>
                  </h3>
                  <div className="space-y-6">
                    <div className="flex items-start space-x-4">
                      <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center flex-shrink-0">
                        <span className="text-2xl">🔬</span>
                      </div>
                      <div>
                        <h4 className="text-xl font-bold mb-2">Precision Engineering</h4>
                        <p className="text-white/90">Micron-sized particles engineered for optimal plant absorption</p>
                      </div>
                    </div>
                    
                    <div className="flex items-start space-x-4">
                      <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center flex-shrink-0">
                        <span className="text-2xl">🌿</span>
                      </div>
                      <div>
                        <h4 className="text-xl font-bold mb-2">Natural Metabolites</h4>
                        <p className="text-white/90">Enhanced with plant-recognized metabolites for targeted delivery</p>
                      </div>
                    </div>
                    
                    <div className="flex items-start space-x-4">
                      <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center flex-shrink-0">
                        <span className="text-2xl">⚡</span>
                      </div>
                      <div>
                        <h4 className="text-xl font-bold mb-2">Instant Availability</h4>
                        <p className="text-white/90">100% plant-available nutrients with zero waiting period</p>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="flex justify-center">
                  <div className="relative">
                    <div className="w-64 h-64 md:w-80 md:h-80 rounded-full border-4 border-white/30 flex items-center justify-center">
                      <div className="w-48 h-48 md:w-60 md:h-60 rounded-full border-4 border-white/50 flex items-center justify-center">
                        <div className="w-32 h-32 md:w-40 md:h-40 rounded-full border-4 border-white/70 flex items-center justify-center bg-white/10 backdrop-blur-sm">
                          <span className="text-6xl">⚗️</span>
                        </div>
                      </div>
                    </div>
                    
                    {/* Floating particles around the circle */}
                    {[...Array(8)].map((_, i) => (
                      <div 
                        key={i}
                        className="absolute w-6 h-6 bg-white/30 rounded-full animate-pulse"
                        style={{
                          top: `${Math.sin(i * Math.PI / 4) * 140 + 120}px`,
                          left: `${Math.cos(i * Math.PI / 4) * 140 + 120}px`,
                          animationDelay: `${i * 0.5}s`
                        }}
                      ></div>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          </section>

          
        </div>
      </main>

      {/* Footer - Same as Homepage */}
        <Footer />

      {/* Custom CSS for animations */}
      <style jsx>{`
        @keyframes float {
          0%, 100% {
            transform: translateY(0) translateX(0);
          }
          25% {
            transform: translateY(-20px) translateX(10px);
          }
          50% {
            transform: translateY(0) translateX(20px);
          }
          75% {
            transform: translateY(20px) translateX(10px);
          }
        }
        
        .animate-float {
          animation: float linear infinite;
        }
        
        @keyframes pulse {
          0%, 100% {
            opacity: 0.3;
            transform: scale(1);
          }
          50% {
            opacity: 0.8;
            transform: scale(1.2);
          }
        }
        
        .animate-pulse {
          animation: pulse 2s ease-in-out infinite;
        }
      `}</style>
    </div>
  );
};

export default BiofactorMinerals;