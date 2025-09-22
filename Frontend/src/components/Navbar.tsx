import React, { useState } from 'react';
import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  Box,
  Container,
  IconButton,
  Menu,
  MenuItem,
  useTheme,
  useMediaQuery,
} from '@mui/material';
import {
  Security as ShieldIcon,
  Menu as MenuIcon,
  Close as CloseIcon,
} from '@mui/icons-material';
import { useNavigate } from 'react-router-dom';

interface FloatingNavBarProps {
  onNavigate?: (path: string) => void;
}

export const FloatingNavBar: React.FC<FloatingNavBarProps> = ({ onNavigate }) => {
  const [mobileMenuAnchor, setMobileMenuAnchor] = useState<null | HTMLElement>(null);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));
  const navigate = useNavigate();

  const navigationItems = [
    { label: 'Features', path: '/features' },
    { label: 'How it Works', path: '/how-it-works' },
    { label: 'Dashboard', path: '/dashboard' },
  ];

  const handleMobileMenuOpen = (event: React.MouseEvent<HTMLElement>) => {
    setMobileMenuAnchor(event.currentTarget);
  };

  const handleMobileMenuClose = () => {
    setMobileMenuAnchor(null);
  };

  const handleNavigation = (path: string) => {
    if (onNavigate) {
      onNavigate(path);
    } else if (navigate) {
      navigate(path);
    }
    handleMobileMenuClose();
  };

  const handleLoginClick = () => {
    handleNavigation('/login');
  };

  return (
    <>
      <AppBar
        position="fixed"
        elevation={0}
        sx={{
          top: { xs: 16, sm: 20, md: 24 },
          left: '50%',
          transform: 'translateX(-50%)',
          width: {
            xs: 'calc(100% - 32px)',
            sm: 'calc(100% - 80px)',
            md: 'calc(100% - 120px)',
            lg: '1200px',
          },
          maxWidth: '1200px',
          borderRadius: { xs: 2, sm: 3, md: 4 },
          background: 'rgba(255, 255, 255, 0.1)',
          backdropFilter: 'blur(20px)',
          border: '1px solid rgba(255, 255, 255, 0.2)',
          boxShadow: '0 8px 32px rgba(0, 0, 0, 0.1)',
          '&::before': {
            content: '""',
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            borderRadius: 'inherit',
            background: 'linear-gradient(135deg, rgba(255, 255, 255, 0.2), rgba(255, 255, 255, 0.05))',
            zIndex: -1,
          },
        }}
      >
        <Container maxWidth={false} sx={{ px: { xs: 1, sm: 2, md: 3 } }}>
          <Toolbar
            disableGutters
            sx={{
              minHeight: { xs: 56, sm: 64, md: 70 },
              px: { xs: 1, sm: 2 },
            }}
          >
            {/* Logo Section */}
            <Box
              display="flex"
              alignItems="center"
              gap={1}
              sx={{ cursor: 'pointer' }}
              onClick={() => handleNavigation('/')}
            >
              <ShieldIcon
                sx={{
                  color: '#22c55e',
                  fontSize: { xs: '1.8rem', sm: '2rem', md: '2.2rem' },
                }}
              />
              <Typography
                variant="h6"
                component="div"
                sx={{
                  fontWeight: 700,
                  fontSize: { xs: '1.1rem', sm: '1.25rem', md: '1.4rem' },
                  color: '#1f2937',
                  letterSpacing: '-0.02em',
                }}
              >
                PolicyGuard
              </Typography>
            </Box>

            <Box sx={{ flexGrow: 1 }} />

            {/* Desktop Navigation */}
            {!isMobile && (
              <Box
                display="flex"
                alignItems="center"
                gap={{ sm: 1, md: 2, lg: 3 }}
                sx={{ mr: { sm: 2, md: 3 } }}
              >
                {navigationItems.map((item) => (
                  <Button
                    key={item.label}
                    onClick={() => handleNavigation(item.path)}
                    sx={{
                      color: '#4b5563',
                      fontWeight: 500,
                      fontSize: { sm: '0.9rem', md: '1rem' },
                      textTransform: 'none',
                      px: { sm: 1.5, md: 2 },
                      py: 1,
                      borderRadius: 2,
                      transition: 'all 0.2s ease-in-out',
                      '&:hover': {
                        backgroundColor: 'rgba(34, 197, 94, 0.1)',
                        color: '#22c55e',
                        transform: 'translateY(-1px)',
                      },
                    }}
                  >
                    {item.label}
                  </Button>
                ))}
              </Box>
            )}

            {/* Login Button - Desktop */}
            {!isMobile && (
              <Button
                variant="contained"
                onClick={handleLoginClick}
                sx={{
                  backgroundColor: '#22c55e',
                  color: 'white',
                  fontWeight: 600,
                  fontSize: { sm: '0.9rem', md: '1rem' },
                  textTransform: 'none',
                  px: { sm: 2, md: 3 },
                  py: { sm: 0.8, md: 1 },
                  borderRadius: 2,
                  boxShadow: '0 4px 12px rgba(34, 197, 94, 0.3)',
                  transition: 'all 0.2s ease-in-out',
                  '&:hover': {
                    backgroundColor: '#16a34a',
                    boxShadow: '0 6px 20px rgba(34, 197, 94, 0.4)',
                    transform: 'translateY(-1px)',
                  },
                }}
              >
                Login
              </Button>
            )}

            {/* Mobile Menu Button */}
            {isMobile && (
              <IconButton
                size="large"
                aria-controls="mobile-menu"
                aria-haspopup="true"
                onClick={handleMobileMenuOpen}
                sx={{
                  color: '#4b5563',
                  '&:hover': {
                    backgroundColor: 'rgba(34, 197, 94, 0.1)',
                    color: '#22c55e',
                  },
                }}
              >
                {mobileMenuAnchor ? <CloseIcon /> : <MenuIcon />}
              </IconButton>
            )}
          </Toolbar>
        </Container>
      </AppBar>

      {/* Mobile Menu */}
      <Menu
        id="mobile-menu"
        anchorEl={mobileMenuAnchor}
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'right',
        }}
        keepMounted
        transformOrigin={{
          vertical: 'top',
          horizontal: 'right',
        }}
        open={Boolean(mobileMenuAnchor)}
        onClose={handleMobileMenuClose}
        sx={{
          display: { xs: 'block', md: 'none' },
          '& .MuiPaper-root': {
            mt: 1,
            borderRadius: 2,
            minWidth: 200,
            background: 'rgba(255, 255, 255, 0.95)',
            backdropFilter: 'blur(20px)',
            border: '1px solid rgba(255, 255, 255, 0.2)',
            boxShadow: '0 8px 32px rgba(0, 0, 0, 0.15)',
          },
        }}
      >
        {navigationItems.map((item) => (
          <MenuItem
            key={item.label}
            onClick={() => handleNavigation(item.path)}
            sx={{
              py: 1.5,
              px: 2,
              fontSize: '1rem',
              fontWeight: 500,
              color: '#4b5563',
              '&:hover': {
                backgroundColor: 'rgba(34, 197, 94, 0.1)',
                color: '#22c55e',
              },
            }}
          >
            {item.label}
          </MenuItem>
        ))}
        <Box sx={{ px: 2, py: 1 }}>
          <Button
            fullWidth
            variant="contained"
            onClick={handleLoginClick}
            sx={{
              backgroundColor: '#22c55e',
              color: 'white',
              fontWeight: 600,
              textTransform: 'none',
              py: 1,
              borderRadius: 2,
              '&:hover': {
                backgroundColor: '#16a34a',
              },
            }}
          >
            Login
          </Button>
        </Box>
      </Menu>

      {/* Spacer to prevent content overlap */}
      <Box sx={{ height: { xs: 88, sm: 104, md: 118 } }} />
    </>
  );
};

export default FloatingNavBar;