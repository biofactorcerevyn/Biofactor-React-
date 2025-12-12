// src/pages/Warehouse/WarehouseDashboard.jsx
import React from 'react';
import {
  Warehouse,
  Package,
  TrendingUp,
  TrendingDown,
  Truck,
  AlertTriangle,
  ArrowUpRight,
  ArrowDownLeft,
  Boxes,
  Clock,
  DollarSign,
  MapPin,
  Scale,
  CheckCircle,
  XCircle,
  RefreshCw,
  Filter,
  Search,
  Download,
  PlusCircle,
  FileText,
  BarChart3,
  PieChart as PieChartIcon
} from 'lucide-react';

// Mock data
const stockMovementData = [
  { name: 'Mon', inward: 450, outward: 380 },
  { name: 'Tue', inward: 520, outward: 420 },
  { name: 'Wed', inward: 380, outward: 510 },
  { name: 'Thu', inward: 610, outward: 450 },
  { name: 'Fri', inward: 480, outward: 560 },
  { name: 'Sat', inward: 320, outward: 290 },
];

const warehouseCapacity = [
  { name: 'Main Warehouse', value: 72, color: '#0EA5E9' },
  { name: 'Cold Storage', value: 45, color: '#10B981' },
  { name: 'Raw Materials', value: 85, color: '#F59E0B' },
  { name: 'Finished Goods', value: 58, color: '#8B5CF6' },
];

const lowStockItems = [
  { sku: 'SKU-4521', product: 'Bio-Fertilizer Pro', current: 150, minimum: 500, status: 'critical', alert: 'Reorder Immediately' },
  { sku: 'SKU-3892', product: 'Growth Enhancer Plus', current: 280, minimum: 400, status: 'low', alert: 'Reorder Soon' },
  { sku: 'SKU-2741', product: 'Micro Nutrients Mix', current: 320, minimum: 450, status: 'low', alert: 'Monitor Closely' },
  { sku: 'SKU-1956', product: 'Soil Conditioner', current: 180, minimum: 350, status: 'critical', alert: 'Reorder Immediately' },
  { sku: 'SKU-7832', product: 'Organic Pesticide X', current: 420, minimum: 500, status: 'low', alert: 'Monitor Closely' },
];

const pendingDispatch = [
  { orderId: 'ORD-2024-1847', dealer: 'Agri Solutions Ltd', items: 12, value: '₹2.4L', eta: '05 Dec', status: 'ready', priority: 'High' },
  { orderId: 'ORD-2024-1846', dealer: 'Green Farms Corp', items: 8, value: '₹1.8L', eta: '05 Dec', status: 'packing', priority: 'Medium' },
  { orderId: 'ORD-2024-1845', dealer: 'Harvest King', items: 15, value: '₹3.2L', eta: '06 Dec', status: 'picking', priority: 'High' },
  { orderId: 'ORD-2024-1844', dealer: 'FarmTech India', items: 6, value: '₹1.5L', eta: '06 Dec', status: 'pending', priority: 'Low' },
  { orderId: 'ORD-2024-1843', dealer: 'Agro Growth Ltd', items: 10, value: '₹2.1L', eta: '07 Dec', status: 'ready', priority: 'Medium' },
];

const recentActivity = [
  { id: 'IN-2024-892', type: 'inward', product: 'Bio-Fertilizer Pro', qty: '2000 kg', source: 'Manufacturing', time: '2 hrs ago' },
  { id: 'OUT-2024-456', type: 'outward', product: 'Organic Pesticide X', qty: '500 L', dest: 'Agri Solutions', time: '3 hrs ago' },
  { id: 'TR-2024-123', type: 'transfer', product: 'Growth Enhancer Plus', qty: '800 kg', dest: 'Cold Storage', time: '5 hrs ago' },
  { id: 'IN-2024-891', type: 'inward', product: 'Soil Conditioner', qty: '1500 kg', source: 'Manufacturing', time: '6 hrs ago' },
  { id: 'OUT-2024-455', type: 'outward', product: 'Micro Nutrients Mix', qty: '350 kg', dest: 'Green Farms', time: '8 hrs ago' },
];

