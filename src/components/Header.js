import React from "react";

export default function Header() {
  console.log("Header rendered");

  let isLoggedInWithJS = false;

  const [isLoggedInWithReact, setIsLoggedInWithReact] = React.useState(false);

  const handleAuthClick = () => {
    setIsLoggedInWithReact(!isLoggedIn);
  };

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

  return (
    <div className="header">
      <div>Logo</div>
      <ul>
        <li>Home</li>
        <li>About</li>
      </ul>
      <button
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
  );
}
