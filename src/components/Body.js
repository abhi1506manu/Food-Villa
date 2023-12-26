import ReasturantCard from "./RestaurentCard";
import { data } from "../constant";
import { useState, useEffect } from "react";
import Shimer from "./Shimer";

//Config Driven UI
const Body = () => {
  const [searchText, setSearchText] = useState("");
  const [restaurentData, setRestaurnetData] = useState([]);
  const [filterResData, setFilterResData] = useState([]);

  function filterData(text, restaurent) {
    const resData = restaurent.filter((res) => res.info.name.includes(text));
    console.log(resData);
    setFilterResData(resData);
  }
  useEffect(() => {
    console.log("This will render later")
    fetchData();
  }, []);

  async function fetchData() {
    try {
      const response = await fetch(
        "https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9351929&lng=77.624480699999999&page_type=DESKTOP_WEB_LISTING"
      );

      const res = await response.json();
      // console.log(
      //   res.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle?.restaurants
      // );
      const dataList =
        res.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle
          ?.restaurants;
      setRestaurnetData(dataList);
      setFilterResData(dataList);
    } catch (error) {
      console.log(error);
    }
  }

  console.log("this will render first")
  return (
    <>
      <div className="search-container">
        <input
          type="text"
          placeholder="search here"
          value={searchText}
          onChange={(e) => setSearchText(e.target.value)}
        />
        <button onClick={() => filterData(searchText, restaurentData)}>
          {" "}
          submit
        </button>
      </div>
      {filterResData && filterResData.length > 0 ? (
        <div className="resturant">
          {filterResData?.map((res, index) => {
            return <ReasturantCard {...res.info} key={index} />;
          })}
        </div>
      ) : (
        <Shimer />
      )}
    </>
  );
};

export default Body;
