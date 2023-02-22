import React, { useState, useEffect } from "react";
import axios from "axios";

import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea, Fade, Slide } from "@mui/material";
import ToggleButton from "@mui/material/ToggleButton";
import ToggleButtonGroup from "@mui/material/ToggleButtonGroup";
import { createTheme, ThemeProvider } from "@mui/material/styles";

import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import optoken from "../logos/optoken.png";
import dtd from "../logos/dtd.png";
import pone from "../logos/pone.png";

function Research() {
  const [blogData, setBlogData] = useState([]);
  const [recapData, setRecapData] = useState([]);
  const [alignment, setAlignment] = useState("research");

  const handleChange = () => {
    const newAlignment = alignment === "research" ? "recaps" : "research";
    setAlignment(newAlignment);
  };

  const theme = createTheme({
    palette: {
      neutral: {
        main: "#08f28a",
      },
    },
  });

  const styles = {
    media: {
      height: 180,
      width: 150,
      borderRadius: 10,
    },
    media1: {
      height: 90,
      width: 125,
      borderRadius: 10,
    },
    media2: {
      boxShadow: "0px 0px 8px 0px #fff",
      "&:hover": { boxShadow: "0px 0px 20px 0px #fff" },
    },
  };

  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 3001 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1331 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 1330, min: 888 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 887, min: 0 },
      items: 1,
    },
  };

  useEffect(() => {
    axios
      .get(
        "https://api.rss2json.com/v1/api.json?rss_url=https%3A%2F%2Fmedium.com%2Ffeed%2Fflipside-governance%2Ftagged%2Fflipside-governance"
      )
      .then((res) => {
        setBlogData(res.data.items);
      })
      .catch((err) => console.log(err));
  }, []);

  useEffect(() => {
    axios
      .get(
        "https://api.rss2json.com/v1/api.json?rss_url=https%3A%2F%2Fmedium.com%2Ffeed%2Fflipside-governance%2Ftagged%2Frecap"
      )
      .then((res) => {
        console.log(res.data.items);
        setRecapData(res.data.items);
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <div className="intro3">
      {/* <Slide direction="up" in={true} mountOnEnter style={{ transitionDelay: "100ms" }}> */}
      <div>
        <h1 className="bigletters">RESEARCH & ANALYSIS</h1>
        <div className="typewriter2" id="searchy">
          <p className="type2">
            Leveraging expertise in DeFi, political science, traditional
            finance, and data engineering, our research is designed to help DAOs
            scale. Nearly 5,000 readers benefit from this in-depth research on a
            quarterly basis.
          </p>
        </div>
      </div>
      {/* </Slide> */}
      {/* <Fade in={true} timeout={4000} style={{ transitionDelay: "100ms" }}> */}
      <div className="values755">
        <div className="lrfeat">
          <p id="featu">FEATURED</p>
          <div className="featured-cards">
            <Card
              sx={{
                maxWidth: 650,
                minHeight: 180,
                borderRadius: 3,
                marginBottom: 6,
                backgroundColor: "#171b20",
                border: "2px solid #08f28a",
                transition: "0.4s ease-out",
                // marginTop: 4,
                textAlign: "left",
              }}
              className="dbcard"
            >
              <CardActionArea
                href={"http://fscrypto.co/dao-to-dao-analysis"}
                target="_blank"
                rel="noopener noreferrer"
                sx={{
                  display: "flex",
                  backgroundColor: "#171b20",
                  padding: 2,
                  transition: "0.4s ease-out",
                }}
              >
                <CardMedia
                  component="img"
                  height="500"
                  image={pone}
                  style={styles.media}
                  sx={{
                    backgroundColor: "#171b20",
                  }}
                  alt="thumbnail"
                />
                <CardContent
                  sx={{
                    backgroundColor: "#171b20",
                    color: "#f5f5f5",
                  }}
                >
                  <Typography
                    gutterBottom
                    variant="h6"
                    component="div"
                    sx={{ fontFamily: "inherit" }}
                  >
                    Analysis of a DAO to DAO Partnership
                  </Typography>
                  <Typography
                    variant="body2"
                    // color="text.secondary"
                    sx={{ fontFamily: "inherit" }}
                  >
                    This in-depth research report tells the story of Aave and
                    Balancer and their deepening partnership. We examine this
                    symbiotic relationship using Flipside's enterprise data.
                  </Typography>
                </CardContent>
              </CardActionArea>
            </Card>
          </div>
        </div>
        <div className="lrfeat">
          <p id="featu">FEATURED</p>
          <div className="featured-cards">
            <Card
              sx={{
                maxWidth: 650,
                minHeight: 180,
                borderRadius: 3,
                marginBottom: 6,
                backgroundColor: "#171b20",
                border: "2px solid #08f28a",
                transition: "0.4s ease-out",
                // marginTop: 4,
                textAlign: "left",
              }}
              className="dbcard"
            >
              <CardActionArea
                href={"http://fscrypto.co/dao-to-dao-analysis"}
                target="_blank"
                rel="noopener noreferrer"
                sx={{
                  display: "flex",
                  backgroundColor: "#171b20",
                  padding: 2,
                  transition: "0.4s ease-out",
                }}
              >
                <CardMedia
                  component="img"
                  height="500"
                  image={pone}
                  style={styles.media}
                  sx={{
                    backgroundColor: "#171b20",
                  }}
                  alt="thumbnail"
                />
                <CardContent
                  sx={{
                    backgroundColor: "#171b20",
                    color: "#f5f5f5",
                  }}
                >
                  <Typography
                    gutterBottom
                    variant="h6"
                    component="div"
                    sx={{ fontFamily: "inherit" }}
                  >
                    Analysis of a DAO to DAO Partnership
                  </Typography>
                  <Typography
                    variant="body2"
                    // color="text.secondary"
                    sx={{ fontFamily: "inherit" }}
                  >
                    This in-depth research report tells the story of Aave and
                    Balancer and their deepening partnership. We examine this
                    symbiotic relationship using Flipside's enterprise data.
                  </Typography>
                </CardContent>
              </CardActionArea>
            </Card>
          </div>
        </div>
      </div>

      <div className="values55">
        <div className="title-box">FROM OUR BLOG</div>
        {/* <h2 id="feat">FEATURED CONTENT</h2> */}
        {/* <div className="featured">
          <Card
            sx={{
              maxWidth: 600,
              minHeight: 180,
              borderRadius: 3,
              marginBottom: 6,
              backgroundColor: "#171b20",
              transition: "0.4s ease-out",
            }}
            className="dbcard"
          >
            <CardActionArea
              href={"https://op-governance.vercel.app/"}
              target="_blank"
              rel="noopener noreferrer"
              sx={{
                display: "flex",
                backgroundColor: "#171b20",
                padding: 1,
              }}
            >
              <CardMedia
                component="img"
                height="100"
                image={dtd}
                style={styles.media}
                sx={{
                  backgroundColor: "#171b20",
                }}
                alt="thumbnail"
              />
              <CardContent
                sx={{
                  backgroundColor: "#171b20",
                  color: "#f5f5f5",
                }}
              >
                <Typography
                  gutterBottom
                  variant="h6"
                  component="div"
                  sx={{ fontFamily: "inherit" }}
                >
                  Analysis of a DAO to DAO Partnership
                </Typography>
                <Typography
                  variant="body2"
                  // color="text.secondary"
                  sx={{ fontFamily: "inherit" }}
                >
                  This in-depth research report tells the story of Aave and
                  Balancer and their deepening partnership. We examine this
                  symbiotic relationship using Flipside's enterprise data.
                </Typography>
              </CardContent>
            </CardActionArea>
          </Card>
          <Card
            sx={{
              maxWidth: 600,
              minHeight: 180,
              borderRadius: 3,
              marginBottom: 6,
              backgroundColor: "#171b20",
              border: "2px solid #08f28a",
              transition: "0.4s ease-out",
            }}
            className="dbcard"
          >
            <CardActionArea
              href={"https://op-governance.vercel.app/"}
              target="_blank"
              rel="noopener noreferrer"
              sx={{
                display: "flex",
                backgroundColor: "#171b20",
                padding: 2,
                transition: "0.4s ease-out",
              }}
            >
              <CardMedia
                component="img"
                height="500"
                image={dtd}
                style={styles.media}
                sx={{
                  backgroundColor: "#171b20",
                }}
                alt="thumbnail"
              />
              <CardContent
                sx={{
                  backgroundColor: "#171b20",
                  color: "#f5f5f5",
                }}
              >
                <Typography
                  gutterBottom
                  variant="h6"
                  component="div"
                  sx={{ fontFamily: "inherit" }}
                >
                  Analysis of a DAO to DAO Partnership
                </Typography>
                <Typography
                  variant="body2"
                  // color="text.secondary"
                  sx={{ fontFamily: "inherit" }}
                >
                  This in-depth research report tells the story of Aave and
                  Balancer and their deepening partnership. We examine this
                  symbiotic relationship using Flipside's enterprise data.
                </Typography>
              </CardContent>
            </CardActionArea>
          </Card>
        </div> */}
        <div className="toggler">
          <ThemeProvider theme={theme}>
            <ToggleButtonGroup
              color="neutral"
              value={alignment}
              exclusive
              onChange={handleChange}
            >
              <ToggleButton
                value="research"
                sx={{
                  fontFamily: "inherit",
                  color: "#f5f5f5",
                  backgroundColor: "#171b20",
                  borderRadius: "10px",
                }}
              >
                LATEST RESEARCH
              </ToggleButton>
              <ToggleButton
                value="recaps"
                sx={{
                  fontFamily: "inherit",
                  color: "#f5f5f5",
                  backgroundColor: "#171b20",
                  borderRadius: "10px",
                }}
              >
                WEEKLY RECAPS
              </ToggleButton>
            </ToggleButtonGroup>
          </ThemeProvider>
        </div>
        {alignment === "research" ? (
          <>
            <div className="research-cards">
              <div
                style={{
                  position: "relative",
                }}
              >
                <Carousel
                  responsive={responsive}
                  focusOnSelect={true}
                  infinite={true}
                  autoPlay={true}
                  renderButtonGroupOutside={true}
                  partialVisbile={false}
                  centerMode={true}
                  // arrows={false}
                  className="carooo"
                >
                  {blogData.map((post, index) => (
                    <Card
                      sx={{
                        width: 350,
                        height: 300,
                        borderRadius: 3,
                        backgroundColor: "#171b20",
                        transition: "0.4s ease-out",
                      }}
                      className="dbcard"
                    >
                      <CardActionArea
                        href={post.link}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <CardMedia
                          component="img"
                          height="150"
                          image={post.thumbnail}
                          alt="thumbnail"
                        />
                        <CardContent
                          sx={{
                            backgroundColor: "#171b20",
                            color: "#f5f5f5",
                            //   minHeight: 100,
                          }}
                        >
                          <Typography
                            gutterBottom
                            variant="body1"
                            component="div"
                            sx={{ fontFamily: "inherit", minHeight: 80 }}
                          >
                            {post.title}
                          </Typography>
                          <Typography
                            variant="body2"
                            // color="text.secondary"
                            sx={{ fontFamily: "inherit" }}
                          >
                            Author: {post.author}
                          </Typography>
                        </CardContent>
                      </CardActionArea>
                    </Card>
                  ))}
                </Carousel>
              </div>
            </div>
          </>
        ) : (
          <>
            <div className="research-cards">
              <div style={{ position: "relative" }}>
                <Carousel
                  responsive={responsive}
                  focusOnSelect={true}
                  infinite={true}
                  autoPlay={true}
                  renderButtonGroupOutside={true}
                  partialVisbile={false}
                  centerMode={true}
                  // arrows={false}
                  className="carooo"
                >
                  {recapData.map((post, index) => (
                    <Card
                      sx={{
                        width: 350,
                        height: 300,
                        borderRadius: 3,
                        backgroundColor: "#171b20",
                        transition: "0.4s ease-out",
                      }}
                      className="dbcard"
                    >
                      <CardActionArea
                        href={post.link}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <CardMedia
                          component="img"
                          height="150"
                          image={post.thumbnail}
                          alt="thumbnail"
                        />
                        <CardContent
                          sx={{
                            backgroundColor: "#171b20",
                            color: "#f5f5f5",
                            //   minHeight: 100,
                          }}
                        >
                          <Typography
                            gutterBottom
                            variant="body1"
                            component="div"
                            sx={{ fontFamily: "inherit", minHeight: 80 }}
                          >
                            {post.title}
                          </Typography>
                          <Typography
                            variant="body2"
                            // color="text.secondary"
                            sx={{ fontFamily: "inherit" }}
                          >
                            Author: {post.author}
                          </Typography>
                        </CardContent>
                      </CardActionArea>
                    </Card>
                  ))}
                </Carousel>
              </div>
            </div>
          </>
        )}
      </div>
      {/* </Fade> */}
    </div>
  );
}

export default Research;
