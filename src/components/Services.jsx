import { useEffect, useRef, useState } from "react";

// images (replace anytime)
import aboutTextImg from "../../assets/about/homepage_aboutus.png";
import aboutIllustration from "../../assets/about/about-us.png";

export default function WhoWeAre() {
  const sectionRef = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
        }
      },
      { threshold: 0.25 }
    );

    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="about"
      ref={sectionRef}
      className="relative w-full bg-white overflow-hidden"
    >
      {/* top lime strip */}
      <div className="absolute top-0 left-0 right-0 h-[10px] sm:h-[14px] bg-lime-400" />

      {/* soft glow */}
      <div className="pointer-events-none absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 
        w-[500px] h-[300px] sm:w-[700px] sm:h-[400px] lg:w-[900px] lg:h-[450px]
        bg-lime-300/20 blur-[140px] rounded-full"
      />

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 pt-20 sm:pt-28 pb-20 sm:pb-28">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 lg:gap-20 items-center">

          {/* LEFT IMAGE (TEXT IMAGE) */}
          <div
            className={`
              flex justify-center lg:justify-start
              transition-all duration-[1200ms] ease-out
              ${visible ? "opacity-100 scale-100" : "opacity-0 scale-75"}
            `}
          >
            <img
              src={aboutTextImg}
              alt="Who we are"
              draggable="false"
              className="
                w-full max-w-[260px] sm:max-w-[380px] md:max-w-[460px] lg:max-w-[520px]
              "
            />
          </div>

          {/* RIGHT IMAGE (ILLUSTRATION) */}
          <div
            className={`
              relative flex justify-center lg:justify-end
              transition-all duration-[1400ms] ease-out delay-200
              ${visible ? "opacity-100 scale-100" : "opacity-0 scale-75"}
            `}
          >
            {/* glow behind image */}
            <div
              className="
                absolute -z-10 
                w-[220px] h-[220px] sm:w-[300px] sm:h-[300px] lg:w-[380px] lg:h-[380px]
                bg-lime-300/30 blur-[110px] rounded-full
              "
            />

            <img
              src={aboutIllustration}
              alt="Coffee & Creative Illustration"
              draggable="false"
              className="
                w-full max-w-[260px] sm:max-w-[380px] md:max-w-[460px] lg:max-w-[520px]
              "
            />
          </div>

        </div>
      </div>
    </section>
  );
}
