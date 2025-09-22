import React from 'react';
import {
  Box,
  Typography,
  Container,
  Grid,
  Card,
  CardContent,
} from '@mui/material';
import { features } from '../constants/features';

interface FeatureCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

const FeatureCard: React.FC<FeatureCardProps> = ({ icon, title, description }) => (
  <Card
    sx={{
      height: '100%',
      backgroundColor: 'rgba(220, 252, 231, 0.3)',
      border: '1px solid rgba(34, 197, 94, 0.1)',
      borderRadius: 3,
      transition: 'all 0.3s ease-in-out',
      '&:hover': {
        transform: 'translateY(-4px)',
        boxShadow: '0 12px 24px rgba(34, 197, 94, 0.15)',
        backgroundColor: 'rgba(220, 252, 231, 0.5)',
      },
    }}
  >
    <CardContent
      sx={{
        textAlign: 'center',
        p: { xs: 3, sm: 4, md: 5 },
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
      }}
    >
      {/* Icon Container */}
      <Box
        sx={{
          width: { xs: 64, sm: 72, md: 80 },
          height: { xs: 64, sm: 72, md: 80 },
          borderRadius: '50%',
          backgroundColor: 'rgba(34, 197, 94, 0.1)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          mb: { xs: 2, sm: 3 },
          transition: 'all 0.3s ease-in-out',
        }}
      >
        {icon}
      </Box>

      {/* Title */}
      <Typography
        variant="h6"
        component="h3"
        sx={{
          fontSize: { xs: '1.1rem', sm: '1.25rem', md: '1.3rem' },
          fontWeight: 700,
          color: '#1f2937',
          mb: { xs: 1.5, sm: 2 },
          textAlign: 'center',
        }}
      >
        {title}
      </Typography>

      {/* Description */}
      <Typography
        variant="body1"
        sx={{
          fontSize: { xs: '0.9rem', sm: '1rem' },
          color: '#6b7280',
          lineHeight: 1.6,
          textAlign: 'center',
          flex: 1,
          display: 'flex',
          alignItems: 'center',
        }}
      >
        {description}
      </Typography>
    </CardContent>
  </Card>
);

export const FeaturesSection: React.FC = () => {
 
  return (
    <Box
      sx={{
        py: { xs: 6, sm: 8, md: 12 },
        backgroundColor: '#f9f6fe',
        width: '100%',
        // border: '2px solid blue'
      }}
    >
      <Container sx={{ width: '80rem', p:'0.5rem' }} >
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
            Everything you need
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
            Streamline access management with powerful features designed for
            modern teams
          </Typography>
        </Box>

        {/* Features Grid */}
        <Grid container spacing={{ xs: 2, sm: 3, md: 4 }}>
          {features.map((feature, index) => (
            <Grid item xs={12} sm={6} md={3} key={index} sx={{ width: '22.9%' }}>
              <FeatureCard
                icon={feature.icon}
                title={feature.title}
                description={feature.description}
              />
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
};

export default FeaturesSection;