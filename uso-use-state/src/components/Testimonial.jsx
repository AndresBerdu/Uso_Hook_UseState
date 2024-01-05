import React from 'react';
import "./Testimonial.css";

function Testimonial({img, name, stars, text}) {
  return (
    <div className="Testimonial__container">

        <div>
          <img className="Testimonial__photo" src={img} alt="photo profile" />
          <h2 className="Testimonial__name">{name}</h2>
        </div>
        
        <div className="Testimonial__content">
            <p className="Testimonial__starts">{stars}</p>
            <p className="Testimonial__text">{text}</p>
        </div>
    </div>
  )
}

export { Testimonial };