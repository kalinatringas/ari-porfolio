

import HorizontalVideos from "./HorizontalVideos"
import VerticalVideos from "./VerticalVideos"
import { useState } from "react";
import { Tab } from "react-bootstrap";
import { Tabs } from "react-bootstrap";



function VideoCarousel() {


 
  return (
    <>
  
      <Tabs
      defaultActiveKey="horizontal"
      id="uncontrolled-tab-example"
      className="m-auto mb-3 w-[50%] text-center"
    >
      <Tab eventKey="horizontal" title="Horizontal">
        <HorizontalVideos/>
      </Tab>
      <Tab eventKey="vertical" title="Vertical">
        <VerticalVideos/>
      </Tab>
      
    
    </Tabs>
   

    </>
  
  )
}

export default VideoCarousel