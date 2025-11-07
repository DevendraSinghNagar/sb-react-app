import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./cartSlice";

/**
 * 1 Create store file and configureStore
 * 2 Create slice file and createSlice
 * 3 createSlice file contains reducers method.
 * 4 reducers have action object, and every action have callback function, which take state and action(payload)
 * 5 useSelector used to get the data from store.
 * 6 useDispatch used to disptch action on event.
 * 7 Print the value statte in reducer use current function
 */
const reduxToolkitStore = configureStore({
  reducer: { cart: cartReducer },
});

export default reduxToolkitStore;
