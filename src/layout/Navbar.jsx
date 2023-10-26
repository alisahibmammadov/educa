import { Link } from "react-router-dom";
import Stellar from "../assets/img/stellar.png";
import { useTranslation } from "react-i18next";
import { useEffect, useState } from "react";
import AOS from "aos";
import emailTel from "../data/emailTel";
import langBtnData from "../data/langBtnData";
function Navbar() {
  const { t, i18n } = useTranslation();
  const [lang, setLang] = useState(i18n.language);
  const [clickedBtn, setClickedBtn] = useState(false);
  const [linkBtn, setLinkBtn] = useState(0);
  const linksData = t("linksData", { returnObjects: true });

  const handleClick = (lng) => {
    i18n.changeLanguage(lng);
    setLang(lng);
    setClickedBtn(false);
  };
  const handleClickLink = (id) => {
    setLinkBtn(id);
  };
  console.log(linkBtn);
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <main className="border-t-4 border-deepReddishBrown">
      <section className="container mx-auto flex justify-between px-3 md:px-1">
        <div className="py-14 pr-28 md:border-r-2 border-[#f2f5f6]">
          <Link to="/">
            <img
              src={Stellar}
              alt="Stellar"
              className="w-[157px]"
              data-aos="zoom-out"
            />
          </Link>
        </div>

        <div className="hidden md:flex flex-col justify-between flex-1  ">
          <div className="flex items-start justify-end gap-4 border-b-2 border-[#f2f5f6] h-1/2">
            <div className="flex  flex-col lg:flex-row gap-2 lg:gap-0">
              {emailTel.map((elem, index) => (
                <span key={index} className={elem.spanClass}>
                  <i className={elem.iClass}></i> {elem.span}
                </span>
              ))}
            </div>

            <div className="relative">
              <span
                className="select-none cursor-pointer text-[#777777] text-sm font-normal"
                onClick={() => setClickedBtn(!clickedBtn)}
              >
                <i className="fa-solid fa-earth-americas mt-2"></i>{" "}
                {lang.toLocaleUpperCase()}
              </span>
              {clickedBtn ? (
                <nav
                  data-aos="fade-right"
                  className="absolute left-0 translate-x-[-50%] z-10 flex flex-col items-start bg-[#f2f5f6]"
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
            <button className="bg-deepRed hover:bg-deepReddishBrown py-4 px-5 text-xs tracking-[2px] text-white uppercase">
              {t("apply")}
            </button>
          </div>
          <div className="flex items-center justify-end">
            {linksData.map((elem, index) => (
              <div
                key={index}
                className="relative flex items-center  py-7 md:px-2 lg:px-4 xl:px-6 "
              >
                <span
                  data-aos="zoom-out"
                  className="select-none cursor-pointer hover:text-[#f5a425] md:text-[10px] lg:text-sm text-[#222222] font-normal tracking-[.3px]"
                  onClick={() => handleClickLink(elem.id)}
                >
                  {elem.name}{" "}
                  <i className="fa-solid fa-chevron-down  text-xs"></i>
                </span>
                {linkBtn == elem.id ? (
                  <nav className="flex flex-col gap-2  absolute top-full translate-x-[-50%] left-1/2 bg-deepRed py-1">
                    {elem.linkName.map((elem, index) => (
                      <Link
                        key={index}
                        to={elem.path}
                        className="text-xs font-normal whitespace-nowrap text-white py-1 px-2 hover:bg-deepReddishBrown"
                      >
                        {elem.link}
                      </Link>
                    ))}
                  </nav>
                ) : null}
              </div>
            ))}
            <Link
              data-aos="zoom-out"
              className="cursor-pointer hover:text-[#f5a425] md:text-xs lg:text-sm text-[#222222] font-normal tracking-[.3px]"
              to="/contact"
            >
              {t("contact")}
            </Link>
          </div>
        </div>
        <div className="md:hidden  flex items-center">
          <div className="flex md:hidden items-center justify-center rounded w-9 h-9 bg-[#f5a425] cursor-pointer">
            <i className="fa-solid fa-bars"></i>
          </div>
        </div>
      </section>
    </main>
  );
}

export default Navbar;
