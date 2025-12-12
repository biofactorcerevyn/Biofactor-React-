// src/pages/Finance/FinanceDashboard.jsx
import React from 'react';
import {
  DollarSign,
  TrendingUp,
  TrendingDown,
  CreditCard,
  FileText,
  PieChart as PieChartIcon,
  ArrowUpRight,
  ArrowDownRight,
  Download,
  Filter,
  Calendar,
  Wallet,
  BarChart3
} from 'lucide-react';

// Mock data
const revenueData = [
  { name: 'Jan', revenue: 42, expenses: 28 },
  { name: 'Feb', revenue: 48, expenses: 31 },
  { name: 'Mar', revenue: 55, expenses: 34 },
  { name: 'Apr', revenue: 51, expenses: 32 },
  { name: 'May', revenue: 62, expenses: 38 },
  { name: 'Jun', revenue: 58, expenses: 35 },
];

const expenseBreakdown = [
  { name: 'Raw Materials', value: 45, color: '#0EA5E9' },
  { name: 'Labor', value: 25, color: '#06B6D4' },
  { name: 'Operations', value: 15, color: '#8B5CF6' },
  { name: 'Marketing', value: 10, color: '#F59E0B' },
  { name: 'Others', value: 5, color: '#EC4899' },
];

const outstandingReceivables = [
  { dealer: 'Agri Solutions Ltd', amount: '₹12.5L', aging: '0-30 days', region: 'North', status: 'current' },
  { dealer: 'Green Farms Corp', amount: '₹8.2L', aging: '31-60 days', region: 'South', status: 'overdue' },
  { dealer: 'Harvest King', amount: '₹15.8L', aging: '61-90 days', region: 'East', status: 'critical' },
  { dealer: 'FarmTech India', amount: '₹5.4L', aging: '0-30 days', region: 'West', status: 'current' },
  { dealer: 'Bio Agro', amount: '₹9.1L', aging: '31-60 days', region: 'North', status: 'overdue' },
];

const recentInvoices = [
  { id: 'INV-2024-1892', dealer: 'Agri Solutions Ltd', amount: '₹2.4L', date: '03 Dec', status: 'paid' },
  { id: 'INV-2024-1891', dealer: 'Green Farms Corp', amount: '₹1.8L', date: '02 Dec', status: 'pending' },
  { id: 'INV-2024-1890', dealer: 'Harvest King', amount: '₹3.2L', date: '01 Dec', status: 'overdue' },
  { id: 'INV-2024-1889', dealer: 'FarmTech India', amount: '₹1.5L', date: '30 Nov', status: 'paid' },
  { id: 'INV-2024-1888', dealer: 'Bio Agro', amount: '₹2.1L', date: '29 Nov', status: 'paid' },
];

const regionProfitability = [
  { region: 'North', revenue: '₹1.2Cr', expenses: '₹82L', profit: '₹38L', margin: '31.7%' },
  { region: 'South', revenue: '₹95L', expenses: '₹68L', profit: '₹27L', margin: '28.4%' },
  { region: 'East', revenue: '₹78L', expenses: '₹54L', profit: '₹24L', margin: '30.8%' },
  { region: 'West', revenue: '₹52L', expenses: '₹38L', profit: '₹14L', margin: '26.9%' },
];

