// src/pages/RnD/RnDDashboard.jsx
import React from 'react';
import {
  Microscope,
  Lightbulb,
  FlaskConical,
  FileCheck,
  DollarSign,
  TrendingUp,
  Award,
  Clock,
  PlusCircle,
  FileText,
  Calendar,
  Users,
  Target
} from 'lucide-react';

// Mock data
const pipelineData = [
  { stage: 'Idea', count: 12 },
  { stage: 'Lab Trial', count: 8 },
  { stage: 'Field Trial', count: 5 },
  { stage: 'Validation', count: 3 },
  { stage: 'Approved', count: 2 },
];

const budgetData = [
  { name: 'Lab Equipment', value: 35, color: '#0EA5E9' },
  { name: 'Field Trials', value: 28, color: '#10B981' },
  { name: 'Materials', value: 22, color: '#8B5CF6' },
  { name: 'Personnel', value: 15, color: '#F59E0B' },
];

const activeTrials = [
  { id: 'TR-2024-018', name: 'Bio-Stimulant V2', stage: 'field_trial', progress: 75, lead: 'Dr. Arun Gupta', eta: 'Feb 2025', budget: '₹8.5L' },
  { id: 'TR-2024-017', name: 'Nano-Fertilizer', stage: 'lab_trial', progress: 45, lead: 'Dr. Sneha M.', eta: 'Apr 2025', budget: '₹12.2L' },
  { id: 'TR-2024-016', name: 'Organic Pest Control', stage: 'validation', progress: 90, lead: 'Dr. Arun Gupta', eta: 'Jan 2025', budget: '₹6.8L' },
  { id: 'TR-2024-015', name: 'Soil Microbiome', stage: 'field_trial', progress: 60, lead: 'Dr. Rahul K.', eta: 'Mar 2025', budget: '₹10.5L' },
  { id: 'TR-2024-014', name: 'Growth Hormone X', stage: 'idea', progress: 10, lead: 'Dr. Sneha M.', eta: 'Jun 2025', budget: '₹15.0L' },
];

const trialResults = [
  { trial: 'Bio-Stimulant V2', metric: 'Yield Increase', control: '12%', test: '28%', improvement: '+133%' },
  { trial: 'Bio-Stimulant V2', metric: 'Root Growth', control: '15cm', test: '24cm', improvement: '+60%' },
  { trial: 'Organic Pest Control', metric: 'Pest Reduction', control: '45%', test: '82%', improvement: '+82%' },
  { trial: 'Soil Microbiome', metric: 'Nutrient Absorption', control: '35%', test: '58%', improvement: '+66%' },
];

const ipSummary = [
  { type: 'Patents Filed', count: 8, status: 'pending' },
  { type: 'Patents Granted', count: 12, status: 'approved' },
  { type: 'Trademarks', count: 15, status: 'approved' },
  { type: 'Research Papers', count: 6, status: 'published' },
];

