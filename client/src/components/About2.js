import React from "react";

import { Fade, Slide } from "@mui/material";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBookOpenReader,
  faChartSimple,
  faHandshakeSimple,
  faScroll,
  faGear,
  faCheckToSlot,
  faLandmark,
} from "@fortawesome/free-solid-svg-icons";

import aavegray from "../logos/aavegray.png";
import axelargray from "../logos/axelargray2.png";
import cosmosgray from "../logos/cosmosgray.png";
import hopgray from "../logos/hopgray.png";
import junogray from "../logos/junogray.png";
import mkrgray from "../logos/mkrgray.png";
import mndegray from "../logos/mndegray.png";
import opgray from "../logos/opgray.png";
import osmogray from "../logos/osmogray.png";
import mdaogray from "../logos/metricsdao.png";
import evmosgray from "../logos/evmosgray.png";
import arrow from "../logos/greenarrow.png";

function About() {
  return (
    <div className="intro">
      {/* <Slide direction="up" in={true} mountOnEnter style={{ transitionDelay: "100ms" }}> */}
      <div>
        <h1 className="bigletters">WHAT WE DO</h1>
        <div className="typewriter2" id="servy">
          <p className="type2">
            Participating in governance goes far beyond acquiring tokens and
            voting on proposals. Our team provides value in a number of
            different ways to ensure our partners reach their full potential.
          </p>
        </div>
      </div>
      {/* </Slide> */}
      {/* <Fade in={true} timeout={4000} style={{ transitionDelay: "100ms" }}> */}
      <div>
        <div className="values3">
          <div className="title-box">OUR SERVICES</div>
          <div className="top-service">
            <div className="service">
              <div className="iconhouse">
                <FontAwesomeIcon
                  icon={faBookOpenReader}
                  color="#f0ffff"
                  size="2xl"
                  className="iconos"
                />
              </div>
              <div className="service-title">
                <h2>Independent Research</h2>
              </div>
            </div>
            <div className="service">
              <div className="iconhouse">
                <FontAwesomeIcon
                  icon={faChartSimple}
                  color="#f0ffff"
                  size="2xl"
                  className="iconos"
                />
              </div>
              <div className="service-title">
                <h2>Data & Analytics</h2>
              </div>
            </div>
            <div className="service">
              <div className="iconhouse">
                <FontAwesomeIcon
                  icon={faLandmark}
                  color="#f0ffff"
                  size="2xl"
                  className="iconos"
                />
              </div>
              <div className="service-title">
                <h2>Forum Engagement</h2>
              </div>
            </div>
          </div>
          <div className="bot-service">
            <div className="service">
              <div className="iconhouse">
                <FontAwesomeIcon
                  icon={faScroll}
                  color="#f0ffff"
                  size="2xl"
                  className="iconos"
                />
              </div>
              <div className="service-title">
                <h2>Proposal Development</h2>
              </div>
            </div>
            <div className="service">
              <div className="iconhouse">
                <FontAwesomeIcon
                  icon={faGear}
                  color="#f0ffff"
                  size="2xl"
                  className="iconos"
                />
              </div>
              <div className="service-title">
                <h2>Tools & Dashboards</h2>
              </div>
            </div>
            <div className="service">
              <div className="iconhouse">
                <FontAwesomeIcon
                  icon={faCheckToSlot}
                  color="#f0ffff"
                  size="2xl"
                  className="iconos"
                />
              </div>
              <div className="service-title">
                <h2>Voting & Rationale</h2>
              </div>
            </div>
            <div className="service">
              <div className="iconhouse">
                <FontAwesomeIcon
                  icon={faHandshakeSimple}
                  color="#f0ffff"
                  size="2xl"
                  className="iconos"
                />
              </div>
              <div className="service-title">
                <h2>Advisory & Consulting</h2>
              </div>
            </div>
          </div>
        </div>
        <div class="shadow">
          <div className="chevron">
            <img src={arrow} alt="arrow" />
          </div>
          <div className="chevron">
            <img src={arrow} alt="arrow" />
          </div>
          <div className="chevron">
            <img src={arrow} alt="arrow" />
          </div>
        </div>
        <div className="values3">
          <div className="title-box">OUR PARTNERS</div>
          <div className="top-service2">
            <img src={aavegray} className="alogos" alt="aave" />
            <img src={mkrgray} className="plogos" alt="maker" />
            <img src={opgray} className="plogos" alt="op" />
            <img src={hopgray} className="xlogos" alt="hop" />
            <img src={mdaogray} className="ylogos" alt="mdao" />
          </div>
          <div className="bot-service2">
            <img src={axelargray} className="plogos" alt="axelar" />
            <img src={cosmosgray} className="wlogos" alt="cosmos" />
            <img src={osmogray} className="zlogos" alt="osmo" />
            <img src={mndegray} className="plogos" alt="mnde" />
            <img src={evmosgray} className="plogos" alt="evmos" />
            <img src={junogray} className="alogos" alt="juno" />
          </div>
        </div>
      </div>
      {/* </Fade> */}
    </div>
  );
}

export default About;
