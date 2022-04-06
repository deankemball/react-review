import { info } from "autoprefixer";
import React, { Component, useState, FormEvent } from "react";
import Button from "../components/Button";
import Info from "../components/Info";

type FormState = {
  firstname: string;
  lastname: string;
};

const ExerciseSix = () => {
  const [formState, setFormState] = useState<FormState>({
    firstname: "",
    lastname: "",
  });

  function handleSubmit(event: FormEvent) {
    event.preventDefault(); // prevents the form from resetting
    setFormState({
      ...formState,
      firstname: formState.firstname.toLowerCase(),
      lastname: formState.lastname.toLowerCase(),
    });
    alert(`greetings, ${formState.firstname} ${formState.lastname}.`);
  }

  return (
    <>
      <div className="flex flex-col items-center justify-center space-y-2">
        <form onSubmit={handleSubmit} className="flex flex-col space-y-2">
          <input
            className="rounded-md px-2 py-1 text-xs"
            type="text"
            required
            value={formState.firstname}
            onChange={(event) =>
              setFormState({ ...formState, firstname: event.target.value })
            }
            placeholder="first name"
          />
          <input
            className="rounded-md px-2 py-1 text-xs"
            value={formState.lastname}
            type="text"
            required
            placeholder="last name"
            onChange={(event) =>
              setFormState({ ...formState, lastname: event.target.value })
            }
          />
          <Button content="submit" type="submit" />
        </form>
        <pre className="text-xs text-slate-50 opacity-75">
          {/* {JSON.stringify(formState, null, 2)} adds little preview*/}
        </pre>
      </div>
    </>
  );
};
export default ExerciseSix;
