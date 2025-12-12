// src/pages/Auth/LoginPage.jsx
import React, { useState, useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../../contexts/AuthContext';
import { 
  FiArrowRight, 
  FiCheckCircle, 
  FiShield, 
  FiCpu,
  FiDatabase,
  FiKey,
  FiUser,
  FiLock,
  FiMail,
  FiEye,
  FiEyeOff,
  FiGlobe,
  FiUsers,
  FiBarChart2,
  FiMap,
  FiPackage,
  FiSettings,
  FiBell,
  FiActivity,
  FiTrendingUp,
  FiChevronRight,
  FiCopy,
  FiCheck,
  FiZap,
  FiCloud,
  FiSmartphone,
  FiTablet
} from 'react-icons/fi';

const LoginPage = () => {
  const navigate = useNavigate();
  const { login, isAuthenticated, user } = useAuth();
  const [form, setForm] = useState({ email: "", password: "", role: "Admin" });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [selectedDemo, setSelectedDemo] = useState(null);
  const [copied, setCopied] = useState(false);
  const [activeFeature, setActiveFeature] = useState(0);
  const [animateParticles, setAnimateParticles] = useState(false);
  const [formAnimating, setFormAnimating] = useState(false);
  const formRef = useRef(null);

  // Check if already authenticated
  useEffect(() => {
    if (isAuthenticated) {
      navigate('/app/dashboard');
    }
  }, [isAuthenticated, navigate, user]);

  // Auto-rotate features
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveFeature((prev) => (prev + 1) % features.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  // Animate particles on load
  useEffect(() => {
    setTimeout(() => setAnimateParticles(true), 500);
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    setLoading(true);

    try {
      const success = await login({
        email: form.email,
        role: form.role,
        password: form.password
      });
      
      if (success) {
        // Add success animation using state
        setFormAnimating(true);
        setTimeout(() => {
          setFormAnimating(false);
          navigate('/app/dashboard');
        }, 300);
      } else {
        setError('Login failed. Please check your credentials.');
        // Trigger shake animation via state
        setFormAnimating(true);
        setTimeout(() => setFormAnimating(false), 500);
      }
    } catch (err) {
      console.error('Login error:', err);
      setError('An error occurred during login. Please try again.');
      setFormAnimating(true);
      setTimeout(() => setFormAnimating(false), 500);
    } finally {
      setLoading(false);
    }
  };

  const copyToClipboard = (text) => {
    navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const roles = [
    { value: "Admin", label: "Administrator", icon: FiSettings, color: "from-red-500 to-pink-600" },
    { value: "Executive", label: "Executive/CEO", icon: FiBarChart2, color: "from-purple-500 to-indigo-600" },
    { value: "SO", label: "Sales Officer", icon: FiTrendingUp, color: "from-blue-500 to-cyan-600" },
    { value: "MDO", label: "Marketing Development Officer", icon: FiUsers, color: "from-green-500 to-emerald-600" },
    { value: "RM", label: "Regional Manager", icon: FiMap, color: "from-orange-500 to-amber-600" },
    { value: "ZM", label: "Zonal Manager", icon: FiGlobe, color: "from-teal-500 to-cyan-600" },
    { value: "GM", label: "General Manager", icon: FiActivity, color: "from-violet-500 to-purple-600" },
    { value: "HR", label: "HR Manager", icon: FiUsers, color: "from-pink-500 to-rose-600" },
    { value: "Finance", label: "Finance Officer", icon: FiDatabase, color: "from-cyan-500 to-blue-600" },
    { value: "Warehouse", label: "Warehouse Manager", icon: FiPackage, color: "from-amber-500 to-orange-600" },
    { value: "Manufacturing", label: "Plant Manager", icon: FiCpu, color: "from-emerald-500 to-green-600" },
    { value: "QC", label: "QC Analyst", icon: FiCheckCircle, color: "from-red-400 to-red-600" },
    { value: "R&D", label: "R&D Manager", icon: FiActivity, color: "from-indigo-500 to-purple-600" },
    { value: "Field", label: "Field Officer", icon: FiMap, color: "from-lime-500 to-green-600" }
  ];

  const demoAccounts = [
    { email: "admin@biofactor.com", password: "admin123", role: "Admin", color: "bg-gradient-to-r from-red-500 to-pink-600" },
    { email: "ceo@biofactor.com", password: "ceo123", role: "Executive", color: "bg-gradient-to-r from-purple-500 to-indigo-600" },
    { email: "sales@biofactor.com", password: "sales123", role: "SO", color: "bg-gradient-to-r from-blue-500 to-cyan-600" },
    { email: "warehouse@biofactor.com", password: "warehouse123", role: "Warehouse", color: "bg-gradient-to-r from-amber-500 to-orange-600" },
    { email: "manufacturing@biofactor.com", password: "mfg123", role: "Manufacturing", color: "bg-gradient-to-r from-emerald-500 to-green-600" },
    { email: "qc@biofactor.com", password: "qc123", role: "QC", color: "bg-gradient-to-r from-red-400 to-red-600" },
    { email: "finance@biofactor.com", password: "finance123", role: "Finance", color: "bg-gradient-to-r from-cyan-500 to-blue-600" },
    { email: "hr@biofactor.com", password: "hr123", role: "HR", color: "bg-gradient-to-r from-pink-500 to-rose-600" },
    { email: "field@biofactor.com", password: "field123", role: "Field", color: "bg-gradient-to-r from-lime-500 to-green-600" },
    { email: "rnd@biofactor.com", password: "rnd123", role: "R&D", color: "bg-gradient-to-r from-indigo-500 to-purple-600" }
  ];

  const features = [
    {
      icon: FiShield,
      title: "Enterprise Security",
      description: "End-to-end encrypted with JWT authentication and RBAC",
      color: "text-green-600"
    },
    {
      icon: FiDatabase,
      title: "Real-time Data",
      description: "Live sync across all devices with Supabase backend",
      color: "text-blue-600"
    },
    {
      icon: FiCpu,
      title: "Smart Analytics",
      description: "AI-powered insights and predictive analytics",
      color: "text-purple-600"
    },
    {
      icon: FiZap,
      title: "Fast Performance",
      description: "Optimized for speed with instant dashboard load",
      color: "text-amber-600"
    },
    {
      icon: FiCloud,
      title: "Cloud Native",
      description: "Scalable architecture with 99.9% uptime",
      color: "text-cyan-600"
    }
  ];

  const modules = [
    { name: "Sales CRM", icon: FiTrendingUp, color: "bg-blue-500" },
    { name: "Warehouse", icon: FiPackage, color: "bg-green-500" },
    { name: "Field Ops", icon: FiMap, color: "bg-purple-500" },
    { name: "Manufacturing", icon: FiCpu, color: "bg-orange-500" },
    { name: "Finance", icon: FiDatabase, color: "bg-cyan-500" },
    { name: "HRMS", icon: FiUsers, color: "bg-pink-500" },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 via-emerald-50 to-teal-50 overflow-hidden">
      {/* Animated Background Particles */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        {[...Array(30)].map((_, i) => (
          <div
            key={i}
            className={`absolute rounded-full bg-gradient-to-r from-green-200 to-emerald-200 opacity-20 ${
              animateParticles ? 'animate-float' : ''
            }`}
            style={{
              width: Math.random() * 100 + 50,
              height: Math.random() * 100 + 50,
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${i * 0.1}s`,
              animationDuration: `${Math.random() * 10 + 20}s`
            }}
          />
        ))}
      </div>

      <div className="relative min-h-screen grid lg:grid-cols-2">
        {/* Left Column - Brand & Features */}
        <div className="p-6 md:p-10 lg:p-12 flex flex-col justify-center space-y-8 relative z-10">
          {/* Header */}
          <div className="flex items-center gap-4 animate-fade-in">
            <div className="w-14 h-14 rounded-2xl bg-gradient-to-r from-green-600 to-emerald-600 flex items-center justify-center text-white font-bold text-2xl shadow-lg transform hover:scale-105 transition-transform duration-300">
              🌱
            </div>
            <div>
              <h1 className="text-2xl md:text-3xl font-bold text-green-900">Biofactor Digital</h1>
              <p className="text-sm md:text-base text-green-600 font-medium">
                Agricultural ERP & Field Automation
              </p>
            </div>
          </div>
          
          {/* Main Title */}
          <div className="space-y-4 animate-slide-up">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-green-900 leading-tight">
              Secure access to
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-green-600 to-emerald-600">
                ERP, CRM, Field Ops
              </span>
              and Compliance in one place.
            </h1>
            
            <p className="text-green-700 leading-relaxed text-base md:text-lg">
              JWT authentication with role-based access control. Choose your role to preview
              permissions for different departments and positions.
            </p>
          </div>

          {/* Features Carousel */}
          <div className="space-y-4 animate-slide-up" style={{ animationDelay: '0.2s' }}>
            <div className="flex items-center justify-between">
              <h3 className="text-lg font-semibold text-green-900">Key Features</h3>
              <div className="flex space-x-2">
                {features.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setActiveFeature(index)}
                    className={`w-2 h-2 rounded-full transition-all duration-300 ${
                      activeFeature === index ? 'bg-green-600 w-6' : 'bg-green-200'
                    }`}
                  />
                ))}
              </div>
            </div>
            
            <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 border border-green-100 shadow-lg transform hover:scale-[1.02] transition-all duration-300">
              <div className="flex items-start gap-4">
                <div className={`p-3 rounded-xl ${features[activeFeature].color.replace('text', 'bg')} bg-opacity-10`}>
                  {(() => {
                    const Icon = features[activeFeature].icon;
                    return <Icon className={`w-6 h-6 ${features[activeFeature].color}`} />;
                  })()}
                </div>
                <div>
                  <h4 className="font-bold text-green-900 text-lg">{features[activeFeature].title}</h4>
                  <p className="text-green-700 mt-1">{features[activeFeature].description}</p>
                </div>
              </div>
            </div>
          </div>

          {/* Module Grid */}
          <div className="space-y-4 animate-slide-up" style={{ animationDelay: '0.4s' }}>
            <h3 className="text-lg font-semibold text-green-900">Integrated Modules</h3>
            <div className="grid grid-cols-3 sm:grid-cols-6 gap-3">
              {modules.map((module, index) => {
                const Icon = module.icon;
                return (
                  <div
                    key={index}
                    className="bg-white/80 backdrop-blur-sm rounded-xl p-4 border border-green-100 shadow-sm hover:shadow-md hover:border-green-300 transition-all duration-300 transform hover:-translate-y-1 group cursor-pointer"
                  >
                    <div className={`w-10 h-10 ${module.color} rounded-lg flex items-center justify-center mx-auto mb-2 group-hover:scale-110 transition-transform`}>
                      <Icon className="w-5 h-5 text-white" />
                    </div>
                    <p className="text-xs text-center text-green-800 font-medium truncate">
                      {module.name}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-wrap gap-3 animate-slide-up" style={{ animationDelay: '0.6s' }}>
            <a
              href="/"
              className="px-5 py-3 rounded-full border border-green-200 text-green-700 hover:border-green-300 hover:bg-white transition-all duration-300 flex items-center gap-2 group"
            >
              ← Back to Home
            </a>
            <a
              href="#"
              className="px-5 py-3 rounded-full bg-gradient-to-r from-green-600 to-emerald-600 text-white shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300 flex items-center gap-2 group"
            >
              Request demo
              <FiChevronRight className="group-hover:translate-x-1 transition-transform" />
            </a>
          </div>

          {/* Responsive Indicators */}
          <div className="flex items-center gap-4 text-xs text-green-600 pt-4 border-t border-green-100">
            <div className="flex items-center gap-1">
              <FiSmartphone className="w-4 h-4" />
              <span>Mobile</span>
            </div>
            <div className="flex items-center gap-1">
              <FiTablet className="w-4 h-4" />
              <span>Tablet</span>
            </div>
            <div className="flex items-center gap-1">
              <FiGlobe className="w-4 h-4" />
              <span>Desktop</span>
            </div>
          </div>
        </div>
        
        {/* Right Column - Login Form */}
        <div className="p-6 md:p-10 lg:p-12 flex items-center justify-center relative z-10">
          <form
            ref={formRef}
            onSubmit={handleSubmit}
            className={`w-full max-w-lg space-y-6 bg-white/95 backdrop-blur-sm rounded-3xl shadow-2xl p-8 md:p-10 border border-green-100/50 transform transition-all duration-300 ${
              formAnimating ? 'animate-shake scale-105' : ''
            }`}
          >
            {/* Form Header */}
            <div className="space-y-2 text-center">
              <div className="w-16 h-16 mx-auto rounded-2xl bg-gradient-to-r from-green-600 to-emerald-600 flex items-center justify-center text-white text-2xl shadow-lg">
                <FiKey />
              </div>
              <h2 className="text-2xl md:text-3xl font-bold text-green-900">Welcome back</h2>
              <p className="text-green-600">Sign in to your Biofactor account</p>
            </div>

            {/* Error Alert */}
            {error && (
              <div className="p-4 rounded-xl bg-red-50 border border-red-200 text-red-700 text-sm animate-fade-in">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <div className="w-6 h-6 rounded-full bg-red-100 flex items-center justify-center">
                      <span className="text-red-500 font-bold">!</span>
                    </div>
                    <span>{error}</span>
                  </div>
                  <button onClick={() => setError('')} className="text-red-500 hover:text-red-700">
                    ×
                  </button>
                </div>
              </div>
            )}

            {/* Email Field */}
            <div className="space-y-2">
              <label className="text-sm text-green-700 font-medium flex items-center gap-2">
                <FiMail className="text-green-600" />
                Work Email
              </label>
              <div className="relative">
                <input
                  required
                  type="email"
                  value={form.email}
                  onChange={(e) => setForm({ ...form, email: e.target.value })}
                  className="w-full px-4 py-3.5 rounded-xl border border-green-200 focus:border-green-500 focus:ring-4 focus:ring-green-100 outline-none transition-all bg-white/50 backdrop-blur-sm"
                  placeholder="you@biofactor.com"
                />
                {form.email && (
                  <div className="absolute right-3 top-1/2 transform -translate-y-1/2">
                    <FiCheckCircle className="text-green-500" />
                  </div>
                )}
              </div>
            </div>

            {/* Password Field */}
            <div className="space-y-2">
              <div className="flex items-center justify-between">
                <label className="text-sm text-green-700 font-medium flex items-center gap-2">
                  <FiLock className="text-green-600" />
                  Password
                </label>
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="text-xs text-green-600 hover:text-green-800 flex items-center gap-1 transition-colors"
                >
                  {showPassword ? (
                    <>
                      <FiEyeOff className="w-4 h-4" />
                      Hide
                    </>
                  ) : (
                    <>
                      <FiEye className="w-4 h-4" />
                      Show
                    </>
                  )}
                </button>
              </div>
              <div className="relative">
                <input
                  required
                  type={showPassword ? "text" : "password"}
                  value={form.password}
                  onChange={(e) => setForm({ ...form, password: e.target.value })}
                  className="w-full px-4 py-3.5 rounded-xl border border-green-200 focus:border-green-500 focus:ring-4 focus:ring-green-100 outline-none transition-all bg-white/50 backdrop-blur-sm pr-12"
                  placeholder="••••••••"
                />
                {form.password && (
                  <div className="absolute right-3 top-1/2 transform -translate-y-1/2 flex items-center gap-2">
                    <div className={`w-2 h-2 rounded-full ${form.password.length >= 8 ? 'bg-green-500' : 'bg-red-500'}`} />
                    <div className={`w-2 h-2 rounded-full ${/[A-Z]/.test(form.password) ? 'bg-green-500' : 'bg-red-500'}`} />
                    <div className={`w-2 h-2 rounded-full ${/\d/.test(form.password) ? 'bg-green-500' : 'bg-red-500'}`} />
                  </div>
                )}
              </div>
            </div>

            {/* Role Selector */}
            <div className="space-y-2">
              <label className="text-sm text-green-700 font-medium">Role</label>
              <div className="relative">
                <select
                  value={form.role}
                  onChange={(e) => setForm({ ...form, role: e.target.value })}
                  className="w-full px-4 py-3.5 rounded-xl border border-green-200 focus:border-green-500 focus:ring-4 focus:ring-green-100 outline-none transition-all bg-white/50 backdrop-blur-sm appearance-none cursor-pointer"
                >
                  {roles.map((role) => {
                    const Icon = role.icon;
                    return (
                      <option key={role.value} value={role.value}>
                        {role.label}
                      </option>
                    );
                  })}
                </select>
                <div className="absolute right-4 top-1/2 transform -translate-y-1/2 pointer-events-none">
                  <FiChevronRight className="w-4 h-4 text-green-600 transform rotate-90" />
                </div>
              </div>
              
              {/* Role Preview */}
              <div className="mt-3">
                {(() => {
                  const currentRole = roles.find(r => r.value === form.role);
                  const Icon = currentRole?.icon || FiUser;
                  return (
                    <div className={`inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r ${
                      currentRole?.color || 'from-green-500 to-emerald-600'
                    } text-white text-sm font-medium`}>
                      <Icon className="w-4 h-4" />
                      {currentRole?.label}
                    </div>
                  );
                })()}
              </div>
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              disabled={loading}
              className="w-full py-4 rounded-xl bg-gradient-to-r from-green-600 to-emerald-600 text-white font-semibold shadow-lg disabled:opacity-60 hover:shadow-xl hover:scale-[1.02] active:scale-95 transition-all duration-300 flex items-center justify-center gap-3 group"
            >
              {loading ? (
                <>
                  <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                  Authenticating...
                </>
              ) : (
                <>
                  <span>Access Dashboard</span>
                  <FiArrowRight className="group-hover:translate-x-1 transition-transform" />
                </>
              )}
            </button>

            {/* Security Badge */}
            <div className="flex items-center justify-center gap-2 p-3 rounded-lg bg-green-50 border border-green-100">
              <FiShield className="text-green-600" />
              <span className="text-xs text-green-700 font-medium">JWT Secured • RBAC Enforced</span>
            </div>

            {/* Demo Accounts */}
            <div className="pt-6 border-t border-green-100">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-sm font-semibold text-green-900">Quick Login (Demo Accounts)</h3>
                <button
                  type="button"
                  onClick={() => copyToClipboard(JSON.stringify(demoAccounts, null, 2))}
                  className="text-xs text-green-600 hover:text-green-800 flex items-center gap-1 transition-colors"
                >
                  {copied ? (
                    <>
                      <FiCheck className="w-4 h-4" />
                      Copied!
                    </>
                  ) : (
                    <>
                      <FiCopy className="w-4 h-4" />
                      Copy All
                    </>
                  )}
                </button>
              </div>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 max-h-64 overflow-y-auto p-2">
                {demoAccounts.map((account) => {
                  const roleData = roles.find(r => r.value === account.role);
                  const Icon = roleData?.icon || FiUser;
                  return (
                    <button
                      key={account.email}
                      type="button"
                      onClick={() => {
                        setForm({
                          email: account.email,
                          password: account.password,
                          role: account.role
                        });
                        setSelectedDemo(account.email);
                        setTimeout(() => setSelectedDemo(null), 2000);
                      }}
                      className={`p-4 text-left rounded-xl border transition-all duration-300 transform hover:-translate-y-1 ${
                        selectedDemo === account.email
                          ? 'scale-105 border-green-400 bg-green-50 shadow-lg'
                          : 'border-green-100 hover:border-green-300 hover:bg-green-50/50'
                      }`}
                    >
                      <div className="flex items-center justify-between mb-2">
                        <div className="flex items-center gap-2">
                          <div className={`w-8 h-8 rounded-lg ${account.color} flex items-center justify-center`}>
                            <Icon className="w-4 h-4 text-white" />
                          </div>
                          <span className="text-sm font-semibold text-green-900">
                            {account.role}
                          </span>
                        </div>
                        <span className="text-xs text-green-600 bg-green-100 px-2 py-1 rounded-full">
                          {account.password}
                        </span>
                      </div>
                      <p className="text-xs text-green-700 truncate">
                        {account.email}
                      </p>
                      <div className="mt-2 flex items-center justify-between">
                        <span className="text-xs text-green-500">Click to auto-fill</span>
                        <FiChevronRight className="w-4 h-4 text-green-400" />
                      </div>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Footer Links */}
            <div className="text-center space-y-3 pt-4">
              <a href="#" className="text-xs text-green-600 hover:text-green-800 transition-colors block">
                Forgot password?
              </a>
              <p className="text-xs text-green-500">
                Don't have an account?{' '}
                <a href="#" className="font-semibold hover:text-green-700 transition-colors">
                  Contact administrator
                </a>
              </p>
            </div>
          </form>
        </div>
      </div>

      {/* Add Tailwind animations to global CSS or use inline style */}
      <style jsx>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-20px) rotate(180deg); }
        }
        @keyframes shake {
          0%, 100% { transform: translateX(0); }
          10%, 30%, 50%, 70%, 90% { transform: translateX(-10px); }
          20%, 40%, 60%, 80% { transform: translateX(10px); }
        }
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(10px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes slideUp {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-float {
          animation: float 3s infinite ease-in-out;
        }
        .animate-shake {
          animation: shake 0.5s ease-in-out;
        }
        .animate-fade-in {
          animation: fadeIn 0.5s ease-out;
        }
        .animate-slide-up {
          animation: slideUp 0.5s ease-out forwards;
        }
      `}</style>
    </div>
  );
};

export default LoginPage;