import React from "react";
import { Link } from "react-router-dom";
import MainWebOne from "./Components/TempOne/Mainwebone";
import MainWebTwo from "./Components/TempTwo/MainWebTwo";
import "./WholeFrontend.css";
import vid from "../src/assets/Video/vid.mp4";

const WholeFrontend = () => {
  const portfolioData = [
    {
      name: "Portfolio One",
      videoSrc: vid,
      route: "/First",
    },
    {
      name: "Portfolio Two",
      videoSrc: vid,
      route: "/Second",
    },
    {
      name: "Portfolio Three",
      videoSrc: vid,
      link: "https://sachin-bhadoriya.vercel.app",
    },
  ];

  return (
    <div className="wholefrontend">
      <div className="container py-5">
        <div className="row g-4 justify-content-center">
          {portfolioData.map((item, index) => (
            <div className="col-md-4" key={index}>
              <div className="portfolio-card animate-float">
                <video
                  className="w-100 rounded"
                  src={item.videoSrc}
                  autoPlay
                  loop
                  muted
                  playsInline
                />
                <div className="portfolio-overlay">
                  <h5>{item.name}</h5>
                  {item.route ? (
                    <Link to={item.route} className="portfolio-link">
                      View Details →
                    </Link>
                  ) : (
                    <a
                      href={item.link}
                      className="portfolio-link"
                      target="_blank"
                      rel="noreferrer"
                    >
                      Visit Website →
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default WholeFrontend;
