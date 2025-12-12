import React from 'react';
import { Link } from 'react-router-dom';
import { FiArrowRight, FiCheckCircle, FiUsers, FiMap, FiTarget, FiTrendingUp, FiGlobe, FiHeart, FiShield, FiHome, FiUser, FiMail, FiLogIn } from "react-icons/fi";
import { motion } from 'framer-motion';

// Import images
import aboutVideo from "./../assets/about.mp4";
import aboutFarmer from "./../assets/about_farmer.png";
import aboutScientist from "./../assets/about_sceintist.png";
import satyam from "./../assets/satyam.png";
import krishnaMurali from "./../assets/B-KRISHNA-MURALI.png";
import lnReddy from "./../assets/L-N-reddy_1.png";
import Navbar from '../layouts/Navbar';
import Footer from '../layouts/Footer';
const About = () => {
  const milestones = [
    { year: '2005', event: 'Company Founded', description: 'Started operations with vision for sustainable agriculture' },
    { year: '2008', event: 'First Innovation', description: 'Developed first bio-fertilizer formula' },
    { year: '2010', event: 'Quality Certification', description: 'Achieved FCO & CIB certifications' },
    { year: '2013', event: 'Expansion', description: 'Launched 20+ new agricultural products' },
    { year: '2015', event: 'New Facility', description: 'Opened state-of-the-art manufacturing unit' },
    { year: '2018', event: 'National Reach', description: 'Expanded to 18+ states across India' },
    { year: '2020', event: 'Innovation Award', description: 'Received "Best Agri-Innovation" award' },
    { year: '2023', event: 'Global Vision', description: 'Launched novel sustainable solutions' },
  ];

  const team = [
    { 
      name: 'Dr. L. N. REDDY', 
      role: 'Founding Director and C.E.O', 
      exp: '25+ years in Agriculture & Nanotechnology', 
      image: lnReddy,
      more: 'Dr. L. N. Reddy, a Nanotechnology Ph.D., has over a decade of leadership experience, driving 200+ innovations, 8 patents, 35 microbial strains, and fostering healthier soils for a sustainable planet.',
      color: 'from-blue-600/10 to-emerald-600/10',
      achievements: ['8 Patents', '35 Microbial Strains', '200+ Innovations', 'Ph.D. Nanotechnology']
    },
    { 
      name: 'Krishnamurali Chowdary', 
      role: 'Director - Sales', 
      exp: '15+ years in Agricultural Sales', 
      image: krishnaMurali,
      more: 'Krishna, an MBA graduate and a founding member of Biofactor, has been pivotal in building a strong sales team nationwide. Currently leading a 150-member sales and marketing team in North India.',
      color: 'from-green-600/10 to-teal-600/10',
      achievements: ['MBA Graduate', 'Founding Member', '150+ Team', 'National Sales Leadership']
    },
    { 
      name: 'E SATYANARAYANA REDDY', 
      role: 'Chief Business Officer South India', 
      exp: '20+ years in Agricultural Management', 
      image: satyam,
      more: 'Satyanarayana, with a bachelor\'s degree in electronics, brings 10 years of commercial farming expertise, 5 years in skill development training, currently leading a 90-member sales team.',
      color: 'from-emerald-600/10 to-cyan-600/10',
      achievements: ['B.E. Electronics', 'Commercial Farming Expert', '90+ Team', 'Skill Development Trainer']
    },
  ];

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
    <div className="min-h-screen bg-gradient-to-br from-green-50 via-emerald-50 to-teal-50">
      {/* Navigation - Same as Homepage */}
        <Navbar />

      {/* Hero Banner with Video */}
      <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden">
        {/* Video Background */}
        <div className="absolute inset-0 z-0">
          <video
            autoPlay
            muted
            loop
            playsInline
            className="w-full h-full object-cover brightness-75"
          >
            <source src={aboutVideo} type="video/mp4" />
            <div className="absolute inset-0 bg-gradient-to-br from-green-900 to-emerald-900"></div>
          </video>
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent"></div>
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
                About Biofactor
              </span>
            </motion.div>
            
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-tight drop-shadow-2xl">
              Pioneering <span className="text-green-300">Sustainable</span>
              <br />
              <span className="text-emerald-300">Agriculture</span> Solutions
            </h1>
            
            <p className="text-xl md:text-2xl text-green-100 leading-relaxed max-w-4xl mx-auto drop-shadow-lg">
              Transforming agricultural practices with innovative technology and sustainable solutions 
              that benefit farmers, communities, and the environment.
            </p>
            
            <motion.div 
              className="flex flex-col sm:flex-row gap-6 justify-center pt-8"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.5 }}
            >
              <Link
                to="/contact"
                className="px-10 py-5 rounded-full bg-gradient-to-r from-green-500 to-emerald-600 text-white font-semibold text-lg shadow-2xl hover:shadow-3xl hover:scale-105 transition-all duration-300 inline-flex items-center justify-center gap-3 group"
              >
                <span>CONTACT US</span>
                <FiArrowRight className="text-xl group-hover:translate-x-2 transition-transform duration-300" />
              </Link>
              
            </motion.div>

            {/* Stats Grid */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8, duration: 0.5 }}
              className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 max-w-4xl mx-auto pt-12"
            >
              {[
                { number: '18+', label: 'States', sublabel: 'Operational Presence', icon: '📍' },
                { number: '400+', label: 'Families', sublabel: 'Team Members', icon: '👨‍👩‍👧‍👦' },
                { number: '1L+', label: 'Acres', sublabel: 'Transformed', icon: '🌾' },
                { number: '15+', label: 'Years', sublabel: 'of Excellence', icon: '📈' }
              ].map((stat, idx) => (
                <div key={idx} className="bg-white/15 backdrop-blur-sm border border-white/30 rounded-2xl p-6 text-center hover:bg-white/20 transition-all duration-300 hover:scale-105">
                  <div className="text-2xl mb-2">{stat.icon}</div>
                  <div className="text-3xl md:text-4xl font-bold text-white mb-1">{stat.number}</div>
                  <div className="text-green-100 font-semibold">{stat.label}</div>
                  <div className="text-green-200 text-sm mt-1">{stat.sublabel}</div>
                </div>
              ))}
            </motion.div>
          </motion.div>

          
        </div>
      </section>

      {/* Company Overview */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInUp}
              className="space-y-8"
            >
              <div>
                <span className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-green-100 to-emerald-100 text-green-700 rounded-full text-sm font-semibold mb-4">
                  <FiCheckCircle className="text-green-600" /> Our Legacy
                </span>
                <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6">
                  Building Sustainable Agricultural Futures
                </h2>
              </div>
              
              <div className="space-y-6 text-gray-600">
                <p className="text-lg leading-relaxed">
                  Founded with a vision to revolutionize agriculture, Biofactor has emerged as a trusted name 
                  in sustainable farming solutions, combining scientific excellence with environmental stewardship.
                </p>
                <p className="leading-relaxed">
                  Our journey began with a simple yet powerful vision: to make sustainable agriculture 
                  accessible to every farmer while preserving our planet's resources for future generations.
                </p>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-xl bg-green-100 flex items-center justify-center">
                    <FiShield className="text-green-600 text-xl" />
                  </div>
                  <div>
                    <div className="font-semibold text-gray-900">FCO Certified</div>
                    <div className="text-sm text-gray-600">Quality Assured</div>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-xl bg-emerald-100 flex items-center justify-center">
                    <FiShield className="text-emerald-600 text-xl" />
                  </div>
                  <div>
                    <div className="font-semibold text-gray-900">CIB Approved</div>
                    <div className="text-sm text-gray-600">Regulatory Compliance</div>
                  </div>
                </div>
              </div>
            </motion.div>
            
            <motion.div 
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={staggerContainer}
              className="grid grid-cols-2 gap-6"
            >
              {[
                { number: '8+', label: 'Patents Filed', icon: '📜', color: 'text-purple-600' },
                { number: '35+', label: 'Proprietary Strains', icon: '🧬', color: 'text-blue-600' },
                { number: '2200+', label: 'Dealer Network', icon: '🏪', color: 'text-amber-600' },
                { number: '5L+', label: 'Farmer Network', icon: '👨‍🌾', color: 'text-green-600' },
                { number: '200+', label: 'Innovations', icon: '💡', color: 'text-emerald-600' },
                { number: '15+', label: 'Years Excellence', icon: '⭐', color: 'text-cyan-600' }
              ].map((stat, idx) => (
                <motion.div 
                  key={idx}
                  variants={fadeInUp}
                  className="bg-gradient-to-br from-green-50 to-emerald-50 p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border border-green-100 hover:-translate-y-1"
                >
                  <div className="flex items-center gap-3 mb-3">
                    <div className="text-2xl">{stat.icon}</div>
                    <div className={`text-3xl font-bold ${stat.color}`}>{stat.number}</div>
                  </div>
                  <div className="text-gray-700 font-medium text-sm">{stat.label}</div>
                </motion.div>
              ))}
            </motion.div>
          </div>

          {/* A New Era of Farming Section */}
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            className="mt-20 bg-gradient-to-br from-green-50 to-emerald-50 rounded-3xl p-8 md:p-12 border border-green-100 shadow-xl"
          >
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="space-y-8">
                <div>
                  <h3 className="text-3xl font-bold text-gray-900 mb-4">A New Era of Farming</h3>
                  <p className="text-gray-700 leading-relaxed">
                    Farming is evolving with AI, IoT, and sustainable practices like hydroponics and regenerative agriculture. 
                    Automation, drones, and data analytics enhance efficiency, ensuring smarter, resilient, 
                    and eco-friendly food production for the future.
                  </p>
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-white/90 p-4 rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300">
                    <div className="text-green-600 font-bold mb-1 flex items-center gap-2">
                      <span>🤖</span> AI & IoT
                    </div>
                    <p className="text-sm text-gray-600">Smart farming technologies</p>
                  </div>
                  <div className="bg-white/90 p-4 rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300">
                    <div className="text-green-600 font-bold mb-1 flex items-center gap-2">
                      <span>🌱</span> Regenerative Ag
                    </div>
                    <p className="text-sm text-gray-600">Soil health restoration</p>
                  </div>
                  <div className="bg-white/90 p-4 rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300">
                    <div className="text-green-600 font-bold mb-1 flex items-center gap-2">
                      <span>📊</span> Data Analytics
                    </div>
                    <p className="text-sm text-gray-600">Precision agriculture</p>
                  </div>
                  <div className="bg-white/90 p-4 rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300">
                    <div className="text-green-600 font-bold mb-1 flex items-center gap-2">
                      <span>♻️</span> Sustainability
                    </div>
                    <p className="text-sm text-gray-600">Eco-friendly practices</p>
                  </div>
                </div>
              </div>
              <motion.div 
                className="rounded-2xl overflow-hidden shadow-2xl"
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.3 }}
              >
                <img 
                  src={aboutFarmer} 
                  alt="Modern Farming" 
                  className="w-full h-64 md:h-80 object-cover"
                />
                <div className="bg-gradient-to-t from-black/80 to-transparent p-6 -mt-16 relative z-10">
                  <p className="text-white font-semibold">Modern agriculture powered by innovation</p>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Mission & Vision with Scientist Background - FIXED WITH IMAGE */}
      <section className="py-20 relative">
        <div className="absolute inset-0 z-0">
          <img 
            src={aboutScientist} 
            alt="Scientist Background" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-br from-green-900/70 to-emerald-900/70"></div>
        </div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            className="text-center mb-12"
          >
            <span className="inline-flex items-center gap-2 px-4 py-2 bg-white/20 backdrop-blur-sm text-white rounded-full text-sm font-semibold mb-4">
              🎯 Our Core Values
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
              Our Guiding Principles
            </h2>
            <p className="text-green-100 max-w-2xl mx-auto">
              The foundation of everything we do at Biofactor
            </p>
          </motion.div>
          
          <div className="grid md:grid-cols-2 gap-8">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-white/10 backdrop-blur-xl p-8 rounded-2xl shadow-2xl border border-white/20 hover:bg-white/15 transition-all duration-300"
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-green-500/20 to-emerald-500/20 flex items-center justify-center">
                  <span className="text-2xl">🎯</span>
                </div>
                <div>
                  <span className="inline-flex items-center gap-2 px-3 py-1 bg-white/20 text-white rounded-full text-xs font-semibold">
                    <FiTarget className="text-green-300" /> Our Mission
                  </span>
                </div>
              </div>
              <h3 className="text-2xl font-bold text-white mb-6">Transforming Agriculture</h3>
              <p className="text-green-100 leading-relaxed">
                Biofactor transforms agriculture with advanced biofertilizers and organic solutions, tackling soil fertility challenges and reducing chemical dependency. Through continuous innovation, we empower farmers with sustainable, high-performance solutions for a healthier planet.
              </p>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-white/10 backdrop-blur-xl p-8 rounded-2xl shadow-2xl border border-white/20 hover:bg-white/15 transition-all duration-300"
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-green-500/20 to-emerald-500/20 flex items-center justify-center">
                  <span className="text-2xl">👁️</span>
                </div>
                <div>
                  <span className="inline-flex items-center gap-2 px-3 py-1 bg-white/20 text-white rounded-full text-xs font-semibold">
                    <FiMap className="text-green-300" /> Our Vision
                  </span>
                </div>
              </div>
              <h3 className="text-2xl font-bold text-white mb-6">Global Leadership</h3>
              <p className="text-green-100 leading-relaxed">
                To lead global sustainable agriculture by innovating biofertilizers and organic inputs that enhance soil health, crop quality, and eco-friendly practices across farming, poultry, and livestock industries.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      

      {/* Professional Leadership Team */}
      <section className="py-20 bg-gradient-to-b from-white to-green-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            className="text-center mb-16"
          >
            <span className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-green-100 to-emerald-100 text-green-700 rounded-full text-sm font-semibold mb-4">
              <FiUsers className="text-green-600" /> Executive Leadership
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              Visionary Leadership Team
            </h2>
            <p className="text-gray-600 max-w-3xl mx-auto">
              Meet the experienced professionals driving innovation and sustainable growth at Biofactor
            </p>
          </motion.div>
          
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="grid lg:grid-cols-3 gap-8"
          >
            {team.map((member, index) => (
              <motion.div 
                key={index}
                variants={fadeInUp}
                className="group relative"
              >
                <div className="absolute -inset-0.5 bg-gradient-to-r from-green-400 to-emerald-500 rounded-3xl blur opacity-0 group-hover:opacity-20 transition duration-500"></div>
                <div className="relative bg-white rounded-3xl shadow-xl overflow-hidden border border-green-100 hover:shadow-2xl transition-all duration-300">
                  <div className="relative h-72 overflow-hidden">
                    <div className={`absolute inset-0 bg-gradient-to-br ${member.color}`}></div>
                    <img 
                      src={member.image} 
                      alt={member.name}
                      className="w-full h-full object-cover relative z-10 group-hover:scale-110 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/40 to-transparent z-20"></div>
                    <div className="absolute bottom-0 left-0 right-0 p-6 z-30">
                      <h3 className="text-2xl font-bold text-white mb-1">{member.name}</h3>
                      <p className="text-emerald-200 font-semibold">{member.role}</p>
                    </div>
                  </div>
                  
                  <div className="p-8">
                    <div className="flex items-center gap-2 text-sm text-green-600 font-semibold mb-4">
                      <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                      {member.exp}
                    </div>
                    
                    <p className="text-gray-700 leading-relaxed mb-6 line-clamp-3">
                      {member.more}
                    </p>
                    
                    <div className="pt-6 border-t border-green-100">
                      <h4 className="text-sm font-semibold text-gray-900 mb-3">Key Achievements</h4>
                      <div className="flex flex-wrap gap-2">
                        {member.achievements.map((achievement, idx) => (
                          <span key={idx} className="px-3 py-1.5 bg-green-50 text-green-700 text-xs font-medium rounded-full hover:bg-green-100 transition-colors">
                            {achievement}
                          </span>
                        ))}
                      </div>
                    </div>
                    
                    <div className="mt-6 pt-6 border-t border-green-100">
                      <div className="flex items-center gap-2 text-green-600 font-semibold group-hover:text-green-700 transition-colors cursor-pointer">
                        <span>View Full Profile</span>
                        <FiArrowRight className="group-hover:translate-x-1 transition-transform" />
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-green-700 via-green-800 to-emerald-900">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center"
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-8">
            Join the Sustainable Agriculture Revolution
          </h2>
          <p className="text-xl text-green-100 mb-12 max-w-3xl mx-auto">
            Partner with Biofactor to revolutionize farming practices and create a sustainable future for generations to come.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <Link 
              to="/contact" 
              className="inline-flex items-center justify-center gap-2 bg-white hover:bg-gray-50 text-green-700 font-semibold px-10 py-4 rounded-full text-lg transition-all duration-300 transform hover:-translate-y-1 hover:shadow-2xl group"
            >
              <span>GET IN TOUCH</span>
              <FiArrowRight className="text-lg group-hover:translate-x-2 transition-transform" />
            </Link>
            
          </div>
        </motion.div>
      </section>

      {/* Footer - Same as Homepage */}
      <Footer />
    </div>
  );
};

export default About;