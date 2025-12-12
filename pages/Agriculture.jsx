import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  FaLeaf, 
  FaSeedling, 
  FaFlask, 
  FaMicroscope, 
  FaShieldAlt, 
  FaTint,
  FaIndustry,
  FaHeart,
  FaCheck,
  FaArrowRight,
  FaArrowLeft,
  FaDownload,
  FaShoppingCart,
  FaTimes,
  FaInfoCircle,
  FaChartLine,
  FaDna,
  FaBacteria,
  FaBug,
  FaVirus,
  FaTree,
  FaWind,
  FaSun,
  FaMountain,
  FaRecycle,
  FaStar,
  FaCrop,
  FaClipboardList,
  FaMapMarkerAlt,
  FaPhone,
  FaEnvelope,
  FaWhatsapp,
  FaCalendar,
  FaUsers,
  FaGlobe,
  FaCertificate,
  FaSearch,
  FaFilter
} from 'react-icons/fa';
import Navbar from '../layouts/Navbar.jsx';
import Footer from '../layouts/Footer.jsx';

// Import all images
import Agriculture1 from '../assets/agriculture1.png';
import Agriculture2 from '../assets/agriculture2.png';
import Agriculture3 from '../assets/agriculture3.png';
import Agriculture4 from '../assets/agriculture4.png';
import Agriculture5 from '../assets/agriculture5.png';

// Nutrient images
import CarbonImage from '../assets/Carbon_plant-2-1.png';
import NitrogenImage from '../assets/Nitrogen_image.png';
import PhosphorusImage from '../assets/Phosphorus_image.png';
import PotassiumImage from '../assets/Potassium_image.png';
import CalciumImage from '../assets/calcium_image.jpg';
import SulfurImage from '../assets/Sulfur_image.png';
import MagnesiumImage from '../assets/Magnesium_image.png';
import ZincImage from '../assets/Zinc_image.png';
import BoronImage from '../assets/Boron_image.png';
import ManganeseImage from '../assets/Managanese_image.png';
import CobaltImage from '../assets/Cobalt_image.png';
import IronImage from '../assets/Iron_image.png';
import NickelImage from '../assets/NIckel_image.png';
import SiliconImage from '../assets/Silicon_image.png';
import CopperImage from '../assets/Copper_image.png';
import MolybdenumImage from '../assets/Molybdenum_image.png';
import ChlorineImage from '../assets/Chiorine_image.png';

// Product images
import InvictusVImage from '../assets/Invitoce.png';
import InvictusHImage from '../assets/Invitoce (1).png';
import NeoLifeImage from '../assets/Neolife_image.png';
import PentaziaImage from '../assets/Pentagia-1536x945.png';
import IINMChakraImage from '../assets/IINM-Chakra_image.png';
import IINMChakra2Image from '../assets/IINM-chekra-1536x945.jpeg';
import NematoffImage from '../assets/Nematoff.png';
import ElixirImage from '../assets/Elixir_image.png';
import DFNDRImage from '../assets/Dfnder_image.png';
import NativeNeemImage from '../assets/Native-neem_image.png';
import DFUSImage from '../assets/Pentagia-1536x945 (1).png';
import Pentazia2Image from '../assets/Pentagia-1536x945 (2).png';
import BSL4Image from '../assets/Bsl4.png';
import NutritonImage from '../assets/Nutriton_image.png';
import VirnixImage from '../assets/virnix.png';
import AadharGoldImage from '../assets/aadhar-gold-technologi_image.png';
import AadharGold2Image from '../assets/aadhar-gold-technologi_image (1).png';
import AadharGold3Image from '../assets/aadhar-gold-technologi_image (2).png';

// New product images
import AadharGoldBagImage from '../assets/Aadhar-gold_Bag.png';
import DoubleActionImage from '../assets/Double-Action-Programe_image.png';
import TripleActionImage from '../assets/Triple-Action-Programe_image.png';
import PromoteImage from '../assets/Promote_image.png';
import SumcaImage from '../assets/Sumca_image.png';
import BOCImage from '../assets/BOC_image.png';
import PFactorImage from '../assets/P-factor.png';
import GvamImage from '../assets/G-Vam_Backet_image.png';
import CanmagImage from '../assets/Canmag.png';
import Cas610Image from '../assets/Cas610.png';
import BelomSeriesImage from '../assets/Belom_series_2.png';
import BelomFsImage from '../assets/Belom-fs_image.png';
import PoshakSeriesImage from '../assets/poshak_image-1536x588.png';
import KFactorImage from '../assets/K-factor.png';
import BioPotashImage from '../assets/Bio-potash.png';
import BelomS3Image from '../assets/Belom-S3.png';
import HighKImage from '../assets/High-K.png';
import KingKImage from '../assets/King-K.png';
import Magni5Image from '../assets/Magni5.png';
import FerronImage from '../assets/Ferron.png';
import AgrisealImage from '../assets/Agriseal.png';
import CamboImage from '../assets/Cambo.png';

