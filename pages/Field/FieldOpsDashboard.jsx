// src/pages/Field/FieldOpsDashboard.jsx
import React from 'react';
import {
  MapPin,
  Users,
  FileText,
  AlertTriangle,
  Calendar,
  CheckCircle,
  Target,
  TrendingUp,
  Download,
  Filter,
  PlusCircle,
  BarChart3,
  PieChart as PieChartIcon
} from 'lucide-react';

// Mock data
const visitData = [
  { name: 'Mon', visits: 45, demos: 12 },
  { name: 'Tue', visits: 52, demos: 15 },
  { name: 'Wed', visits: 48, demos: 10 },
  { name: 'Thu', visits: 56, demos: 18 },
  { name: 'Fri', visits: 42, demos: 14 },
  { name: 'Sat', visits: 28, demos: 8 },
];

const regionCoverage = [
  { name: 'North', value: 82, color: '#0EA5E9' },
  { name: 'South', value: 75, color: '#06B6D4' },
  { name: 'East', value: 68, color: '#8B5CF6' },
  { name: 'West', value: 58, color: '#F59E0B' },
];

const fieldStaff = [
  { name: 'Kiran Rao', region: 'South', visits: 28, demos: 8, conversions: 5, score: 92 },
  { name: 'Raj Verma', region: 'North', visits: 32, demos: 12, conversions: 7, score: 88 },
  { name: 'Sunita Devi', region: 'East', visits: 24, demos: 6, conversions: 4, score: 85 },
  { name: 'Manoj Singh', region: 'West', visits: 26, demos: 9, conversions: 5, score: 82 },
  { name: 'Anita Kumari', region: 'North', visits: 22, demos: 7, conversions: 3, score: 78 },
];

const recentVisits = [
  { id: 'V-2024-1245', officer: 'Kiran Rao', farmer: 'Ramesh Kumar', village: 'Vijayapura', purpose: 'Demo', status: 'completed' },
  { id: 'V-2024-1244', officer: 'Raj Verma', farmer: 'Suresh Patel', village: 'Amravati', purpose: 'Follow-up', status: 'completed' },
  { id: 'V-2024-1243', officer: 'Sunita Devi', farmer: 'Lakshmi Devi', village: 'Karimnagar', purpose: 'Issue Resolution', status: 'pending' },
  { id: 'V-2024-1242', officer: 'Manoj Singh', farmer: 'Prakash Joshi', village: 'Bhilwara', purpose: 'Demo', status: 'scheduled' },
];

const farmerIssues = [
  { id: 'ISS-2024-089', farmer: 'Ramesh Kumar', crop: 'Cotton', issue: 'Pest infestation after application', severity: 'high', status: 'open' },
  { id: 'ISS-2024-088', farmer: 'Suresh Patel', crop: 'Wheat', issue: 'Product not dissolving properly', severity: 'medium', status: 'investigating' },
  { id: 'ISS-2024-087', farmer: 'Lakshmi Devi', crop: 'Rice', issue: 'Delayed delivery of order', severity: 'low', status: 'resolved' },
  { id: 'ISS-2024-086', farmer: 'Prakash Joshi', crop: 'Soybean', issue: 'Yellowing of leaves post spray', severity: 'high', status: 'open' },
];

