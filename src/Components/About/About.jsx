import React from "react";
import "./About.scss";
import Bag from "../../assets/bag.svg";
import Book from "../../assets/book.svg";
import Location from "../../assets/location.svg";

const About = () => {
  return (
    <section className="About container-fluid">
      <div className="container">
        <div className="row justify-content-between align-items-center row-gap-4">
          <div className="col-lg-3">
            <h2 className="head text-uppercase">what we offer</h2>
            <h1 className="title text-capitalize">
              we offer <br /> best services
            </h1>
          </div>
          <div className="col-lg-3 d-flex flex-column gap-2 align-items-center justify-content-center">
            <img src={Bag} alt="" />
            <h2 className="tt">Best Tour Guide</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vitae in
              nullam ante tellus dictumst.
            </p>
          </div>
          <div className="col-lg-3 d-flex flex-column gap-2 align-items-center justify-content-center">
            <img src={Book} alt="" />
            <h2 className="tt">Best Tour Guide</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vitae in
              nullam ante tellus dictumst.
            </p>
          </div>
          <div className="col-lg-3 d-flex flex-column gap-2 align-items-center justify-content-center">
            <img src={Location} alt="" />
            <h2 className="tt">Best Tour Guide</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vitae in
              nullam ante tellus dictumst.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
