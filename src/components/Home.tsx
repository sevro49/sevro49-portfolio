import About from "./About";
import Projects from "./Projects";
import References from "./References";

const Home = () => {
  return (
    <div id="home" className="w-full">
      <About />
      <References />
      <Projects />
    </div>
  );
};

export default Home;
