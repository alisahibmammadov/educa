import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";

function Footer() {
  const { t } = useTranslation();
  const footerLinks = t("footerLinks", { returnObjects: true });
  const footerBottomLinks = t("footerBottomLinks", { returnObjects: true });
  console.log(footerLinks);
  return (
    <main>
      <section className="container mx-auto flex flex-col justify-between px-3 md:px-1">
        <div>
          {footerLinks.map((elem, index) => (
            <div key={index} className="flex flex-wrap justify-between  my-24">
              <nav className="w-1/4">
                <span className="w-11 h-[1px] inline-block bg-goldenRod my-6"></span>
                <p className="text-[#d6d6d6] text-sm mb-3">
                  {elem.info[0].info}
                </p>
                <Link
                  to={elem.info[0].link}
                  className="mt-4 text-[10px] text-[#a8a8a8] uppercase tracking-wider hover:text-goldenRod"
                >
                  {elem.info[0].linkName}{" "}
                  <i className={elem.info[0].iClass}></i>
                </Link>
              </nav>
              <nav className="flex flex-col items-start w-1/4">
                <span className="w-11 h-[1px] inline-block bg-goldenRod my-6 ml-4"></span>
                <div className="flex gap-2">
                  <ul className="flex flex-col gap-2 ml-4">
                    {elem.pageLink.slice(0, 4).map((elem, index) => (
                      <li
                        key={index}
                        className="text-[#d6d6d6] text-sm hover:text-goldenRod duration-300 flex items-center gap-1"
                      >
                        <i className="fa-regular fa-circle text-[8px]"></i>
                        <Link to={elem.link}>{elem.linkName}</Link>
                      </li>
                    ))}
                  </ul>
                  <ul className="flex flex-col gap-2 ml-11">
                    {elem.pageLink.slice(4).map((elem, index) => (
                      <li
                        key={index}
                        className="text-[#d6d6d6] text-sm hover:text-goldenRod duration-300 flex items-center gap-1"
                      >
                        <i className="fa-regular fa-circle text-[8px]"></i>
                        <Link to={elem.link}>{elem.linkName}</Link>
                      </li>
                    ))}
                  </ul>
                </div>
              </nav>
              {elem.contact.map((elem, index) => (
                <ul key={index} className="flex flex-col w-1/4">
                  <span className="w-11 h-[1px] inline-block bg-goldenRod my-6"></span>
                  <li className="text-[#d6d6d6] inline-block mb-5">
                    <i className="fa-solid fa-house text-sm"></i> {elem.street}
                  </li>
                  <li className="text-[#d6d6d6] inline-block mb-5">
                    <i className="fa-solid fa-phone text-sm"></i> {elem.tel}
                  </li>
                  <li className="text-[#d6d6d6] inline-block mb-5">
                    <i className="fa-regular fa-envelope  text-sm"></i>{" "}
                    {elem.email}
                  </li>
                </ul>
              ))}
              {elem.subscribe.map((elem, index) => (
                <nav key={index} className="flex flex-col items-start w-1/4">
                  <span className="w-11 h-[1px] inline-block bg-goldenRod my-6"></span>
                  <p className="text-[#d6d6d6] text-sm mb-3">{elem.info}</p>
                  <div className="relative">
                    <input
                      type="text"
                      placeholder={elem.placeHolder}
                      className="border-[1px] border-[#31382c] bg-[#202a2f] pl-9 text-[#777777] h-10 text-xs mt-4 mb-5 w-64 outline-none"
                    />
                    <i className="fa-regular fa-envelope absolute top-1/2 left-2 translate-y-[-50%] text-[#777777]"></i>
                  </div>
                  <button className="bg-goldenRod py-4 px-8 text-xs text-[#222222] tracking-wider inline-block uppercase hover:bg-deepRed hover:text-white duration-300">
                    {elem.button}
                  </button>
                </nav>
              ))}
            </div>
          ))}
        </div>
        <div>
          {footerBottomLinks.map((elem, index) => (
            <div
              key={index}
              className="border-t-[1px] py-8 border-t-[#2c3437] flex justify-between items-center"
            >
              <p className="text-xs text-[#b8b8b8] tracking-wider uppercase">
                {elem.copyRight}
              </p>
              <nav className=" flex gap-8">
                {elem.pagesLink.map((elem, index) => (
                  <Link
                    key={index}
                    to={elem.link}
                    className="text-xs text-[#b8b8b8] tracking-wider uppercase "
                  >
                    {elem.linkName}
                  </Link>
                ))}
              </nav>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}

export default Footer;
