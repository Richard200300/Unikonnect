import { useParams } from "react-router-dom";
import { data } from "./trendingad";
import React, { useState, useEffect } from "react";
import { FaUserCircle } from "react-icons/fa";
import { IoNotificationsCircle } from "react-icons/io5";
import { TbPremiumRights } from "react-icons/tb";
import { TbBuildingWarehouse } from "react-icons/tb";
import { RiSaveFill } from "react-icons/ri";
import { FaFacebookSquare } from "react-icons/fa";
import { FaTwitterSquare } from "react-icons/fa";
import { FaWhatsappSquare } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FiPhoneCall } from "react-icons/fi";
import MpCat from "./cat/mp";
import Carcat from "./cat/car";
import Furniture from "./cat/furniture";
import Watches from "./cat/watches";
import Accessories from "./cat/Acsessories";
import Othercat from "./othercat";
import { Link } from "react-router-dom";

function Innertrend() {
  const { id, cat } = useParams();
  const [loading, setLoading] = useState(true);
  const [product, setProduct] = useState({});
  const [category, setCategory] = useState([]);

  let mapcat = category.map((data) => {
    return <Othercat key={data.id} data={data} />;
  });
  console.log(mapcat.data);
  useEffect(() => {
    let categoryFiltered = data.filter(
      (data) => data.cat == cat && data.id != id
    );
    setCategory(categoryFiltered);
    setTimeout(() => {
      setLoading(false);
    }, 1000);
  }, [id]);

  useEffect(() => {
    let tdFiltered = data.filter((data) => data.id == id);
    setProduct(tdFiltered[0]);
    setTimeout(() => {
      setLoading(false);
    }, 1000);
  }, [id]);

  if (loading) {
    return <h1>Loading...</h1>;
  }

  return (
    <>
      <nav className="flex jcSb atc navbar navbar-product">
        <h1
          className="brand-logo"
          onClick={() => {
            // window.location.reload(false);
            window.scrollTo({ top: 0, behavior: "smooth" });
          }}
        >
          <Link to="/" className=" brand-logo">
            Unikonnect
          </Link>
        </h1>
        <input
          type="text"
          placeholder="Type your search here"
          className="product-search"
        />
        <div className="atc flex icon-container">
          <RiSaveFill className="user-account icon-save" />
          <IoNotificationsCircle className="user-account icon-notify" />
          <TbPremiumRights className="user-account icon-premium" />
          <TbBuildingWarehouse className="user-account" />
          <FaUserCircle className="user-account" />
          <button className="sell-btn">SELL</button>
        </div>
      </nav>
      <div id="top"></div>
      <section className="flex product-main-container jcSb">
        <div className="product-first-section">
          <div className="product-img-container">
            <img src={`/${product.img}`} className="product-image image" />
          </div>
          <div className="product-details-container">
            {/* <div className="product-other-image-container">
              <img src={`/${product.img1}`} className="product-img1" />
              <img src={`/${product.img1}`} className="product-img1" />
              <img src={`/${product.img1}`} className="product-img1" />
              <img src={`/${product.img1}`} className="product-img1" />
            </div> */}
            <div className="flex jcSb atc">
              <h1 className="product-name">{product.name}</h1>
              <div className="flex atc">
                <RiSaveFill className="save-product-icon" />
                <p>34</p>
              </div>
            </div>
            <div className="flex jcSb prodcut-location-container">
              <div className="flex prodcut-location-details">
                <p>Promoted</p>
                <p>Posted 43, min ago</p>
                <p>Futa, Akure</p>
              </div>

              <div>
                <p>523 views</p>
              </div>
            </div>
            {console.log(product.cat)}
            {product.cat === "mobile" ? (
              <MpCat />
            ) : product.cat === "car" ? (
              <Carcat />
            ) : product.cat === "watches" ? (
              <Watches />
            ) : product.cat === "Accessories" ? (
              <Accessories />
            ) : product.cat === "furniture" ? (
              <Furniture />
            ) : (
              "not a phone or a car"
            )}
            <div className="product-description">
              <p>
                Clean iPhone X with big storage and going super cheap only at
                divinephones our store is located at shop A25 new BANEX plaza
                wuse Abuja ask of divinephones when you get to our shop
              </p>
            </div>
            <div className="product-show-contact">
              <div className="rcb fill show-contact atc flex">
                <FiPhoneCall className="sc-icon" />
                Show Contact
              </div>
            </div>

            <div className="product-icon-container">
              <FaFacebookSquare className="product-contact-icon" />
              <FaTwitterSquare className="product-contact-icon" />
              <FaWhatsappSquare className="product-contact-icon" />
              <FaLinkedin className="product-contact-icon" />
            </div>
          </div>
        </div>
        <div className="product-second-section">
          <div className="product-section-cont">
            <div>
              <div className="product-second-section-box">
                <div>
                  <h1 className="product-price">₦ {product.price}</h1>
                  <div className="market-price">
                    Market price: ₦ 140k ~ 146.64k{" "}
                  </div>
                  <button className="rcb">Request call back</button>
                </div>
              </div>
              <div className="product-second-section-box">
                <div>
                  <div className="flex product-seller-container atc">
                    <FaUserCircle className="product-seller-icon" />
                    <p className="product-seller-name">{product.userName}</p>
                  </div>
                  <button className="rcb fill">Show Contact</button>
                </div>
              </div>
            </div>


            <div>
            <div className="product-second-section-box ">
              <div className="safety-tips-container">
                <p className="safety-tips-text tac">Safety tips</p>
                <ul className="safety-list">
                  <li> Don't pay in advance, including for delivery</li>
                  <li>Meet the seller at a safe public place</li>
                  <li>
                    Inspect the item and ensure it's exactly what you want
                  </li>
                  <li>
                    On delivery, check that the item delivered is what was
                    expected
                  </li>
                  <li>Only pay when you 're satisfied</li>
                </ul>
              </div>
            </div>
            <div className="product-second-section-box">
              <div>
                <button>Mark unavailabe</button>

                <button>Report Abuse</button>
              </div>
            </div>

            <div className="product-second-section-box">
              <div>
                <button>Post Ad Like This</button>
              </div>
            </div>
          </div>

          </div>

        </div>
      </section>

      <section className="flex similar-main-container jcSb">
        <div className="product-first-section">
          <div className="similar-ads-container">
            <h2 className="similar-ad-text">Similar adverts</h2>
            <div className="other-ads-container">{mapcat}</div>
          </div>
        </div>
        <div className="product-second-section"></div>
      </section>
    </>
  );
}

export default Innertrend;
