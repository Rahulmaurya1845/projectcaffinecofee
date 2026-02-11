// import { NavLink } from "react-router-dom";
// import { useState } from "react";

// export default function Navbar() {
//   const [open, setOpen] = useState(false);

//   return (
//     <header className="fixed top-0 left-0 right-0 z-50 bg-black">
//       <div className="mx-auto max-w-7xl px-6 py-4 flex items-center justify-between">

//         {/* LOGO */}
//         <NavLink to="/" className="leading-none">
//           <div className="text-lime-400 font-extrabold text-xl">
//             coffee<span className="text-lime-300">&</span>
//           </div>
//           <div className="text-lime-400 font-extrabold text-xl -mt-1">
//             creative
//           </div>
//           <div className="text-lime-400/70 text-[10px] tracking-widest">
//             lets brew thoughts
//           </div>
//         </NavLink>

//         {/* DESKTOP MENU */}
//         <nav className="hidden md:flex items-center gap-10 text-white/80 text-sm tracking-[0.18em]">
//           <NavLink to="/" className="hover:text-white transition">HOME</NavLink>
//           <NavLink to="/about" className="hover:text-white transition">ABOUT</NavLink>
//           <NavLink to="/services" className="hover:text-white transition">SERVICES</NavLink>
//           <NavLink to="/portfolio" className="hover:text-white transition">PORTFOLIO</NavLink>
//           <NavLink to="/paltan" className="hover:text-white transition">PALTAN</NavLink>
//           <NavLink to="/clients" className="hover:text-white transition">CLIENTS</NavLink>
//           <NavLink to="/contact" className="hover:text-white transition">CONTACT</NavLink>
//         </nav>

//         {/* MOBILE BUTTON */}
//         <button
//           className="md:hidden text-white text-2xl"
//           onClick={() => setOpen(!open)}
//         >
//           ☰
//         </button>
//       </div>

//       {/* MOBILE MENU */}
//       {open && (
//         <div className="md:hidden bg-black px-6 py-8 border-t border-white/10">
//           <nav className="flex flex-col gap-6 text-white/80 text-sm tracking-[0.12em]">
//             <NavLink to="/" onClick={() => setOpen(false)} className="py-2 hover:text-white transition">
//               HOME
//             </NavLink>

//             <NavLink to="/about" onClick={() => setOpen(false)} className="py-2 hover:text-white transition">
//               ABOUT
//             </NavLink>

//             <NavLink to="/services" onClick={() => setOpen(false)} className="py-2 hover:text-white transition">
//               SERVICES
//             </NavLink>

//             <NavLink to="/portfolio" onClick={() => setOpen(false)} className="py-2 hover:text-white transition">
//               PORTFOLIO
//             </NavLink>

//             <NavLink to="/paltan" onClick={() => setOpen(false)} className="py-2 hover:text-white transition">
//               PALTAN
//             </NavLink>

//             <NavLink to="/clients" onClick={() => setOpen(false)} className="py-2 hover:text-white transition">
//               CLIENTS
//             </NavLink>

//             <NavLink to="/contact" onClick={() => setOpen(false)} className="py-2 hover:text-white transition">
//               CONTACT
//             </NavLink>
//           </nav>
//         </div>
//       )}
//     </header>
//   );
// }
import { NavLink } from "react-router-dom";
import { useState } from "react";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-black">
      <div className="mx-auto max-w-7xl px-6 py-4 flex items-center justify-between">

        {/* LOGO */}
        <NavLink to="/" className="leading-none">
          <div className="text-lime-400 font-extrabold text-xl">
            coffee<span className="text-lime-300">&</span>
          </div>
          <div className="text-lime-400 font-extrabold text-xl -mt-1">
            creative
          </div>
          <div className="text-lime-400/70 text-[10px] tracking-widest">
            lets brew thoughts
          </div>
        </NavLink>

        {/* DESKTOP MENU */}
        <nav className="hidden md:flex items-center gap-10 text-white/80 text-sm tracking-[0.18em]">

          <NavLink to="/" className="hover:text-white transition">
            HOME
          </NavLink>

          <NavLink to="/about" className="hover:text-white transition">
            ABOUT
          </NavLink>

          {/* ===== SERVICES WITH CLICK + HOVER ===== */}
          <div className="relative group">
            {/* MAIN SERVICES LINK */}
            <NavLink
              to="/services"
              className="hover:text-white transition"
            >
              SERVICES
            </NavLink>

            {/* DROPDOWN */}
            <div
              className="
                absolute top-full left-1/2 -translate-x-1/2 mt-4
                w-60 bg-black border border-white/10 shadow-xl
                opacity-0 invisible
                group-hover:opacity-100 group-hover:visible
                transition-all duration-200
              "
            >
              <DropdownLink to="/services/creative" label="CREATIVE" />
              <DropdownLink to="/services/digital" label="DIGITAL" />
              <DropdownLink to="/services/photography" label="PHOTOGRAPHY" />
              <DropdownLink to="/services/films" label="FILMS" />
              <DropdownLink to="/services/website" label="WEBSITE" />
              <DropdownLink to="/services/social" label="SOCIAL MEDIA" />
            </div>
          </div>

          <NavLink to="/portfolio" className="hover:text-white transition">
            PORTFOLIO
          </NavLink>

          <NavLink to="/paltan" className="hover:text-white transition">
            PALTAN
          </NavLink>

          <NavLink to="/clients" className="hover:text-white transition">
            CLIENTS
          </NavLink>

          <NavLink to="/contact" className="hover:text-white transition">
            CONTACT
          </NavLink>
        </nav>

        {/* MOBILE BUTTON */}
        <button
          className="md:hidden text-white text-2xl"
          onClick={() => setOpen(!open)}
        >
          ☰
        </button>
      </div>

      {/* MOBILE MENU (UNCHANGED) */}
      {open && (
        <div className="md:hidden bg-black px-6 py-8 border-t border-white/10">
          <nav className="flex flex-col gap-6 text-white/80 text-sm tracking-[0.12em]">
            <NavLink to="/" onClick={() => setOpen(false)}>HOME</NavLink>
            <NavLink to="/about" onClick={() => setOpen(false)}>ABOUT</NavLink>
            <NavLink to="/services" onClick={() => setOpen(false)}>SERVICES</NavLink>
            <NavLink to="/portfolio" onClick={() => setOpen(false)}>PORTFOLIO</NavLink>
            <NavLink to="/paltan" onClick={() => setOpen(false)}>PALTAN</NavLink>
            <NavLink to="/clients" onClick={() => setOpen(false)}>CLIENTS</NavLink>
            <NavLink to="/contact" onClick={() => setOpen(false)}>CONTACT</NavLink>
          </nav>
        </div>
      )}
    </header>
  );
}

/* ===== DROPDOWN ITEM ===== */
function DropdownLink({ to, label }) {
  return (
    <NavLink
      to={to}
      className="block px-5 py-3 text-xs tracking-[0.18em] text-white/70 hover:text-white hover:bg-white/5 transition"
    >
      {label}
    </NavLink>
  );
}
