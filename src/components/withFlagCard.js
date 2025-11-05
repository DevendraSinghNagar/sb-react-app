/**
 *
 * HOC: Higher Order Component
 * A function that takes a component as an argument and returns a new component
 * Enhances the original component with additional functionality or UI elements
 */

const withFlagCard = (CardComponent) => {
  return (props) => {
    return (
      <div className="relative">
        <h2 className="absolute bg-black text-white rounded-sm p-2 left-2 top-2">
          Veg
        </h2>
        <CardComponent {...props} />
      </div>
    );
  };
};

export default withFlagCard;
