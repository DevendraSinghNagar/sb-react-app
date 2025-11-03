const CardComponent = (props) => {
  const { cardData } = props;

  return cardData.map((card) => (
    <div
      key={card.id}
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
      <h4>{card.action.text}</h4>
      <img
        src={"https://media-assets.swiggy.com/" + card.imageId}
        alt="Image"
      />
    </div>
  ));
};

export default CardComponent;
