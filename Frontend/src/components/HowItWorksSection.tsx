import React from 'react';
import {
  Box,
  Typography,
  Container,
  Grid,
} from '@mui/material';
import { steps } from '../constants/howItWorks';

interface StepCardProps {
  stepNumber: number;
  icon: React.ReactNode;
  title: string;
  description: string;
}

const StepCard: React.FC<StepCardProps> = ({ stepNumber, icon, title, description }) => (
  <Box
    sx={{
      textAlign: 'center',
      px: { xs: 2, sm: 3 },
    }}
  >
    {/* Icon Container */}
    <Box
      sx={{
        width: { xs: 72, sm: 80, md: 88 },
        height: { xs: 72, sm: 80, md: 88 },
        borderRadius: 3,
        backgroundColor: 'rgba(220, 252, 231, 0.4)',
        border: '1px solid rgba(34, 197, 94, 0.1)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        mx: 'auto',
        mb: { xs: 3, sm: 4 },
        transition: 'all 0.3s ease-in-out',
        '&:hover': {
          backgroundColor: 'rgba(220, 252, 231, 0.6)',
          transform: 'translateY(-2px)',
        },
      }}
    >
      {icon}
    </Box>

    {/* Step Title */}
    <Typography
      variant="h6"
      component="h3"
      sx={{
        fontSize: { xs: '1.1rem', sm: '1.25rem', md: '1.3rem' },
        fontWeight: 700,
        color: '#1f2937',
        mb: { xs: 1.5, sm: 2 },
      }}
    >
      {stepNumber}. {title}
    </Typography>

    {/* Step Description */}
    <Typography
      variant="body1"
      sx={{
        fontSize: { xs: '0.9rem', sm: '1rem' },
        color: '#6b7280',
        lineHeight: 1.6,
        maxWidth: '280px',
        mx: 'auto',
      }}
    >
      {description}
    </Typography>
  </Box>
);

export const HowItWorksSection: React.FC = () => {
 
  return (
    <Box
      sx={{
        py: { xs: 6, sm: 8, md: 12 },
        backgroundColor: '#ffffff',
      }}
    >
      <Container maxWidth="lg">
        {/* Section Header */}
        <Box
          sx={{
            textAlign: 'center',
            mb: { xs: 6, sm: 8, md: 10 },
            maxWidth: '800px',
            mx: 'auto',
          }}
        >
          <Typography
            variant="h2"
            component="h2"
            sx={{
              fontSize: {
                xs: '2rem',
                sm: '2.5rem',
                md: '3rem',
                lg: '3.5rem',
              },
              fontWeight: 800,
              lineHeight: 1.2,
              color: '#1f2937',
              mb: { xs: 2, sm: 3, md: 4 },
              letterSpacing: '-0.02em',
            }}
          >
            How it works
          </Typography>

          <Typography
            variant="h6"
            component="p"
            sx={{
              fontSize: {
                xs: '1rem',
                sm: '1.1rem',
                md: '1.25rem',
              },
              fontWeight: 400,
              lineHeight: 1.6,
              color: '#6b7280',
              maxWidth: '600px',
              mx: 'auto',
            }}
          >
            Get started in minutes with our simple 4-step process
          </Typography>
        </Box>

        {/* Steps Grid */}
        <Grid container spacing={{ xs: 2, sm: 3, md: 4 }}>
          {steps.map((step, index) => (
            <Grid item xs={12} sm={6} md={3} key={index} sx={{ width: '22.9%' }}>
              <StepCard
                stepNumber={index + 1}
                icon={step.icon}
                title={step.title}
                description={step.description}
              />
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
};

export default HowItWorksSection;