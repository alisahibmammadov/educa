const linksDataEn = [
  {
    id: 1,
    name: "Home",
    linkName: [{ link: "HomePage", path: "/" }],
  },
  {
    id: 2,
    name: "Courses",
    linkName: [
      { link: "Courses Grids", path: "/coursesGrids" },
      { link: "Courses List", path: "/coursesList" },
      { link: "Single Courses", path: "/coursesSingle" },
    ],
  },
  {
    id: 3,
    name: "Events",
    linkName: [
      { link: "Classic Events", path: "/eventsClassic" },
      { link: "Calendar Events", path: "/eventsCalendar" },
      { link: "Single Event", path: "/eventSingle" },
    ],
  },
  {
    id: 4,
    name: "Pages",
    linkName: [
      { link: "About Us", path: "/aboutUs" },
      { link: "Our Teachers", path: "/ourTeachers" },
      { link: "Single Teacher", path: "/singleTeacher" },
      { link: "Gallery 4 Columns", path: "/gallery4Columns" },
    ],
  },
  {
    id: 5,
    name: "News",
    linkName: [
      { link: "Classic News", path: "/classicNews" },
      { link: "Grid News", path: "/gridNews" },
      { link: "Single Post", path: "/singlePost" },
    ],
  },
];
const linksDataAz = [
  {
    id: 1,
    name: "Əsas səhifə",
    linkName: [{ link: "Əsas səhifə", path: "/" }],
  },
  {
    id: 2,
    name: "Kurslar",
    linkName: [
      { link: "Kurslar şəbəkələri", path: "/coursesGrids" },
      { link: "Kursların siyahısı", path: "/coursesList" },
      { link: "Tək Kurslar", path: "/coursesSingle" },
    ],
  },
  {
    id: 3,
    name: "Hadisələr",
    linkName: [
      { link: "Klassik Hadisələr", path: "/eventsClassic" },
      { link: "Təqvim hadisələri", path: "/eventsCalendar" },
      { link: "Tək Hadisə", path: "/eventSingle" },
    ],
  },
  {
    id: 4,
    name: "Səhifələr",
    linkName: [
      { link: "Haqqımızda", path: "/aboutUs" },
      { link: "Müəllimlərimiz", path: "/ourTeachers" },
      { link: "Tək Müəllim", path: "/singleTeacher" },
      { link: "Qalereya 4 Sütun", path: "/gallery4Columns" },
    ],
  },
  {
    id: 5,
    name: "Xəbərlər",
    linkName: [
      { link: "Klassik Xəbərlər", path: "/classicNews" },
      { link: "Xəbərlər şəbəkəsi", path: "/gridNews" },
      { link: "Tək yazı", path: "/singlePost" },
    ],
  },
];
const linksDataRu = [
  {
    id: 1,
    name: "Главная страница",
    linkName: [{ link: "Домашняя страница", path: "/" }],
  },
  {
    id: 2,
    name: "Курсы",
    linkName: [
      { link: "Сетки курсов", path: "/coursesGrids" },
      { link: "Список курсов", path: "/coursesList" },
      { link: "Отдельные курсы", path: "/coursesSingle" },
    ],
  },
  {
    id: 3,
    name: "События",
    linkName: [
      { link: "Классические события", path: "/eventsClassic" },
      { link: "Календарные события", path: "/eventsCalendar" },
      { link: "Одно событие", path: "/eventSingle" },
    ],
  },
  {
    id: 4,
    name: "Страницы",
    linkName: [
      { link: "О нас", path: "/aboutUs" },
      { link: "Наши учителя", path: "/ourTeachers" },
      { link: "Одинокий учитель", path: "/singleTeacher" },
      { link: "Галерея 4 колонки", path: "/gallery4Columns" },
    ],
  },
  {
    id: 5,
    name: "Новости",
    linkName: [
      { link: "Классические новости", path: "/classicNews" },
      { link: "Новости сетки", path: "/gridNews" },
      { link: "Один пост", path: "/singlePost" },
    ],
  },
];

const langBtnData = [
  {
    id: 1,
    class:
      "text-start text-[#515151] text-xs font-normal hover:text-[#f5a425] duration-200 py-2 px-3 cursor-pointer w-full border-b-2 border-[#ccc] ",
    content: "Az",
    props: "az",
  },
  {
    id: 2,
    class:
      "text-start text-[#515151] text-xs font-normal hover:text-[#f5a425] duration-200 py-2 px-3 cursor-pointer w-full border-b-2 border-[#ccc]",
    content: "En",
    props: "en",
  },
  {
    id: 1,
    class:
      "text-start text-[#515151] text-xs font-normal hover:text-[#f5a425] duration-200 py-2 px-3 cursor-pointer w-full ",
    content: "Ru",
    props: "ru",
  },
];
const emailTel = [
  {
    id: 1,
    span: "+994 55 799 19 66",
    spanClass:
      "flex items-center gap-1 text-gray tracking-wide text-xs font-normal pl-4 mr-2 border-[#ccc] mt-2",
    iClass: "fa-solid fa-phone",
  },
  {
    id: 2,
    span: "alisahibmammadov98@gmail.com",
    spanClass:
      "flex items-center gap-1 text-gray tracking-wide text-xs font-normal pl-4 mr-2 border-[#ccc] mt-2",
    iClass: "fa-regular fa-envelope",
  },
];

export { emailTel, langBtnData, linksDataAz, linksDataRu, linksDataEn };
