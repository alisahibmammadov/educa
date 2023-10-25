import Navbar from "../layout/Navbar";
import ViewCourse from "../layout/ViewCourse";
import Footer from "../layout/Footer";
import { Outlet } from "react-router-dom";
// import PropTypes from "prop-types";

function Container() {
  return (
    <>
      <Navbar />
      <Outlet />
      <ViewCourse />
      <Footer />
    </>
  );
}

export default Container;
// Container.propTypes = {
//   Outlet: PropTypes.array.isRequired,
// };
