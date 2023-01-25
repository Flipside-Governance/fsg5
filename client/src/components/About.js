import React from "react";
import Typewriter from "typewriter-effect";

function About() {
  return (
    <div className="intro">
      <div className="typewriter2">
        <Typewriter
          onInit={(typewriter) => {
            typewriter
              .typeString(
                "Flipside is an ecosystem growth partner. Our governance team serves as a Professional Delegate, supporting the proliferation and function of decentralized organizations through rational decision-making, proposal creation and analytics. We bring clarity to DAOs by unlocking product, social and tokenholder value."
              )
              .start();
          }}
          options={{
            wrapperClassName: "type2",
            cursorClassName: "type-cursor2",
          }}
        />
      </div>
      <div className="values">
        <h1>Our Values</h1>
        <div class="container1">
          <div class="card">
            <h3 class="title">Authentic</h3>
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
            <h3 class="title">Rational</h3>
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
            <h3 class="title">Human</h3>
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
            <h3 class="title">Curious</h3>
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
            <h3 class="title">Loyal</h3>
            <div class="bar">
              <div class="emptybar"></div>
              <div class="filledbar"></div>
              <p>
                We stay committed to each other and the protocols that we serve
                because we believe in the mission.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
