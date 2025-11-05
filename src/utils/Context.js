import { createContext } from "react";

/**
 * createContext in React is a function used to create a Context object. This object allows you to pass data through the component tree without having to manually pass props down at every level.
 */

const Context = createContext({
  userName: "Devendra Singh",
  theme: "light",

  //   getUser: () => {
  //     // Placeholder function to get user information
  //     return { id: 1, name: "John Doe" };
  //   },
  //   setUser: (user) => {
  //     // Placeholder function to set user information
  //     console.log("User set to:", user);
  //   },
  //   clearUser: () => {
  //     // Placeholder function to clear user information
  //     console.log("User cleared");
  //   },
});

export default Context;
