import { info } from "autoprefixer";
import React, { Component, useState } from "react";
import Button from "../components/Button";
import Info from "../components/Info";

const ExerciseFour = () => {
  const animals = ["dog", "cat", "chicken", "cow", "sheep", "horse"];

  return (
    <>
      {animals.map((animal) => (
        <Info content={animal} />
      ))}
    </>
  );
};

export default ExerciseFour;
