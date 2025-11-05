import React, { useEffect } from "react";

const UserFunction = (props) => {
  //   console.log("Child UserFunction Render", props);

  useEffect(() => {
    // console.log("Child UserFunction Mounted");
    return () => {
      //   console.log("Child UserFunction Unmounted");
    };
  }, []);

  return (
    Object.keys(props?.userData).length > 0 && (
      <div className="p-2 border border-blue-500 m-2">
        <img
          src={props.userData.image}
          alt="user-image"
          className="w-[100%] h-auto"
        />
        <p className="font-bold">
          {props.userData.firstName + props.userData.lastName}
        </p>
        <p>{props.userData.gender}</p>
        <p>{props.userData.email}</p>
      </div>
    )
  );
};

export default UserFunction;
