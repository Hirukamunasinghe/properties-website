import React from "react";

// passing the selected card and the closemodal as arguments (props)
const CardModal = ({ selectedCard, closeModal }) => {
  return (
    <div className="modal">
      <div className="modal-content">
        {selectedCard && (
          <div className="selected-card">
            <img src={selectedCard.image} alt="Property" className="modal-image" />
            <h4>Type: {selectedCard.type}</h4>
            <h4>Price: {selectedCard.price}</h4>
            <h4>Tenture: {selectedCard.tenure}</h4>
            <h4>Bedrooms: {selectedCard.bedrooms}</h4>
            <h4>Location: {selectedCard.location}</h4>
            <h4>Post Code: {selectedCard.postcode}</h4>
            <h4>Description: {selectedCard.description}</h4>
            <button onClick={closeModal} className="closebtn">
              Close
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default CardModal;