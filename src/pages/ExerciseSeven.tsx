import { info } from "autoprefixer";
import React, { Component, useState, FormEvent } from "react";
import Button from "../components/Button";
import Info from "../components/Info";

const ExerciseSeven = () => {
  const jokes = [
    {
      id: "1",
      setup: "What's the best thing about a Boolean?",
      punchline: "Even if you're wrong, you're only off by a bit",
    },
    {
      id: "2",
      setup: "Why do programmers wear glasses?",
      punchline: "Because they need to C#",
    },
  ];

  const [show, setShow] = useState(false);

  return jokes.map((joke) => (
    <>
      <div className="flex w-auto gap-2">
        <Info content={joke.setup} />
        <Button
          type="button"
          content="punchline"
          onClick={() => setShow((currentShow) => !currentShow)}
        />
      </div>
      {show ? <Info content={joke.punchline} /> : null}
    </>
  ));
};

export default ExerciseSeven;
