// REACT HOOKS
import React from "react";

// FROM ASSETS
import StoryImg1 from "../assets/img/story-1.jpeg";
import StoryImg2 from "../assets/img/story-2.jpeg";

// STYLES
import "../styles/story-pictures.scss";

const StoryPictures = () => {
  return (
    <div className="story__pictures">
      <img
        className="story__img--1"
        src={StoryImg1}
        alt="Couple with new house"
      />
      <img className="story__img--2" src={StoryImg2} alt="New house" />
    </div>
  );
};

export default StoryPictures;
