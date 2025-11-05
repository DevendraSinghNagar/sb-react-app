import { Link, useParams, useLocation } from "react-router";
import useFetch from "../utils/useFetch";
import { useEffect } from "react";

/**
 * useParams hook to read dynamic URL parameters
 * useLocation hook to read current location object
 */

const CardDetail = () => {
  const param = useParams();
  console.log(param, param.id);

  const location = useLocation();
  console.log(location);

  const { data, loading, error } = useFetch(
    `https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=26.8036533&lng=75.8084579&restaurantId=${param.id}&catalog_qa=undefined&submitAction=ENTER`
  );
  console.log("getResDetail", data);

  return (
    <div>
      <h1>Card Detail Component: {param.id}</h1>
      <Link to="/">Go Back to Home</Link>
    </div>
  );
};

export default CardDetail;
