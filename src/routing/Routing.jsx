import { Suspense, useEffect, useState } from "react";
import { Routes, Route } from "react-router-dom";
import Container from "../container/Container";
import Home from "../pages/home/Home";
import Loading from "../components/loading/Loading";
import "../App.css";
function Routing() {
  const [topBtn, setTopBtn] = useState(true);

  useEffect(() => {
    const topBtnScroll = () => {
      if (window.pageYOffset > 10) {
        setTopBtn(true);
      } else {
        setTopBtn(false);
      }
    };
    window.addEventListener("scroll", topBtnScroll);

    return () => {
      window.removeEventListener("scroll", topBtnScroll);
    };
  }, []);
  const handleClickTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };
  return (
    <>
      {topBtn ? (
        <div
        data-aos="zoom-in"
          className="top bg-goldenRod hover:bg-deepReddishBrown hover:cursor-pointer text-white w-12 h-12 rounded-full flex items-center justify-center shadow-boxShadow"
          onClick={handleClickTop}
        >
          <i className="fa-solid fa-chevron-up"></i>
        </div>
      ) : null}
      <Suspense fallback={<Loading />}>
        <Routes>
          <Route path="/" element={<Container />}>
            <Route path="/" element={<Home />} />
          </Route>
        </Routes>
      </Suspense>
    </>
  );
}

export default Routing;
