import { info } from "autoprefixer";
import React, { Component, useState, FormEvent, useEffect } from "react";
import Button from "../components/Button";
import Info from "../components/Info";
import axios from "axios";
import Users from "../components/Users";

type User = {
  address: {
    city: string;
  };
  avatar: string;
  employment: {
    title: string;
    key_skill: string;
  };
  first_name: string;
  gender: string;
  last_name: string;
};

const ExerciseEight = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [users, setUsers] = useState<User[]>([]);

  useEffect(() => {
    setIsLoading(true);
    axios
      .get("https://random-data-api.com/api/users/random_user?size=10")
      .then((res) => {
        console.log(res.data);
        setUsers(res.data);
        setIsLoading(false);
      });
  }, []);

  return users.map((user) => (
    <>
      <Users
        first_name={user.first_name}
        last_name={user.last_name}
        gender={user.gender}
        city={user.address.city}
        avatar={user.avatar}
        title={user.employment.title}
        key_skill={user.employment.key_skill}
      />
    </>
  ));
};

export default ExerciseEight;
