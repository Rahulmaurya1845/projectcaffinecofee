
import bannerDoodle from "../../assets/portfolio/portfolio_banner_doodle.svg";

import img1 from "../../assets/portfolio/1.jpg";
import img2 from "../../assets/portfolio/2.jpg";
import img3 from "../../assets/portfolio/3.jpg";
import img4 from "../../assets/portfolio/4.jpg";
import img5 from "../../assets/portfolio/5.jpg";
import img6 from "../../assets/portfolio/6.jpg";
import img7 from "../../assets/portfolio/7.jpg";
import img8 from "../../assets/portfolio/8.jpg";
import img9 from "../../assets/portfolio/9.jpg";
import img10 from "../../assets/portfolio/10.jpg";
import img11 from "../../assets/portfolio/11.jpg";
import img12 from "../../assets/portfolio/12.jpg";
import img13 from "../../assets/portfolio/13.jpg";
import img14 from "../../assets/portfolio/14.jpg";
import img15 from "../../assets/portfolio/15.jpg";
import img16 from "../../assets/portfolio/16.jpg";
import img17 from "../../assets/portfolio/17.jpg";
import img18 from "../../assets/portfolio/18.jpg";  
import img19 from "../../assets/portfolio/19.jpg";
import img20 from "../../assets/portfolio/20.jpg";
import img21 from "../../assets/portfolio/21.jpg";
import img22 from "../../assets/portfolio/22.jpg";
import img23 from "../../assets/portfolio/23.jpg";
import img24 from "../../assets/portfolio/24.jpg";
import img25 from "../../assets/portfolio/25.jpg";
import img26 from "../../assets/portfolio/26.jpg";
import img27 from "../../assets/portfolio/27.jpg";
import img28 from "../../assets/portfolio/28.jpg";

export default function PortfolioPage() {
  const portfolioImages = [
    img1,
    img2,
    img3,
    img4,
    img5,
    img6,
    img7,
    img8,
    img9,
    img10,
    img11,
    img12,
    img13,
    img14,
    img15,
    img16,
    img17,
    img18,
    img19,
    img20,
    img21,
    img22,
    img23,
    img24,
    img25,
    img26,
    img27,
    img28
  ];

  return (
    <>
      {/* ===================== BLACK HERO SECTION ===================== */}
      <section className="w-full bg-black">
        <div className="w-full px-8 py-32 flex flex-col lg:flex-row items-center justify-between gap-16">
          
          {/* LEFT TEXT */}
          <div className="text-center lg:text-left">
            <h1 className="text-yellow-400 font-extrabold leading-tight text-4xl sm:text-5xl lg:text-6xl">
              सुबह के भूले अगर रात
              <br />
              को घर पहुंचे तो उसे
            </h1>

            <p className="mt-8 text-2xl sm:text-3xl text-yellow-400">
              <span className="uppercase tracking-[0.2em] text-lime-400">
                Agency Wale
              </span>{" "}
              कहते हैं
            </p>
          </div>

          {/* RIGHT DOODLE IMAGE */}
          <div className="flex justify-center">
            <img
              src={bannerDoodle}
              alt="Moon Doodle"
              className="w-[250px] sm:w-[300px] lg:w-[350px]"
              draggable="false"
            />
          </div>
        </div>
      </section>

      {/* ===================== FULL WIDTH PORTFOLIO GRID ===================== */}
      <section className="w-full bg-white">
        
        <div className="w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 cursor-pointer">
          {portfolioImages.map((img, index) => (
            <div key={index} className="relative overflow-hidden">
              
              <img
                src={img}
                alt={`Portfolio ${index + 1}`}
                className="
                  w-full
                  h-full
                  object-cover
                  transition-all duration-500
                  grayscale brightness-75
                  hover:grayscale-0 hover:brightness-100
                  hover:scale-105
                "
                draggable="false"
              />
            </div>
          ))}
        </div>

      </section>
    </>
  );
}
