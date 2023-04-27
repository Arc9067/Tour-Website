import React from "react";
import HeroImage from "../../assets/hero-img.png";
import World from "../../assets/world-icon.png";
import Plane from "../../assets/plane.png";
import { MdArrowDownward } from "react-icons/md";
import "./Hero.scss";

const Hero = () => {
  return (
    <section className="hero container-fluid">
      <div className="container">
        <div className="row justif-content-between align-items-center row-gap-5">
          <article className="col-lg-6 text-div">
            <img src={Plane} alt="plane Image" className="plane" />
            <h1 className="title text-uppercase">
              never stop <span>exploring</span> the world
              <img src={World} alt="" />
            </h1>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla
              fringilla adipiscing lobortis id. Neque nisi, orci ante risus
              tortor pellentesque dolor.
            </p>

            <div className="inner d-flex justify-conetnt-between align-items-center flex-wrap gap-4 flex-wrap">
              <div>
                <h2 className="head">
                  Location
                  <MdArrowDownward
                    color="#cd0118"
                    style={{ cursor: "pointer" }}
                  />
                </h2>
                <span className="d-block">Italian</span>
              </div>
              <div>
                <h2 className="head">
                  date
                  <MdArrowDownward
                    color="#cd0118"
                    style={{ cursor: "pointer" }}
                  />
                </h2>
                <span className="d-block">Tue, 3 Nov</span>
              </div>
              <div>
                <h2 className="head">
                  Avarage Price
                  <MdArrowDownward
                    color="#cd0118"
                    style={{ cursor: "pointer" }}
                  />
                </h2>
                <span className="d-block">$400 - $600</span>
              </div>

              <button className="button">Explore Now</button>
            </div>
          </article>
          <artcile className="col-lg-6">
            <img src={HeroImage} alt="" />
          </artcile>
        </div>
      </div>
    </section>
  );
};

export default Hero;
