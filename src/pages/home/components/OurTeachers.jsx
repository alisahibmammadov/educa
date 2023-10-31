import { useTranslation } from "react-i18next";
import "../../../App.css";

function OurTeachers() {
  const { t } = useTranslation();
  let teacherData = t("teacherData", { returnObjects: true });
  let teacherPageHead = t("teacherPageHead", { returnObjects: true });
  return (
    <main>
      <section className=" w-full container mx-auto px-3 md:px-1 py-20 flex flex-col justify-between items-center gap-12">
        <header className="flex flex-col items-center gap-6 pb12">
          <h1 className="text-2xl font-medium text-black">
            {teacherPageHead[0]}
          </h1>
          <span className="flex w-28 h-[1px] rounded-xl bg-gradient-to-r from-purple-500 to-pink-500"></span>
          <p className="text-gray text-sm font-medium text-center">
            {teacherPageHead[1]}
          </p>
        </header>
        <div className="flex flex-wrap items-center justify-center sm:justify-between  gap-y-20 gap-x-1 w-full">
          {teacherData.map((elem, index) => (
            <div key={index} data-aos="zoom-in" className="sm:w-[242px] w-full">
              <div className="relative img-box">
                <img src={elem.teacherImg} alt="" className="w-full" />
                <div className="icons-box hidden w-full justify-evenly absolute top-1/2 translate-y-[-50%] duration-300 bg-red-300 h-full bg-[rgba(0,0,0,.7)] items-center">
                  {elem.icons.map((elem, index) => (
                    <a
                      target="_blank"
                      key={index}
                      href={elem.link}
                      rel="noreferrer"
                      className="text-white hover:text-goldenRod duration-300"
                    >
                      <i className={elem.class}></i>
                    </a>
                  ))}{" "}
                </div>
              </div>
              <div className="flex flex-col items-center px-5 border-b-2 border-l-2 border-r-2 border-[#eeeeee] ">
                <h2 className="text-xs font-normal tracking-wide mb-1 pt-5 mt-0">
                  {elem.teacherName}
                </h2>
                <h3 className="text-xs text-[#a8a8a8]">{elem.position}</h3>
                <p className="break-words text-center text-sm text-gray mt-4 pb-3">
                  {elem.teacherInfo}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}

export default OurTeachers;
