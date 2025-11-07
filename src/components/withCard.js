import { useDispatch } from "react-redux";
import { removeItem } from "../utils/cartSlice";

const withCart = (CardAccordianItem) => {
  const dispatch = useDispatch();
  const handleRemove = (id) => {
    console.log(id);

    dispatch(removeItem(id));
  };

  return (props) => {
    return (
      <div className="flex items-center">
        <div className="w-3/4">
          <CardAccordianItem {...props} />
        </div>
        <div className="w-1/4">
          <button
            onClick={() => handleRemove(props.id)}
            className="bg-red-500 p-2 rounded  cursor-pointer"
          >
            Remove
          </button>
        </div>
      </div>
    );
  };
};

export default withCart;
