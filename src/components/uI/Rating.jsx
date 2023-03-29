import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Rating = ({ rating }) => {
  return (
    <div className="book__ratings">
      {
        new Array(Math.floor(rating)).fill(0).map((_, index) => (
          <FontAwesomeIcon icon="star" key={index} />
        )) //Giving it a key of the index in the map and changed the element variable to an underscore to show were not using it
      }
      {
        Number.isInteger(rating) ? "" : <FontAwesomeIcon icon="star-half-alt" /> // this is the same: !Number.isInteger(book.rating) && <FontAwesomeIcon icon="star-half-alt"/> (if the first is true it renders nothing, if it is false it renders the 2nd)
      }
    </div>
  );
};

export default Rating;
