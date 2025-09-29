import React from 'react';
import {
  Card,
  CardContent,
  Typography,
  Button,
  Box,
  Chip,
  IconButton,
} from '@mui/material';
import {
  Settings as SettingsIcon,
  LinkOff as DisconnectIcon,
  OpenInNew as ExternalLinkIcon,
} from '@mui/icons-material';

interface AppCardProps {
  id: string;
  icon: React.ReactElement;
  title: string;
  description: string;
  connected: boolean;
  users?: string;
  connectedDate?: string;
  onConfigure?: () => void;
  onDisconnect?: () => void;
  onConnect?: () => void;
}

const AppCard: React.FC<AppCardProps> = ({
  icon,
  title,
  description,
  connected,
  users,
  connectedDate,
  onConfigure,
  onDisconnect,
  onConnect,
}) => {
  return (
    <Card
      sx={{
        width: '100%',
        display: 'flex',
        flexDirection: 'column',
        border: '1px solid #e0e0e0',
        borderRadius: 2,
        boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
        '&:hover': {
          boxShadow: '0 4px 8px rgba(0,0,0,0.15)',
        },
      }}
    >
      <CardContent sx={{ flexGrow: 1, p: 3, position: 'relative' }}>
        {/* External Link Icon - Top Right */}
        {connected && (
          <IconButton 
            size="small" 
            sx={{ 
              position: 'absolute',
              top: 12,
              right: 12,
              p: 0.5,
              color: 'text.secondary'
            }}
          >
            <ExternalLinkIcon fontSize="small" />
          </IconButton>
        )}
        
        <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
          <Box
            sx={{
              width: 40,
              height: 40,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              mr: 2,
              color: 'text.primary',
            }}
          >
            {icon}
          </Box>
          <Box sx={{ flexGrow: 1 }}>
            <Typography variant="h6" component="h3" sx={{ fontWeight: 600, mb: 0.5 }}>
              {title}
            </Typography>
            <Chip
              label={connected ? 'Connected' : 'Available'}
              color={connected ? 'success' : 'success'}
              size="small"
              sx={{ fontSize: '0.75rem' }}
            />
          </Box>
        </Box>

        <Typography
          variant="body2"
          color="text.secondary"
          sx={{ mb: 2, lineHeight: 1.5 }}
        >
          {description}
        </Typography>

        {connected && (
          <Box sx={{ mb: 2, display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <Typography variant="body2" color="text.secondary">
              Connected: {connectedDate}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              {users}
            </Typography>
          </Box>
        )}

        <Box sx={{ display: 'flex', gap: 1, mt: 'auto' }}>
          {connected ? (
            <>
              <Button
                variant="outlined"
                startIcon={<SettingsIcon />}
                onClick={onConfigure}
                sx={{
                  flex: 1,
                  borderColor: '#e0e0e0',
                  color: 'text.primary',
                  backgroundColor: 'white',
                  textTransform: 'none',
                  fontWeight: 500,
                  '&:hover': {
                    borderColor: '#bdbdbd',
                    backgroundColor: '#f5f5f5',
                  },
                }}
              >
                Configure
              </Button>
              <Button
                variant="outlined"
                startIcon={<DisconnectIcon />}
                onClick={onDisconnect}
                sx={{
                  flex: 1,
                  borderColor: '#f44336',
                  color: '#f44336',
                  backgroundColor: 'white',
                  textTransform: 'none',
                  fontWeight: 500,
                  '&:hover': {
                    borderColor: '#d32f2f',
                    backgroundColor: '#ffebee',
                  },
                }}
              >
                Disconnect
              </Button>
            </>
          ) : (
            <Button
              variant="contained"
              onClick={onConnect}
              sx={{
                flex: 1,
                backgroundColor: '#4caf50',
                textTransform: 'none',
                fontWeight: 600,
                '&:hover': {
                  backgroundColor: '#45a049',
                },
              }}
            >
              Connect
            </Button>
          )}
        </Box>
      </CardContent>
    </Card>
  );
};

export default AppCard;
