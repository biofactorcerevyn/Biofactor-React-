// src/components/layout/Sidebar.jsx
import React, { useState } from "react";
import { NavLink, useLocation } from "react-router-dom";
import { useAuth } from "./../contexts/AuthContext";
import {
  FiHome,
  FiTrendingUp,
  FiPackage,
  FiMap,
  FiActivity,
  FiUsers,
  FiSettings,
  FiCpu,
  FiDatabase,
  FiBarChart2,
  FiShield,
  FiMenu,
  FiX,
  FiLogOut,
  FiChevronRight,
  FiChevronLeft,
} from "react-icons/fi";

// Define all possible navigation items with their required permissions
const allNavItems = [
  { 
    label: "Dashboard", 
    to: "/app/dashboard", 
    icon: FiHome, 
    permission: "dashboard",
    color: "from-blue-500 to-cyan-500"
  },
  { 
    label: "Sales", 
    to: "/app/sales/dashboard", 
    icon: FiTrendingUp, 
    permission: "sales",
    color: "from-green-500 to-emerald-500"
  },
  { 
    label: "Field Ops", 
    to: "/app/field/dashboard", 
    icon: FiMap, 
    permission: "field",
    color: "from-purple-500 to-violet-500"
  },
  { 
    label: "Warehouse", 
    to: "/app/warehouse/dashboard", 
    icon: FiPackage, 
    permission: "warehouse",
    color: "from-amber-500 to-orange-500"
  },
  { 
    label: "Manufacturing", 
    to: "/app/manufacturing/batches", 
    icon: FiCpu, 
    permission: "manufacturing",
    color: "from-red-500 to-pink-500"
  },
  { 
    label: "Quality Control", 
    to: "/app/qc", 
    icon: FiShield, 
    permission: "qc",
    color: "from-rose-500 to-red-500"
  },
  { 
    label: "R&D", 
    to: "/app/rd/trials", 
    icon: FiActivity, 
    permission: "rd",
    color: "from-indigo-500 to-purple-500"
  },
  { 
    label: "Finance", 
    to: "/app/finance", 
    icon: FiDatabase, 
    permission: "finance",
    color: "from-cyan-500 to-blue-500"
  },
  { 
    label: "HR", 
    to: "/app/hr/directory", 
    icon: FiUsers, 
    permission: "hr",
    color: "from-pink-500 to-rose-500"
  },
  { 
    label: "Executive", 
    to: "/app/executive", 
    icon: FiBarChart2, 
    permission: "executive",
    color: "from-teal-500 to-emerald-500"
  },
  { 
    label: "Admin", 
    to: "/app/admin/dashboard", 
    icon: FiSettings, 
    permission: "admin",
    color: "from-gray-500 to-slate-500"
  },
];