// KPI Card Component
const KPICard = ({ title, value, change, changeLabel, icon: Icon, variant = 'default' }) => {
  const variantColors = {
    rnd: { bg: 'bg-blue-100', text: 'text-blue-700', icon: 'bg-blue-500' },
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
  const maxValue = Math.max(...data.map(d => d.count)) * 1.2;
  
  return (
    <div className="relative" style={{ height: `${height}px` }}>
      {/* Y-axis labels */}
      <div className="absolute left-0 top-0 bottom-0 w-10 flex flex-col justify-between text-xs text-gray-500">
        {[14, 12, 10, 8, 6, 4, 2, 0].map((value) => (
          <div key={value} className="text-right pr-2">
            {value}
          </div>
        ))}
      </div>
      
      {/* Chart area */}
      <div className="ml-10 h-full flex items-end space-x-2">
        {data.map((item, index) => (
          <div key={index} className="flex-1 flex flex-col items-center">
            <div 
              className="w-8 bg-blue-500 rounded-t mb-2"
              style={{ height: `${(item.count / maxValue) * 100}%` }}
              title={`${item[xAxisKey]}: ${item.count}`}
            ></div>
            
            {/* X-axis label */}
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
          <div className="text-lg font-bold text-gray-900">₹100L</div>
          <div className="text-xs text-gray-500">Total Budget</div>
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

const RnDDashboard = () => {
  return (
    <div className="space-y-6 p-6 bg-gray-50 min-h-screen">
      {/* Page Header */}
      <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4">
        <div>
          <h1 className="text-2xl lg:text-3xl font-bold text-gray-900">
            R&D Dashboard
          </h1>
          <p className="text-gray-600 mt-1">
            Track research trials, innovation pipeline, and IP portfolio
          </p>
        </div>
        <div className="flex items-center gap-3">
          <button className="px-4 py-2 rounded-lg border border-gray-300 bg-white text-sm font-medium hover:bg-gray-50 transition-colors flex items-center gap-2">
            <FileText className="w-4 h-4" />
            View Reports
          </button>
          <button className="px-4 py-2 rounded-lg bg-blue-600 text-white text-sm font-medium hover:bg-blue-700 transition-colors flex items-center gap-2">
            <PlusCircle className="w-4 h-4" />
            New Trial
          </button>
        </div>
      </div>

      {/* KPI Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        <KPICard
          title="Active Trials"
          value="8"
          change={2}
          changeLabel="new this quarter"
          icon={Microscope}
          variant="rnd"
        />
        <KPICard
          title="Pipeline Ideas"
          value="12"
          change={25}
          changeLabel="vs last quarter"
          icon={Lightbulb}
          variant="rnd"
        />
        <KPICard
          title="Budget Utilized"
          value="68%"
          change={-5}
          changeLabel="under budget"
          icon={DollarSign}
          variant="rnd"
        />
        <KPICard
          title="Patents Pending"
          value="8"
          change={3}
          changeLabel="new filed"
          icon={Award}
          variant="rnd"
        />
      </div>

      {/* Pipeline Stages */}
      <div className="bg-white rounded-xl border border-gray-200 p-6">
        <h3 className="text-lg font-semibold text-gray-900 mb-4">Trial Pipeline</h3>
        <div className="flex flex-wrap gap-4">
          {pipelineData.map((stage, index) => (
            <div
              key={stage.stage}
              className="flex-1 min-w-[120px] relative"
            >
              <div className="bg-gray-50 rounded-lg p-4 text-center">
                <p className="text-3xl font-bold text-gray-900">{stage.count}</p>
                <p className="text-sm text-gray-600 mt-1">{stage.stage}</p>
              </div>
              {index < pipelineData.length - 1 && (
                <div className="hidden lg:block absolute top-1/2 -right-2 transform -translate-y-1/2 text-gray-400">
                  →
                </div>
              )}
            </div>
          ))}
        </div>
      </div>

      {/* IP Summary */}
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
        {ipSummary.map((item) => (
          <div key={item.type} className="bg-white rounded-lg p-4 border border-gray-200">
            <div className="flex items-center justify-between mb-2">
              <Award className="w-5 h-5 text-blue-500" />
              <span className={`inline-flex items-center px-2 py-1 rounded-full text-xs font-medium ${
                item.status === 'approved' || item.status === 'published' 
                  ? 'bg-green-100 text-green-800' 
                  : 'bg-yellow-100 text-yellow-800'
              }`}>
                {item.status}
              </span>
            </div>
            <p className="text-2xl font-bold text-gray-900">{item.count}</p>
            <p className="text-sm text-gray-600">{item.type}</p>
          </div>
        ))}
      </div>

      {/* Charts Row */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <ChartCard
          title="Pipeline Distribution"
          subtitle="Trials by stage"
        >
          <BarChart
            data={pipelineData}
            xAxisKey="stage"
            height={250}
          />
        </ChartCard>
        
        <ChartCard
          title="Budget Allocation"
          subtitle="R&D spend by category"
        >
          <PieChart
            data={budgetData}
            height={250}
          />
        </ChartCard>
      </div>

      {/* Active Trials Table */}
      <DataTable
        title="Active Trials"
        data={activeTrials}
        columns={[
          { key: 'id', label: 'Trial ID' },
          { key: 'name', label: 'Name' },
          {
            key: 'stage',
            label: 'Stage',
            render: (value) => {
              const stageConfig = {
                idea: { status: 'pending', label: 'Idea' },
                lab_trial: { status: 'info', label: 'Lab Trial' },
                field_trial: { status: 'warning', label: 'Field Trial' },
                validation: { status: 'success', label: 'Validation' },
              };
              const config = stageConfig[value] || { status: 'default', label: value };
              return (
                <StatusBadge
                  status={config.status}
                  label={config.label}
                />
              );
            },
          },
          {
            key: 'progress',
            label: 'Progress',
            render: (value) => (
              <div className="flex items-center gap-2">
                <div className="w-20 h-2 bg-gray-200 rounded-full overflow-hidden">
                  <div
                    className="h-full bg-blue-500 rounded-full"
                    style={{ width: `${value}%` }}
                  />
                </div>
                <span className="text-sm font-medium">{value}%</span>
              </div>
            ),
          },
          { key: 'lead', label: 'Lead' },
          { key: 'eta', label: 'ETA' },
          { key: 'budget', label: 'Budget' },
        ]}
        onActionClick={() => console.log('View all trials')}
      />

      {/* Trial Results */}
      <DataTable
        title="Recent Trial Results"
        data={trialResults}
        columns={[
          { key: 'trial', label: 'Trial' },
          { key: 'metric', label: 'Metric' },
          { key: 'control', label: 'Control' },
          { key: 'test', label: 'Test' },
          {
            key: 'improvement',
            label: 'Improvement',
            render: (value) => (
              <span className="font-semibold text-green-700">{value}</span>
            ),
          },
        ]}
        onActionClick={() => console.log('View all results')}
      />

      {/* Additional R&D Metrics */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-white rounded-xl border border-gray-200 p-5">
          <div className="flex items-center gap-2 mb-4">
            <Target className="w-5 h-5 text-gray-400" />
            <h3 className="text-lg font-semibold text-gray-900">Success Metrics</h3>
          </div>
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <span className="text-sm text-gray-600">Trial Success Rate</span>
              <span className="text-lg font-bold text-green-700">78%</span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-sm text-gray-600">Time to Market</span>
              <span className="text-lg font-bold text-blue-700">14.5 months</span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-sm text-gray-600">ROI on Projects</span>
              <span className="text-lg font-bold text-purple-700">3.2x</span>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-xl border border-gray-200 p-5">
          <div className="flex items-center gap-2 mb-4">
            <Users className="w-5 h-5 text-gray-400" />
            <h3 className="text-lg font-semibold text-gray-900">Team Performance</h3>
          </div>
          <div className="space-y-3">
            <div>
              <div className="flex items-center justify-between mb-1">
                <span className="text-sm text-gray-600">Active Researchers</span>
                <span className="text-sm font-medium text-gray-900">18</span>
              </div>
              <div className="w-full h-2 bg-gray-200 rounded-full overflow-hidden">
                <div className="h-full bg-blue-500 rounded-full" style={{ width: '90%' }}></div>
              </div>
            </div>
            <div>
              <div className="flex items-center justify-between mb-1">
                <span className="text-sm text-gray-600">Project Load</span>
                <span className="text-sm font-medium text-gray-900">4.2 avg</span>
              </div>
              <div className="w-full h-2 bg-gray-200 rounded-full overflow-hidden">
                <div className="h-full bg-green-500 rounded-full" style={{ width: '84%' }}></div>
              </div>
            </div>
            <div>
              <div className="flex items-center justify-between mb-1">
                <span className="text-sm text-gray-600">Team Utilization</span>
                <span className="text-sm font-medium text-gray-900">92%</span>
              </div>
              <div className="w-full h-2 bg-gray-200 rounded-full overflow-hidden">
                <div className="h-full bg-purple-500 rounded-full" style={{ width: '92%' }}></div>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-xl border border-gray-200 p-5">
          <div className="flex items-center gap-2 mb-4">
            <DollarSign className="w-5 h-5 text-gray-400" />
            <h3 className="text-lg font-semibold text-gray-900">Budget Analysis</h3>
          </div>
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <div>
                <span className="text-sm text-gray-600">Spent vs Budget</span>
                <p className="text-xs text-gray-500">Current quarter</p>
              </div>
              <span className="text-lg font-bold text-green-700">68%</span>
            </div>
            <div className="flex items-center justify-between">
              <div>
                <span className="text-sm text-gray-600">Cost per Trial</span>
                <p className="text-xs text-gray-500">Average</p>
              </div>
              <span className="text-lg font-bold text-blue-700">₹9.2L</span>
            </div>
            <div className="flex items-center justify-between">
              <div>
                <span className="text-sm text-gray-600">Grant Funding</span>
                <p className="text-xs text-gray-500">Total secured</p>
              </div>
              <span className="text-lg font-bold text-gray-900">₹42.5L</span>
            </div>
          </div>
        </div>
      </div>

      {/* Patent Pipeline */}
      <div className="bg-white rounded-xl border border-gray-200 p-5">
        <div className="flex items-center justify-between mb-4">
          <h3 className="text-lg font-semibold text-gray-900">Patent Pipeline</h3>
          <button className="text-sm text-blue-600 hover:text-blue-800 font-medium">
            View all →
          </button>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {[
            { status: 'Filed', count: 8, description: 'Awaiting examination', color: 'bg-yellow-100 text-yellow-800' },
            { status: 'Under Examination', count: 5, description: 'In review process', color: 'bg-blue-100 text-blue-800' },
            { status: 'Granted', count: 12, description: 'Active patents', color: 'bg-green-100 text-green-800' },
            { status: 'Licensed', count: 4, description: 'Commercialized', color: 'bg-purple-100 text-purple-800' },
          ].map((item, index) => (
            <div key={index} className="p-4 border border-gray-200 rounded-lg">
              <div className="flex items-center justify-between mb-2">
                <span className={`px-2 py-1 rounded text-xs font-medium ${item.color}`}>
                  {item.status}
                </span>
                <span className="text-2xl font-bold text-gray-900">{item.count}</span>
              </div>
              <p className="text-sm text-gray-600">{item.description}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Recent Publications */}
      <div className="bg-white rounded-xl border border-gray-200 p-5">
        <div className="flex items-center justify-between mb-4">
          <h3 className="text-lg font-semibold text-gray-900">Recent Publications</h3>
          <button className="text-sm text-blue-600 hover:text-blue-800 font-medium">
            View all →
          </button>
        </div>
        <div className="space-y-4">
          {[
            { title: 'Effect of Bio-Stimulants on Crop Yield in Arid Regions', journal: 'Agri Science Journal', date: 'Nov 2024', authors: 'Dr. Arun Gupta et al.' },
            { title: 'Nano-Fertilizers for Sustainable Agriculture', journal: 'Journal of Plant Nutrition', date: 'Oct 2024', authors: 'Dr. Sneha M. et al.' },
            { title: 'Organic Pest Control Mechanisms in Soil', journal: 'Soil Biology Journal', date: 'Sep 2024', authors: 'Dr. Rahul K. et al.' },
          ].map((pub, index) => (
            <div key={index} className="p-4 border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors">
              <div className="flex items-start gap-3">
                <FileCheck className="w-5 h-5 text-blue-500 mt-0.5" />
                <div className="flex-1">
                  <h4 className="font-medium text-gray-900">{pub.title}</h4>
                  <div className="flex items-center gap-4 mt-2">
                    <span className="text-sm text-gray-600">{pub.journal}</span>
                    <span className="text-sm text-gray-500">•</span>
                    <span className="text-sm text-gray-600">{pub.date}</span>
                    <span className="text-sm text-gray-500">•</span>
                    <span className="text-sm text-gray-600">{pub.authors}</span>
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

export default RnDDashboard;