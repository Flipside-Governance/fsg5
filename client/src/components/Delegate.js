import React from "react";

import mkr from "../logos/mkrtoken.png";
import hop from "../logos/hoptoken.png";
import op from "../logos/optoken.png";
import aave from "../logos/aavetoken.png";

import { Fade, Slide } from "@mui/material";

function Delegate() {
  return (
    <div className="intro5">
      {/* <Slide direction="up" in={true} mountOnEnter style={{ transitionDelay: "100ms" }}> */}
      <div>
        <h1 className="bigletters">DELEGATE TO FLIPSIDE</h1>
        <div className="typewriter2">
          <p className="type2" id="dgy">
            Through active contributions, we've developed a deep understanding
            of how governance processes scale. Let's improve DAOs together.
          </p>
        </div>
      </div>
      {/* </Slide> */}
      {/* <Fade in={true} timeout={4000} style={{ transitionDelay: "100ms" }}> */}
      <div className="values">
        <div className="title-box">DELEGATE</div>
        <div class="container2">
          <div class="card2">
            <div class="face face1">
              <div class="content">
                <img src={mkr} alt="mkr" />
                <h3>MAKERDAO</h3>
              </div>
            </div>
            <div class="face face2">
              <div class="content2">
                <p>Flipside is a top 10 delegate by total voting power.</p>
                <a
                  href="https://vote.makerdao.com/address/0x222d46d1229036c7bb6ea3f453406792ca3c3ea2#delegate-credentials"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hoverjawn"
                >
                  Delegate MKR
                </a>
              </div>
            </div>
          </div>
          <div class="card2">
            <div class="face face1">
              <div class="content">
                <img src={aave} alt="aave" />
                <h3>AAVE</h3>
              </div>
            </div>
            <div class="face face2">
              <div class="content2">
                <p>Flipside is a top 10 delegate by total voting power.</p>
                <a
                  href="https://governance.aave.com/t/flipside-crypto-delegate-platform/9193?u=fig"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hoverjawn"
                >
                  Delegate AAVE
                </a>
              </div>
            </div>
          </div>
          <div class="card2">
            <div class="face face1">
              <div class="content">
                <img src={op} alt="op" />
                <h3>OPTIMISM</h3>
              </div>
            </div>
            <div class="face face2">
              <div class="content2">
                <p>Flipside is a top 20 delegate by total voting power.</p>
                <a
                  href="https://app.optimism.io/delegates?search=flipside"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hoverjawn"
                >
                  Delegate OP
                </a>
              </div>
            </div>
          </div>
          <div class="card2">
            <div class="face face1">
              <div class="content">
                <img src={hop} alt="hop" />
                <h3>HOP</h3>
              </div>
            </div>
            <div class="face face2">
              <div class="content2">
                <p>Flipside is a top 30 delegate by total voting power.</p>
                <a
                  href="https://www.tally.xyz/profile/flipsidecrypto.eth?governanceId=eip155:1:0xed8Bdb5895B8B7f9Fdb3C087628FD8410E853D48"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hoverjawn"
                >
                  Delegate HOP
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* </Fade> */}
    </div>
  );
}

export default Delegate;
