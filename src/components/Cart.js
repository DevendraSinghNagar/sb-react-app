import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router";
import CardAccordianItem from "./CardAccordianItem";
import withCart from "./withCard";
import { clearAll } from "../utils/cartSlice";

const Cart = () => {
  //   const getCartItems = useSelector((state) => state.cart.items);
  const getCartItems = useSelector((store) => store.cart.items);
  console.log(getCartItems);

  const CardWithRemove = withCart(CardAccordianItem);
  const dispatch = useDispatch();

  return getCartItems.length === 0 ? (
    <h1 className="flex justify-center my-5">
      Empty Cart{" "}
      <button className="text-amber-500 rounded mx-4 cursor-pointer">
        <Link to="/">Continue Shopping</Link>
      </button>
    </h1>
  ) : (
    <div className="w-6/12 mx-auto">
      <div className="text-center my-2">
        <h1 className="text-4xl">Shopping List</h1>
        <button
          className="bg-amber-500 p-2 rounded m-2 cursor-pointer"
          onClick={() => dispatch(clearAll())}
        >
          Remove All
        </button>
      </div>
      {getCartItems.map((item, index) => (
        //   <CardAccordianItem key={item.id + index} {...item} />
        <CardWithRemove key={item.id + index} {...item} />
      ))}
    </div>
  );
};

export default Cart;
