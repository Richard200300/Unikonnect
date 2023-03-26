import React from "react";
import Homepage from "./homepage";
import { data } from "./trendingad";
// import Category from "./category";
// import { data as cartdata } from "./catdata";
import { FaUserCircle } from "react-icons/fa";
import { IoNotificationsCircle } from "react-icons/io5";
import { TbPremiumRights } from "react-icons/tb";
import { TbBuildingWarehouse } from "react-icons/tb";
import { RiSaveFill } from "react-icons/ri";
import { AiFillHome } from "react-icons/ai";
import { AiOutlinePlusSquare } from "react-icons/ai";
import { Link } from "react-router-dom";

function Head() {
  const dataElement = data.map((data, index) => {
    return <Homepage key={index} tadata={data} />;
  });
  return (
    <div>
      <section>
        <nav className="flex jcSb atc navbar">
          <h1 className="brand-logo">
            Unikonnect</h1>
          <div className="atc flex icon-container">
            <RiSaveFill className="user-account icon-save" />
            <IoNotificationsCircle className="user-account icon-notify" />
            <TbPremiumRights className="user-account icon-premium" />
            <TbBuildingWarehouse className="user-account" />
            <FaUserCircle className="user-account" />
            <button className="sell-btn"><Link to="/sell" className="sell-link">SELL</Link></button>
          </div>
        </nav>
        <section className="dashboard-container">
          <div className="dashboard-inner-container">
            <p className="dashbaord-text">Find anything in FUTA</p>
            <input
              type="text"
              placeholder="I am looking for...."
              className="dashboard-search"
            />
          </div>
        </section>
        <section className="ad-container">
          {/* {cartdata.map((data, index) => {
            return <Category key={index} data={data} />;
          })} */}
        </section>
        <section className="second-section flex jcSb ">
          <div className="category-section-container">
            <h3 className="trending-ads-text fixed">Trending ads</h3>

            <ul className="category-section">
              <li>Vechiles</li>
              <li>Property</li>
              <li>Mobile Phones & Tablets</li>
              <li>Electronics</li>
              <li>Home, Funiture & Appliances</li>
              <li>Health & Beauty</li>
              <li>Fashion</li>
              <li>Sports, Arts & Outdoors</li>
              <li>Seeking Work CVs</li>
              <li>Services</li>
              <li>Jobs</li>
              <li>Babies & Kids</li>
              <li>Animal & Pets</li>
              <li>Agriculture & Food</li>
              <li>Commercial Equipments & Tools</li>
              <li>Repair & Construction</li>
            </ul>
          </div>

          <div className="trending-section">
            <h3 className="trending-ads-text">Trending ads</h3>
            <div className="trending-ads-container"> {dataElement}</div>
          </div>
        </section>
      </section>
      <div className="flex footer-icon-container">
        <div>
          <AiFillHome className="footer-icon" />
          Home
        </div>
        <div>
          <RiSaveFill className="footer-icon" />
          Saved
        </div>
        <div>
          <AiOutlinePlusSquare className="footer-icon" />
          Sell
        </div>
        <div>
          <IoNotificationsCircle className="footer-icon" />
          Notifications
        </div>
        <div>
          <FaUserCircle className="footer-icon" />
          Profile
        </div>
      </div>
    </div>
  );
}

export default Head;
