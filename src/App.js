import Navbar from "./components/Navbar";
import './App.css';
import { Carousel } from "@material-tailwind/react";

function App() {

  const data = [
    
    { url: "https://normcph.com/new/2018/wp-content/uploads/2023/03/NormArchitects_Liewood_2023_Photoby_JonasBjerrePoulsen_Lowres_13.jpg", caption: "Photoby_JonasBjerrePoulsen_Lowres" },
    { url: "https://normcph.com/new/2018/wp-content/uploads/2022/10/NormArchitects_UDL_PhotoCredits_JonasBjerrePoulsen_06_cover-1.jpg", caption: "UDL_PhotoCredits_JonasBjerrePoulsen" },
    { url: "https://normcph.com/new/2018/wp-content/uploads/2022/09/NormArchitects_SoftMinimal_Gestalten_PhotoCredits_ChristianM%C3%B8llerAndersen_Lowres_29.jpg", caption: "SoftMinimal_Gestalten_PhotoCredits_Christian" },
    { url: "https://normcph.com/new/2018/wp-content/uploads/2022/07/NormArchitects_%C3%84ng_JonasBjerrePoulsen_Lowres_31-1.jpg", caption: "JonasBjerrePoulsen_Lowres" },
    { url: "https://normcph.com/new/2018/wp-content/uploads/2022/04/NormArchitects_Koio_JBP_lowres_14.jpg", caption: "Koio_JBP_lowres" },
    { url: "https://normcph.com/new/2018/wp-content/uploads/2022/02/2022.01.07_Norm_Architects_Xiamen_Basao_Tea_Store_0011_v1_LO-RES_COVER-1.jpg", caption: "Xiamen_Basao_Tea_Store" }
  ]

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
