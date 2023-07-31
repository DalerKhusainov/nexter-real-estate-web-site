// REACT
import React from "react";

// ICONS
import { AiFillHeart } from "react-icons/ai";
import { FiMapPin } from "react-icons/fi";
import { SlUser } from "react-icons/sl";
import { PiUniteSquareLight } from "react-icons/pi";
import { BsKey } from "react-icons/bs";

// FUNCTION
import { formatCur } from "../functions";

const Home = ({ home }) => {
  return (
    <>
      {/* CART 1 */}
      <div className="home">
        {/* CART IMG */}
        <img className="home__img" src={home.houseImg} alt="House 1" />
        {/* CART LIKE ICON */}
        <div className="home__like-icon">
          <AiFillHeart />
        </div>
        {/* CART NAME */}
        <h5 className="home__name">{home.houseName}</h5>
        {/* CART LOCATION */}
        <div className="home__location">
          {/* CART LOCATION ICON */}
          <div>
            <FiMapPin />
          </div>
          {/* CART ROOM TEXT */}
          <p>{home.location}</p>
        </div>
        {/* CART ROOMS */}
        <div className="home__rooms">
          {/* CART ROOMS ICON */}
          <div>
            <SlUser />
          </div>
          {/* CART ROOMS TEXT */}
          <p>{home.rooms} rooms</p>
        </div>
        {/* CART AREA */}
        <div className="home__area">
          {/* CART AREA ICON */}
          <div>
            <PiUniteSquareLight />
          </div>
          {/* CART AREA TEXT */}
          <p>
            {home.area} m<sup>2</sup>
          </p>
        </div>
        {/* CART PRICE */}
        <div className="home__price">
          {/* CART PRICE ICON */}
          <div>
            <BsKey />
          </div>
          {/* CART PRICE TEXT */}
          <p>{formatCur(home.price, "en-US", "USD")}</p>
        </div>
        <button className="btn home__btn">Contact realtor</button>
      </div>
    </>
  );
};

export default Home;
