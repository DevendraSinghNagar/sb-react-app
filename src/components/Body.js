import React from "react";
import CardComponent from "./Card";
import CardSKeleton from "./CardSKeleton";

const Body = () => {
  console.log("Body Rendered");
  const [data, setData] = React.useState([]);
  const [filterData, setFilterData] = React.useState([]);
  const [search, setSearch] = React.useState("");
  const handleChange = (e) => {
    setSearch(e.target.value);
  };
  const handleSearch = () => {
    const filteredData = data.filter((card) =>
      card.action.text.toLowerCase().includes(search.toLowerCase())
    );
    setFilterData(filteredData);
  };

  /**
   * Using useEffect to fetch data when the component mounts
   * The empty dependency array ([]) ensures this effect runs only once after the initial render.
   * without defpendency array useEffect will run on every render.
   * with [search] as dependency useEffect will run on every render when search value changes.
   */
  React.useEffect(() => {
    console.log("useEffect called");
    getData();
  }, []);

  const getData = async () => {
    const fetchData = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9715987&lng=77.594566&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );
    const resData = await fetchData.json();
    console.log(resData?.data?.cards[0]?.card?.card?.imageGridCards?.info);
    setData(resData?.data?.cards[0]?.card?.card?.imageGridCards?.info);
    setFilterData(resData?.data?.cards[0]?.card?.card?.imageGridCards?.info);
  };

  if (data.length === 0) {
    // return <h2>Loading...</h2>;
    return (
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
    );
  }

  return (
    <>
      <header>
        <input type="text" value={search} onChange={handleChange} />
        <button onClick={handleSearch}>Search</button>
      </header>

      <div
        style={{ display: "flex", flexWrap: "wrap", justifyContent: "center" }}
      >
        <CardComponent cardData={filterData} />
      </div>
    </>
  );
};

export default Body;
