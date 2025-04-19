"use client";

import axios from "axios";
import { useState } from "react";

export default function signup() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  return (
    <div className="w-screen h-screen flex justify-center items-center">
      <div className="border p-2">
        <input
          type="text"
          onChange={(e) => {
            setUsername(e.target.value);
          }}
          placeholder="username"
        ></input>
        <input
          type="text"
          placeholder="password"
          onChange={(e) => {
            setPassword(e.target.value);
          }}
        ></input>
        <button
          onClick={() => {
            axios.post("http://localhost:3000/api/v1/signup", {
              username,
              password,
            });
          }}
        >
          signup
        </button>
      </div>
    </div>
  );
}
