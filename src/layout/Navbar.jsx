import { Link } from "react-router-dom";
import Stellar from "../assets/img/stellar.png";
import { useTranslation } from "react-i18next";
import { useEffect, useState } from "react";
import AOS from "aos";
function Navbar() {
  const { t, i18n } = useTranslation();
  const [lang, setLang] = useState(i18n.language);
  const [clickedBtn, setClickedBtn] = useState(false);
  const handleClick = (lng) => {
    i18n.changeLanguage(lng);
    setLang(lng);
    setClickedBtn(false);
  };
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <main className="border-t-4 border-deepReddishBrown">
      <section className="container mx-auto flex ">
        <div className="py-14 pr-32 border-r-2 border-teal-600">
          <Link to="/">
            <img
              src={Stellar}
              alt="Stellar"
              className="w-[157px]"
              data-aos="zoom-out"
            />
          </Link>
        </div>

        <div className="flex flex-col">
          <div className="flex items-center">
            {emailTel.map((elem, index) => (
              <span key={index} className={elem.spanClass}>
                <i className={elem.iClass}></i> {elem.span}
              </span>
            ))}

            <div className="relative">
              <span
                className="select-none cursor-pointer text-[#777777] text-sm font-normal"
                onClick={() => setClickedBtn(!clickedBtn)}
              >
                <i className="fa-solid fa-earth-americas"></i>{" "}
                {lang.toLocaleUpperCase()}
              </span>
              {clickedBtn ? (
                <nav
                  data-aos="fade-right"
                  className="absolute left-0 translate-x-[-50%] flex flex-col items-start bg-[#f2f5f6]"
                >
                  {langBtnData.map((elem, index) => (
                    <button
                      onClick={() => handleClick(elem.props)}
                      key={index}
                      className={elem.class}
                    >
                      {elem.content}
                    </button>
                  ))}
                </nav>
              ) : null}
            </div>
          </div>
          <div>asd</div>
        </div>
      </section>
    </main>
  );
}

export default Navbar;

const emailTel = [
  {
    id: 1,
    span: "+994 55 799 19 66",
    spanClass:
      "flex items-center gap-1 text-gray tracking-wide text-xs font-normal pl-4 mr-2 border-[#ccc]",
    iClass: "fa-solid fa-phone",
  },
  {
    id: 2,
    span: "alisahibmammadov98@gmail.com",
    spanClass:
      "flex items-center gap-1 text-gray tracking-wide text-xs font-normal pl-4 mr-2 border-[#ccc]",
    iClass: "fa-regular fa-envelope",
  },
];

const langBtnData = [
  {
    id: 1,
    class:
      "text-start text-[#515151] text-xs font-normal hover:text-orange-300 py-2 px-3 cursor-pointer w-full border-b-2 border-[#ccc]",
    content: "Az",
    props: "az",
  },
  {
    id: 2,
    class:
      "text-start text-[#515151] text-xs font-normal hover:text-orange-300 py-2 px-3 cursor-pointer w-full border-b-2 border-[#ccc]",
    content: "En",
    props: "en",
  },
  {
    id: 1,
    class:
      "text-start text-[#515151] text-xs font-normal hover:text-orange-300 py-2 px-3 cursor-pointer w-full ",
    content: "Ru",
    props: "ru",
  },
];
