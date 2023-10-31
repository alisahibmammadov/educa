import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";
// Link Data Start
import {
  linksDataAz,
  linksDataRu,
  linksDataEn,
} from "../data/navbar/navbarDatas";
// BooksCard data Start
import {
  BooksCardAz,
  BooksCardEn,
  BooksCardRu,
} from "../data/home/readbooks/BooksCard";
// OurTeacher Data start
import {
  OurTeachersAz,
  OurTeachersEn,
  OurTeachersRu,
} from "../data/home/ourteachers/OurTeachers";
//  Home Carousel
import {
  homeCarouselAz,
  homeCarouselEn,
  homeCarouselRu,
} from "../data/home/carousel/homeCarousel";
// !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
const resources = {
  az: {
    translation: {
      apply: "Müraciət et",
      linksData: linksDataAz,
      contact: "Əlaqə",
      pathToSuccess:
        "Biznes liderləri xəbərdar edir ki, gənclər uğura aparan yol 'səhv satılan' yoldur.",
      viewCourses: "Kurslara baxın",
      //***Homepage -> Read Book
      readBooksHead: [
        "Kitablar Oxuya Bilərsiniz",
        "Yəqin ki, onların dəbdə olan balta meditasiyası haqqında eşitməmisiniz",
      ],
      booksCard: BooksCardAz,
      bookBtn: "Kitablara Keçin",
      //*** Our Teacher Start
      teacherData: OurTeachersAz,
      teacherPageHead: [
        "Müəllimlərimiz",
        "High Life kalamar sözün əsl mənasında Helvetica quinoa kilsə açarıdır",
      ],
      //*** Home Carousel Start
      homeCarousel: homeCarouselAz,
    },
  },
  en: {
    translation: {
      apply: "Apply now",
      linksData: linksDataEn,
      contact: "Contact",
      pathToSuccess:
        "Young people have been 'mis-sold' path to success, business leaders warn.",
      viewCourses: "View Courses",
      //*** Homepage -> Read Book
      readBooksHead: [
        "You Can Read Books",
        "Plaid you probably haven't heard of them fashion axe meditation",
      ],
      booksCard: BooksCardEn,
      bookBtn: "Go to the books",
      //*** Our Teacher Start
      teacherData: OurTeachersEn,
      teacherPageHead: [
        "Our Teachers",
        "High Life squid literally scenester fap Helvetica quinoa church-key",
      ],
      //*** Home Carousel Start
      homeCarousel: homeCarouselEn,
    },
  },
  ru: {
    translation: {
      apply: "Применить сейчас",
      linksData: linksDataRu,
      contact: "Контакт",
      pathToSuccess:
        "Молодым людям <br/> 'неправильно продали' путь к успеху, предупреждают лидеры бизнеса.",
      viewCourses: "Посмотреть курсы",
      //*** Homepage -> Read Book
      readBooksHead: [
        "Вы можете читать книги",
        "Плед, о котором вы, наверное, не слышали, модный топор для медитации",
      ],
      booksCard: BooksCardRu,
      bookBtn: "Перейти к книгам",
      //*** Our Teacher Start
      teacherData: OurTeachersRu,
      teacherPageHead: [
        "Наши учителя",
        "High Life кальмар буквально сценастер fap Helvetica quinoa церковный ключ",
      ],
      //*** Home Carousel Start
      homeCarousel: homeCarouselRu,
    },
  },
};
i18n
  .use(initReactI18next)
  .use(LanguageDetector)
  .init({
    // lng:"az",
    fallbackLng: "az",
    resources,
    debug: true,
    interpolation: {
      escapeValue: false,
    },
  });

export default i18n;
