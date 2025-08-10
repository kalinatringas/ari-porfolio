import { Card } from "react-bootstrap"
import { photoData } from "./assets/photoData"
import { Button } from "react-bootstrap"
import { useState } from "react";

import PhotographyGroup from "./PhotographyGroup";

function Photography(){
    const half = Math.ceil(photoData.length / 2);
    const firstHalf = photoData.slice(0, half);
    const secondHalf = photoData.slice(half);

    const [modalShow, setModalShow] = useState(false);


    const [selectedGallery, setSelectedGallery] = useState(null);
    const handleCardClick = (id) => {
    setSelectedGallery(photoData.find(g => g.id === id));
    setModalShow(true);
    };

    return(
        <>
        <h1 className="animate-fadeInUp">
            Photography
        </h1>    
               
   
        <div className="d-flex flex-wrap justify-center ">
                    {firstHalf.map((d) => (

                        <>
                            <Card className="m-2 h-10 w-1/8 hover:scale-103 hover:animate-shake" key={d.id}>
                                <Card.Img key={d.id} src={d.icon} className="w-40 h-40 object-cover align-middle flex justify-center" alt={d.name} /><Card.Body>
                                    <Card.Title>{d.name}</Card.Title>
                                    <Button variant="primary" onClick={() => handleCardClick(d.id)}>View More</Button>
                                </Card.Body>
                            </Card>
                        </>

                    ))}
                </div><div className="d-flex flex-wrap justify-center ">
                        {secondHalf.map((d) => (

                            <>
                                <Card className="m-2 h-10 w-1/8 hover:scale-103 hover:animate-shake" key={d.id}>
                                    <Card.Img key={d.id} src={d.icon} className="w-40 h-40 object-cover" alt={d.name} /><Card.Body>
                                        <Card.Title>{d.name}</Card.Title>
                                        <Button variant="primary" onClick={() => handleCardClick(d.id)}>View More</Button>
                                    </Card.Body>
                                </Card>
                            </>

                        ))}
        </div>
        <PhotographyGroup
        show={modalShow}
        gallery={selectedGallery}
        onHide={() => setModalShow(false)}/> 

        </>

    )
}

export default Photography