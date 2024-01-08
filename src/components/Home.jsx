import React from "react";
import { useState, useEffect } from "react";
import CardModal from "./CardModal";
import image from "./famimg.jpg";
import propone from "./propone.jpg";
import proptwo from "./proptwo.jpg";
import propthree from "./propthree.jpeg";
import propfour from "./propfour.jpg";
import propfive from "./propfive.jpg";
import propsix from "./propsix.jpg";

const Home = ({ filteredData, advancedSearchCriteria }) => {

  const [displayedData, setDisplayedData] = useState([]);

  const [selectedCard, setSelectedCard] = useState(null);

  const [favorites, setFavorites] = useState([]);

  const [showClearFavorites, setShowClearFavorites] = useState(false);

  const handleCardClick = (cardDetails) => {
    setSelectedCard(cardDetails);
  };

  const closeModal = () => {
    setSelectedCard(null);
  };

  const addToFavorites = (card) => {
    const isAlreadyAdded = favorites.some((favCard) => favCard.id === card.id);
    if (!isAlreadyAdded) {
      setFavorites([...favorites, card]);
      setShowClearFavorites(true); // Show the clear favorites button after adding the first favorite
    }
  };

  const removeFromFavorites = (id) => {
    const updatedFavorites = favorites.filter((favCard) => favCard.id !== id);
    setFavorites(updatedFavorites);
  };

  const clearFavorites = () => {
    setFavorites([]);
    setShowClearFavorites(false); // Hide the clear favorites button after clearing favorites
  };

  useEffect(() => {
    let filtered = propertyData;

    if (filteredData) {
      filtered = propertyData.filter(
        (data) => data.type.toLowerCase() === filteredData.toLowerCase()
      );
    }

    if (advancedSearchCriteria) {
      const { type, minPrice, maxPrice, minBedrooms, maxBedrooms } = advancedSearchCriteria;

      filtered = filtered.filter((data) => {
        let isValid = true;

        if (type !== "Any" && data.type.toLowerCase() !== type.toLowerCase()) {
          isValid = false;
        }

        if (minPrice && Number(data.price.replace("")) < Number(minPrice)) {
          isValid = false;
        }

        if (maxPrice && Number(data.price.replace("")) > Number(maxPrice)) {
          isValid = false;
        }

        if (minBedrooms && Number(data.bedrooms) < Number(minBedrooms)) {
          isValid = false;
        }

        if (maxBedrooms && Number(data.bedrooms) > Number(maxBedrooms)) {
          isValid = false;
        }

        return isValid;
      });
    }

    setDisplayedData(filtered);
  }, [filteredData, advancedSearchCriteria]);


  const propertyData = [
    {
      id: "prop1",
      image: propone,
      type: "House",
      price: "$750000",
      tenure: "Freehold",
      bedrooms: 3,
      location: "York",
      postcode: "10250",
    },
    {
      id: 2,
      image: proptwo,
      type: "Apartment",
      price: "$320,000",
      tenure: "Freehold",
      bedrooms: "4",
      location: "New York",
      postcode: "223090",
    },
    {
      id: 3,
      image: propthree,
      type: "House",
      price: "$150,000",
      tenure: "Freehold",
      bedrooms: "4",
      location: "London",
      postcode: "11250",
    },
    {
      id: 4,
      image: propfour,
      type: "Villa",
      price: "$190,000",
      tenure: "Freehold",
      bedrooms: "4",
      location: "Paris",
      postcode: "10250",
    },
    {
      id: 5,
      image: propfive,
      type: "House",
      price: "$200,000",
      tenure: "Freehold",
      bedrooms: "4",
      location: "Toronto",
      postcode: "14250",
    },
    {
      id: 6,
      image: propsix,
      type: "House",
      price: "$100,000",
      tenure: "Freehold",
      bedrooms: "4",
      location: "Manchester",
      postcode: "10250",
    },
  ];

  return (
    <section id="home-section">
      <div className="home-div">
        <img className="famImage" src={image} alt="fam-image" />
        <h1 className="headingOne">Find Home, Find Comfort</h1>
      </div>
      <section id="cards-section">
        <h1 className="prop-heading">PROPERTIES</h1>
        <div className="card-div">
        {displayedData.map((property) => (
          <div className="card" key={property.id} onClick={() => handleCardClick(property)}>
            <div className="imageCont">
              <img className="cardImg" src={property.image} alt={`Property ${property.id}`} />
            </div>
            <div className="textCont">
              <h4>Type: {property.type}</h4>
              <h4>Price: {property.price}</h4>
              <button className="cardbtn" onClick={() => addToFavorites(property)}>Add to favorites</button>
            </div>
          </div>
        ))}
        </div>
        {/* selected card and close modal */}
        {selectedCard && (
          <CardModal selectedCard={selectedCard} closeModal={closeModal} />
        )}
        <div className="Favorites-div">
        <h1 className="favheading">Favorites</h1>
                {showClearFavorites && ( // Conditionally render the Clear favorites button
          <button className="clearfavbtn" onClick={clearFavorites}>
            Clear favorites
          </button>
        )}
        {favorites.length > 0 ? (
          <div className="favorite-cards">
            {favorites.map((favCard) => (
              <div key={favCard.id} className="favorite-card">
                {/* Add the entire card structure */}
                <div className="card">
                  {/* Image and other details */}
                  <img src={favCard.image} alt={`Favorite Property ${favCard.id}`} className="cardImg" />
                  <div className="textCont">
                    <h4>Type: {favCard.type}</h4>
                    <h4>Price: {favCard.price}</h4>
                    <h1>Added to Favorites</h1>
                    <button className="rembtn" onClick={() => removeFromFavorites(favCard.id)}>Remove from Favorites</button>
                    {/* Add more details as needed */}
                  </div>
                </div>
              </div>
            ))}
          </div>
        ): (
          <p></p>
        )}
      </div>
      </section>
    </section>
  );
};

export default Home;
