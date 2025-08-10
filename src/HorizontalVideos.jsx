
import { horizonalData } from "./assets/videoData"
import Slider from "react-slick"

import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"



function HorizontalVideos() {

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
      {horizonalData.map ((d) => (
        <div className="ml-auto mr-auto mt-4 mb-4  text-white rounded-xl">
          <div className="p-3 m-auto  rounded-t-xl">
             <iframe src={d.src}  allow="autoplay" className=" h-[50vh] w-full border-none" controls/>
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

export default HorizontalVideos