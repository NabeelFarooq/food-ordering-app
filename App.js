import React from "react";
import ReactDOM from "react-dom/client";

const Header = () => {
  return (
    <div className="header">
      <div className="logo-container">
        <img
          className="logo"
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTDN051xHnibkrTWV8_-yIxekWpMXfaLFeYPQ&s"
        />
      </div>
      <div className="nav-items">
        <ul>
          <li>Home</li>
          <li>About Us</li>
          <li>Contact Us</li>
          <li>Cart</li>
        </ul>
      </div>
    </div>
  );
};

const RestaurantCard = (props) => {
  const { resData } = props;
  const { info } = resData;
  const { name, cuisines, avgRatingString, costForTwo, cloudinaryImageId } =
    info;
  const { sla } = info;
  const { slaString } = sla;

  return (
    <div className="res-card" style={{ backgroundColor: "#f0f0f0" }}>
      <img
        className="res-logo"
        alt="res-logo"
        src={
          "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/" +
          cloudinaryImageId
        }
      />
      <h3>{name}</h3>
      <h4>{cuisines.join(", ")}</h4>
      <h4>{avgRatingString} stars</h4>
      <h4>{slaString}</h4>
      <h4>{costForTwo}</h4>
    </div>
  );
};

const resObj = {
  restaurants: [
    {
      info: {
        id: "148031",
        name: "Pizza Hut",
        cloudinaryImageId:
          "RX_THUMBNAIL/IMAGES/VENDOR/2024/7/17/b9e536c6-5e04-4fac-960b-2f511b5d27f9_148031.jpg",
        locality: "Wave Mall",
        areaName: "Trikuta Nagar",
        costForTwo: "₹600 for two",
        cuisines: ["Pizzas", "Desserts", "American", "Continental"],
        avgRating: 4.1,
        parentId: "721",
        avgRatingString: "4.1",
        totalRatingsString: "2.4K+",
        sla: {
          deliveryTime: 43,
          lastMileTravel: 5,
          serviceability: "SERVICEABLE",
          slaString: "40-45 mins",
          lastMileTravelString: "5.0 km",
          iconType: "ICON_TYPE_EMPTY",
        },
        availability: {
          nextCloseTime: "2025-03-19 00:00:00",
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
          header: "50% OFF",
          discountTag: "FLAT DEAL",
        },
        differentiatedUi: {
          displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
          differentiatedUiMediaDetails: {
            lottie: {},
            video: {},
          },
        },
        reviewsSummary: {},
        displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
        restaurantOfferPresentationInfo: {},
        externalRatings: {
          aggregatedRating: {
            rating: "--",
          },
        },
        ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
      },
      analytics: {
        context: "seo-data-7a35224e-37ec-4479-aea3-a59bc383cbb6",
      },
      cta: {
        link: "https://www.swiggy.com/city/jammu/pizza-hut-wave-mall-trikuta-nagar-rest148031",
        type: "WEBLINK",
      },
    },
    {
      info: {
        id: "617748",
        name: "Burger King",
        cloudinaryImageId:
          "RX_THUMBNAIL/IMAGES/VENDOR/2025/3/13/b93faea6-ffa5-465c-85dc-7f002a7c6243_617748.jpg",
        locality: "Gole Market Road",
        areaName: "Trikuta Nagar",
        costForTwo: "₹350 for two",
        cuisines: ["American"],
        avgRating: 4.3,
        parentId: "166",
        avgRatingString: "4.3",
        totalRatingsString: "6.2K+",
        sla: {
          deliveryTime: 25,
          lastMileTravel: 4.8,
          serviceability: "SERVICEABLE",
          slaString: "20-25 mins",
          lastMileTravelString: "4.8 km",
          iconType: "ICON_TYPE_EMPTY",
        },
        availability: {
          nextCloseTime: "2025-03-19 00:00:00",
          opened: true,
        },
        badges: {
          imageBadges: [
            {
              imageId: "Rxawards/_CATEGORY-Burger.png",
              description: "Delivery!",
            },
          ],
        },
        isOpen: true,
        type: "F",
        badgesV2: {
          entityBadges: {
            imageBased: {
              badgeObject: [
                {
                  attributes: {
                    description: "Delivery!",
                    imageId: "Rxawards/_CATEGORY-Burger.png",
                  },
                },
              ],
            },
            textBased: {},
            textExtendedBadges: {},
          },
        },
        aggregatedDiscountInfoV3: {
          header: "60% OFF",
          subHeader: "UPTO ₹120",
        },
        differentiatedUi: {
          displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
          differentiatedUiMediaDetails: {
            lottie: {},
            video: {},
          },
        },
        reviewsSummary: {},
        displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
        restaurantOfferPresentationInfo: {},
        externalRatings: {
          aggregatedRating: {
            rating: "--",
          },
        },
        ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
      },
      analytics: {
        context: "seo-data-7a35224e-37ec-4479-aea3-a59bc383cbb6",
      },
      cta: {
        link: "https://www.swiggy.com/city/jammu/burger-king-gole-market-road-trikuta-nagar-rest617748",
        type: "WEBLINK",
      },
    },
    {
      info: {
        id: "458628",
        name: "Hunger Strike - Little Bite Big Taste",
        cloudinaryImageId: "qmgit6edmlpkt5pyfjms",
        locality: "Laxmi Nagar",
        areaName: "Trikuta Nagar",
        costForTwo: "₹300 for two",
        cuisines: ["Chinese", "Tandoor", "Fast Food", "Indian"],
        avgRating: 4.3,
        parentId: "275379",
        avgRatingString: "4.3",
        totalRatingsString: "2.5K+",
        sla: {
          deliveryTime: 24,
          lastMileTravel: 2.2,
          serviceability: "SERVICEABLE",
          slaString: "20-25 mins",
          lastMileTravelString: "2.2 km",
          iconType: "ICON_TYPE_EMPTY",
        },
        availability: {
          nextCloseTime: "2025-03-18 22:30:00",
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
          header: "30% OFF",
          subHeader: "UPTO ₹75",
        },
        differentiatedUi: {
          displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
          differentiatedUiMediaDetails: {
            lottie: {},
            video: {},
          },
        },
        reviewsSummary: {},
        displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
        restaurantOfferPresentationInfo: {},
        externalRatings: {
          aggregatedRating: {
            rating: "--",
          },
        },
        ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
      },
      analytics: {
        context: "seo-data-7a35224e-37ec-4479-aea3-a59bc383cbb6",
      },
      cta: {
        link: "https://www.swiggy.com/city/jammu/hunger-strike-little-bite-big-taste-laxmi-nagar-trikuta-nagar-rest458628",
        type: "WEBLINK",
      },
    },
    {
      info: {
        id: "104280",
        name: "KC 360",
        cloudinaryImageId: "aonx8wz28zck24bmafyy",
        locality: "Prem Nagar",
        areaName: "Trikuta Nagar",
        costForTwo: "₹300 for two",
        cuisines: ["North Indian", "Indian", "Chinese", "Punjabi", "Biryani"],
        avgRating: 4.2,
        parentId: "116054",
        avgRatingString: "4.2",
        totalRatingsString: "8.3K+",
        sla: {
          deliveryTime: 24,
          lastMileTravel: 1.4,
          serviceability: "SERVICEABLE",
          slaString: "20-25 mins",
          lastMileTravelString: "1.4 km",
          iconType: "ICON_TYPE_EMPTY",
        },
        availability: {
          nextCloseTime: "2025-03-18 23:30:00",
          opened: true,
        },
        badges: {
          imageBadges: [
            {
              imageId: "bolt/Bolt%20Listing%20badge@3x.png",
              description: "bolt!",
            },
            {
              imageId: "Rxawards/_CATEGORY-North%20Indian.png",
              description: "Delivery!",
            },
          ],
        },
        isOpen: true,
        type: "F",
        badgesV2: {
          entityBadges: {
            imageBased: {
              badgeObject: [
                {
                  attributes: {
                    description: "bolt!",
                    imageId: "bolt/Bolt%20Listing%20badge@3x.png",
                  },
                },
                {
                  attributes: {
                    description: "Delivery!",
                    imageId: "Rxawards/_CATEGORY-North%20Indian.png",
                  },
                },
              ],
            },
            textBased: {},
            textExtendedBadges: {},
          },
        },
        aggregatedDiscountInfoV3: {
          header: "₹50 OFF",
          subHeader: "ABOVE ₹199",
          discountTag: "FLAT DEAL",
        },
        differentiatedUi: {
          displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
          differentiatedUiMediaDetails: {
            lottie: {},
            video: {},
          },
        },
        reviewsSummary: {},
        displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
        restaurantOfferPresentationInfo: {},
        externalRatings: {
          aggregatedRating: {
            rating: "--",
          },
        },
        ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
      },
      analytics: {
        context: "seo-data-7a35224e-37ec-4479-aea3-a59bc383cbb6",
      },
      cta: {
        link: "https://www.swiggy.com/city/jammu/kc-360-prem-nagar-trikuta-nagar-rest104280",
        type: "WEBLINK",
      },
    },
    {
      info: {
        id: "733614",
        name: "Subway",
        cloudinaryImageId:
          "RX_THUMBNAIL/IMAGES/VENDOR/2025/1/21/44824346-9452-4f76-a0fb-7a11d6bf40ed_733614.JPG",
        locality: "AKHNOOR",
        areaName: "Trikuta Nagar",
        costForTwo: "₹350 for two",
        cuisines: ["sandwich", "Salads", "wrap", "Healthy Food"],
        avgRating: 4,
        parentId: "2",
        avgRatingString: "4.0",
        totalRatingsString: "923",
        sla: {
          deliveryTime: 19,
          lastMileTravel: 3,
          serviceability: "SERVICEABLE",
          slaString: "15-20 mins",
          lastMileTravelString: "3.0 km",
          iconType: "ICON_TYPE_EMPTY",
        },
        availability: {
          nextCloseTime: "2025-03-19 01:00:00",
          opened: true,
        },
        badges: {
          imageBadges: [
            {
              imageId: "Green%20Dot%20Awards/Best%20In%20Veg%20Sandwich.png",
              description: "Delivery!",
            },
          ],
        },
        isOpen: true,
        type: "F",
        badgesV2: {
          entityBadges: {
            imageBased: {
              badgeObject: [
                {
                  attributes: {
                    description: "Delivery!",
                    imageId:
                      "Green%20Dot%20Awards/Best%20In%20Veg%20Sandwich.png",
                  },
                },
              ],
            },
            textBased: {},
            textExtendedBadges: {},
          },
        },
        aggregatedDiscountInfoV3: {
          header: "40% OFF",
          subHeader: "UPTO ₹80",
        },
        differentiatedUi: {
          displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
          differentiatedUiMediaDetails: {
            lottie: {},
            video: {},
          },
        },
        reviewsSummary: {},
        displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
        restaurantOfferPresentationInfo: {},
        externalRatings: {
          aggregatedRating: {
            rating: "--",
          },
        },
        ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
      },
      analytics: {
        context: "seo-data-7a35224e-37ec-4479-aea3-a59bc383cbb6",
      },
      cta: {
        link: "https://www.swiggy.com/city/jammu/subway-akhnoor-trikuta-nagar-rest733614",
        type: "WEBLINK",
      },
    },
    {
      info: {
        id: "827520",
        name: "NIC Ice Creams",
        cloudinaryImageId:
          "RX_THUMBNAIL/IMAGES/VENDOR/2024/11/22/fb07e618-9478-4ea6-8069-e59a214415f8_827520.jpg",
        locality: "Sector No  4",
        areaName: "Trikuta Nagar",
        costForTwo: "₹120 for two",
        cuisines: ["Ice Cream", "Desserts"],
        avgRating: 4.8,
        veg: true,
        parentId: "6249",
        avgRatingString: "4.8",
        totalRatingsString: "396",
        sla: {
          deliveryTime: 35,
          lastMileTravel: 8,
          serviceability: "SERVICEABLE",
          slaString: "35-40 mins",
          lastMileTravelString: "8.0 km",
          iconType: "ICON_TYPE_EMPTY",
        },
        availability: {
          nextCloseTime: "2025-03-18 23:00:00",
          opened: true,
        },
        badges: {
          imageBadges: [
            {
              imageId: "Green%20Dot%20Awards/Best%20In%20Ice%20cream.png",
              description: "Delivery!",
            },
          ],
        },
        isOpen: true,
        type: "F",
        badgesV2: {
          entityBadges: {
            imageBased: {
              badgeObject: [
                {
                  attributes: {
                    description: "Delivery!",
                    imageId: "Green%20Dot%20Awards/Best%20In%20Ice%20cream.png",
                  },
                },
              ],
            },
            textBased: {},
            textExtendedBadges: {},
          },
        },
        aggregatedDiscountInfoV3: {
          header: "60% OFF",
          subHeader: "UPTO ₹120",
        },
        differentiatedUi: {
          displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
          differentiatedUiMediaDetails: {
            lottie: {},
            video: {},
          },
        },
        reviewsSummary: {},
        displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
        restaurantOfferPresentationInfo: {},
        externalRatings: {
          aggregatedRating: {
            rating: "--",
          },
        },
        ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
      },
      analytics: {
        context: "seo-data-7a35224e-37ec-4479-aea3-a59bc383cbb6",
      },
      cta: {
        link: "https://www.swiggy.com/city/jammu/nic-ice-creams-sector-no-4-trikuta-nagar-rest827520",
        type: "WEBLINK",
      },
    },
    {
      info: {
        id: "755019",
        name: "KFC",
        cloudinaryImageId:
          "RX_THUMBNAIL/IMAGES/VENDOR/2024/12/9/43d56064-5043-4caa-9d11-e200ebcd6f8b_755019.JPG",
        locality: "Jewel Chowk",
        areaName: "Trikuta Nagar",
        costForTwo: "₹400 for two",
        cuisines: ["Burgers", "Fast Food", "Rolls & Wraps"],
        avgRating: 4.1,
        parentId: "547",
        avgRatingString: "4.1",
        totalRatingsString: "1.8K+",
        sla: {
          deliveryTime: 22,
          lastMileTravel: 2.4,
          serviceability: "SERVICEABLE",
          slaString: "20-25 mins",
          lastMileTravelString: "2.4 km",
          iconType: "ICON_TYPE_EMPTY",
        },
        availability: {
          nextCloseTime: "2025-03-19 03:00:00",
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
          header: "ITEMS",
          subHeader: "AT ₹59",
        },
        differentiatedUi: {
          displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
          differentiatedUiMediaDetails: {
            lottie: {},
            video: {},
          },
        },
        reviewsSummary: {},
        displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
        restaurantOfferPresentationInfo: {},
        externalRatings: {
          aggregatedRating: {
            rating: "--",
          },
        },
        ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
      },
      analytics: {
        context: "seo-data-7a35224e-37ec-4479-aea3-a59bc383cbb6",
      },
      cta: {
        link: "https://www.swiggy.com/city/jammu/kfc-jewel-chowk-trikuta-nagar-rest755019",
        type: "WEBLINK",
      },
    },
    {
      info: {
        id: "369968",
        name: "Khaana Khazana",
        cloudinaryImageId: "oje3sobegg3glbw3wrmk",
        locality: "Residency Road",
        areaName: "Trikuta Nagar",
        costForTwo: "₹700 for two",
        cuisines: ["Indian", "Punjabi", "Snacks", "Beverages", "South Indian"],
        avgRating: 4.4,
        veg: true,
        parentId: "3424",
        avgRatingString: "4.4",
        totalRatingsString: "1.3K+",
        sla: {
          deliveryTime: 24,
          lastMileTravel: 1.7,
          serviceability: "SERVICEABLE",
          slaString: "20-25 mins",
          lastMileTravelString: "1.7 km",
          iconType: "ICON_TYPE_EMPTY",
        },
        availability: {
          nextCloseTime: "2025-03-18 23:59:00",
          opened: true,
        },
        badges: {
          imageBadges: [
            {
              imageId: "bolt/Bolt%20Listing%20badge@3x.png",
              description: "bolt!",
            },
            {
              imageId: "Rxawards/_CATEGORY-North%20Indian.png",
              description: "Delivery!",
            },
          ],
        },
        isOpen: true,
        aggregatedDiscountInfoV2: {},
        type: "F",
        badgesV2: {
          entityBadges: {
            imageBased: {
              badgeObject: [
                {
                  attributes: {
                    description: "bolt!",
                    imageId: "bolt/Bolt%20Listing%20badge@3x.png",
                  },
                },
                {
                  attributes: {
                    description: "Delivery!",
                    imageId: "Rxawards/_CATEGORY-North%20Indian.png",
                  },
                },
              ],
            },
            textBased: {},
            textExtendedBadges: {},
          },
        },
        differentiatedUi: {
          displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
          differentiatedUiMediaDetails: {
            lottie: {},
            video: {},
          },
        },
        reviewsSummary: {},
        displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
        restaurantOfferPresentationInfo: {},
        externalRatings: {
          aggregatedRating: {
            rating: "--",
          },
        },
        ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
      },
      analytics: {
        context: "seo-data-7a35224e-37ec-4479-aea3-a59bc383cbb6",
      },
      cta: {
        link: "https://www.swiggy.com/city/jammu/khaana-khazana-residency-road-trikuta-nagar-rest369968",
        type: "WEBLINK",
      },
    },
    {
      info: {
        id: "244614",
        name: "D Village Restaurant",
        cloudinaryImageId: "f3f2b5a20a81c30965e2234ccb421ba4",
        locality: "Akhnoor Road",
        areaName: "Trikuta Nagar",
        costForTwo: "₹250 for two",
        cuisines: ["Chinese", "Mughlai", "Fast Food", "Seafood", "Beverages"],
        avgRating: 4.2,
        parentId: "387469",
        avgRatingString: "4.2",
        totalRatingsString: "5.0K+",
        sla: {
          deliveryTime: 31,
          lastMileTravel: 4.3,
          serviceability: "SERVICEABLE",
          slaString: "30-35 mins",
          lastMileTravelString: "4.3 km",
          iconType: "ICON_TYPE_EMPTY",
        },
        availability: {
          nextCloseTime: "2025-03-18 23:00:00",
          opened: true,
        },
        badges: {
          imageBadges: [
            {
              imageId: "Rxawards/_CATEGORY-North%20Indian.png",
              description: "Delivery!",
            },
          ],
        },
        isOpen: true,
        type: "F",
        badgesV2: {
          entityBadges: {
            imageBased: {
              badgeObject: [
                {
                  attributes: {
                    description: "Delivery!",
                    imageId: "Rxawards/_CATEGORY-North%20Indian.png",
                  },
                },
              ],
            },
            textBased: {},
            textExtendedBadges: {},
          },
        },
        aggregatedDiscountInfoV3: {
          header: "ITEMS",
          subHeader: "AT ₹119",
        },
        differentiatedUi: {
          displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
          differentiatedUiMediaDetails: {
            lottie: {},
            video: {},
          },
        },
        reviewsSummary: {},
        displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
        restaurantOfferPresentationInfo: {},
        externalRatings: {
          aggregatedRating: {
            rating: "--",
          },
        },
        ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
      },
      analytics: {
        context: "seo-data-7a35224e-37ec-4479-aea3-a59bc383cbb6",
      },
      cta: {
        link: "https://www.swiggy.com/city/jammu/d-village-restaurant-akhnoor-road-trikuta-nagar-rest244614",
        type: "WEBLINK",
      },
    },
    {
      info: {
        id: "632582",
        name: "La Pino'z Pizza",
        cloudinaryImageId: "rjffhtmjxelmcdbe9nbd",
        locality: "TALABTILLO",
        areaName: "Trikuta Nagar",
        costForTwo: "₹400 for two",
        cuisines: ["Pizzas", "Pastas", "Italian", "Desserts", "Beverages"],
        avgRating: 4.2,
        parentId: "4961",
        avgRatingString: "4.2",
        totalRatingsString: "1.7K+",
        sla: {
          deliveryTime: 22,
          lastMileTravel: 2.8,
          serviceability: "SERVICEABLE",
          slaString: "20-25 mins",
          lastMileTravelString: "2.8 km",
          iconType: "ICON_TYPE_EMPTY",
        },
        availability: {
          nextCloseTime: "2025-03-19 01:00:00",
          opened: true,
        },
        badges: {
          imageBadges: [
            {
              imageId: "Rxawards/_CATEGORY-Pizza.png",
              description: "Delivery!",
            },
          ],
        },
        isOpen: true,
        type: "F",
        badgesV2: {
          entityBadges: {
            imageBased: {
              badgeObject: [
                {
                  attributes: {
                    description: "Delivery!",
                    imageId: "Rxawards/_CATEGORY-Pizza.png",
                  },
                },
              ],
            },
            textBased: {},
            textExtendedBadges: {},
          },
        },
        aggregatedDiscountInfoV3: {
          header: "ITEMS",
          subHeader: "AT ₹99",
        },
        differentiatedUi: {
          displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
          differentiatedUiMediaDetails: {
            lottie: {},
            video: {},
          },
        },
        reviewsSummary: {},
        displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
        restaurantOfferPresentationInfo: {},
        externalRatings: {
          aggregatedRating: {
            rating: "--",
          },
        },
        ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
      },
      analytics: {
        context: "seo-data-7a35224e-37ec-4479-aea3-a59bc383cbb6",
      },
      cta: {
        link: "https://www.swiggy.com/city/jammu/la-pinoz-pizza-talabtillo-trikuta-nagar-rest632582",
        type: "WEBLINK",
      },
    },
    {
      info: {
        id: "463883",
        name: "Pahalwan's",
        cloudinaryImageId: "joonh1s5m88of6emlz2w",
        locality: "Canal Road",
        areaName: "Trikuta Nagar",
        costForTwo: "₹400 for two",
        cuisines: [
          "North Indian",
          "Chinese",
          "Desserts",
          "South Indian",
          "Sweets",
          "Snacks",
          "Street Food",
          "Ice Cream",
          "Beverages",
          "Fast Food",
        ],
        avgRating: 4.3,
        veg: true,
        parentId: "153718",
        avgRatingString: "4.3",
        totalRatingsString: "5.1K+",
        sla: {
          deliveryTime: 27,
          lastMileTravel: 3.5,
          serviceability: "SERVICEABLE",
          slaString: "25-30 mins",
          lastMileTravelString: "3.5 km",
          iconType: "ICON_TYPE_EMPTY",
        },
        availability: {
          nextCloseTime: "2025-03-18 21:45:00",
          opened: true,
        },
        badges: {
          imageBadges: [
            {
              imageId: "Rxawards/_CATEGORY-Mithai.png",
              description: "Delivery!",
            },
          ],
        },
        isOpen: true,
        aggregatedDiscountInfoV2: {},
        type: "F",
        badgesV2: {
          entityBadges: {
            imageBased: {
              badgeObject: [
                {
                  attributes: {
                    description: "Delivery!",
                    imageId: "Rxawards/_CATEGORY-Mithai.png",
                  },
                },
              ],
            },
            textBased: {},
            textExtendedBadges: {},
          },
        },
        differentiatedUi: {
          displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
          differentiatedUiMediaDetails: {
            lottie: {},
            video: {},
          },
        },
        reviewsSummary: {},
        displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
        restaurantOfferPresentationInfo: {},
        externalRatings: {
          aggregatedRating: {
            rating: "--",
          },
        },
        ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
      },
      analytics: {
        context: "seo-data-7a35224e-37ec-4479-aea3-a59bc383cbb6",
      },
      cta: {
        link: "https://www.swiggy.com/city/jammu/pahalwans-canal-road-trikuta-nagar-rest463883",
        type: "WEBLINK",
      },
    },
    {
      info: {
        id: "474827",
        name: "Amritsari Kulcha Hut",
        cloudinaryImageId:
          "RX_THUMBNAIL/IMAGES/VENDOR/2024/9/5/9ce1fd85-e680-4e42-897e-b5c4883951f6_474827.jpg",
        locality: "Jewel Chowk",
        areaName: "Trikuta Nagar",
        costForTwo: "₹300 for two",
        cuisines: ["Tandoor", "Punjabi", "Indian"],
        avgRating: 4.4,
        veg: true,
        parentId: "32145",
        avgRatingString: "4.4",
        totalRatingsString: "2.8K+",
        sla: {
          deliveryTime: 27,
          lastMileTravel: 1.4,
          serviceability: "SERVICEABLE",
          slaString: "25-30 mins",
          lastMileTravelString: "1.4 km",
          iconType: "ICON_TYPE_EMPTY",
        },
        availability: {
          nextCloseTime: "2025-03-18 20:45:00",
          opened: true,
        },
        badges: {
          imageBadges: [
            {
              imageId: "bolt/Bolt%20Listing%20badge@3x.png",
              description: "bolt!",
            },
            {
              imageId: "v1695133679/badges/Pure_Veg111.png",
              description: "pureveg",
            },
          ],
        },
        isOpen: true,
        type: "F",
        badgesV2: {
          entityBadges: {
            imageBased: {
              badgeObject: [
                {
                  attributes: {
                    description: "bolt!",
                    imageId: "bolt/Bolt%20Listing%20badge@3x.png",
                  },
                },
                {
                  attributes: {
                    description: "pureveg",
                    imageId: "v1695133679/badges/Pure_Veg111.png",
                  },
                },
              ],
            },
            textBased: {},
            textExtendedBadges: {},
          },
        },
        aggregatedDiscountInfoV3: {
          header: "20% OFF",
          subHeader: "UPTO ₹50",
        },
        differentiatedUi: {
          displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
          differentiatedUiMediaDetails: {
            lottie: {},
            video: {},
          },
        },
        reviewsSummary: {},
        displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
        restaurantOfferPresentationInfo: {},
        externalRatings: {
          aggregatedRating: {
            rating: "--",
          },
        },
        ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
      },
      analytics: {
        context: "seo-data-7a35224e-37ec-4479-aea3-a59bc383cbb6",
      },
      cta: {
        link: "https://www.swiggy.com/city/jammu/amritsari-kulcha-hut-jewel-chowk-trikuta-nagar-rest474827",
        type: "WEBLINK",
      },
    },
    {
      info: {
        id: "593653",
        name: "The Belgian Waffle Co.",
        cloudinaryImageId:
          "RX_THUMBNAIL/IMAGES/VENDOR/2025/1/17/a73a018e-0f52-4024-a6af-c3a3768cc540_593653.JPG",
        locality: "Jda Complex",
        areaName: "Trikuta Nagar",
        costForTwo: "₹200 for two",
        cuisines: ["Waffle", "Desserts", "Ice Cream"],
        avgRating: 4.4,
        veg: true,
        parentId: "2233",
        avgRatingString: "4.4",
        totalRatingsString: "710",
        sla: {
          deliveryTime: 33,
          lastMileTravel: 2.3,
          serviceability: "SERVICEABLE",
          slaString: "30-35 mins",
          lastMileTravelString: "2.3 km",
          iconType: "ICON_TYPE_EMPTY",
        },
        availability: {
          nextCloseTime: "2025-03-19 02:00:00",
          opened: true,
        },
        badges: {
          imageBadges: [
            {
              imageId: "v1695133679/badges/Pure_Veg111.png",
              description: "pureveg",
            },
          ],
        },
        isOpen: true,
        aggregatedDiscountInfoV2: {},
        type: "F",
        badgesV2: {
          entityBadges: {
            imageBased: {
              badgeObject: [
                {
                  attributes: {
                    description: "pureveg",
                    imageId: "v1695133679/badges/Pure_Veg111.png",
                  },
                },
              ],
            },
            textBased: {},
            textExtendedBadges: {},
          },
        },
        differentiatedUi: {
          displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
          differentiatedUiMediaDetails: {
            lottie: {},
            video: {},
          },
        },
        reviewsSummary: {},
        displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
        restaurantOfferPresentationInfo: {},
        externalRatings: {
          aggregatedRating: {
            rating: "--",
          },
        },
        ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
      },
      analytics: {
        context: "seo-data-7a35224e-37ec-4479-aea3-a59bc383cbb6",
      },
      cta: {
        link: "https://www.swiggy.com/city/jammu/the-belgian-waffle-co-jda-complex-trikuta-nagar-rest593653",
        type: "WEBLINK",
      },
    },
    {
      info: {
        id: "841219",
        name: "Kwality Walls Ice Cream and More",
        cloudinaryImageId:
          "RX_THUMBNAIL/IMAGES/VENDOR/2024/6/20/fe55b18b-6046-485b-82b6-3b2e24154fd9_841219.JPG",
        locality: "Chanchal Super Market",
        areaName: "Trikuta Nagar",
        costForTwo: "₹200 for two",
        cuisines: ["Ice Cream", "Desserts", "Ice Cream Cakes"],
        avgRating: 4.7,
        veg: true,
        parentId: "582",
        avgRatingString: "4.7",
        totalRatingsString: "401",
        sla: {
          deliveryTime: 22,
          lastMileTravel: 4.5,
          serviceability: "SERVICEABLE",
          slaString: "20-25 mins",
          lastMileTravelString: "4.5 km",
          iconType: "ICON_TYPE_EMPTY",
        },
        availability: {
          nextCloseTime: "2025-03-18 21:30:00",
          opened: true,
        },
        badges: {
          imageBadges: [
            {
              imageId: "Green%20Dot%20Awards/Best%20In%20Ice%20cream.png",
              description: "Delivery!",
            },
          ],
        },
        isOpen: true,
        type: "F",
        badgesV2: {
          entityBadges: {
            imageBased: {
              badgeObject: [
                {
                  attributes: {
                    description: "Delivery!",
                    imageId: "Green%20Dot%20Awards/Best%20In%20Ice%20cream.png",
                  },
                },
              ],
            },
            textBased: {},
            textExtendedBadges: {},
          },
        },
        aggregatedDiscountInfoV3: {
          header: "₹150 OFF",
          subHeader: "ABOVE ₹399",
          discountTag: "FLAT DEAL",
        },
        differentiatedUi: {
          displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
          differentiatedUiMediaDetails: {
            lottie: {},
            video: {},
          },
        },
        reviewsSummary: {},
        displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
        restaurantOfferPresentationInfo: {},
        externalRatings: {
          aggregatedRating: {
            rating: "--",
          },
        },
        ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
      },
      analytics: {
        context: "seo-data-7a35224e-37ec-4479-aea3-a59bc383cbb6",
      },
      cta: {
        link: "https://www.swiggy.com/city/jammu/kwality-walls-ice-cream-and-more-chanchal-super-market-trikuta-nagar-rest841219",
        type: "WEBLINK",
      },
    },
    {
      info: {
        id: "286448",
        name: "McDonald's",
        cloudinaryImageId:
          "RX_THUMBNAIL/IMAGES/VENDOR/2025/1/9/85ed3be4-39e2-4e91-8532-6886237251bf_286448.JPG",
        locality: "Prem Nagar",
        areaName: "Trikuta Nagar",
        costForTwo: "₹400 for two",
        cuisines: ["American", "Continental", "Beverages"],
        avgRating: 4.4,
        parentId: "630",
        avgRatingString: "4.4",
        totalRatingsString: "7.3K+",
        sla: {
          deliveryTime: 21,
          lastMileTravel: 1.1,
          serviceability: "SERVICEABLE",
          slaString: "20-25 mins",
          lastMileTravelString: "1.1 km",
          iconType: "ICON_TYPE_EMPTY",
        },
        availability: {
          nextCloseTime: "2025-03-18 23:50:00",
          opened: true,
        },
        badges: {
          imageBadges: [
            {
              imageId: "bolt/Bolt%20Listing%20badge@3x.png",
              description: "bolt!",
            },
            {
              imageId: "Rxawards/_CATEGORY-Burger.png",
              description: "Delivery!",
            },
          ],
        },
        isOpen: true,
        type: "F",
        badgesV2: {
          entityBadges: {
            imageBased: {
              badgeObject: [
                {
                  attributes: {
                    description: "bolt!",
                    imageId: "bolt/Bolt%20Listing%20badge@3x.png",
                  },
                },
                {
                  attributes: {
                    description: "Delivery!",
                    imageId: "Rxawards/_CATEGORY-Burger.png",
                  },
                },
              ],
            },
            textBased: {},
            textExtendedBadges: {},
          },
        },
        aggregatedDiscountInfoV3: {
          header: "ITEMS",
          subHeader: "AT ₹49",
        },
        differentiatedUi: {
          displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
          differentiatedUiMediaDetails: {
            lottie: {},
            video: {},
          },
        },
        reviewsSummary: {},
        displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
        restaurantOfferPresentationInfo: {},
        externalRatings: {
          aggregatedRating: {
            rating: "--",
          },
        },
        ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
      },
      analytics: {
        context: "seo-data-7a35224e-37ec-4479-aea3-a59bc383cbb6",
      },
      cta: {
        link: "https://www.swiggy.com/city/jammu/mcdonalds-prem-nagar-trikuta-nagar-rest286448",
        type: "WEBLINK",
      },
    },
    {
      info: {
        id: "430859",
        name: "7th Heaven",
        cloudinaryImageId: "e2a1c71838f4dbe4c4cfc0de92ca04ea",
        locality: "Sarwal",
        areaName: "Trikuta Nagar",
        costForTwo: "₹300 for two",
        cuisines: ["Bakery", "Desserts", "Chinese", "Fast Food"],
        avgRating: 4.5,
        veg: true,
        parentId: "19",
        avgRatingString: "4.5",
        totalRatingsString: "805",
        sla: {
          deliveryTime: 23,
          lastMileTravel: 2.4,
          serviceability: "SERVICEABLE",
          slaString: "20-25 mins",
          lastMileTravelString: "2.4 km",
          iconType: "ICON_TYPE_EMPTY",
        },
        availability: {
          nextCloseTime: "2025-03-18 21:30:00",
          opened: true,
        },
        badges: {
          imageBadges: [
            {
              imageId: "Rxawards/_CATEGORY-Desserts.png",
              description: "Delivery!",
            },
          ],
        },
        isOpen: true,
        type: "F",
        badgesV2: {
          entityBadges: {
            imageBased: {
              badgeObject: [
                {
                  attributes: {
                    description: "Delivery!",
                    imageId: "Rxawards/_CATEGORY-Desserts.png",
                  },
                },
              ],
            },
            textBased: {},
            textExtendedBadges: {},
          },
        },
        aggregatedDiscountInfoV3: {
          header: "40% OFF",
          subHeader: "UPTO ₹80",
        },
        differentiatedUi: {
          displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
          differentiatedUiMediaDetails: {
            lottie: {},
            video: {},
          },
        },
        reviewsSummary: {},
        displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
        restaurantOfferPresentationInfo: {},
        externalRatings: {
          aggregatedRating: {
            rating: "--",
          },
        },
        ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
      },
      analytics: {
        context: "seo-data-7a35224e-37ec-4479-aea3-a59bc383cbb6",
      },
      cta: {
        link: "https://www.swiggy.com/city/jammu/7th-heaven-sarwal-trikuta-nagar-rest430859",
        type: "WEBLINK",
      },
    },
    {
      info: {
        id: "432078",
        name: "Burger Singh(Big Punjabi Burgers)",
        cloudinaryImageId: "972a37599772cdc7df93a0855ad87591",
        locality: "Sector 4",
        areaName: "Trikuta Nagar",
        costForTwo: "₹300 for two",
        cuisines: ["Snacks", "Indian", "American", "Beverages", "Desserts"],
        avgRating: 4.4,
        parentId: "375065",
        avgRatingString: "4.4",
        totalRatingsString: "2.5K+",
        sla: {
          deliveryTime: 35,
          lastMileTravel: 7.9,
          serviceability: "SERVICEABLE",
          slaString: "30-35 mins",
          lastMileTravelString: "7.9 km",
          iconType: "ICON_TYPE_EMPTY",
        },
        availability: {
          nextCloseTime: "2025-03-19 01:00:00",
          opened: true,
        },
        badges: {
          imageBadges: [
            {
              imageId: "Green%20Dot%20Awards/Best%20In%20Veg%20Burger.png",
              description: "Delivery!",
            },
          ],
        },
        isOpen: true,
        type: "F",
        badgesV2: {
          entityBadges: {
            imageBased: {
              badgeObject: [
                {
                  attributes: {
                    description: "Delivery!",
                    imageId:
                      "Green%20Dot%20Awards/Best%20In%20Veg%20Burger.png",
                  },
                },
              ],
            },
            textBased: {},
            textExtendedBadges: {},
          },
        },
        aggregatedDiscountInfoV3: {
          header: "50% OFF",
          subHeader: "UPTO ₹100",
        },
        differentiatedUi: {
          displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
          differentiatedUiMediaDetails: {
            lottie: {},
            video: {},
          },
        },
        reviewsSummary: {},
        displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
        restaurantOfferPresentationInfo: {},
        externalRatings: {
          aggregatedRating: {
            rating: "--",
          },
        },
        ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
      },
      analytics: {
        context: "seo-data-7a35224e-37ec-4479-aea3-a59bc383cbb6",
      },
      cta: {
        link: "https://www.swiggy.com/city/jammu/burger-singh-big-punjabi-burgers-sector-4-trikuta-nagar-rest432078",
        type: "WEBLINK",
      },
    },
    {
      info: {
        id: "630462",
        name: "Rollsking",
        cloudinaryImageId: "ng2nkdefxpovtojjiliz",
        locality: "Railway Complex Road",
        areaName: "Trikuta Nagar",
        costForTwo: "₹250 for two",
        cuisines: ["Fast Food", "Rolls & Wraps", "North Indian", "Snacks"],
        avgRating: 4.2,
        parentId: "4697",
        avgRatingString: "4.2",
        totalRatingsString: "1.0K+",
        sla: {
          deliveryTime: 36,
          lastMileTravel: 5,
          serviceability: "SERVICEABLE",
          slaString: "35-40 mins",
          lastMileTravelString: "5.0 km",
          iconType: "ICON_TYPE_EMPTY",
        },
        availability: {
          nextCloseTime: "2025-03-19 04:00:00",
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
          header: "ITEMS",
          subHeader: "AT ₹69",
        },
        differentiatedUi: {
          displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
          differentiatedUiMediaDetails: {
            lottie: {},
            video: {},
          },
        },
        reviewsSummary: {},
        displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
        restaurantOfferPresentationInfo: {},
        externalRatings: {
          aggregatedRating: {
            rating: "--",
          },
        },
        ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
      },
      analytics: {
        context: "seo-data-7a35224e-37ec-4479-aea3-a59bc383cbb6",
      },
      cta: {
        link: "https://www.swiggy.com/city/jammu/rollsking-railway-complex-road-trikuta-nagar-rest630462",
        type: "WEBLINK",
      },
    },
    {
      info: {
        id: "714206",
        name: "Pizza Wings",
        cloudinaryImageId:
          "RX_THUMBNAIL/IMAGES/VENDOR/2024/6/26/d112a6d7-d173-4ca7-a5ee-40f845719d18_714206.JPG",
        locality: "North Block Bahu Plaza",
        areaName: "Trikuta Nagar",
        costForTwo: "₹300 for two",
        cuisines: ["Pizzas", "Pastas", "Rolls & Wraps", "Italian", "Desserts"],
        avgRating: 4.2,
        parentId: "159048",
        avgRatingString: "4.2",
        totalRatingsString: "4.4K+",
        sla: {
          deliveryTime: 32,
          lastMileTravel: 5,
          serviceability: "SERVICEABLE",
          slaString: "30-35 mins",
          lastMileTravelString: "5.0 km",
          iconType: "ICON_TYPE_EMPTY",
        },
        availability: {
          nextCloseTime: "2025-03-19 03:00:00",
          opened: true,
        },
        badges: {
          imageBadges: [
            {
              imageId: "Rxawards/_CATEGORY-Pizza.png",
              description: "Delivery!",
            },
          ],
        },
        isOpen: true,
        type: "F",
        badgesV2: {
          entityBadges: {
            imageBased: {
              badgeObject: [
                {
                  attributes: {
                    description: "Delivery!",
                    imageId: "Rxawards/_CATEGORY-Pizza.png",
                  },
                },
              ],
            },
            textBased: {},
            textExtendedBadges: {},
          },
        },
        aggregatedDiscountInfoV3: {
          header: "₹125 OFF",
          subHeader: "ABOVE ₹249",
          discountTag: "FLAT DEAL",
        },
        differentiatedUi: {
          displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
          differentiatedUiMediaDetails: {
            lottie: {},
            video: {},
          },
        },
        reviewsSummary: {},
        displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
        restaurantOfferPresentationInfo: {},
        externalRatings: {
          aggregatedRating: {
            rating: "--",
          },
        },
        ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
      },
      analytics: {
        context: "seo-data-7a35224e-37ec-4479-aea3-a59bc383cbb6",
      },
      cta: {
        link: "https://www.swiggy.com/city/jammu/pizza-wings-north-block-bahu-plaza-trikuta-nagar-rest714206",
        type: "WEBLINK",
      },
    },
    {
      info: {
        id: "724789",
        name: "Burgrill - The Win Win Burger",
        cloudinaryImageId:
          "RX_THUMBNAIL/IMAGES/VENDOR/2025/2/19/ecf223ce-9cdc-4ecd-aee9-c098a712a255_724789.jpg",
        locality: "Bahu Plaza",
        areaName: "Trikuta Nagar",
        costForTwo: "₹500 for two",
        cuisines: [
          "Burgers",
          "Healthy Food",
          "American",
          "Salads",
          "Beverages",
          "Desserts",
          "Snacks",
        ],
        avgRating: 4.5,
        parentId: "302366",
        avgRatingString: "4.5",
        totalRatingsString: "1.0K+",
        sla: {
          deliveryTime: 34,
          lastMileTravel: 5,
          serviceability: "SERVICEABLE",
          slaString: "30-35 mins",
          lastMileTravelString: "5.0 km",
          iconType: "ICON_TYPE_EMPTY",
        },
        availability: {
          nextCloseTime: "2025-03-19 01:00:00",
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
          header: "30% OFF",
          subHeader: "UPTO ₹75",
        },
        differentiatedUi: {
          displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
          differentiatedUiMediaDetails: {
            lottie: {},
            video: {},
          },
        },
        reviewsSummary: {},
        displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
        restaurantOfferPresentationInfo: {},
        externalRatings: {
          aggregatedRating: {
            rating: "--",
          },
        },
        ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
      },
      analytics: {
        context: "seo-data-7a35224e-37ec-4479-aea3-a59bc383cbb6",
      },
      cta: {
        link: "https://www.swiggy.com/city/jammu/burgrill-the-win-win-burger-bahu-plaza-trikuta-nagar-rest724789",
        type: "WEBLINK",
      },
    },
  ],
};
console.log(resObj);
const Body = () => {
  return (
    <div className="body">
      <div className="search">Search</div>
      <div className="res-container">
        {resObj.restaurants.map((restaurant) => (
          <RestaurantCard key={restaurant.info.id} resData={restaurant} />
        ))}
      </div>
    </div>
  );
};
const AppLayout = () => {
  return (
    <div className="app">
      <Header />
      <Body />
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<AppLayout />);
