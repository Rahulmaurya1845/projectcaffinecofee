import { useEffect, useState, useRef } from "react";
import Footer from "../components/Contact";

// IMAGES
import aboutBanner from "../../assets/about/aboutus_banner_doodle.svg";
import leftImg from "../../assets/about/about-us.png";
import rightImg from "../../assets/about/homepage_aboutus.png";

export default function AboutPage() {
  return (
    <main className="bg-white text-black">

      {/* ===================== TOP BLACK STRIP ===================== */}
      <div className="w-full bg-black py-16">
        <div className="mx-auto max-w-7xl px-6 flex flex-col sm:flex-row items-center justify-center gap-16">
          
          <div className="text-center sm:text-left">
            <p className="text-lime-400 font-extrabold text-4xl md:text-5xl mb-4 tracking-wide">
              सब मोह माया है
            </p>
            <p className="text-white text-lg md:text-xl tracking-wider uppercase">
              PEHLI BAAR ME CLIENT KA APPROVAL KAB AAYA HAI ?
            </p>
          </div>

          <img
            src={aboutBanner}
            alt="about doodle"
            className="w-44 md:w-52 opacity-95 transition-all duration-500 hover:scale-110 hover:-translate-y-2"
            draggable="false"
          />
        </div>
      </div>

      {/* ===================== WHO WE ARE ===================== */}
      <section className="w-full bg-white">
        <div className="mx-auto max-w-7xl px-6 pt-24">
          <p className="text-center text-gray-600 text-3xl tracking-wide font-semibold">
            <span className="text-lime-500">who</span> we are?
          </p>
        </div>

        <div className="mx-auto max-w-7xl px-6 py-20 grid grid-cols-1 md:grid-cols-2 gap-16 items-start">

          {/* LEFT IMAGE + TEXT */}
          <div className="flex flex-col items-center md:items-start group">
            <img
              src={rightImg}
              alt="we are good"
              className="w-full max-w-xl transition-all duration-500 group-hover:scale-105 group-hover:-translate-y-2"
              draggable="false"
            />

            <div className="mt-10 text-[15px] leading-relaxed text-gray-700 space-y-6 max-w-xl">
              <p className="font-bold uppercase tracking-wide text-black text-lg">
                Thirsty for <span className="text-lime-500">branding?</span>
              </p>

              <p>
                Sit back & sip a cup of coffee with us. We are crazy kickass
                brain boxes who understand people and create uncommon ideas
                to make your brand <span className="text-lime-600 font-semibold">stand out.</span>
              </p>

              <p>
                In our <strong className="text-black">24 years</strong> with{" "}
                <strong className="text-black">50+ artists</strong>, we completed{" "}
                <strong className="text-black">10000+ projects</strong> and handled{" "}
                <strong className="text-black">1000+ brands</strong> worldwide.
              </p>

              <p className="font-medium text-gray-900">
                We don’t only do marketing — <span className="text-lime-600">we slay it.</span>
              </p>
            </div>
          </div>

          {/* RIGHT IMAGE */}
          <div className="flex justify-center md:justify-end group">
            <img
              src={leftImg}
              alt="about illustration"
              className="w-full max-w-xl transition-all duration-500 group-hover:scale-105 group-hover:-translate-y-2"
              draggable="false"
            />
          </div>

        </div>
      </section>

      {/* ===================== YELLOW STRIP ===================== */}
      <div className="w-full bg-lime-400 py-8 text-center">
        <p className="text-black font-extrabold text-xl tracking-wide">
          अगर CHANGES ना होते... तो आज हम चाँद पर होते
        </p>
      </div>

      {/* ===================== STATS ===================== */}
      <section className="relative w-full bg-black overflow-hidden">
        <div
          className="absolute inset-0 opacity-40"
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1521737604893-d14cc237f11d?auto=format&fit=crop&w=2000&q=80')",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        />
        <div className="absolute inset-0 bg-black/70" />

        <div className="relative z-10 mx-auto max-w-7xl px-6 py-24">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-12 text-center">
            <AnimatedStat end={24} label="YEARS" />
            <AnimatedStat end={50} label="ARTISTS" />
            <AnimatedStat end={1000} label="BRANDS" />
            <AnimatedStat end={10000} label="PROJECTS" />
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}

/* ===================== ANIMATED STAT (On Scroll) ===================== */
function AnimatedStat({ end, label }) {
  const [count, setCount] = useState(1);
  const [visible, setVisible] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
        }
      },
      { threshold: 0.5 }
    );

    if (ref.current) observer.observe(ref.current);

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!visible) return;

    let current = 1;
    const step = Math.ceil(end / 40);

    const timer = setInterval(() => {
      current += step;
      if (current >= end) {
        setCount(end);
        clearInterval(timer);
      } else {
        setCount(current);
      }
    }, 40);

    return () => clearInterval(timer);
  }, [visible, end]);

  return (
    <div ref={ref} className="text-white group">
      <div className="text-5xl font-light tracking-wide text-lime-400 transition-all duration-300 group-hover:scale-110">
        {count}+
      </div>
      <div className="mt-3 text-xs tracking-[0.3em] text-white/70">
        {label}
      </div>
    </div>
  );
}
