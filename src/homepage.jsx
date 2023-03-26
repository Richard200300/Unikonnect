import React from "react";
import { Link } from "react-router-dom";

function Homepage(props) {
  return (
    <section>
        <Link
          to={`/trend/${props.tadata.cat}/${props.tadata.id}`}
          className="tdn"
        >
          <div className="trend-ads-box">
            <div className="trending-images-container">
              <img
                src={props.tadata.img}
                className="trending-images"
                alt={props.tadata.img}
              />
            </div>

            <div className="name-price-container">
              <p className="produnct-name">{props.tadata.name}</p>
              <p className="price">₦ {props.tadata.price}</p>
            </div>
          </div>
        </Link>
    </section>
  );
}

export default Homepage;
