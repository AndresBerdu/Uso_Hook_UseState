import "./App.css";
import React, { Fragment } from 'react';
import { Testimonial } from "./components/Testimonial";
import Photo1 from "./images/Foto1.png";
import Photo2 from "./images/Foto2.jpg";
import Photo3 from "./images/Foto3.jpg"; 

function App() {
  return (
    <Fragment>
      <Testimonial 
        img={Photo1} 
        name="Juan Perez"
        stars="⭐⭐⭐"
        text="Lorem ipsum dolor sit amet consectetur adipisicing elit. At sapiente obcaecati debitis veniam quidem nemo beatae inventore. Animi corporis ducimus blanditiis quaerat eos a excepturi, cupiditate exercitationem, iusto architecto corrupti!"
      />
      <Testimonial
        img={Photo2} 
        name="Maria Suarez"
        stars="⭐⭐⭐⭐"
        text="Lorem ipsum dolor sit amet consectetur adipisicing elit. At sapiente obcaecati debitis veniam quidem nemo beatae inventore. Animi corporis ducimus blanditiis quaerat eos a excepturi, cupiditate exercitationem, iusto architecto corrupti!"
      />
      <Testimonial
        img={Photo3} 
        name="Camila Perez"
        stars="⭐⭐⭐⭐⭐"
        text="Lorem ipsum dolor sit amet consectetur adipisicing elit. At sapiente obcaecati debitis veniam quidem nemo beatae inventore. Animi corporis ducimus blanditiis quaerat eos a excepturi, cupiditate exercitationem, iusto architecto corrupti!"  
      />
    </Fragment>  
  )
}

export { App }; 