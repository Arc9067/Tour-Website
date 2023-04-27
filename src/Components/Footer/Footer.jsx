import React from "react";
import { MdHeartBroken, MdOutlineWifiTethering } from "react-icons/md";
import "./Footer.scss";

const Footer = () => {
  return (
    <footer className="footer container-fluid">
      <div className="container">
        <div className="row justify-content-between row-gap-4">
          <div className="col-lg-2">
            <h2 className="head">Top Desitination</h2>
            <ul className="p-0 d-flex flex-column gap-2">
              <li>Turkey</li>
              <li>Indonoisa</li>
              <li>Italy</li>
              <li>England</li>
            </ul>
          </div>
          <div className="col-lg-2">
            <h2 className="head">Quicklinks</h2>
            <ul className="p-0 d-flex flex-column gap-2">
              <li>Discover</li>
              <li>Services</li>
              <li>About Us</li>
              <li>Contact</li>
            </ul>
          </div>
          <div className="col-lg-2">
            <h2 className="head">Support</h2>
            <ul className="p-0 d-flex flex-column gap-2">
              <li>FAQ</li>
              <li>Help & Support</li>
              <li>Blog</li>
              <li>News</li>
            </ul>
          </div>
          <div className="col-lg-4 d-flex flex-column gap-2">
            <h2 className="head">Get a newsletter</h2>
            <p>
              For the latest deals and tips, travel no further than your inbox
            </p>
            <div className="input-div p-2 d-flex align-items-center justify-content-between flex-wrap gap-3">
              <input
                type="email"
                name=""
                id=""
                maxLength={25}
                placeholder="email address"
              />
              <button className="text-capitalize">subscribe</button>
            </div>
            <div className="d-flex icon flex-wrap gap-2 align-items-center mt-4">
              <i class="bi bi-facebook"></i>
              <i class="bi bi-twitter"></i>
              <i class="bi bi-instagram"></i>
            </div>
          </div>
        </div>
        <p className="text-center copy mt-5">
          Developed By Arc@9067 with <i class="bi bi-heart-fill"></i>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
