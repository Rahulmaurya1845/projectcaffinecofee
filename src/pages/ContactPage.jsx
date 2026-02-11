import Hero from "../components/Hero";

export default function ContactPage() {
  return (
    <>
      <Hero />

      {/* ===================== CONTACT MAIN ===================== */}
      <section className="w-full bg-white">
        <div className="mx-auto max-w-7xl px-6 pt-16 pb-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-start">
            {/* LEFT: SAY HELLO */}
            <div>
              <h2 className="text-center text-sm font-semibold tracking-[0.25em] text-black/70">
                Say Hello
              </h2>

              <div className="mt-10 space-y-6 text-[11px] leading-5 text-black/70 max-w-md mx-auto">
                {/* INDIA */}
                <div>
                  <p className="font-bold tracking-widest text-black/60">
                    INDIA:
                  </p>
                  <p className="mt-1">
                    C-567 Saraswati Vihar, Pitampura, New Delhi - 110034
                  </p>
                </div>

                {/* USA */}
                <div>
                  <p className="font-bold tracking-widest text-black/60">
                    USA:
                  </p>
                  <p className="mt-1">
                    800 Custer Avenue,
                    <br />
                    Evanston, Greater Chicago Area,
                    <br />
                    IL, 60202
                  </p>
                </div>

                {/* UK */}
                <div>
                  <p className="font-bold tracking-widest text-black/60">
                    UK:
                  </p>
                  <p className="mt-1">
                    53, Eversley Crescent,
                    <br />
                    Ilford, London IG7 4LD
                  </p>
                </div>

                {/* EMAILS */}
                <div className="space-y-2 pt-2">
                  <div className="flex items-start gap-3">
                    <span className="mt-[2px] text-black/60">✉</span>
                    <p>vipin@coffeeandcreative.in</p>
                  </div>

                  <div className="flex items-start gap-3">
                    <span className="mt-[2px] text-black/60">✉</span>
                    <p>nitin@coffeeandcreative.in</p>
                  </div>
                </div>

                {/* NUMBERS */}
                <div className="space-y-3 pt-2">
                  <div>
                    <p className="font-semibold text-black/60">
                      Job Related Queries:
                    </p>
                    <div className="mt-2 space-y-1">
                      <p className="flex items-center gap-3">
                        <span className="text-black/60">📞</span>
                        +91 9711087271 / +91 8586869612
                      </p>
                    </div>
                  </div>

                  <div>
                    <p className="font-semibold text-black/60">
                      Marketing Related Queries:
                    </p>
                    <div className="mt-2 space-y-1">
                      <p className="flex items-center gap-3">
                        <span className="text-black/60">📞</span>
                        +91 9999777471 / +91 9999976666
                      </p>
                    </div>
                  </div>
                </div>

                {/* TAGLINE */}
                <div className="flex items-center gap-3 pt-2">
                  <span className="text-black/60">☕</span>
                  <p>Let’s brew thoughts</p>
                </div>
              </div>
            </div>

            {/* RIGHT: FORM */}
            <div>
              <h2 className="text-center text-sm font-semibold tracking-[0.25em] text-black/70">
                Get In Touch
              </h2>

              <form className="mt-10 max-w-md mx-auto">
                <div className="space-y-3">
                  <Input placeholder="Name.." />
                  <Input placeholder="E-mail" />
                  <Input placeholder="Contact No." />

                  <select className="w-full border border-lime-300 px-3 py-2 text-[11px] outline-none">
                    <option>Subject</option>
                    <option>Branding</option>
                    <option>Website</option>
                    <option>Digital Marketing</option>
                    <option>Photography</option>
                    <option>Films</option>
                  </select>

                  <textarea
                    placeholder="Message"
                    rows={5}
                    className="w-full border border-lime-300 px-3 py-2 text-[11px] outline-none resize-none"
                  />

                  <div className="pt-2">
                    <button
                      type="submit"
                      className="bg-lime-400 text-black font-bold tracking-[0.25em] text-[10px] px-6 py-2 hover:bg-lime-300 transition"
                    >
                      SEND
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>

        {/* ===================== MAP ===================== */}
        <div className="w-full border-t border-black/10">
          <iframe
            title="Coffee & Creative Map"
            src="https://www.google.com/maps?q=Pitampura%20New%20Delhi&z=13&output=embed"
            className="w-full h-[320px]"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>
      </section>
    </>
  );
}

/* Small Input component */
function Input({ placeholder }) {
  return (
    <input
      placeholder={placeholder}
      className="w-full border border-lime-300 px-3 py-2 text-[11px] outline-none"
    />
  );
}
