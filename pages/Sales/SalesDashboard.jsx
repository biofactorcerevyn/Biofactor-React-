// src/pages/Sales/SalesDashboard.jsx
import React from 'react';
import {
  ShoppingCart,
  Target,
  TrendingUp,
  Users,
  DollarSign,
  Calendar,
  MapPin,
  PlusCircle,
  Filter,
  BarChart3,
  PieChart as PieChartIcon,
  AlertCircle,
  CheckCircle,
  Package,
  Truck
} from 'lucide-react';

// Mock data
const salesTrendData = [
  { name: 'Week 1', actual: 125, target: 120 },
  { name: 'Week 2', actual: 148, target: 130 },
  { name: 'Week 3', actual: 132, target: 140 },
  { name: 'Week 4', actual: 165, target: 150 },
];

const regionData = [
  { name: 'North', value: 35, color: '#0EA5E9' },
  { name: 'South', value: 28, color: '#10B981' },
  { name: 'East', value: 22, color: '#8B5CF6' },
  { name: 'West', value: 15, color: '#F59E0B' },
];

const productPerformance = [
  { name: 'Bio-Fertilizer', sales: 450, revenue: 125 },
  { name: 'Pesticide', sales: 380, revenue: 98 },
  { name: 'Growth Enhancer', sales: 290, revenue: 72 },
  { name: 'Soil Conditioner', sales: 210, revenue: 54 },
  { name: 'Micro Nutrients', sales: 180, revenue: 41 },
];

const dealerPerformance = [
  { name: 'Agri Solutions Ltd', region: 'North', orders: 156, value: '₹18.5L', status: 'active' },
  { name: 'Green Farms Corp', region: 'South', orders: 134, value: '₹15.2L', status: 'active' },
  { name: 'Harvest King', region: 'East', orders: 98, value: '₹11.8L', status: 'active' },
  { name: 'FarmTech India', region: 'West', orders: 87, value: '₹9.4L', status: 'warning' },
  { name: 'Bio Agro', region: 'North', orders: 72, value: '₹8.1L', status: 'active' },
  { name: 'Rural Solutions', region: 'South', orders: 65, value: '₹7.2L', status: 'inactive' },
];

const recentOrders = [
  { id: 'ORD-2024-1847', dealer: 'Agri Solutions Ltd', amount: '₹2.4L', items: 12, status: 'delivered' },
  { id: 'ORD-2024-1846', dealer: 'Green Farms Corp', amount: '₹1.8L', items: 8, status: 'shipped' },
  { id: 'ORD-2024-1845', dealer: 'Harvest King', amount: '₹3.2L', items: 15, status: 'processing' },
  { id: 'ORD-2024-1844', dealer: 'FarmTech India', amount: '₹1.5L', items: 6, status: 'pending' },
  { id: 'ORD-2024-1843', dealer: 'Bio Agro', amount: '₹2.1L', items: 10, status: 'delivered' },
];

