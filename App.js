import React, { Suspense } from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router";
import Context from "./src/utils/Context";

import Header from "./src/components/Header";
import Body from "./src/components/Body";
// import About from "./src/components/About";
import Contact from "./src/components/ContactUs";
import Error from "./src/components/Error";
import CardDetail from "./src/components/CardDetail";

// 1 JavaScript code rendering
// const header = document.getElementById("header");
// const ele = document.createElement("h1");
// ele.innerHTML = "This is a JS header!";
// header.appendChild(ele);

// 2 React CreateElement with multiple children
const root = document.getElementById("root");
// const e = React.createElement("h2", { id: "h2" }, [
//   React.createElement("div", { id: "div1", key: "1" }, "This is a React Div1"),
//   React.createElement("div", { id: "div2", key: "2" }, "This is a React Div2"),
// ]);
// ReactDOM.createRoot(root).render(e);

// 3 React CreateElement
const createElement = React.createElement(
  "h2",
  { id: "h2" },
  "This is a React H2 element"
);
console.log(createElement);
// ReactDOM.createRoot(root).render(createElement);

/*
 JSX 
 Babel converts JSX to React.createElement(Object) calls behind the scenes
 Example: <h3>This is a JSX H3 element</h3> is converted to React.createElement("h3", null, "This is a JSX H3 element") 

 createRoot(root).render(JSX code) used to render JSX code to the DOM

 Who converts React.createElement into HTML tags?
 Babel converts jsx to React elements using React.createElement. 
 Then ReactDOM takes these React elements and converts them into HTML tags and renders them to the DOM. 
 React does the rendering process to produce a virtual dom, and then react does reconciliation to figure out what has changed.
 */
/*
  In JSX expressions({}) we can wrrite any JS code like variables, functions, objects, arrays, console.log etc.
  coponent composition:- one component can be used inside another component.
  render method take react element and if want to pass function component then need to wrap inside </>.
 */

// React CreateElement rendering
const jsxElement = <h3>This is a JSX element</h3>;
console.log(jsxElement);
// ReactDOM.createRoot(root).render(jsxElement);

// React Function Component rendering(All below 3 functional components are same)
function HeaderFunction() {
  return <h1 className="header">This is a React Function Component</h1>;
}
const HeaderArrow = () => {
  return <h1 className="header">This is a React Arrow Function Component</h1>;
};
const HeaderArrowWithoutReturn = () => <h1>Arrow Function without return</h1>;
const HeaderSimple = () => (
  <h1 className="header">This is a React Arrow Function Component</h1>
);

/**
 * Prop drilling in React refers to the process of passing data (props) from a parent component down through
 * multiple layers of intermediary components to a deeply nested child component that actually needs
 * that data. This means that components in the middle of the hierarchy might receive and forward props
 * that they themselves do not directly use or modify.
 *
 * Context.Provider: used to update the context value and pass the update value in child tree and
 * rest of the place value will be as per crateContext
 */
const AppLayout = () => (
  <div>
    <Header />
    <hr />
    <Context.Provider value={{ userName: "Shiv Baba" }}>
      <Outlet />
    </Context.Provider>
    <hr />
    {jsxElement}
    {console.log("Hello from JSX!")}
    <HeaderFunction />
    OR
    {HeaderFunction()}
    <HeaderArrow />
    <HeaderArrowWithoutReturn />
    <HeaderSimple />
  </div>
);

/**
 * Lazy loading a component / Code splitting using React.lazy and Suspense / Dynamic Import / On-demand loading / Deferred loading
 *  / Asynchronous loading / Chunking / Bundle splitting / Route-based code splitting / Component-level code splitting
 * Why lazy loading?
 * Reducing the initial load time of the application by loading components only when they are needed.
 * Improving performance by splitting the code into smaller chunks that can be loaded on demand.
 * Enhancing user experience by providing faster load times and reducing the amount of data that needs to be downloaded initially.
 * How lazy loading works?
 * React.lazy takes a function that must call a dynamic import().
 * It's created a separate chunk for the lazy component in the build process and loads it only when it is needed.
 * Suspense component is used to wrap the lazy component and provide a fallback UI while the lazy component is being loaded.
 */
const About = React.lazy(() => import("./src/components/About"));

const router = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    errorElement: <Error />,
    children: [
      {
        path: "/",
        element: <Body />,
      },
      {
        path: "/about",
        element: (
          <Suspense fallback={<h1>Loading...</h1>}>
            <About />
          </Suspense>
        ),
      },
      { path: "/card-detail/:id", element: <CardDetail /> },
      { path: "/contact", element: <Contact /> },
    ],
  },
]);

ReactDOM.createRoot(root).render(<RouterProvider router={router} />);
