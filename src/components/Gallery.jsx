// REACT HOOKS
import React from "react";

// STYLES
import "../styles/gallery.scss";

// FROM ASSETS
import galImg1 from "../assets/img/gal-1.jpeg";
import galImg2 from "../assets/img/gal-2.jpeg";
import galImg3 from "../assets/img/gal-3.jpeg";
import galImg4 from "../assets/img/gal-4.jpeg";
import galImg5 from "../assets/img/gal-5.jpeg";
import galImg6 from "../assets/img/gal-6.jpeg";
import galImg7 from "../assets/img/gal-7.jpeg";
import galImg8 from "../assets/img/gal-8.jpeg";
import galImg9 from "../assets/img/gal-9.jpeg";
import galImg10 from "../assets/img/gal-10.jpeg";
import galImg11 from "../assets/img/gal-11.jpeg";
import galImg12 from "../assets/img/gal-12.jpeg";
import galImg13 from "../assets/img/gal-13.jpeg";
import galImg14 from "../assets/img/gal-14.jpeg";

const Gallery = () => {
  return (
    <section className="gallery">
      <figure className="gallery__item gallery__item--1">
        <img className="gallery__img" src={galImg1} alt="House 1" />
      </figure>
      <figure className="gallery__item gallery__item--2">
        <img className="gallery__img" src={galImg2} alt="House 2" />
      </figure>
      <figure className="gallery__item gallery__item--3">
        <img className="gallery__img" src={galImg3} alt="House 3" />
      </figure>
      <figure className="gallery__item gallery__item--4">
        <img className="gallery__img" src={galImg4} alt="House 4" />
      </figure>
      <figure className="gallery__item gallery__item--5">
        <img className="gallery__img" src={galImg5} alt="House 5" />
      </figure>
      <figure className="gallery__item gallery__item--6">
        <img className="gallery__img" src={galImg6} alt="House 6" />
      </figure>
      <figure className="gallery__item gallery__item--7">
        <img className="gallery__img" src={galImg7} alt="House 7" />
      </figure>
      <figure className="gallery__item gallery__item--8">
        <img className="gallery__img" src={galImg8} alt="House 8" />
      </figure>
      <figure className="gallery__item gallery__item--9">
        <img className="gallery__img" src={galImg9} alt="House 9" />
      </figure>
      <figure className="gallery__item gallery__item--10">
        <img className="gallery__img" src={galImg10} alt="House 10" />
      </figure>
      <figure className="gallery__item gallery__item--11">
        <img className="gallery__img" src={galImg11} alt="House 11" />
      </figure>
      <figure className="gallery__item gallery__item--12">
        <img className="gallery__img" src={galImg12} alt="House 12" />
      </figure>
      <figure className="gallery__item gallery__item--13">
        <img className="gallery__img" src={galImg13} alt="House 13" />
      </figure>
      <figure className="gallery__item gallery__item--14">
        <img className="gallery__img" src={galImg14} alt="House 14" />
      </figure>
    </section>
  );
};

export default Gallery;
