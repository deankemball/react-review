import React, { Component } from "react";
import Button from "../components/Button";

const Alert1 = () => {
  alert("You clicked the first button.");
};
const Alert2 = () => {
  alert("You clicked the second button.");
};
const Alert3 = () => {
  alert("You clicked the third button.");
};

const ExerciseTwo = () => {
  return (
    <>
      <Button onClick={Alert1} content={"Try clicking."} type={"button"} />
      <Button onClick={Alert2} content={"Try clicking."} type={"button"} />
      <Button onClick={Alert3} content={"Try clicking."} type={"button"} />
    </>
  );
};

export default ExerciseTwo;
