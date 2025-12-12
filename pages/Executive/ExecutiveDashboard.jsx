// src/pages/Executive/ExecutiveDashboard.jsx
import React from 'react';
import { 
  TrendingUp,
  DollarSign,
  Package,
  Users,
  Factory,
  Warehouse,
  FlaskConical,
  MapPin,
  Microscope,
  AlertTriangle,
  Download,
  Calendar,
  BarChart3,
  PieChart,
  FileText,
  CheckCircle,
  XCircle,
  Info
} from 'lucide-react';

// Mock data
const revenueData = [
  { month: 'Jan', actual: 45, target: 50 },
  { month: 'Feb', actual: 52, target: 55 },
  { month: 'Mar', actual: 61, target: 60 },
  { month: 'Apr', actual: 58, target: 65 },
  { month: 'May', actual: 72, target: 70 },
  { month: 'Jun', actual: 68, target: 75 },
];

const departmentPerformance = [
  { name: 'Sales', value: 87, color: '#0EA5E9' },
  { name: 'Manufacturing', value: 92, color: '#8B5CF6' },
  { name: 'QC', value: 96, color: '#10B981' },
  { name: 'Warehouse', value: 78, color: '#F59E0B' },
  { name: 'Finance', value: 85, color: '#06B6D4' },
];

const alerts = [
  { id: 1, type: 'warning', department: 'Warehouse', message: 'Low stock alert: Product SKU-4521', time: '10 min ago' },
  { id: 2, type: 'error', department: 'QC', message: 'Batch #BT-2024-089 failed quality test', time: '25 min ago' },
  { id: 3, type: 'info', department: 'Sales', message: 'New dealer registration pending approval', time: '1 hour ago' },
  { id: 4, type: 'success', department: 'Manufacturing', message: 'Production target achieved for Q2', time: '2 hours ago' },
];

const topProducts = [
  { product: 'Bio-Fertilizer Pro', revenue: '₹12.5L', units: 2450, growth: 15 },
  { product: 'Organic Pesticide X', revenue: '₹9.8L', units: 1890, growth: 8 },
  { product: 'Growth Enhancer Plus', revenue: '₹7.2L', units: 1650, growth: 22 },
  { product: 'Soil Conditioner', revenue: '₹5.4L', units: 1200, growth: -3 },
  { product: 'Micro Nutrients Mix', revenue: '₹4.1L', units: 980, growth: 12 },
];

// Simple KPI Card Component
const KPICard = ({ title, value, change, changeLabel, icon: Icon, variant = 'default' }) => {
  const variantColors = {
    finance: { bg: 'bg-blue-100', text: 'text-blue-700', icon: 'bg-blue-500' },
    sales: { bg: 'bg-green-100', text: 'text-green-700', icon: 'bg-green-500' },
    manufacturing: { bg: 'bg-purple-100', text: 'text-purple-700', icon: 'bg-purple-500' },
    hr: { bg: 'bg-pink-100', text: 'text-pink-700', icon: 'bg-pink-500' },
    default: { bg: 'bg-gray-100', text: 'text-gray-700', icon: 'bg-gray-500' }
  };

  const colors = variantColors[variant] || variantColors.default;

  return (
    <div className="bg-white rounded-xl border border-gray-200 p-5 shadow-sm">
      <div className="flex items-start justify-between">
        <div>
          <p className="text-sm text-gray-600 font-medium">{title}</p>
          <p className="text-2xl font-bold text-gray-900 mt-2">{value}</p>
          <div className="flex items-center mt-2">
            {change !== undefined && (
              <>
                <span className={`text-sm font-medium ${change >= 0 ? 'text-green-600' : 'text-red-600'}`}>
                  {change >= 0 ? '+' : ''}{change}%
                </span>
                <span className="text-sm text-gray-500 ml-2">{changeLabel}</span>
              </>
            )}
          </div>
        </div>
        <div className={`w-12 h-12 rounded-lg ${colors.icon} flex items-center justify-center`}>
          <Icon className="w-6 h-6 text-white" />
        </div>
      </div>
    </div>
  );
};

