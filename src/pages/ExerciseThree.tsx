import React, { Component, useState } from "react";
import Button from "../components/Button";
import Info from "../components/Info";

const ExerciseThree = () => {
  const [count, setCount] = useState(0);
  return (
    <>
      <Button
        onClick={() => setCount(count + 1)}
        content={"Try clicking."}
        type={"button"}
      />
      <Info content={`${count.toString()} clicks.`} />
    </>
  );
};

export default ExerciseThree;
