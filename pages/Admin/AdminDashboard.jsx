// src/pages/Admin/AdminDashboard.jsx
import React from "react";
import StatCard from "../../components/common/StatCard";
import DataTable from "../../components/common/DataTable";
import { FiSettings, FiFileText, FiDatabase, FiShield, FiUsers, FiAward } from "react-icons/fi";

// Mock data since Redux store isn't configured
const mockData = {
  assets: [
    { id: "AST-01", name: "Forklift", location: "Warehouse - Mumbai", status: "Active" },
    { id: "AST-02", name: "QC Lab", location: "Plant - Pune", status: "Maintenance" },
    { id: "AST-03", name: "Delivery Truck", location: "Logistics", status: "Active" },
    { id: "AST-04", name: "Server Rack", location: "Data Center", status: "Active" },
    { id: "AST-05", name: "Granulator", location: "Manufacturing", status: "Active" },
  ],
  documents: [
    { id: "DOC-01", name: "ISO 9001 Certificate", expires: "2026-01-01", status: "Valid" },
    { id: "DOC-02", name: "FCO License", expires: "2025-08-15", status: "Valid" },
    { id: "DOC-03", name: "GST Registration", expires: "2025-12-31", status: "Valid" },
    { id: "DOC-04", name: "Export License", expires: "2025-06-30", status: "Expiring Soon" },
    { id: "DOC-05", name: "Patent - BIO-001", expires: "2030-03-15", status: "Active" },
  ],
  licenses: [
    { id: "LIC-01", name: "Manufacturing License", type: "State", expires: "2025-12-31" },
    { id: "LIC-02", name: "Pollution Control", type: "PCB", expires: "2025-09-30" },
    { id: "LIC-03", name: "Fire Safety", type: "Municipal", expires: "2025-11-30" },
  ]
};

const AdminDashboard = () => {
  return (
    <div className="space-y-6 p-6 bg-gray-50 min-h-screen">
      {/* Page Header */}
      <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4">
        <div>
          <h1 className="text-2xl lg:text-3xl font-bold text-gray-900">
            Admin & Compliance Dashboard
          </h1>
          <p className="text-gray-600 mt-1">
            Manage assets, documents, licenses, and system administration
          </p>
        </div>
        <div className="flex items-center gap-3">
          <button className="px-4 py-2 rounded-lg border border-gray-300 bg-white text-sm font-medium hover:bg-gray-50 transition-colors">
            View Reports
          </button>
          <button className="px-4 py-2 rounded-lg bg-blue-600 text-white text-sm font-medium hover:bg-blue-700 transition-colors">
            Add New Item
          </button>
        </div>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        <StatCard 
          label="Total Assets" 
          value={mockData.assets.length} 
          icon={FiDatabase}
          trend="+2 this month"
          trendColor="green"
        />
        <StatCard 
          label="Active Documents" 
          value={mockData.documents.length} 
          icon={FiFileText}
          trend="1 expiring soon"
          trendColor="yellow"
        />
        <StatCard 
          label="Licenses" 
          value={mockData.licenses.length} 
          icon={FiShield}
          trend="All valid"
          trendColor="green"
        />
        <StatCard 
          label="System Health" 
          value="98%" 
          icon={FiSettings}
          trend="Optimal"
          trendColor="green"
        />
      </div>

      {/* Assets Table */}
      <div className="bg-white rounded-xl border border-gray-200 p-5">
        <div className="flex items-center justify-between mb-4">
          <h3 className="text-lg font-semibold text-gray-900">Asset Register</h3>
          <button className="text-sm text-blue-600 hover:text-blue-800 font-medium">
            View all assets →
          </button>
        </div>
        <DataTable
          columns={[
            { key: "id", label: "Asset ID" },
            { key: "name", label: "Name" },
            { key: "location", label: "Location" },
            { 
              key: "status", 
              label: "Status",
              render: (value) => (
                <span className={`px-2 py-1 rounded text-xs font-medium ${
                  value === 'Active' ? 'bg-green-100 text-green-800' : 'bg-yellow-100 text-yellow-800'
                }`}>
                  {value}
                </span>
              )
            },
          ]}
          data={mockData.assets}
        />
      </div>

      {/* Documents Table */}
      <div className="bg-white rounded-xl border border-gray-200 p-5">
        <div className="flex items-center justify-between mb-4">
          <h3 className="text-lg font-semibold text-gray-900">Document Vault</h3>
          <button className="text-sm text-blue-600 hover:text-blue-800 font-medium">
            View all documents →
          </button>
        </div>
        <DataTable
          columns={[
            { key: "id", label: "Doc ID" },
            { key: "name", label: "Name" },
            { key: "expires", label: "Expiry Date" },
            { 
              key: "status", 
              label: "Status",
              render: (value) => (
                <span className={`px-2 py-1 rounded text-xs font-medium ${
                  value === 'Valid' ? 'bg-green-100 text-green-800' : 
                  value === 'Expiring Soon' ? 'bg-yellow-100 text-yellow-800' :
                  'bg-red-100 text-red-800'
                }`}>
                  {value}
                </span>
              )
            },
          ]}
          data={mockData.documents}
        />
      </div>

      {/* Licenses Grid */}
      <div className="bg-white rounded-xl border border-gray-200 p-5">
        <div className="flex items-center justify-between mb-4">
          <h3 className="text-lg font-semibold text-gray-900">Active Licenses</h3>
          <button className="text-sm text-blue-600 hover:text-blue-800 font-medium">
            Manage licenses →
          </button>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {mockData.licenses.map((license) => (
            <div key={license.id} className="p-4 border border-gray-200 rounded-lg hover:bg-gray-50">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-10 h-10 rounded-lg bg-blue-100 flex items-center justify-center">
                  <FiAward className="w-5 h-5 text-blue-600" />
                </div>
                <div>
                  <h4 className="font-medium text-gray-900">{license.name}</h4>
                  <p className="text-sm text-gray-600">{license.type}</p>
                </div>
              </div>
              <div className="flex items-center justify-between text-sm">
                <span className="text-gray-600">Expires:</span>
                <span className="font-medium">{license.expires}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;