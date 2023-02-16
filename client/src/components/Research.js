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
        main: "#39ff14",
      },
    },
  });

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
            By leveraging our experience in DeFi, political science, traditional
            finance, and data engineering, we are uniquely positioned to help
            DAOs scale. <br/> <br/> We publish in-depth research on a weekly basis.
          </p>
        </div>
      </div>
      {/* </Slide> */}
      {/* <Fade in={true} timeout={4000} style={{ transitionDelay: "100ms" }}> */}
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
      <div className="values55">
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
