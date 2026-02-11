import {
  Lightbulb,
  Monitor,
  Camera,
  Clapperboard,
  Globe,
  ThumbsUp,
} from "lucide-react";

const services = [
  {
    title: "CREATIVE",
    icon: Lightbulb,
    desc: `Because Creativity is the one-word definition of our agency and it's our solemn duty to provide an innovative solution to your problem`,
  },
  {
    title: "DIGITAL",
    icon: Monitor,
    desc: `With the world at our fingertips, building brand awareness over digital platforms is essential to create an aura of the brand in the market`,
  },
  {
    title: "PHOTOGRAPHY",
    icon: Camera,
    desc: `We have fashion photographers, product photographers, designers, stylists, and image editors, passion is to make the photo pitch-perfect`,
  },
  {
    title: "FILMS",
    icon: Clapperboard,
    desc: `Viral films are an effective way of brand promotion. Our web video production also amplifies customer engagement by educating the customers about your brands.`,
  },
  {
    title: "WEBSITE",
    icon: Globe,
    desc: `Website is the personality of your brand and we make sure it looks divine. We deliver SEO based, user-friendly, websites that attract the masses`,
  },
  {
    title: "SOCIAL",
    icon: ThumbsUp,
    desc: `An uncompromising aspect every marketing plan, we help grow brands across social media by incorporating well-defined strategies curated by a team of experts.`,
  },
];

export default function ServicesAndChallenge() {
  return (
    <section id="services" className="w-full">

      {/* ===================== SERVICES ===================== */}
      <div className="relative w-full overflow-hidden bg-black">
        <div
          className="absolute inset-0 opacity-35 blur-[1px]"
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1521737604893-d14cc237f11d?auto=format&fit=crop&w=2000&q=80')",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        />
        <div className="absolute inset-0 bg-black/75" />

        <div className="relative z-10 mx-auto max-w-7xl px-6 pt-16 pb-20">
          <p className="text-center text-white font-semibold tracking-[0.25em] text-sm">
            SERVICES
          </p>

          <div className="mt-14 grid grid-cols-1 md:grid-cols-3 gap-x-16 gap-y-16">
            {services.map((s) => (
              <ServiceCard key={s.title} data={s} />
            ))}
          </div>
        </div>
      </div>

      {/* ===================== 07 DAYS CHALLENGE ===================== */}
      <div className="w-full bg-black">
        <div className="mx-auto max-w-7xl px-6 py-20">

          {/* GROUP WRAPPER FOR POP EFFECT */}
          <div className="group grid grid-cols-1 lg:grid-cols-2 gap-14 items-center">

            {/* LEFT IMAGE */}
            <div className="flex justify-center lg:justify-start">
              <img
                src="../../assets/7days_challnge.png"
                alt="07 Days Challenge"
                draggable="false"
                className="
                  w-[320px] sm:w-[360px] lg:w-[400px]
                  transition-all duration-500 ease-out
                  group-hover:-translate-y-3
                  group-hover:scale-105
                "
              />
            </div>

            {/* RIGHT TEXT */}
            <div
              className="
                text-center lg:text-left
                transition-all duration-500 ease-out
                group-hover:-translate-y-3
              "
            >
              <p className="text-white text-2xl sm:text-3xl font-light leading-snug">
                Give us any product
                <br />
                & see how we transform
              </p>

              <p className="mt-6 text-white/70 text-sm tracking-[0.12em] leading-relaxed">
                PRODUCT SHOOT + RETOUCH + ARTWORK + VOICEOVER
                <br />+ PRODUCT VIDEO
              </p>

              <div className="mt-10">
                <a
                  href="https://api.whatsapp.com/send?phone=919999767666&text=I%20Want%20to%20Challenge%20You."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="
                    inline-flex items-center justify-center
                    bg-lime-400 text-black font-bold
                    tracking-[0.2em] text-xs
                    px-8 py-3
                    transition-all duration-300
                    hover:bg-lime-300 hover:scale-110
                  "
                >
                  CHALLENGE US
                </a>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}

function ServiceCard({ data }) {
  const Icon = data.icon;

  return (
    <div className="text-center group">
      <div className="flex justify-center">
        <Icon
          className="
            w-10 h-10 text-white/70
            transition-transform duration-300
            group-hover:scale-110
          "
          strokeWidth={1.2}
        />
      </div>

      <h3 className="mt-4 text-white font-semibold tracking-[0.18em] text-xs">
        {data.title}
      </h3>

      <p className="mt-6 text-white/65 text-[12px] leading-5 max-w-[260px] mx-auto">
        {data.desc}
      </p>

      <div className="mt-8">
        <a
          href="#"
          className="
            inline-flex items-center justify-center
            bg-lime-400 text-black font-bold
            tracking-[0.2em] text-[10px]
            px-6 py-2
            transition-all duration-300
            hover:bg-lime-300 hover:scale-105
          "
        >
          READ MORE
        </a>
      </div>
    </div>
  );
}
