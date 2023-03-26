import React from "react";
import { Link } from "react-router-dom";

function Othercat(props) {
  return (
    <section onClick={()=> {
      // window.location.reload(false);
      window.scrollTo({top:0,behavior:'smooth'})
    }}>  
     <Link to={`/trend/${props.data.cat}/${props.data.id}`} className='tdn'>
            <div className="other-ads-box">
              <div className="trending-images-container">
                <img src={`/${props.data.img}`} className="trending-images" alt={props.data.img}/>
              </div>

              <div className="name-price-container">
                <p className="produnct-name">{props.data.name}</p>
                <p className="price">₦ {props.data.price}</p>
              </div>
            </div>
            </Link>
    </section>
  );
}

export default Othercat;
