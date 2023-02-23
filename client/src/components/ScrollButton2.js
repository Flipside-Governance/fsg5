import React, { useState } from "react";
import { Link } from "react-scroll";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAnglesUp } from "@fortawesome/free-solid-svg-icons";

const ScrollButton2 = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <div className="breaker2">
      <div className="foot-left">
        <p>Copyright @2023 Flipside. All rights reserved.</p>
      </div>
      <div className="foot-main">
        <Link
          activeClass="active2"
          className="navlink"
          to="about"
          spy={true}
          smooth={true}
          // offset={-100}
          duration={500}
        >
          WHO WE ARE
        </Link>
        <Link
          activeClass="active2"
          className="navlink"
          to="about2"
          spy={true}
          smooth={true}
          // offset={-100}
          duration={500}
        >
          WHAT WE DO
        </Link>
        <Link
          activeClass="active2"
          className="navlink"
          to="about3"
          spy={true}
          smooth={true}
          // offset={-100}
          duration={500}
        >
          STATS
        </Link>
        <Link
          activeClass="active2"
          className="navlink"
          to="research"
          spy={true}
          smooth={true}
          // offset={-100}
          duration={500}
        >
          RESEARCH
        </Link>
        <Link
          activeClass="active2"
          className="navlink"
          to="dashboards"
          spy={true}
          smooth={true}
          // offset={-100}
          duration={500}
        >
          TOOLS
        </Link>
        <Link
          activeClass="active2"
          className="navlink"
          to="delegate"
          spy={true}
          smooth={true}
          // offset={-100}
          duration={500}
        >
          DELEGATE
        </Link>
        <Link
          activeClass="active2"
          className="navlink8"
          to="contact"
          spy={true}
          smooth={true}
          // offset={-100}
          duration={500}
        >
          COLLABORATE
        </Link>
      </div>
    </div>
  );
};

export default ScrollButton2;
