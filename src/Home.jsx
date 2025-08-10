 
import React from "react"
import {useRef, useEffect} from "react"
import WaveSection from "./WaveSection"
import 'animate.css';
import { motion, useInView, useAnimation, useScroll, useTransform} from "motion/react";


function Home() {
  //  const ref = useRef(null);
  //   const isInView = useInView(ref, { once: true });
  //   const { scrollYProgress } = useScroll({
  //     target: ref,
  //     offset: ["start end", "end start"]  
  //   });
  //   const y = useTransform(scrollYProgress, [0, 1], ["0vh", "-70vh"]);
  //   // const isAtTop = useInView(ref, { margin: "-100% 0px 0px 0px" });

    return (
    <div className="min-h-screen flex flex-col items-center justify-center text-center space-y-5 p-2">
      <h1 className= "mb-0 transition animate-fadeInUp">Ari Paul-Forton</h1>
      <h3 className="mt-0 animate-fadeInUp2">Videographer | Photographer | Graphic Designer</h3>
      
    <section className="h-[10vh] bg-gray-200 flex items-center justify-center animate-fadeInUp3">
            <p>Section 1 content...</p>
    </section>
    
    </div>
    )
}

export default Home