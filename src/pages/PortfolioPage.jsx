import Hero from "../components/Hero";

export default function PortfolioPage() {
  const posters = [
    {
      img: "https://images.unsplash.com/photo-1520975682034-5b6a07d1a93b?auto=format&fit=crop&w=900&q=80",
      alt: "Poster 1",
    },
    {
      img: "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?auto=format&fit=crop&w=900&q=80",
      alt: "Poster 2",
    },
    {
      img: "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=900&q=80",
      alt: "Poster 3",
    },
  ];

  return (
    <>
      <Hero />

      {/* ===================== TOP STRIP ===================== */}
      <div className="w-full border-t-[6px] border-lime-400">
        <div className="w-full bg-[#555555]">
          <div className="mx-auto max-w-7xl px-6 py-6 flex items-center justify-center gap-8">
            <div className="text-center leading-tight">
              <p className="text-white font-extrabold text-sm tracking-wide">
                सुबह के भूले अगर रात
                <br />
                को घर पहुंचे तो उसे
              </p>

              <p className="mt-2 text-lime-300 font-bold text-xs tracking-[0.2em] uppercase">
                AGENCY WALE कहते हैं
              </p>
            </div>

            {/* Moon doodle placeholder */}
            <div className="hidden sm:block">
              <img
                src="/moon.png"
                alt="moon"
                className="w-14 opacity-90"
                draggable="false"
              />
            </div>
          </div>
        </div>
      </div>

      {/* ===================== POSTERS ===================== */}
      <section className="w-full bg-white">
        <div className="mx-auto max-w-7xl px-6 py-14">
          <div className="flex items-start justify-center gap-12 flex-wrap lg:flex-nowrap">
            {posters.map((p, idx) => (
              <div
                key={idx}
                className="w-[360px] max-w-full bg-white border border-black/20 shadow-[0px_10px_25px_rgba(0,0,0,0.15)]"
              >
                <img
                  src={p.img}
                  alt={p.alt}
                  className="w-full h-[760px] object-cover"
                  draggable="false"
                />
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