// KPI Card Component
const KPICard = ({ title, value, change, changeLabel, icon: Icon, variant = 'default' }) => {
  const variantColors = {
    fieldops: { bg: 'bg-green-100', text: 'text-green-700', icon: 'bg-green-500' },
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
const DataTable = ({ title, data, columns, searchable = true, onActionClick }) => {
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
const BarChart = ({ data, xAxisKey, dataKeys, height = 250 }) => {
  const maxValue = Math.max(...data.flatMap(d => [d.visits, d.demos])) * 1.2;
  
  return (
    <div className="relative" style={{ height: `${height}px` }}>
      {/* Y-axis labels */}
      <div className="absolute left-0 top-0 bottom-0 w-10 flex flex-col justify-between text-xs text-gray-500">
        {[60, 45, 30, 15, 0].map((value) => (
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
              {/* Visits bar */}
              <div 
                className="w-4 bg-orange-500 rounded-t"
                style={{ height: `${(item.visits / maxValue) * 100}%` }}
                title={`Visits: ${item.visits}`}
              ></div>
              {/* Demos bar */}
              <div 
                className="w-4 bg-teal-500 rounded-t"
                style={{ height: `${(item.demos / maxValue) * 100}%` }}
                title={`Demos: ${item.demos}`}
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
          <div className="w-3 h-3 bg-orange-500 rounded"></div>
          <span className="text-xs text-gray-600">Visits</span>
        </div>
        <div className="flex items-center gap-2">
          <div className="w-3 h-3 bg-teal-500 rounded"></div>
          <span className="text-xs text-gray-600">Demos</span>
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
          <div className="text-lg font-bold text-gray-900">Coverage</div>
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

const FieldOpsDashboard = () => {
  return (
    <div className="space-y-6 p-6 bg-gray-50 min-h-screen">
      {/* Page Header */}
      <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4">
        <div>
          <h1 className="text-2xl lg:text-3xl font-bold text-gray-900">
            Field Operations Dashboard
          </h1>
          <p className="text-gray-600 mt-1">
            Track field visits, demos, farmer issues, and staff performance
          </p>
        </div>
        <div className="flex items-center gap-3">
          <div className="relative">
            <Filter className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400" />
            <select className="pl-10 pr-4 py-2 rounded-lg border border-gray-300 bg-white text-sm focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent">
              <option>All Regions</option>
              <option>North</option>
              <option>South</option>
              <option>East</option>
              <option>West</option>
            </select>
          </div>
          <button className="px-4 py-2 rounded-lg bg-green-600 text-white text-sm font-medium hover:bg-green-700 transition-colors flex items-center gap-2">
            <PlusCircle className="w-4 h-4" />
            Log Visit
          </button>
        </div>
      </div>

      {/* KPI Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        <KPICard
          title="Field Visits (MTD)"
          value="271"
          change={15.2}
          changeLabel="vs last month"
          icon={MapPin}
          variant="fieldops"
        />
        <KPICard
          title="Demos Conducted"
          value="77"
          change={22.4}
          changeLabel="vs last month"
          icon={Target}
          variant="fieldops"
        />
        <KPICard
          title="Issues Reported"
          value="18"
          change={-12}
          changeLabel="reduced"
          icon={AlertTriangle}
          variant="fieldops"
        />
        <KPICard
          title="Coverage Rate"
          value="72%"
          change={5.8}
          changeLabel="improved"
          icon={TrendingUp}
          variant="fieldops"
        />
      </div>

      {/* Quick Stats */}
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
        <div className="bg-green-50 border border-green-200 rounded-lg p-4">
          <CheckCircle className="w-5 h-5 text-green-600 mb-2" />
          <p className="text-2xl font-bold text-gray-900">156</p>
          <p className="text-sm text-gray-600">Visits Completed</p>
        </div>
        <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
          <Calendar className="w-5 h-5 text-blue-600 mb-2" />
          <p className="text-2xl font-bold text-gray-900">45</p>
          <p className="text-sm text-gray-600">Scheduled Today</p>
        </div>
        <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4">
          <AlertTriangle className="w-5 h-5 text-yellow-600 mb-2" />
          <p className="text-2xl font-bold text-gray-900">8</p>
          <p className="text-sm text-gray-600">Open Issues</p>
        </div>
        <div className="bg-orange-50 border border-orange-200 rounded-lg p-4">
          <Users className="w-5 h-5 text-orange-600 mb-2" />
          <p className="text-2xl font-bold text-gray-900">28</p>
          <p className="text-sm text-gray-600">Active Field Staff</p>
        </div>
      </div>

      {/* Charts Row */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <ChartCard
          title="Weekly Activity"
          subtitle="Visits and demos this week"
        >
          <BarChart
            data={visitData}
            xAxisKey="name"
            height={250}
          />
        </ChartCard>
        
        <ChartCard
          title="Region Coverage"
          subtitle="Farmer coverage by region %"
        >
          <PieChart
            data={regionCoverage}
            height={250}
          />
        </ChartCard>
      </div>

      {/* Field Staff Performance */}
      <DataTable
        title="Field Staff Performance"
        data={fieldStaff}
        columns={[
          { key: 'name', label: 'Name' },
          { key: 'region', label: 'Region' },
          { key: 'visits', label: 'Visits' },
          { key: 'demos', label: 'Demos' },
          { key: 'conversions', label: 'Conversions' },
          {
            key: 'score',
            label: 'Score',
            render: (value, row) => (
              <div className="flex items-center gap-2">
                <div className="w-20 h-2 bg-gray-200 rounded-full overflow-hidden">
                  <div
                    className={`h-full rounded-full ${
                      value >= 85 ? 'bg-green-500' : value >= 70 ? 'bg-yellow-500' : 'bg-red-500'
                    }`}
                    style={{ width: `${value}%` }}
                  />
                </div>
                <span className="text-sm font-medium">{value}</span>
              </div>
            ),
          },
        ]}
        onActionClick={() => console.log('View all staff')}
      />

      {/* Tables Row */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Recent Visits */}
        <DataTable
          title="Recent Visits"
          data={recentVisits}
          columns={[
            { key: 'id', label: 'Visit ID' },
            { key: 'officer', label: 'Officer' },
            { key: 'farmer', label: 'Farmer' },
            { key: 'purpose', label: 'Purpose' },
            {
              key: 'status',
              label: 'Status',
              render: (value) => {
                const statusMap = {
                  completed: { type: 'success', label: 'Completed' },
                  pending: { type: 'warning', label: 'Pending' },
                  scheduled: { type: 'info', label: 'Scheduled' },
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
          onActionClick={() => console.log('View all visits')}
        />

        {/* Farmer Issues */}
        <DataTable
          title="Farmer Issues"
          data={farmerIssues}
          columns={[
            { key: 'id', label: 'Issue ID' },
            { key: 'farmer', label: 'Farmer' },
            { key: 'crop', label: 'Crop' },
            {
              key: 'severity',
              label: 'Severity',
              render: (value) => {
                const severityMap = {
                  high: { type: 'error', label: 'High' },
                  medium: { type: 'warning', label: 'Medium' },
                  low: { type: 'info', label: 'Low' },
                };
                const config = severityMap[value] || { type: 'default', label: value };
                return (
                  <StatusBadge
                    status={config.type}
                    label={config.label}
                  />
                );
              },
            },
            {
              key: 'status',
              label: 'Status',
              render: (value) => {
                const statusMap = {
                  open: { type: 'error', label: 'Open' },
                  investigating: { type: 'warning', label: 'Investigating' },
                  resolved: { type: 'success', label: 'Resolved' },
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
          onActionClick={() => console.log('View all issues')}
        />
      </div>

      {/* Additional Stats */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-white rounded-xl border border-gray-200 p-5">
          <div className="flex items-center gap-2 mb-4">
            <BarChart3 className="w-5 h-5 text-gray-400" />
            <h3 className="text-lg font-semibold text-gray-900">Demo Conversion Rate</h3>
          </div>
          <div className="flex items-center justify-between">
            <div>
              <p className="text-3xl font-bold text-gray-900">42%</p>
              <p className="text-sm text-green-600 mt-1">+5% vs last month</p>
            </div>
            <div className="w-20 h-20">
              <div className="relative w-full h-full">
                <svg className="w-full h-full" viewBox="0 0 36 36">
                  <path
                    className="text-gray-200"
                    strokeWidth="3"
                    fill="none"
                    d="M18 2.0845
                      a 15.9155 15.9155 0 0 1 0 31.831
                      a 15.9155 15.9155 0 0 1 0 -31.831"
                  />
                  <path
                    className="text-green-500"
                    strokeWidth="3"
                    strokeDasharray="42, 100"
                    strokeLinecap="round"
                    fill="none"
                    d="M18 2.0845
                      a 15.9155 15.9155 0 0 1 0 31.831
                      a 15.9155 15.9155 0 0 1 0 -31.831"
                  />
                </svg>
                <div className="absolute inset-0 flex items-center justify-center">
                  <span className="text-sm font-bold text-gray-900">42%</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-xl border border-gray-200 p-5">
          <div className="flex items-center gap-2 mb-4">
            <FileText className="w-5 h-5 text-gray-400" />
            <h3 className="text-lg font-semibold text-gray-900">Farmer Feedback</h3>
          </div>
          <div className="space-y-3">
            <div className="flex items-center justify-between">
              <span className="text-sm text-gray-600">Satisfaction Score</span>
              <span className="text-lg font-bold text-gray-900">4.2/5</span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-sm text-gray-600">Repeat Farmers</span>
              <span className="text-lg font-bold text-gray-900">65%</span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-sm text-gray-600">Avg Resolution Time</span>
              <span className="text-lg font-bold text-gray-900">2.4 days</span>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-xl border border-gray-200 p-5">
          <div className="flex items-center gap-2 mb-4">
            <MapPin className="w-5 h-5 text-gray-400" />
            <h3 className="text-lg font-semibold text-gray-900">Geo Coverage</h3>
          </div>
          <div className="space-y-4">
            <div>
              <div className="flex items-center justify-between mb-1">
                <span className="text-sm text-gray-600">Total Villages</span>
                <span className="text-sm font-medium text-gray-900">124</span>
              </div>
              <div className="w-full h-2 bg-gray-200 rounded-full overflow-hidden">
                <div className="h-full bg-blue-500 rounded-full" style={{ width: '78%' }}></div>
              </div>
            </div>
            <div>
              <div className="flex items-center justify-between mb-1">
                <span className="text-sm text-gray-600">Districts Covered</span>
                <span className="text-sm font-medium text-gray-900">28</span>
              </div>
              <div className="w-full h-2 bg-gray-200 rounded-full overflow-hidden">
                <div className="h-full bg-green-500 rounded-full" style={{ width: '64%' }}></div>
              </div>
            </div>
            <div>
              <div className="flex items-center justify-between mb-1">
                <span className="text-sm text-gray-600">Active Demo Plots</span>
                <span className="text-sm font-medium text-gray-900">18</span>
              </div>
              <div className="w-full h-2 bg-gray-200 rounded-full overflow-hidden">
                <div className="h-full bg-purple-500 rounded-full" style={{ width: '90%' }}></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FieldOpsDashboard;