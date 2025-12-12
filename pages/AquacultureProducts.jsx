import React, { useState, useEffect } from 'react';
import { 
  FaLeaf, 
  FaShieldAlt, 
  FaVirus, 
  FaChartLine, 
  FaStar, 
  FaFish, 
  FaSearch, 
  FaTimes, 
  FaArrowLeft, 
  FaCheck,
  FaBars  // Add this import
} from 'react-icons/fa';
import Navbar from '../layouts/Navbar'; 
import Footer from '../layouts/Footer';
// Import all images
import nanominerals_bioton from '../assets/nanominerals_bioton.png';
import nanominerals_highk from '../assets/nanominerals_highk.png';
import nanominerals_kelp from '../assets/nanominerals_kelp.png';
import nanominerals_magic from '../assets/nanominerals_magic.png';
import nanominerals_mintop from '../assets/nanominerals_mintop.png';
import nanominerals_zinton from '../assets/nanominerals_zinton.png';
import probiotics_procare from '../assets/probiotics_procare-w.png';
import probiotics_regalis from '../assets/probiotics_regalis.png';
import probiotics_trucare from '../assets/probiotics_trucare.png';
import disease_2 from '../assets/disease_2.png';
import disease_biocidaa from '../assets/disease_biocidaa.png';
import disease_dawn from '../assets/disease_dawn.png';
import disease_evacc from '../assets/disease_evacc.png';
import disease_kipper from '../assets/disease_kipper.png';
import disease_vacc from '../assets/disease_vacc.png';
import disease_virban from '../assets/disease_virban.png';
import growth_moltmaster from '../assets/growth_moltmaster.png';
import growth_seafactor from '../assets/growth_seafactor.png';
import growth_trumin from '../assets/growth_trumin.png';
import growth_vardaaan from '../assets/growth_vardaan.png';

