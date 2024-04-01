'use client';
import React,{useState,useEffect} from "react";
import Logo from "../assets/logo.svg";
import Link from "next/link";
import axios from "axios";
import router from "next/router";

export default function Signup() {
    const [name, setname] = useState("");
    const [password, setpassword] = useState(""); 
    const [con_pass,setcon_pass] = useState("");
    const [email, setemail] = useState("");
    const [error, seterror] = useState("");

    const base_url = process.env.BASE_URL;

    const handleSubmit = async (e: React.FormEvent) => {
      e.preventDefault();
      try {
        const response = await axios.post(
          'https://5f4d-2409-40f3-1006-2eee-54cd-2a0a-fa15-131.ngrok-free.app/auth/signup',
          JSON.stringify({username:name,email:email,password:password}),
        {
          headers:{'Content-Type':'application/json'},
        }
        );
        console.log("signup success",response.data)
        router.push("/")
        setname('');
        setpassword('');
        setcon_pass('');
        setemail('');
        
      } catch (error:any) {
        console.log("ERROR",error)
      }
      if(!name || !email || !password || !con_pass){
        seterror("All feilds are necessary");
        return;
      }
      else if(password !== con_pass){
        seterror("Enter same password");
        return;
      }
    };
    useEffect(() => {
      seterror('');
    },[name,password,email,con_pass])

  return (
    <div className="relative flex flex-col justify-center min-h-screen overflow-hidden bg-gray-100">
      <div className="w-full p-6 m-auto bg-white rounded-md shadow-md lg:max-w-xl">
        <div className="flex items-center">
          <img src={Logo.src} alt="" className="mr-2" />
          <p className="text-4xl text-green-500  font-normal  mr-40">Gourmet</p>
          <h1 className="text-3xl font-normal text-center text-green-500 underline">
            Sign Up
          </h1>
        </div>
        <form onSubmit={handleSubmit} className="mt-6">
          {/* name field */}
        <div className="mb-2">
            <label className="block text-sm font-semibold text-gray-800">
              Name
            </label>
            <input
              type="text" onChange={(e) => setname(e.target.value)}
              className="block w-full px-4 py-2 mt-2 text-green-500 bg-white border rounded-md focus:border-green-400 focus:ring-green-300 focus:outline-none focus:ring focus:ring-opacity-40"
            />
          </div>

          {/* mail field */}
          <div className="mb-2">
            <label className="block text-sm font-semibold text-gray-800">
              Email
            </label>
            <input onChange={(e) => setemail(e.target.value)}
              type="email"
              className="block w-full px-4 py-2 mt-2 text-green-500 bg-white border rounded-md focus:border-green-400 focus:ring-green-300 focus:outline-none focus:ring focus:ring-opacity-40"
            />
          </div>

          <div className="mb-2">
            <label className="block text-sm font-semibold text-gray-800">
              Password
            </label>
            <input onChange={(e) => setpassword(e.target.value)}
              type="password"
              className="block w-full px-4 py-2 mt-2 text-green-500 bg-white border rounded-md focus:border-green-400 focus:ring-green-300 focus:outline-none focus:ring focus:ring-opacity-40"
            />
          </div>

          <div className="mb-2">
            <label className="block text-sm font-semibold text-gray-800">
              Confirm Password
            </label>
            <input onChange={(e) => setcon_pass(e.target.value)}
              type="password" placeholder="password"
              className="block w-full px-4 py-2 mt-2 text-green-500 bg-white border rounded-md focus:border-green-400 focus:ring-green-300 focus:outline-none focus:ring focus:ring-opacity-40"
            />
          </div>


          {error && (<div className="bg-red-500 text-white w-fit text-sm py-1 px-3 rounded-md mt-2">
            {error}
          </div>)}

          
          <div className="mt-6">
            <button className="w-full px-4 py-2 tracking-wide text-white transition-colors duration-200 transform bg-green-500 rounded-md hover:bg-green-600 focus:outline-none focus:bg-green-600">
              Sign up
            </button>
          </div>
        </form>

        <p className="mt-8 text-xs font-light text-center text-gray-700">
          {" "}
          Already have an account?{" "}
          <Link href={"/"} className="font-medium text-green-600 hover:underline">
            Login
          </Link>
        </p>
      </div>
    </div>
  );
}
