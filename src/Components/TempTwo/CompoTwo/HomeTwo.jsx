import { useState, useEffect } from "react";
import VantaBackground from "../../VantaBackgroundTwo";
import "./CssFile/HomeTwo.css";
import ExperienceContainer from "./Parts/ExperienceContainer";
import RowImageContainer from "./Parts/RowImageContainer";
import SocialIcons from "./Parts/SocialIcons";
import ButnsMain from "./Parts/ButnsMain";

const HomeTwo = () => {
  
  const roles = ["Web Dev", "App Dev", "MERN Dev"];
  const [text, setText] = useState("");
  const [index, setIndex] = useState(0);
  const [subIndex, setSubIndex] = useState(0);
  const [deleting, setDeleting] = useState(false);
  useEffect(() => {
    const currentRole = roles[index];

    if (!deleting && subIndex === currentRole.length) {
      setTimeout(() => setDeleting(true), 1000);
      return;
    }

    if (deleting && subIndex === 0) {
      setDeleting(false);
      setIndex((prev) => (prev + 1) % roles.length);
      return;
    }

    const timeout = setTimeout(
      () => {
        setSubIndex((prev) => prev + (deleting ? -1 : 1));
      },
      deleting ? 60 : 120
    );

    return () => clearTimeout(timeout);
  }, [subIndex, deleting]);

  return (
    <div className="portfolioContainer">
      <VantaBackground />
      <div className="container mainTwoContainer text-white ">
        <div className=" subContTwo">
          <div className="col-md-4">
            <RowImageContainer />
          </div>
          <div className="col-md-8 secondPfTxt">
            <div className="txtonly">
              <h4 className="hello merienda">Hello I'm</h4>
              <h2 className="name notoSerifDisplay">
                <span style={{ color: "#a11e49", fontWeight: "bold" }}>
                  Lorem
                </span>{" "}
                Ipsum
              </h2>
              <h4 className="quality raleway mb-2">
                And I'm a{" "}
                <span style={{ color: "#a11e49", fontWeight: "bold" }}>
                  {roles[index].substring(0, subIndex)}
                </span>
              </h4>
              <p className="para raleway">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae
                magni, sit autem assumenda accusamus quam! Lorem ipsum dolor sit
                amet consectetur adipisicing elit. Quae magni, sit autem
                assumenda accusamus quam!
              </p>
            </div>
            <SocialIcons />
            <ButnsMain />
          </div>
        </div>
      </div>
      <ExperienceContainer />
    </div>
  );
};

export default HomeTwo;
