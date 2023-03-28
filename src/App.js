import React, { useEffect } from 'react'
import './App.css';
import Slider from 'react-slick';
import $ from "jquery"

function App() {
  setTimeout(() =>{
    const prueba = document.querySelector('[data-index="0"]')
    prueba.classList.add('slick-now')
  }, 0)

  const settings = {
    slidesToShow: 2,
    slidesToScroll: 1,
    dots: true,
    focusOnSelect: true,
    beforeChange: (next) =>{
      const nextSlideElement = document.querySelector(`[data-index="${next}"]`);
      setTimeout(() => {
        nextSlideElement.classList.add('slick-now');
      });
    },
    afterChange: (current) =>{
      const prevSlideElement = document.querySelector(`[data-index="${current}"]`);
      setTimeout(() => {
        prevSlideElement.classList.remove('slick-now');
      });
    }
  }
  
  /*function handleAdd(){
    const prueba = document.querySelector('[data-index="0"]')
    prueba.classList.add('slick-now')
  }
  useEffect(() =>{
    window.addEventListener('load', handleAdd)
  })*/
  return (
    <div className="box" >
      <Slider className='slider' {...settings}>
        <div className="slide"><span>slide 1</span></div>
        <div className="slide"><span>slide 2</span></div>
        <div className="slide"><span>slide 3</span></div>
        <div className="slide"><span>slide 4</span></div>
        <div className="slide"><span>slide 5</span></div>
        <div className="slide"><span>slide 6</span></div>
      </Slider>
    </div>
  );
}

export default App;
