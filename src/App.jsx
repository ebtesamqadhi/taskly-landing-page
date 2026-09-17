import "./App.css";
import Navbar from "./layout/Navbar";
import Hero from "./sections/Hero";
import TrustedTeams from "./sections/TrustedTeams";
import Features from "./sections/Features";
import HowItWorks from "./sections/HowItWorks";
import Stats from "./sections/Stats";
function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <TrustedTeams />
      <Features />
      <HowItWorks />
      <Stats />
    </>
  );
}

export default App;
