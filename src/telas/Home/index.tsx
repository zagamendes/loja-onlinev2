import React from 'react';
import NovaColecao from '../../components/NovaColecao';
import Shelf from '../../components/Shelf';
import SmallCard from '../../components/SmallCard';
import Slider from 'react-slick';
// import { Container } from './styles';

const Home: React.FC = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 4,
    responsive: [
      {
        breakpoint: 1280,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          arrows: false,
        },
      },
    ],
  };
  return (
    <>
      <section>
        <div
          style={{ height: '400px', background: 'grey', zIndex: -1 }}
          className="w-100 position-absolute"
        ></div>
        <img
          src="https://onlinestore-6767e.web.app/img/image.webp"
          alt="banner"
          className="img-fluid banner-principal"
        />
      </section>

      <div className="container">
        <div className="row d-flex flex-column">
          <h1 className="text-center">Por que comprar na loja?</h1>
          <div
            className="d-flex justify-content-between w-100 column-gap-16"
            style={{ overflow: 'auto' }}
          >
            <SmallCard
              icone="fas fa-globe-americas"
              titulo="Produtos importados"
              texto="produtos de alta qualidade"
            />
            <SmallCard
              icone="fas fa-globe-americas"
              titulo="Produtos importados"
              texto="produtos de alta qualidade"
            />
            <SmallCard
              icone="fas fa-globe-americas"
              titulo="Produtos importados"
              texto="produtos de alta qualidade"
            />
            <SmallCard
              icone="fas fa-globe-americas"
              titulo="Produtos importados"
              texto="produtos de alta qualidade"
            />
          </div>
        </div>
        <div className="d-flex flex-column">
          <h2 className="text-center mb-5 mt-5">Recem chegados</h2>
          <div className="d-flex justify-content-between flex-wrap">
            <Slider {...settings}>
              <Shelf />
              <Shelf />
              <Shelf />
              <Shelf />
              <Shelf />
              <Shelf />
              <Shelf />
              <Shelf />
            </Slider>
          </div>
        </div>
        <div className="mt-5">
          <NovaColecao />
        </div>
      </div>
    </>
  );
};

export default Home;
