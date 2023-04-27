import React from "react";
import bg1 from "../../assets/bg1.png";
import bg2 from "../../assets/bg2.png";
import bg3 from "../../assets/bg3.png";
import "./Product.scss";

const Product = () => {
  return (
    <section className="Product container-fluid">
      <div className="container">
        <h2 className="head">POPULAR DESTINATION</h2>
        <h1 className="title">
          Explore Popular <br /> Destination
        </h1>

        <div className="row mt-5 justify-content-between row-gap-4">
          <div className="col-lg-4 cd  col-md-4 d-flex flex-column ">
            <div className="img-div">
              <img src={bg1} alt="" />
              <button className="btn">$200</button>
            </div>
            <h2 className="mt-4">Great Wall Of China</h2>
            <p>Beijing, China</p>

            <div className="review d-flex align-items-center">
              <span className="d-flex gap-2">
                <i class="bi bi-star-fill"></i>4.5k
              </span>
              <span>2.2k Reviews</span>
            </div>
          </div>
          <div className="col-lg-4 cd col-md-4 ">
            <div className="img-div">
              <img src={bg2} alt="" />
              <button className="btn">$400</button>
            </div>
            <h2 className="mt-4">Louvre Museum </h2>
            <p>Paris, Île-de-France, Franceosia</p>
            <div className="review d-flex align-items-center">
              <span className="d-flex gap-2">
                <i class="bi bi-star-fill"></i>4.5k
              </span>
              <span>2.2k Reviews</span>
            </div>
          </div>
          <div className="col-lg-4 cd  col-md-4">
            <div className="img-div">
              <img src={bg3} alt="" />
              <button className="btn">$540</button>
            </div>
            <h2 className="mt-4">Safdarjung Tomb</h2>
            <p>Beijing, China</p>
            <div className="review d-flex align-items-center">
              <span className="d-flex gap-2">
                <i class="bi bi-star-fill"></i>4.5k
              </span>
              <span>2.2k Reviews</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Product;
