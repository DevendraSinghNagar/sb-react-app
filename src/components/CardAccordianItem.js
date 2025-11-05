import { BASE_URL } from "../utils/constant";

const CardDetailItem = ({ itemCards }) => {
  // console.log(itemCards);

  return (
    itemCards &&
    itemCards?.length > 0 &&
    itemCards.map((item) => (
      <div
        key={item.card.info.id}
        className="border-b p-2 last:border-0 items-center flex flex-row justify-between"
      >
        <div className="">
          <h2 className="text-3xl">{item.card.info.name}</h2>
          <p className="ml-auto font-bold">
            ₹ {item.card.info.defaultPrice / 100}
          </p>
          <p className="ml-4">{item.card.info.description}</p>
        </div>
        <div className="">
          <img
            src={BASE_URL + "swiggy/image/upload/" + item.card.info.imageId}
            alt={item.card.info.name}
            className="w-32 h-32 object-cover mt-2 rounded"
          />
        </div>
      </div>
    ))
  );
};

export default CardDetailItem;
