import { Suspense } from "react";
import { Routes, Route } from "react-router-dom";
import Container from "../container/Container";
import Home from "../pages/home/Home";
function Routing() {
  return (
    <Suspense>
      <Routes>
        <Route path="/" element={<Container />}>
          <Route path="/" element={<Home />} />
        </Route>
      </Routes>
    </Suspense>
  );
}

export default Routing;
