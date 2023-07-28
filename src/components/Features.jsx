// REACT HOOKS
import React from "react";

// STYLES
import "../styles/features.scss";

// ICONS
import { AiOutlineGlobal } from "react-icons/ai";
import { BsKey, BsTrophy } from "react-icons/bs";
import { FiMapPin } from "react-icons/fi";
import { BiLock } from "react-icons/bi";
import { HiOutlinePresentationChartLine } from "react-icons/hi";

const Features = () => {
  return (
    <section className="features">
      {/* FEATURE 1 */}
      <div className="feature">
        {/* ICON */}
        <div className="feature__icon">
          <AiOutlineGlobal />
        </div>
        {/* TEXT */}
        <h4 className="heading-4 heading-4--dark">World's best luxury homes</h4>
        {/* SUBTEXT */}
        <p className="feature__text">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Tenetur
          distinctio necessitatibus pariatur voluptatibus.
        </p>
      </div>

      {/* FEATURE 2 */}
      <div className="feature">
        {/* ICON */}
        <div className="feature__icon">
          <BsTrophy />
        </div>
        {/* TEXT */}
        <h4 className="heading-4 heading-4--dark">Only the best properties</h4>
        {/* SUBTEXT */}
        <p className="feature__text">
          Voluptatum mollitia quae. Vero ipsum sapiente molestias accusamus
          rerum sed a eligendi aut quia.
        </p>
      </div>

      {/* FEATURE 3 */}
      <div className="feature">
        {/* ICON */}
        <div className="feature__icon">
          <FiMapPin />
        </div>
        {/* TEXT */}
        <h4 className="heading-4 heading-4--dark">
          All homes in top locations
        </h4>
        {/* SUBTEXT */}
        <p className="feature__text">
          Tenetur distinctio necessitatibus pariatur voluptatibus quidem
          consequatur harum.
        </p>
      </div>

      {/* FEATURE 4 */}
      <div className="feature">
        {/* ICON */}
        <div className="feature__icon">
          <BsKey className="feature__icon--key" />
        </div>
        {/* TEXT */}
        <h4 className="heading-4 heading-4--dark">New home in one week</h4>
        {/* SUBTEXT */}
        <p className="feature__text">
          Vero ipsum sapiente molestias accusamus rerum. Lorem, ipsum dolor sit
          amet consectetur adipisicing elit.
        </p>
      </div>

      {/* FEATURE 5 */}
      <div className="feature">
        {/* ICON */}
        <div className="feature__icon">
          <HiOutlinePresentationChartLine />
        </div>
        {/* TEXT */}
        <h4 className="heading-4 heading-4--dark">Top 1% realtors</h4>
        {/* SUBTEXT */}
        <p className="feature__text">
          Quidem consequatur harum, voluptatum mollitia quae. Tenetur distinctio
          necessitatibus pariatur voluptatibus.
        </p>
      </div>

      {/* FEATURE 6 */}
      <div className="feature">
        {/* ICON */}
        <div className="feature__icon">
          <BiLock />
        </div>
        {/* TEXT */}
        <h4 className="heading-4 heading-4--dark">Secure payments on nexter</h4>
        {/* SUBTEXT */}
        <p className="feature__text">
          Pariatur voluptatibus quidem consequatur harum, voluptatum mollitia
          quae.
        </p>
      </div>
    </section>
  );
};

export default Features;
