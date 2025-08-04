import GDprojects from "./GDprojects";
import { useState } from "react";

function GraphicDesign(){

    const [selectedGallery, setSelectedGallery] = useState(null);
    const handleClick = (folder) => {
    setSelectedGallery(folder);
  };


    return(
        <>
        <h1>
            Graphic Design
        </h1>
        {selectedGallery ? (
            <>
           <button onClick={() => setSelectedGallery(null)}> Go Back </button>
            <GDprojects folder={selectedGallery}/>
            </>
        ):
        <>
         <div className="group relative w-fit m-auto overflow-visible transition-transform duration-300 hover:scale-105 hover:[animation:var(--animate-shake)]" style={{ willChange: 'transform' }} onClick={() => handleClick("Genesis Dance Crew")}> 
            <img className = "h-[25vh] object-cover  transition-transform duration-300" src = "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fvectorified.com%2Fimages%2Fpurple-folder-icon-31.png&f=1&nofb=1&ipt=a44f0bb0427487a1ffcbb7a3e5d0173c86a1a0ad51b5d5c89b658bc061109a79"/>
            <div class="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white text-xl  transition-transform duration-300">
                Genesis Dance Crew
            </div>
        </div>
        <div className="group relative w-fit m-auto gap-2  transition-transform duration-300 hover:scale-105 hover:[animation:var(--animate-shake)]" style={{ willChange: 'transform' }} onClick={() => handleClick("Peruvian Student Association")}> 
            <img className = "h-[25vh] object-cover  transition-transform duration-300" src = "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fvectorified.com%2Fimages%2Fpurple-folder-icon-31.png&f=1&nofb=1&ipt=a44f0bb0427487a1ffcbb7a3e5d0173c86a1a0ad51b5d5c89b658bc061109a79"/>
            <div class="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white text-xl  transition-transform duration-300">
                Peruvian Student Association
            </div>
        </div>
        
        </>
        }
        </>

    )
}

export default GraphicDesign