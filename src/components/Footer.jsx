import { Facebook, Youtube, Instagram, Linkedin } from "lucide-react";
import { Link } from "react-router-dom";
import footerBrand from "../../assets/about/footer_image.png";

export default function Footer() {
  return (
    <footer className="bg-black border-t border-white/10 text-white">
      
      <div className="mx-auto max-w-7xl px-6 py-10 flex flex-col md:flex-row items-center justify-between gap-6">
        
        {/* FOOTER NAV LINKS ONLY */}
        <nav className="flex gap-4 text-sm text-white/70 flex-wrap justify-center md:justify-start">
          <Link to="/" className="hover:text-white transition">Home</Link>
          <Link to="/about" className="hover:text-white transition">About</Link>
          <Link to="/services" className="hover:text-white transition">Services</Link>
          <Link to="/portfolio" className="hover:text-white transition">Portfolio</Link>
          <Link to="/contact" className="hover:text-white transition">Contact</Link>
          <Link to="/blogs" className="hover:text-white transition">Blogs</Link>
        </nav>

        {/* BRAND IMAGE */}
        <div className="flex justify-center">
          <img
            src={footerBrand}
            alt="branding"
            className="w-[300px] max-w-full opacity-90"
            draggable="false"
          />
        </div>

        {/* SOCIAL ICONS */}
        <div className="flex gap-4 text-white/70 justify-center md:justify-end">
          <Social icon={<Facebook />} />
          <Social icon={<Youtube />} />
          <Social icon={<Instagram />} />
          <Social icon={<Linkedin />} />
        </div>
      </div>

      <div className="text-center py-4 text-white/50 text-xs border-t border-white/10">
        © {new Date().getFullYear()} Coffee & Creative | All Rights Reserved
      </div>
    </footer>
  );
}

function Social({ icon }) {
  return (
    <a href="#" className="hover:text-white transition">
      <span className="w-5 h-5 block">{icon}</span>
    </a>
  );
}
