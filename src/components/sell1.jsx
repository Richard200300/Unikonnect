import React from "react";
import { unidata } from "../data/universitydata";
import { IoIosArrowDown } from "react-icons/io";
function sell1() {
  const [togc, setTogc] = React.useState(false);
  const [tog1, setTog1] = React.useState(false);
  const [searchQuery, setSearchQuery] = React.useState('');
  const [searchQuery1, setSearchQuery1] = React.useState('');

  const [options, setOptions] = React.useState(["Vechile", "watch", "radio"]);

  function togglecat() {
    setTogc((prevtog) => !prevtog);
  }

  function handleSearch(event) {
    setSearchQuery(event.target.value);
  }
  function handleSearch1(event) {
    setSearchQuery1(event.target.value);
  }
  const filterItems = options.filter((item) =>
    item.toLowerCase().includes(searchQuery.toLowerCase())
  );



  const filterItems1 = unidata.filter((item) =>
  item.name.toLowerCase().includes(searchQuery1.toLowerCase())
);
  
  const [selected, setSelected] = React.useState(false);
  const [isActive, setIsActive] = React.useState(false);
  function actfun() {
    setIsActive((prevactive) => !prevactive);
  }

  return (
    <div>
      <div>
        <div>
          <section className="flex ad-flex">
            <section className="choose-main-cont">
              <section className="select-btn" onClick={actfun}>
                <div className="flex choose-cat atc">
                  <p>{selected ? selected : "choose category"}</p>
                  <IoIosArrowDown
                    className={isActive ? "arrow-down" : "arrow-downactive"}
                  />
                </div>
              </section>
              {isActive && (
                <section className="choosecat-second">
                  <input
                    type="text"
                    placeholder="Search"
                    className="search-cat"
                    onChange={handleSearch} 
                    value={searchQuery}
                  />
                  <ul className="choosecat-menucont">
                    {filterItems.map((option, index) => {
                      return (
                        <li
                          key={index}
                          onClick={() => {
                            setSelected(option);
                            setIsActive(false);
                          }}
                        >
                          {option}
                        </li>
                      );
                    })}
                  </ul>
                </section>
              )}
            </section>
            <section className="choose-main-cont">
              <section className="select-btn" onClick={togglecat}>
                <div className="flex choose-cat atc">
                  <p>{tog1 ? tog1 : "Select Uni Location"}</p>
                  <IoIosArrowDown
                    className={togc ? "arrow-down" : "arrow-downactive"}
                  />
                </div>
              </section>
              {togc && (
                <section className="choosecat-second">
                  <input
                    type="text"
                    placeholder="Search"
                    className="search-cat"
                    onChange={handleSearch1} 
                    value={searchQuery1}
                  />
                  <ul className="choosecat-menucont">
                    {filterItems1.map((data) => {
                      return (
                        <li
                          key={data.id}
                          onClick={() => {
                            setTog1(data.name);
                            setTogc(false);
                          }}
                          className=" unioptqqe9ions pointer"
                        >
                          {data.name}
                        </li>
                      );
                    })}
                  </ul>
                </section>
              )}
            </section>
            <section></section>
          </section>
         
        </div>
      </div>
      {/* <input  type="file" name="img"
            value={props.img}
            onChange={props.oc}/> */}
    </div>
  );
}

export default sell1;
