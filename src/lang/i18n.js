import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";
import {
  linksDataAz,
  linksDataRu,
  linksDataEn,
} from "../data/navbar/navbarDatas";
import {
  BooksCardAz,
  BooksCardEn,
  BooksCardRu,
} from "../data/home/readbooks/BooksCard";
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
      // Homepage -> Read Book
      youCanReadBooks: "Kitablar Oxuya Bilərsiniz",
      question:
        "Yəqin ki, onların dəbdə olan balta meditasiyası haqqında eşitməmisiniz",
      booksCard: BooksCardAz,
      bookBtn:"Kitablara Keçin"
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
      // Homepage -> Read Book
      youCanReadBooks: "You Can Read Books",
      question:
        "Plaid you probably haven't heard of them fashion axe meditation",
      booksCard: BooksCardEn,
      bookBtn:"Go to the books",
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
      // Homepage -> Read Book
      youCanReadBooks: "Вы можете читать книги",
      question:
        "Плед, о котором вы, наверное, не слышали, модный топор для медитации",
      booksCard: BooksCardRu,
      bookBtn:"Перейти к книгам"
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
