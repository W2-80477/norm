import Navbar from "./components/Navbar";
import './App.css';
import { Carousel } from "@material-tailwind/react";
import data from "./Data.json"

function App() {
  return (
    <div className="">
      <Navbar />
      <Carousel
        loop={true}
        autoplay={true}
        autoplayDelay={4000}
        transition={{duration:0.8}}
        className=" overflow-hidden"
        navigation={({ setActiveIndex, activeIndex, length }) => (
          <div className="absolute bottom-16 left-2/4 z-50 flex -translate-x-2/4 gap-2">
            {new Array(length).fill("").map((_, i) => (
              <span
                key={i}
                className={`block h-1 cursor-pointer rounded-2xl transition-all content-[''] ${activeIndex === i ? "w-8 bg-white" : "w-4 bg-white/50"
                  }`}
                onClick={() => setActiveIndex(i)}
              />
            ))}
          </div>
        )}
      >
        {data.map((item, index) => (
          <div key={index} style={{ backgroundImage: `url(${item.url})` }} className="max-h-screen min-h-screen customAnimate bg-center  bg-cover w-[120vw]">
            
            <span className="inset-0 h-screen w-screen justify-center flex items-center">
              <div className="text-white font-semibold text-4xl">
                {item.caption}
              </div>

            </span>
          </div>
        ))}

      </Carousel>
    </div>
  );
}

export default App;
