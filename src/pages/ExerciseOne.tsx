import React, { Component } from "react";
import Button from "../components/Button";

const dispAlert = () => {
  alert("You clicked the button.");
};

const ExerciseOne = () => {
  return (
    <Button onClick={dispAlert} content={"Try clicking."} type={"button"} />
  );
};

export default ExerciseOne;
