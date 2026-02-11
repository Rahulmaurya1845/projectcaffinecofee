import Hero from "../components/Hero.jsx";
import Services from "../components/Services.jsx";
import Portfolio from "../components/Portfolio.jsx";
import About from "../components/About.jsx";
import Contact from "../components/Contact.jsx";
import ServicesAndChallenge from "../components/ServicesAndChallenge.jsx";

export default function Home() {
  return (
    <>
      <Hero />
      <Services />
      <Portfolio />
      <About />
      <ServicesAndChallenge />
      <Contact />
    </>
  );
}
