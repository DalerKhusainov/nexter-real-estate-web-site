// REACT HOOKS
import React from "react";

// STYLES
import "../styles/realtors.scss";

// DATA
import { realtorsData } from "../data";

const Realtor = ({ realtor }) => {
  return (
    <>
      <img className="realtors__img" src={realtor.imgURL} alt="Realtor 1" />
      <div className="realtors__details">
        <h4 className="heading-4 heading-4--light">{realtor.name}</h4>
        <p className="realtors__sold">{realtor.sold} houses sold</p>
      </div>
    </>
  );
};

const Realtors = () => {
  return (
    <div className="realtors">
      <h3 className="heading-3">Top 3 realtors</h3>
      <div className="realtors__list">
        {realtorsData?.map((realtor) => {
          return <Realtor realtor={realtor} key={realtor.id} />;
        })}
      </div>
    </div>
  );
};

export default Realtors;
