import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";
import { useTranslation } from "react-i18next";

function Carousel() {
  const { t } = useTranslation();
 
  const items = t("homeCarousel", { returnObjects: true }).map(
    (elem, index) => (
      <div key={index} className="relative select-none">
        <img src={elem.slideBg} />
        <div className="absolute top-1/4 left-10 flex flex-col gap-2 md:gap-4 w-ull md:w-1/2 items-start">
          <nav>
            <h2
              className="font-bold text-[#222222] whitespace-normal break-words text-xs md:text-3xl md:mb-4"
              data-aos="fade-right"
            >
              {elem.motto}
            </h2>
            <h2
              data-aos="fade-right"
              className="font-bold text-[#222222]  break-words text-xs md:text-3xl "
            >
              {elem.solution[0]}{" "}
              <span
                data-aos="fade-down"
                className="bg-goldenRod font-bold text-[#222222] md:py-2 md:px-3 mx-2 inline-block"
              >
                {elem.solution[1]}
              </span>
              {elem?.solution[2]}
            </h2>
          </nav>
          <p
            data-aos="fade-up"
            className="text-[#777777] break-words text-[8px] md:text-sm w-1/2"
          >
            {elem.info}
          </p>
          <button className="text-white p-1 md:py-3 md:px-7 text-[8px] md:text-xs bg-[#222222] hover:text-[#222222] hover:bg-goldenRod duration-300">
            {elem.button}
          </button>
        </div>
      </div>
    )
  );
  return (
    <main className="bg-[#1f272b]">
      <section className=" w-full container mx-auto px-3 md:px-1 py-10 md:py-20">
        <AliceCarousel autoPlay  items={items} />
      </section>
    </main>
  );
}

export default Carousel;
