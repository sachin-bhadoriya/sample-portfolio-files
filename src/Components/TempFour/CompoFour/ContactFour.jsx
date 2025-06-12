import React from "react";
import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaLinkedinIn,
} from "react-icons/fa";
import "./CssFile/ContactOne.css";

const ContactOne = () => {
  return (
    <footer className="contactMainContainer">
      <div className="container contactSubContainer">
        <div className="row">
          <div className="col-md-6 footerContainerItems">
            <h5>UserName</h5>
            <p className="frederickaTheGreat">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Commodi aut quod ullam! Laboriosam accusamus nulla sint. Impedit dicta rerum voluptatum.</p>
          </div>
          {/* <div className="col-md-2 footerContainerItems"></div> */}
          <div className="col-md-6 pl-0 footerContainerItems">
            <div className="container-fluid">
              <div className="row">
                <div className="col-md-6">
                  <h5>Services</h5>
                  <ul>
                    <li className="marcellus">About</li>
                    <li className="marcellus">Project</li>
                    <li className="marcellus">Skills</li>
                    <li className="marcellus">Tools</li>
                  </ul>
                </div>    
                <div className="col-md-6">
                  <h5>Contact</h5>
                  <ul>
                    <span>Phone No.</span>
                    <li>+91 987 654 3210</li>
                    <span>Email Id</span>
                    <li>bhadoriya******@gmail.com</li>
                    <span>Address</span>
                    <li>Gwalior, M.P. , India</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default ContactOne;
