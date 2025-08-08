import React from 'react';
import { graphicData } from './assets/graphicData';
import { Card } from "react-bootstrap"
import { useState } from 'react';
import GDmodals from './GDmodals';

function GDprojects({folder}){
    const matchedFolder = graphicData.find(item => item.name === folder);

    if (!matchedFolder) {
        return <p>No data found for this folder.</p>;
    }

    const [modalShow, setModalShow] = useState(false);
    const [selectedProject, setSelectedProject] = useState(null);
    const handleCardClick = (project) => {
    setSelectedProject(project);
    setModalShow(true);
    };


    return(
        <>

        <div className='d-flex flex-wrap justify-center '>
        {matchedFolder.projects.map((project, index) => (
          
            <>
            <Card className='m-2 h-10 w-1/8' key={index}>
                <Card.Img src={project.thumbnail} className='w-40 h-40 object-cover' onClick={() => handleCardClick(project)}/>
                <Card.Body>
                {project.projectName}
                </Card.Body>
            </Card>
            </>       
       
            ))}
        </div> 
        <GDmodals
        show={modalShow}
        folder={selectedProject}
        onHide={() => setModalShow(false)}/>       
        </>
    )
}   

export default GDprojects