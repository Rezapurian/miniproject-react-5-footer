import React from "react";
import "./Footer.css";
import ItemsContainer from "./ItemsContainer";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedin, faInstagram, faFacebook, faGithub, faTwitter } from "@fortawesome/fontawesome-free-brands";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="items">
        <h1 className="title">
          <span className="title-span">Free </span>
          until you're ready to <br /> launch
        </h1>
        <div>
          <input type="text" placeholder="Enter your phone" className="input" />
          <button className="button">Request Code</button>
        </div>
      </div>
      <ItemsContainer />
      <div className="date">
        <span>@ 2020 Appy. All rights reserved.</span>
        <span>Terms . Privacy policy</span>
        <div className="icons">
          <div className="icon">
            <FontAwesomeIcon icon={faFacebook} />
          </div>
          <div className="icon">
            <FontAwesomeIcon icon={faTwitter} />
          </div>
          <div className="icon">
            <FontAwesomeIcon icon={faGithub} />
          </div>
          <div className="icon">
            <FontAwesomeIcon icon={faLinkedin} />
          </div>
          <div className="icon">
            <FontAwesomeIcon icon={faInstagram} />
          </div>
        </div>
      </div>
    </footer>
  );
}
