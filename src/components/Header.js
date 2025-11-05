import React, { useContext } from "react";
import { Link } from "react-router";
import Context from "../utils/Context";

export default function Header() {
  console.log("Header rendered");

  let isLoggedInWithJS = false;

  const [isLoggedInWithReact, setIsLoggedInWithReact] = React.useState(false);

  /*
  When using a regular JavaScript variable (like isLoggedInWithJS), even though the value changes
  and is visible in the console.log, the UI doesn't update to reflect these changes. This is because
  React needs its special state management system to track and render UI updates.

  By using React's useState hook (like isLoggedInWithReact), React can:
  1. Detect state changes
  2. Create a new Virtual DOM with the updated values
  3. Compare this new Virtual DOM with the previous version
  4. Efficiently update only the specific parts of the actual DOM that have changed

  This is why React state is essential for creating dynamic, reactive user interfaces.
  */

  /** 
   SPA navigation using Link component from react-router
   Link component prevents full page reload and only updates the necessary parts of the page
   1. When a user clicks on a Link, React Router intercepts the click event.
   2. It prevents the default browser behavior of making a new HTTP request to the server.
   3. Instead, React Router updates the URL in the browser's address bar using the History API.
   4. React Router then determines which component(s) need to be rendered based on the new URL.
   5. Only the components that correspond to the new route are re-rendered, while the rest of the page remains unchanged.
   6. This results in a faster and smoother user experience, as there is no full page reload.
   */

  /**
   * useContext hook used to get the context value
   */
  const UseContext = useContext(Context);

  return (
    <div className="flex justify-between p-4 bg-gray-200 lg:bg-indigo-200">
      <div>Logo</div>
      <ul className="flex">
        <li className="px-4">
          <Link to="/">Home</Link>
        </li>
        <li className="px-4">
          <Link to="/about">About</Link>
        </li>
        <li className="px-4">
          <a href="/contact">Contact</a>
        </li>
      </ul>
      <div>
        {UseContext?.userName}
        <button
          className="bg-blue-500 p-2 text-white rounded-md hover:bg-amber-600"
          onClick={() => {
            isLoggedInWithJS = !isLoggedInWithJS;
            setIsLoggedInWithReact(!isLoggedInWithReact);
            console.log(
              "isLoggedInWithJS: ",
              isLoggedInWithJS,
              "isLoggedInWithReact: ",
              isLoggedInWithReact
            );
          }}
        >
          {isLoggedInWithReact ? "Logout" : "Login"}
          {isLoggedInWithJS ? " LogoutJS" : " LoginJS"}
        </button>
      </div>
    </div>
  );
}
