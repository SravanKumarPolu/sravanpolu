import React from "react";
import { BiPhoneCall } from "react-icons/bi";
import { SiGmail } from "react-icons/si";
import { Link, NavLink } from "react-router-dom";
import bgImg from "../assets/Sravan.jpg";

export default function Footer() {
  return (
    <footer>
      <div className="footer-content">
        <ul className="summary-topic">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <NavLink to="/photos">Photos</NavLink>
          </li>
          <li>
            <NavLink to="/resume">Resume</NavLink>
          </li>
        </ul>
        <span>&#169; 2023 #SRAVANPOLU</span>
        <div className="footer-logo">
          <Link to="/">
            <img src={bgImg} className="footer-img" alt="Logo" />
          </Link>
          <div className="phone-number">
            <BiPhoneCall className="call-icon" />
            <a className="call-number" href="tel:+917973943675" target="_self">
              : +917973943675
            </a>
          </div>
          <div className="mail-footer" style={{ textDecoration: "none" }}>
            <SiGmail className="gmail-icon" />
            <a href="mailto:sravanpolu.me@gmail.com" target="_self">
              :sravanpolu.me@gmail.com
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
