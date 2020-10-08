import React from "react";
import { NavLink } from "react-router-dom";
import { ReactComponent as CalendarIcon } from "../../assets/calendar.svg";
import { ReactComponent as ChartIcon } from "../../assets/line-chart.svg";
import { ReactComponent as LinkIcon } from "../../assets/link.svg";
import { ReactComponent as StatsIcon } from "../../assets/stats.svg";
import { ReactComponent as FlashIcon } from "../../assets/flash.svg";
import { ReactComponent as PictureIcon } from "../../assets/picture.svg";

const Navbar = () => {
  const handleClick = (e) => {
    const toggleLink = document.querySelectorAll(".toggle-menu");
    toggleLink.forEach((item) => {
      if (item.classList.contains("active-toggle")) {
        item.classList.remove("active-toggle");
      }
    });
    e.target.parentNode.classList.toggle("active-toggle");
  };
  return (
    <div className="menu-container">
      <nav className="main-navbar">
        <ul className="main-menu">
          {/* <span className="menu-tab__title">Performance</span> */}
          <li className="toggle-menu" onClick={handleClick}>
            <span className="menu-item__title">Dashboard</span>
            <NavLink
              exact={true}
              activeClassName="is-active"
              className="nav-link"
              to="/admin/overview"
            >
              <ChartIcon /> Overview
            </NavLink>
          </li>
          <li className="toggle-menu" onClick={handleClick}>
            <span className="menu-item__title">Reports</span>
            <NavLink
              activeClassName="is-active"
              className="nav-link"
              to="/admin/dynamic_variable"
            >
              <StatsIcon /> DynamicVariables
            </NavLink>
            <NavLink
              activeClassName="is-active"
              className="nav-link"
              to="/admin/daily"
            >
              <CalendarIcon /> Daily
            </NavLink>
            <NavLink
              activeClassName="is-active"
              className="nav-link"
              to="/admin/monthly"
            >
              <CalendarIcon /> Monthly
            </NavLink>
            <NavLink
              activeClassName="is-active"
              className="nav-link"
              to="/admin/casinos"
            >
              <CalendarIcon /> Casinos
            </NavLink>
            <NavLink
              activeClassName="is-active"
              className="nav-link"
              to="/admin/casinos_daily"
            >
              <CalendarIcon /> Casinos Daily
            </NavLink>
          </li>
          <span className="menu-item__title">Manage</span>
          <li>
            <NavLink
              activeClassName="is-active"
              className="nav-link"
              to="/admin/compaigns"
            >
              <LinkIcon /> Links
            </NavLink>
            <NavLink
              activeClassName="is-active"
              className="nav-link"
              to="/admin/assets"
            >
              <PictureIcon /> Assets
            </NavLink>
            <NavLink
              activeClassName="is-active"
              className="nav-link"
              to="/admin/reports"
            >
              <FlashIcon /> API Reports
            </NavLink>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;
