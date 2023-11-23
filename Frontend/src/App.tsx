import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Button} from "react-bootstrap";
import Flickity from "react-flickity-component";
import Carousel from "./components/utils/carousel/Carousel";

function App() {
  const flickityOptions = {
    initialIndex: 2
  }

  return (
    <div>
        <Carousel />
    </div>
  );
}

export default App;
