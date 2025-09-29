import {
  Box,
  Button,
  Typography,
  Chip,
} from '@mui/material';
import { Grid } from '@mui/material';
import { Add as AddIcon } from '@mui/icons-material';
import AppCard from '../components/AppCard';
import { applications } from '../constants/applications';
import DashboardLayout from '../layouts/DashboardLayout';

export default function Apps() {
  const connectedApps = applications.filter(app => app.connected);
  const availableApps = applications.filter(app => !app.connected);

  const handleConfigure = (appId: string) => {
    console.log('Configure app:', appId);
  };

  const handleDisconnect = (appId: string) => {
    console.log('Disconnect app:', appId);
  };

  const handleConnect = (appId: string) => {
    console.log('Connect app:', appId);
  };

  const handleAddIntegration = () => {
    console.log('Add new integration');
  };

  return (
    <DashboardLayout>
      <Box>
        {/* Header */}
        <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 4 }}>
          <Box>
            <Typography variant="h4" component="h1" sx={{ fontWeight: 600, mb: 1 }}>
              Apps
            </Typography>
            <Typography variant="body1" color="text.secondary">
              Manage connected applications and integrations.
            </Typography>
          </Box>
          <Button
            variant="contained"
            color='success'
            startIcon={<AddIcon />}
            onClick={handleAddIntegration}
            sx={{
              textTransform: 'none',
              fontWeight: 600,
              px: 3,
              py: 1,
              '&:hover': {
                backgroundColor: '#45a049',
              },
            }}
          >
            Add Integration
          </Button>
        </Box>

        {/* Connected Applications Section */}
        <Box 
          sx={{ 
            mb: 6,
            backgroundColor: '#fafafa',
            borderRadius: 2,
            p: 4,
            border: '1px solid #e0e0e0'
          }}
        >
          <Box sx={{ display: 'flex', alignItems: 'center' }}>
            <Typography variant="h5" component="h2" sx={{ fontWeight: 600, mr: 2 }}>
              Connected Applications
            </Typography>
            <Chip
              label={`${connectedApps.length} connected`}
              size="small"
              sx={{ backgroundColor: '#e8f5e8', color: '#2e7d32' }}
            />
          </Box>
          <Typography variant="body2" color="text.secondary" sx={{ mb: 3 }}>
            Applications currently integrated with PolicyGuard ({connectedApps.length} connected).
          </Typography>
          
          <Grid container spacing={3}>
            {connectedApps.map((app) => (
              <Grid item xs={12} sm={6} md={4} key={app.id} sx={{  width: '30%' }}>
                <AppCard
                  id={app.id}
                  icon={app.icon}
                  title={app.title}
                  description={app.description}
                  connected={app.connected}
                  users={app.users}
                  connectedDate="2025-09-29"
                  onConfigure={() => handleConfigure(app.id)}
                  onDisconnect={() => handleDisconnect(app.id)}
                />
              </Grid>
            ))}
          </Grid>
        </Box>

        {/* Available Integrations Section */}
        <Box
          sx={{ 
            backgroundColor: '#fafafa',
            borderRadius: 2,
            p: 4,
            border: '1px solid #e0e0e0'
          }}
        >
          <Box sx={{ display: 'flex', alignItems: 'center' }}>
            <Typography variant="h5" component="h2" sx={{ fontWeight: 600, mr: 2 }}>
              Available Integrations
            </Typography>
            <Chip
              label={`${availableApps.length} available`}
              size="small"
              sx={{ backgroundColor: '#e8f5e8', color: '#2e7d32' }}
            />
          </Box>
          <Typography variant="body2" color="text.secondary" sx={{ mb: 3 }}>
            Popular applications you can connect to PolicyGuard ({availableApps.length} available).
          </Typography>
          
          <Grid container spacing={3}>
            {availableApps.map((app) => (
              <Grid item xs={12} sm={6} md={4} key={app.id} sx={{  width: '30%' }}>
                <AppCard
                  id={app.id}
                  icon={app.icon}
                  title={app.title}
                  description={app.description}
                  connected={app.connected}
                  onConnect={() => handleConnect(app.id)}
                />
              </Grid>
            ))}
          </Grid>
        </Box>
      </Box>
    </DashboardLayout>
  );
}