// KPI Card Component
const KPICard = ({ title, value, change, changeLabel, icon: Icon, variant = 'default' }) => {
  const variantColors = {
    finance: { bg: 'bg-blue-100', text: 'text-blue-700', icon: 'bg-blue-500' },
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

// Area Chart Component
const AreaChart = ({ data, xAxisKey, height = 250 }) => {
  const maxValue = Math.max(...data.flatMap(d => [d.revenue, d.expenses])) * 1.2;
  
  return (
    <div className="relative" style={{ height: `${height}px` }}>
      {/* Y-axis labels */}
      <div className="absolute left-0 top-0 bottom-0 w-10 flex flex-col justify-between text-xs text-gray-500">
        {[70, 50, 30, 10, 0].map((value) => (
          <div key={value} className="text-right pr-2">
            {value}
          </div>
        ))}
      </div>
      
      {/* Chart area */}
      <div className="ml-10 h-full">
        {/* Revenue area */}
        <svg className="w-full h-full">
          <defs>
            <linearGradient id="revenueGradient" x1="0" x2="0" y1="0" y2="1">
              <stop offset="0%" stopColor="#06B6D4" stopOpacity="0.3" />
              <stop offset="100%" stopColor="#06B6D4" stopOpacity="0.1" />
            </linearGradient>
            <linearGradient id="expensesGradient" x1="0" x2="0" y1="0" y2="1">
              <stop offset="0%" stopColor="#EF4444" stopOpacity="0.3" />
              <stop offset="100%" stopColor="#EF4444" stopOpacity="0.1" />
            </linearGradient>
          </defs>
          
          {/* Grid lines */}
          {[0, 0.25, 0.5, 0.75, 1].map((pos) => (
            <line
              key={pos}
              x1="0"
              x2="100%"
              y1={`${pos * 100}%`}
              y2={`${pos * 100}%`}
              stroke="#E5E7EB"
              strokeWidth="1"
            />
          ))}
          
          {/* Revenue area */}
          <path
            fill="url(#revenueGradient)"
            stroke="#06B6D4"
            strokeWidth="2"
            d={`
              M 0,${100 - (data[0].revenue / maxValue) * 100}
              ${data.slice(1).map((item, i) => `
                L ${(i + 1) * (100 / (data.length - 1))},${100 - (item.revenue / maxValue) * 100}
              `).join(' ')}
              L 100,100
              L 0,100
              Z
            `}
          />
          
          {/* Expenses area */}
          <path
            fill="url(#expensesGradient)"
            stroke="#EF4444"
            strokeWidth="2"
            d={`
              M 0,${100 - (data[0].expenses / maxValue) * 100}
              ${data.slice(1).map((item, i) => `
                L ${(i + 1) * (100 / (data.length - 1))},${100 - (item.expenses / maxValue) * 100}
              `).join(' ')}
              L 100,100
              L 0,100
              Z
            `}
          />
          
          {/* Revenue line */}
          <path
            fill="none"
            stroke="#06B6D4"
            strokeWidth="2"
            d={`
              M 0,${100 - (data[0].revenue / maxValue) * 100}
              ${data.slice(1).map((item, i) => `
                L ${(i + 1) * (100 / (data.length - 1))},${100 - (item.revenue / maxValue) * 100}
              `).join(' ')}
            `}
          />
          
          {/* Expenses line */}
          <path
            fill="none"
            stroke="#EF4444"
            strokeWidth="2"
            d={`
              M 0,${100 - (data[0].expenses / maxValue) * 100}
              ${data.slice(1).map((item, i) => `
                L ${(i + 1) * (100 / (data.length - 1))},${100 - (item.expenses / maxValue) * 100}
              `).join(' ')}
            `}
          />
          
          {/* Data points - Revenue */}
          {data.map((item, i) => (
            <circle
              key={`rev-${i}`}
              cx={`${i * (100 / (data.length - 1))}`}
              cy={`${100 - (item.revenue / maxValue) * 100}`}
              r="3"
              fill="#06B6D4"
            />
          ))}
          
          {/* Data points - Expenses */}
          {data.map((item, i) => (
            <circle
              key={`exp-${i}`}
              cx={`${i * (100 / (data.length - 1))}`}
              cy={`${100 - (item.expenses / maxValue) * 100}`}
              r="3"
              fill="#EF4444"
            />
          ))}
        </svg>
        
        {/* X-axis labels */}
        <div className="flex justify-between mt-2 text-xs text-gray-600">
          {data.map((item) => (
            <div key={item.name}>{item.name}</div>
          ))}
        </div>
      </div>
      
      {/* Legend */}
      <div className="flex items-center justify-center gap-4 mt-4">
        <div className="flex items-center gap-2">
          <div className="w-3 h-3 bg-teal-500 rounded"></div>
          <span className="text-xs text-gray-600">Revenue</span>
        </div>
        <div className="flex items-center gap-2">
          <div className="w-3 h-3 bg-red-500 rounded"></div>
          <span className="text-xs text-gray-600">Expenses</span>
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
          <div className="text-lg font-bold text-gray-900">Expenses</div>
          <div className="text-xs text-gray-500">Distribution</div>
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

const FinanceDashboard = () => {
  return (
    <div className="space-y-6 p-6 bg-gray-50 min-h-screen">
      {/* Page Header */}
      <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4">
        <div>
          <h1 className="text-2xl lg:text-3xl font-bold text-gray-900">
            Finance & Accounts Dashboard
          </h1>
          <p className="text-gray-600 mt-1">
            Track cash flow, receivables, invoices, and financial performance
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

      {/* KPI Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        <KPICard
          title="Net Cash Flow"
          value="+₹1.24 Cr"
          change={18.5}
          changeLabel="vs last month"
          icon={TrendingUp}
          variant="finance"
        />
        <KPICard
          title="Outstanding Receivables"
          value="₹51.0L"
          change={-8.2}
          changeLabel="reduced"
          icon={CreditCard}
          variant="finance"
        />
        <KPICard
          title="Revenue (MTD)"
          value="₹4.45 Cr"
          change={12.3}
          changeLabel="vs target"
          icon={ArrowUpRight}
          variant="finance"
        />
        <KPICard
          title="Expenses (MTD)"
          value="₹2.42 Cr"
          change={5.1}
          changeLabel="vs budget"
          icon={ArrowDownRight}
          variant="finance"
        />
      </div>

      {/* Cash Flow Cards */}
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
        <div className="bg-green-50 border border-green-200 rounded-lg p-4">
          <TrendingUp className="w-5 h-5 text-green-600 mb-2" />
          <p className="text-2xl font-bold text-gray-900">₹4.45 Cr</p>
          <p className="text-sm text-gray-600">Total Inflow</p>
        </div>
        <div className="bg-red-50 border border-red-200 rounded-lg p-4">
          <TrendingDown className="w-5 h-5 text-red-600 mb-2" />
          <p className="text-2xl font-bold text-gray-900">₹3.21 Cr</p>
          <p className="text-sm text-gray-600">Total Outflow</p>
        </div>
        <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4">
          <FileText className="w-5 h-5 text-yellow-600 mb-2" />
          <p className="text-2xl font-bold text-gray-900">156</p>
          <p className="text-sm text-gray-600">Pending Invoices</p>
        </div>
        <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
          <PieChartIcon className="w-5 h-5 text-blue-600 mb-2" />
          <p className="text-2xl font-bold text-gray-900">27.8%</p>
          <p className="text-sm text-gray-600">Profit Margin</p>
        </div>
      </div>

      {/* Charts Row */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <ChartCard
          title="Revenue vs Expenses"
          subtitle="Monthly trend (₹ in Lakhs)"
        >
          <AreaChart
            data={revenueData}
            xAxisKey="name"
            height={250}
          />
        </ChartCard>
        
        <ChartCard
          title="Expense Breakdown"
          subtitle="Distribution by category"
        >
          <PieChart
            data={expenseBreakdown}
            height={250}
          />
        </ChartCard>
      </div>

      {/* Outstanding Receivables Table */}
      <DataTable
        title="Outstanding Receivables Aging"
        data={outstandingReceivables}
        columns={[
          { key: 'dealer', label: 'Dealer' },
          { key: 'amount', label: 'Amount' },
          { key: 'aging', label: 'Aging' },
          { key: 'region', label: 'Region' },
          {
            key: 'status',
            label: 'Status',
            render: (value) => {
              const statusMap = {
                current: { type: 'success', label: 'Current' },
                overdue: { type: 'warning', label: 'Overdue' },
                critical: { type: 'error', label: 'Critical' },
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
        onActionClick={() => console.log('View all receivables')}
      />

      {/* Tables Row */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Recent Invoices */}
        <DataTable
          title="Recent Invoices"
          data={recentInvoices}
          columns={[
            { key: 'id', label: 'Invoice ID' },
            { key: 'dealer', label: 'Dealer' },
            { key: 'amount', label: 'Amount' },
            { key: 'date', label: 'Date' },
            {
              key: 'status',
              label: 'Status',
              render: (value) => {
                const statusMap = {
                  paid: { type: 'success', label: 'Paid' },
                  pending: { type: 'warning', label: 'Pending' },
                  overdue: { type: 'error', label: 'Overdue' },
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
          onActionClick={() => console.log('View all invoices')}
        />

        {/* Region Profitability */}
        <DataTable
          title="Regional Profitability"
          data={regionProfitability}
          columns={[
            { key: 'region', label: 'Region' },
            { key: 'revenue', label: 'Revenue' },
            { key: 'expenses', label: 'Expenses' },
            { key: 'profit', label: 'Profit' },
            {
              key: 'margin',
              label: 'Margin',
              render: (value) => (
                <span className="font-semibold text-green-700">{value}</span>
              ),
            },
          ]}
          onActionClick={() => console.log('View all regions')}
        />
      </div>

      {/* Additional Financial Metrics */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-white rounded-xl border border-gray-200 p-5">
          <div className="flex items-center gap-2 mb-4">
            <Wallet className="w-5 h-5 text-gray-400" />
            <h3 className="text-lg font-semibold text-gray-900">Cash Position</h3>
          </div>
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <span className="text-sm text-gray-600">Operating Cash</span>
              <span className="text-lg font-bold text-green-700">₹2.1 Cr</span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-sm text-gray-600">Credit Line Used</span>
              <span className="text-lg font-bold text-gray-900">42%</span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-sm text-gray-600">Cash Burn Rate</span>
              <span className="text-lg font-bold text-blue-700">28 days</span>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-xl border border-gray-200 p-5">
          <div className="flex items-center gap-2 mb-4">
            <BarChart3 className="w-5 h-5 text-gray-400" />
            <h3 className="text-lg font-semibold text-gray-900">Profitability Trends</h3>
          </div>
          <div className="space-y-3">
            <div>
              <div className="flex items-center justify-between mb-1">
                <span className="text-sm text-gray-600">Gross Margin</span>
                <span className="text-sm font-medium text-gray-900">38.2%</span>
              </div>
              <div className="w-full h-2 bg-gray-200 rounded-full overflow-hidden">
                <div className="h-full bg-green-500 rounded-full" style={{ width: '38%' }}></div>
              </div>
            </div>
            <div>
              <div className="flex items-center justify-between mb-1">
                <span className="text-sm text-gray-600">Operating Margin</span>
                <span className="text-sm font-medium text-gray-900">27.8%</span>
              </div>
              <div className="w-full h-2 bg-gray-200 rounded-full overflow-hidden">
                <div className="h-full bg-blue-500 rounded-full" style={{ width: '28%' }}></div>
              </div>
            </div>
            <div>
              <div className="flex items-center justify-between mb-1">
                <span className="text-sm text-gray-600">Net Margin</span>
                <span className="text-sm font-medium text-gray-900">22.4%</span>
              </div>
              <div className="w-full h-2 bg-gray-200 rounded-full overflow-hidden">
                <div className="h-full bg-purple-500 rounded-full" style={{ width: '22%' }}></div>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-xl border border-gray-200 p-5">
          <div className="flex items-center gap-2 mb-4">
            <DollarSign className="w-5 h-5 text-gray-400" />
            <h3 className="text-lg font-semibold text-gray-900">Payment Performance</h3>
          </div>
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <div>
                <span className="text-sm text-gray-600">Avg. Collection Days</span>
                <p className="text-xs text-gray-500">Industry: 45 days</p>
              </div>
              <span className="text-xl font-bold text-blue-700">38 days</span>
            </div>
            <div className="flex items-center justify-between">
              <div>
                <span className="text-sm text-gray-600">Payment Conversion</span>
                <p className="text-xs text-gray-500">Last 30 days</p>
              </div>
              <span className="text-xl font-bold text-green-700">94.2%</span>
            </div>
            <div className="flex items-center justify-between">
              <div>
                <span className="text-sm text-gray-600">Bad Debt Ratio</span>
                <p className="text-xs text-gray-500">Year to date</p>
              </div>
              <span className="text-xl font-bold text-gray-900">1.8%</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FinanceDashboard;