import React from "react";
import { Link, useParams, useLocation } from "react-router";
import { detailedCardData } from "../utils/mockData";
import CardAccordian from "./CardAccordian";

/**
 * useParams hook to read dynamic URL parameters
 * useLocation hook to read current location object
 */

const CardDetail = () => {
  const param = useParams();
  console.log(param, param.id);
  const location = useLocation();
  console.log(location);

  /**
   * State liffting implementation to manage the collapsed state of multiple accordian components.
   * @state {number|null} currentIndex - The index of the currently expanded accordian component.
   * @function handleStateLiffting - A function to update the currentIndex state.
   * @param {number} index - The index of the accordian component to be expanded.
   * Explanation:
   * When an accordian header is clicked, it calls the stateLifftingFunction prop which triggers handleStateLiffting in this parent component.
   * stateLifftingFunction is passed as a prop to each CardAccordian component to allow them to lift their state to this parent component.
   */
  const [currentIndex, setCurrentIndex] = React.useState(null);
  const handleStateLiffting = (index) => {
    setCurrentIndex(index);
  };
  return (
    <div className="mx-6">
      <h1 className="my-4 text-3xl">Card Detail Component: {param.id}</h1>

      {detailedCardData.map((cardData, index) => (
        <CardAccordian
          key={cardData.card.card.categoryId}
          itemCards={cardData}
          collapsed={index === currentIndex ? true : false}
          stateLifftingFunction={() => handleStateLiffting(index)}
        />
      ))}

      <Link to="/">
        <button className="bg-blue-500 p-2 rounded my-4 text-white">
          Go Back to Home
        </button>
      </Link>
    </div>
  );
};

export default CardDetail;
