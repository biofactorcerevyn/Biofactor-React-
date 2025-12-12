// src/App.js
import React from "react";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import { Provider } from "react-redux";

import LandingPage from "./pages/Landing/LandingPage";
import LoginPage from "./pages/Auth/LoginPage";
import DashboardLayout from "./layouts/DashboardLayout";
import About from "./pages/About";
import ProtectedRoute from "./components/auth/ProtectedRoute";
import RoleProtectedRoute from "./components/auth/RoleProtectedRoute";
import { AuthProvider } from "./contexts/AuthContext";
import store from "./redux/store";
import Contact from "./pages/Contact";
import BiofactorMinerals from "./pages/BiofactorMinerals";
// Import dashboard components
import Overview from "./pages/Overview/Overview";
import Agriculturepage from "./pages/Agriculture";
import PoultryBiofactor from "./pages/PoultryBiofactor";
import RuminantsProducts from "./pages/RuminantsProducts";
import "./index.css";
import "./App.css";
import BiofactorMicrobes from "./pages/BiofactorMicrobes";
import Largeanimals from "./pages/Largeanimals";
import AquacultureProducts from "./pages/AquacultureProducts";
const App = () => {
  return (
    <AuthProvider>
      <Provider store={store}>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<LandingPage />} />
            <Route path="/about" element={<About />} /> 
            <Route path="/biofactor-microbes" element={<BiofactorMicrobes />} />
            <Route path="/biofactor-minerals" element={<BiofactorMinerals />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/auth/login" element={<LoginPage />} />
            <Route path="/agriculture" element={<Agriculturepage />} />
            <Route path="/large-animals" element={<Largeanimals />} />
            <Route path="/aquaculture-products" element={<AquacultureProducts />} />
            <Route path="/poultry" element={<PoultryBiofactor />} />
            <Route path="/ruminants-products" element={<RuminantsProducts />} />
            {/* Protected routes */}
            <Route 
              path="/app" 
              element={
                <ProtectedRoute>
                  <DashboardLayout />
                </ProtectedRoute>
              }
            >
              <Route index element={<Navigate to="dashboard" replace />} />
              <Route path="dashboard" element={<Overview />} />
              
            </Route>
            
            <Route path="*" element={<Navigate to="/" replace />} />
          </Routes>
        </BrowserRouter>
      </Provider>
    </AuthProvider>
  );
};

export default App;