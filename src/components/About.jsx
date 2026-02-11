
import { useEffect, useMemo, useState } from "react";

import img1 from "../../assets/coffee_and_creative_shaily_2.jpg";
import img2 from "../../assets/coffee_and_creative_prabh.jpg";
import img3 from "../../assets/coffee_and_creative_nitin.jpg";
import img4 from "../../assets/coffee_and_creative_vipin.jpg";
import img5 from "../../assets/deepansu.jpg";

import golu from "../../assets/GOLU.png";
import nitin from "../../assets/NITIN.png";
import pk from "../../assets/PK.png";
import shaily from "../../assets/SHAILY.png";
import vipin from "../../assets/VIPIN.png";

export default function About() {
  const slides = useMemo(
    () => [
      {
        topLabel: "सरपंच",
        bottomLabel: "ताऊ की खाट के चार पाये और हुक्का है हम",
        imgs: [
          { img: img1, labelImg: shaily },
          { img: img2, labelImg: pk },
          { img: img3, labelImg: nitin },
        ],
      },
      {
        topLabel: "सरपंच",
        bottomLabel: "जो बोलता है वही होता है… और हम बहुत कुछ हैं",
        imgs: [
          { img: img2, labelImg: pk },
          { img: img3, labelImg: nitin },
          { img: img4, labelImg: vipin },
        ],
      },
      {
        topLabel: "सरपंच",
        bottomLabel: "ब्रांडिंग के लिए हमारे पास आइए वरना जाके भैंस चराइए",
        imgs: [
          { img: img3, labelImg: nitin },
          { img: img4, labelImg: vipin },
          { img: img5, labelImg: golu },
        ],
      },
    ],
    []
  );

  const [active, setActive] = useState(0);
  const [hovered, setHovered] = useState(null);

  useEffect(() => {
    const timer = setInterval(() => {
      setActive((p) => (p + 1) % slides.length);
    }, 6000);
    return () => clearInterval(timer);
  }, [slides.length]);

  return (
    <section className="w-full bg-black overflow-hidden">
      {/* TOP LABEL */}
      <div className="py-6 text-center">
        <span className="bg-yellow-400 px-8 py-2 text-black font-extrabold tracking-widest text-lg md:text-xl">
          {slides[active].topLabel}
        </span>
      </div>

      {/* SLIDES */}
      <div className="relative min-h-screen flex items-center justify-center">
        {slides.map((slide, slideIndex) => (
          <div
            key={slideIndex}
            className={`absolute inset-0 flex justify-center transition-opacity duration-1000
              ${active === slideIndex ? "opacity-100" : "opacity-0 pointer-events-none"}
            `}
          >
            <div className="flex items-center justify-center gap-6 md:gap-10 lg:gap-20 px-4 w-full">
              {slide.imgs.map((item, idx) => {
                const isHovered = hovered === idx;

                return (
                  <div
                    key={idx}
                    onMouseEnter={() => setHovered(idx)}
                    onMouseLeave={() => setHovered(null)}
                    className={`relative
                      ${idx > 0 ? "hidden md:block" : ""}
                      ${idx > 1 ? "hidden lg:block" : ""}
                    `}
                  >
                    {/* MAIN IMAGE */}
                    <img
                      src={item.img}
                      alt=""
                      draggable="false"
                      className={`
                        object-cover rounded-xl transition-all duration-700
                        w-screen h-screen
                        md:w-[360px] md:h-[540px]
                        lg:w-[420px] lg:h-[640px]

                        md:${
                          hovered === null
                            ? "brightness-100"
                            : isHovered
                            ? "brightness-110 scale-[1.04] z-20"
                            : "brightness-[0.45] scale-[0.96]"
                        }
                      `}
                    />

                    {/* TEXT IMAGE — NEVER REMOVED */}
                    <img
                      src={item.labelImg}
                      alt=""
                      draggable="false"
                      className={`
                        absolute left-1/2 bottom-16 -translate-x-1/2
                        w-[200px] lg:w-[230px]
                        transition-all duration-500

                        /* MOBILE: always visible */
                        opacity-100 scale-100

                        /* DESKTOP: only on hover */
                        md:${isHovered ? "opacity-100 scale-100" : "opacity-0 scale-95"}
                      `}
                    />
                  </div>
                );
              })}
            </div>
          </div>
        ))}
      </div>

      {/* BOTTOM STRIP */}
      <div className="bg-yellow-400 py-4 text-center px-4">
        <p className="text-black font-bold tracking-wide text-sm md:text-base">
          {slides[active].bottomLabel}
        </p>
      </div>

      {/* DOTS */}
      <div className="bg-black py-6 flex justify-center gap-2">
        {slides.map((_, i) => (
          <button
            key={i}
            onClick={() => setActive(i)}
            className={`h-2.5 rounded-full transition-all duration-500 ${
              active === i ? "w-10 bg-yellow-400" : "w-2.5 bg-white/30"
            }`}
          />
        ))}
      </div>
    </section>
  );
}
