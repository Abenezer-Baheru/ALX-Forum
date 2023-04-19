import React from "react";
import { Icon } from "react-icons-kit";
import { facebook } from "react-icons-kit/feather/facebook";
import { instagram } from "react-icons-kit/feather/instagram";
import { linkedin } from "react-icons-kit/feather/linkedin";
import "./Footer.css";
import logo from "../../Images/logo1.webp";

export default function Footer() {
  return (
    <footer className="footer-wrapper d-md-flex justify-content-around">
        <div className="logo-icon-wrapper">
          <div className="logo">
            <img src={logo} />
          </div>
          <div className="Icon">
            <a href="https://www.facebook.com/alxafrica/">
              <Icon icon={facebook} size={25} />
            </a>
            <a href="https://www.instagram.com/alx_africa/">
              <Icon icon={instagram} size={25} />
            </a>
            <a href="https://ke.linkedin.com/company/alxafrica">
              <Icon icon={linkedin} size={25} />
            </a>
          </div>
        </div>
        <div className="row">
        <h3 className="titlee"> Useful Link</h3>
          <div className="Useful-Link ">
            <a href="https://www.alxafrica.com/">How it works</a>
            <a href="https://www.alxafrica.com/privacy-policy/">Privacy policy</a>
            <a href="https://www.alxafrica.com/our-blog/">ALX Blog</a>
          </div>
        </div>
        <div className="row">
          <div className="Contact-Info">
            <h3 className="titlee"> Contact Info</h3>
            <p>Alx-Forum Networks</p>
            <p>support@alxafrica.com</p>
          </div>
        </div>
    </footer>
  );
}
