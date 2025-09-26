// layouts/DashboardLayout.tsx
import {  Box } from "@mui/material";
import React, { type ReactNode } from "react";
import { Sidebar } from "../components/Sidebar";
import DashboardNavbar from "../components/DashboardNavbar";


interface DashboardLayoutProps {
  children: ReactNode;
}

const DashboardLayout: React.FC<DashboardLayoutProps> = ({ children }) => {

  return (
    <div className="dashboard-layout" style={{ display: "flex", minHeight: "100vh" }}>
      {/* Sidebar */}
      <Box sx={{ width: '15%', borderRight: "1px solid #E5E7EB" }}>
       <Sidebar /> 
      </Box>

      {/* Main Content */}
      <div className="main-content" style={{ flex: 1, background: "#F9FAFB" }}>
        <DashboardNavbar/>
        <div style={{ padding: "1rem 2rem" }}>{children}</div>
      </div>
    </div>
  );
};

export default DashboardLayout;
