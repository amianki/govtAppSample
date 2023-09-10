import Cards from "./Cards";
import Footer from "./Footer";
import Heading from "./Heading";
import Navbar from "./Navbar";
import SlideShow from "./SlideShow";

const Main = () => {
  return (
    <>
    <Heading />
      <Navbar />
      <SlideShow />
      <button class="py-2 px-4 my-4 bg-transparent text-indigo-600 font-semibold border border-indigo-600 rounded hover:bg-cyan-600 hover:text-white hover:border-transparent transition ease-in duration-200 transform hover:-translate-y-1 active:translate-y-0">
        Button
      </button>
      <div className="flex flex-column mx-14">
        <Cards />
        <Cards />
        <Cards />
        <Cards />
      </div>

      <Footer />
    </>
  );
};

export default Main;
