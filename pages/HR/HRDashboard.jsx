// src/pages/HR/HRDashboard.jsx
import React from 'react';
import {
  Users,
  UserPlus,
  UserMinus,
  Clock,
  Calendar,
  DollarSign,
  Award,
  TrendingDown,
  TrendingUp,
  FileText,
  CheckCircle,
  XCircle,
  AlertCircle,
  PlusCircle
} from 'lucide-react';

// Mock data
const attendanceData = [
  { name: 'Mon', present: 312, absent: 18, leave: 12 },
  { name: 'Tue', present: 318, absent: 14, leave: 10 },
  { name: 'Wed', present: 305, absent: 22, leave: 15 },
  { name: 'Thu', present: 320, absent: 12, leave: 10 },
  { name: 'Fri', present: 308, absent: 20, leave: 14 },
];

const departmentStrength = [
  { name: 'Sales', value: 85, color: '#0EA5E9' },
  { name: 'Manufacturing', value: 120, color: '#8B5CF6' },
  { name: 'QC', value: 25, color: '#10B981' },
  { name: 'Warehouse', value: 45, color: '#F59E0B' },
  { name: 'Finance', value: 18, color: '#06B6D4' },
  { name: 'HR', value: 12, color: '#EC4899' },
  { name: 'Field Ops', value: 28, color: '#F97316' },
  { name: 'R&D', value: 9, color: '#1E40AF' },
];

const leaveRequests = [
  { employee: 'Rahul Sharma', department: 'Sales', type: 'Casual', from: '08 Dec', to: '10 Dec', days: 3, status: 'pending' },
  { employee: 'Priya Patel', department: 'Manufacturing', type: 'Medical', from: '05 Dec', to: '06 Dec', days: 2, status: 'approved' },
  { employee: 'Amit Kumar', department: 'Warehouse', type: 'Annual', from: '15 Dec', to: '20 Dec', days: 6, status: 'pending' },
  { employee: 'Sneha Reddy', department: 'QC', type: 'Casual', from: '07 Dec', to: '07 Dec', days: 1, status: 'rejected' },
];

const payrollSummary = [
  { department: 'Sales', employees: 85, gross: '₹42.5L', deductions: '₹8.5L', net: '₹34.0L' },
  { department: 'Manufacturing', employees: 120, gross: '₹48.0L', deductions: '₹9.6L', net: '₹38.4L' },
  { department: 'QC', employees: 25, gross: '₹15.0L', deductions: '₹3.0L', net: '₹12.0L' },
  { department: 'Warehouse', employees: 45, gross: '₹18.0L', deductions: '₹3.6L', net: '₹14.4L' },
  { department: 'Others', employees: 67, gross: '₹38.5L', deductions: '₹7.7L', net: '₹30.8L' },
];

const openPositions = [
  { role: 'Sales Executive', department: 'Sales', location: 'North', applicants: 24, status: 'interviewing' },
  { role: 'QC Analyst', department: 'QC', location: 'HQ', applicants: 12, status: 'screening' },
  { role: 'Machine Operator', department: 'Manufacturing', location: 'Plant', applicants: 38, status: 'interviewing' },
  { role: 'Field Officer', department: 'Field Ops', location: 'South', applicants: 18, status: 'offer' },
];

