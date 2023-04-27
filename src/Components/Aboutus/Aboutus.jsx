import React from "react";
import "./Aboutus.scss";
import AboutImg from "../../assets/aboutus.png";
import CountUp from "react-countup/build/";

const Aboutus = () => {
  return (
    <section className="container-fluid Aboutus">
      <div className="container">
        <div className="row align-items-center justify-content-between row-gap-5">
          <div className="col-lg-6">
            <img src={AboutImg} alt="" />
          </div>
          <div className="col-lg-6">
            <h2 className="head text-uppercase">about us</h2>
            <h1 className="title text-capitalize">
              With Our Experience <br />
              We Serve You Better
            </h1>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nec
              feugiat turpis sollicitudin posuere sem rutrum magna. Nisi,
              convallis nisl sed volutpat dolor, massa.
            </p>
            <div className="number d-flex justify-content-between gap-3 flex-wrap ">
              <h1>
                <CountUp start={0} end={15} duration={3} className="count" />+
                <span className="d-block">Years Experience</span>
              </h1>
              <h1>
                <CountUp start={0} end={320} duration={3} className="count" />+
                <span className="d-block">Succesful Trip</span>
              </h1>
              <h1>
                <CountUp start={0} end={40} duration={3} className="count" />k
                <span className="d-block">Happy Customer</span>
              </h1>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Aboutus;
