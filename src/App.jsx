import { useState } from 'react'
import { useEffect, useRef } from 'react';
import Navigate from './Navigate';
import Home from './Home';
import Photography from './Photography';
import GraphicDesign from './GraphicDesign';
import AboutMe from './AboutMe';
import './custom.scss'
import './App.css';
import { Container } from 'react-bootstrap';
import Videography from './Videography';

function App() {
  let Component;
  switch(window.location.pathname){
    case "/":
    case "/Home":
      Component = Home;
      break;
    case "/Videography":
      Component = Videography;
      break;
    case "/Photography":
      Component = Photography;
      break;
    case "/GraphicDesign":
      Component = GraphicDesign;
      break;
    case "/AboutMe":
      Component = AboutMe;
      break;
    default:
      Component = Home;
      break;
  }

  return (
    <div className='h-100vh overflow-auto'>
    <Navigate/>
    <Component/>
    <img className='fixed h-[70vh] -left-80 -bottom-80 animate-spin-slow' src="src/assets/CD.png" />
    </div>
  )
}

export default App
