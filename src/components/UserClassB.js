import { Component } from "react";

class UserClassB extends Component {
  constructor(props) {
    super(props);
    console.log("Child UserClass B Constructor");
  }

  componentDidMount() {
    console.log("Child UserClass B  Mounted");
  }
  componentDidUpdate() {
    console.log("Child UserClass B  Updated");
  }
  componentWillUnmount() {
    console.log("Child UserClass B  Unmounted");
  }

  render() {
    console.log("Child UserClass B  Render");
    return (
      Object.keys(this.props?.userData).length > 0 && (
        <div className="p-2 border border-blue-500 m-2">
          <img
            src={this.props?.userData.image}
            alt="user-image"
            className="w-[100%] h-auto"
          />
          <p className="font-bold">
            {this.props?.userData.firstName + this.props?.userData.lastName}
          </p>
          <p>{this.props?.userData.gender}</p>
          <p>{this.props?.userData.email}</p>
        </div>
      )
    );
  }
}

export default UserClassB;
