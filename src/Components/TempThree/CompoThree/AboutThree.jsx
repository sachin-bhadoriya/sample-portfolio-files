import "./CssFile/AboutOne.css";

const AboutOne = () => {
  return (
    <>
      <div className="container text-center aboutMainContainer">
        <p className="my-4 aboutHeadingName dmSerifDisplay">ABOUT</p>
        <div className="aboutTopContent">
          <div className="p-5 m-auto">
            <p className="m-auto raleway">
              I'm a passionate MERN Stack Developer with expertise in building
              full-fledged, scalable, and user-centric web applications using
              MongoDB, Express.js, React.js, and Node.js. I offer end-to-end
              solutions that cover everything from design to development and
              long-term maintenance.
            </p>
          </div>
        </div>
        <div className="exploreTextContainer">
          <span className="marcellus exploreText">EXPLORE</span>
        </div>
        <div className="container">
          <div className="row">
          <div className="col-md-6 my-2 ">
            <div className="bgBoxAbout">
              <div className="smallContainerMain">
                <div className="design smallContainer m-auto">
                  <p className="marcellus smallContainerHead">DESIGN</p>
                  <p className="raleway">
                    I believe that a great application starts with a great user
                    experience. That’s why I create clean, responsive, and
                    intuitive UI/UX designs that not only look good but also
                    enhance functionality.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-6 my-2">
            <div className="bgBoxAbout">
              <div className="smallContainerMain">
                <div className="development smallContainer m-auto">
                  <p className="marcellus smallContainerHead">DEVELOPMENT</p>
                  <p className="raleway">
                    Using the MERN stack, I build fast, secure, and modular web
                    applications that serve real business needs.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        </div>
        <div className="container my-2">
          <div className="row">
            <div className="col-md-3"></div>
            <div className="col-md-6 ">
              <div className="bgBoxAbout">
                <div className="smallContainerMain">
                  <div className="maintenance smallContainer m-auto">
                    <p className="marcellus smallContainerHead">MAINTENANCE</p>
                    <p className="raleway">
                      I don’t just build and leave. I provide ongoing support
                      and scaling solutions so your app remains secure, updated,
                      and efficient.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-3"></div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AboutOne;
