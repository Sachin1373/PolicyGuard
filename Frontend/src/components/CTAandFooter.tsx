import React from 'react';
import {
  Box,
  Typography,
  Container,
  Button,
  Grid,
  Link,
} from '@mui/material';
import {
  ArrowForward,
  Security as ShieldIcon,
} from '@mui/icons-material';
import { footerSections } from '../constants/footerSection';

interface CTASectionProps {
  onGetStarted?: () => void;
}

interface FooterProps {
  onNavigate?: (path: string) => void;
}

// CTA Section Component
export const CTASection: React.FC<CTASectionProps> = ({ onGetStarted }) => {
  return (
    <Box
      sx={{
        py: { xs: 6, sm: 8, md: 12 },
        backgroundColor: '#ffffff',
        textAlign: 'center',
      }}
    >
      <Container maxWidth="md">
        <Typography
          variant="h2"
          component="h2"
          sx={{
            fontSize: {
              xs: '2rem',
              sm: '2.5rem',
              md: '3rem',
              lg: '3.25rem',
            },
            fontWeight: 800,
            lineHeight: 1.2,
            color: '#1f2937',
            mb: { xs: 2, sm: 3, md: 4 },
            letterSpacing: '-0.02em',
          }}
        >
          Start Using PolicyGuard
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
            mb: { xs: 4, sm: 5, md: 6 },
            maxWidth: '600px',
            mx: 'auto',
          }}
        >
          Join teams who trust PolicyGuard for their access management needs
        </Typography>

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
          Get Started Free
        </Button>
      </Container>
    </Box>
  );
};

// Footer Component
export const Footer: React.FC<FooterProps> = ({ onNavigate }) => {
  const handleNavigation = (path: string) => {
    if (onNavigate) {
      onNavigate(path);
    }
  };

  return (
    <Box
      sx={{
        backgroundColor: '#f8fafc',
        borderTop: '1px solid #e5e7eb',
      }}
    >
      <Container maxWidth="lg">
        <Box
          sx={{
            py: { xs: 6, sm: 8, md: 10 },
            // border: '2px solid red'
          }}
        >
          <Grid container spacing={{ xs: 4, sm: 6, md: 25 }}>
            {/* Brand Section */}
            <Grid item xs={12} md={4}>
              <Box
                display="flex"
                alignItems="center"
                gap={1}
                sx={{ mb: { xs: 2, sm: 3 } }}
              >
                <ShieldIcon
                  sx={{
                    color: '#22c55e',
                    fontSize: '1.75rem',
                  }}
                />
                <Typography
                  variant="h6"
                  component="div"
                  sx={{
                    fontWeight: 700,
                    fontSize: '1.25rem',
                    color: '#1f2937',
                    letterSpacing: '-0.02em',
                  }}
                >
                  PolicyGuard
                </Typography>
              </Box>
              <Typography
                variant="body1"
                sx={{
                  fontSize: '1rem',
                  color: '#6b7280',
                  lineHeight: 1.6,
                  maxWidth: '300px',
                }}
              >
                Smart Access & Compliance Manager for modern teams
              </Typography>
            </Grid>

            {/* Footer Links */}
            {footerSections.map((section, index) => (
              <Grid item xs={6} sm={4} md={2} key={index}>
                <Typography
                  variant="h6"
                  sx={{
                    fontSize: '1rem',
                    fontWeight: 600,
                    color: '#1f2937',
                    mb: { xs: 2, sm: 3 },
                  }}
                >
                  {section.title}
                </Typography>
                <Box
                  sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    gap: { xs: 1, sm: 1.5 },
                  }}
                >
                  {section.links.map((link, linkIndex) => (
                    <Link
                      key={linkIndex}
                      component="button"
                      onClick={() => handleNavigation(link.path)}
                      sx={{
                        fontSize: '0.9rem',
                        color: '#6b7280',
                        textDecoration: 'none',
                        textAlign: 'left',
                        background: 'none',
                        border: 'none',
                        cursor: 'pointer',
                        padding: 0,
                        transition: 'color 0.2s ease-in-out',
                        '&:hover': {
                          color: '#22c55e',
                        },
                      }}
                    >
                      {link.label}
                    </Link>
                  ))}
                </Box>
              </Grid>
            ))}
          </Grid>
        </Box>

        {/* Copyright */}
        <Box
          sx={{
            borderTop: '1px solid #e5e7eb',
            py: { xs: 3, sm: 4 },
            textAlign: 'center',
          }}
        >
          <Typography
            variant="body2"
            sx={{
              fontSize: '0.9rem',
              color: '#6b7280',
            }}
          >
            © 2025 PolicyGuard. Built with React + Node + Go.
          </Typography>
        </Box>
      </Container>
    </Box>
  );
};

// Combined Export for easier import
export const CTAAndFooter: React.FC<{
  onGetStarted?: () => void;
  onNavigate?: (path: string) => void;
}> = ({ onGetStarted, onNavigate }) => {
  return (
    <>
      <CTASection onGetStarted={onGetStarted} />
      <Footer onNavigate={onNavigate} />
    </>
  );
};

export default CTAAndFooter;