// Simple Data Table Component
const DataTable = ({ title, data, columns }) => {
  return (
    <div className="bg-white rounded-xl border border-gray-200 p-5 shadow-sm">
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-lg font-semibold text-gray-900">{title}</h3>
        <button className="text-sm text-blue-600 hover:text-blue-800 font-medium">
          View all →
        </button>
      </div>
      <div className="overflow-x-auto">
        <table className="w-full">
          <thead>
            <tr className="border-b border-gray-200">
              {columns.map((column) => (
                <th 
                  key={column.key} 
                  className="text-left py-3 px-4 text-sm font-medium text-gray-700"
                >
                  {column.label}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {data.map((row, index) => (
              <tr key={index} className="border-b border-gray-100 last:border-b-0">
                {columns.map((column) => (
                  <td key={column.key} className="py-3 px-4">
                    {column.render ? column.render(row[column.key], row) : row[column.key]}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

// Status Badge Component
const StatusBadge = ({ status, label }) => {
  const statusConfig = {
    success: { bg: 'bg-green-100', text: 'text-green-800', icon: CheckCircle },
    error: { bg: 'bg-red-100', text: 'text-red-800', icon: XCircle },
    warning: { bg: 'bg-yellow-100', text: 'text-yellow-800', icon: AlertTriangle },
    info: { bg: 'bg-blue-100', text: 'text-blue-800', icon: Info },
  };

  const config = statusConfig[status] || statusConfig.info;
  const Icon = config.icon;

  return (
    <span className={`inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-medium ${config.bg} ${config.text}`}>
      <Icon className="w-3 h-3" />
      {label}
    </span>
  );
};

// Chart Card Component
const ChartCard = ({ title, subtitle, children }) => {
  return (
    <div className="bg-white rounded-xl border border-gray-200 p-5 shadow-sm">
      <div className="mb-4">
        <h3 className="text-lg font-semibold text-gray-900">{title}</h3>
        {subtitle && <p className="text-sm text-gray-500 mt-1">{subtitle}</p>}
      </div>
      {children}
    </div>
  );
};

// Bar Chart Component
const BarChart = ({ data, xAxisKey, dataKeys, height = 300 }) => {
  const maxValue = Math.max(...data.map(d => Math.max(d.actual, d.target))) * 1.2;
  
  return (
    <div className="relative" style={{ height: `${height}px` }}>
      {/* Y-axis labels */}
      <div className="absolute left-0 top-0 bottom-0 w-10 flex flex-col justify-between text-xs text-gray-500">
        {[100, 75, 50, 25, 0].map((value) => (
          <div key={value} className="text-right pr-2">
            {value}%
          </div>
        ))}
      </div>
      
      {/* Chart area */}
      <div className="ml-10 h-full flex items-end space-x-4">
        {data.map((item, index) => (
          <div key={index} className="flex-1 flex flex-col items-center">
            {/* Bars */}
            <div className="w-full flex justify-center space-x-1 mb-2">
              <div 
                className="w-4 bg-blue-200 rounded-t"
                style={{ height: `${(item.target / maxValue) * 100}%` }}
                title={`Target: ${item.target}%`}
              ></div>
              <div 
                className="w-4 bg-blue-600 rounded-t"
                style={{ height: `${(item.actual / maxValue) * 100}%` }}
                title={`Actual: ${item.actual}%`}
              ></div>
            </div>
            
            {/* X-axis label */}
            <span className="text-xs text-gray-600">{item[xAxisKey]}</span>
          </div>
        ))}
      </div>
      
      {/* Legend */}
      <div className="flex items-center justify-center gap-4 mt-4">
        <div className="flex items-center gap-2">
          <div className="w-3 h-3 bg-blue-200 rounded"></div>
          <span className="text-xs text-gray-600">Target</span>
        </div>
        <div className="flex items-center gap-2">
          <div className="w-3 h-3 bg-blue-600 rounded"></div>
          <span className="text-xs text-gray-600">Actual</span>
        </div>
      </div>
    </div>
  );
};

// Pie Chart Component
const PieChartComponent = ({ data, height = 300 }) => {
  const total = data.reduce((sum, item) => sum + item.value, 0);
  let cumulativePercent = 0;
  
  return (
    <div className="relative" style={{ height: `${height}px` }}>
      <svg width="100%" height="100%" viewBox="0 0 100 100">
        {data.map((item, index) => {
          const percent = (item.value / total) * 100;
          const startPercent = cumulativePercent;
          cumulativePercent += percent;
          
          const startAngle = (startPercent / 100) * 360;
          const endAngle = (cumulativePercent / 100) * 360;
          
          const x1 = 50 + 40 * Math.cos((startAngle - 90) * Math.PI / 180);
          const y1 = 50 + 40 * Math.sin((startAngle - 90) * Math.PI / 180);
          const x2 = 50 + 40 * Math.cos((endAngle - 90) * Math.PI / 180);
          const y2 = 50 + 40 * Math.sin((endAngle - 90) * Math.PI / 180);
          
          const largeArcFlag = percent > 50 ? 1 : 0;
          
          const pathData = [
            `M 50 50`,
            `L ${x1} ${y1}`,
            `A 40 40 0 ${largeArcFlag} 1 ${x2} ${y2}`,
            `L 50 50`
          ].join(' ');
          
          return (
            <path
              key={index}
              d={pathData}
              fill={item.color}
              stroke="white"
              strokeWidth="2"
            />
          );
        })}
      </svg>
      
      {/* Center text */}
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="text-center">
          <div className="text-lg font-bold text-gray-900">Performance</div>
          <div className="text-xs text-gray-500">Overall</div>
        </div>
      </div>
      
      {/* Legend */}
      <div className="absolute bottom-0 left-0 right-0 grid grid-cols-2 gap-2 text-xs">
        {data.map((item, index) => (
          <div key={index} className="flex items-center gap-2">
            <div 
              className="w-3 h-3 rounded" 
              style={{ backgroundColor: item.color }}
            ></div>
            <span className="text-gray-700">{item.name}</span>
            <span className="text-gray-500 ml-auto">{item.value}%</span>
          </div>
        ))}
      </div>
    </div>
  );
};

const ExecutiveDashboard = () => {
  return (
    <div className="space-y-6 p-6 bg-gray-50 min-h-screen">
      {/* Page Header */}
      <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4">
        <div>
          <h1 className="text-2xl lg:text-3xl font-bold text-gray-900">
            Executive Dashboard
          </h1>
          <p className="text-gray-600 mt-1">
            Company-wide performance overview for December 2024
          </p>
        </div>
        <div className="flex items-center gap-3">
          <div className="relative">
            <Calendar className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400" />
            <select className="pl-10 pr-4 py-2 rounded-lg border border-gray-300 bg-white text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent">
              <option>This Month</option>
              <option>Last Month</option>
              <option>This Quarter</option>
              <option>This Year</option>
            </select>
          </div>
          <button className="px-4 py-2 rounded-lg bg-blue-600 text-white text-sm font-medium hover:bg-blue-700 transition-colors flex items-center gap-2">
            <Download className="w-4 h-4" />
            Export Report
          </button>
        </div>
      </div>

      {/* KPI Cards - Company Wide */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        <KPICard
          title="Total Revenue (MTD)"
          value="₹4.2 Cr"
          change={12.5}
          changeLabel="vs last month"
          icon={DollarSign}
          variant="finance"
        />
        <KPICard
          title="Orders Processed"
          value="1,847"
          change={8.3}
          changeLabel="vs last month"
          icon={Package}
          variant="sales"
        />
        <KPICard
          title="Production Batches"
          value="156"
          change={-2.1}
          changeLabel="vs last month"
          icon={Factory}
          variant="manufacturing"
        />
        <KPICard
          title="Active Employees"
          value="342"
          change={3.2}
          changeLabel="vs last month"
          icon={Users}
          variant="hr"
        />
      </div>

      {/* Department KPIs */}
      <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-8 gap-3">
        {[
          { label: 'Sales Target', value: '87%', icon: TrendingUp, color: 'bg-blue-500' },
          { label: 'Production', value: '92%', icon: Factory, color: 'bg-purple-500' },
          { label: 'QC Pass Rate', value: '96%', icon: FlaskConical, color: 'bg-green-500' },
          { label: 'Stock Health', value: '78%', icon: Warehouse, color: 'bg-yellow-500' },
          { label: 'Cash Flow', value: '+₹1.2Cr', icon: DollarSign, color: 'bg-cyan-500' },
          { label: 'Attendance', value: '94%', icon: Users, color: 'bg-pink-500' },
          { label: 'Field Coverage', value: '72%', icon: MapPin, color: 'bg-orange-500' },
          { label: 'R&D Pipeline', value: '8 Active', icon: Microscope, color: 'bg-indigo-500' },
        ].map((item) => (
          <div key={item.label} className="bg-white rounded-lg p-3 border border-gray-200 shadow-sm">
            <div className={`w-8 h-8 rounded-lg ${item.color} flex items-center justify-center mb-2`}>
              <item.icon className="w-4 h-4 text-white" />
            </div>
            <p className="text-lg font-bold text-gray-900">{item.value}</p>
            <p className="text-xs text-gray-600">{item.label}</p>
          </div>
        ))}
      </div>

      {/* Charts Row */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <ChartCard
          title="Revenue vs Target"
          subtitle="Monthly performance (₹ in Lakhs)"
        >
          <BarChart
            data={revenueData}
            xAxisKey="month"
            height={250}
          />
        </ChartCard>
        
        <ChartCard
          title="Department Performance"
          subtitle="Current month achievement %"
        >
          <PieChartComponent
            data={departmentPerformance}
            height={250}
          />
        </ChartCard>
      </div>

      {/* Alerts & Top Products */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Critical Alerts */}
        <div className="bg-white rounded-xl border border-gray-200 p-5 shadow-sm">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-lg font-semibold text-gray-900">Critical Alerts</h3>
            <span className="text-sm text-gray-500">{alerts.length} active</span>
          </div>
          <div className="space-y-3">
            {alerts.map((alert) => (
              <div
                key={alert.id}
                className="flex items-start gap-3 p-3 rounded-lg bg-gray-50 hover:bg-gray-100 transition-colors"
              >
                <div className={`p-1.5 rounded-lg ${
                  alert.type === 'error' ? 'bg-red-100 text-red-600' :
                  alert.type === 'warning' ? 'bg-yellow-100 text-yellow-600' :
                  alert.type === 'success' ? 'bg-green-100 text-green-600' :
                  'bg-blue-100 text-blue-600'
                }`}>
                  <AlertTriangle className="w-4 h-4" />
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-2 mb-1">
                    <span className="text-xs font-medium text-gray-500">
                      {alert.department}
                    </span>
                    <span className="text-xs text-gray-300">•</span>
                    <span className="text-xs text-gray-500">{alert.time}</span>
                  </div>
                  <p className="text-sm text-gray-900">{alert.message}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Top Products */}
        <DataTable
          title="Top Performing Products"
          data={topProducts}
          columns={[
            { key: 'product', label: 'Product' },
            { key: 'revenue', label: 'Revenue' },
            { key: 'units', label: 'Units' },
            {
              key: 'growth',
              label: 'Growth',
              render: (value) => (
                <StatusBadge
                  status={value >= 0 ? 'success' : 'error'}
                  label={`${value >= 0 ? '+' : ''}${value}%`}
                />
              ),
            },
          ]}
        />
      </div>

      {/* Quick Actions */}
      <div className="bg-white rounded-xl border border-gray-200 p-5 shadow-sm">
        <h3 className="text-lg font-semibold text-gray-900 mb-4">Quick Actions</h3>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-3">
          {[
            { label: 'Sales Report', icon: TrendingUp },
            { label: 'Approve Orders', icon: Package },
            { label: 'Check Inventory', icon: Warehouse },
            { label: 'Review Batches', icon: Factory },
            { label: 'Finance Summary', icon: DollarSign },
            { label: 'HR Overview', icon: Users },
          ].map((action) => (
            <button
              key={action.label}
              className="flex flex-col items-center gap-2 p-4 rounded-lg border border-gray-200 hover:bg-blue-50 hover:border-blue-300 transition-all"
            >
              <action.icon className="w-6 h-6 text-blue-600" />
              <span className="text-sm text-center text-gray-700 font-medium">
                {action.label}
              </span>
            </button>
          ))}
        </div>
      </div>

      {/* Footer Stats */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        <div className="bg-white p-4 rounded-lg border border-gray-200">
          <div className="flex items-center gap-2">
            <BarChart3 className="w-5 h-5 text-gray-400" />
            <span className="text-sm font-medium text-gray-600">Avg. Order Value</span>
          </div>
          <p className="text-xl font-bold text-gray-900 mt-2">₹15,200</p>
          <p className="text-xs text-green-600 mt-1">+8% vs last month</p>
        </div>
        
        <div className="bg-white p-4 rounded-lg border border-gray-200">
          <div className="flex items-center gap-2">
            <FileText className="w-5 h-5 text-gray-400" />
            <span className="text-sm font-medium text-gray-600">Pending Approvals</span>
          </div>
          <p className="text-xl font-bold text-gray-900 mt-2">12</p>
          <p className="text-xs text-red-600 mt-1">3 urgent</p>
        </div>
        
        <div className="bg-white p-4 rounded-lg border border-gray-200">
          <div className="flex items-center gap-2">
            <FlaskConical className="w-5 h-5 text-gray-400" />
            <span className="text-sm font-medium text-gray-600">QC Fail Rate</span>
          </div>
          <p className="text-xl font-bold text-gray-900 mt-2">2.4%</p>
          <p className="text-xs text-green-600 mt-1">-0.3% improved</p>
        </div>
        
        <div className="bg-white p-4 rounded-lg border border-gray-200">
          <div className="flex items-center gap-2">
            <Package className="w-5 h-5 text-gray-400" />
            <span className="text-sm font-medium text-gray-600">On-Time Delivery</span>
          </div>
          <p className="text-xl font-bold text-gray-900 mt-2">94.2%</p>
          <p className="text-xs text-green-600 mt-1">+2.1% improved</p>
        </div>
      </div>
    </div>
  );
};

export default ExecutiveDashboard;