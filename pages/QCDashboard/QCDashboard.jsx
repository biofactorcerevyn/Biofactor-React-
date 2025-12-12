// src/pages/QC/QCDashboard.jsx
import React from 'react';
import {
  FlaskConical,
  CheckCircle,
  XCircle,
  Clock,
  FileText,
  AlertTriangle,
  TrendingUp,
  TrendingDown,
  BarChart3,
  PieChart as PieChartIcon,
  PlusCircle,
  Download
} from 'lucide-react';

// Mock data
const passFailData = [
  { name: 'Week 1', passed: 42, failed: 3 },
  { name: 'Week 2', passed: 38, failed: 5 },
  { name: 'Week 3', passed: 45, failed: 2 },
  { name: 'Week 4', passed: 40, failed: 4 },
];

const testTypeData = [
  { name: 'Chemical', value: 35, color: '#10B981' },
  { name: 'Physical', value: 28, color: '#0EA5E9' },
  { name: 'Microbiological', value: 22, color: '#8B5CF6' },
  { name: 'Stability', value: 15, color: '#F59E0B' },
];

const pendingTests = [
  { batchId: 'BT-2024-156', product: 'Bio-Fertilizer Pro', testType: 'Chemical', priority: 'high', dueDate: '05 Dec' },
  { batchId: 'BT-2024-155', product: 'Organic Pesticide X', testType: 'Microbiological', priority: 'high', dueDate: '04 Dec' },
  { batchId: 'BT-2024-154', product: 'Growth Enhancer Plus', testType: 'Physical', priority: 'medium', dueDate: '06 Dec' },
  { batchId: 'BT-2024-153', product: 'Soil Conditioner', testType: 'Stability', priority: 'low', dueDate: '08 Dec' },
];

const recentResults = [
  { batchId: 'BT-2024-152', product: 'Micro Nutrients Mix', testType: 'Chemical', result: 'passed', date: '03 Dec', analyst: 'Dr. Meera' },
  { batchId: 'BT-2024-151', product: 'Bio-Fertilizer Pro', testType: 'Physical', result: 'passed', date: '02 Dec', analyst: 'Rahul S.' },
  { batchId: 'BT-2024-150', product: 'Organic Pesticide X', testType: 'Microbiological', result: 'failed', date: '02 Dec', analyst: 'Dr. Meera' },
  { batchId: 'BT-2024-149', product: 'Growth Enhancer Plus', testType: 'Chemical', result: 'passed', date: '01 Dec', analyst: 'Priya K.' },
  { batchId: 'BT-2024-148', product: 'Soil Conditioner', testType: 'Stability', result: 'passed', date: '01 Dec', analyst: 'Rahul S.' },
];

const deviations = [
  { id: 'DEV-045', batch: 'BT-2024-150', type: 'pH Level', deviation: '+0.8', severity: 'major', status: 'open' },
  { id: 'DEV-044', batch: 'BT-2024-147', type: 'Moisture Content', deviation: '-2.1%', severity: 'minor', status: 'resolved' },
  { id: 'DEV-043', batch: 'BT-2024-142', type: 'Particle Size', deviation: '+15μm', severity: 'minor', status: 'resolved' },
];