// KPI Card Component
const KPICard = ({ title, value, change, changeLabel, icon: Icon, variant = 'default' }) => {
  const variantColors = {
    sales: { bg: 'bg-orange-100', text: 'text-orange-700', icon: 'bg-orange-500' },
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

// Data Table Component
const DataTable = ({ title, data, columns, onActionClick }) => {
  return (
    <div className="bg-white rounded-xl border border-gray-200 shadow-sm">
      <div className="p-5 border-b border-gray-200">
        <div className="flex items-center justify-between">
          <h3 className="text-lg font-semibold text-gray-900">{title}</h3>
          {onActionClick && (
            <button 
              onClick={onActionClick}
              className="text-sm text-blue-600 hover:text-blue-800 font-medium flex items-center gap-1"
            >
              View all →
            </button>
          )}
        </div>
      </div>
      <div className="overflow-x-auto">
        <table className="w-full">
          <thead>
            <tr className="bg-gray-50 border-b border-gray-200">
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
              <tr key={index} className="border-b border-gray-100 last:border-b-0 hover:bg-gray-50">
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
const StatusBadge = ({ status, label, dot = false }) => {
  const statusConfig = {
    success: { bg: 'bg-green-100', text: 'text-green-800', dot: 'bg-green-500' },
    warning: { bg: 'bg-yellow-100', text: 'text-yellow-800', dot: 'bg-yellow-500' },
    info: { bg: 'bg-blue-100', text: 'text-blue-800', dot: 'bg-blue-500' },
    pending: { bg: 'bg-gray-100', text: 'text-gray-800', dot: 'bg-gray-500' },
    error: { bg: 'bg-red-100', text: 'text-red-800', dot: 'bg-red-500' },
    default: { bg: 'bg-gray-100', text: 'text-gray-800', dot: 'bg-gray-500' }
  };

  const config = statusConfig[status] || statusConfig.default;

  return (
    <span className={`inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-medium ${config.bg} ${config.text}`}>
      {dot && <div className={`w-1.5 h-1.5 rounded-full ${config.dot}`}></div>}
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
const BarChart = ({ data, xAxisKey, height = 250, title = '' }) => {
  // For sales trend data
  if (data[0] && data[0].actual !== undefined) {
    const maxValue = Math.max(...data.flatMap(d => [d.actual, d.target])) * 1.2;
    
    return (
      <div className="relative" style={{ height: `${height}px` }}>
        {/* Y-axis labels */}
        <div className="absolute left-0 top-0 bottom-0 w-10 flex flex-col justify-between text-xs text-gray-500">
          {[200, 160, 120, 80, 40, 0].map((value) => (
            <div key={value} className="text-right pr-2">
              {value}
            </div>
          ))}
        </div>
        
        {/* Chart area */}
        <div className="ml-10 h-full flex items-end space-x-3">
          {data.map((item, index) => (
            <div key={index} className="flex-1 flex flex-col items-center">
              <div className="w-full flex justify-center space-x-1 mb-2">
                {/* Target bar */}
                <div 
                  className="w-3 bg-gray-300 rounded-t"
                  style={{ height: `${(item.target / maxValue) * 100}%` }}
                  title={`Target: ₹${item.target}L`}
                ></div>
                {/* Actual bar */}
                <div 
                  className="w-3 bg-blue-500 rounded-t"
                  style={{ height: `${(item.actual / maxValue) * 100}%` }}
                  title={`Actual: ₹${item.actual}L`}
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
            <div className="w-3 h-3 bg-gray-300 rounded"></div>
            <span className="text-xs text-gray-600">Target</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 bg-blue-500 rounded"></div>
            <span className="text-xs text-gray-600">Actual</span>
          </div>
        </div>
      </div>
    );
  }
  
  // For product performance data
  if (data[0] && data[0].sales !== undefined) {
    const maxSales = Math.max(...data.map(d => d.sales)) * 1.2;
    const maxRevenue = Math.max(...data.map(d => d.revenue)) * 1.2;
    
    return (
      <div className="relative" style={{ height: `${height}px` }}>
        {/* Y-axis labels */}
        <div className="absolute left-0 top-0 bottom-0 w-10 flex flex-col justify-between text-xs text-gray-500">
          {[500, 400, 300, 200, 100, 0].map((value) => (
            <div key={value} className="text-right pr-2">
              {value}
            </div>
          ))}
        </div>
        
        {/* Chart area */}
        <div className="ml-10 h-full flex items-end space-x-2">
          {data.map((item, index) => (
            <div key={index} className="flex-1 flex flex-col items-center">
              <div className="w-full flex justify-center space-x-1 mb-2">
                {/* Sales bar */}
                <div 
                  className="w-4 bg-blue-500 rounded-t"
                  style={{ height: `${(item.sales / maxSales) * 100}%` }}
                  title={`Sales: ${item.sales} units`}
                ></div>
                {/* Revenue bar */}
                <div 
                  className="w-4 bg-green-500 rounded-t"
                  style={{ height: `${(item.revenue / maxRevenue) * 100}%` }}
                  title={`Revenue: ₹${item.revenue}L`}
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
            <div className="w-3 h-3 bg-blue-500 rounded"></div>
            <span className="text-xs text-gray-600">Units Sold</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 bg-green-500 rounded"></div>
            <span className="text-xs text-gray-600">Revenue (₹L)</span>
          </div>
        </div>
      </div>
    );
  }
  
  // Default bar chart
  const maxValue = Math.max(...data.map(d => d.count || d.value)) * 1.2;
  
  return (
    <div className="relative" style={{ height: `${height}px` }}>
      <div className="ml-10 h-full flex items-end space-x-2">
        {data.map((item, index) => (
          <div key={index} className="flex-1 flex flex-col items-center">
            <div 
              className="w-8 bg-blue-500 rounded-t mb-2"
              style={{ height: `${((item.count || item.value) / maxValue) * 100}%` }}
              title={`${item[xAxisKey]}: ${item.count || item.value}`}
            ></div>
            <span className="text-xs text-gray-600">{item[xAxisKey]}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

// Pie Chart Component
const PieChart = ({ data, height = 250 }) => {
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
          <div className="text-lg font-bold text-gray-900">{total}%</div>
          <div className="text-xs text-gray-500">Total Distribution</div>
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
            <span className="text-gray-700 truncate">{item.name}</span>
            <span className="text-gray-500 ml-auto">{item.value}%</span>
          </div>
        ))}
      </div>
    </div>
  );
};

const SalesDashboard = () => {
  return (
    <div className="space-y-6 p-6 bg-gray-50 min-h-screen">
      {/* Page Header */}
      <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4">
        <div>
          <h1 className="text-2xl lg:text-3xl font-bold text-gray-900">
            Sales & Marketing Dashboard
          </h1>
          <p className="text-gray-600 mt-1">
            Track sales performance, dealer activities, and marketing campaigns
          </p>
        </div>
        <div className="flex items-center gap-3">
          <select className="px-4 py-2 rounded-lg border border-gray-300 bg-white text-sm focus:outline-none focus:ring-2 focus:ring-blue-500">
            <option>All Regions</option>
            <option>North</option>
            <option>South</option>
            <option>East</option>
            <option>West</option>
          </select>
          <button className="px-4 py-2 rounded-lg bg-orange-600 text-white text-sm font-medium hover:bg-orange-700 transition-colors flex items-center gap-2">
            <PlusCircle className="w-4 h-4" />
            New Order
          </button>
        </div>
      </div>

      {/* KPI Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        <KPICard
          title="MTD Sales"
          value="₹1.82 Cr"
          change={15.3}
          changeLabel="vs target"
          icon={DollarSign}
          variant="sales"
        />
        <KPICard
          title="Target Achievement"
          value="87%"
          change={5.2}
          changeLabel="vs last month"
          icon={Target}
          variant="sales"
        />
        <KPICard
          title="Order Volume"
          value="847"
          change={12.8}
          changeLabel="vs last month"
          icon={ShoppingCart}
          variant="sales"
        />
        <KPICard
          title="Avg Ticket Size"
          value="₹21.5K"
          change={-2.4}
          changeLabel="vs last month"
          icon={TrendingUp}
          variant="sales"
        />
      </div>

      {/* Secondary KPIs */}
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
        <div className="bg-white rounded-lg p-4 border border-gray-200">
          <div className="flex items-center justify-between mb-2">
            <Users className="w-5 h-5 text-orange-500" />
            <span className="text-xs text-green-600 font-medium">+8</span>
          </div>
          <p className="text-2xl font-bold text-gray-900">245</p>
          <p className="text-sm text-gray-600">Active Dealers</p>
        </div>
        <div className="bg-white rounded-lg p-4 border border-gray-200">
          <div className="flex items-center justify-between mb-2">
            <Calendar className="w-5 h-5 text-orange-500" />
            <span className="text-xs text-yellow-600 font-medium">12 pending</span>
          </div>
          <p className="text-2xl font-bold text-gray-900">38</p>
          <p className="text-sm text-gray-600">Field Activities</p>
        </div>
        <div className="bg-white rounded-lg p-4 border border-gray-200">
          <div className="flex items-center justify-between mb-2">
            <MapPin className="w-5 h-5 text-orange-500" />
            <span className="text-xs text-gray-500">4 zones</span>
          </div>
          <p className="text-2xl font-bold text-gray-900">12</p>
          <p className="text-sm text-gray-600">Active Regions</p>
        </div>
        <div className="bg-white rounded-lg p-4 border border-gray-200">
          <div className="flex items-center justify-between mb-2">
            <DollarSign className="w-5 h-5 text-red-500" />
            <span className="text-xs text-red-600 font-medium">Alert</span>
          </div>
          <p className="text-2xl font-bold text-gray-900">₹42L</p>
          <p className="text-sm text-gray-600">Outstanding</p>
        </div>
      </div>

      {/* Charts Row */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <ChartCard
          title="Weekly Sales Trend"
          subtitle="Actual vs Target (₹ in Lakhs)"
        >
          <BarChart
            data={salesTrendData}
            xAxisKey="name"
            height={250}
          />
        </ChartCard>
        
        <ChartCard
          title="Regional Distribution"
          subtitle="Sales by region %"
        >
          <PieChart
            data={regionData}
            height={250}
          />
        </ChartCard>
      </div>

      {/* Product Performance */}
      <ChartCard
        title="Product Category Performance"
        subtitle="Sales volume and revenue by product"
      >
        <BarChart
          data={productPerformance}
          xAxisKey="name"
          height={280}
          title="Product Performance"
        />
      </ChartCard>

      {/* Tables Row */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Dealer Performance */}
        <DataTable
          title="Top Dealers"
          data={dealerPerformance}
          columns={[
            { key: 'name', label: 'Dealer' },
            { key: 'region', label: 'Region' },
            { key: 'orders', label: 'Orders' },
            { key: 'value', label: 'Value' },
            {
              key: 'status',
              label: 'Status',
              render: (value) => (
                <StatusBadge
                  status={value === 'active' ? 'success' : value === 'warning' ? 'warning' : 'error'}
                  label={value.charAt(0).toUpperCase() + value.slice(1)}
                  dot
                />
              ),
            },
          ]}
          onActionClick={() => console.log('View all dealers')}
        />

        {/* Recent Orders */}
        <DataTable
          title="Recent Orders"
          data={recentOrders}
          columns={[
            { key: 'id', label: 'Order ID' },
            { key: 'dealer', label: 'Dealer' },
            { key: 'amount', label: 'Amount' },
            {
              key: 'status',
              label: 'Status',
              render: (value) => {
                const statusMap = {
                  delivered: { type: 'success', label: 'Delivered' },
                  shipped: { type: 'info', label: 'Shipped' },
                  processing: { type: 'warning', label: 'Processing' },
                  pending: { type: 'pending', label: 'Pending' },
                };
                const config = statusMap[value] || { type: 'default', label: value };
                return (
                  <StatusBadge
                    status={config.type}
                    label={config.label}
                    dot
                  />
                );
              },
            },
          ]}
          onActionClick={() => console.log('View all orders')}
        />
      </div>

      {/* Additional Sales Metrics */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-white rounded-xl border border-gray-200 p-5">
          <div className="flex items-center gap-2 mb-4">
            <TrendingUp className="w-5 h-5 text-gray-400" />
            <h3 className="text-lg font-semibold text-gray-900">Conversion Metrics</h3>
          </div>
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <span className="text-sm text-gray-600">Lead Conversion</span>
              <span className="text-lg font-bold text-green-700">28.4%</span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-sm text-gray-600">Dealer Retention</span>
              <span className="text-lg font-bold text-blue-700">94.8%</span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-sm text-gray-600">Sales Cycle</span>
              <span className="text-lg font-bold text-purple-700">21 days</span>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-xl border border-gray-200 p-5">
          <div className="flex items-center gap-2 mb-4">
            <BarChart3 className="w-5 h-5 text-gray-400" />
            <h3 className="text-lg font-semibold text-gray-900">Monthly Targets</h3>
          </div>
          <div className="space-y-3">
            <div>
              <div className="flex items-center justify-between mb-1">
                <span className="text-sm text-gray-600">Revenue Target</span>
                <span className="text-sm font-medium text-gray-900">87%</span>
              </div>
              <div className="w-full h-2 bg-gray-200 rounded-full overflow-hidden">
                <div className="h-full bg-green-500 rounded-full" style={{ width: '87%' }}></div>
              </div>
            </div>
            <div>
              <div className="flex items-center justify-between mb-1">
                <span className="text-sm text-gray-600">Volume Target</span>
                <span className="text-sm font-medium text-gray-900">92%</span>
              </div>
              <div className="w-full h-2 bg-gray-200 rounded-full overflow-hidden">
                <div className="h-full bg-blue-500 rounded-full" style={{ width: '92%' }}></div>
              </div>
            </div>
            <div>
              <div className="flex items-center justify-between mb-1">
                <span className="text-sm text-gray-600">Dealer Onboarding</span>
                <span className="text-sm font-medium text-gray-900">75%</span>
              </div>
              <div className="w-full h-2 bg-gray-200 rounded-full overflow-hidden">
                <div className="h-full bg-purple-500 rounded-full" style={{ width: '75%' }}></div>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-xl border border-gray-200 p-5">
          <div className="flex items-center gap-2 mb-4">
            <DollarSign className="w-5 h-5 text-gray-400" />
            <h3 className="text-lg font-semibold text-gray-900">Financial Health</h3>
          </div>
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <div>
                <span className="text-sm text-gray-600">Collection Ratio</span>
                <p className="text-xs text-gray-500">Last 30 days</p>
              </div>
              <span className="text-lg font-bold text-green-700">96.2%</span>
            </div>
            <div className="flex items-center justify-between">
              <div>
                <span className="text-sm text-gray-600">Discount Rate</span>
                <p className="text-xs text-gray-500">Average</p>
              </div>
              <span className="text-lg font-bold text-blue-700">8.5%</span>
            </div>
            <div className="flex items-center justify-between">
              <div>
                <span className="text-sm text-gray-600">Payment Days</span>
                <p className="text-xs text-gray-500">Average</p>
              </div>
              <span className="text-lg font-bold text-gray-900">45 days</span>
            </div>
          </div>
        </div>
      </div>

      {/* Top Products by Region */}
      <div className="bg-white rounded-xl border border-gray-200 p-5">
        <div className="flex items-center justify-between mb-4">
          <h3 className="text-lg font-semibold text-gray-900">Top Products by Region</h3>
          <button className="text-sm text-blue-600 hover:text-blue-800 font-medium">
            View details →
          </button>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {[
            { region: 'North', topProduct: 'Bio-Fertilizer Pro', sales: '₹42L', growth: '+18%' },
            { region: 'South', topProduct: 'Organic Pesticide', sales: '₹38L', growth: '+12%' },
            { region: 'East', topProduct: 'Growth Enhancer', sales: '₹28L', growth: '+22%' },
            { region: 'West', topProduct: 'Soil Conditioner', sales: '₹24L', growth: '+8%' },
          ].map((item, index) => (
            <div key={index} className="p-4 border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors">
              <div className="flex items-center gap-2 mb-3">
                <MapPin className="w-4 h-4 text-gray-400" />
                <span className="font-medium text-gray-900">{item.region}</span>
              </div>
              <div className="space-y-2">
                <p className="text-sm text-gray-600">Top Product</p>
                <p className="font-medium text-gray-900">{item.topProduct}</p>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-gray-600">Sales</span>
                  <span className="text-sm font-medium text-gray-900">{item.sales}</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-gray-600">Growth</span>
                  <span className={`text-sm font-medium ${item.growth.includes('+') ? 'text-green-600' : 'text-red-600'}`}>
                    {item.growth}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Sales Team Performance */}
      <div className="bg-white rounded-xl border border-gray-200 p-5">
        <div className="flex items-center justify-between mb-4">
          <h3 className="text-lg font-semibold text-gray-900">Sales Team Performance</h3>
          <button className="text-sm text-blue-600 hover:text-blue-800 font-medium">
            View all →
          </button>
        </div>
        <div className="space-y-4">
          {[
            { name: 'Rajesh Kumar', region: 'North', target: '₹45L', achievement: '108%', rank: 1 },
            { name: 'Priya Sharma', region: 'South', target: '₹42L', achievement: '95%', rank: 2 },
            { name: 'Amit Patel', region: 'East', target: '₹38L', achievement: '92%', rank: 3 },
            { name: 'Sneha Reddy', region: 'West', target: '₹35L', achievement: '88%', rank: 4 },
          ].map((member, index) => (
            <div key={index} className="p-4 border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-orange-100 flex items-center justify-center text-orange-600 font-medium">
                    {member.name.split(' ').map(n => n[0]).join('')}
                  </div>
                  <div>
                    <p className="font-medium text-gray-900">{member.name}</p>
                    <p className="text-sm text-gray-600">{member.region} Region</p>
                  </div>
                </div>
                <div className="text-right">
                  <div className="flex items-center gap-4">
                    <div>
                      <p className="text-sm text-gray-600">Target</p>
                      <p className="font-medium text-gray-900">{member.target}</p>
                    </div>
                    <div>
                      <p className="text-sm text-gray-600">Achievement</p>
                      <p className={`font-medium ${
                        parseInt(member.achievement) >= 100 ? 'text-green-700' : 'text-yellow-700'
                      }`}>
                        {member.achievement}
                      </p>
                    </div>
                    <div className="w-8 h-8 rounded-full bg-blue-100 flex items-center justify-center text-blue-600 font-medium">
                      #{member.rank}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SalesDashboard;