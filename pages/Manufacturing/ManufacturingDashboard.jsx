// src/pages/Manufacturing/ManufacturingDashboard.jsx
import React from 'react';
import {
  Factory,
  Layers,
  Clock,
  AlertTriangle,
  Wrench,
  CheckCircle,
  PlusCircle,
  Calendar,
  TrendingUp,
  TrendingDown,
  BarChart3,
  PieChart as PieChartIcon
} from 'lucide-react';

// Mock data
const productionData = [
  { name: 'Mon', planned: 120, actual: 115 },
  { name: 'Tue', planned: 130, actual: 128 },
  { name: 'Wed', planned: 125, actual: 132 },
  { name: 'Thu', planned: 140, actual: 135 },
  { name: 'Fri', planned: 135, actual: 140 },
  { name: 'Sat', planned: 100, actual: 98 },
];

const batchStatusData = [
  { name: 'Completed', value: 45, color: '#10B981' },
  { name: 'In Progress', value: 28, color: '#0EA5E9' },
  { name: 'QC Pending', value: 15, color: '#F59E0B' },
  { name: 'On Hold', value: 12, color: '#EF4444' },
];

const batches = [
  { id: 'BT-2024-156', product: 'Bio-Fertilizer Pro', qty: '5000 kg', started: '02 Dec', eta: '05 Dec', status: 'in_progress' },
  { id: 'BT-2024-155', product: 'Organic Pesticide X', qty: '3000 L', started: '01 Dec', eta: '04 Dec', status: 'qc_pending' },
  { id: 'BT-2024-154', product: 'Growth Enhancer Plus', qty: '2500 kg', started: '30 Nov', eta: '03 Dec', status: 'completed' },
  { id: 'BT-2024-153', product: 'Soil Conditioner', qty: '4000 kg', started: '29 Nov', eta: '02 Dec', status: 'completed' },
  { id: 'BT-2024-152', product: 'Micro Nutrients Mix', qty: '1500 kg', started: '28 Nov', eta: '01 Dec', status: 'on_hold' },
];

const machines = [
  { id: 'M-001', name: 'Mixer Unit A', status: 'running', efficiency: 94, lastMaintenance: '15 Nov', nextMaintenance: '15 Dec' },
  { id: 'M-002', name: 'Granulator B', status: 'running', efficiency: 88, lastMaintenance: '20 Nov', nextMaintenance: '20 Dec' },
  { id: 'M-003', name: 'Dryer Unit C', status: 'maintenance', efficiency: 0, lastMaintenance: '05 Dec', nextMaintenance: '05 Jan' },
  { id: 'M-004', name: 'Packaging Line D', status: 'running', efficiency: 92, lastMaintenance: '25 Nov', nextMaintenance: '25 Dec' },
  { id: 'M-005', name: 'Quality Tester E', status: 'idle', efficiency: 0, lastMaintenance: '10 Nov', nextMaintenance: '10 Dec' },
];

