import React from "react";
import { NavLink } from "react-router-dom";

const Footer = () => {
  return (
    <footer>
      <div className="innerWrap">
        <div className="footer__row">
          <span className="footer__brand">WinningPartner Network</span>
          <div className="footer__link">
            <NavLink to="/terms" activeClassName="footer-link-active">
              Terms and Conditions
            </NavLink>
          </div>
          <div className="footer__address">
            <span>London, United Kingdom</span>
            <span>
              &copy; Copyright 2020 WinningPartner Network, all rights reserved
            </span>
          </div>
          <a
            href="mailto:support@winningpartnernetwork.com"
            title="Send us an email"
            className="footer__email"
          >
            affiliates@winningpartner.com
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
