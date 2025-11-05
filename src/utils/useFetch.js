import React from "react";

const useFetch = (url) => {
  const [data, setData] = React.useState(null);
  const [loading, setLoading] = React.useState(true);
  const [error, setError] = React.useState(null);
  //   const urlRef = React.useRef(url);
  /**
   * Using useEffect to fetch data when the component mounts
   * The empty dependency array ([]) ensures this effect runs only once after the initial render.
   * without defpendency array useEffect will run on every render.
   * with [search] as dependency useEffect will run on every render when search value changes.
   */

  React.useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const response = await fetch(url);
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        const result = await response.json();
        setData(result);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };
    console.log("data", data);
    fetchData();
  }, []); // Empty dependency array means it only runs once on mount

  return { data, loading, error };
};

export default useFetch;