// KPI Card Component
const KPICard = ({ title, value, change, changeLabel, icon: Icon, variant = 'default' }) => {
  const variantColors = {
    manufacturing: { bg: 'bg-purple-100', text: 'text-purple-700', icon: 'bg-purple-500' },
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
    error: { bg: 'bg-red-100', text: 'text-red-800', dot: 'bg-red-500' },
    pending: { bg: 'bg-gray-100', text: 'text-gray-800', dot: 'bg-gray-500' },
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
const BarChart = ({ data, xAxisKey, height = 250 }) => {
  const maxValue = Math.max(...data.flatMap(d => [d.planned, d.actual])) * 1.2;
  
  return (
    <div className="relative" style={{ height: `${height}px` }}>
      {/* Y-axis labels */}
      <div className="absolute left-0 top-0 bottom-0 w-10 flex flex-col justify-between text-xs text-gray-500">
        {[160, 120, 80, 40, 0].map((value) => (
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
              {/* Planned bar */}
              <div 
                className="w-4 bg-gray-300 rounded-t"
                style={{ height: `${(item.planned / maxValue) * 100}%` }}
                title={`Planned: ${item.planned}`}
              ></div>
              {/* Actual bar */}
              <div 
                className="w-4 bg-purple-500 rounded-t"
                style={{ height: `${(item.actual / maxValue) * 100}%` }}
                title={`Actual: ${item.actual}`}
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
          <span className="text-xs text-gray-600">Planned</span>
        </div>
        <div className="flex items-center gap-2">
          <div className="w-3 h-3 bg-purple-500 rounded"></div>
          <span className="text-xs text-gray-600">Actual</span>
        </div>
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
          <div className="text-lg font-bold text-gray-900">{total}</div>
          <div className="text-xs text-gray-500">Total Batches</div>
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
            <span className="text-gray-500 ml-auto">{item.value}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

const ManufacturingDashboard = () => {
  return (
    <div className="space-y-6 p-6 bg-gray-50 min-h-screen">
      {/* Page Header */}
      <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4">
        <div>
          <h1 className="text-2xl lg:text-3xl font-bold text-gray-900">
            Manufacturing Dashboard
          </h1>
          <p className="text-gray-600 mt-1">
            Monitor production plans, batch tracking, and machine health
          </p>
        </div>
        <div className="flex items-center gap-3">
          <button className="px-4 py-2 rounded-lg border border-gray-300 bg-white text-sm font-medium hover:bg-gray-50 transition-colors flex items-center gap-2">
            <Calendar className="w-4 h-4" />
            View Schedule
          </button>
          <button className="px-4 py-2 rounded-lg bg-purple-600 text-white text-sm font-medium hover:bg-purple-700 transition-colors flex items-center gap-2">
            <PlusCircle className="w-4 h-4" />
            New Batch
          </button>
        </div>
      </div>

      {/* KPI Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        <KPICard
          title="Production Today"
          value="748 units"
          change={8.2}
          changeLabel="vs plan"
          icon={Factory}
          variant="manufacturing"
        />
        <KPICard
          title="Active Batches"
          value="12"
          change={0}
          changeLabel="on track"
          icon={Layers}
          variant="manufacturing"
        />
        <KPICard
          title="Machine Efficiency"
          value="91.5%"
          change={2.3}
          changeLabel="vs last week"
          icon={Wrench}
          variant="manufacturing"
        />
        <KPICard
          title="QC Pending"
          value="5"
          change={-15}
          changeLabel="vs yesterday"
          icon={Clock}
          variant="manufacturing"
        />
      </div>

      {/* Status Cards Row */}
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
        <div className="bg-green-50 border border-green-200 rounded-lg p-4">
          <CheckCircle className="w-5 h-5 text-green-600 mb-2" />
          <p className="text-2xl font-bold text-gray-900">45</p>
          <p className="text-sm text-gray-600">Batches Completed</p>
        </div>
        <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
          <Factory className="w-5 h-5 text-blue-600 mb-2" />
          <p className="text-2xl font-bold text-gray-900">28</p>
          <p className="text-sm text-gray-600">In Progress</p>
        </div>
        <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4">
          <Clock className="w-5 h-5 text-yellow-600 mb-2" />
          <p className="text-2xl font-bold text-gray-900">15</p>
          <p className="text-sm text-gray-600">QC Pending</p>
        </div>
        <div className="bg-red-50 border border-red-200 rounded-lg p-4">
          <AlertTriangle className="w-5 h-5 text-red-600 mb-2" />
          <p className="text-2xl font-bold text-gray-900">12</p>
          <p className="text-sm text-gray-600">On Hold</p>
        </div>
      </div>

      {/* Charts Row */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <ChartCard
          title="Production Plan vs Actual"
          subtitle="Daily output this week"
        >
          <BarChart
            data={productionData}
            xAxisKey="name"
            height={250}
          />
        </ChartCard>
        
        <ChartCard
          title="Batch Status Distribution"
          subtitle="Current batch status breakdown"
        >
          <PieChart
            data={batchStatusData}
            height={250}
          />
        </ChartCard>
      </div>

      {/* Batch Tracking Table */}
      <DataTable
        title="Active Batches"
        data={batches}
        columns={[
          { key: 'id', label: 'Batch ID' },
          { key: 'product', label: 'Product' },
          { key: 'qty', label: 'Quantity' },
          { key: 'started', label: 'Started' },
          { key: 'eta', label: 'ETA' },
          {
            key: 'status',
            label: 'Status',
            render: (value) => {
              const statusConfig = {
                completed: { status: 'success', label: 'Completed' },
                in_progress: { status: 'info', label: 'In Progress' },
                qc_pending: { status: 'warning', label: 'QC Pending' },
                on_hold: { status: 'error', label: 'On Hold' },
              };
              const config = statusConfig[value] || { status: 'default', label: value };
              return (
                <StatusBadge
                  status={config.status}
                  label={config.label}
                  dot
                />
              );
            },
          },
        ]}
        onActionClick={() => console.log('View all batches')}
      />

      {/* Machine Health Table */}
      <DataTable
        title="Machine Health Summary"
        data={machines}
        columns={[
          { key: 'id', label: 'Machine ID' },
          { key: 'name', label: 'Name' },
          {
            key: 'status',
            label: 'Status',
            render: (value) => {
              const statusConfig = {
                running: { status: 'success', label: 'Running' },
                maintenance: { status: 'warning', label: 'Maintenance' },
                idle: { status: 'pending', label: 'Idle' },
              };
              const config = statusConfig[value] || { status: 'pending', label: value };
              return (
                <StatusBadge
                  status={config.status}
                  label={config.label}
                  dot
                />
              );
            },
          },
          {
            key: 'efficiency',
            label: 'Efficiency',
            render: (value) => (
              <div className="flex items-center gap-2">
                <div className="w-16 h-2 bg-gray-200 rounded-full overflow-hidden">
                  <div
                    className={`h-full rounded-full ${
                      value >= 90 ? 'bg-green-500' : value >= 70 ? 'bg-yellow-500' : 'bg-red-500'
                    }`}
                    style={{ width: `${value}%` }}
                  />
                </div>
                <span className="text-sm font-medium">{value > 0 ? `${value}%` : '-'}</span>
              </div>
            ),
          },
          { key: 'lastMaintenance', label: 'Last Maintenance' },
          { key: 'nextMaintenance', label: 'Next Maintenance' },
        ]}
        onActionClick={() => console.log('View all machines')}
      />

      {/* Additional Manufacturing Metrics */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-white rounded-xl border border-gray-200 p-5">
          <div className="flex items-center gap-2 mb-4">
            <TrendingUp className="w-5 h-5 text-gray-400" />
            <h3 className="text-lg font-semibold text-gray-900">Production Efficiency</h3>
          </div>
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <span className="text-sm text-gray-600">Overall Yield</span>
              <span className="text-lg font-bold text-green-700">96.2%</span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-sm text-gray-600">Wastage Rate</span>
              <span className="text-lg font-bold text-red-700">3.8%</span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-sm text-gray-600">First Pass Yield</span>
              <span className="text-lg font-bold text-blue-700">94.5%</span>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-xl border border-gray-200 p-5">
          <div className="flex items-center gap-2 mb-4">
            <BarChart3 className="w-5 h-5 text-gray-400" />
            <h3 className="text-lg font-semibold text-gray-900">Shift Performance</h3>
          </div>
          <div className="space-y-3">
            <div>
              <div className="flex items-center justify-between mb-1">
                <span className="text-sm text-gray-600">Morning Shift (6AM-2PM)</span>
                <span className="text-sm font-medium text-gray-900">102%</span>
              </div>
              <div className="w-full h-2 bg-gray-200 rounded-full overflow-hidden">
                <div className="h-full bg-green-500 rounded-full" style={{ width: '102%' }}></div>
              </div>
            </div>
            <div>
              <div className="flex items-center justify-between mb-1">
                <span className="text-sm text-gray-600">Evening Shift (2PM-10PM)</span>
                <span className="text-sm font-medium text-gray-900">98%</span>
              </div>
              <div className="w-full h-2 bg-gray-200 rounded-full overflow-hidden">
                <div className="h-full bg-blue-500 rounded-full" style={{ width: '98%' }}></div>
              </div>
            </div>
            <div>
              <div className="flex items-center justify-between mb-1">
                <span className="text-sm text-gray-600">Night Shift (10PM-6AM)</span>
                <span className="text-sm font-medium text-gray-900">95%</span>
              </div>
              <div className="w-full h-2 bg-gray-200 rounded-full overflow-hidden">
                <div className="h-full bg-purple-500 rounded-full" style={{ width: '95%' }}></div>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-xl border border-gray-200 p-5">
          <div className="flex items-center gap-2 mb-4">
            <AlertTriangle className="w-5 h-5 text-gray-400" />
            <h3 className="text-lg font-semibold text-gray-900">Quality Metrics</h3>
          </div>
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <div>
                <span className="text-sm text-gray-600">QC Pass Rate</span>
                <p className="text-xs text-gray-500">Last 30 days</p>
              </div>
              <span className="text-lg font-bold text-green-700">97.4%</span>
            </div>
            <div className="flex items-center justify-between">
              <div>
                <span className="text-sm text-gray-600">Average Downtime</span>
                <p className="text-xs text-gray-500">Daily average</p>
              </div>
              <span className="text-lg font-bold text-blue-700">45 min</span>
            </div>
            <div className="flex items-center justify-between">
              <div>
                <span className="text-sm text-gray-600">Safety Incidents</span>
                <p className="text-xs text-gray-500">Month to date</p>
              </div>
              <span className="text-lg font-bold text-gray-900">0</span>
            </div>
          </div>
        </div>
      </div>

      {/* Raw Material Status */}
      <div className="bg-white rounded-xl border border-gray-200 p-5">
        <div className="flex items-center justify-between mb-4">
          <h3 className="text-lg font-semibold text-gray-900">Raw Material Inventory</h3>
          <button className="text-sm text-blue-600 hover:text-blue-800 font-medium">
            View details →
          </button>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {[
            { material: 'NPK Blend', stock: '42.5 MT', min: '20 MT', status: 'good' },
            { material: 'Sulfur', stock: '18.2 MT', min: '10 MT', status: 'good' },
            { material: 'Zinc Sulfate', stock: '8.5 MT', min: '15 MT', status: 'warning' },
            { material: 'Organic Base', stock: '25.8 MT', min: '30 MT', status: 'critical' },
          ].map((item, index) => (
            <div key={index} className="p-4 border border-gray-200 rounded-lg">
              <div className="flex items-center justify-between mb-2">
                <span className="font-medium text-gray-900">{item.material}</span>
                <span className={`px-2 py-1 rounded text-xs font-medium ${
                  item.status === 'good' ? 'bg-green-100 text-green-800' :
                  item.status === 'warning' ? 'bg-yellow-100 text-yellow-800' :
                  'bg-red-100 text-red-800'
                }`}>
                  {item.status === 'good' ? 'Good' : item.status === 'warning' ? 'Low' : 'Critical'}
                </span>
              </div>
              <div className="space-y-2">
                <div>
                  <div className="flex items-center justify-between mb-1">
                    <span className="text-sm text-gray-600">Current Stock</span>
                    <span className="text-sm font-medium text-gray-900">{item.stock}</span>
                  </div>
                  <div className="w-full h-2 bg-gray-200 rounded-full overflow-hidden">
                    <div 
                      className={`h-full rounded-full ${
                        item.status === 'good' ? 'bg-green-500' :
                        item.status === 'warning' ? 'bg-yellow-500' :
                        'bg-red-500'
                      }`}
                      style={{ width: item.status === 'critical' ? '40%' : item.status === 'warning' ? '60%' : '85%' }}
                    ></div>
                  </div>
                </div>
                <p className="text-xs text-gray-500">Minimum required: {item.min}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ManufacturingDashboard;