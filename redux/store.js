// src/redux/store.js
import { configureStore, createSlice } from '@reduxjs/toolkit';

// Create a simple sales slice
const salesSlice = createSlice({
  name: 'sales',
  initialState: {
    summary: [
      { label: 'Sales', value: '₹8.2Cr', delta: '+18%' },
      { label: 'Orders', value: '5,420', delta: '+12%' },
      { label: 'Target', value: '78%', delta: '+3%' },
      { label: 'Dealers', value: '2,142', delta: '+12%' }
    ],
    orders: [
      { id: 'ORD-001', dealer: 'Green Agro', amount: '₹85,000', status: 'Confirmed', region: 'Maharashtra' },
      { id: 'ORD-002', dealer: 'CropCare', amount: '₹42,500', status: 'Pending', region: 'Hyderabad' },
      { id: 'ORD-003', dealer: 'FarmAid', amount: '₹35,700', status: 'Dispatched', region: 'Bangalore' }
    ],
    dealers: [
      { name: 'Green Agro', region: 'Pune', outstanding: '₹15,000', creditDays: 15 },
      { name: 'CropCare', region: 'Hyderabad', outstanding: '₹42,500', creditDays: 45 },
      { name: 'FarmAid', region: 'Bangalore', outstanding: '₹0', creditDays: 30 }
    ],
    targets: [
      { region: 'North', target: '500', achieved: '420' },
      { region: 'South', target: '600', achieved: '550' },
      { region: 'East', target: '400', achieved: '320' },
      { region: 'West', target: '550', achieved: '480' }
    ],
    performance: [
      { month: 'Jan', value: 42 },
      { month: 'Feb', value: 58 },
      { month: 'Mar', value: 75 },
      { month: 'Apr', value: 63 },
      { month: 'May', value: 82 },
      { month: 'Jun', value: 91 }
    ]
  },
  reducers: {}
});

const warehouseSlice = createSlice({
  name: 'warehouse',
  initialState: {
    stock: [
      { sku: 'BIO-DAP-50KG', qty: 420, batch: 'BATCH-2024-06-01', expiry: '2025-12-31', location: 'A-12' },
      { sku: 'AG-GOLD-4KG', qty: 850, batch: 'BATCH-2024-05-15', expiry: '2025-11-30', location: 'B-08' },
      { sku: 'BELOOM-FS-1L', qty: 320, batch: 'BATCH-2024-06-10', expiry: '2026-01-31', location: 'C-05' }
    ],
    dispatches: [
      { id: 'DISP-001', vehicle: 'TRK-7890', status: 'In Transit', destination: 'Pune' },
      { id: 'DISP-002', vehicle: 'TRK-7891', status: 'Dispatched', destination: 'Hyderabad' },
      { id: 'DISP-003', vehicle: 'TRK-7892', status: 'Pending', destination: 'Bangalore' }
    ],
    movements: [
      { id: 'TXN-001', type: 'Inward', qty: 100, sku: 'BIO-DAP-50KG' },
      { id: 'TXN-002', type: 'Outward', qty: 50, sku: 'AG-GOLD-4KG' },
      { id: 'TXN-003', type: 'Inward', qty: 200, sku: 'BELOOM-FS-1L' }
    ],
    transfers: [
      { id: 'TRF-001', from: 'Main WH', to: 'North WH', status: 'Completed' },
      { id: 'TRF-002', from: 'South WH', to: 'East WH', status: 'In Progress' }
    ]
  },
  reducers: {}
});

const executiveSlice = createSlice({
  name: 'executive',
  initialState: {
    alerts: [
      { id: 1, type: 'Stock Alert', message: 'Low stock for BIO-DAP-50KG' },
      { id: 2, type: 'Payment Due', message: 'CropCare payment overdue by 15 days' },
      { id: 3, type: 'Dispatch Delay', message: 'Delivery to Bangalore delayed by 2 days' }
    ]
  },
  reducers: {}
});

const store = configureStore({
  reducer: {
    sales: salesSlice.reducer,
    warehouse: warehouseSlice.reducer,
    executive: executiveSlice.reducer
  }
});

export default store;