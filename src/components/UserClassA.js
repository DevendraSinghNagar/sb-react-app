import React from "react";

export class UserClassA extends React.Component {
  constructor(props) {
    super(props);
    console.log("Child UserClass A  Constructor");
  }

  componentDidMount() {
    console.log("Child UserClass A   Mounted");
  }
  componentDidUpdate() {
    console.log("Child UserClass A   Updated");
  }
  componentWillUnmount() {
    console.log("Child UserClass A   Unmounted");
  }

  render() {
    console.log("Child UserClass A   Render");
    return (
      Object.keys(this.props).length > 0 && (
        <div className="p-2 border border-blue-500 m-2">
          <img
            src={this.props.image}
            alt="user-image"
            className="w-[100%] h-auto"
          />
          <p className="font-bold">
            {this.props.firstName + this.props.lastName}
          </p>
          <p>{this.props.gender}</p>
          <p>{this.props.email}</p>
        </div>
      )
    );
  }
}
