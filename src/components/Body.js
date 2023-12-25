import ReasturantCard from "./RestaurentCard";
import { data } from "../constant";

//Config Driven UI
const Body = () => {
    return (
      <div className="resturant">
        {data.map((res, index) => {
          return <ReasturantCard {...res.info} key={index} />;
        })}
      </div>
    );
  };

  export default Body