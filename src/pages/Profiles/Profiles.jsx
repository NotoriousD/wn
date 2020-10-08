import React from "react";
import Profile1 from "../../assets/anastasia.png";
import Profile2 from "../../assets/galyna.png";

const Profiles = () => (
  <section className="profiles">
    <div className="innerWrap">
      <h1 className="block__title">Meet our team</h1>
      <div className="profiles__list">
        <div className="profile">
          <img src={Profile1} alt="Anastasia" />
          <div className="profile__descr">
            <span className="profile__title">Anastasia</span>
            <span className="profile__position">Affiliate Manager</span>
            <span className="profile__text">affiliates@winningpartner.com</span>
          </div>
        </div>
        <div className="profile">
          <img src={Profile2} alt="Galyna" />
          <div className="profile__descr">
            <span className="profile__title">Galyna</span>
            <span className="profile__position">Affiliate Manager</span>
            <span className="profile__text">affiliates@winningpartner.com</span>
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default Profiles;
