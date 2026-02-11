import { useEffect, useState } from "react";
import Footer from "../components/Contact";

// IMAGES
import aboutBanner from "../../assets/about/aboutus_banner_doodle.svg";
import leftImg from "../../assets/about/about-us.png";          // RIGHT SIDE IMAGE
import rightImg from "../../assets/about/homepage_aboutus.png"; // LEFT SIDE IMAGE

export default function AboutPage() {
  return (
    <main className="pt-[96px] bg-white text-black">

      {/* ===================== TOP BLACK STRIP ===================== */}
      <div className="w-full bg-black py-10">
        <div className="mx-auto max-w-7xl px-6 flex flex-col sm:flex-row items-center justify-center gap-10">
          <div className="text-center sm:text-left">
            <p className="text-lime-400 font-extrabold text-2xl mb-2">
              सब मोह माया है
            </p>
            <p className="text-white/70 text-sm tracking-wider uppercase">
              PEHLI BAAR ME CLIENT KA APPROVAL KAB AAYA HAI ?
            </p>
          </div>

          <img
            src={aboutBanner}
            alt="about doodle"
            className="w-24 opacity-90"
            draggable="false"
          />
        </div>
      </div>

      {/* ===================== WHO WE ARE ===================== */}
      <section className="w-full bg-white">
        <div className="mx-auto max-w-7xl px-6 pt-24">
          <p className="text-center text-gray-500 text-2xl tracking-wide">
            who we are?
          </p>
        </div>

        <div className="mx-auto max-w-7xl px-6 py-20 grid grid-cols-1 md:grid-cols-2 gap-14 items-start">

          {/* LEFT IMAGE + TEXT */}
          <div className="flex flex-col items-center md:items-start">
            <img
              src={rightImg}
              alt="we are good"
              className="w-full max-w-xl"
              draggable="false"
            />

            {/* TEXT BELOW LEFT IMAGE */}
            <div className="mt-10 text-sm leading-relaxed text-gray-700 space-y-6 max-w-xl">
              <p className="font-bold uppercase tracking-wide text-black">
                Thirsty for branding?
              </p>

              <p>
                Sit back & sip a cup of coffee with us. We are crazy kickass
                brain boxes doing everything unless you want to see magic
                tricks done by pasha. Jokes apart! We are the ones who breathe
                amongst common people, understand them and come out with
                uncommon ideas to make your brand stand out.
              </p>

              <p>
                We are a plethora of ideas, delivering impactful tailor-made
                strategies and eye-catchy imagery every now and often.
              </p>

              <p>
                In our <strong>24 years of experience</strong> with{" "}
                <strong>50+ artists</strong>, we have completed{" "}
                <strong>10000+ projects</strong>, handled{" "}
                <strong>1000+ brands</strong> worldwide and earned{" "}
                <strong>20,000+ claps</strong>.
              </p>

              <p>
                The goal is to make business stories, move hearts, get
                recognized, and drive results. We don’t only do marketing —
                we slay it. We are ninjas with computers & workstations!
              </p>
            </div>
          </div>

          {/* RIGHT IMAGE ONLY */}
          <div className="flex justify-center md:justify-end">
            <img
              src={leftImg}
              alt="about illustration"
              className="w-full max-w-xl"
              draggable="false"
            />
          </div>

        </div>
      </section>

      {/* ===================== YELLOW STRIP ===================== */}
      <div className="w-full bg-lime-400 py-6 text-center">
        <p className="text-black font-extrabold text-lg tracking-wide">
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
        <div className="absolute inset-0 bg-black/60" />

        <div className="relative z-10 mx-auto max-w-7xl px-6 py-20">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-10 text-center">
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

/* ===================== ANIMATED STAT ===================== */
function AnimatedStat({ end, label }) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let current = 0;
    const step = Math.ceil(end / 40);

    const timer = setInterval(() => {
      current += step;
      if (current >= end) {
        setCount(end);
        clearInterval(timer);
      } else {
        setCount(current);
      }
    }, 25);

    return () => clearInterval(timer);
  }, [end]);

  return (
    <div className="text-white">
      <div className="text-3xl font-light tracking-wide">
        {count}+
      </div>
      <div className="mt-2 text-[10px] tracking-[0.3em] text-white/70">
        {label}
      </div>
    </div>
  );
}
