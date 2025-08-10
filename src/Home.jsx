 
import React from "react"
import {useRef, useEffect} from "react"
import WaveSection from "./WaveSection"
import 'animate.css';
import { motion, useInView, useAnimation, useScroll, useTransform} from "motion/react";


function Home() {
   const ref = useRef(null);
    const isInView = useInView(ref, { once: true });
    const { scrollYProgress } = useScroll({
      target: ref,
      offset: ["start end", "end start"]  
    });
    const y = useTransform(scrollYProgress, [0, 1], ["0vh", "-70vh"]);
    // const isAtTop = useInView(ref, { margin: "-100% 0px 0px 0px" });

    return (
    <div className="min-h-screen">
      <div className='sticky top-0 flex flex-col justify-center h-screen text-center' ref={ref}>
        <motion.div 
        style={{ y }}
        variants={{
          hidden: { opacity: 0, x: 50 },
          visible: { opacity: 1, x: 0 }
          }}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
            transition={{ duration: 0.5, delay: 0.25, ease: "easeInOut" }}
          >
          
          <h1 className= "mb-0 transition animate-fadeInUp">Ari Paul-Forton</h1>
          <h3 className="mt-0 animate-fadeInUp2">Videographer | Photographer | Graphic Designer</h3>
        </motion.div>
      </div>
    <motion.div 
      className="space-y-20 p-10"
      variants={{
            hidden: { opacity: 0, y: -50 },
            visible: { opacity: 1, y: 0 }
            }}
        initial={{ opacity: 0, y: 50 }}
        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
        transition={{ duration: 0.5, delay: 0.25, ease: "easeInOut" }} ref={ref}>
          
          <section className="h-[10vh] bg-gray-200 flex items-center justify-center">
            <p>Section 1 content...</p>
          </section>
        
      </motion.div>
    
    </div>
    )
}

export default Home