const Sidebar = () => {
  const { hasPermission, user, logout } = useAuth();
  const location = useLocation();
  const [isMobileOpen, setIsMobileOpen] = useState(false);
  const [isCollapsed, setIsCollapsed] = useState(false);

  // Filter navigation items based on user permissions
  const navItems = allNavItems.filter(item => 
    item.permission === "dashboard" || hasPermission(item.permission)
  );

  const handleLogout = () => {
    if (window.confirm('Are you sure you want to logout?')) {
      logout();
    }
  };

  // Render the sidebar content
  const SidebarContent = () => (
    <>
      {/* Header */}
      <div className="px-4 py-6 border-b border-slate-200">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-xl bg-gradient-to-r from-green-500 to-emerald-500 flex items-center justify-center text-white font-bold shadow-md">
            {(user?.name || 'BF')[0]}
          </div>
          {!isCollapsed && (
            <div className="flex-1 min-w-0">
              <p className="text-sm font-semibold text-slate-900 truncate">{user?.name || 'User'}</p>
              <p className="text-xs text-slate-500 truncate">{user?.role || 'Role'}</p>
            </div>
          )}
          {!isCollapsed && (
            <button
              onClick={() => setIsCollapsed(true)}
              className="p-1 rounded hover:bg-slate-100 transition-colors"
            >
              <FiChevronLeft className="w-4 h-4 text-slate-600" />
            </button>
          )}
        </div>
      </div>

      {/* Navigation */}
      <nav className="flex-1 overflow-y-auto px-3 py-4 space-y-1">
        {navItems.map((item) => {
          const Icon = item.icon;
          const isActive = location.pathname === item.to;
          
          return (
            <NavLink
              key={item.label}
              to={item.to}
              onClick={() => setIsMobileOpen(false)}
              className={({ isActive }) =>
                `flex items-center gap-3 px-3 py-3 rounded-lg transition-all ${
                  isActive
                    ? `bg-gradient-to-r ${item.color} text-white shadow-md`
                    : "text-slate-700 hover:bg-slate-100"
                }`
              }
            >
              <div className={`w-8 h-8 rounded-lg flex items-center justify-center ${
                isActive ? "bg-white/20" : "bg-slate-100"
              }`}>
                <Icon className={`w-4 h-4 ${isActive ? "text-white" : "text-slate-600"}`} />
              </div>
              {!isCollapsed && (
                <span className="font-medium">{item.label}</span>
              )}
            </NavLink>
          );
        })}
      </nav>

      {/* Footer */}
      <div className="p-4 border-t border-slate-200">
        {!isCollapsed ? (
          <>
            <div className="mb-3">
              <p className="text-xs text-slate-500">Access Level</p>
              <div className="flex items-center gap-2 mt-1">
                <div className="flex-1 h-2 bg-slate-200 rounded-full overflow-hidden">
                  <div 
                    className="h-full bg-gradient-to-r from-green-500 to-emerald-500 rounded-full"
                    style={{ width: `${(navItems.length / allNavItems.length) * 100}%` }}
                  />
                </div>
                <span className="text-xs font-semibold text-slate-700">
                  {navItems.length}/{allNavItems.length}
                </span>
              </div>
            </div>
            <button
              onClick={handleLogout}
              className="w-full flex items-center gap-2 px-3 py-2 rounded-lg text-red-600 hover:bg-red-50 transition-colors"
            >
              <FiLogOut className="w-4 h-4" />
              <span className="font-medium">Logout</span>
            </button>
          </>
        ) : (
          <div className="flex flex-col items-center space-y-3">
            <button
              onClick={() => setIsCollapsed(false)}
              className="p-2 rounded-lg hover:bg-slate-100 transition-colors"
            >
              <FiChevronRight className="w-4 h-4 text-slate-600" />
            </button>
            <button
              onClick={handleLogout}
              className="p-2 rounded-lg text-red-600 hover:bg-red-50 transition-colors"
            >
              <FiLogOut className="w-4 h-4" />
            </button>
          </div>
        )}
      </div>
    </>
  );

  return (
    <>
      {/* Mobile Menu Button */}
      <button
        onClick={() => setIsMobileOpen(true)}
        className="lg:hidden fixed top-4 left-4 z-50 p-2 rounded-lg bg-white shadow-lg border border-slate-200"
      >
        <FiMenu className="w-5 h-5" />
      </button>

      {/* Mobile Sidebar Overlay */}
      {isMobileOpen && (
        <div
          className="lg:hidden fixed inset-0 bg-black bg-opacity-50 z-40 transition-opacity"
          onClick={() => setIsMobileOpen(false)}
        />
      )}

      {/* Sidebar Container */}
      <aside
        className={`
          fixed lg:sticky top-0 left-0 h-screen bg-white border-r border-slate-200 
          flex flex-col z-50 shadow-xl lg:shadow-none
          transition-all duration-300 ease-in-out
          ${isMobileOpen ? 'translate-x-0' : '-translate-x-full'}
          lg:translate-x-0
          ${isCollapsed ? 'w-20' : 'w-64'}
        `}
      >
        {/* Close button for mobile */}
        {isMobileOpen && (
          <button
            onClick={() => setIsMobileOpen(false)}
            className="lg:hidden absolute top-4 right-4 p-1 rounded hover:bg-slate-100"
          >
            <FiX className="w-5 h-5" />
          </button>
        )}

        <SidebarContent />
      </aside>

      {/* Expand button when collapsed on desktop */}
      {isCollapsed && !isMobileOpen && (
        <div className="hidden lg:block fixed left-20 top-1/2 transform -translate-y-1/2 z-40">
          <button
            onClick={() => setIsCollapsed(false)}
            className="p-2 rounded-r-lg bg-white border border-l-0 border-slate-200 shadow-md hover:bg-slate-50 transition-colors"
          >
            <FiChevronRight className="w-4 h-4 text-slate-600" />
          </button>
        </div>
      )}
    </>
  );
};

export default Sidebar;