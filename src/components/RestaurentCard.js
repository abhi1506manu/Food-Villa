import { IMG_URL } from "../constant";

const ReasturantCard = ({ name, cloudinaryImageId, cuisines, avgRating }) => {
  return (
    <div className="card">
      <img src={IMG_URL + cloudinaryImageId} alt="burger" />
      <h2>{name}</h2>
      <h3>{cuisines.join(",")}</h3>
      <h4>{avgRating} start</h4>
    </div>
  );
};

export default ReasturantCard;