const AgriculturePage = () => {
  const [activeSection, setActiveSection] = useState('nutrition');
  const [expandedProducts, setExpandedProducts] = useState({});
  const [isScrolled, setIsScrolled] = useState(false);
  const [selectedNutrient, setSelectedNutrient] = useState(null);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [showProductModal, setShowProductModal] = useState(false);
  const [showNutrientModal, setShowNutrientModal] = useState(false);
  const [showContactModal, setShowContactModal] = useState(false);
  const [selectedDistributor, setSelectedDistributor] = useState(null);
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');

  // Complete Nutrient data with ALL detailed information
  const nutrientData = [
    {
      id: 'carbon',
      symbol: 'C',
      name: 'Carbon',
      type: 'Primary Nutrient',
      color: 'from-green-500 to-emerald-600',
      icon: <FaTree className="text-3xl" />,
      quickFacts: 'Carbon is essential for plant life, performing several critical functions.',
      description: 'In photosynthesis, plants absorb carbon dioxide (CO₂) to synthesize glucose and oxygen, which are crucial for growth and energy production. Carbon is a fundamental component of carbohydrates, which support the development and structural integrity of plant tissues. Plants store energy as starch, a carbon-based carbohydrate, which is vital for their survival under low-light conditions. Carbon is a major component of cellulose and lignin, which provide mechanical support to plant tissues. During cellular respiration, carbon plays a role in converting stored energy into usable forms. Overall, carbon is vital for plant health, growth, and its role in the global carbon cycle.',
      functions: [
        'Soil Structure',
        'Aeration',
        'Water retention',
        'Pollutant filter',
        'Productivity',
        'Biodiversity',
        'Microbes'
      ],
      recommendedProducts: [
        { name: "Aadhar Gold", productKey: "Aadhar Gold" },
        { name: "Double Action Programme", productKey: "Double Action Programme" },
        { name: "Triple Action Programme", productKey: "Triple Action Programme" },
        { name: "Minerals", productKey: "Minerals" },
        { name: "BOC", productKey: "BOC (Liquid Fermented Organic Manure)" },
        { name: "Sumca", productKey: "Sumca" }
      ],
      image: CarbonImage
    },
    {
      id: 'nitrogen',
      symbol: 'N',
      name: 'Nitrogen',
      type: 'Primary Nutrient',
      color: 'from-blue-500 to-cyan-600',
      icon: <FaWind className="text-3xl" />,
      quickFacts: 'Nitrogen is a vital element for plant growth and is a component of many essential plant molecules, including proteins, nucleic acids, chlorophyll, and hormones. It is one of the primary nutrients that plants need to grow, and it is often the most limiting nutrient in the soil.',
      description: 'Nitrogen plays a vital role in several plant growth processes such as synthesis of Nucleic acids, Amino acids, enzymes and chlorophyll molecules to optimize plant yield. Amino acids synthesised will be utilized in the production of enzymes and various plant parts. In general, plants can uptake nitrogen in the form of Nitrate (NO3–) and Ammonia (NH4+).',
      functions: [
        'Plays a key role in the synthesis of genetic material',
        'Essential component of enzymes and amino acids',
        'Induces root growth and crop yield',
        'Major component of ATP',
        'Major component of chlorophyll',
        'Microbes'
      ],
      recommendedProducts: [
        { name: "Aadhaar Gold", productKey: "Aadhar Gold" },
        { name: "IINM Chakra", productKey: "IINM Chakra" },
        { name: "N-Factor", productKey: "N-Factor" },
        { name: "Triple Action Programme", productKey: "Triple Action Programme" },
        { name: "Double Action Programme", productKey: "Double Action Programme" },
        { name: "Minerals", productKey: "Minerals" },
        { name: "Belom series (S1,S2,S3)", productKey: "Belom series (S1,S2,S3)" },
        { name: "Belom Fs", productKey: "Belom Fs" },
        { name: "Poshak series (L1,L2,L3,L4)", productKey: "Poshak series (L1,L2,L3,L4)" }
      ],
      image: NitrogenImage
    },
    {
      id: 'phosphorus',
      symbol: 'P',
      name: 'Phosphorus',
      type: 'Primary Nutrient',
      color: 'from-purple-500 to-pink-600',
      icon: <FaDna className="text-3xl" />,
      quickFacts: 'Phosphorus is present in every living cell, both plant and animal. As an essential nutrient for plant growth, its availability is critical during the early growth stages to ensure a quick and healthy start.',
      description: 'Phosphorus aids in root development, flower initiation, seed and fruit development and has been known to reduce disease incidence in some plants and to improve the quality of certain crops. The supply or conversion of available Phosphorus from the soil into the soil solution is reduced due to cold soil temperature, wet soils or soil pH levels. The deficiency of Phosphorus especially at the early stages will lead to slow or stunted growth, weak plant and discolouration of leaves and stems.',
      functions: [
        'P has an essential role in photosynthesis',
        'P is an essential component of DNA, the genetic material that allows plants to grow and reproduce',
        'P is a vital component of ATP, the main energy-transfer compound which allows cells to conserve and use the energy released in metabolism',
        'P improves flower formation and seed production and promotes more uniform and earlier crop maturity',
        'P is very important in cell division and development of new tissues',
        'P stimulates root development',
        'Microbes'
      ],
      recommendedProducts: [
        { name: "P-Factor", productKey: "P-Factor" },
        { name: "IINM Chakra", productKey: "IINM Chakra" },
        { name: "Aadhaar Gold", productKey: "Aadhar Gold" },
        { name: "G-Vam", productKey: "G-VAM" },
        { name: "Triple Action Programme", productKey: "Triple Action Programme" },
        { name: "Double Action Programme", productKey: "Double Action Programme" },
        { name: "Minerals", productKey: "Minerals" },
        { name: "Belom series (S1,S2,S3)", productKey: "Belom series (S1,S2,S3)" },
        { name: "Belom Fs", productKey: "Belom Fs" },
        { name: "Poshak series (L1,L2,L3,L4)", productKey: "Poshak series (L1,L2,L3,L4)" }
      ],
      image: PhosphorusImage
    },
    {
      id: 'potassium',
      symbol: 'K',
      name: 'Potassium',
      type: 'Primary Nutrient',
      color: 'from-yellow-500 to-orange-600',
      icon: <FaSun className="text-3xl" />,
      quickFacts: 'Potassium plays a critical role in plant growth and metabolism. It is responsible for the movement of water, nutrients and carbohydrates in the plant. It regulates the opening and closing of stomata thus regulating the uptake of CO2 to enhance photosynthesis.',
      description: 'In photosynthesis, Potassium plays the crucial role of maintaining the balance of electrical charges at the site of ATP production. It triggers the activation of important biochemical enzymes for the generation of Adenosine Triphosphate (ATP). ATP provides energy for other chemical and physiological processes such as the excretion of waste materials in plants. Potassium has been known to improve disease resistance in plants, improve the size of grains and seeds, and improve the quality of fruits and vegetables. It also facilitates protein and starch synthesis in plants.',
      functions: [
        'K increases resistance to diseases and low temperatures',
        'K is involved in the movement of nutrients through plants',
        'K is known as the "quality" nutrient',
        'K increases plant vigour',
        'K is essential in sugar and starch formation',
        'K promotes healthy root systems',
        'Microbes'
      ],
      recommendedProducts: [
        { name: "K-Factor", productKey: "K-Factor" },
        { name: "Bio Potash", productKey: "Bio Potash" },
        { name: "Aadhaar Gold", productKey: "Aadhar Gold" },
        { name: "IINM Chakra", productKey: "IINM Chakra" },
        { name: "G-Vam", productKey: "G-VAM" },
        { name: "Triple Action Programme", productKey: "Triple Action Programme" },
        { name: "Minerals", productKey: "Minerals" },
        { name: "Belom-S3", productKey: "Belom-S3" },
        { name: "High-K", productKey: "High-K" },
        { name: "King-K", productKey: "King-K" }
      ],
      image: PotassiumImage
    },
    {
      id: 'calcium',
      symbol: 'Ca',
      name: 'Calcium',
      type: 'Secondary Nutrient',
      color: 'from-gray-500 to-blue-400',
      icon: <FaMountain className="text-3xl" />,
      quickFacts: 'Secondary Nutrients such as calcium and magnesium are required in lesser quantities than the primary nutrients, however they are just as important for plant nutrition.',
      description: 'Calcium plays a major role in the formation of the cell wall membrane and its plasticity, affecting normal cell division by maintaining cell integrity and membrane permeability. It combines with anions including organic acids, sulphates, and phosphates. It acts as a detoxifying agent by neutralizing organic acids in plants. Calcium is essential for seed production, protein formulation and in improving the disease resistance in plants. Without adequate Calcium, which in the form of calcium pectate is needed to form rigid cell walls, newly emerging leaves may stick together at the margins, which causes tearing as the leaves expand and unfurl. This may also cause the stem structure to be weakened.',
      functions: [
        'Essential for seed production',
        'Protein formulation',
        'Improves disease resistance',
        'Forms rigid cell walls',
        'Strengthens stem structure',
        'Microbes'
      ],
      recommendedProducts: [
        { name: "Aadhar gold", productKey: "Aadhar Gold" },
        { name: "Triple action programme", productKey: "Triple Action Programme" },
        { name: "G-VAM", productKey: "G-VAM" },
        { name: "Minerals", productKey: "Minerals" },
        { name: "Canmag", productKey: "Canmag" },
        { name: "Cas610", productKey: "Cas610" },
        { name: "Belom Fs", productKey: "Belom Fs" },
        { name: "Belom series", productKey: "Belom series (S1,S2,S3)" },
        { name: "Poshak series", productKey: "Poshak series (L1,L2,L3,L4)" }
      ],
      image: CalciumImage
    },
    {
      id: 'sulfur',
      symbol: 'S',
      name: 'Sulfur',
      type: 'Secondary Nutrient',
      color: 'from-yellow-400 to-green-300',
      icon: <FaRecycle className="text-3xl" />,
      quickFacts: 'Sulfur is a vital component of amino acids (like cysteine and methionine), proteins, and vitamins',
      description: 'It contributes to chlorophyll formation, which is necessary for photosynthesis, helping plants convert sunlight into energy. Sulfur is involved in the formation of certain coenzymes and is essential for the activity of various enzymes that regulate plant metabolism. In certain plants, sulfur compounds contribute to the aroma and taste of foods, such as garlic and onions.',
      functions: [
        'Contributes to chlorophyll formation',
        'Essential for photosynthesis',
        'Involved in enzyme activity',
        'Regulates plant metabolism',
        'Contributes to aroma in certain plants',
        'Microbes'
      ],
      recommendedProducts: [
        { name: "Aadhar Gold", productKey: "Aadhar Gold" },
        { name: "Triple action program", productKey: "Triple Action Programme" },
        { name: "G-VAM", productKey: "G-VAM" },
        { name: "Minerals", productKey: "Minerals" },
        { name: "Cas610", productKey: "Cas610" },
        { name: "Belom Fs", productKey: "Belom Fs" },
        { name: "Phoshak series", productKey: "Poshak series (L1,L2,L3,L4)" },
        { name: "Belom series", productKey: "Belom series (S1,S2,S3)" }
      ],
      image: SulfurImage
    },
    {
      id: 'magnesium',
      symbol: 'Mg',
      name: 'Magnesium',
      type: 'Secondary Nutrient',
      color: 'from-emerald-400 to-teal-500',
      icon: <FaLeaf className="text-3xl" />,
      quickFacts: 'Magnesium is necessary for cell division and protein formation and in essential for plant respiration. It is a component of pectin, important for stability of cells and phytin. It assists the movement of sugars within a plant.',
      description: 'The predominant role of Magnesium is as a major constituent of the chlorophyll molecule, and it is therefore actively involved in photosynthesis. It is required to stabilize ribosome particles and also helps stabilize the structure of nucleic acids. Deficiency of Magnesium leads to shortage of chlorophyll resulting in dropping foliage and poor and stunted plant growth.',
      functions: [
        'Major constituent of chlorophyll',
        'Active in photosynthesis',
        'Stabilizes ribosome particles',
        'Helps in cell division',
        'Essential for protein formation',
        'Microbes'
      ],
      recommendedProducts: [
        { name: "Aadhar Gold", productKey: "Aadhar Gold" },
        { name: "Triple action program", productKey: "Triple Action Programme" },
        { name: "G-VAM", productKey: "G-VAM" },
        { name: "Minerals", productKey: "Minerals" },
        { name: "Magni5", productKey: "Magni5" },
        { name: "Canmag", productKey: "Canmag" },
        { name: "Belom Fs", productKey: "Belom Fs" },
        { name: "Belom series", productKey: "Belom series (S1,S2,S3)" },
        { name: "Phoshak series", productKey: "Poshak series (L1,L2,L3,L4)" }
      ],
      image: MagnesiumImage
    }
  ];

  // Complete Micronutrients data with ALL detailed information
  const micronutrients = [
    {
      id: 'zinc',
      symbol: 'Zn',
      name: 'Zinc',
      type: 'Micronutrient',
      color: 'from-gray-600 to-blue-300',
      icon: <FaFlask className="text-2xl" />,
      quickFacts: 'Zinc is integral to the biosynthesis of tryptophan, which is a precursor for indole acetic acid (IAA), a crucial auxin involved in regulating plant growth, root development, and cellular differentiation.',
      description: 'Zinc acts as a cofactor for numerous metalloenzymes, including various dehydrogenases. These enzymes are essential for key metabolic pathways such as respiration, carbohydrate metabolism, and the synthesis of nucleic acids and proteins. Zinc is vital for the synthesis of proteins and nucleic acids (RNA and DNA), influencing processes like cell division, elongation, and overall growth and development. Zinc is involved in chlorophyll formation and the photosynthetic electron transport chain, affecting the efficiency of photosynthesis and overall plant productivity.',
      functions: [
        'Chlorophyll formation',
        'Enzyme cofactor',
        'Protein synthesis',
        'Growth regulation',
        'Microbes'
      ],
      recommendedProducts: [
        { name: "Aadhar gold", productKey: "Aadhar Gold" },
        { name: "Triple action programme", productKey: "Triple Action Programme" },
        { name: "G-VAM", productKey: "G-VAM" },
        { name: "Mineral", productKey: "Minerals" },
        { name: "Belom series", productKey: "Belom series (S1,S2,S3)" },
        { name: "Belom Fs", productKey: "Belom Fs" },
        { name: "Poshak series", productKey: "Poshak series (L1,L2,L3,L4)" }
      ],
      image: ZincImage
    },
    {
      id: 'boron',
      symbol: 'B',
      name: 'Boron',
      type: 'Micronutrient',
      color: 'from-pink-400 to-rose-500',
      icon: <FaLeaf className="text-2xl" />,
      quickFacts: 'Boron is crucial for the formation and stabilization of cell walls. It cross-links pectic polysaccharides in cell walls, enhancing structural integrity and rigidity.',
      description: 'Boron is essential for cell division and elongation, particularly in growing tissues such as meristems, root tips, and young leaves. It helps regulate the synthesis of nucleic acids and proteins necessary for these processes. Boron plays a key role in pollen germination, pollen tube growth, and fertilization, influencing successful reproduction and seed set. Boron facilitates the transport of sugars and other nutrients across cell membranes, ensuring efficient nutrient distribution within the plant. Adequate boron levels support proper root development and branching, which enhances water and nutrient uptake.',
      functions: [
        'Cell wall formation',
        'Cell division',
        'Pollination',
        'Sugar transport',
        'Root development',
        'Microbes'
      ],
      recommendedProducts: [
        { name: "Aadhar gold", productKey: "Aadhar Gold" },
        { name: "Triple action programme", productKey: "Triple Action Programme" },
        { name: "G-VAM", productKey: "G-VAM" },
        { name: "Mineral", productKey: "Minerals" },
        { name: "Belom series", productKey: "Belom series (S1,S2,S3)" },
        { name: "Belom Fs", productKey: "Belom Fs" },
        { name: "Poshak series", productKey: "Poshak series (L1,L2,L3,L4)" }
      ],
      image: BoronImage
    },
    {
      id: 'manganese',
      symbol: 'Mn',
      name: 'Manganese',
      type: 'Micronutrient',
      color: 'from-purple-400 to-indigo-500',
      icon: <FaMicroscope className="text-2xl" />,
      quickFacts: 'Manganese is crucial for the photosynthetic process. It is a key component of the oxygen-evolving complex in photosystem II, facilitating the splitting of water molecules and the release of oxygen.',
      description: 'Manganese is involved in chlorophyll formation, impacting the plant\'s ability to perform photosynthesis and influencing overall plant color and health. Manganese plays a role in nitrogen metabolism by activating enzymes involved in the assimilation of nitrate and the synthesis of amino acids. Adequate manganese levels can enhance a plant\'s resistance to certain diseases and pests, improving overall plant health and yield. Manganese supports root growth and development by aiding in nutrient uptake and influencing root enzyme activities.',
      functions: [
        'Photosynthesis',
        'Chlorophyll formation',
        'Nitrogen metabolism',
        'Disease resistance',
        'Root growth',
        'Microbes'
      ],
      recommendedProducts: [
        { name: "Aadhar gold", productKey: "Aadhar Gold" },
        { name: "Triple action programme", productKey: "Triple Action Programme" },
        { name: "G-VAM", productKey: "G-VAM" },
        { name: "Mineral", productKey: "Minerals" },
        { name: "Belom series", productKey: "Belom series (S1,S2,S3)" },
        { name: "Belom Fs", productKey: "Belom Fs" },
        { name: "Poshak series", productKey: "Poshak series (L1,L2,L3,L4)" }
      ],
      image: ManganeseImage
    },
    {
      id: 'cobalt',
      symbol: 'Co',
      name: 'Cobalt',
      type: 'Micronutrient',
      color: 'from-blue-600 to-cyan-400',
      icon: <FaBacteria className="text-2xl" />,
      quickFacts: 'Cobalt is crucial for the activity of nitrogen-fixing bacteria in the root nodules of legumes. It is a component of vitamin B12, which is necessary for these bacteria to convert atmospheric nitrogen into a form usable by plants.',
      description: 'Cobalt acts as a cofactor for various enzymes involved in essential biochemical processes, including those related to carbohydrate metabolism and lipid synthesis. Cobalt can enhance plant resistance to certain diseases and stress conditions by supporting various physiological functions and strengthening plant defenses. Cobalt affects the uptake and utilization of other essential nutrients, such as phosphorus, by influencing root function and nutrient transport mechanisms.',
      functions: [
        'Nitrogen fixation',
        'Enzyme cofactor',
        'Disease resistance',
        'Nutrient uptake',
        'Microbes'
      ],
      recommendedProducts: [
        { name: "Aadhar gold", productKey: "Aadhar Gold" },
        { name: "Triple action programme", productKey: "Triple Action Programme" },
        { name: "G-VAM", productKey: "G-VAM" },
        { name: "Mineral", productKey: "Minerals" },
        { name: "Belom series", productKey: "Belom series (S1,S2,S3)" },
        { name: "Belom Fs", productKey: "Belom Fs" },
        { name: "Poshak series", productKey: "Poshak series (L1,L2,L3,L4)" }
      ],
      image: CobaltImage
    },
    {
      id: 'iron',
      symbol: 'Fe',
      name: 'Iron',
      type: 'Micronutrient',
      color: 'from-red-500 to-orange-400',
      icon: <FaHeart className="text-2xl" />,
      quickFacts: 'Iron is crucial for the synthesis of chlorophyll, the pigment responsible for photosynthesis. Adequate iron levels are necessary for proper chlorophyll production, which directly affects the plant\'s ability to capture light energy and perform photosynthesis.',
      description: 'In legumes, iron supports the activity of nitrogen-fixing bacteria in root nodules, which convert atmospheric nitrogen into a form usable by plants. This process is vital for plant nutrition and growth. Iron is integral to cellular respiration, where it is involved in the Krebs cycle and the electron transport chain, facilitating efficient energy production. Adequate iron is necessary for overall plant growth and development. Iron deficiency can lead to symptoms such as chlorosis (yellowing of leaves), stunted growth, and reduced yields.',
      functions: [
        'Chlorophyll synthesis',
        'Nitrogen fixation',
        'Cellular respiration',
        'Growth support',
        'Microbes'
      ],
      recommendedProducts: [
        { name: "Aadhar gold", productKey: "Aadhar Gold" },
        { name: "Triple action programme", productKey: "Triple Action Programme" },
        { name: "G-VAM", productKey: "G-VAM" },
        { name: "Mineral", productKey: "Minerals" },
        { name: "Ferron", productKey: "Ferron" },
        { name: "Belom series", productKey: "Belom series (S1,S2,S3)" },
        { name: "Belom Fs", productKey: "Belom Fs" },
        { name: "Poshak series", productKey: "Poshak series (L1,L2,L3,L4)" }
      ],
      image: IronImage
    },
    {
      id: 'nickel',
      symbol: 'Ni',
      name: 'Nickel',
      type: 'Micronutrient',
      color: 'from-gray-700 to-slate-500',
      icon: <FaShieldAlt className="text-2xl" />,
      quickFacts: 'Nickel is a vital component of the enzyme urease, which is crucial for the hydrolysis of urea into ammonia and carbon dioxide. This process helps in nitrogen metabolism and ensures the efficient use of nitrogen in plants.',
      description: 'By aiding in urease activity, nickel indirectly supports nitrogen assimilation and utilization, which are essential for protein synthesis and overall plant growth. Nickel plays a role in the synthesis of chlorophyll, influencing the plant\'s ability to perform photosynthesis effectively. Adequate nickel levels contribute to overall plant growth and development. Nickel deficiency can lead to poor growth, reduced yield, and impaired plant health. Nickel has been shown to enhance plant resistance to certain diseases and pests, improving overall plant resilience and productivity. Nickel is involved in the activation of various enzymes beyond urease, including those involved in the metabolism of lipids and other critical biochemical processes.',
      functions: [
        'Urease component',
        'Nitrogen metabolism',
        'Chlorophyll synthesis',
        'Disease resistance',
        'Growth support',
        'Microbes'
      ],
      recommendedProducts: [
        { name: "Aadhar gold", productKey: "Aadhar Gold" },
        { name: "Triple action programme", productKey: "Triple Action Programme" },
        { name: "G-VAM", productKey: "G-VAM" },
        { name: "Mineral", productKey: "Minerals" },
        { name: "Belom series", productKey: "Belom series (S1,S2,S3)" },
        { name: "Belom Fs", productKey: "Belom Fs" },
        { name: "Poshak series", productKey: "Poshak series (L1,L2,L3,L4)" }
      ],
      image: NickelImage
    },
    {
      id: 'silicon',
      symbol: 'Si',
      name: 'Silicon',
      type: 'Micronutrient',
      color: 'from-gray-400 to-slate-300',
      icon: <FaCrop className="text-2xl" />,
      quickFacts: 'Silicon enhances plant resistance to various pathogens, including fungi, bacteria, and insects. It does so by strengthening cell walls, improving physical barriers, and influencing plant defence mechanisms.',
      description: 'Silicon helps plants cope with abiotic stresses such as drought, salinity, and heavy metal toxicity. It improves water use efficiency and reduces the impact of stress factors on plant growth. Silicon positively affects photosynthetic efficiency by enhancing chlorophyll content and optimizing leaf structure, which can lead to improved overall plant productivity. Silicon supports various physiological processes, including root development and shoot growth, leading to improved plant vigor and yield. Silicon can reduce excessive water loss through transpiration by improving leaf structure and reducing stomatal conductance.',
      functions: [
        'Disease resistance',
        'Stress tolerance',
        'Photosynthesis',
        'Water efficiency',
        'Growth support',
        'Microbes'
      ],
      recommendedProducts: [
        { name: "Aadhar gold", productKey: "Aadhar Gold" },
        { name: "Triple action programme", productKey: "Triple Action Programme" },
        { name: "G-VAM", productKey: "G-VAM" },
        { name: "Mineral", productKey: "Minerals" },
        { name: "Agriseal", productKey: "Agriseal" },
        { name: "Belom series", productKey: "Belom series (S1,S2,S3)" },
        { name: "Belom Fs", productKey: "Belom Fs" },
        { name: "Poshak series", productKey: "Poshak series (L1,L2,L3,L4)" }
      ],
      image: SiliconImage
    },
    {
      id: 'copper',
      symbol: 'Cu',
      name: 'Copper',
      type: 'Micronutrient',
      color: 'from-amber-600 to-yellow-500',
      icon: <FaTint className="text-2xl" />,
      quickFacts: 'Copper acts as a cofactor for numerous enzymes, including those involved in photosynthesis (e.g., plastocyanin), respiration, and lignin synthesis. These enzymes are crucial for energy production, growth, and structural integrity.',
      description: 'Copper is important for the biosynthesis of lignin, a structural polymer in cell walls that provides rigidity and strength. This enhances plant structural support and resistance to mechanical damage. Copper is involved in the synthesis and stabilization of proteins, influencing overall plant growth and development. Adequate copper levels can improve plant resistance to certain diseases and pests by supporting various defense mechanisms and enzymatic functions. Copper influences several growth processes, including seedling development, root and shoot growth, and flowering. Copper plays a role in the uptake and utilization of other essential nutrients, such as iron, by affecting nutrient transport and metabolism.',
      functions: [
        'Enzyme cofactor',
        'Lignin synthesis',
        'Protein synthesis',
        'Disease resistance',
        'Growth regulation',
        'Nutrient uptake'
      ],
      recommendedProducts: [
        { name: "Aadhar gold", productKey: "Aadhar Gold" },
        { name: "Triple action programme", productKey: "Triple Action Programme" },
        { name: "G-VAM", productKey: "G-VAM" },
        { name: "Mineral", productKey: "Minerals" },
        { name: "Cambo", productKey: "Cambo" },
        { name: "Belom series", productKey: "Belom series (S1,S2,S3)" },
        { name: "Belom Fs", productKey: "Belom Fs" },
        { name: "Poshak series", productKey: "Poshak series (L1,L2,L3,L4)" }
      ],
      image: CopperImage
    },
    {
      id: 'molybdenum',
      symbol: 'Mo',
      name: 'Molybdenum',
      type: 'Micronutrient',
      color: 'from-green-600 to-lime-400',
      icon: <FaRecycle className="text-2xl" />,
      quickFacts: 'Vital for the activity of enzymes that convert atmospheric nitrogen into a usable form and for nitrate reduction. Supports efficient nitrogen assimilation and protein synthesis.',
      description: 'Acts as a cofactor for enzymes involved in sulfur metabolism and other biochemical processes. Essential for optimal growth and yield; deficiency leads to poor growth and reduced seed production. Influences chlorophyll synthesis, affecting photosynthesis and productivity. Enhances tolerance to environmental stresses.',
      functions: [
        'Nitrogen fixation',
        'Enzyme cofactor',
        'Chlorophyll synthesis',
        'Stress tolerance',
        'Growth support',
        'Microbes'
      ],
      recommendedProducts: [
        { name: "Aadhar gold", productKey: "Aadhar Gold" },
        { name: "Triple action programme", productKey: "Triple Action Programme" },
        { name: "G-VAM", productKey: "G-VAM" },
        { name: "Mineral", productKey: "Minerals" },
        { name: "Belom series", productKey: "Belom series (S1,S2,S3)" },
        { name: "Belom Fs", productKey: "Belom Fs" },
        { name: "Poshak series", productKey: "Poshak series (L1,L2,L3,L4)" }
      ],
      image: MolybdenumImage
    },
    {
      id: 'chlorine',
      symbol: 'Cl',
      name: 'Chlorine',
      type: 'Micronutrient',
      color: 'from-green-400 to-teal-300',
      icon: <FaTint className="text-2xl" />,
      quickFacts: 'Chlorine helps maintain proper osmotic balance in plant cells, which is crucial for regulating water uptake and maintaining cell turgor.',
      description: 'Chlorine is involved in the formation of chlorophyll and the oxygen-evolving complex of photosystem II, which is essential for efficient photosynthesis. Adequate chlorine levels can enhance plant resistance to certain diseases by contributing to overall plant vigor and stress tolerance. Chlorine helps maintain the balance of other ions in plant cells, which is important for nutrient uptake and metabolic processes. Chlorine plays a role in regulating stomatal opening and closing, influencing gas exchange and transpiration.',
      functions: [
        'Osmotic balance',
        'Photosynthesis',
        'Disease resistance',
        'Ion balance',
        'Stomatal regulation',
        'Microbes'
      ],
      recommendedProducts: [
        { name: "Aadhar gold", productKey: "Aadhar Gold" },
        { name: "Triple action programme", productKey: "Triple Action Programme" },
        { name: "G-VAM", productKey: "G-VAM" },
        { name: "Mineral", productKey: "Minerals" },
        { name: "Belom series", productKey: "Belom series (S1,S2,S3)" },
        { name: "Belom Fs", productKey: "Belom Fs" },
        { name: "Poshak series", productKey: "Poshak series (L1,L2,L3,L4)" }
      ],
      image: ChlorineImage
    }
  ];

  // Protection data
  const protectionData = [
    {
      id: 'soil-borne',
      title: "Soil Borne Diseases",
      description: "Soil-borne diseases arise from an unseen world, where fungal pathogens lurk beneath the surface. These silent destroyers breach the plant's defenses, infiltrating roots and disrupting the vascular system. As they siphon off vital nutrients, the plant's growth is stunted, and in time, it may perish. In this battle beneath the soil, plant-beneficial microbes emerge as natural allies. These microbes employ various strategies like antagonism, microbicidal activity and competitive inhibition to defend plants. Harnessing these natural warriors offers a sustainable solution to soil-borne diseases, reducing the dependence on chemical pesticides and promoting healthier crops.",
      products: [
        { name: "Invictus V", productKey: "Invictus V", image: InvictusVImage },
        { name: "Invictus H", productKey: "Invictus H", image: InvictusHImage },
        { name: "Nematoff", productKey: "Nematoff", image: NematoffImage },
        { name: "G-VAM", productKey: "G-VAM", image: GvamImage },
        { name: "Poshak series", productKey: "Poshak series (L1,L2,L3,L4)", image: PoshakSeriesImage },
        { name: "Belom series", productKey: "Belom series (S1,S2,S3)", image: BelomSeriesImage }
      ],
      image: Agriculture1,
      imagePosition: 'right'
    },
    {
      id: 'sucking-pests',
      title: "Sucking Pests",
      description: "Sucking pests are a formidable threat to plant health, feeding on the sap that flows through a plant's veins. These tiny marauders—such as aphids, whiteflies, thrips, mites, mealybugs, and leafhoppers—cause widespread damage and reducing productivity. Traditional chemical pesticides, while effective but come with significant drawbacks. As a result, biological pesticides have risen as a more sustainable alternative, which target sucking pests precisely, reducing the negative impacts of chemical treatments. Additionally, biological pesticides manage populations over the long term, making them a critical component of integrated pest management (IPM) strategies.",
      products: [
        { name: "Prithvi", productKey: "Prithvi", image: NativeNeemImage },
        { name: "Elixir", productKey: "Elixir", image: ElixirImage },
        { name: "DFNDR", productKey: "DFNDR", image: DFNDRImage },
        { name: "Native Neem", productKey: "Native Neem", image: NativeNeemImage },
        { name: "Virnix", productKey: "Virnix", image: VirnixImage },
        { name: "Agriseal", productKey: "Agriseal", image: AgrisealImage }
      ],
      image: Agriculture2,
      imagePosition: 'left'
    },
    {
      id: 'biolarvicides',
      title: "Biolarvicides",
      description: "Biolarvicides, nature's quiet guardians, stand against the relentless larvae of Helicoverpa, Spodoptera, and Lepidoptera, whose insatiable appetites ravage crops, stripping plants of their vitality. These tiny destroyers feast on leaves, stems, and fruits, leaving a trail of diminished yields and weakened harvests. In response, biolarvicides offer a targeted, harmonious solution. Harnessing the power of beneficial microorganisms, they either infect the larvae or release toxins that bring their destruction to an end. Unlike synthetic chemicals, this approach preserves the delicate balance of ecosystems, allowing farmers to protect their crops while embracing sustainability. Biolarvicides guide agriculture towards a future where nature and cultivation thrive together.",
      products: [
        { name: "DFUS", productKey: "DFUS", image: DFUSImage },
        { name: "Native Neem", productKey: "Native Neem", image: NativeNeemImage },
        { name: "Pentazia", productKey: "Pentazia", image: PentaziaImage },
        { name: "BSL4", productKey: "BSL4", image: BSL4Image }
      ],
      image: Agriculture3,
      imagePosition: 'right'
    },
    {
      id: 'foliar-diseases',
      title: "Foliar Plant Diseases",
      description: "Foliar plant diseases, borne on the wind or in the soil, creep across the landscape, leaving behind spots, wilting leaves, and early death in their wake. Fungi like Fusarium, Cercospora, Alternaria, Pseudomonas and Xanthomonas along with stealthy bacteria and viruses, slowly sap the life from plants, dimming their once-strong capacity for growth and harvest. Though synthetic treatments have long been a weapon against these foes, they often come at a steep cost, harming the environment and delicate ecosystems. Now, a more harmonious approach takes root. Beneficial microbes and marker molecules bolster the plant's own defenses, weaving resilience into its very being. Biofactor's innovative products guide this transformation, nurturing healthier crops and fostering a sustainable balance between growth and nature's rhythms.",
      products: [
        { name: "Pentazia", productKey: "Pentazia", image: PentaziaImage },
        { name: "BSL4", productKey: "BSL4", image: BSL4Image },
        { name: "Nutriton", productKey: "Nutriton", image: NutritonImage },
        { name: "Virnix", productKey: "Virnix", image: VirnixImage },
        { name: "Neolife", productKey: "Neolife", image: NeoLifeImage },
        { name: "IINM Chakra", productKey: "IINM Chakra", image: IINMChakraImage }
      ],
      image: Agriculture4,
      imagePosition: 'left'
    }
  ];

  // Product categories for filtering
  const productCategories = [
    { id: 'all', name: 'All Products', color: 'from-green-500 to-emerald-600', icon: <FaGlobe /> },
    { id: 'disease', name: 'Disease Management', color: 'from-red-500 to-pink-600', icon: <FaVirus /> },
    { id: 'pest', name: 'Pest Control', color: 'from-orange-500 to-yellow-600', icon: <FaBug /> },
    { id: 'nutrition', name: 'Nutrition & Growth', color: 'from-green-500 to-emerald-600', icon: <FaLeaf /> },
    { id: 'multi', name: 'Multi-Purpose', color: 'from-purple-500 to-indigo-600', icon: <FaClipboardList /> }
  ];

  // All products data organized by category
  const allProducts = {
    'disease': [
      { name: "Invictus V", productKey: "Invictus V", category: "Biofungicide" },
      { name: "Invictus H", productKey: "Invictus H", category: "Biofungicide" },
      { name: "Pentazia", productKey: "Pentazia", category: "Biofertilizer" },
      { name: "BSL4", productKey: "BSL4", category: "Fertilizer" },
      { name: "Nematoff", productKey: "Nematoff", category: "Biofertilizer" },
      { name: "Virnix", productKey: "Virnix", category: "Micronutrient Mixture" }
    ],
    'pest': [
      { name: "Prithvi", productKey: "Prithvi", category: "Biopesticide" },
      { name: "Elixir", productKey: "Elixir", category: "Biofertilizer" },
      { name: "DFNDR", productKey: "DFNDR", category: "Biofertilizer" },
      { name: "DFUS", productKey: "DFUS", category: "Biofertilizer" },
      { name: "Native Neem", productKey: "Native Neem", category: "Biopesticide" }
    ],
    'nutrition': [
      { name: "Neolife", productKey: "Neolife", category: "Biofertilizer" },
      { name: "Nutriton", productKey: "Nutriton", category: "Micronutrient Mixture" },
      { name: "IINM Chakra", productKey: "IINM Chakra", category: "Biofertilizer" },
      { name: "Aadhar Gold", productKey: "Aadhar Gold", category: "Biofertilizer" },
      { name: "Promote", productKey: "Promote", category: "Organic Bio-fertilizer" },
      { name: "P-Factor", productKey: "P-Factor", category: "Biofertilizer" },
      { name: "N-Factor", productKey: "N-Factor", category: "Biofertilizer" },
      { name: "K-Factor", productKey: "K-Factor", category: "Biofertilizer" },
      { name: "Bio Potash", productKey: "Bio Potash", category: "Biofertilizer" },
      { name: "Canmag", productKey: "Canmag", category: "Micronutrient Fertilizer" },
      { name: "Magni5", productKey: "Magni5", category: "Magnesium Fertilizer" },
      { name: "Ferron", productKey: "Ferron", category: "Iron Supplement" },
      { name: "Agriseal", productKey: "Agriseal", category: "Silicon Fertilizer" },
      { name: "Cambo", productKey: "Cambo", category: "Copper Supplement" },
      { name: "Sumca", productKey: "Sumca", category: "Organic Manure" },
      { name: "Minerals", productKey: "Minerals", category: "Mineral Supplement" },
      { name: "BOC", productKey: "BOC (Liquid Fermented Organic Manure)", category: "Organic Fertilizer" },
      { name: "G-VAM", productKey: "G-VAM", category: "Biofertilizer" }
    ],
    'multi': [
      { name: "Native Neem", productKey: "Native Neem", category: "Biopesticide" },
      { name: "Nematoff", productKey: "Nematoff", category: "Biofertilizer" },
      { name: "IINM Chakra", productKey: "IINM Chakra", category: "Biofertilizer" },
      { name: "Double Action Programme", productKey: "Double Action Programme", category: "Biofertilizer" },
      { name: "Triple Action Programme", productKey: "Triple Action Programme", category: "Biofertilizer" },
      { name: "Poshak series", productKey: "Poshak series (L1,L2,L3,L4)", category: "Organic Fertilizer" },
      { name: "Belom series", productKey: "Belom series (S1,S2,S3)", category: "Organic Fertilizer" },
      { name: "Belom Fs", productKey: "Belom Fs", category: "Organic Fertilizer" },
      { name: "Belom-S3", productKey: "Belom-S3", category: "Organic Fertilizer" },
      { name: "High-K", productKey: "High-K", category: "Potassium Fertilizer" },
      { name: "King-K", productKey: "King-K", category: "Potassium Supplement" },
      { name: "Cas610", productKey: "Cas610", category: "Fertilizer" }
    ]
  };

  // Get all products for display
  const getAllProducts = () => {
    if (selectedCategory === 'all') {
      return Object.values(allProducts).flat();
    }
    return allProducts[selectedCategory] || [];
  };

  // Filter products based on search query
  const filteredProducts = getAllProducts().filter(product =>
    product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    product.category.toLowerCase().includes(searchQuery.toLowerCase())
  );

  // Distributors data
  const distributors = [
    {
      id: 1,
      name: "Farm Solutions Pvt. Ltd.",
      location: "Hyderabad, Telangana",
      contact: "Ravi Kumar",
      phone: "+91 98765 43210",
      email: "ravi@farmsolutions.com",
      products: ["Aadhar Gold", "Double Action Programme", "Triple Action Programme"]
    },
    {
      id: 2,
      name: "Green Agro Distributors",
      location: "Bangalore, Karnataka",
      contact: "Anil Sharma",
      phone: "+91 87654 32109",
      email: "anil@greenagro.com",
      products: ["Neolife", "IINM Chakra", "Promote", "BOC"]
    },
    {
      id: 3,
      name: "Agri Care Solutions",
      location: "Mumbai, Maharashtra",
      contact: "Priya Patel",
      phone: "+91 76543 21098",
      email: "priya@agricare.com",
      products: ["Invictus V", "Invictus H", "Pentazia", "BSL4"]
    },
    {
      id: 4,
      name: "Crop Shield Agencies",
      location: "Delhi, NCR",
      contact: "Sanjay Gupta",
      phone: "+91 65432 10987",
      email: "sanjay@cropshield.com",
      products: ["DFNDR", "DFUS", "Native Neem", "Elixir"]
    },
    {
      id: 5,
      name: "Bio Fert Distributors",
      location: "Chennai, Tamil Nadu",
      contact: "Karthik",
      phone: "+91 54321 09876",
      email: "karthik@biofert.com",
      products: ["G-VAM", "Belom series", "Poshak series", "Canmag"]
    },
    {
      id: 6,
      name: "Southern Agri Partners",
      location: "Kochi, Kerala",
      contact: "Mohan Das",
      phone: "+91 43210 98765",
      email: "mohan@southernagri.com",
      products: ["Cas610", "Ferron", "Agriseal", "Cambo"]
    }
  ];

  // Complete Product Details - ALL products with specific information
  const productDetails = {
    "Aadhar Gold": {
      name: "Aadhar Gold",
      category: "Biofertilizer",
      description: "Aadhar Gold is a cutting-edge biofertilizer developed with encapsulated beneficial bacteria, delivering essential nutrients (nitrogen, phosphorus, and potassium) in a convenient granular form. Utilizing Bioencapsulation and sustainable release technology, Aadhar Gold enhances nutrient efficacy.",
      keyBenefits: [
        "Facilitates the absorption of atmospheric nitrogen and converts soil-bound phosphorus and potassium into forms readily available to plants, promoting vigorous crop development",
        "Provides protection against water stress, enabling optimal plant growth in adverse environmental conditions",
        "Increases crop yield and quality by 25-30% while reducing fertilizer expenditures by 20-25%",
        "Contains exclusive microbial strains that are patented under the IDA Budapest Treaty",
        "Can be used in conjunction with chemical fertilizers without adverse effects"
      ],
      application: {
        fco: "Schedule - 3 (Bio Fertilizers)",
        type: "Biofertilizers consortium base granules",
        crops: "All Crops",
        dosage: "4 kg per acre",
        time: "For annual crops, once during the cropping season; Twice for mid season crops; And apply 2 to 3 times a year for perennial crops",
        quantity: "Apply at sowing or before sowing of seeds or planting of crops"
      },
      images: [AadharGoldBagImage, AadharGoldImage]
    },
    "Double Action Programme": {
      name: "Double Action Programme",
      category: "Biofertilizer",
      description: "The Double Action Program is a cutting-edge biofertilizer in granular form, specifically designed to enhance soil fertility and crop performance through the synergistic action of nitrogen-fixing and phosphate-solubilizing bacteria. Developed with advanced Bioencapsulation and Sustainable Release technologies.",
      keyBenefits: [
        "Nitrogen-fixing bacteria capture atmospheric nitrogen and convert it into plant-usable forms, reducing synthetic fertilizer needs",
        "Phosphate-solubilizing bacteria convert insoluble phosphorus into soluble forms for better plant uptake",
        "Helps plants manage water stress by improving soil structure and moisture retention",
        "Can boost yields by 25-30% with higher-quality produce and better market returns",
        "Reduces chemical fertilizer needs by 20-25%, lowering costs and environmental impact",
        "Contains proprietary microbial strains protected under the IDA Budapest Treaty",
        "Compatible with conventional chemical fertilizers"
      ],
      application: {
        fco: "Schedule - 3 (Bio Fertilizers)",
        type: "Carrier consortium base granules",
        crops: "All Crops",
        dosage: "50kg per acre",
        time: "For short duration crops, one application during crop rotation; twice for mid-season crops; 2-3 times for long-duration crops",
        quantity: "Apply granules directly to soil during final tillage or when sowing seeds"
      },
      images: [DoubleActionImage]
    },
    "Triple Action Programme": {
      name: "Triple Action Programme",
      category: "Biofertilizer",
      description: "Triple Action Programme is an innovative biofertilizer formulated as a granular blend of nitrogen-fixing, phosphate-solubilizing, and potash-solubilizing bacteria. Developed using cutting-edge Bioencapsulation and sustainable release technologies, this program provides a comprehensive nutrient solution for crops.",
      keyBenefits: [
        "Beneficial bacteria fix atmospheric nitrogen and convert soil-bound phosphorus and potassium into plant-available forms",
        "Provides protection against water stress, promoting healthy growth even in adverse conditions",
        "Improves nutrient efficiency, boosting crop yield and quality by 25-30%",
        "Reduces fertilizer costs by 20-25% through better nutrient utilization",
        "Features proprietary microbial strains patented under the IDA Budapest Treaty",
        "Fully compatible with chemical fertilizers for seamless integration"
      ],
      application: {
        fco: "Schedule - 3 (Bio Fertilizers)",
        type: "Carrier consortium base granules",
        crops: "All Crops",
        dosage: "50 kg per acre",
        time: "Once for short duration crops; twice for mid-season crops; 2-3 times for long-duration crops",
        quantity: "Apply granules directly to soil during final tillage or when sowing seeds"
      },
      images: [TripleActionImage]
    },
    "Promote": {
      name: "Promote",
      category: "Organic Bio-fertilizer",
      description: "Promote is an organic bio-fertilizer enriched with readily available phosphorus, designed to enhance nutrient efficiency in crops. It offers a sustainable alternative to inorganic fertilizers like DAP and SSP, improving phosphorus uptake for higher yields and better soil fertility.",
      keyBenefits: [
        "Enhances plant growth and overall health",
        "Increases soil moisture and reduces irrigation needs",
        "Supports beneficial soil microorganisms for better nutrient cycling",
        "Strengthens plant resilience, reducing chemical pesticide reliance",
        "Increases organic matter and nutrient-holding capacity",
        "Promotes deeper root systems for enhanced stability and nutrient uptake"
      ],
      application: {
        fco: "Schedule-4 (Organic fertilizers)",
        type: "Phosphate-rich organic manure",
        crops: "All Crops",
        dosage: "50 Kg per acre",
        time: "Apply in the last furrow/seed or in the footings made at the time of transplanting",
        quantity: "1 time for short duration crops; 2 times for mid term crop; 2-3 times per year for perennial crops"
      },
      images: [PromoteImage]
    },
    "Sumca": {
      name: "Sumca",
      category: "Organic Manure",
      description: "Sumca is a specialized organic manure produced through a controlled microbial composting process using biodegradable plant materials. It enriches the soil with essential nutrients, promoting sustainable agricultural practices.",
      keyBenefits: [
        "Provides essential nutrients for robust growth",
        "Improves water retention, reducing irrigation needs",
        "Encourages a healthy soil ecosystem",
        "Naturally supports plant health and resilience",
        "Helps maintain a balanced microbial population in the soil"
      ],
      application: {
        fco: "Schedule-4 (Organic fertilizers)",
        type: "Bio-enriched organic manure",
        crops: "All Crops",
        dosage: "50 Kg per acre",
        time: "Apply in the last furrow/seed or in the footings made at transplanting",
        quantity: "1 time for short duration crops; 2 times for mid term crop; 2-3 times per year for perennial crops"
      },
      images: [SumcaImage]
    },
    "BOC (Liquid Fermented Organic Manure)": {
      name: "BOC",
      category: "Organic Fertilizer",
      description: "Liquid Fermented Organic Manure is an organic amendment produced through fermentation to enhance nutrient content and effectiveness. This process simplifies organic materials, improving nutrient availability for plants. BOC is a specialized organic carbon mixture derived from microbial and plant residues, critical for enhancing soil structure and nutrient availability.",
      keyBenefits: [
        "Provides nitrogen, phosphorus, and potassium tailored to various growth stages",
        "Improves soil water-holding capacity and protects plants during adverse conditions",
        "Organic carbon serves as nutrient source for soil microorganisms",
        "Increases nutrient levels and microbial activity, promoting robust crop health",
        "Facilitates nutrient solubilization in neutral soil environments"
      ],
      application: {
        fco: "Schedule-4 (Organic fertilizers)",
        type: "Liquid organic fertilizer",
        crops: "All Crops",
        dosage: "5 L per acre",
        time: "At pod and cutting stages",
        quantity: "Apply 2.5-4.0 L/acre as drip irrigation once every 4 days"
      },
      images: [BOCImage]
    },
    "N-Factor": {
      name: "N-Factor",
      category: "Biofertilizer",
      description: "N-Factor is a sophisticated biofertilizer formulated as a liquid containing a high concentration of free-living and endophytic nitrogen-fixing bacteria, with a minimum of 1 x 10⁸ CFU per milliliter. These beneficial microbes play a crucial role in converting atmospheric nitrogen (N₂) into bioavailable forms, thereby promoting vigorous crop growth.",
      keyBenefits: [
        "Converts atmospheric nitrogen into absorbable forms, stabilizing 20-40 kg of nitrogen per hectare",
        "Reduces chemical nitrogen fertilizer requirement by 25-30%, saving costs",
        "Enhances release of plant growth hormones including auxins, gibberellic acid, and cytokinins",
        "Contains exclusive microbial strains patented under the IDA Budapest Treaty",
        "Improves plant strength and development"
      ],
      application: {
        fco: "Schedule - 3 (Bio Fertilizers)",
        type: "Azospirillum",
        crops: "All Crops",
        dosage: "1 L per acre",
        time: "Single application for short-duration crops; twice for mid-duration; 2-3 times for long-duration",
        quantity: "Apply through seed treatment initially, then foliar spray during growth stages"
      },
      images: [AadharGold2Image]
    },
    "P-Factor": {
      name: "P-Factor",
      category: "Biofertilizer",
      description: "P-Factor is an innovative liquid biofertilizer specifically designed to enhance the availability of phosphorus in soil through a high concentration of phosphorus-solubilizing bacteria. It contains a minimum of 1 x 10⁸ colony-forming units (CFU) per milliliter of both free-living and endophytic bacterial strains.",
      keyBenefits: [
        "Solubilizes soil-bound phosphorus, converting it into plant-absorbable forms",
        "Releases approximately 25-30 kg of phosphorus per hectare",
        "Reduces chemical phosphorus fertilizer requirement by 20-25%",
        "Promotes secretion of plant hormones and biochemicals in root zone",
        "Can increase crop yield by 15-20%",
        "Contains patented phosphate-solubilizing bacteria deposited under IDA Budapest Treaty"
      ],
      application: {
        fco: "Schedule - 3 (Bio Fertilizers)",
        type: "Phosphorus solubilizing bacteria",
        crops: "All Crops",
        dosage: "1 Ltr per acre",
        time: "Single application for short-duration crops; twice for mid-duration; 2-3 times for long-duration",
        quantity: "Apply through drip irrigation initially, then spray in subsequent stages"
      },
      images: [PFactorImage]
    },
    "G-VAM": {
      name: "G-VAM",
      category: "Biofertilizer",
      description: "G-VAM is an advanced biofertilizer that utilizes encapsulated Vesicular Arbuscular Mycorrhizal Fungi (AMF) to improve phosphorus absorption in plants. Available in both solid granules and liquid formulations, G-VAM is designed using Bio-encapsulation technology to increase the stability and effectiveness of AMF spores.",
      keyBenefits: [
        "Significantly boosts phosphorus uptake from soil, especially in phosphorus-deficient soils",
        "Promotes long-term improvements in nutrient absorption and plant health",
        "Provides natural defense against soil-borne pathogens",
        "Reduces disease risk and contributes to healthier, more resilient crops",
        "AMF spores produced using novel in vitro culturing methods for maximum effectiveness"
      ],
      application: {
        dosage: "10 kg/acre (granular) or 5 L/acre (liquid)",
        time: "Granular: Apply during final ploughing or sowing; Liquid: Apply at planting or shortly after",
        quantity: "Single application for short-duration crops; 1-2 times annually for long-duration crops",
        crops: "All Crops"
      },
      images: [GvamImage]
    },
    "K-Factor": {
      name: "K-Factor",
      category: "Biofertilizer",
      description: "K-Factor is a specialized biofertilizer designed to enhance potassium availability in soil through potassium-solubilizing bacteria, promoting better plant growth and stress tolerance.",
      keyBenefits: [
        "Converts insoluble potassium into plant-available forms",
        "Improves water use efficiency and drought tolerance",
        "Enhances fruit quality and size",
        "Increases plant resistance to diseases and pests",
        "Reduces chemical potassium fertilizer requirements"
      ],
      application: {
        crops: "All Crops",
        dosage: "1 L per acre",
        time: "Apply during vegetative and flowering stages",
        quantity: "Apply through irrigation or foliar spray"
      },
      images: [KFactorImage]
    },
    "Bio Potash": {
      name: "Bio Potash",
      category: "Biofertilizer",
      description: "Bio Potash is a microbial formulation containing potassium-solubilizing bacteria that convert unavailable potassium in soil into forms accessible to plants.",
      keyBenefits: [
        "Enhances potassium availability for plant uptake",
        "Improves crop yield and quality",
        "Reduces dependency on chemical potash fertilizers",
        "Promotes root development and plant vigor",
        "Enhances stress tolerance in plants"
      ],
      application: {
        crops: "All Crops",
        dosage: "500 ml per acre",
        time: "Apply during critical growth stages",
        quantity: "Apply through seed treatment or soil application"
      },
      images: [BioPotashImage]
    },
    "Canmag": {
      name: "Canmag",
      category: "Micronutrient Fertilizer",
      description: "Canmag is a specialized liquid micronutrient fertilizer that combines calcium (CaO), nitrate nitrogen (NO3), and magnesium (MgO) with stabilized amine nitrogen. This formulation allows for efficient root absorption without ammonia conversion.",
      keyBenefits: [
        "Provides balanced calcium and magnesium nutrition",
        "Enhances cell wall strength and plant structure",
        "Improves fruit quality and shelf life",
        "Prevents calcium and magnesium deficiencies",
        "Compatible with most fertilizers and pesticides"
      ],
      application: {
        crops: "All Crops",
        dosage: "2-3 L per acre",
        time: "Apply during critical growth stages",
        quantity: "Apply through foliar spray or drip irrigation"
      },
      images: [CanmagImage]
    },
    "Cas610": {
      name: "Cas610",
      category: "Fertilizer",
      description: "Calcium ThioSulphate is a chlorine-free, neutral to basic liquid fertilizer containing 6% calcium and 10% thiosulfate sulfur. It serves as an excellent source of both calcium and sulfur, making it ideal for addressing deficiencies and enhancing soil health.",
      keyBenefits: [
        "Provides readily available calcium and sulfur",
        "Improves soil structure and nutrient availability",
        "Enhances fruit quality and storage life",
        "Reduces soil salinity issues",
        "Compatible with most fertilizer programs"
      ],
      application: {
        crops: "All Crops",
        dosage: "5-10 L per acre",
        time: "Apply during critical growth stages",
        quantity: "Apply through drip irrigation or soil drench"
      },
      images: [Cas610Image]
    },
    "Belom series (S1,S2,S3)": {
      name: "Belom Series",
      category: "Organic Fertilizer",
      description: "The Belom series consists of liquid fermented organic manure designed to enhance nutrient content through fermentation. This organic solution improves soil health, increases nutrient availability, and reduces reliance on synthetic fertilizers.",
      keyBenefits: [
        "Converts complex organic matter into bioavailable nutrients",
        "Enhances soil aeration and water retention",
        "Provides essential NPK and micronutrients",
        "Reduces dependence on synthetic fertilizers",
        "Ensures sustained nutrient supply over time"
      ],
      application: {
        fco: "Schedule-4 (Organic fertilizers)",
        type: "Liquid Fermented organic Fertilizer",
        crops: "All Crops",
        dosage: "5 L per acre (drip) - 5 L acre (spray)",
        time: "S1: Vegetative; S2: Flowering; S3: Fruiting stage",
        quantity: "Once every 7-10 days"
      },
      images: [BelomSeriesImage]
    },
    "Belom Fs": {
      name: "Belom Fs",
      category: "Organic Fertilizer",
      description: "Belom FS is a fermented organic manure designed to enhance soil health, increase nutrient availability, and promote sustainable agriculture by reducing reliance on synthetic fertilizers.",
      keyBenefits: [
        "Breaks down organic matter into absorbable nutrients",
        "Enhances aeration and water retention",
        "Provides essential primary, secondary, and micronutrients",
        "Reduces environmental impact of synthetic fertilizers",
        "Supports root development and plant health"
      ],
      application: {
        fco: "Schedule-4 (Organic fertilizers)",
        type: "Liquid Fermented organic Fertilizer",
        crops: "All Crops",
        dosage: "1 L per acre",
        time: "Once every 10-15 days",
        quantity: "Can be used at all growth stages"
      },
      images: [BelomFsImage]
    },
    "Poshak series (L1,L2,L3,L4)": {
      name: "Poshak Series",
      category: "Organic Fertilizer",
      description: "The Poshak series is a liquid fermented organic manure designed to enhance nutrient content and effectiveness through fermentation, improving nutrient availability for plants and supporting sustainable agriculture.",
      keyBenefits: [
        "Transforms complex nutrients into readily absorbable forms",
        "Enhances soil aeration and water retention",
        "Supplies essential macronutrients along with micronutrients",
        "Reduces reliance on synthetic fertilizers",
        "Ensures steady nutrient supply for sustained growth"
      ],
      application: {
        type: "Liquid Fermented organic Fertilizer",
        dosage: "2.5-4 L/acre (drip) - 1.5-2 L/acre (spray)",
        time: "L1: Vegetative; L2: Flowering; L3: Fruiting; L4: Harvesting",
        quantity: "Once every 4-7 days",
        crops: "All Crops"
      },
      images: [PoshakSeriesImage]
    },
    "Invictus V": {
      name: "Invictus V",
      category: "Biofungicide",
      description: "Invictus – V is a highly effective biofungicide containing virulent and thermostable Trichoderma viride, specifically formulated to combat a wide range of soil-borne diseases in agricultural and horticultural crops.",
      keyBenefits: [
        "Provides magnesium, crucial for chlorophyll and photosynthesis",
        "Improves chlorophyll production for better light capture and plant growth",
        "Supports enzymes involved in photosynthesis, respiration, and nucleic acid synthesis",
        "Neutralizes acidic soils, increasing pH and improving nutrient availability"
      ],
      application: {
        fco: "Schedule-1 (Micronutrient)",
        type: "Magnesium (24%)",
        crops: "All crops",
        dosage: "Apply 10 kg of Invictus per acre",
        quantity: "Apply to the plants by spraying as soon as nutrient deficiency is noticed",
        time: "As soon as nutritional deficiency is observed, it should be used twice in 10-15 days"
      },
      images: [InvictusVImage, InvictusHImage]
    },
    "Invictus H": {
      name: "Invictus H",
      category: "Biofungicide",
      description: "Invictus – H is a biofungicide that contains Trichoderma harzianum, a beneficial fungal bioagent widely recognized for enhancing plant health and improving soil fertility.",
      keyBenefits: [
        "Effectively inhibits the growth of pathogens that cause diseases like root rot, wilt, and damping-off",
        "Encourages robust root development and enhances nutrient uptake",
        "Contributes to increased microbial diversity and fertility",
        "Reduces dependency on chemical fungicides"
      ],
      application: {
        fco: "Schedule-1 (Micronutrient)",
        type: "Magnesium (24%)",
        crops: "All crops",
        dosage: "Apply as per recommended guidelines",
        quantity: "Apply during critical growth stages",
        time: "Apply at early growth stages and repeat as needed"
      },
      images: [InvictusHImage]
    },
    "Neolife": {
      name: "Neolife",
      category: "Biofertilizer",
      description: "NeoLife is an advanced liquid biofertilizer developed with a consortium of bioencapsulated beneficial bacteria delivering key macronutrients—Nitrogen (N), Phosphorus (P), and Potassium (K).",
      keyBenefits: [
        "Efficiently converts atmospheric nitrogen into bioavailable form",
        "Facilitates breakdown of phosphorus and potassium",
        "Enhances nutrient uptake and plant growth",
        "Provides protective benefits against fungal pathogens"
      ],
      application: {
        fco: "Schedule-1 (Biofertilizer)",
        type: "Liquid Biofertilizer",
        crops: "All crops",
        dosage: "500 ml/acre (2.5 ml/liter of water)",
        quantity: "Apply during critical growth stages",
        time: "Apply during vegetative and flowering stages"
      },
      images: [NeoLifeImage, PentaziaImage]
    },
    "IINM Chakra": {
      name: "IINM Chakra",
      category: "Biofertilizer",
      description: "IINM-Chakra is a sophisticated liquid biofertilizer formulated with a consortium of encapsulated beneficial bacteria offering stable source of essential nutrients.",
      keyBenefits: [
        "Effectively assimilates atmospheric nitrogen and solubilizes phosphorus and potassium",
        "Promotes proliferation of beneficial soil microorganisms",
        "Contains distinct blend of plant-beneficial endophytic microbes",
        "Includes proprietary microbes patent-deposited under IDA Budapest Treaty"
      ],
      application: {
        fco: "Schedule-1 (Biofertilizer)",
        type: "Liquid Biofertilizer",
        crops: "All crops",
        dosage: "500 ml/acre (2.5 ml/liter of water)",
        quantity: "Apply during critical growth stages",
        time: "Apply during vegetative and flowering stages"
      },
      images: [IINMChakraImage, IINMChakra2Image]
    },
    "Nematoff": {
      name: "Nematoff",
      category: "Biofertilizer",
      description: "Nematoff is an advanced liquid biofertilizer formulated with bioencapsulated beneficial bacteria, designed to provide essential macronutrients and plant protection.",
      keyBenefits: [
        "Converts atmospheric nitrogen into bioavailable form",
        "Enhances dissolution of phosphorus, potassium, and other nutrients",
        "Promotes long-term soil health by enriching microbial diversity",
        "Induces systemic acquired resistance against nematodes"
      ],
      application: {
        fco: "Schedule-1 (Biofertilizer)",
        type: "Liquid Biofertilizer",
        crops: "All crops",
        dosage: "500 ml/acre (2.5 ml/liter of water)",
        quantity: "Apply during critical growth stages",
        time: "Apply during vegetative and flowering stages"
      },
      images: [NematoffImage, AadharGoldImage]
    },
    "Elixir": {
      name: "Elixir",
      category: "Biofertilizer",
      description: "Liquid consortia is a microbial blend of beneficial bacteria, fungi, and actinomycetes that enhances soil health and plant growth.",
      keyBenefits: [
        "Builds lasting soil health and organic content",
        "Supports vigorous vegetative growth for healthy plants",
        "Helps plants withstand drought and excessive water conditions",
        "Strengthens plant's defense mechanisms against diseases and pests"
      ],
      application: {
        fco: "Schedule-1 (Biofertilizer)",
        type: "Liquid Biofertilizer",
        crops: "Cotton and other crops",
        dosage: "500 ml/acre (2.5 ml/liter of water)",
        quantity: "Apply during critical growth stages",
        time: "Apply during vegetative and flowering stages"
      },
      images: [ElixirImage, AadharGold2Image]
    },
    "DFNDR": {
      name: "DFNDR",
      category: "Biofertilizer",
      description: "DFNDR is an advanced liquid biofertilizer featuring a consortium of bioencapsulated beneficial bacteria designed to provide essential macronutrients.",
      keyBenefits: [
        "Converts atmospheric nitrogen into bioavailable form",
        "Facilitates dissolution of phosphorus, potassium, and other key nutrients",
        "Promotes soil fertility by supporting microbial diversity",
        "Provides natural protective benefits against sucking pests"
      ],
      application: {
        fco: "Schedule-1 (Biofertilizer)",
        type: "Liquid Biofertilizer",
        crops: "All crops",
        dosage: "500 ml/acre (2.5 ml/liter of water)",
        quantity: "Apply during critical growth stages",
        time: "Apply during vegetative and flowering stages"
      },
      images: [DFNDRImage, PentaziaImage]
    },
    "Native Neem": {
      name: "Native Neem",
      category: "Biopesticide",
      description: "Native Neem is a biopesticide containing Azadirachtin as the active ingredient, derived from the seeds of the neem tree (Azadirachta indica).",
      keyBenefits: [
        "Extracted from neem seeds, promoting eco-friendly farming",
        "Effective against variety of pests including aphids, whiteflies, and spider mites",
        "Inhibits molting and reproduction in pests",
        "Low persistence in the environment, minimizing contamination risks",
        "Disrupts insect feeding behavior, reducing crop damage",
        "Fits well within IPM strategies"
      ],
      application: {
        fco: "Schedule-1 (Biopesticide)",
        type: "Azadirachtin based",
        crops: "All Crops",
        dosage: "Native Neem 300 PPM – 5 ml/liter; 10000 PPM – 1 ml/liter",
        quantity: "Spray at first sign of infestation, then every 15-20 days",
        time: "As soon as pests are observed, spray at 15-20 day intervals"
      },
      images: [NativeNeemImage, AadharGold3Image]
    },
    "DFUS": {
      name: "DFUS",
      category: "Biofertilizer",
      description: "DFUS is an innovative biofertilizer incorporating advanced bioencapsulation technology that combines beneficial bacteria for efficient nutrient delivery and plant protection.",
      keyBenefits: [
        "Provides nitrogen, phosphorus, and potassium for improved plant growth",
        "Bacteria convert atmospheric nitrogen and dissolve phosphorus and potassium",
        "Improves soil fertility and promotes nutrient availability",
        "Protects plants against wide range of larvae"
      ],
      application: {
        fco: "Schedule-1 (Micronutrient)",
        type: "Biofertilizer",
        crops: "All Crops",
        dosage: "Dilute: Mix 5 ml of DFUSE with 1 liter of water",
        quantity: "Foliar spray the diluted solution on affected plants",
        time: "Apply when larval infestation is observed"
      },
      images: [DFUSImage]
    },
    "Pentazia": {
      name: "Pentazia",
      category: "Biofertilizer",
      description: "Pentazia is an advanced liquid biofertilizer formulated with a consortium of bioencapsulated beneficial bacteria supplying essential macronutrients.",
      keyBenefits: [
        "Facilitates atmospheric nitrogen fixation and nutrient solubilization",
        "Enhances soil fertility and overall soil health",
        "Boosts induced systemic resistance in plants against stresses",
        "Makes nutrients readily available for plant absorption"
      ],
      application: {
        dosage: "Spray: 500 ml/acre (2.5 ml/liter); Drip: 1 L/acre",
        quantity: "Once during waterlogging and once during flowering/fruiting",
        time: "Apply at critical growth stages",
        packaging: "250, 500 ml & 1 liter",
        crops: "All Crops"
      },
      images: [Pentazia2Image]
    },
    "BSL4": {
      name: "BSL4",
      category: "Fertilizer",
      description: "BSL4 is a liquid fertilizer formulated with 2% Ortho Silicic Acid enhancing plant resilience against water and temperature stress and promoting reproductive rates.",
      keyBenefits: [
        "Enhances tolerance to nutrient and climatic stresses",
        "Reduces fungal infestations by blocking pathogen entry",
        "Assists plants in withstanding elevated levels of phosphorus, manganese, aluminum, and sodium",
        "Forms protective layer on leaves deterring sucking insects",
        "Improves tolerance to zinc deficiency"
      ],
      application: {
        fco: "Schedule-1 (Beneficial Fertilizers)",
        type: "Liquid Silicone",
        crops: "All Crops",
        dosage: "1 L/acre (5 ml/L of water)",
        quantity: "Spray as soon as virus or disease is observed",
        time: "Use twice in 7-10 days"
      },
      images: [BSL4Image]
    },
    "Nutriton": {
      name: "Nutriton",
      category: "Micronutrient Mixture",
      description: "Nutriton Micronutrient Mixture delivers essential nutrients in readily available forms to address deficiencies and enhance uptake of macronutrients.",
      keyBenefits: [
        "Enhances root development, fruit setting, grain filling, and seed viability",
        "Provides vital boost to mineral-deficient plants",
        "Balances nutrient levels across various gardens and crops",
        "Fosters strong growth leading to higher yields and improved quality",
        "Enhances resistance to pests and diseases",
        "Improves both quality and quantity of yield"
      ],
      application: {
        type: "Formula - 6",
        crops: "All Crops",
        dosage: "300 ml/acre (1.5 ml/liter of water)",
        quantity: "Spray at budding stage and flowering/fruiting stage",
        time: "Use twice in 10-15 days when deficiency observed"
      },
      images: [NutritonImage]
    },
    "Virnix": {
      name: "Virnix",
      category: "Micronutrient Mixture",
      description: "Micronutrient Mixture provides essential nutrients in readily available forms to correct deficiencies and enhance macro element uptake.",
      keyBenefits: [
        "Enhances root development, fruit setting, grain filling, and seed viability",
        "Provides healthy boost to mineral-deficient plants",
        "Improves nutrient levels in various gardens and crops",
        "Fosters strong growth leading to higher yields",
        "Enhances resistance to pests and diseases",
        "Improves both quality and quantity of yield"
      ],
      application: {
        dosage: "300 ml/acre (1.5 ml/liter of water)",
        quantity: "Spray at budding stage and flowering/fruiting stage",
        time: "Use twice in 10-15 days when deficiency observed",
        crops: "All Crops"
      },
      images: [VirnixImage]
    },
    "Prithvi": {
      name: "Prithvi",
      category: "Biopesticide",
      description: "Prithvi is a biological pesticide formulation effective against various sucking pests in agricultural crops.",
      keyBenefits: [
        "Natural and eco-friendly pest control solution",
        "Target specific against sucking pests",
        "Safe for beneficial insects and pollinators",
        "Reduces chemical pesticide dependency"
      ],
      application: {
        type: "Biological Pesticide",
        crops: "All Crops",
        dosage: "As per manufacturer's recommendation",
        quantity: "Apply during pest infestation",
        time: "Early morning or late evening application"
      },
      images: [NativeNeemImage]
    },
    "Minerals": {
      name: "Minerals",
      category: "Mineral Supplement",
      description: "Comprehensive mineral supplement providing essential micronutrients for optimal plant growth and development.",
      keyBenefits: [
        "Provides balanced mix of essential minerals",
        "Corrects multiple nutrient deficiencies",
        "Improves plant vigor and resilience",
        "Enhances fruit quality and yield",
        "Compatible with other fertilizers"
      ],
      application: {
        crops: "All Crops",
        dosage: "As per soil test recommendations",
        time: "Apply during critical growth stages",
        quantity: "Soil or foliar application as needed"
      },
      images: [NutritonImage]
    },
    "Magni5": {
      name: "Magni5",
      category: "Magnesium Fertilizer",
      description: "Specialized magnesium fertilizer to correct magnesium deficiencies and improve plant photosynthesis and growth.",
      keyBenefits: [
        "Corrects magnesium deficiencies quickly",
        "Improves chlorophyll production",
        "Enhances photosynthesis efficiency",
        "Improves fruit quality and shelf life"
      ],
      application: {
        crops: "All Crops",
        dosage: "2-3 L per acre",
        time: "Apply at vegetative and fruiting stages",
        quantity: "Foliar spray or soil application"
      },
      images: [Magni5Image]
    },
    "Ferron": {
      name: "Ferron",
      category: "Iron Supplement",
      description: "Iron chelate formulation to correct iron deficiencies and prevent chlorosis in plants.",
      keyBenefits: [
        "Quickly corrects iron deficiencies",
        "Prevents chlorosis in plants",
        "Improves chlorophyll synthesis",
        "Enhances plant vigor and growth"
      ],
      application: {
        crops: "All Crops",
        dosage: "1-2 L per acre",
        time: "Apply at first signs of deficiency",
        quantity: "Foliar spray for quick action"
      },
      images: [FerronImage]
    },
    "Agriseal": {
      name: "Agriseal",
      category: "Silicon Fertilizer",
      description: "Silicon-based fertilizer to enhance plant resistance to diseases, pests, and environmental stresses.",
      keyBenefits: [
        "Strengthens cell walls for better disease resistance",
        "Improves drought and heat tolerance",
        "Reduces pest damage",
        "Enhances nutrient uptake efficiency"
      ],
      application: {
        crops: "All Crops",
        dosage: "2-3 L per acre",
        time: "Apply during vegetative growth",
        quantity: "Foliar spray or soil application"
      },
      images: [AgrisealImage]
    },
    "Cambo": {
      name: "Cambo",
      category: "Copper Supplement",
      description: "Copper fertilizer to correct copper deficiencies and improve plant enzyme activity and disease resistance.",
      keyBenefits: [
        "Corrects copper deficiencies",
        "Improves enzyme activity in plants",
        "Enhances disease resistance",
        "Improves fruit quality"
      ],
      application: {
        crops: "All Crops",
        dosage: "1-2 L per acre",
        time: "Apply during critical growth stages",
        quantity: "Foliar spray application"
      },
      images: [CamboImage]
    },
    "Belom-S3": {
      name: "Belom-S3",
      category: "Organic Fertilizer",
      description: "Specialized formulation from Belom series for fruiting stage, providing balanced nutrients for fruit development.",
      keyBenefits: [
        "Specifically formulated for fruiting stage",
        "Promotes fruit development and quality",
        "Improves fruit size and sweetness",
        "Reduces fruit drop"
      ],
      application: {
        crops: "All Crops",
        dosage: "5 L per acre",
        time: "Apply during fruiting stage",
        quantity: "Once every 7-10 days"
      },
      images: [BelomS3Image]
    },
    "High-K": {
      name: "High-K",
      category: "Potassium Fertilizer",
      description: "High potassium fertilizer for improving fruit quality, size, and disease resistance.",
      keyBenefits: [
        "Improves fruit quality and size",
        "Enhances disease resistance",
        "Improves water use efficiency",
        "Reduces fruit cracking"
      ],
      application: {
        crops: "All Crops",
        dosage: "2-3 L per acre",
        time: "Apply during fruiting stage",
        quantity: "Foliar spray or drip irrigation"
      },
      images: [HighKImage]
    },
    "King-K": {
      name: "King-K",
      category: "Potassium Supplement",
      description: "Premium potassium formulation for maximum fruit quality and yield enhancement.",
      keyBenefits: [
        "Maximum potassium uptake efficiency",
        "Improves fruit color and taste",
        "Increases yield potential",
        "Enhances shelf life of produce"
      ],
      application: {
        crops: "All Crops",
        dosage: "1-2 L per acre",
        time: "Apply during critical fruiting stages",
        quantity: "Foliar spray application"
      },
      images: [KingKImage]
    }
  };
  
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 100);
      
      const sections = ['nutrition', 'protection', 'products'];
      const current = sections.find(section => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 150 && rect.bottom >= 150;
        }
        return false;
      });
      
      if (current) setActiveSection(current);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleProducts = (category) => {
    setExpandedProducts(prev => ({
      ...prev,
      [category]: !prev[category]
    }));
  };

  const openNutrientModal = (nutrient) => {
    setSelectedNutrient(nutrient);
    setShowNutrientModal(true);
    document.body.style.overflow = 'hidden';
  };

  const openProductModal = (productKey) => {
    const cleanedName = productKey.trim();
    
    let productDetailsKey = Object.keys(productDetails).find(key => 
      key.toLowerCase() === cleanedName.toLowerCase()
    );
    
    if (!productDetailsKey) {
      productDetailsKey = Object.keys(productDetails).find(key => 
        key.toLowerCase().includes(cleanedName.toLowerCase()) ||
        cleanedName.toLowerCase().includes(key.toLowerCase())
      );
    }
    
    if (productDetailsKey && productDetails[productDetailsKey]) {
      setSelectedProduct(productDetails[productDetailsKey]);
    } else {
      const firstProduct = Object.keys(productDetails)[0];
      setSelectedProduct(productDetails[firstProduct]);
    }
    setShowProductModal(true);
    document.body.style.overflow = 'hidden';
  };

  const openContactModal = (distributor) => {
    setSelectedDistributor(distributor);
    setShowContactModal(true);
    document.body.style.overflow = 'hidden';
  };

  const closeModal = () => {
    setShowNutrientModal(false);
    setShowProductModal(false);
    setShowContactModal(false);
    setSelectedNutrient(null);
    setSelectedProduct(null);
    setSelectedDistributor(null);
    document.body.style.overflow = 'unset';
  };

  const handleDownloadLeaflet = () => {
    alert(`Downloading leaflet for ${selectedProduct?.name}`);
  };

  const handleBuyProduct = () => {
    const productDistributors = distributors.filter(distributor => 
      distributor.products.some(product => 
        product.toLowerCase().includes(selectedProduct?.name.toLowerCase()) ||
        selectedProduct?.name.toLowerCase().includes(product.toLowerCase())
      )
    );
    
    if (productDistributors.length > 0) {
      openContactModal(productDistributors[0]);
    } else {
      setShowContactModal(true);
    }
  };

  const handleWhatsApp = (phone) => {
    const message = `Hi, I'm interested in learning more about Biofactor products.`;
    const whatsappUrl = `https://wa.me/${phone.replace(/\D/g, '')}?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  const handleEmail = (email) => {
    const subject = `Inquiry about Biofactor Products`;
    const body = `Hello,\n\nI would like to learn more about your products and pricing.\n\nBest regards,`;
    window.location.href = `mailto:${email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-green-50 to-white">
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative overflow-hidden py-12 md:py-20">
        <div className="absolute inset-0 z-0">
          <img 
            src={Agriculture5} 
            alt="Agriculture Background"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-br from-green-900/70 via-green-800/50 to-emerald-900/70"></div>
          <div className="absolute inset-0 bg-gradient-to-t from-green-950/30 via-transparent to-emerald-950/20"></div>
        </div>
        
        <div className="absolute inset-0 overflow-hidden pointer-events-none z-1">
          {[...Array(15)].map((_, i) => (
            <div
              key={i}
              className="absolute w-3 h-3 bg-green-400/30 rounded-full"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animation: `float ${4 + Math.random() * 3}s ease-in-out ${Math.random() * 5}s infinite`
              }}
            />
          ))}
        </div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center max-w-4xl mx-auto">
            <div className="mb-10">
              <div className="inline-grid grid-cols-7 gap-2 mb-6 p-4 bg-white/10 backdrop-blur-sm rounded-2xl">
                {['C', 'N', 'P', 'K', 'Ca', 'Mg', 'S', 'Fe', 'Zn', 'Mn', 'Cu', 'B', 'Mo', 'Cl'].map((element, index) => (
                  <motion.div
                    key={element}
                    initial={{ scale: 0, rotate: -180 }}
                    animate={{ scale: 1, rotate: 0 }}
                    transition={{ delay: index * 0.1, duration: 0.5, type: "spring" }}
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    className="w-12 h-12 flex flex-col items-center justify-center bg-white/90 backdrop-blur-sm rounded-lg cursor-pointer shadow-lg hover:shadow-xl hover:bg-white"
                  >
                    <div className="text-lg font-bold text-green-800">{element}</div>
                    <div className="text-[8px] text-green-600 mt-0.5">Element</div>
                  </motion.div>
                ))}
              </div>
            </div>
            
            <motion.h1 
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 drop-shadow-2xl"
            >
              Crop Nutrition & Protection
            </motion.h1>
            
            <motion.p 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.7 }}
              className="text-xl md:text-2xl text-green-100 mb-8 drop-shadow-lg"
            >
              Optimizing Plant Health Through Sustainable Solutions
            </motion.p>
            
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.6 }}
              className="flex flex-wrap justify-center gap-3 mt-8"
            >
              {['Primary Nutrients', 'Secondary Nutrients', 'Micronutrients', 'Crop Protection'].map((category, index) => (
                <div
                  key={category}
                  className="px-5 py-2.5 bg-white/20 backdrop-blur-sm text-white rounded-full font-semibold text-sm md:text-base shadow-lg hover:bg-white/30 transition-all duration-300 transform hover:scale-105 border border-white/30"
                >
                  {category}
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* Section Indicator */}
      <motion.div 
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5 }}
        className={`sticky top-16 z-40 bg-white/95 backdrop-blur-sm border-b border-green-100 shadow-sm transition-all duration-300 ${isScrolled ? 'py-3' : 'py-2'}`}
      >
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap justify-center gap-2 md:gap-6">
            {['nutrition', 'protection', 'products'].map((section) => (
              <motion.button
                key={section}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => {
                  document.getElementById(section)?.scrollIntoView({ behavior: 'smooth' });
                  setActiveSection(section);
                }}
                className={`flex items-center space-x-2 px-5 py-2.5 rounded-xl transition-all duration-300 ${
                  activeSection === section
                    ? 'bg-gradient-to-r from-green-600 to-emerald-600 text-white shadow-lg'
                    : 'text-green-700 hover:bg-green-50 border border-green-100'
                }`}
              >
                <div className={`w-2.5 h-2.5 rounded-full ${activeSection === section ? 'bg-white' : 'bg-green-400'}`}></div>
                <span className="font-semibold capitalize">{section.replace('-', ' ')}</span>
              </motion.button>
            ))}
          </div>
        </div>
      </motion.div>

      {/* Crop Nutrition Section */}
      <section id="nutrition" className="py-16 md:py-24 scroll-mt-20">
        <div className="container mx-auto px-4">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-green-900 mb-4">
              Crop <span className="bg-gradient-to-r from-green-600 to-emerald-600 bg-clip-text text-transparent">Nutrition</span>
            </h2>
            <p className="text-lg text-green-600 max-w-2xl mx-auto">
              Essential nutrients for optimal plant growth and development
            </p>
          </motion.div>
          
          <div className="max-w-6xl mx-auto">
            {/* Primary Nutrients */}
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="mb-16"
            >
              <h3 className="text-2xl md:text-3xl font-bold text-green-800 mb-8 pb-3 border-b-2 border-green-200">
                Primary Nutrients
              </h3>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {nutrientData.slice(0, 4).map((nutrient, index) => (
                  <motion.div
                    key={nutrient.id}
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ delay: index * 0.1, duration: 0.4 }}
                    viewport={{ once: true }}
                    whileHover={{ scale: 1.05, y: -5 }}
                    onClick={() => openNutrientModal(nutrient)}
                    className="bg-gradient-to-br from-green-50 to-emerald-50 p-6 rounded-2xl border border-green-100 shadow-lg cursor-pointer hover:shadow-xl transition-all duration-300"
                  >
                    <div className="text-center">
                      <div className={`text-4xl font-bold bg-gradient-to-r ${nutrient.color} bg-clip-text text-transparent mb-2`}>
                        {nutrient.symbol}
                      </div>
                      <div className="text-lg font-semibold text-green-800">{nutrient.name}</div>
                      <div className="text-sm text-green-600 mt-2">{nutrient.type}</div>
                      <div className="mt-4">
                        <span className="inline-flex items-center text-sm text-green-700 hover:text-green-800">
                          <FaInfoCircle className="mr-1" />
                          Click for details
                        </span>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Secondary Nutrients */}
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="mb-16"
            >
              <h3 className="text-2xl md:text-3xl font-bold text-green-800 mb-8 pb-3 border-b-2 border-green-200">
                Secondary Nutrients
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {nutrientData.slice(4, 7).map((nutrient, index) => (
                  <motion.div
                    key={nutrient.id}
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ delay: index * 0.1, duration: 0.4 }}
                    viewport={{ once: true }}
                    whileHover={{ scale: 1.05, y: -5 }}
                    onClick={() => openNutrientModal(nutrient)}
                    className="bg-gradient-to-br from-emerald-50 to-green-50 p-6 rounded-2xl border border-emerald-100 shadow-lg cursor-pointer hover:shadow-xl transition-all duration-300"
                  >
                    <div className="text-center">
                      <div className={`text-4xl font-bold bg-gradient-to-r ${nutrient.color} bg-clip-text text-transparent mb-2`}>
                        {nutrient.symbol}
                      </div>
                      <div className="text-lg font-semibold text-emerald-800">{nutrient.name}</div>
                      <div className="text-sm text-emerald-600 mt-2">{nutrient.type}</div>
                      <div className="mt-4">
                        <span className="inline-flex items-center text-sm text-emerald-700 hover:text-emerald-800">
                          <FaInfoCircle className="mr-1" />
                          Click for details
                        </span>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Micronutrients */}
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: true }}
              className="mb-8"
            >
              <h3 className="text-2xl md:text-3xl font-bold text-green-800 mb-8 pb-3 border-b-2 border-green-200">
                Micronutrients
              </h3>
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 lg:grid-cols-10 gap-3">
                {micronutrients.map((nutrient, index) => (
                  <motion.div
                    key={nutrient.id}
                    initial={{ opacity: 0, scale: 0 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ delay: index * 0.05, duration: 0.3 }}
                    viewport={{ once: true }}
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    onClick={() => openNutrientModal(nutrient)}
                    className="bg-gradient-to-br from-green-100 to-emerald-100 p-4 rounded-xl border border-green-200 shadow-sm cursor-pointer hover:shadow-md transition-all duration-300"
                  >
                    <div className="text-center">
                      <div className="text-xl font-bold text-green-700">
                        {nutrient.symbol}
                      </div>
                      <div className="text-xs font-medium text-green-800 mt-1">{nutrient.name}</div>
                      <div className="text-[10px] text-green-600 mt-1">Micro-nutrient</div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Crop Protection Section */}
      <section id="protection" className="py-16 md:py-24 bg-gradient-to-b from-white to-green-50 scroll-mt-20">
        <div className="container mx-auto px-4">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-green-900 mb-4">
              Crop <span className="bg-gradient-to-r from-green-600 to-emerald-600 bg-clip-text text-transparent">Protection</span>
            </h2>
            <p className="text-lg text-green-600 max-w-2xl mx-auto">
              Sustainable solutions for plant health and disease management
            </p>
          </motion.div>
          
          <div className="space-y-24">
            {protectionData.map((item, index) => (
              <motion.div 
                key={item.id}
                id={item.id}
                initial={{ opacity: 0, x: item.imagePosition === 'right' ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                viewport={{ once: true }}
                className={`flex flex-col ${item.imagePosition === 'right' ? 'lg:flex-row' : 'lg:flex-row-reverse'} gap-8 lg:gap-12 items-center`}
              >
                <div className="lg:w-1/2">
                  <h3 className="text-2xl md:text-3xl font-bold text-green-900 mb-6">
                    {item.title}
                  </h3>
                  <p className="text-gray-700 leading-relaxed mb-8">
                    {item.description}
                  </p>
                  
                  <div className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-2xl p-6 border border-green-100 shadow-lg">
                    <div className="flex items-center justify-between mb-4">
                      <h4 className="text-xl font-bold text-green-800">Recommended Products</h4>
                      <motion.button
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        onClick={() => toggleProducts(item.id)}
                        className="px-4 py-2 bg-gradient-to-r from-green-500 to-emerald-500 text-white rounded-lg hover:from-green-600 hover:to-emerald-600 transition-all duration-300 text-sm font-semibold"
                      >
                        {expandedProducts[item.id] ? 'Show Less' : 'View All'}
                      </motion.button>
                    </div>
                    
                    <div className="flex flex-wrap gap-3">
                      {item.products.slice(0, expandedProducts[item.id] ? item.products.length : 3).map((product, idx) => (
                        <motion.span
                          key={product.name}
                          initial={{ opacity: 0, scale: 0.9 }}
                          animate={{ opacity: 1, scale: 1 }}
                          transition={{ delay: idx * 0.1 }}
                          whileHover={{ scale: 1.05 }}
                          onClick={() => openProductModal(product.productKey)}
                          className="inline-flex items-center px-4 py-2.5 bg-white border border-green-200 text-green-800 rounded-xl font-medium shadow-sm hover:shadow-md hover:border-green-300 cursor-pointer transition-all duration-300"
                        >
                          <span className="w-2 h-2 bg-green-500 rounded-full mr-2"></span>
                          {product.name}
                        </motion.span>
                      ))}
                      {!expandedProducts[item.id] && item.products.length > 3 && (
                        <span className="inline-flex items-center px-4 py-2.5 bg-green-100 text-green-700 rounded-xl font-medium">
                          +{item.products.length - 3} more
                        </span>
                      )}
                    </div>
                  </div>
                </div>
                
                <div className="lg:w-1/2">
                  <motion.div 
                    initial={{ scale: 0.9, opacity: 0 }}
                    whileInView={{ scale: 1, opacity: 1 }}
                    transition={{ duration: 0.6, delay: 0.3 }}
                    viewport={{ once: true }}
                    whileHover={{ scale: 1.02 }}
                    className="relative group"
                  >
                    <div className="absolute -inset-4 bg-gradient-to-r from-green-400 to-emerald-400 rounded-3xl blur-xl opacity-30 group-hover:opacity-50 transition duration-500"></div>
                    <img 
                      src={item.image}
                      alt={item.title}
                      className="relative w-full h-64 md:h-80 lg:h-96 object-cover rounded-2xl shadow-2xl"
                    />
                  </motion.div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Complete Product Portfolio Section - IMPROVED DESIGN */}
      <section id="products" className="py-16 md:py-24 scroll-mt-20 bg-gradient-to-b from-emerald-50 to-green-50">
        <div className="container mx-auto px-4">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-green-900 mb-4">
              Our Complete <span className="bg-gradient-to-r from-green-600 to-emerald-600 bg-clip-text text-transparent">Product Range</span>
            </h2>
            <p className="text-lg text-green-600 max-w-2xl mx-auto">
              Discover our comprehensive range of sustainable agricultural solutions
            </p>
          </motion.div>

          {/* Search and Filter Bar */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
            className="max-w-6xl mx-auto mb-12"
          >
            <div className="bg-white rounded-2xl shadow-lg p-6 border border-green-100">
              <div className="flex flex-col md:flex-row gap-4 items-center">
                <div className="flex-1 w-full">
                  <div className="relative">
                    <FaSearch className="absolute left-4 top-1/2 transform -translate-y-1/2 text-green-400" />
                    <input
                      type="text"
                      placeholder="Search products by name or category..."
                      value={searchQuery}
                      onChange={(e) => setSearchQuery(e.target.value)}
                      className="w-full pl-12 pr-4 py-3 bg-green-50 border border-green-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent text-green-800 placeholder-green-500"
                    />
                  </div>
                </div>
                
                <div className="flex flex-wrap gap-2">
                  <span className="flex items-center text-green-700 font-medium">
                    <FaFilter className="mr-2" /> Filter by:
                  </span>
                  {productCategories.map((category) => (
                    <button
                      key={category.id}
                      onClick={() => setSelectedCategory(category.id)}
                      className={`flex items-center gap-2 px-4 py-2 rounded-xl transition-all duration-300 ${
                        selectedCategory === category.id
                          ? `bg-gradient-to-r ${category.color} text-white shadow-md`
                          : 'bg-green-100 text-green-700 hover:bg-green-200'
                      }`}
                    >
                      {category.icon}
                      <span className="font-medium">{category.name}</span>
                      {selectedCategory === category.id && (
                        <span className="ml-1 text-xs bg-white/20 px-2 py-0.5 rounded-full">
                          {allProducts[category.id]?.length || getAllProducts().length}
                        </span>
                      )}
                    </button>
                  ))}
                </div>
              </div>
              
              {searchQuery && (
                <div className="mt-4 text-center">
                  <p className="text-green-600">
                    Found <span className="font-bold text-green-700">{filteredProducts.length}</span> products matching "{searchQuery}"
                  </p>
                </div>
              )}
            </div>
          </motion.div>

          {/* Product Grid */}
          <div className="max-w-7xl mx-auto">
            {selectedCategory === 'all' ? (
              // Show all products in a categorized grid
              Object.entries(allProducts).map(([categoryId, products]) => {
                const categoryInfo = productCategories.find(cat => cat.id === categoryId);
                const displayedProducts = products.filter(product =>
                  product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                  product.category.toLowerCase().includes(searchQuery.toLowerCase())
                );

                if (displayedProducts.length === 0) return null;

                return (
                  <motion.div
                    key={categoryId}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                    className="mb-16 last:mb-0"
                  >
                    <div className="flex items-center gap-3 mb-6">
                      <div className={`p-3 rounded-xl bg-gradient-to-r ${categoryInfo?.color || 'from-green-500 to-emerald-600'} text-white`}>
                        {categoryInfo?.icon}
                      </div>
                      <h3 className="text-2xl md:text-3xl font-bold text-green-900">{categoryInfo?.name}</h3>
                      <span className="ml-auto px-3 py-1 bg-green-100 text-green-700 rounded-full text-sm font-medium">
                        {displayedProducts.length} products
                      </span>
                    </div>
                    
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                      {displayedProducts.map((product, index) => (
                        <motion.div
                          key={product.name}
                          initial={{ opacity: 0, scale: 0.95 }}
                          whileInView={{ opacity: 1, scale: 1 }}
                          transition={{ delay: index * 0.1, duration: 0.4 }}
                          viewport={{ once: true }}
                          whileHover={{ y: -8, scale: 1.02 }}
                          onClick={() => openProductModal(product.productKey)}
                          className="group bg-white rounded-2xl shadow-lg hover:shadow-2xl border border-green-100 overflow-hidden cursor-pointer transition-all duration-500"
                        >
                          <div className={`h-2 bg-gradient-to-r ${categoryInfo?.color || 'from-green-500 to-emerald-600'}`}></div>
                          <div className="p-6">
                            <div className="flex items-start justify-between mb-4">
                              <div>
                                <h4 className="text-lg font-bold text-green-900 group-hover:text-emerald-700 transition-colors">
                                  {product.name}
                                </h4>
                                <p className="text-sm text-green-600 mt-1">{product.category}</p>
                              </div>
                              <div className="p-2 bg-green-50 rounded-lg">
                                <FaInfoCircle className="w-5 h-5 text-green-500" />
                              </div>
                            </div>
                            
                            <div className="flex items-center justify-between mt-6">
                              <span className="inline-flex items-center text-sm text-green-700 font-medium">
                                <span className="w-2 h-2 bg-green-500 rounded-full mr-2"></span>
                                View Details
                              </span>
                              <motion.button
                                whileHover={{ scale: 1.1 }}
                                whileTap={{ scale: 0.95 }}
                                className="px-4 py-2 bg-green-50 text-green-700 rounded-lg text-sm font-medium hover:bg-green-100 transition-colors"
                                onClick={(e) => {
                                  e.stopPropagation();
                                  openProductModal(product.productKey);
                                }}
                              >
                                Learn More
                              </motion.button>
                            </div>
                          </div>
                        </motion.div>
                      ))}
                    </div>
                  </motion.div>
                );
              })
            ) : (
              // Show filtered products for a specific category
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                {filteredProducts.map((product, index) => {
                  const categoryInfo = productCategories.find(cat => cat.id === selectedCategory);
                  
                  return (
                    <motion.div
                      key={product.name}
                      initial={{ opacity: 0, scale: 0.95 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      transition={{ delay: index * 0.1, duration: 0.4 }}
                      viewport={{ once: true }}
                      whileHover={{ y: -8, scale: 1.02 }}
                      onClick={() => openProductModal(product.productKey)}
                      className="group bg-white rounded-2xl shadow-lg hover:shadow-2xl border border-green-100 overflow-hidden cursor-pointer transition-all duration-500"
                    >
                      <div className={`h-2 bg-gradient-to-r ${categoryInfo?.color || 'from-green-500 to-emerald-600'}`}></div>
                      <div className="p-6">
                        <div className="flex items-start justify-between mb-4">
                          <div>
                            <h4 className="text-lg font-bold text-green-900 group-hover:text-emerald-700 transition-colors">
                              {product.name}
                            </h4>
                            <p className="text-sm text-green-600 mt-1">{product.category}</p>
                          </div>
                          <div className="p-2 bg-green-50 rounded-lg">
                            <FaInfoCircle className="w-5 h-5 text-green-500" />
                          </div>
                        </div>
                        
                        <div className="flex items-center justify-between mt-6">
                          <span className="inline-flex items-center text-sm text-green-700 font-medium">
                            <span className="w-2 h-2 bg-green-500 rounded-full mr-2"></span>
                            View Details
                          </span>
                          <motion.button
                            whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 0.95 }}
                            className="px-4 py-2 bg-green-50 text-green-700 rounded-lg text-sm font-medium hover:bg-green-100 transition-colors"
                            onClick={(e) => {
                              e.stopPropagation();
                              openProductModal(product.productKey);
                            }}
                          >
                            Learn More
                          </motion.button>
                        </div>
                      </div>
                    </motion.div>
                  );
                })}
              </div>
            )}

            {filteredProducts.length === 0 && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="text-center py-16"
              >
                <div className="max-w-md mx-auto">
                  <div className="w-24 h-24 mx-auto mb-6 flex items-center justify-center bg-gradient-to-r from-green-100 to-emerald-100 rounded-full">
                    <FaSearch className="w-12 h-12 text-green-400" />
                  </div>
                  <h3 className="text-2xl font-bold text-green-800 mb-3">No products found</h3>
                  <p className="text-green-600 mb-6">
                    Try adjusting your search or filter to find what you're looking for.
                  </p>
                  <button
                    onClick={() => {
                      setSearchQuery('');
                      setSelectedCategory('all');
                    }}
                    className="px-6 py-3 bg-gradient-to-r from-green-500 to-emerald-500 text-white rounded-xl font-semibold hover:from-green-600 hover:to-emerald-600 transition-all duration-300"
                  >
                    View All Products
                  </button>
                </div>
              </motion.div>
            )}
          </div>

          {/* Quick Stats */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
            className="mt-20"
          >
            <div className="bg-gradient-to-r from-green-600 to-emerald-600 rounded-2xl p-8 text-white">
              <h3 className="text-2xl font-bold mb-6 text-center">Our Product Range at a Glance</h3>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                <div className="text-center">
                  <div className="text-4xl font-bold mb-2">{allProducts.disease.length}</div>
                  <p className="text-green-100">Disease Management</p>
                </div>
                <div className="text-center">
                  <div className="text-4xl font-bold mb-2">{allProducts.pest.length}</div>
                  <p className="text-green-100">Pest Control</p>
                </div>
                <div className="text-center">
                  <div className="text-4xl font-bold mb-2">{allProducts.nutrition.length}</div>
                  <p className="text-green-100">Nutrition & Growth</p>
                </div>
                <div className="text-center">
                  <div className="text-4xl font-bold mb-2">{allProducts.multi.length}</div>
                  <p className="text-green-100">Multi-Purpose</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Nutrient Modal */}
      <AnimatePresence>
        {showNutrientModal && selectedNutrient && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={closeModal}
            className="fixed inset-0 bg-black/70 backdrop-blur-sm z-50 flex items-center justify-center p-4"
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0, y: 50 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.9, opacity: 0, y: 50 }}
              onClick={(e) => e.stopPropagation()}
              className="bg-white rounded-3xl max-w-4xl w-full max-h-[90vh] overflow-y-auto"
            >
              {/* Header */}
              <div className={`bg-gradient-to-r ${selectedNutrient.color} text-white p-6 rounded-t-3xl`}>
                <div className="flex justify-between items-center">
                  <div className="flex items-center space-x-4">
                    <div className="text-5xl font-bold">{selectedNutrient.symbol}</div>
                    <div>
                      <h3 className="text-2xl font-bold">{selectedNutrient.name}</h3>
                      <p className="text-white/80">{selectedNutrient.type}</p>
                    </div>
                  </div>
                  <button
                    onClick={closeModal}
                    className="p-2 hover:bg-white/20 rounded-full transition-colors"
                  >
                    <FaTimes className="text-xl" />
                  </button>
                </div>
              </div>

              {/* Content */}
              <div className="p-6 md:p-8">
                <div className="grid md:grid-cols-2 gap-8">
                  {/* Left Column */}
                  <div>
                    <div className="mb-6">
                      <h4 className="text-lg font-bold text-green-800 mb-2">Quick Facts</h4>
                      <p className="text-gray-700">{selectedNutrient.quickFacts}</p>
                    </div>

                    <div className="mb-6">
                      <h4 className="text-lg font-bold text-green-800 mb-2">Description</h4>
                      <p className="text-gray-700">{selectedNutrient.description}</p>
                    </div>

                    <div className="mb-6">
                      <h4 className="text-lg font-bold text-green-800 mb-3">Key Functions</h4>
                      <ul className="space-y-2">
                        {selectedNutrient.functions?.map((func, index) => (
                          <li key={index} className="flex items-start">
                            <FaCheck className="w-4 h-4 text-green-500 mt-1 mr-2 flex-shrink-0" />
                            <span className="text-gray-700">{func}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  {/* Right Column */}
                  <div>
                    {selectedNutrient.image && (
                      <div className="mb-6">
                        <div className="rounded-2xl overflow-hidden shadow-lg">
                          <img
                            src={selectedNutrient.image}
                            alt={selectedNutrient.name}
                            className="w-full h-48 object-cover"
                          />
                        </div>
                      </div>
                    )}

                    <div className="mb-6">
                      <h4 className="text-lg font-bold text-green-800 mb-3">Recommended Products</h4>
                      <div className="flex flex-wrap gap-2">
                        {selectedNutrient.recommendedProducts?.map((product, index) => (
                          <motion.span
                            key={index}
                            whileHover={{ scale: 1.05 }}
                            onClick={() => {
                              openProductModal(product.productKey);
                              closeModal();
                            }}
                            className="px-3 py-1.5 bg-green-100 text-green-800 rounded-lg text-sm font-medium hover:bg-green-200 transition-colors cursor-pointer"
                          >
                            {product.name}
                          </motion.span>
                        ))}
                      </div>
                    </div>

                    <div className="bg-gradient-to-br from-green-50 to-emerald-50 p-4 rounded-xl">
                      <h4 className="font-bold text-green-800 mb-2">Importance</h4>
                      <p className="text-sm text-gray-700">
                        {selectedNutrient.name} plays a crucial role in plant physiology and is essential for optimal growth, development, and yield.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Product Modal */}
      <AnimatePresence>
        {showProductModal && selectedProduct && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={closeModal}
            className="fixed inset-0 bg-black/70 backdrop-blur-sm z-50 flex items-center justify-center p-4"
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0, y: 50 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.9, opacity: 0, y: 50 }}
              onClick={(e) => e.stopPropagation()}
              className="bg-white rounded-3xl max-w-4xl w-full max-h-[90vh] overflow-y-auto"
            >
              {/* Header */}
              <div className="bg-gradient-to-r from-green-600 to-emerald-600 text-white p-6 rounded-t-3xl">
                <div className="flex justify-between items-center">
                  <div>
                    <h3 className="text-2xl font-bold">{selectedProduct.name}</h3>
                    <p className="text-white/80">{selectedProduct.category}</p>
                  </div>
                  <button
                    onClick={closeModal}
                    className="p-2 hover:bg-white/20 rounded-full transition-colors"
                  >
                    <FaTimes className="text-xl" />
                  </button>
                </div>
              </div>

              {/* Content */}
              <div className="p-6 md:p-8">
                <div className="grid md:grid-cols-2 gap-8">
                  {/* Left Column */}
                  <div>
                    {selectedProduct.images && selectedProduct.images.length > 0 && selectedProduct.images[0] && (
                      <div className="mb-6">
                        <div className="rounded-2xl overflow-hidden shadow-lg">
                          <img
                            src={selectedProduct.images[0]}
                            alt={selectedProduct.name}
                            className="w-full h-48 object-cover"
                          />
                        </div>
                      </div>
                    )}

                    <div className="mb-6">
                      <h4 className="text-lg font-bold text-green-800 mb-2">Description</h4>
                      <p className="text-gray-700">{selectedProduct.description}</p>
                    </div>

                    <div className="mb-6">
                      <h4 className="text-lg font-bold text-green-800 mb-3">Key Benefits</h4>
                      <ul className="space-y-2">
                        {selectedProduct.keyBenefits?.map((benefit, index) => (
                          <li key={index} className="flex items-start">
                            <FaCheck className="w-4 h-4 text-green-500 mt-1 mr-2 flex-shrink-0" />
                            <span className="text-gray-700">{benefit}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  {/* Right Column */}
                  <div>
                    {selectedProduct.application && (
                      <div className="mb-6">
                        <h4 className="text-lg font-bold text-green-800 mb-3">Application Details</h4>
                        <div className="bg-green-50 p-4 rounded-xl">
                          <div className="space-y-3">
                            {selectedProduct.application.fco && (
                              <div>
                                <p className="text-sm text-green-700">FCO Registration</p>
                                <p className="font-medium">{selectedProduct.application.fco}</p>
                              </div>
                            )}
                            {selectedProduct.application.type && (
                              <div>
                                <p className="text-sm text-green-700">Type</p>
                                <p className="font-medium">{selectedProduct.application.type}</p>
                              </div>
                            )}
                            <div>
                              <p className="text-sm text-green-700">Crops</p>
                              <p className="font-medium">{selectedProduct.application.crops}</p>
                            </div>
                            <div>
                              <p className="text-sm text-green-700">Dosage</p>
                              <p className="font-medium">{selectedProduct.application.dosage}</p>
                            </div>
                            {selectedProduct.application.quantity && (
                              <div>
                                <p className="text-sm text-green-700">Quantity</p>
                                <p className="font-medium">{selectedProduct.application.quantity}</p>
                              </div>
                            )}
                            {selectedProduct.application.time && (
                              <div>
                                <p className="text-sm text-green-700">Timing</p>
                                <p className="font-medium">{selectedProduct.application.time}</p>
                              </div>
                            )}
                            {selectedProduct.application.packaging && (
                              <div>
                                <p className="text-sm text-green-700">Packaging</p>
                                <p className="font-medium">{selectedProduct.application.packaging}</p>
                              </div>
                            )}
                          </div>
                        </div>
                      </div>
                    )}

                    <div className="flex flex-col gap-4">
                      <motion.button
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        onClick={handleDownloadLeaflet}
                        className="flex items-center justify-center gap-2 px-4 py-3 bg-gradient-to-r from-green-500 to-emerald-500 text-white rounded-xl font-semibold hover:from-green-600 hover:to-emerald-600 transition-all"
                      >
                        <FaDownload />
                        Download Leaflet
                      </motion.button>
                      <motion.button
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        onClick={handleBuyProduct}
                        className="flex items-center justify-center gap-2 px-4 py-3 bg-white border-2 border-green-500 text-green-600 rounded-xl font-semibold hover:bg-green-50 transition-all"
                      >
                        <FaShoppingCart />
                        Contact Distributor
                      </motion.button>
                    </div>

                    <div className="mt-6 pt-6 border-t border-gray-200">
                      <h4 className="text-lg font-bold text-green-800 mb-3">Available With</h4>
                      <div className="flex flex-wrap gap-2">
                        {distributors
                          .filter(distributor => 
                            distributor.products.some(product => 
                              product.toLowerCase().includes(selectedProduct.name.toLowerCase()) ||
                              selectedProduct.name.toLowerCase().includes(product.toLowerCase())
                            )
                          )
                          .slice(0, 3)
                          .map((distributor) => (
                            <motion.span
                              key={distributor.id}
                              whileHover={{ scale: 1.05 }}
                              onClick={() => openContactModal(distributor)}
                              className="px-3 py-1.5 bg-blue-100 text-blue-800 rounded-lg text-sm font-medium hover:bg-blue-200 transition-colors cursor-pointer"
                            >
                              {distributor.location}
                            </motion.span>
                          ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Contact Modal */}
      <AnimatePresence>
        {showContactModal && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={closeModal}
            className="fixed inset-0 bg-black/70 backdrop-blur-sm z-50 flex items-center justify-center p-4"
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0, y: 50 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.9, opacity: 0, y: 50 }}
              onClick={(e) => e.stopPropagation()}
              className="bg-white rounded-3xl max-w-2xl w-full max-h-[90vh] overflow-y-auto"
            >
              {/* Header */}
              <div className="bg-gradient-to-r from-blue-600 to-cyan-600 text-white p-6 rounded-t-3xl">
                <div className="flex justify-between items-center">
                  <div>
                    <h3 className="text-2xl font-bold">
                      {selectedDistributor ? 'Contact Distributor' : 'Our Distributors'}
                    </h3>
                    <p className="text-white/80">
                      {selectedDistributor ? `Get in touch with ${selectedDistributor.name}` : 'Find distributors near you'}
                    </p>
                  </div>
                  <button
                    onClick={closeModal}
                    className="p-2 hover:bg-white/20 rounded-full transition-colors"
                  >
                    <FaTimes className="text-xl" />
                  </button>
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                {selectedDistributor ? (
                  <div className="space-y-6">
                    <div className="bg-gradient-to-br from-blue-50 to-cyan-50 p-4 rounded-xl">
                      <div className="flex items-center gap-3 mb-4">
                        <div className="p-2 bg-blue-100 rounded-lg">
                          <FaUsers className="w-6 h-6 text-blue-600" />
                        </div>
                        <div>
                          <h4 className="text-xl font-bold text-blue-900">{selectedDistributor.name}</h4>
                          <p className="text-blue-600">{selectedDistributor.location}</p>
                        </div>
                      </div>
                      
                      <div className="space-y-4">
                        <div className="flex items-center gap-3">
                          <div className="p-2 bg-white rounded-lg">
                            <FaMapMarkerAlt className="w-4 h-4 text-blue-500" />
                          </div>
                          <div>
                            <p className="text-sm text-blue-700">Contact Person</p>
                            <p className="font-semibold">{selectedDistributor.contact}</p>
                          </div>
                        </div>
                        
                        <div className="flex items-center gap-3">
                          <div className="p-2 bg-white rounded-lg">
                            <FaPhone className="w-4 h-4 text-blue-500" />
                          </div>
                          <div>
                            <p className="text-sm text-blue-700">Phone</p>
                            <p className="font-semibold">{selectedDistributor.phone}</p>
                          </div>
                        </div>
                        
                        <div className="flex items-center gap-3">
                          <div className="p-2 bg-white rounded-lg">
                            <FaEnvelope className="w-4 h-4 text-blue-500" />
                          </div>
                          <div>
                            <p className="text-sm text-blue-700">Email</p>
                            <p className="font-semibold">{selectedDistributor.email}</p>
                          </div>
                        </div>
                        
                        <div className="pt-4 border-t border-blue-100">
                          <p className="text-sm text-blue-700 mb-2">Products Available</p>
                          <div className="flex flex-wrap gap-2">
                            {selectedDistributor.products.map((product, idx) => (
                              <span key={idx} className="px-3 py-1 bg-white text-blue-600 rounded-lg text-sm font-medium">
                                {product}
                              </span>
                            ))}
                          </div>
                        </div>
                      </div>
                    </div>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <motion.button
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        onClick={() => handleWhatsApp(selectedDistributor.phone)}
                        className="flex items-center justify-center gap-2 px-4 py-3 bg-green-500 text-white rounded-xl font-semibold hover:bg-green-600 transition-all"
                      >
                        <FaWhatsapp className="text-xl" />
                        WhatsApp
                      </motion.button>
                      
                      <motion.button
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        onClick={() => handleEmail(selectedDistributor.email)}
                        className="flex items-center justify-center gap-2 px-4 py-3 bg-blue-500 text-white rounded-xl font-semibold hover:bg-blue-600 transition-all"
                      >
                        <FaEnvelope />
                        Email
                      </motion.button>
                    </div>
                    
                    <div className="text-center pt-4 border-t border-gray-200">
                      <p className="text-sm text-gray-600">
                        For bulk orders and dealership inquiries, contact our regional manager at <span className="font-semibold">+91 98765 43210</span>
                      </p>
                    </div>
                  </div>
                ) : (
                  <div className="space-y-6">
                    <h4 className="text-lg font-bold text-gray-800 mb-4">Our Authorized Distributors</h4>
                    <div className="space-y-4">
                      {distributors.map((distributor) => (
                        <motion.div
                          key={distributor.id}
                          whileHover={{ scale: 1.02 }}
                          onClick={() => openContactModal(distributor)}
                          className="bg-gradient-to-br from-blue-50 to-cyan-50 p-4 rounded-xl border border-blue-100 cursor-pointer hover:border-blue-300 transition-all duration-300"
                        >
                          <div className="flex justify-between items-start">
                            <div>
                              <h5 className="font-bold text-blue-900">{distributor.name}</h5>
                              <p className="text-sm text-blue-600">{distributor.location}</p>
                              <p className="text-sm text-gray-600 mt-1">{distributor.contact}</p>
                            </div>
                            <div className="text-right">
                              <p className="text-sm font-medium text-blue-700">{distributor.phone}</p>
                              <p className="text-xs text-gray-600 mt-1">{distributor.products.length} products</p>
                            </div>
                          </div>
                        </motion.div>
                      ))}
                    </div>
                    
                    <div className="bg-gradient-to-br from-green-50 to-emerald-50 p-4 rounded-xl">
                      <div className="flex items-center gap-3">
                        <FaCertificate className="w-6 h-6 text-green-600" />
                        <div>
                          <h5 className="font-bold text-green-800">Become a Distributor</h5>
                          <p className="text-sm text-green-600">
                            Interested in distributing Biofactor products? Contact our regional manager.
                          </p>
                        </div>
                      </div>
                      <div className="mt-4">
                        <button
                          onClick={() => handleWhatsApp('+919876543210')}
                          className="w-full px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors font-medium"
                        >
                          Apply Now
                        </button>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      <Footer />
      
      <style jsx>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-20px) rotate(5deg); }
        }
        
        .scroll-mt-20 {
          scroll-margin-top: 5rem;
        }
        
        /* Custom scrollbar */
        ::-webkit-scrollbar {
          width: 10px;
        }
        
        ::-webkit-scrollbar-track {
          background: #f1f1f1;
        }
        
        ::-webkit-scrollbar-thumb {
          background: #10b981;
          border-radius: 5px;
        }
        
        ::-webkit-scrollbar-thumb:hover {
          background: #059669;
        }
      `}</style>
    </div>
  );
};

export default AgriculturePage;