const warehouseStats = [
  { location: 'Main Warehouse', capacity: '85,000 sq.ft', utilization: '72%', manager: 'Rajesh Kumar', status: 'active' },
  { location: 'Cold Storage', capacity: '25,000 sq.ft', utilization: '45%', manager: 'Priya Sharma', status: 'active' },
  { location: 'Regional Hub 1', capacity: '40,000 sq.ft', utilization: '68%', manager: 'Vikram Singh', status: 'maintenance' },
  { location: 'Regional Hub 2', capacity: '35,000 sq.ft', utilization: '52%', manager: 'Anjali Patel', status: 'active' },
];

// KPI Card Component
const KPICard = ({ title, value, change, changeLabel, icon: Icon, variant = 'default' }) => {
  const variantColors = {
    warehouse: { bg: 'bg-blue-100', text: 'text-blue-700', icon: 'bg-blue-500' },
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
    error: { bg: 'bg-red-100', text: 'text-red-800', dot: 'bg-red-500' },
    info: { bg: 'bg-blue-100', text: 'text-blue-800', dot: 'bg-blue-500' },
    active: { bg: 'bg-green-100', text: 'text-green-800', dot: 'bg-green-500' },
    maintenance: { bg: 'bg-yellow-100', text: 'text-yellow-800', dot: 'bg-yellow-500' },
    ready: { bg: 'bg-green-100', text: 'text-green-800', dot: 'bg-green-500' },
    packing: { bg: 'bg-blue-100', text: 'text-blue-800', dot: 'bg-blue-500' },
    picking: { bg: 'bg-yellow-100', text: 'text-yellow-800', dot: 'bg-yellow-500' },
    pending: { bg: 'bg-gray-100', text: 'text-gray-800', dot: 'bg-gray-500' },
    critical: { bg: 'bg-red-100', text: 'text-red-800', dot: 'bg-red-500' },
    low: { bg: 'bg-yellow-100', text: 'text-yellow-800', dot: 'bg-yellow-500' },
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
const BarChart = ({ data, xAxisKey, height = 250, dataKeys = [] }) => {
  const maxValue = Math.max(...data.flatMap(d => dataKeys.map(key => d[key.value]))) * 1.2;
  
  return (
    <div className="relative" style={{ height: `${height}px` }}>
      {/* Y-axis labels */}
      <div className="absolute left-0 top-0 bottom-0 w-10 flex flex-col justify-between text-xs text-gray-500">
        {[600, 500, 400, 300, 200, 100, 0].map((value) => (
          <div key={value} className="text-right pr-2">
            {value}
          </div>
        ))}
      </div>
      
      {/* Chart area */}
      <div className="ml-10 h-full flex items-end space-x-4">
        {data.map((item, index) => (
          <div key={index} className="flex-1 flex flex-col items-center">
            {/* Bars */}
            <div className="flex items-end space-x-1 w-full justify-center">
              {dataKeys.map((key, keyIndex) => (
                <div 
                  key={keyIndex}
                  className="w-6 rounded-t mb-2"
                  style={{ 
                    height: `${(item[key.value] / maxValue) * 100}%`,
                    backgroundColor: key.color
                  }}
                  title={`${key.name}: ${item[key.value]}`}
                ></div>
              ))}
            </div>
            
            {/* X-axis label */}
            <span className="text-xs text-gray-600">{item[xAxisKey]}</span>
          </div>
        ))}
      </div>
      
      {/* Legend */}
      <div className="absolute bottom-0 right-0 flex gap-4 text-xs">
        {dataKeys.map((key, index) => (
          <div key={index} className="flex items-center gap-2">
            <div 
              className="w-3 h-3 rounded" 
              style={{ backgroundColor: key.color }}
            ></div>
            <span className="text-gray-700">{key.name}</span>
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
          <div className="text-xs text-gray-500">Avg Utilization</div>
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

const WarehouseDashboard = () => {
  return (
    <div className="space-y-6 p-6 bg-gray-50 min-h-screen">
      {/* Page Header */}
      <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4">
        <div>
          <h1 className="text-2xl lg:text-3xl font-bold text-gray-900">
            Warehouse & Logistics Dashboard
          </h1>
          <p className="text-gray-600 mt-1">
            Monitor inventory levels, stock movements, and dispatch status
          </p>
        </div>
        <div className="flex items-center gap-3">
          <select className="px-4 py-2 rounded-lg border border-gray-300 bg-white text-sm font-medium focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500">
            <option>All Warehouses</option>
            <option>Main Warehouse</option>
            <option>Cold Storage</option>
            <option>Raw Materials</option>
          </select>
          <button className="px-4 py-2 rounded-lg border border-gray-300 bg-white text-sm font-medium hover:bg-gray-50 transition-colors flex items-center gap-2">
            <FileText className="w-4 h-4" />
            View Reports
          </button>
          <button className="px-4 py-2 rounded-lg bg-blue-600 text-white text-sm font-medium hover:bg-blue-700 transition-colors flex items-center gap-2">
            <PlusCircle className="w-4 h-4" />
            New Inward
          </button>
        </div>
      </div>

      {/* KPI Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        <KPICard
          title="Total Stock Value"
          value="₹8.5 Cr"
          change={5.2}
          changeLabel="vs last month"
          icon={Warehouse}
          variant="warehouse"
        />
        <KPICard
          title="SKUs in Stock"
          value="1,247"
          change={3.8}
          changeLabel="new items"
          icon={Package}
          variant="warehouse"
        />
        <KPICard
          title="Inward (Today)"
          value="2,850 units"
          change={12.5}
          changeLabel="vs avg"
          icon={ArrowDownLeft}
          variant="warehouse"
        />
        <KPICard
          title="Outward (Today)"
          value="2,110 units"
          change={8.3}
          changeLabel="vs avg"
          icon={ArrowUpRight}
          variant="warehouse"
        />
      </div>

      {/* Alert Cards */}
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
        <div className="bg-red-50 border border-red-200 rounded-lg p-4">
          <AlertTriangle className="w-5 h-5 text-red-600 mb-2" />
          <p className="text-2xl font-bold text-gray-900">4</p>
          <p className="text-sm text-gray-600">Low Stock Alerts</p>
        </div>
        <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4">
          <Clock className="w-5 h-5 text-yellow-600 mb-2" />
          <p className="text-2xl font-bold text-gray-900">12</p>
          <p className="text-sm text-gray-600">Expiring Soon</p>
        </div>
        <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
          <Truck className="w-5 h-5 text-blue-600 mb-2" />
          <p className="text-2xl font-bold text-gray-900">28</p>
          <p className="text-sm text-gray-600">Pending Dispatch</p>
        </div>
        <div className="bg-green-50 border border-green-200 rounded-lg p-4">
          <CheckCircle className="w-5 h-5 text-green-600 mb-2" />
          <p className="text-2xl font-bold text-gray-900">94%</p>
          <p className="text-sm text-gray-600">Order Fulfillment</p>
        </div>
      </div>

      {/* Charts Row */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <ChartCard
          title="Stock Movement"
          subtitle="Daily inward vs outward (units)"
        >
          <BarChart
            data={stockMovementData}
            xAxisKey="name"
            height={250}
            dataKeys={[
              { value: 'inward', color: '#10B981', name: 'Inward' },
              { value: 'outward', color: '#F59E0B', name: 'Outward' },
            ]}
          />
        </ChartCard>
        
        <ChartCard
          title="Warehouse Capacity"
          subtitle="Current utilization %"
        >
          <PieChart
            data={warehouseCapacity}
            height={250}
          />
        </ChartCard>
      </div>

      {/* Low Stock Alert Table */}
      <DataTable
        title="Low Stock Alerts"
        data={lowStockItems}
        columns={[
          { key: 'sku', label: 'SKU' },
          { key: 'product', label: 'Product' },
          {
            key: 'current',
            label: 'Current Stock',
            render: (value, row) => (
              <div>
                <span className="font-medium">{value}</span>
                <div className="w-32 h-2 bg-gray-200 rounded-full overflow-hidden mt-1">
                  <div
                    className={`h-full ${row.status === 'critical' ? 'bg-red-500' : 'bg-yellow-500'} rounded-full`}
                    style={{ width: `${(value / row.minimum) * 100}%` }}
                  />
                </div>
              </div>
            ),
          },
          { key: 'minimum', label: 'Min Required' },
          {
            key: 'status',
            label: 'Status',
            render: (value) => (
              <StatusBadge
                status={value}
                label={value.charAt(0).toUpperCase() + value.slice(1)}
                dot
              />
            ),
          },
          { key: 'alert', label: 'Alert' },
        ]}
        onActionClick={() => console.log('View all low stock items')}
      />

      {/* Pending Dispatch Table */}
      <DataTable
        title="Pending Dispatch"
        data={pendingDispatch}
        columns={[
          { key: 'orderId', label: 'Order ID' },
          { key: 'dealer', label: 'Dealer' },
          { key: 'items', label: 'Items' },
          { key: 'value', label: 'Value' },
          {
            key: 'eta',
            label: 'ETA',
            render: (value) => (
              <div className="flex items-center gap-2">
                <Clock className="w-4 h-4 text-gray-400" />
                <span>{value}</span>
              </div>
            ),
          },
          {
            key: 'status',
            label: 'Status',
            render: (value) => (
              <StatusBadge
                status={value}
                label={value.charAt(0).toUpperCase() + value.slice(1)}
                dot
              />
            ),
          },
          {
            key: 'priority',
            label: 'Priority',
            render: (value) => {
              const priorityColors = {
                High: 'text-red-600 bg-red-50 border-red-200',
                Medium: 'text-yellow-600 bg-yellow-50 border-yellow-200',
                Low: 'text-green-600 bg-green-50 border-green-200'
              };
              return (
                <span className={`px-2 py-1 rounded text-xs font-medium border ${priorityColors[value] || 'text-gray-600 bg-gray-50'}`}>
                  {value}
                </span>
              );
            },
          },
        ]}
        onActionClick={() => console.log('View all pending dispatches')}
      />

      {/* Warehouse Performance */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-white rounded-xl border border-gray-200 p-5">
          <div className="flex items-center gap-2 mb-4">
            <Truck className="w-5 h-5 text-gray-400" />
            <h3 className="text-lg font-semibold text-gray-900">Dispatch Metrics</h3>
          </div>
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <span className="text-sm text-gray-600">On-Time Dispatch</span>
              <span className="text-lg font-bold text-green-700">96%</span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-sm text-gray-600">Avg Processing Time</span>
              <span className="text-lg font-bold text-blue-700">3.2 hrs</span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-sm text-gray-600">Dispatch Accuracy</span>
              <span className="text-lg font-bold text-purple-700">99.2%</span>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-xl border border-gray-200 p-5">
          <div className="flex items-center gap-2 mb-4">
            <Scale className="w-5 h-5 text-gray-400" />
            <h3 className="text-lg font-semibold text-gray-900">Inventory Health</h3>
          </div>
          <div className="space-y-3">
            <div>
              <div className="flex items-center justify-between mb-1">
                <span className="text-sm text-gray-600">Turnover Ratio</span>
                <span className="text-sm font-medium text-gray-900">5.8x</span>
              </div>
              <div className="w-full h-2 bg-gray-200 rounded-full overflow-hidden">
                <div className="h-full bg-blue-500 rounded-full" style={{ width: '87%' }}></div>
              </div>
            </div>
            <div>
              <div className="flex items-center justify-between mb-1">
                <span className="text-sm text-gray-600">Storage Cost %</span>
                <span className="text-sm font-medium text-gray-900">8.5%</span>
              </div>
              <div className="w-full h-2 bg-gray-200 rounded-full overflow-hidden">
                <div className="h-full bg-green-500 rounded-full" style={{ width: '42%' }}></div>
              </div>
            </div>
            <div>
              <div className="flex items-center justify-between mb-1">
                <span className="text-sm text-gray-600">Damaged Goods</span>
                <span className="text-sm font-medium text-gray-900">0.8%</span>
              </div>
              <div className="w-full h-2 bg-gray-200 rounded-full overflow-hidden">
                <div className="h-full bg-purple-500 rounded-full" style={{ width: '8%' }}></div>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-xl border border-gray-200 p-5">
          <div className="flex items-center gap-2 mb-4">
            <DollarSign className="w-5 h-5 text-gray-400" />
            <h3 className="text-lg font-semibold text-gray-900">Cost Analysis</h3>
          </div>
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <div>
                <span className="text-sm text-gray-600">Storage Cost/Month</span>
                <p className="text-xs text-gray-500">Per sq.ft</p>
              </div>
              <span className="text-lg font-bold text-blue-700">₹45.5</span>
            </div>
            <div className="flex items-center justify-between">
              <div>
                <span className="text-sm text-gray-600">Handling Cost/Unit</span>
                <p className="text-xs text-gray-500">Processing</p>
              </div>
              <span className="text-lg font-bold text-green-700">₹12.8</span>
            </div>
            <div className="flex items-center justify-between">
              <div>
                <span className="text-sm text-gray-600">Transport Cost</span>
                <p className="text-xs text-gray-500">Per km</p>
              </div>
              <span className="text-lg font-bold text-gray-900">₹18.2</span>
            </div>
          </div>
        </div>
      </div>

      {/* Warehouse Locations */}
      <div className="bg-white rounded-xl border border-gray-200 p-5">
        <div className="flex items-center justify-between mb-4">
          <h3 className="text-lg font-semibold text-gray-900">Warehouse Locations</h3>
          <button className="text-sm text-blue-600 hover:text-blue-800 font-medium">
            View all →
          </button>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {warehouseStats.map((warehouse, index) => (
            <div key={index} className="p-4 border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors">
              <div className="flex items-start justify-between mb-3">
                <div className="flex items-center gap-2">
                  <MapPin className="w-5 h-5 text-blue-500" />
                  <span className="font-medium text-gray-900">{warehouse.location}</span>
                </div>
                <StatusBadge
                  status={warehouse.status}
                  label={warehouse.status.charAt(0).toUpperCase() + warehouse.status.slice(1)}
                  dot
                />
              </div>
              <div className="space-y-2">
                <div className="flex justify-between">
                  <span className="text-sm text-gray-600">Capacity</span>
                  <span className="text-sm font-medium">{warehouse.capacity}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-sm text-gray-600">Utilization</span>
                  <span className="text-sm font-medium">{warehouse.utilization}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-sm text-gray-600">Manager</span>
                  <span className="text-sm font-medium">{warehouse.manager}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Recent Activity */}
      <DataTable
        title="Recent Activity"
        data={recentActivity}
        columns={[
          { key: 'id', label: 'ID' },
          {
            key: 'type',
            label: 'Type',
            render: (value) => {
              const typeConfig = {
                inward: { icon: ArrowDownLeft, color: 'text-green-600', label: 'Inward' },
                outward: { icon: ArrowUpRight, color: 'text-yellow-600', label: 'Outward' },
                transfer: { icon: RefreshCw, color: 'text-blue-600', label: 'Transfer' },
              };
              const config = typeConfig[value] || { icon: Boxes, color: 'text-gray-600', label: value };
              return (
                <div className="flex items-center gap-2">
                  <config.icon className={`w-4 h-4 ${config.color}`} />
                  <span className="capitalize">{config.label}</span>
                </div>
              );
            },
          },
          { key: 'product', label: 'Product' },
          { key: 'qty', label: 'Quantity' },
          {
            key: 'source',
            label: 'Source/Destination',
            render: (value, row) => (
              <div>
                {row.type === 'inward' ? (
                  <div className="flex items-center gap-2">
                    <ArrowDownLeft className="w-3 h-3 text-green-500" />
                    <span>From: {value}</span>
                  </div>
                ) : (
                  <div className="flex items-center gap-2">
                    <ArrowUpRight className="w-3 h-3 text-yellow-500" />
                    <span>To: {row.dest}</span>
                  </div>
                )}
              </div>
            ),
          },
          { key: 'time', label: 'Time' },
        ]}
        onActionClick={() => console.log('View all activity')}
      />
    </div>
  );
};

export default WarehouseDashboard;