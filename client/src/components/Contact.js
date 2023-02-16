import React from "react";
import fsgwhite2 from "../logos/fsgwhite2.png";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";

import {
  faTwitter,
  faMedium,
  faTelegram,
} from "@fortawesome/free-brands-svg-icons";

import { Fade, Slide } from "@mui/material";

function Contact() {
  return (
    <div className="values88">
      {/* <Slide
        direction="up"
        in={true}
        mountOnEnter
        style={{ transitionDelay: "100ms" }}
      > */}
      <div>
        <h1 className="bigletters">COLLABORATE WITH US</h1>
        <div className="typewriter4">
          <p className="type2">
            Want to get in touch? Interested in collaborating with us? Drop us a
            note below!
          </p>
        </div>
      </div>
      {/* </Slide> */}
      {/* <Fade in={true} timeout={4000} style={{ transitionDelay: "100ms" }}> */}
      <div className="values">
        <div className="title-box">CONTACT FORM</div>
        <div className="contact-main">
          <div className="contact-logo">
            <img src={fsgwhite2} className="ct-logo" alt="fsglogo" />
            <div className="socials-ct">
              <a
                href="https://twitter.com/flipsidegov"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FontAwesomeIcon
                  icon={faTwitter}
                  color="#f0ffff"
                  size="lg"
                  className="iconos"
                />
              </a>
              <a
                href="https://medium.com/flipside-governance"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FontAwesomeIcon
                  icon={faMedium}
                  color="#f0ffff"
                  size="lg"
                  className="iconos"
                />
              </a>
              <a
                href="https://medium.com/flipside-governance"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FontAwesomeIcon
                  icon={faTelegram}
                  color="#f0ffff"
                  size="lg"
                  className="iconos"
                />
              </a>
              <a
                href="https://medium.com/flipside-governance"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FontAwesomeIcon
                  icon={faEnvelope}
                  color="#f0ffff"
                  size="lg"
                  className="iconos"
                />
              </a>
            </div>
          </div>
          <div className="contact-form">
            <form>
              <input
                name="name"
                type="text"
                class="feedback-input"
                placeholder="Name"
              />
              <input
                name="email"
                type="text"
                class="feedback-input"
                placeholder="Email"
              />
              <textarea
                name="text"
                class="feedback-input"
                placeholder="Message"
              ></textarea>
              <input type="submit" value="SUBMIT" />
            </form>
          </div>
        </div>
      </div>
      {/* </Fade> */}
    </div>
  );
}

export default Contact;
