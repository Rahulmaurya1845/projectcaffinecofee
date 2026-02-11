import { Routes, Route, useLocation } from "react-router-dom";
import { useEffect } from "react";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

import Home from "./pages/Home";
import AboutPage from "./pages/AboutPage";
import ServicesPage from "./pages/ServicesPage";
import PortfolioPage from "./pages/PortfolioPage";
import ContactPage from "./pages/ContactPage";
import PaltanPage from "./pages/PaltanPage";
import ClientsPage from "./pages/ClientsPage";
import Blogs from "./pages/Blogs";

/* SERVICES SUB PAGES */
import Creative from "./pages/services/Creative";
import Digital from "./pages/services/Digital";
import Photography from "./pages/services/Photography";
import Films from "./pages/services/Films";
import Website from "./pages/services/Website";
import Social from "./pages/services/Social";

export default function App() {
  const location = useLocation();

  // 🔥 PAGE CHANGE FEEL
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);

  return (
    <>
      <Navbar />

      {/* 👇 navbar height offset */}
      <main className="pt-[96px] min-h-screen">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/services" element={<ServicesPage />} />

          {/* SERVICES ROUTES */}
          <Route path="/services/creative" element={<Creative />} />
          <Route path="/services/digital" element={<Digital />} />
          <Route path="/services/photography" element={<Photography />} />
          <Route path="/services/films" element={<Films />} />
          <Route path="/services/website" element={<Website />} />
          <Route path="/services/social" element={<Social />} />

          <Route path="/portfolio" element={<PortfolioPage />} />
          <Route path="/paltan" element={<PaltanPage />} />
          <Route path="/clients" element={<ClientsPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/blogs" element={<Blogs />} />
        </Routes>
      </main>

      <Footer />
    </>
  );
}
