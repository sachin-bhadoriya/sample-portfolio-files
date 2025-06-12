import VantaBackground from "../../VantaBackgroundTwo";
import "./CssFile/HomeTwo.css";
import ExperienceContainer from "./Parts/ExperienceContainer";
import RowImageContainer from "./Parts/RowImageContainer";
import SocialIcons from "./Parts/SocialIcons";
import ButnsMain from "./Parts/ButnsMain";

const ServiceTwo = () => {
  return (
    <div>
      <VantaBackground />
      <div className="container mainTwoContainer text-white ">
        <div className=" subContTwo">
          <div className="col-md-4">
            <RowImageContainer />
          </div>
          <div className="col-md-8 secondPfTxt ">
            <div className="txtonly">
              <h2 className="name notoSerifDisplay">Service</h2>
              <p>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                Voluptatibus pariatur cum debitis non et eos maxime sunt
                provident aut placeat voluptate rerum deserunt porro, dolores
                officiis consequatur quidem? Iure ipsam laudantium iusto vero
                optio praesentium, fuga sequi. Odit nihil tempore rem totam
                nulla incidunt, ut laudantium nobis et ea soluta.
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

export default ServiceTwo;
