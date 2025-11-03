/*
    Shimmer UI for card component: it's a placeholder UI shown while the actual data is being loaded.
    This enhances user experience by indicating that content is loading.
*/

const CardSKeleton = () => {
  return (
    <div
      className="card"
      style={{
        display: "flex",
        textAlign: "center",
        margin: "10px",
        padding: "10px",
        border: "1px solid #ccc",
        justifyContent: "center",
        flexDirection: "column",
        width: "200px",
        height: "400px",
        backgroundColor: "#f0f0f0",
      }}
    >
      <h4></h4>
    </div>
  );
};

export default CardSKeleton;
