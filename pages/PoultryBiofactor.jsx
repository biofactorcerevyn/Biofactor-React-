import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { 
  FaLeaf, 
  FaSeedling, 
  FaFlask, 
  FaMicroscope, 
  FaChartLine, 
  FaShieldAlt, 
  FaTint,
  FaIndustry,
  FaHeart,
  FaBalanceScale,
  FaCheck,
  FaArrowRight,
  FaUsers,
  FaAward,
  FaChartBar,
  FaDna,
  FaClipboardCheck
} from 'react-icons/fa';
import Navbar from '../layouts/Navbar';
import Footer from '../layouts/Footer';
import polutry from '../assets/polutry.png';

const PoultryBiofactor = () => {
  useEffect(() => {
    // Add scroll animation trigger
    const handleScroll = () => {
      const elements = document.querySelectorAll('.fade-in');
      elements.forEach(element => {
        const elementTop = element.getBoundingClientRect().top;
        const elementBottom = element.getBoundingClientRect().bottom;
        if (elementTop < window.innerHeight - 100 && elementBottom > 0) {
          element.classList.add('visible');
        }
      });
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Initial check

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Core Technologies
  const coreTechnologies = [
    {
      icon: <FaFlask className="text-3xl" />,
      title: "Innovative Enzymes",
      description: "Novel enzymes that enhance feed conversion rates, nutrient absorption, and reduce environmental impact.",
      details: "Break down complex feed components into simpler forms for better digestion, leading to improved growth, feed efficiency, and overall health."
    },
    {
      icon: <FaMicroscope className="text-3xl" />,
      title: "Advanced Microbials",
      description: "Specific strains of beneficial microorganisms to optimize gut flora and strengthen the immune system.",
      details: "Promote gut health, disease prevention, enhance nutrient utilization, and improve overall performance and well-being."
    },
    {
      icon: <FaSeedling className="text-3xl" />,
      title: "Premium Probiotics",
      description: "Carefully selected strains of beneficial bacteria for enhanced immune system and nutrient absorption.",
      details: "Create a healthy gut environment, strengthen the immune system, inhibit harmful pathogens, and enhance poultry productivity."
    },
    {
      icon: <FaDna className="text-3xl" />,
      title: "Phytogenic Nano-Nutrients",
      description: "Plant-derived compounds combined with cutting-edge nanotechnology for precise delivery.",
      details: "Utilize phytogenic compounds like essential oils, flavonoids, saponins, and tannins known for their bioactive properties."
    }
  ];

  // Key Benefits
  const keyBenefits = [
    {
      title: "Improved Feed Utilization",
      icon: <FaChartBar className="text-2xl" />,
      description: "Enhanced feed conversion rates and nutrient absorption"
    },
    {
      title: "Optimized Gut Health",
      icon: <FaHeart className="text-2xl" />,
      description: "Promotes beneficial gut flora and strengthens immune system"
    },
    {
      title: "Enhanced Performance",
      icon: <FaChartLine className="text-2xl" />,
      description: "Overall improved growth and poultry productivity"
    },
    {
      title: "Disease Prevention",
      icon: <FaShieldAlt className="text-2xl" />,
      description: "Inhibits growth of harmful pathogens and pathogens"
    }
  ];

  // Technology Stack
  const technologyStack = [
    {
      name: "Enzyme Technology",
      icon: <FaFlask />,
      description: "Break down complex feed components into simpler forms for better digestion"
    },
    {
      name: "Microbial Science",
      icon: <FaMicroscope />,
      description: "Optimize gut flora with specific strains of beneficial microorganisms"
    },
    {
      name: "Probiotic Research",
      icon: <FaSeedling />,
      description: "Strengthen immune system with carefully selected beneficial bacteria"
    },
    {
      name: "Nanotechnology",
      icon: <FaShieldAlt />,
      description: "Precise delivery and targeted action of phytogenic compounds"
    },
    {
      name: "Phytogenic Compounds",
      icon: <FaLeaf />,
      description: "Essential oils, flavonoids, saponins, and tannins with bioactive properties"
    },
    {
      name: "Custom Formulations",
      icon: <FaClipboardCheck />,
      description: "Farm-specific solutions tailored to unique requirements"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-emerald-50 to-white">
      <Navbar />
      
      {/* Hero Section - Fixed Background */}
      <section className="relative h-[90vh] min-h-[600px] max-h-[800px] overflow-hidden">
        {/* Background Image Container */}
        <div className="absolute inset-0">
          {/* Background Image */}
          <div className="absolute inset-0">
            <img 
              src={polutry}
              alt="Poultry Farm Background"
              className="absolute inset-0 w-full h-90 object-cover"
              style={{ objectPosition: 'center 30%' }}
              onError={(e) => {
                e.target.onerror = null;
                e.target.src = 'https://images.unsplash.com/photo-1623272619672-6422e5f0b783?w=1920&h=1080&fit=crop&crop=center&auto=format';
              }}
            />
          </div>
          
          {/* Gradient Overlay - Reduced opacity for better visibility */}
          <div className="absolute inset-0 bg-gradient-to-r from-emerald-900/70 via-emerald-800/60 to-green-900/70 z-10"></div>
          <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-emerald-900/20 z-10"></div>
          
          {/* Light overlay for text readability */}
          <div className="absolute inset-0 bg-black/10 z-10"></div>
        </div>
        
        {/* Hero Content */}
        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="container relative mx-auto px-4 h-full flex flex-col justify-center z-30"
        >
          <div className="text-center max-w-4xl mx-auto">
            
            
            <motion.h1 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.7 }}
              className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight text-white drop-shadow-lg"
            >
              Biofactor <span className="text-emerald-300 drop-shadow-lg">Poultry</span> Solutions
            </motion.h1>
            
            <motion.p 
              initial={{ opacity: 0, y: 25 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.7 }}
              className="text-xl md:text-2xl text-emerald-100 mb-10 max-w-3xl mx-auto leading-relaxed drop-shadow-lg"
            >
              Pioneering Biotechnology Innovations in Enzymes, Microbials, and Probiotics for Sustainable Poultry Farming
            </motion.p>
            
            
          </div>
        </motion.div>
      </section>

      {/* Introduction Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16 fade-in"
          >
            <span className="inline-block px-4 py-2 bg-emerald-100 text-emerald-700 rounded-full text-sm font-semibold mb-4">
              BIOTECHNOLOGY INNOVATION
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">
              About <span className="text-emerald-600">Biofactor Poultry</span>
            </h2>
            <div className="max-w-4xl mx-auto">
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                Biofactor is a biotechnology company that specializes in developing innovative solutions in enzymes, microbials, and probiotics. 
                Our primary focus is on the poultry industry, where we are dedicated to creating the next generation of natural phytogenic 
                nano-nutrient products.
              </p>
              <p className="text-lg text-gray-600 leading-relaxed">
                These products provide significant benefits to poultry farms by improving feed utilization, gut health, and overall performance, 
                contributing to the sustainable success of the poultry industry.
              </p>
            </div>
          </motion.div>

          {/* Core Focus Areas */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            <motion.div 
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="fade-in"
            >
              <div className="bg-gradient-to-br from-emerald-50 to-green-50 p-8 rounded-3xl shadow-xl border border-emerald-100 h-full">
                <div className="flex items-center mb-6">
                  <div className="p-4 bg-emerald-500 text-white rounded-xl mr-4">
                    <FaIndustry className="text-2xl" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-800">Our Focus</h3>
                </div>
                <p className="text-gray-700 leading-relaxed">
                  We focus exclusively on the poultry industry, developing specialized solutions that address the unique challenges 
                  faced by poultry farmers worldwide.
                </p>
              </div>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="fade-in"
            >
              <div className="bg-gradient-to-br from-blue-50 to-cyan-50 p-8 rounded-3xl shadow-xl border border-blue-100 h-full">
                <div className="flex items-center mb-6">
                  <div className="p-4 bg-blue-500 text-white rounded-xl mr-4">
                    <FaDna className="text-2xl" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-800">Innovation Approach</h3>
                </div>
                <p className="text-gray-700 leading-relaxed">
                  Combining plant-derived compounds with cutting-edge nanotechnology to create precise, targeted solutions that 
                  maximize effectiveness in addressing specific poultry farm challenges.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Core Technologies Section */}
      <section className="py-20 bg-gradient-to-b from-white to-emerald-50">
        <div className="container mx-auto px-4">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16 fade-in"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">
              Our <span className="text-emerald-600">Core Technologies</span>
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Specialized biotechnology solutions for the poultry industry
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {coreTechnologies.map((tech, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="fade-in"
              >
                <div className="bg-white rounded-2xl p-8 shadow-xl border border-emerald-100 hover:shadow-2xl transition-all duration-500 h-full">
                  <div className="flex items-start mb-6">
                    <div className="p-4 bg-gradient-to-r from-emerald-500 to-green-500 text-white rounded-xl mr-4">
                      {tech.icon}
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold text-gray-800 mb-2">{tech.title}</h3>
                      <p className="text-emerald-600 font-medium">{tech.description}</p>
                    </div>
                  </div>
                  <div className="bg-emerald-50 p-5 rounded-xl">
                    <p className="text-gray-700 leading-relaxed">{tech.details}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Detailed Information Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Enzymes Section */}
            <motion.div 
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="fade-in"
            >
              <div className="bg-gradient-to-br from-emerald-50 to-green-50 rounded-3xl p-8 h-full">
                <div className="flex items-center mb-6">
                  <div className="p-4 bg-emerald-500 text-white rounded-xl mr-4">
                    <FaFlask className="text-2xl" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-800">Enzymes Technology</h3>
                </div>
                <div className="space-y-4">
                  <p className="text-gray-700 leading-relaxed">
                    In the field of enzymes, Biofactor develops novel enzymes that enhance feed conversion rates, nutrient absorption, 
                    and reduce the environmental impact of poultry farming.
                  </p>
                  <div className="bg-white p-5 rounded-xl border border-emerald-100">
                    <h4 className="font-bold text-emerald-700 mb-2">Key Benefits:</h4>
                    <ul className="space-y-2 text-gray-700">
                      <li className="flex items-start">
                        <FaCheck className="w-4 h-4 text-emerald-500 mt-1 mr-2 flex-shrink-0" />
                        <span>Break down complex feed components into simpler forms</span>
                      </li>
                      <li className="flex items-start">
                        <FaCheck className="w-4 h-4 text-emerald-500 mt-1 mr-2 flex-shrink-0" />
                        <span>Improved growth and feed efficiency</span>
                      </li>
                      <li className="flex items-start">
                        <FaCheck className="w-4 h-4 text-emerald-500 mt-1 mr-2 flex-shrink-0" />
                        <span>Better digestion leading to overall health improvement</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Microbials & Probiotics Section */}
            <motion.div 
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="fade-in"
            >
              <div className="space-y-8">
                {/* Microbials */}
                <div className="bg-gradient-to-br from-blue-50 to-cyan-50 rounded-3xl p-8">
                  <div className="flex items-center mb-4">
                    <div className="p-3 bg-blue-500 text-white rounded-lg mr-3">
                      <FaMicroscope className="text-xl" />
                    </div>
                    <h4 className="text-xl font-bold text-gray-800">Microbials</h4>
                  </div>
                  <p className="text-gray-700 leading-relaxed">
                    Microbials play a crucial role in promoting gut health and disease prevention. Biofactor isolates and selects 
                    specific strains of beneficial microorganisms to optimize gut flora, enhance nutrient utilization, and strengthen 
                    the immune system.
                  </p>
                </div>

                {/* Probiotics */}
                <div className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-3xl p-8">
                  <div className="flex items-center mb-4">
                    <div className="p-3 bg-green-500 text-white rounded-lg mr-3">
                      <FaSeedling className="text-xl" />
                    </div>
                    <h4 className="text-xl font-bold text-gray-800">Probiotics</h4>
                  </div>
                  <p className="text-gray-700 leading-relaxed">
                    Probiotics, live microorganisms that confer health benefits, are incorporated to create a healthy gut environment, 
                    strengthen the immune system, inhibit harmful pathogens, aid in nutrient absorption, reduce digestive disorders, 
                    and enhance poultry productivity.
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Phytogenic Nano-Nutrients Section */}
      <section className="py-20 bg-gradient-to-b from-emerald-50 to-white">
        <div className="container mx-auto px-4">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-12 fade-in"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">
              Natural <span className="text-emerald-600">Phytogenic Nano-Nutrients</span>
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Combining traditional wisdom with modern nanotechnology
            </p>
          </motion.div>

          <div className="max-w-4xl mx-auto">
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="fade-in"
            >
              <div className="bg-white rounded-3xl p-8 shadow-xl border border-emerald-100">
                <div className="flex items-center mb-6">
                  <div className="p-4 bg-gradient-to-r from-emerald-500 to-green-500 text-white rounded-xl mr-4">
                    <FaLeaf className="text-2xl" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-gray-800">Advanced Formulation</h3>
                    <p className="text-emerald-600">Plant-derived compounds + Nanotechnology</p>
                  </div>
                </div>
                
                <div className="space-y-6">
                  <p className="text-gray-700 leading-relaxed">
                    Biofactor's natural phytogenic nano-nutrient products are developed by combining plant-derived compounds with 
                    cutting-edge nanotechnology. These products utilize phytogenic compounds, such as essential oils, flavonoids, 
                    saponins, and tannins, known for their bioactive properties.
                  </p>
                  
                  <div className="bg-gradient-to-r from-emerald-50 to-green-50 p-6 rounded-2xl">
                    <h4 className="font-bold text-emerald-700 mb-3">Nanotechnology Integration</h4>
                    <p className="text-gray-700">
                      The integration of nanotechnology ensures precise delivery and targeted action of these compounds, maximizing 
                      their effectiveness in addressing specific challenges faced by poultry farms.
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Customization Approach */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div 
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="fade-in"
            >
              <div className="bg-gradient-to-br from-blue-50 to-cyan-50 rounded-3xl p-8">
                <div className="flex items-center mb-6">
                  <div className="p-4 bg-blue-500 text-white rounded-xl mr-4">
                    <FaClipboardCheck className="text-2xl" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-800">Farm-Specific Customization</h3>
                </div>
                
                <div className="space-y-4">
                  <p className="text-gray-700 leading-relaxed">
                    A notable aspect of Biofactor's approach is their customization for farm-specific requirements. We recognize that 
                    each farm has unique needs and challenges, and we work closely with farmers to understand their specific requirements.
                  </p>
                  
                  <div className="bg-white p-5 rounded-xl border border-blue-100">
                    <h4 className="font-bold text-blue-700 mb-3">Our Process</h4>
                    <ul className="space-y-2 text-gray-700">
                      <li className="flex items-start">
                        <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                        <span>Thorough farm assessment and analysis</span>
                      </li>
                      <li className="flex items-start">
                        <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                        <span>Understanding specific challenges and requirements</span>
                      </li>
                      <li className="flex items-start">
                        <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                        <span>Formulating customized solutions</span>
                      </li>
                      <li className="flex items-start">
                        <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                        <span>Addressing specific deficiencies and optimizing performance</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="fade-in"
            >
              <div className="bg-gradient-to-br from-emerald-500 to-green-600 rounded-3xl p-8 text-white shadow-2xl">
                <div className="mb-6">
                  <h3 className="text-2xl font-bold mb-2">Personalized Approach</h3>
                  <p className="text-emerald-100">
                    Maximizing return on investment with tailored solutions
                  </p>
                </div>
                
                <div className="space-y-4">
                  <p className="text-emerald-100 leading-relaxed">
                    This personalized approach allows farmers to maximize their return on investment by utilizing products tailored 
                    to their farm's specific requirements, ensuring optimal results and sustainable success.
                  </p>
                  
                  <div className="bg-white/10 p-5 rounded-xl backdrop-blur-sm">
                    <h4 className="font-bold mb-3">Key Benefits of Customization</h4>
                    <ul className="space-y-2 text-emerald-100">
                      <li className="flex items-start">
                        <FaCheck className="w-4 h-4 text-emerald-300 mt-1 mr-2 flex-shrink-0" />
                        <span>Products specifically formulated for your farm's needs</span>
                      </li>
                      <li className="flex items-start">
                        <FaCheck className="w-4 h-4 text-emerald-300 mt-1 mr-2 flex-shrink-0" />
                        <span>Address unique challenges and deficiencies</span>
                      </li>
                      <li className="flex items-start">
                        <FaCheck className="w-4 h-4 text-emerald-300 mt-1 mr-2 flex-shrink-0" />
                        <span>Optimized poultry performance and health</span>
                      </li>
                      <li className="flex items-start">
                        <FaCheck className="w-4 h-4 text-emerald-300 mt-1 mr-2 flex-shrink-0" />
                        <span>Maximized return on investment</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Benefits Summary Section */}
      <section className="py-20 bg-gradient-to-b from-emerald-50 to-white">
        <div className="container mx-auto px-4">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16 fade-in"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">
              Key <span className="text-emerald-600">Benefits</span>
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Comprehensive benefits for sustainable poultry farming
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {keyBenefits.map((benefit, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="fade-in"
              >
                <div className="bg-white rounded-2xl p-6 shadow-lg border border-emerald-100 hover:shadow-xl transition-all duration-500 h-full">
                  <div className="flex justify-center mb-4">
                    <div className="p-3 bg-gradient-to-r from-emerald-500 to-green-500 text-white rounded-xl">
                      {benefit.icon}
                    </div>
                  </div>
                  <h4 className="text-lg font-bold text-gray-800 text-center mb-2">{benefit.title}</h4>
                  <p className="text-gray-600 text-center text-sm">{benefit.description}</p>
                </div>
              </motion.div>
            ))}
          </div>

          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="mt-12 text-center fade-in"
          >
            <div className="max-w-3xl mx-auto bg-white p-8 rounded-3xl shadow-lg border border-emerald-100">
              <h3 className="text-2xl font-bold text-gray-800 mb-4">Overall Impact</h3>
              <p className="text-gray-700 leading-relaxed">
                Biofactor is at the forefront of biotechnology innovations in enzymes, microbials, and probiotics, focusing on 
                the poultry industry. Their development of natural phytogenic nano-nutrient products, combined with customization 
                based on farm-specific requirements, provides significant benefits to poultry farms. By improving feed utilization, 
                gut health, and overall performance, Biofactor contributes to the sustainable success of the poultry industry.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
      
      <style jsx>{`
        .fade-in {
          opacity: 0;
          transform: translateY(20px);
          transition: opacity 0.6s ease, transform 0.6s ease;
        }
        
        .fade-in.visible {
          opacity: 1;
          transform: translateY(0);
        }
        
        @keyframes bounce {
          0%, 100% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(-10px);
          }
        }
        
        .animate-bounce {
          animation: bounce 2s ease-in-out infinite;
        }
        
        /* Ensure image covers properly */
        .hero-bg {
          background-size: cover;
          background-position: center 30%;
          background-repeat: no-repeat;
        }
      `}</style>
    </div>
  );
};

export default PoultryBiofactor;