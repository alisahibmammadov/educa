import { useTranslation } from "react-i18next";

function ViewCourse() {
  const { t } = useTranslation();
  return (
    <main className="bg-goldenRod ">
      <section className="container mx-auto flex items-center justify-between flex-col gap-5 lg:flex-row  px-3 md:px-1 py-8">
        <span className="text-sm sm:text-lg italic text-[#777777] font-semibold tracking-wide">
          {t("pathToSuccess")}
        </span>
        <button className="bg-deepRed hover:bg-deepReddishBrown py-4 px-5 text-xs tracking-[2px] text-white uppercase">
          {t("viewCourses")}
        </button>
      </section>
    </main>
  );
}

export default ViewCourse;
