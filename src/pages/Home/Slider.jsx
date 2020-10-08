import React from "react";
import Slider from "react-slick";
import slide1 from "../../assets/m11.png";
import slide2 from "../../assets/m22.png";
import slide3 from "../../assets/m33.png";
import sliderBg from "../../assets/monitor.png";
import SliderPrev from "./SliderPrev";
import SliderNext from "./SliderNext";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChartBar,
  faChartLine,
  faDice,
  faHandHoldingUsd,
  faClipboard,
  faChartArea,
  faImages,
  faHandshake,
  faBolt,
} from "@fortawesome/free-solid-svg-icons";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const settings = {
  slidesToShow: 1,
  slidesToScroll: 1,
  dots: true,
  infinite: true,
  speed: 1500,
  fade: true,
  autoplay: true,
  autoplaySpeed: 2000,
  nextArrow: <SliderNext />,
  prevArrow: <SliderPrev />,
};

const Carousel = () => {
  return (
    <div id="features">
      <div className="features__container">
        <img className="features__monitor" src={sliderBg} alt="Monitor bg" />
        <Slider className="features__slider" {...settings}>
          <div className="item">
            <div className="slider__descr">
              <h2>Earn Massive Revenue</h2>
              <p>
                Join the most rewarding affiliate program today and turn your
                traffic into cash.
              </p>
              <ul className="mainList">
                <li>
                  <span className="icon">
                    <FontAwesomeIcon icon={faChartBar} />
                  </span>
                  Earn Up To 50% Revenue Share
                </li>
                <li>
                  <span className="icon">
                    <FontAwesomeIcon icon={faDice} />
                  </span>
                  Popular Casino Brands
                </li>
                <li>
                  <span className="icon">
                    <FontAwesomeIcon icon={faChartLine} />
                  </span>
                  High Conversion Rates
                </li>
              </ul>
            </div>
            <div className="slider__image">
              <img className="lazy" src={slide1} alt="Featured image 1" />
            </div>
          </div>

          <div className="item">
            <div className="slider__descr">
              <h2>Promote Today</h2>
              <p>
                Who wants to wait for lengthy approval processes? Sign up in
                seconds and start earning now.
              </p>
              <ul className="mainList">
                <li>
                  <span className="icon">
                    <FontAwesomeIcon icon={faHandHoldingUsd} />
                  </span>
                  Fast Payouts
                </li>
                <li>
                  <span className="icon">
                    <FontAwesomeIcon icon={faBolt} />
                  </span>
                  High end Industry Driven Brands
                </li>
                <li>
                  <span className="icon">
                    <FontAwesomeIcon icon={faHandshake} />
                  </span>
                  No Fuss
                </li>
              </ul>
            </div>
            <div className="slider__image">
              <img className="lazy" src={slide2} alt="Featured image 2" />
            </div>
          </div>

          <div className="item">
            <div className="slider__descr">
              <h2>Powerful Tools</h2>
              <p>
                Visualise your earnings in a brand new way with our custom built
                affiliate platform. Designed for your convenience.
              </p>
              <ul className="mainList">
                <li>
                  <span className="icon">
                    <FontAwesomeIcon icon={faImages} />
                  </span>
                  High Converting Creatives
                </li>
                <li>
                  <span className="icon">
                    <FontAwesomeIcon icon={faClipboard} />
                  </span>
                  Cutting Edge Reporting
                </li>
                <li>
                  <span className="icon">
                    <FontAwesomeIcon icon={faChartArea} />
                  </span>
                  Instant Analytics Across Multiple Cost Metrics
                </li>
              </ul>
            </div>
            <div className="slider__image">
              <img className="lazy" src={slide3} alt="Featured image 3" />
            </div>
          </div>
        </Slider>
      </div>
    </div>
  );
};

export default Carousel;
