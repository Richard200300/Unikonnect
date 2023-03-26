import React from "react";
import { RiSaveFill } from "react-icons/ri";
import { IoNotificationsCircle } from "react-icons/io5";
import { TbPremiumRights } from "react-icons/tb";
import { TbBuildingWarehouse } from "react-icons/tb";
import { FaUserCircle } from "react-icons/fa";
import * as Yup from "yup";
import { useFormik } from "formik";
import Sell1 from "./sell1"
import Form2 from "./form2"
import {data} from "../trendingad"

const [selected, setSelected] = React.useState({
  cat: '',
  uni: ''
})

function Sell() {
  const [page, setPage] = React.useState(0);
  const formTitles = ["Post ad", "Inner Section"];

  const PageDisplay = () => {
    if(page == 0) {
      
      return <Sell1 
      // selected={selected}
      // setSelected={setSelected}
      oc={formik.handleChange}
       img={formik.values.img}
       />
    } else {
      return <Form2/>
    }
  }

  const formik = useFormik({
    initialValues: {
      cat: "",
      university: "",
      img: "",
    },
    //validate form
    validationSchema: Yup.object({
      cat: Yup.string().required("Name is required"),
      img: Yup.string().required("Name is required"),
      university: Yup.string().required("Name is required"),
    }),
    //submit form
    onSubmit: (values) => {
      data.push(values)
      console.log(data)
    },
  });
  return (
    <div >
      {/* <nav className="flex jcSb atc navbar">
        <h1 className="brand-logo">Unikonnect</h1>
        <div className="atc flex icon-container">
          <RiSaveFill className="user-account icon-save" />
          <IoNotificationsCircle className="user-account icon-notify" />
          <TbPremiumRights className="user-account icon-premium" />
          <TbBuildingWarehouse className="user-account" />
          <FaUserCircle className="user-account" />
          <button className="sell-btn">SELL </button>
        </div>
      </nav> */}
      <section className="sell-main-container ">
        <div className="post-ad-container">
          <div >
            <h2 className="post-ad-text">{formTitles[page]}</h2>

            

<form onSubmit={formik.handleSubmit}>

<div>{PageDisplay()}</div>



          {page === 0 ? '':<button
              disabled={page == 0}
              onClick={() => {
                setPage((curpage) => curpage - 1);
              }} 
            >
              Prev
            </button> }


            {page === 1 ? '' :<button
            type="submit"
          
              // disabled={!formik.values.cat&& !formik.values.img && !formik.values.university ? page == formTitles.length -2 : page == formTitles.length -1}
              onClick={() => {
                setPage((curpage) => curpage + 1);
              }}
              className="sell-next-btn"
            >
              Next
            </button>}
            {page === 0 ? '':<button type="submit">Next</button>}
            </form>
           
          </div>
        </div>
      </section>
    </div>
  );
}

export default Sell;