// KPI Card Component
const KPICard = ({ title, value, change, changeLabel, icon: Icon, variant = 'default' }) => {
  const variantColors = {
    qc: { bg: 'bg-green-100', text: 'text-green-700', icon: 'bg-green-500' },
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

// Bar Chart Component
const BarChart = ({ data, xAxisKey, height = 250 }) => {
  const maxValue = Math.max(...data.flatMap(d => [d.passed, d.failed])) * 1.2;
  
  return (
    <div className="relative" style={{ height: `${height}px` }}>
      {/* Y-axis labels */}
      <div className="absolute left-0 top-0 bottom-0 w-10 flex flex-col justify-between text-xs text-gray-500">
        {[50, 40, 30, 20, 10, 0].map((value) => (
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
              {/* Passed bar */}
              <div 
                className="w-4 bg-green-500 rounded-t"
                style={{ height: `${(item.passed / maxValue) * 100}%` }}
                title={`Passed: ${item.passed}`}
              ></div>
              {/* Failed bar */}
              <div 
                className="w-4 bg-red-500 rounded-t"
                style={{ height: `${(item.failed / maxValue) * 100}%` }}
                title={`Failed: ${item.failed}`}
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
          <div className="w-3 h-3 bg-green-500 rounded"></div>
          <span className="text-xs text-gray-600">Passed</span>
        </div>
        <div className="flex items-center gap-2">
          <div className="w-3 h-3 bg-red-500 rounded"></div>
          <span className="text-xs text-gray-600">Failed</span>
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
          <div className="text-xs text-gray-500">Total Tests</div>
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

const QCDashboard = () => {
  return (
    <div className="space-y-6 p-6 bg-gray-50 min-h-screen">
      {/* Page Header */}
      <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4">
        <div>
          <h1 className="text-2xl lg:text-3xl font-bold text-gray-900">
            Quality Control Dashboard
          </h1>
          <p className="text-gray-600 mt-1">
            Monitor testing status, pass/fail rates, and quality deviations
          </p>
        </div>
        <div className="flex items-center gap-3">
          <button className="px-4 py-2 rounded-lg border border-gray-300 bg-white text-sm font-medium hover:bg-gray-50 transition-colors flex items-center gap-2">
            <FileText className="w-4 h-4" />
            View Reports
          </button>
          <button className="px-4 py-2 rounded-lg bg-green-600 text-white text-sm font-medium hover:bg-green-700 transition-colors flex items-center gap-2">
            <PlusCircle className="w-4 h-4" />
            New Test
          </button>
        </div>
      </div>

      {/* KPI Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        <KPICard
          title="Pass Rate (MTD)"
          value="96.2%"
          change={1.8}
          changeLabel="vs last month"
          icon={CheckCircle}
          variant="qc"
        />
        <KPICard
          title="Pending Tests"
          value="15"
          change={-20}
          changeLabel="vs yesterday"
          icon={Clock}
          variant="qc"
        />
        <KPICard
          title="Avg TAT"
          value="4.2 hrs"
          change={-12}
          changeLabel="improved"
          icon={FlaskConical}
          variant="qc"
        />
        <KPICard
          title="Open Deviations"
          value="3"
          change={50}
          changeLabel="vs last week"
          icon={AlertTriangle}
          variant="qc"
        />
      </div>

      {/* Status Cards */}
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
        <div className="bg-green-50 border border-green-200 rounded-lg p-4">
          <CheckCircle className="w-5 h-5 text-green-600 mb-2" />
          <p className="text-2xl font-bold text-gray-900">165</p>
          <p className="text-sm text-gray-600">Tests Passed</p>
        </div>
        <div className="bg-red-50 border border-red-200 rounded-lg p-4">
          <XCircle className="w-5 h-5 text-red-600 mb-2" />
          <p className="text-2xl font-bold text-gray-900">14</p>
          <p className="text-sm text-gray-600">Tests Failed</p>
        </div>
        <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4">
          <Clock className="w-5 h-5 text-yellow-600 mb-2" />
          <p className="text-2xl font-bold text-gray-900">15</p>
          <p className="text-sm text-gray-600">In Progress</p>
        </div>
        <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
          <FileText className="w-5 h-5 text-blue-600 mb-2" />
          <p className="text-2xl font-bold text-gray-900">42</p>
          <p className="text-sm text-gray-600">Reports Generated</p>
        </div>
      </div>

      {/* Charts Row */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <ChartCard
          title="Pass/Fail Trend"
          subtitle="Weekly test results"
        >
          <BarChart
            data={passFailData}
            xAxisKey="name"
            height={250}
          />
        </ChartCard>
        
        <ChartCard
          title="Test Type Distribution"
          subtitle="Tests by category"
        >
          <PieChart
            data={testTypeData}
            height={250}
          />
        </ChartCard>
      </div>

      {/* Tables Row */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Pending Tests */}
        <DataTable
          title="Pending Tests"
          data={pendingTests}
          columns={[
            { key: 'batchId', label: 'Batch' },
            { key: 'product', label: 'Product' },
            { key: 'testType', label: 'Test Type' },
            {
              key: 'priority',
              label: 'Priority',
              render: (value) => {
                const priorityMap = {
                  high: { type: 'error', label: 'High' },
                  medium: { type: 'warning', label: 'Medium' },
                  low: { type: 'info', label: 'Low' },
                };
                const config = priorityMap[value] || { type: 'default', label: value };
                return (
                  <StatusBadge
                    status={config.type}
                    label={config.label}
                  />
                );
              },
            },
            { key: 'dueDate', label: 'Due Date' },
          ]}
          onActionClick={() => console.log('View all pending tests')}
        />

        {/* Recent Results */}
        <DataTable
          title="Recent Results"
          data={recentResults}
          columns={[
            { key: 'batchId', label: 'Batch' },
            { key: 'testType', label: 'Test' },
            {
              key: 'result',
              label: 'Result',
              render: (value) => (
                <StatusBadge
                  status={value === 'passed' ? 'success' : 'error'}
                  label={value.charAt(0).toUpperCase() + value.slice(1)}
                  dot
                />
              ),
            },
            { key: 'date', label: 'Date' },
            { key: 'analyst', label: 'Analyst' },
          ]}
          onActionClick={() => console.log('View all results')}
        />
      </div>

      {/* Deviations Log */}
      <DataTable
        title="Deviation Log"
        data={deviations}
        columns={[
          { key: 'id', label: 'Deviation ID' },
          { key: 'batch', label: 'Batch' },
          { key: 'type', label: 'Type' },
          { key: 'deviation', label: 'Deviation' },
          {
            key: 'severity',
            label: 'Severity',
            render: (value) => (
              <StatusBadge
                status={value === 'major' ? 'error' : 'warning'}
                label={value.charAt(0).toUpperCase() + value.slice(1)}
              />
            ),
          },
          {
            key: 'status',
            label: 'Status',
            render: (value) => (
              <StatusBadge
                status={value === 'resolved' ? 'success' : 'warning'}
                label={value.charAt(0).toUpperCase() + value.slice(1)}
                dot
              />
            ),
          },
        ]}
        onActionClick={() => console.log('View all deviations')}
      />

      {/* Additional QC Metrics */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-white rounded-xl border border-gray-200 p-5">
          <div className="flex items-center gap-2 mb-4">
            <TrendingUp className="w-5 h-5 text-gray-400" />
            <h3 className="text-lg font-semibold text-gray-900">Quality Trends</h3>
          </div>
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <span className="text-sm text-gray-600">Batch Compliance</span>
              <span className="text-lg font-bold text-green-700">98.4%</span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-sm text-gray-600">Rejection Rate</span>
              <span className="text-lg font-bold text-red-700">1.6%</span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-sm text-gray-600">CAPA Closure</span>
              <span className="text-lg font-bold text-blue-700">94%</span>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-xl border border-gray-200 p-5">
          <div className="flex items-center gap-2 mb-4">
            <BarChart3 className="w-5 h-5 text-gray-400" />
            <h3 className="text-lg font-semibold text-gray-900">Analyst Performance</h3>
          </div>
          <div className="space-y-3">
            <div>
              <div className="flex items-center justify-between mb-1">
                <span className="text-sm text-gray-600">Dr. Meera</span>
                <span className="text-sm font-medium text-gray-900">98.2%</span>
              </div>
              <div className="w-full h-2 bg-gray-200 rounded-full overflow-hidden">
                <div className="h-full bg-green-500 rounded-full" style={{ width: '98%' }}></div>
              </div>
            </div>
            <div>
              <div className="flex items-center justify-between mb-1">
                <span className="text-sm text-gray-600">Rahul S.</span>
                <span className="text-sm font-medium text-gray-900">96.8%</span>
              </div>
              <div className="w-full h-2 bg-gray-200 rounded-full overflow-hidden">
                <div className="h-full bg-blue-500 rounded-full" style={{ width: '97%' }}></div>
              </div>
            </div>
            <div>
              <div className="flex items-center justify-between mb-1">
                <span className="text-sm text-gray-600">Priya K.</span>
                <span className="text-sm font-medium text-gray-900">95.4%</span>
              </div>
              <div className="w-full h-2 bg-gray-200 rounded-full overflow-hidden">
                <div className="h-full bg-purple-500 rounded-full" style={{ width: '95%' }}></div>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-xl border border-gray-200 p-5">
          <div className="flex items-center gap-2 mb-4">
            <FlaskConical className="w-5 h-5 text-gray-400" />
            <h3 className="text-lg font-semibold text-gray-900">Test Timeliness</h3>
          </div>
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <div>
                <span className="text-sm text-gray-600">On-Time Completion</span>
                <p className="text-xs text-gray-500">Last 30 days</p>
              </div>
              <span className="text-lg font-bold text-green-700">94.8%</span>
            </div>
            <div className="flex items-center justify-between">
              <div>
                <span className="text-sm text-gray-600">Avg Turnaround</span>
                <p className="text-xs text-gray-500">Target: 4 hours</p>
              </div>
              <span className="text-lg font-bold text-blue-700">3.8 hrs</span>
            </div>
            <div className="flex items-center justify-between">
              <div>
                <span className="text-sm text-gray-600">Overdue Tests</span>
                <p className="text-xs text-gray-500">Current</p>
              </div>
              <span className="text-lg font-bold text-red-700">2</span>
            </div>
          </div>
        </div>
      </div>

      {/* Laboratory Equipment Status */}
      <div className="bg-white rounded-xl border border-gray-200 p-5">
        <div className="flex items-center justify-between mb-4">
          <h3 className="text-lg font-semibold text-gray-900">Laboratory Equipment Status</h3>
          <button className="text-sm text-blue-600 hover:text-blue-800 font-medium">
            View details →
          </button>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {[
            { equipment: 'pH Meter', model: 'Metrohm 827', status: 'operational', lastCalibration: '15 Nov' },
            { equipment: 'Spectrophotometer', model: 'Shimadzu UV-1900', status: 'operational', lastCalibration: '20 Nov' },
            { equipment: 'HPLC', model: 'Agilent 1260', status: 'calibration', lastCalibration: '05 Dec' },
            { equipment: 'Microscope', model: 'Olympus CX43', status: 'maintenance', lastCalibration: '10 Nov' },
          ].map((item, index) => (
            <div key={index} className="p-4 border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors">
              <div className="flex items-center justify-between mb-2">
                <div>
                  <p className="font-medium text-gray-900">{item.equipment}</p>
                  <p className="text-sm text-gray-600">{item.model}</p>
                </div>
                <div className={`w-3 h-3 rounded-full ${
                  item.status === 'operational' ? 'bg-green-500' :
                  item.status === 'calibration' ? 'bg-yellow-500' :
                  'bg-red-500'
                }`}></div>
              </div>
              <div className="space-y-2">
                <div className="flex items-center gap-2">
                  <span className={`px-2 py-1 rounded text-xs font-medium ${
                    item.status === 'operational' ? 'bg-green-100 text-green-800' :
                    item.status === 'calibration' ? 'bg-yellow-100 text-yellow-800' :
                    'bg-red-100 text-red-800'
                  }`}>
                    {item.status === 'operational' ? 'Operational' : 
                     item.status === 'calibration' ? 'Calibration Due' : 
                     'Maintenance'}
                  </span>
                </div>
                <p className="text-xs text-gray-500">Last calibration: {item.lastCalibration}</p>
                {item.status === 'calibration' && (
                  <p className="text-xs text-yellow-600">Next due: 15 Dec</p>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Quality Alerts */}
      <div className="bg-red-50 border border-red-200 rounded-xl p-5">
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center gap-2">
            <AlertTriangle className="w-5 h-5 text-red-600" />
            <h3 className="text-lg font-semibold text-red-900">Quality Alerts</h3>
          </div>
          <span className="text-sm font-medium text-red-700">Requires Attention</span>
        </div>
        <div className="space-y-3">
          <div className="flex items-start gap-3">
            <div className="w-2 h-2 mt-2 rounded-full bg-red-500 flex-shrink-0"></div>
            <div className="flex-1">
              <p className="font-medium text-red-800">Batch BT-2024-150 failed microbiological test</p>
              <p className="text-sm text-red-600">Contamination detected in sample. Requires investigation and CAPA.</p>
              <p className="text-xs text-red-500 mt-1">Alert raised: Today, 10:30 AM</p>
            </div>
          </div>
          <div className="flex items-start gap-3">
            <div className="w-2 h-2 mt-2 rounded-full bg-yellow-500 flex-shrink-0"></div>
            <div className="flex-1">
              <p className="font-medium text-yellow-800">Equipment calibration overdue</p>
              <p className="text-sm text-yellow-700">pH meter calibration due since 15 Nov. Schedule calibration ASAP.</p>
              <p className="text-xs text-yellow-600 mt-1">Due date passed: 5 days ago</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default QCDashboard;