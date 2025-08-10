
import { verticalData } from "./assets/videoData"
import Slider from "react-slick"

import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"



function VerticalVideos() {

const settings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1
}
 
  return (
    <>
    <div className="w-4xl justify-center m-auto ">
      <Slider {...settings} className="flex justify-center items-center">
      {verticalData.map ((d) => (
        <div className="flex justify-center items-center flex-col mt-4 mb-4 text-white rounded-xl">
          <div className="p-3 m-auto flex justify-center items-center rounded-t-xl">
             <iframe className="h-[50vh] w-[30vw] border-none" allow="autoplay" src={d.src} controls/>
          </div>
          
          <div className="flex flex-col justify-center items-center gap-4 p-4" >
            <p>{d.name}</p>
          </div>    
        </div>
      ))}
      </Slider>
    </div>

    </>
  
  )
}

export default VerticalVideos