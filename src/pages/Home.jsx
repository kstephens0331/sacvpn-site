import Header from '../components/Header';
import HeroSection from '../components/HeroSection';
import FeaturesSection from '../components/FeaturesSection';
import Footer from '../components/Footer';

export default function Home() {
  return (
    <>
      <HeroSection />
      <FeaturesSection />
    </>
  );
}
function App() {
    return (
      <div className="relative min-h-screen">
        <div className="absolute inset-0 bg-white/70 backdrop-blur-sm z-0"></div>
        <div className="relative z-10">
          <Home />
        </div>
      </div>
    );
  }