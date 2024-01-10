import React from "react";
import { useState, useEffect } from "react";
import CardModal from "./components/CardModal"
import image from "./assets/famimg.jpg";
import propone from "./assets/propone.jpg";
import proptwo from "./assets/proptwo.jpg";
import propthree from "./assets/propthree.jpeg";
import propfour from "./assets/propfour.jpg";
import propfive from "./assets/propfive.jpg";
import propsix from "./assets/propsix.jpg";

const Home = ({ filteredData, advancedSearchCriteria }) => {

  // displayed data use state set to an empty list
  const [displayedData, setDisplayedData] = useState([]);

  // selected card use state
  const [selectedCard, setSelectedCard] = useState(null);

  // favorites use state
  const [favorites, setFavorites] = useState([]);

  // clear favorites use state
  const [showClearFavorites, setShowClearFavorites] = useState(false);

  // handle card click function
  const handleCardClick = (cardDetails) => {
    setSelectedCard(cardDetails);
  };

  // close model function
  const closeModal = () => {
    setSelectedCard(null);
  };

  // add to favorites function
  const addToFavorites = (card) => {
    const isAlreadyAdded = favorites.some((favCard) => favCard.id === card.id);
    if (!isAlreadyAdded) {
      setFavorites([...favorites, card]);
      setShowClearFavorites(true); // Show the clear favorites button after adding the first favorite
    }
  };

  // remove from favorites function
  const removeFromFavorites = (id) => {
    const updatedFavorites = favorites.filter((favCard) => favCard.id !== id);
    setFavorites(updatedFavorites);
  };

  // clear favorites function
  const clearFavorites = () => {
    setFavorites([]);
    setShowClearFavorites(false); // Hide the clear favorites button after clearing favorites
  };

  // use effect to get filtered data and display them
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
        // checking the input conditions
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


  // accessing the property data without creating a seperate json file
  const propertyData = [
    {
      id: "prop1",
      image: propone,
      type: "House",
      price: "$450000",
      tenure: "Freehold",
      bedrooms: 3,
      location: "York",
      postcode: "Y01SF",
      description: <p>Beautiful House in York.<br/> Spacious and perfect for a family.</p>
    },
    {
      id: 2,
      image: proptwo,
      type: "Apartment",
      price: "$700,000",
      tenure: "Freehold",
      bedrooms: "30",
      location: "New York",
      postcode: "10013",
      description: <p>Modern Apartment located in New York. <br/>Ideal for urban living with great amenities nearby.</p>
    },
    {
      id: 3,
      image: propthree,
      type: "House",
      price: "$550,000",
      tenure: "Freehold",
      bedrooms: "4",
      location: "London",
      postcode: "NW10 3SG",
      description: <p>Modern House located in London with plenty of spacing.<br /> Car parking available.</p>
    },
    {
      id: 4,
      image: propfour,
      type: "Villa",
      price: "$500,000",
      tenure: "Freehold",
      bedrooms: "4",
      location: "Paris",
      postcode: "70123",
      description: <p>Luxurious Villa located in Paris. <br/>Experience elegance and comfort in a serene setting. <br/>Swimming pool available.</p>
    },
    {
      id: 5,
      image: propfive,
      type: "House",
      price: "$450,000",
      tenure: "Freehold",
      bedrooms: "4",
      location: "Toronto",
      postcode: "43964",
      description: <p>Spacious house located in New York. <br/>Swimming pool availble. <br/>Suitable for family and friends.</p>
    },
    {
      id: 6,
      image: propsix,
      type: "House",
      price: "$300,000",
      tenure: "Freehold",
      bedrooms: "3",
      location: "Manchester",
      postcode: "M1 1AQ",
      description: <p>Beautiful house in Manchester with 3 bedrooms. <br/>Consists of a beautiful garden with spacing .</p>
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
          // accessing the property features through the propertyData list
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
