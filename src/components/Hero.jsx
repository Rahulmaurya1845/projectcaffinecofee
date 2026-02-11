import { useEffect, useMemo, useState } from "react";

// HERO IMAGES
import hero1 from "../../assets/hero/home_banner3.png";
import hero2 from "../../assets/hero/home_banner4.png";
import hero3 from "../../assets/hero/home_banner5.png";

export default function Hero() {
  const slides = useMemo(
    () => [
      { img: hero1 },
      { img: hero2 },
      { img: hero3 },
    ],
    []
  );

  const [active, setActive] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setActive((p) => (p + 1) % slides.length);
    }, 6500);
    return () => clearInterval(timer);
  }, [slides.length]);

  return (
    <section
      id="home"
      className="relative w-full min-h-screen bg-black overflow-hidden"
    >
      {/* ================= SLIDES ================= */}
      {slides.map((slide, i) => (
        <div
          key={i}
          className={`absolute inset-0 transition-all duration-[1600ms] ease-[cubic-bezier(0.19,1,0.22,1)]
            ${
              active === i
                ? "opacity-100 scale-100"
                : "opacity-0 scale-[1.03]"
            }
          `}
        >
          {/* IMAGE CONTAINER */}
          <div
            className="
              relative w-full
              pt-[88px] sm:pt-[110px] lg:pt-[120px]
              flex justify-center
            "
          >
            <img
              src={slide.img}
              alt="Hero"
              draggable="false"
              className="
                w-full
                max-w-[100%]
                h-[60vh] sm:h-[70vh] lg:h-[80vh]
                object-contain sm:object-cover
              "
            />

            {/* OVERLAY */}
            <div className="absolute inset-0 bg-black/25" />
          </div>
        </div>
      ))}

      {/* ================= DOTS ================= */}
      <div className="absolute bottom-6 sm:bottom-10 left-0 right-0 z-40 flex justify-center gap-3">
        {slides.map((_, i) => (
          <button
            key={i}
            onClick={() => setActive(i)}
            className={`h-2 rounded-full transition-all duration-500 ${
              active === i
                ? "w-10 bg-lime-400"
                : "w-2 bg-white/30"
            }`}
          />
        ))}
      </div>

      {/* ================= WHATSAPP ================= */}
      <a
        href="https://wa.me/919999777471"
        target="_blank"
        rel="noreferrer"
        className="fixed bottom-4 sm:bottom-6 right-4 sm:right-6 z-50
          w-11 h-11 sm:w-14 sm:h-14
          rounded-full bg-green-500 flex items-center justify-center shadow-lg"
      >
        <svg viewBox="0 0 32 32" fill="white" className="w-6 h-6 sm:w-7 sm:h-7">
          <path d="M16 3C8.83 3 3 8.83 3 16c0 2.3.6 4.46 1.66 6.33L3 29l6.85-1.58A12.93 12.93 0 0 0 16 29c7.17 0 13-5.83 13-13S23.17 3 16 3z" />
        </svg>
      </a>
    </section>
  );
}
