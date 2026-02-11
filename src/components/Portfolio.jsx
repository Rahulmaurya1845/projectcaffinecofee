export default function Portfolio() {
  return (
    <section id="portfolio" className="w-full bg-lime-400">
      {/* TOP STRIP */}
      <div className="w-full py-6 flex items-center justify-center">
        <p className="text-black text-2xl sm:text-3xl font-semibold tracking-wide">
          ♡ <span className="ml-2">We make beauty out of chaos.</span>
        </p>
      </div>

      {/* VIDEO FRAME AREA */}
      <div className="px-4 pb-10">
        <div className="mx-auto max-w-7xl bg-black border-[10px] border-black">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-0">
            {/* LEFT VIDEO */}
            <div className="relative w-full bg-black">
              <div className="aspect-video w-full">
                <iframe
                  className="w-full h-full"
                  src="https://www.youtube.com/embed/ScMzIvxBSi4"
                  title="Coffee & Creative - Promo"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowFullScreen
                />
              </div>
            </div>

            {/* RIGHT VIDEO */}
            <div className="relative w-full bg-black">
              <div className="aspect-video w-full">
                <iframe
                  className="w-full h-full"
                  src="https://www.youtube.com/embed/tgbNymZ7vqY"
                  title="Coffee & Creative - Diwali"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowFullScreen
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
