import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";

function Footer() {
  const { t } = useTranslation();
  const footerBottomLinks = t("footerBottomLinks", { returnObjects: true });
  console.log(footerBottomLinks);
  return (
    <main>
      <section className="container mx-auto flex flex-col justify-between px-3 md:px-1">
        <div></div>
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
