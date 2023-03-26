import React from "react"

function Category(props) {
    return (
      

          <div>
            <div className="post-adimg-container">
              <img src={props.data.img} className="post-adimg" />
            </div>
            <p>{props.data.name}</p>
          </div>

      

    )
}

export default Category;