// KPI Card Component
const KPICard = ({ title, value, change, changeLabel, icon: Icon, variant = 'default' }) => {
  const variantColors = {
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
  const maxValue = Math.max(...data.flatMap(d => [d.present, d.absent, d.leave])) * 1.2;
  
  return (
    <div className="relative" style={{ height: `${height}px` }}>
      {/* Y-axis labels */}
      <div className="absolute left-0 top-0 bottom-0 w-10 flex flex-col justify-between text-xs text-gray-500">
        {[350, 250, 150, 50, 0].map((value) => (
          <div key={value} className="text-right pr-2">
            {value}
          </div>
        ))}
      </div>
      
      {/* Chart area */}
      <div className="ml-10 h-full flex items-end space-x-2">
        {data.map((item, index) => (
          <div key={index} className="flex-1 flex flex-col items-center">
            <div className="w-full flex justify-center space-x-0.5 mb-2">
              {/* Present bar */}
              <div 
                className="w-3 bg-green-500 rounded-t"
                style={{ height: `${(item.present / maxValue) * 100}%` }}
                title={`Present: ${item.present}`}
              ></div>
              {/* Absent bar */}
              <div 
                className="w-3 bg-red-500 rounded-t"
                style={{ height: `${(item.absent / maxValue) * 100}%` }}
                title={`Absent: ${item.absent}`}
              ></div>
              {/* Leave bar */}
              <div 
                className="w-3 bg-yellow-500 rounded-t"
                style={{ height: `${(item.leave / maxValue) * 100}%` }}
                title={`Leave: ${item.leave}`}
              ></div>
            </div>
            
            {/* X-axis label */}
            <span className="text-xs text-gray-600">{item[xAxisKey]}</span>
          </div>
        ))}
      </div>
      
      {/* Legend */}
      <div className="flex items-center justify-center gap-3 mt-4">
        <div className="flex items-center gap-2">
          <div className="w-3 h-3 bg-green-500 rounded"></div>
          <span className="text-xs text-gray-600">Present</span>
        </div>
        <div className="flex items-center gap-2">
          <div className="w-3 h-3 bg-red-500 rounded"></div>
          <span className="text-xs text-gray-600">Absent</span>
        </div>
        <div className="flex items-center gap-2">
          <div className="w-3 h-3 bg-yellow-500 rounded"></div>
          <span className="text-xs text-gray-600">Leave</span>
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
          <div className="text-xs text-gray-500">Total Employees</div>
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

const HRDashboard = () => {
  return (
    <div className="space-y-6 p-6 bg-gray-50 min-h-screen">
      {/* Page Header */}
      <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4">
        <div>
          <h1 className="text-2xl lg:text-3xl font-bold text-gray-900">
            Human Resources Dashboard
          </h1>
          <p className="text-gray-600 mt-1">
            Track attendance, payroll, recruitment, and employee management
          </p>
        </div>
        <div className="flex items-center gap-3">
          <button className="px-4 py-2 rounded-lg border border-gray-300 bg-white text-sm font-medium hover:bg-gray-50 transition-colors flex items-center gap-2">
            <FileText className="w-4 h-4" />
            View Reports
          </button>
          <button className="px-4 py-2 rounded-lg bg-pink-600 text-white text-sm font-medium hover:bg-pink-700 transition-colors flex items-center gap-2">
            <PlusCircle className="w-4 h-4" />
            Add Employee
          </button>
        </div>
      </div>

      {/* KPI Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        <KPICard
          title="Total Employees"
          value="342"
          change={2.4}
          changeLabel="this month"
          icon={Users}
          variant="hr"
        />
        <KPICard
          title="Attendance Today"
          value="94.2%"
          change={1.2}
          changeLabel="vs avg"
          icon={Clock}
          variant="hr"
        />
        <KPICard
          title="Attrition Rate"
          value="4.8%"
          change={-0.5}
          changeLabel="improved"
          icon={TrendingDown}
          variant="hr"
        />
        <KPICard
          title="Open Positions"
          value="8"
          change={3}
          changeLabel="new"
          icon={UserPlus}
          variant="hr"
        />
      </div>

      {/* Quick Stats */}
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
        <div className="bg-green-50 border border-green-200 rounded-lg p-4">
          <Users className="w-5 h-5 text-green-600 mb-2" />
          <p className="text-2xl font-bold text-gray-900">312</p>
          <p className="text-sm text-gray-600">Present Today</p>
        </div>
        <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4">
          <Calendar className="w-5 h-5 text-yellow-600 mb-2" />
          <p className="text-2xl font-bold text-gray-900">12</p>
          <p className="text-sm text-gray-600">On Leave</p>
        </div>
        <div className="bg-red-50 border border-red-200 rounded-lg p-4">
          <UserMinus className="w-5 h-5 text-red-600 mb-2" />
          <p className="text-2xl font-bold text-gray-900">18</p>
          <p className="text-sm text-gray-600">Absent</p>
        </div>
        <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
          <Award className="w-5 h-5 text-blue-600 mb-2" />
          <p className="text-2xl font-bold text-gray-900">78%</p>
          <p className="text-sm text-gray-600">Training Complete</p>
        </div>
      </div>

      {/* Charts Row */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <ChartCard
          title="Weekly Attendance"
          subtitle="Present vs Absent vs Leave"
        >
          <BarChart
            data={attendanceData}
            xAxisKey="name"
            height={250}
          />
        </ChartCard>
        
        <ChartCard
          title="Department Strength"
          subtitle="Employees by department"
        >
          <PieChart
            data={departmentStrength}
            height={250}
          />
        </ChartCard>
      </div>

      {/* Tables Row */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Leave Requests */}
        <DataTable
          title="Pending Leave Requests"
          data={leaveRequests}
          columns={[
            { key: 'employee', label: 'Employee' },
            { key: 'type', label: 'Type' },
            { key: 'from', label: 'From' },
            { key: 'days', label: 'Days' },
            {
              key: 'status',
              label: 'Status',
              render: (value) => {
                const statusMap = {
                  approved: { type: 'success', label: 'Approved' },
                  pending: { type: 'warning', label: 'Pending' },
                  rejected: { type: 'error', label: 'Rejected' },
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
          onActionClick={() => console.log('View all leave requests')}
        />

        {/* Open Positions */}
        <DataTable
          title="Open Positions"
          data={openPositions}
          columns={[
            { key: 'role', label: 'Role' },
            { key: 'department', label: 'Dept' },
            { key: 'applicants', label: 'Applicants' },
            {
              key: 'status',
              label: 'Status',
              render: (value) => {
                const statusMap = {
                  offer: { type: 'success', label: 'Offer' },
                  interviewing: { type: 'info', label: 'Interviewing' },
                  screening: { type: 'warning', label: 'Screening' },
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
          onActionClick={() => console.log('View all positions')}
        />
      </div>

      {/* Payroll Summary */}
      <DataTable
        title="Payroll Summary (December)"
        data={payrollSummary}
        columns={[
          { key: 'department', label: 'Department' },
          { key: 'employees', label: 'Employees' },
          { key: 'gross', label: 'Gross Salary' },
          { key: 'deductions', label: 'Deductions' },
          {
            key: 'net',
            label: 'Net Payable',
            render: (value) => (
              <span className="font-semibold text-gray-900">{value}</span>
            ),
          },
        ]}
        onActionClick={() => console.log('View payroll details')}
      />

      {/* Additional HR Metrics */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-white rounded-xl border border-gray-200 p-5">
          <div className="flex items-center gap-2 mb-4">
            <TrendingUp className="w-5 h-5 text-gray-400" />
            <h3 className="text-lg font-semibold text-gray-900">Employee Engagement</h3>
          </div>
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <span className="text-sm text-gray-600">Satisfaction Score</span>
              <span className="text-lg font-bold text-green-700">4.2/5</span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-sm text-gray-600">Retention Rate</span>
              <span className="text-lg font-bold text-blue-700">95.2%</span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-sm text-gray-600">Avg. Tenure</span>
              <span className="text-lg font-bold text-gray-900">3.4 years</span>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-xl border border-gray-200 p-5">
          <div className="flex items-center gap-2 mb-4">
            <Award className="w-5 h-5 text-gray-400" />
            <h3 className="text-lg font-semibold text-gray-900">Training & Development</h3>
          </div>
          <div className="space-y-3">
            <div>
              <div className="flex items-center justify-between mb-1">
                <span className="text-sm text-gray-600">Completed This Month</span>
                <span className="text-sm font-medium text-gray-900">42</span>
              </div>
              <div className="w-full h-2 bg-gray-200 rounded-full overflow-hidden">
                <div className="h-full bg-blue-500 rounded-full" style={{ width: '84%' }}></div>
              </div>
            </div>
            <div>
              <div className="flex items-center justify-between mb-1">
                <span className="text-sm text-gray-600">Ongoing Programs</span>
                <span className="text-sm font-medium text-gray-900">8</span>
              </div>
              <div className="w-full h-2 bg-gray-200 rounded-full overflow-hidden">
                <div className="h-full bg-purple-500 rounded-full" style={{ width: '40%' }}></div>
              </div>
            </div>
            <div>
              <div className="flex items-center justify-between mb-1">
                <span className="text-sm text-gray-600">Budget Utilization</span>
                <span className="text-sm font-medium text-gray-900">78%</span>
              </div>
              <div className="w-full h-2 bg-gray-200 rounded-full overflow-hidden">
                <div className="h-full bg-green-500 rounded-full" style={{ width: '78%' }}></div>
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
                <span className="text-sm text-gray-600">Cost per Hire</span>
                <p className="text-xs text-gray-500">Industry: ₹45K</p>
              </div>
              <span className="text-lg font-bold text-green-700">₹38.5K</span>
            </div>
            <div className="flex items-center justify-between">
              <div>
                <span className="text-sm text-gray-600">HR Cost/Employee</span>
                <p className="text-xs text-gray-500">Monthly</p>
              </div>
              <span className="text-lg font-bold text-blue-700">₹8,200</span>
            </div>
            <div className="flex items-center justify-between">
              <div>
                <span className="text-sm text-gray-600">Benefit Cost Ratio</span>
                <p className="text-xs text-gray-500">Of total comp</p>
              </div>
              <span className="text-lg font-bold text-gray-900">18.5%</span>
            </div>
          </div>
        </div>
      </div>

      {/* Recent Hires */}
      <div className="bg-white rounded-xl border border-gray-200 p-5">
        <div className="flex items-center justify-between mb-4">
          <h3 className="text-lg font-semibold text-gray-900">Recent Hires (Last 30 Days)</h3>
          <button className="text-sm text-blue-600 hover:text-blue-800 font-medium">
            View all →
          </button>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {[
            { name: 'Rohan Mehta', department: 'Sales', position: 'Sales Executive', date: 'Dec 1' },
            { name: 'Neha Singh', department: 'QC', position: 'QC Analyst', date: 'Dec 3' },
            { name: 'Arun Kumar', department: 'Manufacturing', position: 'Operator', date: 'Dec 5' },
            { name: 'Maya Sharma', department: 'Field Ops', position: 'Field Officer', date: 'Dec 7' },
          ].map((hire, index) => (
            <div key={index} className="p-4 border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-pink-100 flex items-center justify-center text-pink-600 font-medium">
                  {hire.name.split(' ').map(n => n[0]).join('')}
                </div>
                <div>
                  <p className="font-medium text-gray-900">{hire.name}</p>
                  <p className="text-sm text-gray-600">{hire.department}</p>
                </div>
              </div>
              <div className="mt-3">
                <p className="text-sm text-gray-700">{hire.position}</p>
                <p className="text-xs text-gray-500 mt-1">Joined: {hire.date}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default HRDashboard;