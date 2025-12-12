import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { FiArrowRight, FiCheckCircle, FiUsers, FiMap, FiTarget, FiHome, FiUser, FiMail, FiLogIn } from "react-icons/fi";
import { motion } from 'framer-motion';

// Import your assets
import microbesVideo from "./../assets/microbes.mp4";
import microbesImage1 from "./../assets/Microbes.png";
import microbesImage2 from "./../assets/microbesphoto_2.png";
import microbes_3 from "./../assets/microbes_3.png";
import Navbar from '../layouts/Navbar';
import Footer from '../layouts/Footer';
const BiofactorMicrobes = () => {
  const [isVideoLoaded, setIsVideoLoaded] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const videoRef = useRef(null);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.muted = true;
      videoRef.current.loop = true;
      videoRef.current.playsInline = true;
      videoRef.current.autoplay = true;
    }
    
    const timer = setTimeout(() => {
      setIsVideoLoaded(true);
    }, 500);
    
    return () => clearTimeout(timer);
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  // Image paths for fallbacks
  const imagePaths = {
    research: 'https://images.unsplash.com/photo-1582719508461-905c673771fd?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80',
    technology: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80',
    release: 'https://images.unsplash.com/photo-1532187863486-abf9dbad1b69?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80'
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
            <source src={microbesVideo} type="video/mp4" />
            <div className="absolute inset-0 bg-gradient-to-br from-green-900 to-emerald-900"></div>
          </video>
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/40 to-transparent"></div>
          
          {/* Animated Microbes */}
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
                Microbial Technology
              </span>
            </motion.div>
            
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-tight drop-shadow-2xl">
              <span className="text-green-300">Nature's</span> Hidden Architects
              <br />
              Restoring Earth's <span className="text-emerald-300">Microbial Balance</span>
            </h1>
            
            <p className="text-xl md:text-2xl text-green-100 leading-relaxed max-w-4xl mx-auto drop-shadow-lg">
              Transforming agriculture through beneficial microbes that restore soil health, 
              enhance plant growth, and create sustainable farming ecosystems.
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
                <span>EXPLORE MICROBES</span>
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
      <main id="content-start" className="py-20 bg-gradient-to-b from-white to-green-50">
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
                    src={microbesImage1} 
                    alt="Soil microbial ecosystem"
                    className="w-full h-64 lg:h-96 object-cover group-hover:scale-110 transition-transform duration-700"
                    onError={(e) => {
                      e.target.src = 'https://images.unsplash.com/photo-1560472354-b33ff0c44a43?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80';
                    }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent flex items-end">
                    <div className="p-6 w-full">
                      <p className="text-white font-semibold text-lg">Soil Microbial Ecosystem</p>
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
                  The Hidden <span className="text-green-600">Symphony</span>
                </h2>
                <div className="space-y-4 text-gray-600 text-lg leading-relaxed">
                  <p>
                    Beneath the surface of the soil, in the shadowy realms where roots stretch out in silent communion with the earth, there lies a world teeming with life—a hidden symphony of microbes, soil, and plants.
                  </p>
                  <p>
                    This delicate balance, once thriving, has been disrupted by decades of relentless cultivation, the land scarred by the overuse of chemical fertilizers, pesticides, and extractive farming practices.
                  </p>
                  <p className="font-medium text-green-700 bg-green-50 p-4 rounded-xl border border-green-100">
                    As the soil weakens, we face a looming threat, a world where the promise of harvest is no longer certain, and the specter of food insecurity darkens the horizon.
                  </p>
                </div>
              </motion.div>
            </motion.div>
          </section>

          {/* Paragraph 2 - Right Image */}
          <section className="mb-24">
            <motion.div 
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={staggerContainer}
              className="flex flex-col lg:flex-row-reverse items-center gap-12"
            >
              {/* Image Container */}
              <motion.div 
                className="lg:w-1/2"
                variants={fadeInUp}
              >
                <div className="relative rounded-2xl overflow-hidden shadow-2xl group">
                  <img 
                    src={microbesImage2} 
                    alt="Beneficial microbes at work"
                    className="w-full h-64 lg:h-96 object-cover group-hover:scale-110 transition-transform duration-700"
                    onError={(e) => {
                      e.target.src = 'https://images.unsplash.com/photo-1518837695005-2083093ee35b?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80';
                    }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent flex items-end">
                    <div className="p-6 w-full">
                      <p className="text-white font-semibold text-lg">Beneficial Microbes at Work</p>
                      <p className="text-green-100 text-sm mt-1">Nature's smallest allies</p>
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
                  Nature's <span className="text-green-600">Smallest Allies</span>
                </h2>
                <div className="space-y-4 text-gray-600 text-lg leading-relaxed">
                  <p>
                    Yet, within this fragile earth, there is hope. At Biofactor, we believe the answer lies not in further exploitation, but in the nurturing touch of nature's smallest allies.
                  </p>
                  <p>
                    Beneficial microbes, those invisible stewards of the soil, hold the power to restore what has been lost. These tiny architects can fix nitrogen from the air, transforming it into life-giving sustenance for plants.
                  </p>
                  <p className="font-medium text-green-700 bg-green-50 p-4 rounded-xl border border-green-100">
                    They weave through the soil, delivering essential nutrients and standing guard against the stresses that threaten to wither the green world above.
                  </p>
                </div>
              </motion.div>
            </motion.div>
          </section>

          {/* Microbial Strains Section */}
          <section id="strains" className="mb-24">
            <motion.div 
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInUp}
              className="text-center mb-12"
            >
              <span className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-green-100 to-emerald-100 text-green-700 rounded-full text-sm font-semibold mb-4">
                🦠 Our Microbial Collection
              </span>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-800 mb-4">
                35 Proprietary <span className="text-green-600">Microbial Strains</span>
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Each strain is a unique testament to nature's adaptability, patented under the Budapest Treaty
              </p>
            </motion.div>
            
            <motion.div 
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={staggerContainer}
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12"
            >
              {[
                { icon: '🦠', name: 'Nitrogen-Fixing Bacteria', desc: 'Transform atmospheric nitrogen into plant-accessible nutrients', color: 'from-blue-50 to-cyan-50' },
                { icon: '🍄', name: 'Mycorrhizal Fungi', desc: 'Extend root systems and enhance nutrient absorption', color: 'from-purple-50 to-pink-50' },
                { icon: '🛡️', name: 'Pathogen Antagonists', desc: 'Protect plants from harmful pathogens naturally', color: 'from-red-50 to-orange-50' },
                { icon: '🌱', name: 'Growth Promoters', desc: 'Stimulate plant growth and improve stress resilience', color: 'from-green-50 to-emerald-50' }
              ].map((strain, index) => (
                <motion.div 
                  key={index}
                  variants={fadeInUp}
                  className={`bg-gradient-to-br ${strain.color} rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border border-green-100`}
                >
                  <div className="text-5xl mb-6 flex justify-center">{strain.icon}</div>
                  <h3 className="text-xl font-bold text-gray-800 mb-4 text-center">{strain.name}</h3>
                  <p className="text-gray-600 text-center">{strain.desc}</p>
                </motion.div>
              ))}
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="bg-gradient-to-r from-green-50 to-emerald-50 border border-green-200 rounded-2xl p-8 text-center shadow-lg"
            >
              <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-green-600 to-emerald-600 rounded-full mb-6">
                <span className="text-white text-3xl">📜</span>
              </div>
              <p className="text-xl font-semibold text-gray-800 mb-2">
                All strains are patented under the Budapest Treaty
              </p>
              <p className="text-gray-600">
                Deposited at the International Depository Authority for maximum protection and quality assurance
              </p>
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
                    src={microbes_3} 
                    alt="Microbial research in action"
                    className="w-full h-64 lg:h-96 object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent flex items-end">
                    <div className="p-6 w-full">
                      <p className="text-white font-semibold text-lg">Microbial Research Laboratory</p>
                      <p className="text-green-100 text-sm mt-1">Advanced scientific studies</p>
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
                  The Quiet <span className="text-green-600">Alliance</span>
                </h2>
                <div className="space-y-4 text-gray-600 text-lg leading-relaxed">
                  <p>
                    Our research is a journey into this quiet alliance, where plants and microbes engage in a delicate dance of mutual support.
                  </p>
                  <p>
                    With each discovery, we uncover the profound ways in which these microbes enhance growth, fortify against disease, and bring forth abundance from the earth.
                  </p>
                  <p className="font-medium text-green-700 bg-green-50 p-4 rounded-xl border border-green-100">
                    At Biofactor, we have carefully curated a collection of plant growth-promoting bacteria and fungi, each one a testament to nature's adaptability, finely tuned to flourish in the diverse climates of our world.
                  </p>
                </div>
              </motion.div>
            </motion.div>
          </section>

          {/* Technology Section */}
          <section className="mb-24">
            <motion.div 
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInUp}
              className="text-center mb-12"
            >
              <span className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-green-100 to-emerald-100 text-green-700 rounded-full text-sm font-semibold mb-4">
                🔬 Advanced Technology
              </span>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-800 mb-4">
                Innovative <span className="text-green-600">Microbial Delivery</span>
              </h2>
            </motion.div>

            <div className="grid md:grid-cols-2 gap-8">
              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeInUp}
                className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-2xl p-8 shadow-lg border border-green-100"
              >
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-14 h-14 rounded-xl bg-green-100 flex items-center justify-center">
                    <span className="text-2xl">🛡️</span>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-800">Bioencapsulation Technology</h3>
                    <p className="text-green-600 font-medium">Protection & Delivery</p>
                  </div>
                </div>
                <p className="text-gray-600 leading-relaxed">
                  Advanced encapsulation protects beneficial microbes and ensures targeted delivery to plant roots, maximizing effectiveness and longevity in the soil ecosystem.
                </p>
              </motion.div>

              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeInUp}
                className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-2xl p-8 shadow-lg border border-green-100"
              >
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-14 h-14 rounded-xl bg-emerald-100 flex items-center justify-center">
                    <span className="text-2xl">⏳</span>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-800">Sustained Release</h3>
                    <p className="text-green-600 font-medium">Continuous Benefits</p>
                  </div>
                </div>
                <p className="text-gray-600 leading-relaxed">
                  Our controlled-release mechanisms ensure microbes work continuously, providing long-term benefits to soil health and plant growth throughout the growing season.
                </p>
              </motion.div>
            </div>
          </section>

          {/* Final Paragraph */}
          <section className="text-center">
            <motion.div 
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInUp}
              className="max-w-4xl mx-auto"
            >
              <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-8">
                The <span className="text-green-600">Heartbeat</span> of a New Agricultural Future
              </h2>
              <div className="text-xl text-gray-600 mb-12 leading-relaxed">
                <p className="mb-6">
                  In the end, these microbes are more than just a solution—they are the heartbeat of a new agricultural future. Through their unseen work, we promise a world where the soil breathes with life once more, where plants rise strong and green, and where the soil, tenderly healed, offers its bounty in return.
                </p>
              </div>
              
              {/* CTA Section */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 }}
                className="bg-gradient-to-r from-green-600 to-emerald-700 rounded-2xl p-8 md:p-12 shadow-2xl"
              >
                <h3 className="text-2xl md:text-3xl font-bold text-white mb-6">
                  Ready to Transform Your Agriculture with Microbes?
                </h3>
                <p className="text-green-100 mb-8 text-lg">
                  Join the microbial revolution and experience the power of nature's smallest allies
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Link 
                    to="/contact" 
                    className="inline-flex items-center justify-center gap-2 bg-white hover:bg-gray-50 text-green-700 font-semibold px-8 py-4 rounded-full transition-all duration-300 transform hover:scale-105 shadow-lg"
                  >
                    <span>GET STARTED</span>
                    <FiArrowRight className="text-lg" />
                  </Link>
                  
                </div>
              </motion.div>
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
      `}</style>
    </div>
  );
};

export default BiofactorMicrobes;