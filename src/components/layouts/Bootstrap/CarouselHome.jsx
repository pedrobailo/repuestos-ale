import React from 'react';
import Carousel from 'react-bootstrap/Carousel';

function CarouselHome() {
  return (
    <Carousel>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="/foto1.jpg"
          alt="First slide"
        />
        <Carousel.Caption>
          <h3>Repuestos Ale</h3>
          <p>Calidad y confianza</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="/foto2.jpg"
          alt="Second slide"
        />
        <Carousel.Caption>
          <h3>EL MEJOR PRECIO</h3>
          <p>SOLO REPUESTOS ORIGINALES.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="/foto3.png"
          alt="third slide"
        />
        <Carousel.Caption>
          <h3>Repuestos Ale</h3>
          <p>foto 3</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="/foto4.jpg"
          alt="Four slide"
        />
        <Carousel.Caption>
          <h3>Repuestos Ale</h3>
          <p>foto 4</p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default CarouselHome;
