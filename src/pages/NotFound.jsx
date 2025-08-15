import React from "react";

const NotFound = () => {
  return (
    <div>
      <h1
        style={{
          fontSize: "44px",
          textAlign: "center",
          margin: "200px 200px 0 200px",
        }}
      >
        404 - Not Found
      </h1>
      <p
        style={{
          fontSize: "16px",
          textAlign: "center",
          margin: "0px 200px 200px 200px",
        }}
      >
        The page you are looking for does not exist.
      </p>
    </div>
  );
};

export default NotFound;
