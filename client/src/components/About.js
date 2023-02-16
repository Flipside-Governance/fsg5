import React, { useRef } from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faScroll,
  faCheckToSlot,
  faCoins,
  // faMicrochip,
  // faChessRook,
  faDiceD20,
  // faDiceD6,
} from "@fortawesome/free-solid-svg-icons";

import {
  faTwitter,
  faMedium,
  faTelegram,
} from "@fortawesome/free-brands-svg-icons";

import avi from "../logos/avi.jpeg";
import dobby from "../logos/dobby.png";
import fig from "../logos/figpfp.png";
import jess from "../logos/jessmonke.png";
import raph from "../logos/raphbaph.jpeg";

import { Fade, Slide } from "@mui/material";

function About() {
  // const containerRef = useRef(null);

  return (
    <div className="intro">
      {/* <Slide direction="up" in={true} mountOnEnter style={{ transitionDelay: "100ms" }}> */}
      <div>
        <h1 className="bigletters">WHO WE ARE</h1>
        <div className="typewriter2">
          <p className="type2" id="abt1">
            We are a full-time professional delegate and DAO governance team
            dedicated to improving how DAOs operate across the entire Web3
            ecosystem. <br /> <br /> Our team values rational, authentic
            discourse & decision-making, seeking open dialogue to reach the best
            outcomes for our partners.
          </p>
        </div>
      </div>
      <div className="values3">
        <div className="title-box">OUR TEAM</div>
        <div className="triple">
          <div className="profile">
            <div className="pfpbox">
              <img src={avi} className="pfp" alt="avi" />
            </div>
            <h3>Avi Meyers</h3>
            <div className="socials22">
              <a
                href="https://twitter.com/flipsidegov"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FontAwesomeIcon
                  icon={faTwitter}
                  color="#f0ffff"
                  size="lg"
                  className="iconos66"
                />
              </a>
              <a
                href="https://twitter.com/flipsidegov"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FontAwesomeIcon
                  icon={faTelegram}
                  color="#f0ffff"
                  size="lg"
                  className="iconos66"
                />
              </a>
            </div>
          </div>
          <div className="profile">
            <div className="pfpbox">
              <img src={fig} className="pfp" alt="fig" />
            </div>
            <h3>Fig Gowen</h3>
            <div className="socials22">
              <a
                href="https://twitter.com/flipsidegov"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FontAwesomeIcon
                  icon={faTwitter}
                  color="#f0ffff"
                  size="lg"
                  className="iconos66"
                />
              </a>
              <a
                href="https://twitter.com/flipsidegov"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FontAwesomeIcon
                  icon={faTelegram}
                  color="#f0ffff"
                  size="lg"
                  className="iconos66"
                />
              </a>
            </div>
          </div>
          <div className="profile">
            <div className="pfpbox">
              <img src={jess} className="pfp" alt="jess" />
            </div>
            <h3>Jessica Huhnke</h3>
            <div className="socials22">
              <a
                href="https://twitter.com/flipsidegov"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FontAwesomeIcon
                  icon={faTwitter}
                  color="#f0ffff"
                  size="lg"
                  className="iconos66"
                />
              </a>
              <a
                href="https://twitter.com/flipsidegov"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FontAwesomeIcon
                  icon={faTelegram}
                  color="#f0ffff"
                  size="lg"
                  className="iconos66"
                />
              </a>
            </div>
          </div>
          <div className="profile">
            <div className="pfpbox">
              <img src={raph} className="pfp" alt="raph" />
            </div>
            <h3>Raphael Spannocchi</h3>
            <div className="socials22">
              <a
                href="https://twitter.com/flipsidegov"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FontAwesomeIcon
                  icon={faTwitter}
                  color="#f0ffff"
                  size="lg"
                  className="iconos66"
                />
              </a>
              <a
                href="https://twitter.com/flipsidegov"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FontAwesomeIcon
                  icon={faTelegram}
                  color="#f0ffff"
                  size="lg"
                  className="iconos66"
                />
              </a>
            </div>
          </div>
          <div className="profile">
            <div className="pfpbox">
              <img src={dobby} className="pfp" alt="ian" />
            </div>
            <h3>Ian Dobbins</h3>
            <div className="socials22">
              <a
                href="https://twitter.com/flipsidegov"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FontAwesomeIcon
                  icon={faTwitter}
                  color="#f0ffff"
                  size="lg"
                  className="iconos66"
                />
              </a>
              <a
                href="https://twitter.com/flipsidegov"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FontAwesomeIcon
                  icon={faTelegram}
                  color="#f0ffff"
                  size="lg"
                  className="iconos66"
                />
              </a>
            </div>
          </div>
        </div>
      </div>
      {/* <div className="typewriter2">
          <p className="type2">
            Our team values rational, authentic discourse & decision-making.
            Seeking open dialogue to reach the best outcomes for our partners.
          </p>
        </div> */}
      {/* </Slide> */}
      {/* <Fade in={true} timeout={4000} style={{ transitionDelay: "100ms" }}> */}
      {/* <div className="values"> */}
      {/* <div class="container1">
          <div class="card">
            <h3 class="title">We are Authentic</h3>
            <div class="bar">
              <div class="emptybar"></div>
              <div class="filledbar"></div>
              <p>
                We're here because we're passionate about crypto and what it can
                achieve. We're users first and governors second.{" "}
              </p>
            </div>
          </div>
          <div class="card">
            <h3 class="title">We are Rational</h3>
            <div class="bar">
              <div class="emptybar"></div>
              <div class="filledbar"></div>
              <p>
                We consider all possible outcomes to the best of our ability and
                thoroughly weigh the pros and cons of each decision we make.
              </p>
            </div>
          </div>
          <div class="card">
            <h3 class="title">We are Human</h3>
            <div class="bar">
              <div class="emptybar"></div>
              <div class="filledbar"></div>
              <p>
                We form real connections through collaboration with other
                delegates and governance participants.
              </p>
            </div>
          </div>
          <div class="card">
            <h3 class="title">We are Curious</h3>
            <div class="bar">
              <div class="emptybar"></div>
              <div class="filledbar"></div>
              <p>
                We embrace the never-ending learning curve that is crypto and
                love to experiment with new ideas and frameworks.
              </p>
            </div>
          </div>
          <div class="card">
            <h3 class="title">We are Loyal</h3>
            <div class="bar">
              <div class="emptybar"></div>
              <div class="filledbar"></div>
              <p>
                We stay committed to each other and the protocols that we serve
                because we believe in the mission.
              </p>
            </div>
          </div>
        </div> */}
      {/* </div> */}
      {/* </Fade> */}
    </div>
  );
}

export default About;
