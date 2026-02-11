// ================= IMPORT HERO IMAGE =================
import heroImg from "../../assets/paltan/paltan.svg";

// ================= IMPORT ALL 59 CLIENT IMAGES =================
import img1 from "../../assets/clientss/1.png";
import img2 from "../../assets/clientss/2.png";
import img3 from "../../assets/clientss/3.png";
import img4 from "../../assets/clientss/4.png";
import img5 from "../../assets/clientss/5.png";
import img6 from "../../assets/clientss/6.png";
import img7 from "../../assets/clientss/7.png";
import img8 from "../../assets/clientss/8.png";
import img9 from "../../assets/clientss/9.png";
import img10 from "../../assets/clientss/10.png";
import img11 from "../../assets/clientss/11.png";
import img12 from "../../assets/clientss/12.png";
import img13 from "../../assets/clientss/13.png";
import img14 from "../../assets/clientss/14.png";
import img15 from "../../assets/clientss/15.png";
import img16 from "../../assets/clientss/16.png";
import img17 from "../../assets/clientss/17.png";
import img18 from "../../assets/clientss/18.png";
import img19 from "../../assets/clientss/19.png";
import img20 from "../../assets/clientss/20.png";
import img21 from "../../assets/clientss/21.png";
import img22 from "../../assets/clientss/22.png";
import img23 from "../../assets/clientss/23.png";
import img24 from "../../assets/clientss/24.png";
import img25 from "../../assets/clientss/25.png";
import img26 from "../../assets/clientss/26.png";
import img27 from "../../assets/clientss/27.png";
import img28 from "../../assets/clientss/28.png";
import img29 from "../../assets/clientss/29.png";
import img30 from "../../assets/clientss/30.png";
import img31 from "../../assets/clientss/31.png";
import img32 from "../../assets/clientss/32.png";
import img33 from "../../assets/clientss/33.png";
import img34 from "../../assets/clientss/34.png";
import img35 from "../../assets/clientss/35.png";
import img36 from "../../assets/clientss/36.png";
import img37 from "../../assets/clientss/37.png";
import img38 from "../../assets/clientss/38.png";
import img39 from "../../assets/clientss/39.png";
import img40 from "../../assets/clientss/40.png";
import img41 from "../../assets/clientss/41.png";
import img42 from "../../assets/clientss/42.png";
import img43 from "../../assets/clientss/43.png";
import img44 from "../../assets/clientss/44.png";
import img45 from "../../assets/clientss/45.png";
import img46 from "../../assets/clientss/46.png";
import img47 from "../../assets/clientss/47.png";
import img48 from "../../assets/clientss/48.png";
import img49 from "../../assets/clientss/49.png";
import img50 from "../../assets/clientss/50.png";
import img51 from "../../assets/clientss/51.png";
import img52 from "../../assets/clientss/52.png";
import img53 from "../../assets/clientss/53.png";
import img54 from "../../assets/clientss/54.png";
import img55 from "../../assets/clientss/55.png";
import img56 from "../../assets/clientss/56.png";
import img57 from "../../assets/clientss/57.png";
import img58 from "../../assets/clientss/58.png";
import img59 from "../../assets/clientss/59.png";

export default function ClientsPage() {

  const clients = [
    img1,img2,img3,img4,img5,img6,img7,img8,img9,img10,
    img11,img12,img13,img14,img15,img16,img17,img18,img19,img20,
    img21,img22,img23,img24,img25,img26,img27,img28,img29,img30,
    img31,img32,img33,img34,img35,img36,img37,img38,img39,img40,
    img41,img42,img43,img44,img45,img46,img47,img48,img49,img50,
    img51,img52,img53,img54,img55,img56,img57,img58,img59
  ];

  return (
    <>
      {/* ================= HERO SECTION ================= */}
      <section className="w-full bg-black text-white">
        <div className="max-w-7xl mx-auto px-6 py-28 flex flex-col lg:flex-row items-center justify-between gap-16">
          
          <div>
            <h1 className="text-5xl font-extrabold leading-tight">
              Don't
            </h1>

            <p className="mt-2 text-xl">
              call our client for <span className="font-bold">TESTIMONIALS</span>
            </p>

            <p className="mt-4 text-3xl font-bold">
              THEY ARE <span className="text-yellow-400">CHILLING</span> ELSEWHERE
            </p>
          </div>

          <div>
            <img
              src={heroImg}
              alt="Astronaut"
              className="w-[300px] lg:w-[380px] transition-all duration-500 hover:scale-105"
              draggable="false"
            />
          </div>

        </div>
      </section>


      {/* ================= CLIENT LOGO GRID ================= */}
      <section className="w-full bg-gray-100 py-20">
        <div className="max-w-7xl mx-auto px-6">

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-10 items-center">
            {clients.map((logo, index) => (
              <div
                key={index}
                className="flex items-center justify-center transition-all duration-300 hover:scale-110"
              >
                <img
                  src={logo}
                  alt={`Client ${index + 1}`}
                  className="
                    w-full h-auto
                    object-contain
                    transition-all duration-300
                    grayscale
                    hover:grayscale-0
                  "
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
