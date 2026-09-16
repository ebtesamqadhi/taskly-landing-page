import "./App.css";
import Navbar from "./layout/Navbar";
import Hero from "./sections/Hero";
import TrustedTeams from "./sections/TrustedTeams";
import Features from "./sections/Features";
import HowItWorks from "./sections/HowItWorks";
function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <TrustedTeams />
      <Features />
      <HowItWorks />
    </>
  );
}

export default App;
