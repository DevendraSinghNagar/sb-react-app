import { useDispatch } from "react-redux";
import { addItem } from "../utils/cartSlice";
import { BASE_URL } from "../utils/constant";

const CardAccordianItem = (props) => {
  const { name, defaultPrice, description, imageId } = props;

  const dispatch = useDispatch();
  // console.log(itemCards);
  const handlerItem = (item) => {
    dispatch(addItem(item));
  };

  return (
    // itemCards &&
    // itemCards?.length > 0 &&
    // itemCards.map((item, index) => (
    <div
      // key={item.card.info.id + index}
      className="border-b p-2 last:border-0 items-center flex flex-row justify-between"
    >
      <div className="w-10/12 mr-2">
        <h2 className="text-3xl">{name}</h2>
        <p className="ml-auto font-bold">₹ {defaultPrice / 100}</p>
        <p className="ml-4">{description}</p>
      </div>
      <div className="w-2/12 flex justify-center">
        <button
          className="bg-yellow-500 rounded text-white p-2 absolute mt-2 ml-2  cursor-pointer"
          onClick={() => handlerItem(props)}
        >
          Add
        </button>
        <img
          src={BASE_URL + "swiggy/image/upload/" + imageId}
          alt={name}
          className="w-32 h-32 object-cover mt-2 rounded"
        />
      </div>
    </div>
    // ))
  );
};

export default CardAccordianItem;
