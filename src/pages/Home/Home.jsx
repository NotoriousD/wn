import React from "react";
import brands from "./brands";
import Contact from "./Contact";
import Carousel from "./Slider";
import ourTeamBg from "../../assets/team-bg.png";
import { NavLink } from "react-router-dom";
import "./Home.scss";

const steps = [
  {
    id: 1,
    title: "Join",
    text: "Join WinningPartner Network today and start earning today.",
  },
  {
    id: 2,
    title: "Promote",
    text: "Get immediate access to a range of marketing materials.",
  },
  {
    id: 3,
    title: "Earn",
    text: "Watch your traffic turn into cash. No negative carryovers.",
  },
];

const benefits = [
  {
    text: "100 or more",
    procent: 50,
  },
  {
    text: "71 - 100",
    procent: 40,
  },
  {
    text: "36 - 70",
    procent: 35,
  },
  {
    text: "1 - 35",
    procent: 25,
  },
  {
    text: "0",
    procent: 10,
  },
];

const Home = () => {
  return (
    <div className="home-content">
      <Carousel />
      <div id="steps">
        <div className="innerWrap">
          <div className="step__list">
            {steps.map(({ id, title, text }) => (
              <section key={id} className="step__item">
                <span className="num">{id}</span>
                <h3>{title}</h3>
                <p>{text}</p>
              </section>
            ))}
          </div>
        </div>
      </div>

      <div id="benefits" className="content">
        <div className="innerWrap">
          <h2 className="block__title">Commission Structure</h2>
          <div className="benefits__row">
            <div className="benefits__description">
              <p>
                Supercharge your revenue with our generous commission structure;
                more players, more cash in your wallet.
              </p>
              <ul className="mainList">
                <li>Up to 50% Revenue Share</li>
                <li>Fair Commission Structure</li>
                <li>Start Earning Today</li>
              </ul>
            </div>
            <div className="benefits__table" id="conversionTable">
              <div className="data-title">
                <h4>Conversion Level</h4>
                <h4>Payout</h4>
              </div>
              {benefits.map(({ text, procent }) => (
                <div key={procent} className="dataRow">
                  <span>{text}</span>
                  <span>{procent}%</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div id="brands">
        <div className="innerWrap">
          <h2 className="block__title">Our Brands</h2>

          <div className="brands__list">
            {brands.map(({ id, url, className, path_img }) => (
              <a
                key={id}
                href={url ? url : "#"}
                target="_blank"
                rel="noopener noreferrer"
                className={`brand ${className}`}
              >
                <img src={path_img} alt={url} />
              </a>
            ))}
          </div>
        </div>
      </div>

      <div id="about" className="content">
        <div className="innerWrap">
          <h2 className="block__title">About Us</h2>
          <p>
            Design, content and service; three values that keep WinningPartner
            Media awake at night. Who are WinningPartner Media? Well, we’re a
            team of iGaming marketing specialists based in St Albans. Not
            content with releasing several successful bingo brands (Circus
            Bingo, Clover Bingo), we had to go and build our own affiliate
            platform.
          </p>
          <p>
            We want the best experience for our players and our partners; that’s
            why we pour passion into everything we do. If the{" "}
            <strong>DESIGN</strong> is not exceptional, if the{" "}
            <strong>CONTENT</strong> isn’t spectacular and if the
            <strong>SERVICE</strong> isn’t world className; then we scrunch it
            up, toss it in the bin and start all over. Only the best will do,
            and we mean it.
          </p>
        </div>
      </div>

      <div
        id="our-team"
        style={{ backgroundImage: `url(${ourTeamBg})` }}
        className="our-team"
      >
        <div className="innerWrap">
          <h2 className="block__title">Meet our team</h2>
          <NavLink to="/profiles">View profiles</NavLink>
        </div>
      </div>

      <Contact />
    </div>
  );
};

export default Home;
