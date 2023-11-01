import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";
import { useTranslation } from "react-i18next";
import "../../../App.css";

function PopularCourses() {
  const { t } = useTranslation();
  let popularCourseHead = t("popularCourseHead", { returnObjects: true });
  const items = t("popularCoursesData", { returnObjects: true }).map(
    (elem, index) => (
      <div key={index} className="w-72 flex flex-col gap-12 select-none">
        <div className="relative">
          <img src={elem.coursesImg} className="w-full" />
          <div className="absolute bottom-[-40px] left-5 flex items-end gap-1">
            <nav className="flex items-center">
              <img
                src={elem.profileImg}
                className="w-9 h-9 object-cover rounded-full mb-5 border-2 border-white"
              />
              <h3 className="text-xs ml-2 whitespace-nowrap text-[#a8a8a8 font-light]">
                {elem.coursesTeach}
              </h3>
            </nav>
            <span
              className={`ml-20 price-re flex items-center justify-center text-xs text-white ${
                elem.price[0].free === true ? "price-gold" : "price-red"
              }`}
            >
              {elem.price[0].price}
            </span>
          </div>
        </div>
        <div className="px-3 flex flex-col gap-4">
          <h2 className="breaks-word text-sm uppercase text-[#222222]">
            {elem.head}
          </h2>
          <span className="text-sm text-[#777777]">{elem.info}</span>
          <a href="#" className="text-xs text-[#a8a8a8] uppercase hover:text-goldenRod">
            {elem.linkMore[0].head} <i className={elem.linkMore[0].iClass}></i>
          </a>
        </div>
      </div>
    )
  );
  console.log(
    t("popularCoursesData", { returnObjects: true }).map((elem) =>
      console.log(elem.coursesTeach)
    )
  );
  const responsiveness = {
    0: {
      items: 1,
    },
    600: {
      items: 2,
      itemsFit: "contain",
    },
    840: {
      items: 2,
      itemsFit: "contain",
    },
    1024: {
      items: 3,
      itemsFit: "contain",
    },
    1300: {
      items: 4,
      itemsFit: "contain",
    },
  };
  return (
    <main>
      <section className=" w-full container mx-auto px-3 md:px-1 py-10 md:py-20 flex flex-col justify-between items-center gap-12">
        <header className="flex flex-col items-center gap-6 pb12">
          <h1 className="text-2xl font-medium text-black">
            {popularCourseHead[0]}
          </h1>
          <span className="flex w-28 h-[1px] rounded-xl bg-gradient-to-r from-purple-500 to-pink-500"></span>
          <p className="text-gray text-sm font-medium text-center">
            {popularCourseHead[1]}
          </p>
        </header>
        <div className=" w-full ">
          <AliceCarousel
            mouseTracking
            autoPlay
            responsive={responsiveness}
            items={items}
          />
        </div>
        <span className="price"></span>
      </section>
    </main>
  );
}

export default PopularCourses;
