import { useTranslation } from "react-i18next";

function ReadBooks() {
  const { t } = useTranslation();
  const booksCard = t("booksCard", { returnObjects: true });
  return (
    <main className="bg-[#1f272b]">
      <section className=" w-full container mx-auto px-3 md:px-1 py-20 flex flex-col justify-between items-center gap-12">
        <div className="flex flex-col items-center gap-6 pb12">
          <h1 className="text-2xl font-medium text-white">
            {t("youCanReadBooks")}
          </h1>
          <span className="flex w-28 h-[2px] rounded-xl bg-gradient-to-r from-purple-500 to-pink-500"></span>
          <p className="text-white text-sm font-normal text-center">
            {t("question")}
          </p>
        </div>
        <div className="flex flex-wrap items-center justify-center sm:justify-between  gap-y-20 gap-x-1 w-full">
          {booksCard.map((elem, index) => (
            <div
              data-aos="zoom-in"
              key={index}
              className="w-72 h-44 flex flex-col items-center justify-center px-10 bg-white hover:bg-goldenRod duration-300 cursor-pointer"
            >
              <i className={`${elem.iClass} text-[#222222] text-2xl`}></i>
              <h4 className="break-words mt-5 text-xs tracking-wider text-center leading-6">
                {elem.h4}
              </h4>
            </div>
          ))}
        </div>
        <button className="hover:bg-goldenRod hover:border-transparent duration-300 hover:text-black border-2 border-white py-4 px-8 text-xs text-white tracking-widest uppercase">
          {t("bookBtn")}
        </button>
      </section>
    </main>
  );
}

export default ReadBooks;
