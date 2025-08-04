import { Card } from "react-bootstrap"
import { photoData } from "./assets/photoData"
import { Button } from "react-bootstrap"
import { useState } from "react";

import PhotographyGroup from "./PhotographyGroup";

function Photography(){
    const half = Math.ceil(photoData.length / 2);
    const firstHalf = photoData.slice(0, half);
    const secondHalf = photoData.slice(half);

    const [selectedGallery, setSelectedGallery] = useState(null);

    const [showGallery, setShowGallery] = useState(false);

    return(
        <>
        <h1>
            Photography
        </h1>    
        
        { selectedGallery ? (
            <>
            <Button onClick={() => setSelectedGallery(null)}> Go Back </Button>
            <PhotographyGroup selectedGallery={selectedGallery} setShowGallery={setShowGallery} /></>  
        ) :  

        <>
        <div className="d-flex flex-wrap justify-center ">
                    {firstHalf.map((d) => (

                        <>
                            <Card className="m-2 h-10 w-1/8">
                                <Card.Img key={d.id} src={d.icon} className="w-40 h-40 object-cover" alt={d.name} /><Card.Body>
                                    <Card.Title>{d.name}</Card.Title>
                                    <Button variant="primary" onClick={() => setSelectedGallery(d.id)}>View More</Button>
                                </Card.Body>
                            </Card>
                        </>

                    ))}
                </div><div className="d-flex flex-wrap justify-center ">
                        {secondHalf.map((d) => (

                            <>
                                <Card className="m-2 h-10 w-1/8">
                                    <Card.Img key={d.id} src={d.icon} className="w-40 h-40 object-cover" alt={d.name} /><Card.Body>
                                        <Card.Title>{d.name}</Card.Title>
                                        <Button variant="primary" onClick={() => setSelectedGallery(d.id)}>View More</Button>
                                    </Card.Body>
                                </Card>
                            </>

                        ))}
                    </div>
            </>
        }
        </>

    )
}

export default Photography