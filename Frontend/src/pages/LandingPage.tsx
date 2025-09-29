import { useNavigate } from "react-router-dom";
import HeroSection from "../components/HeroSection";
import FloatingNavBar from "../components/Navbar";
import FeaturesSection from "../components/FeaturesSection";
import HowItWorksSection from "../components/HowItWorksSection";
import CTAAndFooter from "../components/CTAandFooter";
import { useEffect } from "react";

export function LandingPage() {
  const navigate = useNavigate();
  const handleGetStarted = () => {
    navigate('/signup');
  };

  const handleViewDashboard = () => {
    navigate('/dashboard');
  };

  const handleNavigation = (path: string) => {
    navigate(path);
  };

  useEffect(() => {
    const token  = localStorage.getItem('accessToken');
    if(token){
      navigate('/dashboard');
    }
  }
, [navigate]);

  return (
    <div>
      <FloatingNavBar />
      <HeroSection
        onGetStarted={handleGetStarted}
        onViewDashboard={handleViewDashboard}
      />
      <FeaturesSection />
      <HowItWorksSection />
      <CTAAndFooter
        onGetStarted={handleGetStarted}
        onNavigate={handleNavigation}
      />
    </div>
  );
}