"use client";
import React, { useEffect, useState } from "react";
import Cookies from 'js-cookie';

import Logo from "../assets/logo.svg";
import Link from "next/link";
import axios from "axios";


export default function Login() {
  const [name, setname] = useState("");
  const [password, setpassword] = useState("");
  const [error, seterror] = useState("");

const base_url = process.env.BASE_URL;

const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const userData = {
      username: name,
      password: password
    };
  axios.post(`${base_url}/auth/login`, userData).then((response) => {
      console.log(response.status, response.data.token);
      Cookies.set('token', response.data.token, { expires: 7, secure: true });


    }).catch(function(error) {
      if(error.response.data == "USER_NOT_FOUND"){

        seterror("User not exist");
      }
      else if(error.response.data == "ERR_EMPTY_FIELD"){
        seterror("All fields required");
      }
      else if(error.response.data == "ERR_INVALID_PASSWORD")
      {
        seterror("Invalid Password");
      }
      else {
        seterror("error")
        console.log(error.response.data);
      }
  });
}
  return (
    <div className="relative flex flex-col justify-center min-h-screen overflow-hidden bg-gray-100">
      <div className="w-full p-6 m-auto bg-white rounded-md shadow-md lg:max-w-xl">
        <div className="flex items-center">
          <img src={Logo.src} alt="" className="mr-2" />
          <p className="text-4xl text-green-500  font-normal  mr-40">Gourmet</p>
          <h1 className="text-3xl font-normal text-center text-green-500 underline">
            Sign in
          </h1>
        </div>
        <form className="mt-6" onSubmit={handleSubmit}>
          <div className="mb-2">
            <label className="block text-sm font-semibold text-gray-800">
              Name
            </label>
            <input
              type="text"
              onChange={(e) => setname(e.target.value)}
              className="block w-full px-4 py-2 mt-2 text-green-500 bg-white border rounded-md focus:border-green-400 focus:ring-green-300 focus:outline-none focus:ring focus:ring-opacity-40"
            />
          </div>
          <div className="mb-2">
            <label className="block text-sm font-semibold text-gray-800">
              Password
            </label>
            <input
              type="password"
              onChange={(e) => setpassword(e.target.value)}
              className="block w-full px-4 py-2 mt-2 text-green-500 bg-white border rounded-md focus:border-green-400 focus:ring-green-300 focus:outline-none focus:ring focus:ring-opacity-40"
            />
          </div>

          {error && (
            <div className="bg-red-500 text-white w-fit text-sm py-1 px-3 rounded-md mt-2">
             {error}
            </div>
          )}

          <div className="mt-2">
            <Link href="#" className="text-xs text-green-600 hover:underline">
              Forget Password?
            </Link>
          </div>
          <div className="mt-4">
            <button
              onClick={handleSubmit}
              className="w-full px-4 py-2 tracking-wide text-white transition-colors duration-200 transform bg-green-500 rounded-md hover:bg-green-600 focus:outline-none focus:bg-green-600"
            >
              Login
            </button>
          </div>
        </form>

        <p className="mt-8 text-xs font-light text-center text-gray-700">
          {" "}
          Don't have an account?{" "}
          <Link
            href={"/context/signup"}
            className="font-medium text-green-600 hover:underline"
          >
            Sign up
          </Link>
        </p>
      </div>
    </div>
  );
}
