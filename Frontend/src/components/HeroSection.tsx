import React from 'react';
import {
  Box,
  Typography,
  Button,
  Container,
  Stack,
} from '@mui/material';
import { ArrowForward } from '@mui/icons-material';

interface HeroSectionProps {
  onGetStarted?: () => void;
  onViewDashboard?: () => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({
  onGetStarted,
  onViewDashboard,
}) => {
  return (
    <Box
      sx={{
        minHeight: { xs: '60vh', sm: '70vh', md: '75vh' },
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        py: { xs: 6, sm: 8, md: 12 },
      }}
    >
      <Container maxWidth="lg">
        <Box
          sx={{
            textAlign: 'center',
            mx: 'auto',
            px: { xs: 2, sm: 3, md: 4 },
          }}
        >
          {/* Main Headline */}
          <Typography
            variant="h1"
            component="h1"
            sx={{
              fontSize: {
                xs: '2.5rem',
                sm: '3.5rem',
                md: '4.5rem',
                lg: '5rem',
              },
              fontWeight: 800,
              lineHeight: { xs: 1.1, sm: 1.15, md: 1.2 },
              color: '#1f2937',
              mb: { xs: 3, sm: 4, md: 5 },
              letterSpacing: '-0.02em',
              '& br': {
                display: { xs: 'none', sm: 'block' },
              },
            }}
          >
            Smart Access &
            Compliance Manager
          </Typography>

          {/* Subtitle */}
          <Typography
            variant="h5"
            component="p"
            sx={{
              fontSize: {
                xs: '1.1rem',
                sm: '1.25rem',
                md: '1.4rem',
                lg: '1.5rem',
              },
              fontWeight: 400,
              lineHeight: 1.6,
              color: '#6b7280',
              mb: { xs: 4, sm: 5, md: 6 },
              maxWidth: '700px',
              mx: 'auto',
              px: { xs: 1, sm: 2 },
            }}
          >
            Manage roles, automate app provisioning, and stay compliant — built
            for startups.
          </Typography>

          {/* Action Buttons */}
          <Stack
            direction={{ xs: 'column', sm: 'row' }}
            spacing={{ xs: 2, sm: 3 }}
            justifyContent="center"
            alignItems="center"
            sx={{ mt: { xs: 4, sm: 5, md: 6 } }}
          >
            {/* Get Started Button */}
            <Button
              variant="contained"
              size="large"
              endIcon={<ArrowForward />}
              onClick={onGetStarted}
              sx={{
                backgroundColor: '#22c55e',
                color: 'white',
                fontWeight: 600,
                fontSize: { xs: '1rem', sm: '1.1rem' },
                textTransform: 'none',
                px: { xs: 3, sm: 4, md: 5 },
                py: { xs: 1.5, sm: 1.8, md: 2 },
                borderRadius: 2,
                boxShadow: '0 4px 14px rgba(34, 197, 94, 0.3)',
                minWidth: { xs: '200px', sm: '160px' },
                transition: 'all 0.2s ease-in-out',
                '&:hover': {
                  backgroundColor: '#16a34a',
                  boxShadow: '0 6px 20px rgba(34, 197, 94, 0.4)',
                  transform: 'translateY(-2px)',
                },
                '&:active': {
                  transform: 'translateY(0px)',
                },
              }}
            >
              Get Started
            </Button>

            {/* View Dashboard Button */}
            <Button
              variant="outlined"
              size="large"
              onClick={onViewDashboard}
              sx={{
                color: '#4b5563',
                borderColor: '#d1d5db',
                fontWeight: 600,
                fontSize: { xs: '1rem', sm: '1.1rem' },
                textTransform: 'none',
                px: { xs: 3, sm: 4, md: 5 },
                py: { xs: 1.5, sm: 1.8, md: 2 },
                borderRadius: 2,
                minWidth: { xs: '200px', sm: '160px' },
                borderWidth: 2,
                transition: 'all 0.2s ease-in-out',
                '&:hover': {
                  borderColor: '#22c55e',
                  color: '#22c55e',
                  backgroundColor: 'rgba(34, 197, 94, 0.05)',
                  transform: 'translateY(-2px)',
                  borderWidth: 2,
                },
                '&:active': {
                  transform: 'translateY(0px)',
                },
              }}
            >
              View Dashboard
            </Button>
          </Stack>
        </Box>
      </Container>
    </Box>
  );
};

export default HeroSection;