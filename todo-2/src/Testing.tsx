import React, { useState } from "react";

const Testing = () => {
  const [isTrue, setIsTrue] = useState(true);

  function HandleShow() {
    setIsTrue((prev) => !prev);
  }
  return (
    <>
      <div>
        <div
          style={
            isTrue
              ? {
                  background: "red",
                  maxWidth: "100px",

                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }
              : { display: "none" }
          }
        >
          <span>Todo</span>
        </div>
        <button onClick={HandleShow}>Click me</button>
      </div>
    </>
  );
};

export default Testing;
