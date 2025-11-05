import { Link } from "react-router";

const CardComponent = (props) => {
  const { card } = props;

  return (
    <div
      key={card.info.id}
      className="card"
      style={{
        display: "flex",
        textAlign: "center",
        margin: "10px",
        padding: "10px",
        border: "1px solid #ccc",
        justifyContent: "center",
        flexDirection: "column",
      }}
    >
      <h4>{card.info.name}</h4>
      <img
        className="w-50 h-50 mx-auto mb-2"
        src={"https://media-assets.swiggy.com/" + card.info.cloudinaryImageId}
        alt="Image"
      />
      <p>{card.info.locality}</p>
      <Link to={"/card-detail/" + card.info.id}>
        <button>View Details</button>
      </Link>
    </div>
  );
};

export default CardComponent;
