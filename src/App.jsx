import "./App.css";
import Navbar from "./layout/Navbar";
import Hero from "./sections/Hero";
import TrustedTeams from "./sections/TrustedTeams";
import Features from "./sections/Features";
import HowItWorks from "./sections/HowItWorks";
import Stats from "./sections/Stats";
import Testimonials from "./sections/Testimonials";
import Pricing from "./sections/Pricing";
function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <TrustedTeams />
      <Features />
      <HowItWorks />
      <Stats />
      <Testimonials />
      <Pricing />
    </>
  );
}

export default App;
