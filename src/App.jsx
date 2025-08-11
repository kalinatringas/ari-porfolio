import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navigate from './Navigate';
import Home from './Home';
import Photography from './Photography';
import GraphicDesign from './GraphicDesign';
import AboutMe from './AboutMe';
import './custom.scss'
import './App.css';

import Videography from './Videography';

function App() {
  // let Component;
  // switch(window.location.pathname){
  //   case "/":
  //   case "/Home":
  //     Component = Home;
  //     break;
  //   case "/Videography":
  //     Component = Videography;
  //     break;
  //   case "/Photography":
  //     Component = Photography;
  //     break;
  //   case "/GraphicDesign":
  //     Component = GraphicDesign;
  //     break;
  //   case "/AboutMe":
  //     Component = AboutMe;
  //     break;
  //   default:
  //     Component = Home;
  //     break;
  // }

  return (
    <Router>
      <Navigate className="static" />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Home" element={<Home />} />
        <Route path="/Videography" element={<Videography />} />
        <Route path="/Photography" element={<Photography />} />
        <Route path="/GraphicDesign" element={<GraphicDesign />} />
        <Route path="/AboutMe" element={<AboutMe />} />
        <Route path="*" element={<Home />} /> {/* fallback */}
      </Routes>
    </Router>
  )
}

export default App
