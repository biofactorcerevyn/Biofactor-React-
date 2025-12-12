// src/components/layout/Topbar.jsx
import React, { useState, useEffect, useRef } from "react";
import { 
  FiBell, 
  FiSearch, 
  FiChevronDown, 
  FiUser, 
  FiSettings, 
  FiHelpCircle, 
  FiLogOut,
  FiMail,
  FiCalendar,
  FiFilter,
  FiSun,
  FiMoon,
  FiMessageSquare,
  FiGlobe,
  FiActivity,
  FiTrendingUp,
  FiX
} from "react-icons/fi";
import { useAuth } from "./../contexts/AuthContext";

const Topbar = () => {
  const { user, logout } = useAuth();
  const [showSearch, setShowSearch] = useState(false);
  const [showNotifications, setShowNotifications] = useState(false);
  const [showProfileMenu, setShowProfileMenu] = useState(false);
  const [darkMode, setDarkMode] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [showQuickActions, setShowQuickActions] = useState(false);
  const searchRef = useRef(null);
  const notificationRef = useRef(null);
  const profileRef = useRef(null);
  const actionsRef = useRef(null);

  // Close dropdowns when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (notificationRef.current && !notificationRef.current.contains(event.target)) {
        setShowNotifications(false);
      }
      if (profileRef.current && !profileRef.current.contains(event.target)) {
        setShowProfileMenu(false);
      }
      if (actionsRef.current && !actionsRef.current.contains(event.target)) {
        setShowQuickActions(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  // Close search on escape key
  useEffect(() => {
    const handleEscape = (e) => {
      if (e.key === 'Escape') {
        setShowSearch(false);
        setSearchQuery("");
      }
    };
    window.addEventListener('keydown', handleEscape);
    return () => window.removeEventListener('keydown', handleEscape);
  }, []);

  const handleLogout = () => {
    if (window.confirm('Are you sure you want to logout?')) {
      logout();
    }
    setShowProfileMenu(false);
  };

  const notifications = [
    { id: 1, title: "New Order Received", message: "Order #BF-2024-1847 from Agri Solutions", time: "10 min ago", unread: true, type: "order" },
    { id: 2, title: "Batch Completed", message: "Batch #BT-2024-156 ready for QC", time: "25 min ago", unread: true, type: "manufacturing" },
    { id: 3, title: "Payment Received", message: "₹2,45,000 received from Green Agro", time: "1 hour ago", unread: false, type: "finance" },
    { id: 4, title: "Field Visit Scheduled", message: "Visit scheduled for Patil Farms tomorrow", time: "2 hours ago", unread: false, type: "field" },
    { id: 5, title: "System Update", message: "Monthly maintenance scheduled for Sunday", time: "5 hours ago", unread: false, type: "system" },
  ];

  const quickActions = [
    { icon: FiTrendingUp, label: "New Order", color: "bg-blue-500", to: "/app/sales/new-order" },
    { icon: FiMessageSquare, label: "Send Message", color: "bg-green-500", to: "/app/communications" },
    { icon: FiCalendar, label: "Schedule", color: "bg-purple-500", to: "/app/calendar" },
    { icon: FiFilter, label: "Filter Data", color: "bg-orange-500", to: "/app/filters" },
  ];

  const unreadCount = notifications.filter(n => n.unread).length;

  // Mock search results
  const searchResults = searchQuery ? [
    { type: "Order", id: "BF-2024-1847", name: "Agri Solutions Ltd", status: "Processing" },
    { type: "Dealer", id: "DLR-0456", name: "Green Agro", location: "Pune" },
    { type: "Batch", id: "BT-2024-156", name: "Bio-Fertilizer Pro", status: "Completed" },
    { type: "Employee", id: "EMP-234", name: "Rahul Sharma", department: "Sales" },
  ] : [];

  return (
    <header className={`sticky top-0 z-50 ${darkMode ? 'bg-gray-900 text-white' : 'bg-white/95 backdrop-blur-md'} border-b ${darkMode ? 'border-gray-800' : 'border-gray-100'} transition-colors duration-200`}>
      <div className="px-4 lg:px-6 py-3">
        <div className="flex items-center justify-between">
          {/* Left Section - Logo & Mobile Menu Toggle */}
          <div className="flex items-center gap-4">
            {/* Mobile Search Button */}
            <button
              onClick={() => setShowSearch(!showSearch)}
              className="md:hidden p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
            >
              <FiSearch className="w-5 h-5 text-gray-600 dark:text-gray-300" />
            </button>
            
            {/* Logo/Brand */}
            <div className="hidden sm:flex items-center gap-2">
              <div className="w-8 h-8 rounded-lg bg-gradient-to-r from-green-500 to-emerald-500 flex items-center justify-center">
                <span className="text-white font-bold">BF</span>
              </div>
              <div>
                <h1 className="text-lg font-bold text-gray-900 dark:text-white">Biofactor ERP</h1>
                <p className="text-xs text-gray-500 dark:text-gray-400">Dashboard</p>
              </div>
            </div>
          </div>

          {/* Center Section - Search Bar (Desktop) */}
          <div className="hidden md:flex flex-1 max-w-2xl mx-4 lg:mx-8">
            <div className="relative w-full">
              <FiSearch className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search orders, dealers, batches, employees..."
                className="w-full pl-10 pr-4 py-2.5 rounded-xl border border-gray-200 dark:border-gray-700 dark:bg-gray-800 dark:text-white focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all"
              />
              {searchQuery && (
                <button
                  onClick={() => setSearchQuery("")}
                  className="absolute right-12 top-1/2 transform -translate-y-1/2 p-1 hover:bg-gray-100 dark:hover:bg-gray-700 rounded"
                >
                  <FiX className="w-4 h-4 text-gray-400" />
                </button>
              )}
              {searchQuery && (
                <div className="absolute top-full mt-2 w-full bg-white dark:bg-gray-800 rounded-xl shadow-2xl border border-gray-200 dark:border-gray-700 overflow-hidden">
                  <div className="py-2">
                    <div className="px-4 py-2 text-xs text-gray-500 dark:text-gray-400 font-semibold">
                      Search Results ({searchResults.length})
                    </div>
                    {searchResults.map((result, index) => (
                      <button
                        key={index}
                        className="w-full px-4 py-3 text-left hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors flex items-center gap-3 border-b border-gray-100 dark:border-gray-700 last:border-0"
                      >
                        <div className={`w-8 h-8 rounded-lg flex items-center justify-center ${
                          result.type === 'Order' ? 'bg-blue-100 dark:bg-blue-900' :
                          result.type === 'Dealer' ? 'bg-green-100 dark:bg-green-900' :
                          result.type === 'Batch' ? 'bg-orange-100 dark:bg-orange-900' :
                          'bg-purple-100 dark:bg-purple-900'
                        }`}>
                          <span className={`text-xs font-bold ${
                            result.type === 'Order' ? 'text-blue-600 dark:text-blue-300' :
                            result.type === 'Dealer' ? 'text-green-600 dark:text-green-300' :
                            result.type === 'Batch' ? 'text-orange-600 dark:text-orange-300' :
                            'text-purple-600 dark:text-purple-300'
                          }`}>
                            {result.type.charAt(0)}
                          </span>
                        </div>
                        <div className="flex-1">
                          <div className="flex items-center gap-2">
                            <span className="font-medium text-gray-900 dark:text-white">{result.name}</span>
                            <span className="text-xs px-2 py-0.5 rounded-full bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-300">
                              {result.type}
                            </span>
                          </div>
                          <p className="text-sm text-gray-500 dark:text-gray-400">ID: {result.id}</p>
                        </div>
                        <FiChevronDown className="w-4 h-4 text-gray-400 transform rotate-270" />
                      </button>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </div>

          {/* Right Section - Actions & Profile */}
          <div className="flex items-center gap-2 lg:gap-4">
            {/* Theme Toggle */}
            

            

            {/* Quick Actions */}
            <div className="relative" ref={actionsRef}>
              <button
                onClick={() => setShowQuickActions(!showQuickActions)}
                className="p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
                title="Quick Actions"
              >
                <FiActivity className="w-5 h-5 text-gray-600 dark:text-gray-300" />
              </button>
              {showQuickActions && (
                <div className="absolute right-0 mt-2 w-48 bg-white dark:bg-gray-800 rounded-xl shadow-2xl border border-gray-200 dark:border-gray-700 py-2 z-50">
                  <div className="px-4 py-2 text-xs text-gray-500 dark:text-gray-400 font-semibold border-b border-gray-100 dark:border-gray-700">
                    Quick Actions
                  </div>
                  {quickActions.map((action, index) => (
                    <button
                      key={index}
                      className="w-full px-4 py-3 text-left hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors flex items-center gap-3"
                    >
                      <div className={`w-8 h-8 rounded-lg ${action.color} flex items-center justify-center`}>
                        <action.icon className="w-4 h-4 text-white" />
                      </div>
                      <span className="font-medium text-gray-900 dark:text-white">{action.label}</span>
                    </button>
                  ))}
                </div>
              )}
            </div>

            {/* Notifications */}
            <div className="relative" ref={notificationRef}>
              <button
                onClick={() => setShowNotifications(!showNotifications)}
                className="relative p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
              >
                <FiBell className="w-5 h-5 text-gray-600 dark:text-gray-300" />
                {unreadCount > 0 && (
                  <span className="absolute -top-1 -right-1 w-5 h-5 rounded-full bg-red-500 text-white text-xs flex items-center justify-center font-bold animate-pulse">
                    {unreadCount}
                  </span>
                )}
              </button>
              
              {showNotifications && (
                <div className="absolute right-0 mt-2 w-80 sm:w-96 bg-white dark:bg-gray-800 rounded-xl shadow-2xl border border-gray-200 dark:border-gray-700 z-50">
                  <div className="p-4 border-b border-gray-100 dark:border-gray-700">
                    <div className="flex items-center justify-between">
                      <h3 className="font-bold text-gray-900 dark:text-white">Notifications</h3>
                      <span className="text-xs text-green-600 dark:text-green-400 bg-green-50 dark:bg-green-900/30 px-2 py-1 rounded-full">
                        {unreadCount} unread
                      </span>
                    </div>
                  </div>
                  <div className="max-h-96 overflow-y-auto">
                    {notifications.map((notification) => (
                      <div
                        key={notification.id}
                        className={`p-4 border-b border-gray-100 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors ${
                          notification.unread ? 'bg-blue-50/50 dark:bg-blue-900/20' : ''
                        }`}
                      >
                        <div className="flex items-start gap-3">
                          <div className={`w-10 h-10 rounded-lg flex items-center justify-center ${
                            notification.type === 'order' ? 'bg-blue-100 dark:bg-blue-900' :
                            notification.type === 'manufacturing' ? 'bg-orange-100 dark:bg-orange-900' :
                            notification.type === 'finance' ? 'bg-green-100 dark:bg-green-900' :
                            notification.type === 'field' ? 'bg-purple-100 dark:bg-purple-900' :
                            'bg-gray-100 dark:bg-gray-700'
                          }`}>
                            <FiBell className={`w-4 h-4 ${
                              notification.type === 'order' ? 'text-blue-600 dark:text-blue-300' :
                              notification.type === 'manufacturing' ? 'text-orange-600 dark:text-orange-300' :
                              notification.type === 'finance' ? 'text-green-600 dark:text-green-300' :
                              notification.type === 'field' ? 'text-purple-600 dark:text-purple-300' :
                              'text-gray-600 dark:text-gray-300'
                            }`} />
                          </div>
                          <div className="flex-1 min-w-0">
                            <div className="flex items-center justify-between">
                              <h4 className="font-semibold text-gray-900 dark:text-white">{notification.title}</h4>
                              {notification.unread && (
                                <span className="w-2 h-2 rounded-full bg-blue-500 flex-shrink-0" />
                              )}
                            </div>
                            <p className="text-sm text-gray-600 dark:text-gray-300 mt-1">{notification.message}</p>
                            <p className="text-xs text-gray-500 dark:text-gray-400 mt-2">{notification.time}</p>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                  <div className="p-3 border-t border-gray-100 dark:border-gray-700">
                    <button className="w-full py-2 text-center text-sm text-green-600 dark:text-green-400 hover:text-green-700 dark:hover:text-green-300 font-medium">
                      View all notifications →
                    </button>
                  </div>
                </div>
              )}
            </div>

            {/* Profile */}
            <div className="relative" ref={profileRef}>
              <button
                onClick={() => setShowProfileMenu(!showProfileMenu)}
                className="flex items-center gap-2 lg:gap-3 px-3 py-2 rounded-xl border border-gray-200 dark:border-gray-700 hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
              >
                <div className="w-9 h-9 rounded-full bg-gradient-to-r from-green-500 to-emerald-500 flex items-center justify-center text-white font-bold shadow-md">
                  {(user?.name || "BF")[0]}
                </div>
                <div className="hidden lg:block text-left">
                  <p className="text-sm font-semibold text-gray-900 dark:text-white truncate max-w-[120px]">
                    {user?.name || "Biofactor User"}
                  </p>
                  <p className="text-xs text-gray-500 dark:text-gray-400">{user?.role || "Executive"}</p>
                </div>
                <FiChevronDown className={`w-4 h-4 text-gray-500 dark:text-gray-400 transition-transform ${showProfileMenu ? 'rotate-180' : ''}`} />
              </button>

              {showProfileMenu && (
                <div className="absolute right-0 mt-2 w-64 bg-white dark:bg-gray-800 rounded-xl shadow-2xl border border-gray-200 dark:border-gray-700 z-50">
                  <div className="p-4 border-b border-gray-100 dark:border-gray-700">
                    <div className="flex items-center gap-3">
                      <div className="w-12 h-12 rounded-full bg-gradient-to-r from-green-500 to-emerald-500 flex items-center justify-center text-white font-bold text-lg">
                        {(user?.name || "BF")[0]}
                      </div>
                      <div>
                        <p className="font-bold text-gray-900 dark:text-white">{user?.name || "Biofactor User"}</p>
                        <p className="text-sm text-gray-500 dark:text-gray-400">{user?.email || "user@biofactor.com"}</p>
                        <p className="text-xs text-green-600 dark:text-green-400 mt-1 bg-green-50 dark:bg-green-900/30 px-2 py-0.5 rounded-full inline-block">
                          {user?.role || "Executive"}
                        </p>
                      </div>
                    </div>
                  </div>
                  
                  <div className="py-2">
                    <button className="w-full flex items-center gap-3 px-4 py-3 text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors">
                      <FiUser className="w-4 h-4" />
                      <span>My Profile</span>
                    </button>
                    <button className="w-full flex items-center gap-3 px-4 py-3 text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors">
                      <FiSettings className="w-4 h-4" />
                      <span>Account Settings</span>
                    </button>
                    <button className="w-full flex items-center gap-3 px-4 py-3 text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors">
                      <FiHelpCircle className="w-4 h-4" />
                      <span>Help & Support</span>
                    </button>
                    <div className="border-t border-gray-100 dark:border-gray-700 my-2" />
                    <button
                      onClick={handleLogout}
                      className="w-full flex items-center gap-3 px-4 py-3 text-red-600 dark:text-red-400 hover:bg-red-50 dark:hover:bg-red-900/30 transition-colors"
                    >
                      <FiLogOut className="w-4 h-4" />
                      <span>Logout</span>
                    </button>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Mobile Search Bar */}
        {showSearch && (
          <div className="mt-3 md:hidden">
            <div className="relative">
              <FiSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search..."
                className="w-full pl-10 pr-4 py-2.5 rounded-xl border border-gray-200 dark:border-gray-700 dark:bg-gray-800 dark:text-white focus:outline-none focus:ring-2 focus:ring-green-500"
                autoFocus
              />
              <button
                onClick={() => setShowSearch(false)}
                className="absolute right-3 top-1/2 transform -translate-y-1/2 p-1"
              >
                <FiX className="w-4 h-4 text-gray-400" />
              </button>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Topbar;