const AquacultureProducts = () => {
  const [activeCategory, setActiveCategory] = useState('NANO MINERALS');
  const [activeProduct, setActiveProduct] = useState(null);
  const [searchQuery, setSearchQuery] = useState('');
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [filteredProducts, setFilteredProducts] = useState([]);

  // Product data with detailed information
  const productData = {
    'NANO MINERALS': [
      {
        name: 'BIOTON',
        image: nanominerals_bioton,
        description: 'Bioton essentials for fish metabolism, fish growth, and pond management',
        detailed: {
          title: 'BIOTON',
          subtitle: 'Essentials for fish metabolism, fish growth, and pond management',
          content: 'The fine microorganisms present in Bioton, are a source of a myriad of benefits essential for fish metabolism, fish growth, and pond management. The combination of prebiotics, probiotics and enzymes in the formulation helps the fish absorb the highest percentage of protein available in the food. Bioton boosts the immune system of the fish and manages the waste in the pond efficiently, contributing to the healthy growth of the fish.',
          benefits: [
            'Enhances the metabolic activity in the fish',
            'Prevents scale loss',
            'Boosts immunity in the fish',
            'Increases the disease tolerance of the fish',
            'Improves the survival rates'
          ]
        }
      },
      {
        name: 'HIGH K',
        image: nanominerals_highk,
        description: 'Potassium-rich mineral supplement for aquatic health',
        detailed: {
          title: 'HIGH K',
          subtitle: 'Potassium-rich mineral supplement',
          content: 'High K provides essential potassium minerals in nano form for optimal aquatic health and growth.',
          benefits: [
            'Improves osmoregulation',
            'Enhances nutrient transport',
            'Supports proper moulting',
            'Boosts overall health'
          ]
        }
      },
      {
        name: 'KELP',
        image: nanominerals_kelp,
        description: 'Natural kelp-based mineral supplement',
        detailed: {
          title: 'KELP',
          subtitle: 'Natural kelp-based mineral supplement',
          content: 'Kelp provides natural minerals and nutrients essential for shrimp and fish health.',
          benefits: [
            'Increases feed intake capacity',
            'Hastens moulting process',
            'Reduces mortality rate',
            'Improves stress resistance'
          ]
        }
      },
      {
        name: 'MAGIC',
        image: nanominerals_magic,
        description: 'Colloidal micro emulsion for improved mineral absorption',
        detailed: {
          title: 'MAGIC',
          subtitle: 'Colloidal micro emulsion',
          content: 'Magic is a nano scale sized, ionized Magnesium incorporated in an amino acid matrix and bioencapsulated using biopolymers, combined with vitamin D3 and an osmo protector.',
          benefits: [
            'Improves Magnesium absorption',
            'Assists in proper moulting in Shell Fish',
            'Supplements Animal Feed',
            'Improves resistance of the Shrimp',
            'Acts as a good stress reliever'
          ]
        }
      },
      {
        name: 'MINTOP',
        image: nanominerals_mintop,
        description: 'Perfect mix of minerals and vitamins for shrimp growth',
        detailed: {
          title: 'MINTOP',
          subtitle: 'Perfect mix of minerals and vitamins',
          content: 'Mintop is a perfect mix of minerals and vitamins that aid in the healthy growth and improved weight gain of shrimp. Mintop helps in osmoregulation and nutrient transport to the cells, which in turn aids in the growth and development of the aqua life.',
          benefits: [
            'Optimizes the growth of Zoo and Phyto planktons',
            'Absorbing minerals effectively leading to mass moulting',
            'Improves the immunity of the fish',
            'Enhances the water colour',
            'Boosts growth making shrimp resistant to stress'
          ]
        }
      },
      {
        name: 'ZINTON',
        image: nanominerals_zinton,
        description: 'Zinc-based mineral supplement for aquatic health',
        detailed: {
          title: 'ZINTON',
          subtitle: 'Zinc-based mineral supplement',
          content: 'The beneficial effects of Zinc in Zinton, are known to extend beyond growth and performance to include bone and nervous system development, improvements in reproduction, reductions in oxidative stress and increase in resistance to disease in fish and shrimp.',
          benefits: [
            'Assists in muscle development',
            'Increases resistance to diseases',
            'Reduces mortality rate',
            'Enhances development',
            'Acts as a stress buster'
          ]
        }
      }
    ],
    'PROBIOTICS': [
      {
        name: 'PROCARE-W',
        image: probiotics_procare,
        description: 'Multi-strain polyfunctional probiotic for water quality',
        detailed: {
          title: 'PROCARE-W',
          subtitle: 'A multi-strain polyfunctional probiotic',
          content: 'Procare-W is a multi-strain polyfunctional probiotic, which is an essential biological control to maintain optimal water quality parameters. It aids in keeping the bottom of the pond clean, stabilizing plankton bloom, controlling vibrio as per organic farming standards and guarantees zero use of antibiotics.',
          benefits: [
            'Reduces disease causing pathogenic bacteria while promoting beneficial and healthy probiota',
            'Degrades and digests accumulated organic matter',
            'Maintains stable and healthy bloom of phytoplankton',
            'Reduces harmful and toxic gases',
            'Reduces stress as indicated by prophenyloxidase levels',
            'Increases survival rate of shrimp'
          ]
        }
      },
      {
        name: 'REGALIS',
        image: probiotics_regalis,
        description: 'Granulated aqua probiotic consortium for soil and water',
        detailed: {
          title: 'REGALIS',
          subtitle: 'A granulated aqua probiotic consortium',
          content: 'Regalis is a granulated aqua probiotic consortium product for soil and water. It is constituted using the best microorganisms like Bacillus, Lactobacillus and other useful microorganisms which help in making the bottom rich in inadequately manage sludge and water, thereby promoting healthy growth of the shrimp. Consistent use of Regalis granules will result in the water turning into a golden green colour.',
          benefits: [
            'Enhances the digestion of nutrients',
            'Improves the quality of water',
            'Helps in stress tolerance',
            'Boosts immunity of the shrimp',
            'Improves the survival rates'
          ],
          dosage: {
            basal: '1 kg per acre, 1 kg per 1 lakh seed',
            top: '300-500 grams as per situation in every 8 to 10 days'
          }
        }
      },
      {
        name: 'TRUCARE',
        image: probiotics_trucare,
        description: 'Combination of probiotics, prebiotics and enzymes',
        detailed: {
          title: 'TRUCARE',
          subtitle: 'A combination of potential probiotics, prebiotics and enzymes',
          content: 'Trucare is a combination of potential probiotics, prebiotics and enzymes which play a vital role in the maintenance of advanced gut health of fish and shrimp. The enzymes present in Trucare are quick acting and hasten the FCR and disease resistance power by enhancing biological activities.',
          benefits: [
            'Improves moulting and shell formation processes',
            'Enhances immunity resulting in better yield',
            'Escalates useful microbial population',
            'Improves digestion and absorption of nutrients',
            'Makes shrimp resistant to stress',
            'Boosts immunity of the shrimp',
            'Improves nutrient absorption & utilisation',
            'Hastens the pace of growth'
          ],
          dosage: '5 to 10 grams per 1 kg of Feed'
        }
      }
    ],
    'DISEASE MANAGEMENT': [
      {
        name: '2.0',
        image: disease_2,
        description: 'Advanced formulation for disease control',
        detailed: {
          title: 'VIRBAN 2.0',
          subtitle: 'Advanced antimicrobial nanoencapsulated phytoextracts',
          content: 'Virban is a nano technology with a specific formula which contains antimicrobial encapsulated phytoextracts in nano form to aid in the growth and survival rate of Shrimp. Virban protects the shrimp from bacterial, fungal diseases and can control the multiplication of viruses.',
          benefits: [
            'A novel shrimp protective liquid',
            'Contains antimicrobial Nanoencapsulated phytoextracts',
            'Effective against all types of pathogenic bacteria including Vibrio spp',
            'Incredible Virucidal liquid',
            'Improves survival rate',
            'Efficient in high stocking densities'
          ],
          usage: '10ml 2.0 per Litres of water to soak 2kg feed. Duration: 4 to 6 days in all feeds.'
        }
      },
      {
        name: 'BIOCIDAA',
        image: disease_biocidaa,
        description: 'Comprehensive biocide for multiple pathogens',
        detailed: {
          title: 'BIOCIDAA',
          subtitle: 'Will destroy up to 23 species of viruses as well as bacteria, fungi, yeasts and mycoplasma',
          content: 'BIOCIDAA is a new kind of biocide developed and produced with nano technology to be more comprehensive and to have a higher power in destroying viruses. It has the capacity to destroy up to 23 species of viruses as well as bacteria, fungi, yeasts and mycoplasma. BIOCIDAA is effective in destroying WSSV, YHV, Vibrio and other pathogens without effecting the water quality or reducing plankton.',
          benefits: [
            'Immunomodulator',
            'Boosts immunity of shrimp',
            'Makes the shrimp disease tolerant',
            'Acts as a good stress buster',
            'High density stress buster',
            'Improves survival rates'
          ]
        }
      },
      {
        name: 'DAWN',
        image: disease_dawn,
        description: 'Effective against white spot syndrome virus',
        detailed: {
          title: 'DAWN',
          subtitle: 'Highly effective against white spot syndrome virus in shrimp',
          content: 'DAWN is a nano encapsulated plant extract product that is highly effective against white spot syndrome virus in shrimp. The encapsulation of natural plant extract enhances the antiviral activities and leads to excellent bioavailability and long-term stability. The interaction between the extract and the envelope protein leads to the deactivation of viruses while preventing replication.',
          benefits: [
            'Effective against white spot syndrome',
            'Prevents virus replication',
            'Stimulates immunostimulatory activity',
            'Enhances bioavailability',
            'Long-term stability'
          ],
          usage: '10 ml per 1 kg of feed'
        }
      },
      {
        name: 'E-VACC',
        image: disease_evacc,
        description: 'Nano encapsulated plant extract for aquaculture',
        detailed: {
          title: 'E-VACC',
          subtitle: 'Nano encapsulated plant extract',
          content: 'E-VACC is a nano encapsulated plant extract and an innovative product for aquaculture. It is a perfect blend of plant extracts and a combination of essential oils designed to optimize growth performance, improved gut morphology, intestinal health and efficient feed utilization.',
          benefits: [
            'Effective anti-vibrio action',
            'Optimizes growth performance and improves gut morphology',
            'Improves nutrient digestion',
            'Improves water quality',
            'Helps in stress tolerance',
            'Boosts immunity of shrimp',
            'Improves survival rates'
          ],
          usage: '10 ml per every 1 litre soaked with 2 kgs of feed'
        }
      },
      {
        name: 'KIPPER',
        image: disease_kipper,
        description: 'Nano blend for disease treatment',
        detailed: {
          title: 'KIPPER',
          subtitle: 'Specific blend containing nano zinc, vitamin C and herbal flavonoids',
          content: 'Kipper is a specific blend containing nano zinc, nano encapsulated vitamin C and nano encapsulated herbal flavonoids which improve the productivity of fish and cure diseases such as Red spot ulcer and Gills necrotic areas.',
          benefits: [
            'Resolves multiple small red or grey spots on fish skin',
            'Resolves necrotic area on gills',
            'Increases feeding',
            'Reduces scale loss',
            'Improves overall health'
          ]
        }
      },
      {
        name: 'V-VACC',
        image: disease_vacc,
        description: 'Highly effective against Vibrio spp',
        detailed: {
          title: 'V-VACC',
          subtitle: 'Highly effective against Vibrio spp',
          content: 'V-Vacc is a nano encapsulated extract, which is highly effective against Vibrio spp. V-Vacc has had success in reducing the shrimp mortalities associated with vibriosis. It increases the ability for the clearance of fungal spores from the haemolymph.',
          benefits: [
            'Aids in effective anti-vibrio action',
            'Optimizes growth performance and improves gut morphology',
            'Improves digestion of nutrients',
            'Improves water quality',
            'Helps in stress tolerance',
            'Boosts immunity of shrimp',
            'Improves survival rates'
          ],
          usage: '10 ml per every 1 litre'
        }
      },
      {
        name: 'VIRBAN',
        image: disease_virban,
        description: 'Antimicrobial encapsulated phytoextracts',
        detailed: {
          title: 'VIRBAN',
          subtitle: 'Contains antimicrobial encapsulated phytoextracts',
          content: 'Virban is a specially formulated nano technology that contains antimicrobial encapsulated phytoextracts designed to improve the growth and survival rates of shrimp. Virban protects the shrimp from a myriad of bacterial and fungal viruses by restricting the multiplication and spread of virus.',
          benefits: [
            'Protects against bacterial and fungal infections',
            'Restricts virus multiplication',
            'Improves growth rates',
            'Enhances survival rates',
            'Broad-spectrum protection'
          ],
          usage: 'Add 5-10 ml per Kg feed depending on disease intensity. Duration: 24 to 36 feeds without any break.'
        }
      }
    ],
    'GROWTH PROMOTOR': [
      {
        name: 'MOLTMASTER',
        image: growth_moltmaster,
        description: 'Specialized formula for moulting enhancement',
        detailed: {
          title: 'MOLTMASTER',
          subtitle: 'Specialized formula for moulting enhancement',
          content: 'Molmaster is specifically formulated to support and enhance the moulting process in shrimp, ensuring healthy growth and development.',
          benefits: [
            'Supports proper moulting cycles',
            'Reduces moulting-related stress',
            'Enhances shell quality',
            'Improves growth rates',
            'Reduces mortality during moulting'
          ]
        }
      },
      {
        name: 'SEAFACTOR',
        image: growth_seafactor,
        description: 'Immunomodulating liquid for shrimp health',
        detailed: {
          title: 'SEAFACTOR',
          subtitle: 'Immunomodulating liquid',
          content: 'Seafactor is a specific formula containing antioxidants which improve immunity and survival rate. Seafactor reduces the infection rate in shrimp and thereby lowers the mortality rate.',
          benefits: [
            'Immunomodulator',
            'Boosts immunity of the shrimp',
            'Makes shrimp disease tolerant',
            'High density stress buster',
            'Improves survival rates'
          ],
          usage: '1.5 ml per 1 kg of feed in first and last feed of the day'
        }
      },
      {
        name: 'TRUMIN',
        image: growth_trumin,
        description: 'Nano encapsulated mineral supplement',
        detailed: {
          title: 'TRUMIN',
          subtitle: 'Nano encapsulated mineral supplement',
          content: 'The nano encapsulated Trumin is high efficacy in delivery and controlled release of essential minerals. Trumin in nano particle form is easily soluble and dispersible and thus enhances the availability of formulation to the shrimp. Trumin reduces the need for inorganic minerals during the culture.',
          benefits: [
            'Immunomodulator',
            'Boosts immunity of the shrimp',
            'Makes shrimp disease tolerant',
            'High density stress buster',
            'Improves survival rates'
          ]
        }
      },
      {
        name: 'VARDAAN',
        image: growth_vardaaan,
        description: 'Comprehensive growth promoter',
        detailed: {
          title: 'VARDAAN',
          subtitle: 'Comprehensive growth promoter',
          content: 'Vardaan is a comprehensive growth promoter designed to enhance overall health, growth, and productivity of aquatic species.',
          benefits: [
            'Enhances growth rates',
            'Improves feed conversion ratio',
            'Boosts immunity',
            'Reduces stress',
            'Improves survival rates'
          ]
        }
      }
    ]
  };

  const categoryDetails = {
    'NANO MINERALS': {
      title: 'Nano Minerals',
      icon: <FaLeaf className="text-emerald-500" />,
      color: 'from-emerald-500 to-green-600',
      textColor: 'text-emerald-800',
      bgColor: 'bg-emerald-50',
      content: {
        heading: 'Nano Minerals',
        quickFacts: 'Incorporating minerals into feeds and pond in aquaculture can increase both production and profits considerably.',
        description: 'Balanced nutrition is essential for the normal functioning, increased immunity, disease resistance, maintenance and growth of every living being. The minerals present in nutrition help in absorption, reduce ingestion, improve digestion, and transport of nutrients as well as removal of waste.',
        benefits: [
          'Improve resistance to disease',
          'Reduce stress levels',
          'Curb the loss of nutrients',
          'Suppress disease and enhance yield'
        ]
      }
    },
    'PROBIOTICS': {
      title: 'Probiotics',
      icon: <FaShieldAlt className="text-blue-500" />,
      color: 'from-blue-500 to-cyan-600',
      textColor: 'text-blue-800',
      bgColor: 'bg-blue-50',
      content: {
        heading: 'Probiotics',
        quickFacts: 'Probiotics play a significant role in modifying gut microbiota metabolism to produce short-chain fatty acids.',
        description: 'This leads to increased appetite, better growth and improved FCRs – which in turn reduces waste from uneaten feed and improves water quality.',
        benefits: [
          'Act as antimicrobial agents',
          'Enhance natural immunity',
          'Improve disease resistance',
          'Boost survival chances',
          'Reduce pathogens'
        ]
      }
    },
    'DISEASE MANAGEMENT': {
      title: 'Disease Management',
      icon: <FaVirus className="text-red-500" />,
      color: 'from-red-500 to-orange-600',
      textColor: 'text-red-800',
      bgColor: 'bg-red-50',
      content: {
        heading: 'Disease Management',
        quickFacts: 'Diseases pose a major threat to aquaculture with estimated losses of up to 15% of production cost.',
        description: 'The most prevalent diseases in aquaculture ponds are parasitic, fungal, and bacterial in origin, causing symptoms like loss of appetite, poor growth, and abnormal behavior.',
        benefits: [
          'Protects from diseases and viruses',
          'Improves growth and survival rates',
          'Reduces infection rates',
          'Enhances overall health'
        ]
      }
    },
    'GROWTH PROMOTOR': {
      title: 'Growth Promoters',
      icon: <FaChartLine className="text-green-500" />,
      color: 'from-green-500 to-emerald-600',
      textColor: 'text-green-800',
      bgColor: 'bg-green-50',
      content: {
        heading: 'Growth Promoters',
        quickFacts: 'Fish and shrimp are highly susceptible to changes in microflora which affects their digestive system.',
        description: 'Growth promoters are used to improve immunity and survival rates, maximizing production yield and profitability.',
        benefits: [
          'Enhance immune response',
          'Improve production and profits',
          'Boost survival and growth',
          'Improve water quality',
          'Improve FCR and growth rates'
        ]
      }
    }
  };

  // Get all products from active category
  const currentProducts = productData[activeCategory] || [];

  // Filter products based on search
  useEffect(() => {
    if (searchQuery.trim() === '') {
      setFilteredProducts(currentProducts);
    } else {
      const filtered = currentProducts.filter(product =>
        product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        product.description.toLowerCase().includes(searchQuery.toLowerCase())
      );
      setFilteredProducts(filtered);
    }
  }, [searchQuery, currentProducts]);

  // Handle product click
  const handleProductClick = (product) => {
    setActiveProduct(product);
    setIsMobileMenuOpen(false);
  };

  // Handle back to category
  const handleBackToCategory = () => {
    setActiveProduct(null);
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-emerald-50">
      <Navbar />
      
      {/* Mobile Menu Toggle */}
      <div className="lg:hidden bg-gradient-to-r from-emerald-600 to-green-600 p-4">
        <div className="flex justify-between items-center">
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="text-white p-2 rounded-lg bg-white/10"
          >
            {isMobileMenuOpen ? <FaTimes className="w-6 h-6" /> : <FaBars className="w-6 h-6" />}
          </button>
          <h1 className="text-white font-bold text-xl">Aquaculture Products</h1>
        </div>
      </div>

      <div className="container mx-auto px-4 py-6">
        <div className="flex flex-col lg:flex-row gap-6">
          {/* Left Sidebar - Categories & Products */}
          <div className={`
            lg:w-1/4 lg:block
            ${isMobileMenuOpen ? 'block' : 'hidden'}
            transition-all duration-300
          `}>
            <div className="bg-white rounded-2xl shadow-xl overflow-hidden mb-6">
              {/* Category Tabs */}
              <div className="grid grid-cols-2 lg:grid-cols-1">
                {Object.keys(categoryDetails).map((category) => (
                  <button
                    key={category}
                    onClick={() => {
                      setActiveCategory(category);
                      setActiveProduct(null);
                      setIsMobileMenuOpen(false);
                    }}
                    className={`
                      flex items-center p-4 transition-all duration-300
                      ${activeCategory === category 
                        ? 'bg-gradient-to-r from-emerald-50 to-green-50 border-l-4 border-emerald-500' 
                        : 'hover:bg-gray-50'
                      }
                      border-b border-gray-100
                    `}
                  >
                    <div className={`mr-3 ${activeCategory === category ? 'text-emerald-500' : 'text-gray-400'}`}>
                      {categoryDetails[category].icon}
                    </div>
                    <span className={`font-medium ${activeCategory === category ? 'text-emerald-700' : 'text-gray-700'}`}>
                      {category}
                    </span>
                  </button>
                ))}
              </div>
            </div>

            {/* Products List */}
            <div className="bg-white rounded-2xl shadow-xl p-6">
              <div className="mb-6">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-lg font-bold text-gray-800">Products</h3>
                  <span className="text-sm bg-emerald-100 text-emerald-700 px-3 py-1 rounded-full">
                    {currentProducts.length} items
                  </span>
                </div>
                
                {/* Search Bar */}
                <div className="relative mb-4">
                  <FaSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                  <input
                    type="text"
                    placeholder="Search products..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="w-full pl-10 pr-4 py-3 rounded-lg border border-gray-200 focus:border-emerald-500 focus:ring-2 focus:ring-emerald-200 focus:outline-none"
                  />
                  {searchQuery && (
                    <button
                      onClick={() => setSearchQuery('')}
                      className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600"
                    >
                      <FaTimes />
                    </button>
                  )}
                </div>

                {/* Products Grid */}
                <div className="space-y-3 max-h-[500px] overflow-y-auto pr-2">
                  {filteredProducts.map((product, index) => (
                    <button
                      key={index}
                      onClick={() => handleProductClick(product)}
                      className={`
                        w-full p-4 rounded-xl transition-all duration-300
                        ${activeProduct?.name === product.name 
                          ? 'bg-gradient-to-r from-emerald-500 to-green-600 text-white transform scale-102 shadow-lg' 
                          : 'bg-gray-50 hover:bg-emerald-50 hover:shadow-md'
                        }
                        flex items-center space-x-4
                      `}
                    >
                      <div className={`flex-shrink-0 w-12 h-12 rounded-lg overflow-hidden ${activeProduct?.name === product.name ? 'bg-white/20' : 'bg-white shadow'}`}>
                        <img 
                          src={product.image} 
                          alt={product.name}
                          className="w-full h-full object-contain p-1"
                        />
                      </div>
                      <div className="flex-grow text-left">
                        <h4 className={`font-semibold ${activeProduct?.name === product.name ? 'text-white' : 'text-gray-800'}`}>
                          {product.name}
                        </h4>
                        <p className={`text-sm mt-1 ${activeProduct?.name === product.name ? 'text-emerald-100' : 'text-gray-600'} line-clamp-1`}>
                          {product.description}
                        </p>
                      </div>
                      {activeProduct?.name === product.name && (
                        <div className="flex-shrink-0">
                          <FaCheck className="text-white" />
                        </div>
                      )}
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Main Content Area */}
          <div className="lg:w-3/4">
            {/* Back Button for Mobile */}
            {activeProduct && (
              <button
                onClick={handleBackToCategory}
                className="lg:hidden mb-4 flex items-center text-emerald-600 hover:text-emerald-700"
              >
                <FaArrowLeft className="mr-2" />
                Back to {activeCategory}
              </button>
            )}

            {/* Product Details View */}
            {activeProduct ? (
              <div className="bg-white rounded-2xl shadow-xl overflow-hidden animate-fade-in">
                {/* Product Header */}
                <div className="bg-gradient-to-r from-emerald-500 to-green-600 p-8">
                  <div className="flex flex-col md:flex-row items-center md:items-start space-y-6 md:space-y-0 md:space-x-8">
                    <div className="flex-shrink-0">
                      <div className="w-32 h-32 md:w-48 md:h-48 rounded-2xl bg-white shadow-2xl p-4">
                        <img 
                          src={activeProduct.image} 
                          alt={activeProduct.name}
                          className="w-full h-full object-contain"
                        />
                      </div>
                    </div>
                    <div className="flex-grow text-center md:text-left">
                      <div className="inline-block px-4 py-2 bg-white/20 backdrop-blur-sm rounded-full mb-4">
                        <span className="text-white text-sm font-medium">{activeCategory}</span>
                      </div>
                      <h1 className="text-3xl md:text-4xl font-bold text-white mb-2">
                        {activeProduct.detailed.title}
                      </h1>
                      <p className="text-emerald-100 text-lg mb-4">
                        {activeProduct.detailed.subtitle}
                      </p>
                      <div className="flex flex-wrap gap-2">
                        <span className="px-3 py-1 bg-white/20 rounded-full text-white text-sm">
                          Aquaculture Solution
                        </span>
                        <span className="px-3 py-1 bg-white/20 rounded-full text-white text-sm">
                          {activeCategory}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Product Content */}
                <div className="p-6 md:p-8">
                  {/* Description */}
                  <div className="mb-8">
                    <h2 className="text-2xl font-bold text-gray-800 mb-4 flex items-center">
                      <div className="w-2 h-8 bg-emerald-500 rounded-full mr-3"></div>
                      Product Overview
                    </h2>
                    <div className="bg-gradient-to-r from-emerald-50 to-green-50 p-6 rounded-xl border border-emerald-100">
                      <p className="text-gray-700 leading-relaxed">
                        {activeProduct.detailed.content}
                      </p>
                    </div>
                  </div>

                  {/* Benefits */}
                  <div className="mb-8">
                    <h2 className="text-2xl font-bold text-gray-800 mb-6 flex items-center">
                      <div className="w-2 h-8 bg-emerald-500 rounded-full mr-3"></div>
                      Key Benefits
                    </h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      {activeProduct.detailed.benefits.map((benefit, index) => (
                        <div 
                          key={index}
                          className="flex items-start space-x-3 p-4 bg-white rounded-xl border border-gray-100 hover:border-emerald-200 hover:shadow-sm transition-all duration-300"
                        >
                          <div className="flex-shrink-0 w-6 h-6 bg-emerald-100 rounded-full flex items-center justify-center mt-1">
                            <FaCheck className="w-3 h-3 text-emerald-600" />
                          </div>
                          <span className="text-gray-700">{benefit}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Usage/Dosage */}
                  {(activeProduct.detailed.usage || activeProduct.detailed.dosage) && (
                    <div className="mb-8">
                      <h2 className="text-2xl font-bold text-gray-800 mb-6 flex items-center">
                        <div className="w-2 h-8 bg-emerald-500 rounded-full mr-3"></div>
                        Usage & Dosage
                      </h2>
                      <div className="bg-gradient-to-r from-blue-50 to-cyan-50 p-6 rounded-xl border border-blue-100">
                        {activeProduct.detailed.dosage && typeof activeProduct.detailed.dosage === 'object' ? (
                          <div className="space-y-4">
                            <div>
                              <h4 className="font-semibold text-blue-700 mb-2">Basal Dose:</h4>
                              <p className="text-gray-700">{activeProduct.detailed.dosage.basal}</p>
                            </div>
                            <div>
                              <h4 className="font-semibold text-blue-700 mb-2">Top Dose:</h4>
                              <p className="text-gray-700">{activeProduct.detailed.dosage.top}</p>
                            </div>
                          </div>
                        ) : (
                          <p className="text-gray-700">
                            <span className="font-semibold text-blue-700">Recommended: </span>
                            {activeProduct.detailed.usage || activeProduct.detailed.dosage}
                          </p>
                        )}
                      </div>
                    </div>
                  )}

                  {/* Category Info */}
                  <div className="bg-gradient-to-r from-gray-50 to-gray-100 rounded-xl p-6 border border-gray-200">
                    <div className="flex items-center space-x-4 mb-4">
                      <div className={`p-3 rounded-lg ${categoryDetails[activeCategory].bgColor}`}>
                        {categoryDetails[activeCategory].icon}
                      </div>
                      <div>
                        <h3 className="font-bold text-gray-800">{activeCategory}</h3>
                        <p className="text-sm text-gray-600">Category Overview</p>
                      </div>
                    </div>
                    <p className="text-gray-700">{categoryDetails[activeCategory].content.quickFacts}</p>
                  </div>
                </div>
              </div>
            ) : (
              /* Category Overview View */
              <div className={`rounded-2xl shadow-xl overflow-hidden ${categoryDetails[activeCategory].bgColor}`}>
                {/* Category Header */}
                <div className={`bg-gradient-to-r ${categoryDetails[activeCategory].color} p-8`}>
                  <div className="flex items-center space-x-6">
                    <div className="p-4 bg-white/20 rounded-2xl backdrop-blur-sm">
                      {categoryDetails[activeCategory].icon}
                    </div>
                    <div>
                      <h1 className="text-3xl md:text-4xl font-bold text-white">
                        {categoryDetails[activeCategory].title}
                      </h1>
                      <p className="text-white/90 mt-2">Advanced Aquaculture Solutions</p>
                    </div>
                  </div>
                </div>

                {/* Category Content */}
                <div className="p-6 md:p-8">
                  {/* Quick Facts */}
                  <div className="mb-8">
                    <div className="flex items-center space-x-3 mb-6">
                      <div className={`w-10 h-1 ${categoryDetails[activeCategory].textColor.replace('text', 'bg')} rounded-full`}></div>
                      <h2 className="text-xl font-bold text-gray-800">Quick Facts</h2>
                    </div>
                    <div className={`p-6 rounded-xl bg-white shadow-sm border-l-4 ${categoryDetails[activeCategory].textColor.replace('text', 'border-l')}`}>
                      <p className={`${categoryDetails[activeCategory].textColor} font-medium text-lg`}>
                        {categoryDetails[activeCategory].content.quickFacts}
                      </p>
                    </div>
                  </div>

                  {/* Description */}
                  <div className="mb-8">
                    <h2 className="text-xl font-bold text-gray-800 mb-6">Detailed Overview</h2>
                    <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
                      <p className="text-gray-700 leading-relaxed text-lg">
                        {categoryDetails[activeCategory].content.description}
                      </p>
                    </div>
                  </div>

                  {/* Benefits */}
                  <div className="mb-8">
                    <h2 className="text-xl font-bold text-gray-800 mb-6">Category Benefits</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      {categoryDetails[activeCategory].content.benefits.map((benefit, index) => (
                        <div 
                          key={index}
                          className="bg-white p-5 rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow duration-300"
                        >
                          <div className="flex items-start space-x-4">
                            <div className={`flex-shrink-0 w-8 h-8 rounded-full ${categoryDetails[activeCategory].bgColor} flex items-center justify-center`}>
                              <FaStar className={`w-4 h-4 ${categoryDetails[activeCategory].textColor}`} />
                            </div>
                            <span className="text-gray-700 font-medium">{benefit}</span>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Products Preview */}
                  <div>
                    <h2 className="text-xl font-bold text-gray-800 mb-6">Available Products</h2>
                    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
                      {currentProducts.slice(0, 8).map((product, index) => (
                        <button
                          key={index}
                          onClick={() => handleProductClick(product)}
                          className="group bg-white rounded-xl p-4 shadow-sm border border-gray-100 hover:shadow-lg hover:border-emerald-200 transition-all duration-300 transform hover:-translate-y-1"
                        >
                          <div className="w-full h-32 rounded-lg overflow-hidden mb-3 bg-gray-50 flex items-center justify-center p-2">
                            <img 
                              src={product.image} 
                              alt={product.name}
                              className="w-full h-full object-contain group-hover:scale-110 transition-transform duration-300"
                            />
                          </div>
                          <h4 className="font-semibold text-gray-800 text-center line-clamp-1">
                            {product.name}
                          </h4>
                        </button>
                      ))}
                    </div>
                    {currentProducts.length > 8 && (
                      <p className="text-center text-gray-600 mt-4">
                        +{currentProducts.length - 8} more products available
                      </p>
                    )}
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>

      <Footer />

      {/* Custom CSS */}
      <style jsx>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        .animate-fade-in {
          animation: fadeIn 0.5s ease-out forwards;
        }
        
        .transform.scale-102 {
          transform: scale(1.02);
        }
        
        .line-clamp-1 {
          display: -webkit-box;
          -webkit-line-clamp: 1;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }
      `}</style>
    </div>
  );
};

export default AquacultureProducts;