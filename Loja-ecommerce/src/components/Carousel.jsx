import React, { useState } from 'react';
import './Carousel.css'; // Importa o CSS para estilizar o Carousel
import tren1 from '../assets/img/tren1.jpg';
import tren2 from '../assets/img/tren2.jpg';
import tren3 from '../assets/img/tren3.jpg';

const Carousel = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    { image: tren1, description: 'Descrição do Produto 1' },
    { image: tren2, description: 'Descrição do Produto 2' },
    { image: tren3, description: 'Descrição do Produto 3' },
    // Adicione mais imagens e descrições conforme necessário
  ];

  const handleNext = () => {
    setCurrentSlide((prevSlide) => (prevSlide + 1) % slides.length);
  };

  const handlePrev = () => {
    setCurrentSlide((prevSlide) => (prevSlide - 1 + slides.length) % slides.length);
  };

  return (
    <section className="carousel">
      
      <div className="carousel-container">
        <div className="carousel-track">
          {slides.map((slide, index) => (
            <div
              className={`carousel-slide ${index === currentSlide ? 'active' : ''}`}
              key={index}
            >
              <div className="carousel-image">
                <img src={slide.image} alt={`Produto Destaque ${index + 1}`} />
              </div>
             
            </div>
          ))}
        </div>
        <button className="carousel-button prev" onClick={handlePrev}>❮</button>
        <button className="carousel-button next" onClick={handleNext}>❯</button>
      </div>
    </section>
  );
};

export default Carousel;
