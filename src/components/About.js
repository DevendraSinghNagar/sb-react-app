import React from "react";
import { Link } from "react-router";
import { UserClassA } from "./UserClassA";
import UserClassB from "./UserClassB";
import UserFunction from "./UserFunction";

/**
 * About Component have three child components to demonstrate
 * 1. UserClassA - Class Component receiving props directly
 * 2. UserClassB - Class Component receiving props as an object
 * 3. UserFunction - Functional Component receiving props as an object
 * If we check console logs, we can see the order of lifecycle methods called
 * for parent and child components during constructor, render, mount, update and unmount phases.
 * About component - constructor -> render
 * UserClassA - constructor -> render
 * UserClassB - constructor -> render
 *
 * Mount Phase(React do batching of child components):
 * UserClassA - compnentDidMount
 * UserClassB - compnentDidMount
 * About - componentDidMount(if state update in About component)
 * UserClassA - render
 * UserClassB - render
 *
 * Update Phase(React do batching of child components):
 * UserClassA - componentDidUpdate
 * UserClassB - componentDidUpdate
 * About - componentDidUpdate
 *
 * Unmount Phase:
 * About - componentWillUnmount
 * UserClassA - componentWillUnmount
 * UserClassB - componentWillUnmount
 */

class About extends React.Component {
  constructor(props) {
    super(props);
    console.log("About Component constructor");
    this.state = {
      userData: {},
      error: null,
    };
  }

  componentDidMount() {
    console.log("About Component Mounted");

    fetch("https://dummyjson.com/user/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        username: "emilys",
        password: "emilyspass",
        expiresInMins: 30, // optional, defaults to 60
      }),
    })
      .then((res) => res.json())
      .then((data) => {
        // console.log("User Data Fetched:", data);
        this.setState({ userData: data });
      })
      .catch((error) => {
        console.error("Error fetching user data:", error);
        this.setState({ error: error.message });
      });
  }
  componentDidUpdate() {
    console.log("About Component Updated");
  }
  componentWillUnmount() {
    console.log("About Component Unmounted");
  }

  render() {
    return (
      <div className="my-4 flex flex-col items-center">
        <h1 className="text-3xl">About Us</h1>
        <div className="flex">
          <UserClassA {...(this.state?.userData || {})} />
          <UserClassB userData={this.state?.userData} />
          <UserFunction userData={this.state.userData} />
        </div>
        {this.state.error && (
          <p className="text-red-500">Error: {this.state?.error}</p>
        )}
        <Link to="/card-detail/123">useParam Hook</Link>
      </div>
    );
  }
}

export default About;
