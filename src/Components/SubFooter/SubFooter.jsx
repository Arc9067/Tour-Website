import React from "react";
import "./SubFooter.scss";

const SubFooter = () => {
  return (
    <section className="container-fluid Sub">
      <div className="container">
        <div className="row d-flex flex-column gap-2 justify-content-center align-items-start px-3">
          <h1 className="title">
            Don’t Miss The 50% Discount & Explore The Beauty of the World
          </h1>
          <button className="text-capitalize">explore now</button>
        </div>
      </div>
    </section>
  );
};

export default SubFooter;
