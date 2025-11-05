import React, { useCallback } from "react";
import CardComponent from "./Card";
import CardSKeleton from "./CardSKeleton";
import useFetch from "../utils/useFetch";
import withFlagCard from "./withFlagCard";

const Body = () => {
  console.log("Body Rendered");
  const [filterData, setFilterData] = React.useState([]);
  const [search, setSearch] = React.useState("");

  const { data, loading, error } = useFetch(
    "https://www.swiggy.com/dapi/restaurants/list/v5?lat=26.8036533&lng=75.8084579&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
  );
  const restaurantData =
    data?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle.restaurants;
  console.log(restaurantData);

  React.useEffect(() => {
    if (restaurantData) {
      setFilterData(restaurantData);
    }
  }, [restaurantData]);

  /**
   * handleChange function updating the search state and rerendering the component and again
   */
  // const handleChange = (e) => {
  //   setSearch(e.target.value);
  // };

  /**
   * useRef to access the input value without rerendering the component on every keystroke
   */
  const searchRef = React.useRef();

  const handleSearch = () => {
    const filteredData = restaurantData.filter((card) =>
      // card.info.name.toLowerCase().includes(search.toLowerCase())
      card.info.name
        .toLowerCase()
        .includes(searchRef?.current?.value?.toLowerCase())
    );
    setFilterData(filteredData);
  };

  // if (data.length === 0) {
  //   // return <h2>Loading...</h2>;
  //   return (
  //     <div
  //       style={{ display: "flex", flexWrap: "wrap", justifyContent: "center" }}
  //     >
  //       <CardSKeleton />
  //       <CardSKeleton />
  //       <CardSKeleton />
  //       <CardSKeleton />
  //       <CardSKeleton />
  //       <CardSKeleton />
  //     </div>
  //   );
  // }

  // Enhance the Card component with the withName HOC
  const EnhancedCardComponent = withFlagCard(CardComponent);

  return (filterData && filterData?.length === 0) || loading ? (
    <div
      style={{ display: "flex", flexWrap: "wrap", justifyContent: "center" }}
    >
      <CardSKeleton />
      <CardSKeleton />
      <CardSKeleton />
      <CardSKeleton />
      <CardSKeleton />
      <CardSKeleton />
    </div>
  ) : (
    <>
      <header className="my-4">
        {/* <input type="text" value={search} onChange={handleChange} /> */}
        <input className="border " type="text" ref={searchRef} />
        <button
          className="bg-blue-500 text-white rounded-md p-2 hover:bg-amber-600"
          onClick={handleSearch}
        >
          Search
        </button>
      </header>

      <div
        style={{ display: "flex", flexWrap: "wrap", justifyContent: "center" }}
      >
        {filterData.map((card, index) =>
          index % 2 ? (
            <EnhancedCardComponent key={card.info.id} card={card} />
          ) : (
            <CardComponent key={card.info.id} card={card} />
          )
        )}
      </div>
    </>
  );
};

export default Body;
