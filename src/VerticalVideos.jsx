
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
      <Slider {...settings}>
      {verticalData.map ((d) => (
        <div className="bg-purple-200 w-auto ml-auto mr-auto mt-4 mb-4  text-black rounded-xl">
          <div className="p-3 m-auto  rounded-t-xl">
             <iframe className="h-[50vh] w-full m-auto border-none" allow="autoplay" src={d.src} controls/>
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