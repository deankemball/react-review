import { info } from "autoprefixer";
import React, { Component, useState } from "react";
import Button from "../components/Button";
import Info from "../components/Info";

const ExerciseFive = () => {
  const animals = [
    ["dog", "🐕"],
    ["cat", "🐈‍⬛"],
    ["chicken", "🐓"],
    ["cow", "🐄"],
    ["sheep", "🐑"],
    ["horse", "🐎"],
  ];

  return (
    <>
      {animals.map((animal) => (
        <Info
          content={`${animal[1]} ${animal[1]} ${animal[1]} ${animal[0]} ${animal[1]} ${animal[1]} ${animal[1]}`}
        />
      ))}
    </>
  );
};

export default ExerciseFive;
