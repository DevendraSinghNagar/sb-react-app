import useOnline from "../utils/useOnline";

const Contact = () => {
  const isOnline = useOnline();
  console.log(isOnline);

  return (
    <div>
      <h1>Contact Us</h1>
      <p>Online: {isOnline ? "✅" : "❎"}</p>
    </div>
  );
};
export default Contact;
