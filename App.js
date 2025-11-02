// Your JavaScript code goes here
const header = document.getElementById("header");
const ele = document.createElement("h1");
ele.innerHTML = "This is a JS header!";
header.appendChild(ele);
// React code can be added here in the future
const root = document.getElementById("root");
const e = React.createElement("h2", { id: "h2" }, [
  React.createElement("div", { id: "div1" }, "This is a React Div1"),
  React.createElement("div", { id: "div2" }, "This is a React Div2"),
]);
ReactDOM.createRoot(root).render(e);
