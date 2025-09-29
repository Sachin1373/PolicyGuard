// pages/DashboardPage.tsx
import React from "react";
import DashboardLayout from "../layouts/DashboardLayout";
import { Box, Typography, Card, CardContent, Grid } from "@mui/material";

const Dashboard: React.FC = () => {
  return (
    <DashboardLayout>
      {/* Dashboard Content */}
      <Box>
        <Typography variant="h4" component="h1" sx={{ fontWeight: 600, mb: 4 }}>
          Dashboard
        </Typography>
        <Typography variant="body1" color="text.secondary" sx={{ mb: 4 }}>
          Welcome to PolicyGuard Dashboard. Monitor your security policies and integrations.
        </Typography>
        
        <Grid container spacing={3}>
          <Grid xs={12} sm={6} md={3}>
            <Card>
              <CardContent>
                <Typography variant="h6" component="div">
                  Total Apps
                </Typography>
                <Typography variant="h4" color="primary">
                  1
                </Typography>
              </CardContent>
            </Card>
          </Grid>
          <Grid xs={12} sm={6} md={3}>
            <Card>
              <CardContent>
                <Typography variant="h6" component="div">
                  Active Users
                </Typography>
                <Typography variant="h4" color="primary">
                  2
                </Typography>
              </CardContent>
            </Card>
          </Grid>
          <Grid xs={12} sm={6} md={3}>
            <Card>
              <CardContent>
                <Typography variant="h6" component="div">
                  Policies
                </Typography>
                <Typography variant="h4" color="primary">
                  5
                </Typography>
              </CardContent>
            </Card>
          </Grid>
          <Grid xs={12} sm={6} md={3}>
            <Card>
              <CardContent>
                <Typography variant="h6" component="div">
                  Alerts
                </Typography>
                <Typography variant="h4" color="error">
                  0
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      </Box>
    </DashboardLayout>
  );
};

export default Dashboard;
