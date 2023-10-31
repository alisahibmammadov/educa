import Carousel from "./components/Carousel";
import OurTeachers from "./components/OurTeachers";
import PopularCourses from "./components/PopularCourses";
import ReadBooks from "./components/ReadBooks";

function Home() {
  return (
    <div>
      <Carousel />
      <OurTeachers />
      <ReadBooks />
      <PopularCourses/>
    </div>
  );
}

export default Home;
