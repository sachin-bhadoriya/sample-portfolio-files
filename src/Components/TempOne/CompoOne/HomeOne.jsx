import "./CssFile/HomeOne.css";
import dev from "../../../assets/image/dev.png";
import React from "react";
const HomeOne = () => {
  return (
    <>
      <div className="container-fluid homeMainContainer">
        <div className="row ">
          <div className="col-md-6 homeHeadTextContainer">
            <p className="homeOneSubhead homeHeadText merienda">Hi, I am</p>
            <p className="homeOneMainhead homeHeadText dmSerifDisplay">
              <span>Lorem</span> Ipsum
            </p>
            <p className="homeOneParahead homeHeadText marcellus">
              MERN Stack Developer / App Developer
            </p>
            <button className="cvDownloadBtn">Download CV</button>
            <button className="hireMeBtn">Hire Me</button>
          </div>
          <div className="col-md-6 homeHeadImageContainer">
            <img className="homeOneImage" src={dev} alt="Dev" />
          </div>
        </div>
      </div>
      <div className="marquee my-3">
        <div className="track">
          {[...Array(10)].map((_, index) => (
            <React.Fragment key={index}>
              <img
                src="https://img.icons8.com/?size=100&id=20909&format=png&color=000000"
                alt="Html"
              />
              <img
                src="https://img.icons8.com/?size=100&id=21278&format=png&color=000000"
                alt="Css"
              />
              <img
                src="https://img.icons8.com/?size=100&id=PXTY4q2Sq2lG&format=png&color=000000"
                alt="Javascript"
              />
              <img
                src="https://img.icons8.com/?size=100&id=Vra58PN2KmI5&format=png&color=000000"
                alt="React Js"
              />
              <img
                src="https://img.icons8.com/?size=100&id=hsPbhkOH4FMe&format=png&color=000000"
                alt="Node Js"
              />
              <img
                src="https://img.icons8.com/?size=100&id=kg46nzoJrmTR&format=png&color=000000"
                alt="Express Js"
              />
              <img
                src="https://img.icons8.com/?size=100&id=rY6agKizO9eb&format=png&color=000000"
                alt="Vue Js"
              />
            </React.Fragment>
          ))}
        </div>
      </div>
    </>
  );
};

export default HomeOne;
