// src/pages/Overview/Overview.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import { useAuth } from '../../contexts/AuthContext';
import { 
  FiTrendingUp, 
  FiPackage, 
  FiMap, 
  FiCpu, 
  FiActivity, 
  FiDatabase, 
  FiUsers, 
  FiSettings,
  FiBarChart2,
  FiShield,
  FiTarget,
  FiLogOut,
  FiBell,
  FiUser,
  FiCalendar,
  FiChevronDown,
  FiHelpCircle
} from 'react-icons/fi';

const Overview = () => {
  const { user, logout, hasPermission } = useAuth();

  // Modules array with permissions
  const modules = [
    {
      title: 'Sales & Marketing',
      icon: FiTrendingUp,
      description: 'Track sales performance, dealer activities, and marketing campaigns',
      path: '/app/sales/dashboard',
      color: 'bg-blue-500',
      stats: { orders: '847', revenue: '₹1.82 Cr', target: '87%' },
      permission: 'sales'
    },
    {
      title: 'Warehouse & Logistics',
      icon: FiPackage,
      description: 'Monitor inventory levels, stock movements, and dispatch status',
      path: '/app/warehouse/dashboard',
      color: 'bg-green-500',
      stats: { skus: '1,247', value: '₹8.5 Cr', accuracy: '99.2%' },
      permission: 'warehouse'
    },
    {
      title: 'Field Operations',
      icon: FiMap,
      description: 'Track field visits, demos, farmer issues, and staff performance',
      path: '/app/field/dashboard',
      color: 'bg-purple-500',
      stats: { visits: '271', demos: '77', coverage: '72%' },
      permission: 'field'
    },
    {
      title: 'Manufacturing',
      icon: FiCpu,
      description: 'Monitor production plans, batch tracking, and machine health',
      path: '/app/manufacturing/batches',
      color: 'bg-orange-500',
      stats: { batches: '12', efficiency: '91.5%', output: '748 units' },
      permission: 'manufacturing'
    },
    {
      title: 'Quality Control',
      icon: FiShield,
      description: 'Monitor testing status, pass/fail rates, and quality deviations',
      path: '/app/qc',
      color: 'bg-red-500',
      stats: { passRate: '96.2%', tests: '165', pending: '15' },
      permission: 'quality'
    },
    {
      title: 'R&D',
      icon: FiActivity,
      description: 'Track research trials, innovation pipeline, and IP portfolio',
      path: '/app/rd/trials',
      color: 'bg-indigo-500',
      stats: { trials: '8', ideas: '12', patents: '8' },
      permission: 'rd'
    },
    {
      title: 'Finance',
      icon: FiDatabase,
      description: 'Track cash flow, receivables, invoices, and financial performance',
      path: '/app/finance',
      color: 'bg-cyan-500',
      stats: { revenue: '₹4.45 Cr', cashFlow: '+₹1.24 Cr', margin: '27.8%' },
      permission: 'finance'
    },
    {
      title: 'HR',
      icon: FiUsers,
      description: 'Track attendance, payroll, recruitment, and employee management',
      path: '/app/hr/directory',
      color: 'bg-pink-500',
      stats: { employees: '342', attendance: '94.2%', attrition: '4.8%' },
      permission: 'hr'
    },
    {
      title: 'Executive View',
      icon: FiBarChart2,
      description: 'Company-wide performance overview with strategic insights',
      path: '/app/executive',
      color: 'bg-teal-500',
      stats: { revenue: '₹4.2 Cr', profit: '₹1.24 Cr', growth: '+12.5%' },
      permission: 'executive'
    },
    {
      title: 'Admin & Compliance',
      icon: FiSettings,
      description: 'Manage assets, documents, licenses, and system administration',
      path: '/app/admin/dashboard',
      color: 'bg-gray-500',
      stats: { assets: '45', documents: '12', licenses: '8' },
      permission: 'admin'
    },
    {
      title: 'Notifications & Alerts',
      icon: FiBell,
      description: 'View system notifications, alerts, and important updates',
      path: '/app/notifications',
      color: 'bg-yellow-500',
      stats: { unread: '12', today: '7', urgent: '3' },
      permission: 'dashboard' // Always visible
    },
    {
      title: 'Help & Support',
      icon: FiHelpCircle,
      description: 'Access user guides, raise tickets, and contact support',
      path: '/app/support',
      color: 'bg-gray-500',
      stats: { tickets: '5', guides: '23', faqs: '47' },
      permission: 'dashboard' // Always visible
    }
  ];

  // Filter modules based on user permissions
  const authorizedModules = modules.filter(module => 
    module.permission === 'dashboard' || hasPermission(module.permission)
  );

  // Get module-based recent activity
  const getRecentActivity = () => {
    const baseActivities = [
      { 
        action: 'New order placed', 
        department: 'Sales', 
        details: 'ORD-2024-1847 - ₹2.4L from Agri Solutions Ltd', 
        time: '10 min ago',
        icon: '🛒',
        color: 'bg-blue-100 text-blue-600',
        permission: 'sales'
      },
      { 
        action: 'Batch completed', 
        department: 'Manufacturing', 
        details: 'BT-2024-156 - Bio-Fertilizer Pro (5000 kg)', 
        time: '25 min ago',
        icon: '🏭',
        color: 'bg-orange-100 text-orange-600',
        permission: 'manufacturing'
      },
      { 
        action: 'QC test passed', 
        department: 'Quality Control', 
        details: 'Batch #BT-2024-154 passed all chemical tests', 
        time: '1 hour ago',
        icon: '🔬',
        color: 'bg-red-100 text-red-600',
        permission: 'quality'
      },
      { 
        action: 'Field visit logged', 
        department: 'Field Ops', 
        details: 'Demo @Patil Farm - Cotton crop, 5 acres', 
        time: '2 hours ago',
        icon: '🌾',
        color: 'bg-purple-100 text-purple-600',
        permission: 'field'
      },
      { 
        action: 'Invoice generated', 
        department: 'Finance', 
        details: 'INV-2024-1892 - ₹1.8L - Payment due in 30 days', 
        time: '3 hours ago',
        icon: '💰',
        color: 'bg-cyan-100 text-cyan-600',
        permission: 'finance'
      },
    ];

    // Filter activities based on user permissions
    return baseActivities.filter(activity => 
      hasPermission(activity.permission)
    ).slice(0, 5); // Show top 5
  };

  const handleLogout = () => {
    if (window.confirm('Are you sure you want to logout?')) {
      logout();
    }
  };

  // Calculate stats based on authorized modules
  const getAuthorizedStats = () => {
    const authorizedModulesCount = authorizedModules.length;
    const totalModulesCount = modules.length;
    const permissionCount = user?.permissions?.length || 0;
    
    return {
      authorizedModulesCount,
      totalModulesCount,
      permissionCount
    };
  };

  const stats = getAuthorizedStats();
  const recentActivity = getRecentActivity();

  return (
    <div className="p-6 space-y-6 bg-gray-50 min-h-screen">
      {/* Header with User Info and Logout */}
      <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4">
        <div>
          <h1 className="text-2xl lg:text-3xl font-bold text-gray-900">Biofactor ERP Dashboard</h1>
          <p className="text-gray-600 mt-1">
            Welcome back, <span className="font-semibold text-green-700">{user?.name || 'User'}</span>! Access all departments from a single platform.
          </p>
          <div className="flex flex-wrap items-center gap-2 mt-2">
            <span className="px-2 py-1 bg-green-100 text-green-800 text-xs font-medium rounded-full">
              Role: {user?.role || 'User'}
            </span>
            <span className="px-2 py-1 bg-blue-100 text-blue-800 text-xs font-medium rounded-full">
              Email: {user?.email || 'user@biofactor.com'}
            </span>
            <span className="px-2 py-1 bg-purple-100 text-purple-800 text-xs font-medium rounded-full">
              Modules: {stats.authorizedModulesCount}/{stats.totalModulesCount}
            </span>
            <span className="px-2 py-1 bg-amber-100 text-amber-800 text-xs font-medium rounded-full">
              Permissions: {stats.permissionCount}
            </span>
          </div>
        </div>
        
        <div className="flex items-center gap-3">
          {/* Notifications */}
          <Link
            to="/app/notifications"
            className="relative p-2 rounded-full bg-white border border-gray-200 hover:bg-gray-50 transition-colors"
          >
            <FiBell className="w-5 h-5 text-gray-600" />
            <span className="absolute -top-1 -right-1 h-3 w-3 rounded-full bg-red-500 border-2 border-white"></span>
          </Link>
          
          {/* Calendar */}
          <div className="hidden md:flex items-center gap-2 px-3 py-2 bg-white border border-gray-200 rounded-lg">
            <FiCalendar className="w-4 h-4 text-gray-500" />
            <span className="text-sm text-gray-700">Today, {new Date().toLocaleDateString('en-IN', { 
              day: 'numeric',
              month: 'short',
              year: 'numeric'
            })}</span>
          </div>
          
          {/* User Profile Dropdown */}
          <div className="relative group">
            <button className="flex items-center gap-3 px-3 py-2 bg-white border border-gray-200 rounded-full hover:bg-gray-50 transition-colors">
              <div className="w-8 h-8 rounded-full bg-gradient-to-r from-green-500 to-emerald-500 flex items-center justify-center text-white font-semibold">
                {(user?.name || 'BF')[0].toUpperCase()}
              </div>
              <div className="hidden md:block text-left">
                <p className="text-sm font-semibold text-gray-900">
                  {user?.name || 'Biofactor User'}
                </p>
                <p className="text-xs text-gray-500">{user?.role || 'Executive'}</p>
              </div>
              <FiChevronDown className="text-gray-500" />
            </button>
            
            {/* Dropdown Menu */}
            <div className="absolute right-0 mt-2 w-48 bg-white rounded-lg shadow-lg border border-gray-200 invisible group-hover:visible opacity-0 group-hover:opacity-100 transition-all duration-200 z-10">
              <div className="p-3 border-b border-gray-100">
                <p className="text-sm font-medium text-gray-900">{user?.name}</p>
                <p className="text-xs text-gray-500 truncate">{user?.email}</p>
              </div>
              
              <div className="py-1">
                <Link
                  to="/app/dashboard"
                  className="flex items-center gap-2 px-3 py-2 text-sm text-gray-700 hover:bg-gray-50 transition-colors"
                >
                  <FiUser className="w-4 h-4" />
                  My Profile
                </Link>
                {hasPermission('admin') && (
                  <Link
                    to="/app/admin/dashboard"
                    className="flex items-center gap-2 px-3 py-2 text-sm text-gray-700 hover:bg-gray-50 transition-colors"
                  >
                    <FiSettings className="w-4 h-4" />
                    Admin Settings
                  </Link>
                )}
                <Link
                  to="/app/support"
                  className="flex items-center gap-2 px-3 py-2 text-sm text-gray-700 hover:bg-gray-50 transition-colors"
                >
                  <FiHelpCircle className="w-4 h-4" />
                  Help & Support
                </Link>
                <button
                  onClick={handleLogout}
                  className="w-full flex items-center gap-2 px-3 py-2 text-sm text-red-600 hover:bg-red-50 transition-colors"
                >
                  <FiLogOut className="w-4 h-4" />
                  Logout
                </button>
              </div>
            </div>
          </div>
          
          {/* Logout Button */}
          <button
            onClick={handleLogout}
            className="flex items-center gap-2 px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700 transition-colors"
          >
            <FiLogOut className="w-4 h-4" />
            <span className="hidden md:inline">Logout</span>
          </button>
        </div>
      </div>

      {/* Quick Stats */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        <div className="bg-white rounded-xl border border-gray-200 p-5 hover:shadow-md transition-shadow">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-lg bg-blue-100 flex items-center justify-center">
              <FiTrendingUp className="w-5 h-5 text-blue-600" />
            </div>
            <div>
              <p className="text-sm text-gray-600">Authorized Modules</p>
              <p className="text-xl font-bold text-gray-900">{stats.authorizedModulesCount}</p>
              <p className="text-xs text-gray-600 mt-1">of {stats.totalModulesCount} total</p>
            </div>
          </div>
        </div>
        
        <div className="bg-white rounded-xl border border-gray-200 p-5 hover:shadow-md transition-shadow">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-lg bg-green-100 flex items-center justify-center">
              <FiPackage className="w-5 h-5 text-green-600" />
            </div>
            <div>
              <p className="text-sm text-gray-600">Active Orders</p>
              <p className="text-xl font-bold text-gray-900">847</p>
              <p className="text-xs text-green-600 mt-1">↑ 8.2% vs last month</p>
            </div>
          </div>
        </div>
        
        <div className="bg-white rounded-xl border border-gray-200 p-5 hover:shadow-md transition-shadow">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-lg bg-purple-100 flex items-center justify-center">
              <FiMap className="w-5 h-5 text-purple-600" />
            </div>
            <div>
              <p className="text-sm text-gray-600">Field Visits</p>
              <p className="text-xl font-bold text-gray-900">271</p>
              <p className="text-xs text-green-600 mt-1">↑ 15.2% vs last month</p>
            </div>
          </div>
        </div>
        
        <div className="bg-white rounded-xl border border-gray-200 p-5 hover:shadow-md transition-shadow">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-lg bg-orange-100 flex items-center justify-center">
              <FiTarget className="w-5 h-5 text-orange-600" />
            </div>
            <div>
              <p className="text-sm text-gray-600">Target Achievement</p>
              <p className="text-xl font-bold text-gray-900">87%</p>
              <p className="text-xs text-yellow-600 mt-1">↓ 3.2% vs target</p>
            </div>
          </div>
        </div>
      </div>

      {/* Department Modules Grid */}
      <div>
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-xl font-semibold text-gray-900">Your Authorized Dashboards</h2>
          <div className="text-sm text-gray-600">
            {authorizedModules.length} of {modules.length} modules available
          </div>
        </div>
        
        {authorizedModules.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {authorizedModules.map((module, index) => {
              const Icon = module.icon;
              return (
                <Link
                  key={index}
                  to={module.path}
                  className="bg-white rounded-xl border border-gray-200 p-5 shadow-sm hover:shadow-lg transition-all duration-300 hover:border-blue-300 hover:-translate-y-1"
                >
                  <div className="flex items-start justify-between mb-4">
                    <div className={`w-12 h-12 rounded-lg ${module.color} flex items-center justify-center`}>
                      <Icon className="w-6 h-6 text-white" />
                    </div>
                    <div className="flex flex-col items-end gap-1">
                      <span className={`px-2 py-1 text-xs font-medium rounded-full ${
                        module.permission === 'dashboard' 
                          ? 'bg-gray-100 text-gray-700' 
                          : 'bg-blue-100 text-blue-700'
                      }`}>
                        {module.permission === 'dashboard' ? 'General Access' : module.permission.toUpperCase()}
                      </span>
                      <div className="flex gap-1 flex-wrap justify-end">
                        {Object.entries(module.stats).map(([key, value], idx) => (
                          <span 
                            key={idx} 
                            className="px-2 py-0.5 bg-gray-50 text-gray-600 text-xs rounded-full"
                          >
                            {key}: {value}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                  
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">
                    {module.title}
                  </h3>
                  <p className="text-gray-600 text-sm mb-4">
                    {module.description}
                  </p>
                  
                  <div className="flex items-center justify-between mt-4 pt-4 border-t border-gray-100">
                    <span className="text-blue-600 text-sm font-medium hover:text-blue-800 flex items-center gap-1">
                      Access Dashboard
                      <FiChevronDown className="w-4 h-4 transform rotate-270" />
                    </span>
                    <div className="text-xs text-gray-500">
                      Click to explore
                    </div>
                  </div>
                </Link>
              );
            })}
          </div>
        ) : (
          // Empty state when no modules are authorized
          <div className="bg-white rounded-xl border border-gray-200 p-8 text-center">
            <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-gray-100 flex items-center justify-center">
              <FiHelpCircle className="w-8 h-8 text-gray-400" />
            </div>
            <h3 className="text-lg font-semibold text-gray-900 mb-2">
              No Modules Authorized
            </h3>
            <p className="text-gray-600 mb-4 max-w-md mx-auto">
              You don't have permission to access any department modules. Please contact your system administrator to request access.
            </p>
            <div className="flex gap-3 justify-center">
              <Link
                to="/app/support"
                className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors text-sm"
              >
                <FiHelpCircle className="inline w-4 h-4 mr-1" />
                Contact Support
              </Link>
              <button
                onClick={() => window.location.reload()}
                className="px-4 py-2 bg-gray-200 text-gray-800 rounded-lg hover:bg-gray-300 transition-colors text-sm"
              >
                Refresh Page
              </button>
            </div>
          </div>
        )}
      </div>

      {/* Recent Activity */}
      <div className="bg-white rounded-xl border border-gray-200 p-5 hover:shadow-md transition-shadow">
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-xl font-semibold text-gray-900">Recent Activity</h2>
          <button className="text-sm text-blue-600 hover:text-blue-800 font-medium">
            View all activity →
          </button>
        </div>
        {recentActivity.length > 0 ? (
          <div className="space-y-3">
            {recentActivity.map((activity, index) => (
              <div 
                key={index} 
                className="flex items-center gap-4 p-3 rounded-lg hover:bg-gray-50 transition-colors border border-gray-100"
              >
                <div className={`w-10 h-10 rounded-full ${activity.color} flex items-center justify-center text-lg`}>
                  {activity.icon}
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <p className="font-medium text-gray-900">{activity.action}</p>
                      <span className={`px-2 py-1 text-xs font-medium rounded-full ${activity.color}`}>
                        {activity.department}
                      </span>
                    </div>
                    <span className="text-xs text-gray-500 whitespace-nowrap">{activity.time}</span>
                  </div>
                  <p className="text-sm text-gray-600 truncate">{activity.details}</p>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="text-center py-4 text-gray-500">
            No recent activity available for your authorized modules.
          </div>
        )}
      </div>

      {/* Footer Stats */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        <div className="bg-white rounded-xl border border-gray-200 p-4 text-center">
          <p className="text-2xl font-bold text-gray-900">{stats.authorizedModulesCount}</p>
          <p className="text-sm text-gray-600">Authorized Modules</p>
        </div>
        <div className="bg-white rounded-xl border border-gray-200 p-4 text-center">
          <p className="text-2xl font-bold text-gray-900">{stats.permissionCount}</p>
          <p className="text-sm text-gray-600">Total Permissions</p>
        </div>
        <div className="bg-white rounded-xl border border-gray-200 p-4 text-center">
          <p className="text-2xl font-bold text-gray-900">94.2%</p>
          <p className="text-sm text-gray-600">System Uptime</p>
        </div>
        <div className="bg-white rounded-xl border border-gray-200 p-4 text-center">
          <p className="text-2xl font-bold text-gray-900">8.5 Cr</p>
          <p className="text-sm text-gray-600">Inventory Value</p>
        </div>
      </div>

      {/* Quick Actions Footer */}
      <div className="flex flex-wrap gap-3 pt-4 border-t border-gray-200">
        {hasPermission('executive') && (
          <button className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors text-sm">
            Generate Report
          </button>
        )}
        {hasPermission('admin') && (
          <button className="px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors text-sm">
            Export Data
          </button>
        )}
        {hasPermission('executive') && (
          <button className="px-4 py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition-colors text-sm">
            View Analytics
          </button>
        )}
        <Link
          to="/app/support"
          className="px-4 py-2 bg-gray-200 text-gray-800 rounded-lg hover:bg-gray-300 transition-colors text-sm"
        >
          Help & Support
        </Link>
      </div>
    </div>
  );
};

export default Overview;