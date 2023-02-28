import React from "react";

// import { Fade, Slide } from "@mui/material";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faScroll,
  faCheckToSlot,
  faCoins,
  // faMicrochip,
  // faChessRook,
  faDiceD20,
  faUsersViewfinder,
  // faDiceD6,
} from "@fortawesome/free-solid-svg-icons";

function About() {
  return (
    <div className="intro">
      <div>
        <h1 className="bigletters">BY THE NUMBERS</h1>
        <div className="typewriter2" id="tivy">
          <p className="type2">
            We’ve built a long track record of execution, trust, and integrity
            with our partners & delegators.
          </p>
        </div>
      </div>
      {/* <Fade in={true} timeout={4000} style={{ transitionDelay: "100ms" }}> */}
      <div className="values3">
        <div className="title-box">ACTIVITY</div>
        <div className="triple">
          <div className="big-numbers">
            <div className="inumbers">
              <FontAwesomeIcon
                icon={faDiceD20}
                color="#f0ffff"
                size="3x"
                className="iconos4"
              />
              <h1>11</h1>
            </div>
            <h2>Protocol Partners</h2>
          </div>
          <div className="big-numbers">
            <div className="inumbers">
              <FontAwesomeIcon
                icon={faCheckToSlot}
                color="#f0ffff"
                size="3x"
                className="iconos4"
              />
              <h1>750+</h1>
            </div>
            <h2>Votes Submitted</h2>
          </div>
          <div className="big-numbers">
            <div className="inumbers">
              <FontAwesomeIcon
                icon={faUsersViewfinder}
                color="#f0ffff"
                size="3x"
                className="iconos4"
              />
              <h1>8</h1>
            </div>
            <h2>Committee Seats</h2>
          </div>
          <div className="big-numbers">
            <div className="inumbers">
              <FontAwesomeIcon
                icon={faCoins}
                color="#f0ffff"
                size="3x"
                className="iconos4"
              />
              <h1>$14m</h1>
            </div>
            <h2>Tokens Delegated</h2>
          </div>
        </div>
      </div>
      {/* </Fade> */}
    </div>
  );
}

export default About;
