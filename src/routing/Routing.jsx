import { Suspense } from "react";
import { Routes, Route } from "react-router-dom";
import Container from "../container/Container";
import Home from "../pages/home/Home";
import Loading from "../components/loading/Loading";
function Routing() {
  return (
    <Suspense fallback={<Loading />}>
      <Routes>
        <Route path="/" element={<Container />}>
          <Route path="/" element={<Home />} />
        </Route>
      </Routes>
    </Suspense>
  );
}

export default Routing;
