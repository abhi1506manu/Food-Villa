import React from "react";
import ReactDOM from "react-dom/client";

const title = (
  <img
    src="https://i.pinimg.com/474x/e6/17/f1/e617f1bfb9af4d9cf132cd3dec0da072.jpg"
    alt="food villa"
    className="logo"
  />
);

const Header = () => {
  return (
    <div className="container">
      {title}
      <div className="nav-item">
        <ul>
          <li>Home</li>
          <li>About</li>
          <li>Contact</li>
          <li>Cart</li>
        </ul>
      </div>
    </div>
  );
};

//Config Drive Ui
const data = [
  {
    info: {
      id: "69568",
      name: "KFC",
      cloudinaryImageId: "f01666ac73626461d7455d9c24005cd4",
      locality: "Kachari Basti Road",
      areaName: "Ulubari",
      costForTwo: "₹400 for two",
      cuisines: ["Burgers", "Biryani", "American", "Snacks", "Fast Food"],
      avgRating: 4.3,
      parentId: "547",
      avgRatingString: "4.3",
      totalRatingsString: "10K+",
      sla: {
        deliveryTime: 23,
        lastMileTravel: 1.7,
        serviceability: "SERVICEABLE",
        slaString: "23 mins",
        lastMileTravelString: "1.7 km",
        iconType: "ICON_TYPE_EMPTY",
      },
      availability: {
        nextCloseTime: "2023-12-25 02:00:00",
        opened: true,
      },
      badges: {},
      isOpen: true,
      type: "F",
      badgesV2: {
        entityBadges: {
          imageBased: {},
          textBased: {},
          textExtendedBadges: {},
        },
      },
      aggregatedDiscountInfoV3: {
        header: "40% OFF",
        subHeader: "UPTO ₹80",
      },
      orderabilityCommunication: {
        title: {},
        subTitle: {},
        message: {},
        customIcon: {},
      },
      differentiatedUi: {
        displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        differentiatedUiMediaDetails: {
          mediaType: "ADS_MEDIA_ENUM_IMAGE",
          lottie: {},
          video: {},
        },
      },
      reviewsSummary: {},
      displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      restaurantOfferPresentationInfo: {},
    },
    analytics: {
      context: "seo-data-4c4b8f50-451b-4fff-ae43-f4872a0a62f7",
    },
    cta: {
      link: "https://www.swiggy.com/restaurants/kfc-kachari-basti-road-ulubari-guwahati-69568",
      text: "RESTAURANT_MENU",
      type: "WEBLINK",
    },
    widgetId: "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo",
  },
  {
    info: {
      id: "513070",
      name: "Burger King",
      cloudinaryImageId: "e33e1d3ba7d6b2bb0d45e1001b731fcf",
      locality: "Paltan Bazaar",
      areaName: "Ulubari",
      costForTwo: "₹350 for two",
      cuisines: ["Burgers", "American"],
      avgRating: 4.3,
      parentId: "166",
      avgRatingString: "4.3",
      totalRatingsString: "10K+",
      sla: {
        deliveryTime: 25,
        lastMileTravel: 2.3,
        serviceability: "SERVICEABLE",
        slaString: "25 mins",
        lastMileTravelString: "2.3 km",
        iconType: "ICON_TYPE_EMPTY",
      },
      availability: {
        nextCloseTime: "2023-12-25 04:00:00",
        opened: true,
      },
      badges: {},
      isOpen: true,
      type: "F",
      badgesV2: {
        entityBadges: {
          imageBased: {},
          textBased: {},
          textExtendedBadges: {},
        },
      },
      aggregatedDiscountInfoV3: {
        header: "60% OFF",
        subHeader: "UPTO ₹120",
      },
      orderabilityCommunication: {
        title: {},
        subTitle: {},
        message: {},
        customIcon: {},
      },
      differentiatedUi: {
        displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        differentiatedUiMediaDetails: {
          mediaType: "ADS_MEDIA_ENUM_IMAGE",
          lottie: {},
          video: {},
        },
      },
      reviewsSummary: {},
      displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      restaurantOfferPresentationInfo: {},
    },
    analytics: {
      context: "seo-data-4c4b8f50-451b-4fff-ae43-f4872a0a62f7",
    },
    cta: {
      link: "https://www.swiggy.com/restaurants/burger-king-paltan-bazaar-ulubari-guwahati-513070",
      text: "RESTAURANT_MENU",
      type: "WEBLINK",
    },
    widgetId: "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo",
  },
  {
    info: {
      id: "651213",
      name: "McDonald's",
      cloudinaryImageId: "6dc3ed2ca21d71acff7c2a51dfe4c720",
      locality: "Beltola",
      areaName: "Ganeshguri",
      costForTwo: "₹400 for two",
      cuisines: ["American", "Fast Food"],
      avgRating: 4.4,
      parentId: "630",
      avgRatingString: "4.4",
      totalRatingsString: "5K+",
      sla: {
        deliveryTime: 27,
        lastMileTravel: 3.8,
        serviceability: "SERVICEABLE",
        slaString: "27 mins",
        lastMileTravelString: "3.8 km",
        iconType: "ICON_TYPE_EMPTY",
      },
      availability: {
        nextCloseTime: "2023-12-24 23:45:00",
        opened: true,
      },
      badges: {},
      isOpen: true,
      aggregatedDiscountInfoV2: {},
      type: "F",
      badgesV2: {
        entityBadges: {
          imageBased: {},
          textBased: {},
          textExtendedBadges: {},
        },
      },
      orderabilityCommunication: {
        title: {},
        subTitle: {},
        message: {},
        customIcon: {},
      },
      differentiatedUi: {
        displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        differentiatedUiMediaDetails: {
          mediaType: "ADS_MEDIA_ENUM_IMAGE",
          lottie: {},
          video: {},
        },
      },
      reviewsSummary: {},
      displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      restaurantOfferPresentationInfo: {},
    },
    analytics: {
      context: "seo-data-4c4b8f50-451b-4fff-ae43-f4872a0a62f7",
    },
    cta: {
      link: "https://www.swiggy.com/restaurants/mcdonalds-beltola-ganeshguri-guwahati-651213",
      text: "RESTAURANT_MENU",
      type: "WEBLINK",
    },
    widgetId: "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo",
  },
  {
    info: {
      id: "733095",
      name: "Qalaa",
      cloudinaryImageId: "447df5802c0f1e7a9c3523bb4262a2f6",
      locality: "Ganeshguri",
      areaName: "Bhangagarh",
      costForTwo: "₹500 for two",
      cuisines: ["Bakery", "Desserts"],
      avgRating: 4.7,
      parentId: "435183",
      avgRatingString: "4.7",
      totalRatingsString: "500+",
      sla: {
        deliveryTime: 25,
        lastMileTravel: 1.7,
        serviceability: "SERVICEABLE",
        slaString: "25 mins",
        lastMileTravelString: "1.7 km",
        iconType: "ICON_TYPE_EMPTY",
      },
      availability: {
        nextCloseTime: "2023-12-24 23:00:00",
        opened: true,
      },
      badges: {},
      isOpen: true,
      aggregatedDiscountInfoV2: {},
      type: "F",
      badgesV2: {
        entityBadges: {
          imageBased: {},
          textBased: {},
          textExtendedBadges: {},
        },
      },
      orderabilityCommunication: {
        title: {},
        subTitle: {},
        message: {},
        customIcon: {},
      },
      differentiatedUi: {
        displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        differentiatedUiMediaDetails: {
          mediaType: "ADS_MEDIA_ENUM_IMAGE",
          lottie: {},
          video: {},
        },
      },
      reviewsSummary: {},
      displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      isNewlyOnboarded: true,
      restaurantOfferPresentationInfo: {},
    },
    analytics: {
      context: "seo-data-4c4b8f50-451b-4fff-ae43-f4872a0a62f7",
    },
    cta: {
      link: "https://www.swiggy.com/restaurants/qalaa-ganeshguri-bhangagarh-guwahati-733095",
      text: "RESTAURANT_MENU",
      type: "WEBLINK",
    },
    widgetId: "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo",
  },
  {
    info: {
      id: "745990",
      name: "Cake.Com",
      cloudinaryImageId: "a04cbf624f0c4f9c149d6ea9c8d32b12",
      locality: "Arya Nagar",
      areaName: "Ulubari",
      costForTwo: "₹200 for two",
      cuisines: ["Chinese", "North Indian"],
      avgRating: 4.1,
      veg: true,
      parentId: "55189",
      avgRatingString: "4.1",
      totalRatingsString: "100+",
      sla: {
        deliveryTime: 20,
        lastMileTravel: 1.4,
        serviceability: "SERVICEABLE",
        slaString: "20 mins",
        lastMileTravelString: "1.4 km",
        iconType: "ICON_TYPE_EMPTY",
      },
      availability: {
        nextCloseTime: "2023-12-24 22:00:00",
        opened: true,
      },
      badges: {},
      isOpen: true,
      type: "F",
      badgesV2: {
        entityBadges: {
          imageBased: {},
          textBased: {},
          textExtendedBadges: {},
        },
      },
      aggregatedDiscountInfoV3: {
        header: "₹125 OFF",
        subHeader: "ABOVE ₹249",
        discountTag: "FLAT DEAL",
      },
      orderabilityCommunication: {
        title: {},
        subTitle: {},
        message: {},
        customIcon: {},
      },
      differentiatedUi: {
        displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        differentiatedUiMediaDetails: {
          mediaType: "ADS_MEDIA_ENUM_IMAGE",
          lottie: {},
          video: {},
        },
      },
      reviewsSummary: {},
      displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      isNewlyOnboarded: true,
      restaurantOfferPresentationInfo: {},
    },
    analytics: {
      context: "seo-data-4c4b8f50-451b-4fff-ae43-f4872a0a62f7",
    },
    cta: {
      link: "https://www.swiggy.com/restaurants/cake-com-arya-nagar-ulubari-guwahati-745990",
      text: "RESTAURANT_MENU",
      type: "WEBLINK",
    },
    widgetId: "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo",
  },
  {
    info: {
      id: "66957",
      name: "Mast Punjabi Dhaba",
      cloudinaryImageId: "lnc2gq45uwhhyix7tp5a",
      locality: "Kachari Basti Road",
      areaName: "Ulubari",
      costForTwo: "₹400 for two",
      cuisines: [
        "Punjabi",
        "North Indian",
        "Biryani",
        "Indian",
        "Tandoor",
        "Thalis",
        "Chinese",
      ],
      avgRating: 4.4,
      parentId: "8305",
      avgRatingString: "4.4",
      totalRatingsString: "10K+",
      sla: {
        deliveryTime: 26,
        lastMileTravel: 1.7,
        serviceability: "SERVICEABLE",
        slaString: "26 mins",
        lastMileTravelString: "1.7 km",
        iconType: "ICON_TYPE_EMPTY",
      },
      availability: {
        nextCloseTime: "2023-12-25 00:00:00",
        opened: true,
      },
      badges: {},
      isOpen: true,
      aggregatedDiscountInfoV2: {},
      type: "F",
      badgesV2: {
        entityBadges: {
          imageBased: {},
          textBased: {},
          textExtendedBadges: {},
        },
      },
      orderabilityCommunication: {
        title: {},
        subTitle: {},
        message: {},
        customIcon: {},
      },
      differentiatedUi: {
        displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        differentiatedUiMediaDetails: {
          mediaType: "ADS_MEDIA_ENUM_IMAGE",
          lottie: {},
          video: {},
        },
      },
      reviewsSummary: {},
      displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      restaurantOfferPresentationInfo: {},
    },
    analytics: {
      context: "seo-data-4c4b8f50-451b-4fff-ae43-f4872a0a62f7",
    },
    cta: {
      link: "https://www.swiggy.com/restaurants/mast-punjabi-dhaba-kachari-basti-road-ulubari-guwahati-66957",
      text: "RESTAURANT_MENU",
      type: "WEBLINK",
    },
    widgetId: "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo",
  },
  {
    info: {
      id: "364668",
      name: "Quick Pick",
      cloudinaryImageId: "x4yhefqoqso4ykaiqwiw",
      locality: "MD Tayebulla Road",
      areaName: "Uzan Bazaar",
      costForTwo: "₹350 for two",
      cuisines: ["Indian", "Chinese"],
      avgRating: 4.3,
      parentId: "9598",
      avgRatingString: "4.3",
      totalRatingsString: "1K+",
      sla: {
        deliveryTime: 33,
        lastMileTravel: 3.9,
        serviceability: "SERVICEABLE",
        slaString: "33 mins",
        lastMileTravelString: "3.9 km",
        iconType: "ICON_TYPE_EMPTY",
      },
      availability: {
        nextCloseTime: "2023-12-24 21:30:00",
        opened: true,
      },
      badges: {},
      isOpen: true,
      type: "F",
      badgesV2: {
        entityBadges: {
          imageBased: {},
          textBased: {},
          textExtendedBadges: {},
        },
      },
      aggregatedDiscountInfoV3: {
        header: "₹100 OFF",
        subHeader: "ABOVE ₹599",
        discountTag: "FLAT DEAL",
      },
      orderabilityCommunication: {
        title: {},
        subTitle: {},
        message: {},
        customIcon: {},
      },
      differentiatedUi: {
        displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        differentiatedUiMediaDetails: {
          mediaType: "ADS_MEDIA_ENUM_IMAGE",
          lottie: {},
          video: {},
        },
      },
      reviewsSummary: {},
      displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      restaurantOfferPresentationInfo: {},
    },
    analytics: {
      context: "seo-data-4c4b8f50-451b-4fff-ae43-f4872a0a62f7",
    },
    cta: {
      link: "https://www.swiggy.com/restaurants/quick-pick-md-tayebulla-road-uzan-bazaar-guwahati-364668",
      text: "RESTAURANT_MENU",
      type: "WEBLINK",
    },
    widgetId: "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo",
  },
  {
    info: {
      id: "69258",
      name: "Domino's Pizza",
      cloudinaryImageId: "v2lcpylzqsfvprlhbacx",
      locality: "The Hub",
      areaName: "Bhangagarh",
      costForTwo: "₹700 for two",
      cuisines: ["Pizzas", "Italian", "Pastas", "Desserts"],
      avgRating: 4.5,
      parentId: "2456",
      avgRatingString: "4.5",
      totalRatingsString: "5K+",
      sla: {
        deliveryTime: 25,
        serviceability: "SERVICEABLE",
        slaString: "25 mins",
        iconType: "ICON_TYPE_EMPTY",
      },
      availability: {
        nextCloseTime: "2023-12-25 00:57:00",
        opened: true,
      },
      badges: {},
      isOpen: true,
      type: "F",
      badgesV2: {
        entityBadges: {
          imageBased: {},
          textBased: {},
          textExtendedBadges: {},
        },
      },
      aggregatedDiscountInfoV3: {
        header: "₹150 OFF",
        subHeader: "ABOVE ₹299",
        discountTag: "FLAT DEAL",
      },
      orderabilityCommunication: {
        title: {},
        subTitle: {},
        message: {},
        customIcon: {},
      },
      differentiatedUi: {
        displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        differentiatedUiMediaDetails: {
          mediaType: "ADS_MEDIA_ENUM_IMAGE",
          lottie: {},
          video: {},
        },
      },
      reviewsSummary: {},
      displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      restaurantOfferPresentationInfo: {},
    },
    analytics: {
      context: "seo-data-4c4b8f50-451b-4fff-ae43-f4872a0a62f7",
    },
    cta: {
      link: "https://www.swiggy.com/restaurants/dominos-pizza-the-hub-bhangagarh-guwahati-69258",
      text: "RESTAURANT_MENU",
      type: "WEBLINK",
    },
    widgetId: "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo",
  },
  {
    info: {
      id: "66387",
      name: "Subway",
      cloudinaryImageId: "1ace5fa65eff3e1223feb696c956b38b",
      locality: "GS Road",
      areaName: "Christian Basti",
      costForTwo: "₹350 for two",
      cuisines: ["Healthy Food", "Salads", "Snacks", "Desserts", "Beverages"],
      avgRating: 4.3,
      parentId: "2",
      avgRatingString: "4.3",
      totalRatingsString: "10K+",
      sla: {
        deliveryTime: 31,
        lastMileTravel: 4.4,
        serviceability: "SERVICEABLE",
        slaString: "31 mins",
        lastMileTravelString: "4.4 km",
        iconType: "ICON_TYPE_EMPTY",
      },
      availability: {
        nextCloseTime: "2023-12-24 22:00:00",
        opened: true,
      },
      badges: {},
      isOpen: true,
      aggregatedDiscountInfoV2: {},
      type: "F",
      badgesV2: {
        entityBadges: {
          imageBased: {},
          textBased: {},
          textExtendedBadges: {},
        },
      },
      orderabilityCommunication: {
        title: {},
        subTitle: {},
        message: {},
        customIcon: {},
      },
      differentiatedUi: {
        displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        differentiatedUiMediaDetails: {
          mediaType: "ADS_MEDIA_ENUM_IMAGE",
          lottie: {},
          video: {},
        },
      },
      reviewsSummary: {},
      displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      restaurantOfferPresentationInfo: {},
    },
    analytics: {
      context: "seo-data-4c4b8f50-451b-4fff-ae43-f4872a0a62f7",
    },
    cta: {
      link: "https://www.swiggy.com/restaurants/subway-gs-road-christian-basti-guwahati-66387",
      text: "RESTAURANT_MENU",
      type: "WEBLINK",
    },
    widgetId: "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo",
  },
];
const ReasturantCard = ({ name, cloudinaryImageId, cuisines, avgRating }) => {

  return (
    <div className="card">
      <img
        src={
          "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/" +
          cloudinaryImageId
        }
        alt="burger"
      />
      <h2>{name}</h2>
      <h3>{cuisines.join(",")}</h3>
      <h4>{avgRating} start</h4>
    </div>
  );
};

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

const Footer = () => {
  return <div>Footera</div>;
};

const AppLayout = () => {
  return (
    <>
      <Header />
      <Body />
      <Footer />
    </>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<AppLayout />);
