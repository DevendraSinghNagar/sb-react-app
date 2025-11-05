import CardAccordianItem from "./CardAccordianItem";

/**
 *
 * State liffting is the process of moving state from a child component to a common parent component in order to
 * share that state between multiple child components.
 * @param {Object} itemCards - The item cards data to be displayed in the accordian.
 * @param {boolean} collapsed - A boolean indicating whether the accordian is collapsed or expanded.
 * @param {Function} stateLifftingFunction - A function to lift the state to the parent component.
 */

const CardAccordian = ({ itemCards, collapsed, stateLifftingFunction }) => {
  const hadlerAccordian = () => {
    console.log("Accordian clicked", collapsed);
    stateLifftingFunction();
  };

  return (
    <article
      key={itemCards.card.card.categoryId}
      className="shadow border rounded p-2 mb-8"
    >
      <h2 className="font-bold mx-2 pb-2" onClick={hadlerAccordian}>
        {itemCards.card.card.title}
      </h2>
      {collapsed && (
        <CardAccordianItem itemCards={itemCards.card.card.itemCards} />
      )}
    </article>
  );
};

export default CardAccordian;
