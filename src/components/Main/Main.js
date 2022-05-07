import React from "react";
import "./Main.css";
import audiophile from "../../img/client-audiophile.svg";
import databiz from "../../img/client-databiz.svg";
import maker from "../../img/client-maker.svg";
import meet from "../../img/client-meet.svg";
import { Link } from "react-router-dom";

const Main = () => {
  return (
    <div id="main-container">
      <section id="section1">
        <h1>Make remote work</h1>
        <p>
          Get your team in sync, no matter your location. Streamline processes,
          create team rituals, and watch productivity soar.
        </p>
        <Link to="/about">
          <button>Learn more</button>
        </Link>

        <section className="client-section">
          <img src={audiophile} alt="" />
          <img src={databiz} alt="" />
          <img src={maker} alt="" />
          <img src={meet} alt="" />
        </section>
      </section>
      <section id="section2">
        <img id="main-img" alt="" />
      </section>
    </div>
  );
};

export default Main;
