// HOMES
import React from "react";

// STYLES
import "../styles/homes.scss";

// DATA
import { homesData } from "../data";

// COMPINENTS
import Home from "../components/Home";

const Homes = () => {
  return (
    <section className="homes">
      {homesData?.map((home) => {
        return <Home home={home} key={home.id} />;
      })}
    </section>
  );
};

export default Homes;
