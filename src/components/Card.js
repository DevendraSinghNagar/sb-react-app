import { Link } from "react-router";
import { BASE_URL } from "../utils/constant";

const CardComponent = (props) => {
  const { card } = props;

  return (
    <div
      data-testid="card"
      key={card.info.id}
      className="w-66"
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
        src={BASE_URL + card.info.cloudinaryImageId}
        alt="Image"
      />
      <p>{card.info.locality}</p>
      <p>Cuisines: {card.info.cuisines.join(", ")}</p>
      <Link to={"/card-detail/" + card.info.id}>
        <button className="bg-blue-500 text-white rounded-sm p-2 my-2">
          View Details
        </button>
      </Link>
    </div>
  );
};

export default CardComponent;
