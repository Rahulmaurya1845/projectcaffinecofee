// ✅ TOP HERO IMAGE
import heroImg from "../../assets/paltan/paltan.svg"; // change if different name

// ✅ IMPORT 1–40 IMAGES
import img1 from "../../assets/paltan/1.jpg";
import img2 from "../../assets/paltan/2.jpg";
import img3 from "../../assets/paltan/3.jpg";
import img4 from "../../assets/paltan/4.jpg";
import img5 from "../../assets/paltan/5.jpg";
import img6 from "../../assets/paltan/6.jpg";
import img7 from "../../assets/paltan/7.jpg";
import img8 from "../../assets/paltan/8.jpg";
import img9 from "../../assets/paltan/9.jpg";
import img10 from "../../assets/paltan/10.jpg";
import img11 from "../../assets/paltan/11.jpg";
import img12 from "../../assets/paltan/12.jpg";
import img13 from "../../assets/paltan/13.jpg";
import img14 from "../../assets/paltan/14.jpg";
import img15 from "../../assets/paltan/15.jpg";
import img16 from "../../assets/paltan/16.jpg";
import img17 from "../../assets/paltan/17.jpg";
import img18 from "../../assets/paltan/18.jpg";
import img19 from "../../assets/paltan/19.jpg";
import img20 from "../../assets/paltan/20.jpg";
import img21 from "../../assets/paltan/21.jpg";
import img22 from "../../assets/paltan/22.jpg";
import img23 from "../../assets/paltan/23.jpg";
import img24 from "../../assets/paltan/24.jpg";
import img25 from "../../assets/paltan/25.jpg";
import img26 from "../../assets/paltan/26.jpg";
import img27 from "../../assets/paltan/27.jpg";
import img28 from "../../assets/paltan/28.jpg";
import img29 from "../../assets/paltan/29.jpg";
import img30 from "../../assets/paltan/30.jpg";
import img31 from "../../assets/paltan/31.jpg";
import img32 from "../../assets/paltan/32.jpg";
import img33 from "../../assets/paltan/33.jpg";
import img34 from "../../assets/paltan/34.jpg";
import img35 from "../../assets/paltan/35.jpg";
import img36 from "../../assets/paltan/36.jpg";
import img37 from "../../assets/paltan/37.jpg";
import img38 from "../../assets/paltan/38.jpg";
import img39 from "../../assets/paltan/39.jpg";
import img40 from "../../assets/paltan/40.jpg";

export default function PaltanPage() {

  const images = [
    img1,img2,img3,img4,img5,img6,img7,img8,img9,img10,
    img11,img12,img13,img14,img15,img16,img17,img18,img19,img20,
    img21,img22,img23,img24,img25,img26,img27,img28,img29,img30,
    img31,img32,img33,img34,img35,img36,img37,img38,img39,img40
  ];

  return (
    <>
      {/* ===================== TOP BLACK HERO ===================== */}
      <section className="w-full bg-black">
        <div className="max-w-7xl mx-auto px-6 py-28 flex flex-col lg:flex-row items-center justify-between gap-16">

          {/* LEFT TEXT */}
          <div className="text-center lg:text-left">
            <h1 className="text-lime-400 text-4xl sm:text-5xl font-bold leading-tight">
              SMART GUY & SEXY CHIC...
              <br />
              ALWAYS ON
            </h1>

            <p className="mt-6 text-2xl sm:text-3xl text-lime-400 font-semibold">
              SHUTTERSTOCK & FREEPIK
            </p>
          </div>

          {/* RIGHT IMAGE */}
          <div>
            <img
              src={heroImg}
              alt="Paltan Hero"
              className="w-[280px] sm:w-[350px] lg:w-[420px]"
              draggable="false"
            />
          </div>

        </div>
      </section>

      {/* ===================== YELLOW STRIP ===================== */}
<section className="w-full bg-[#c6c63a] py-4 sm:py-5 text-center">
  <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-black">
    देर आये दुरुस्त आये... उस से अच्छे जो कभी न आये
  </h2>
</section>

      {/* ===================== IMAGE GRID ===================== */}
      <section className="w-full bg-black">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-[4px] p-[4px]">

          {images.map((img, index) => (
            <div key={index} className="overflow-hidden bg-black">
              <img
                src={img}
                alt={`Paltan ${index + 1}`}
                draggable="false"
                className="
                  w-full
                  h-auto
                  transition-all duration-500
                  grayscale brightness-75
                  hover:grayscale-0 hover:brightness-100
                  hover:scale-105
                "
              />
            </div>
          ))}

        </div>
      </section>
    </>
  );
}
