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
            <div key={index} data-aos="zoom-in" className="w-[242px]">
              <div>
                <img src={elem.teacherImg} alt="" />
                <div className="flex w-full justify-around">
                  {elem.icons.map((elem, index) => (
                    <a key={index} href={elem.link} target="_blank">
                      <i className={elem.class}></i>
                    </a>
                  ))}{" "}
                </div>
              </div>
              <div className="flex flex-col items-center px-5 border-b-2 border-l-2 border-r-2 border-[#eeeeee] p-5">
                <h2 className="text-xs font-normal tracking-wide">
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
