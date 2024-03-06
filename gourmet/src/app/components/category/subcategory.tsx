"use client"
import React from "react";
import Navbar from "../navbar";
import Product from "../../context/dashboard/[name]/[product]/page";
import Link from "next/link";
import category from "./category";
import Products from "./products";
type propType = {
    id: String;
    name: String;
    image: String;
};

const Subcategory = (prop: propType) => {
  const subcategories = [
    {id:1,name:"Staples"},
    {id:2,name:"Chocolates"},
    {id:3,name:"Personal Care"},
    {id:4,name:"Frozen & Instant Food"},
    {id:5,name:"Biscuits & Cakes"},
    {id:6,name:"Snacks"},
    {id:7,name:"Dairy & Beverages"},
    
  
  
  ]


  const products = [
{id:1, name:"Dairy Milk",url:"https://images.unsplash.com/photo-1646753522408-077ef9839300?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwcm9maWxlLXBhZ2V8NjZ8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60",brand:"cadbury"},
{id:2, name:"Kitkat",url:"https://images.unsplash.com/photo-1651950537598-373e4358d320?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwcm9maWxlLXBhZ2V8MjV8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60",brand:"cadbury"},
{id:3, name:"5 Star",url:"https://images.unsplash.com/photo-1646753522408-077ef9839300?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwcm9maWxlLXBhZ2V8NjZ8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60",brand:"cadbury"},
{id:4, name:"Ferrero Rocher",url:"https://images.unsplash.com/photo-1646753522408-077ef9839300?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwcm9maWxlLXBhZ2V8NjZ8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60",brand:"cadbury"},
{id:5, name:"Snickers",url:"https://images.unsplash.com/photo-1646753522408-077ef9839300?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwcm9maWxlLXBhZ2V8NjZ8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60",brand:"cadbury"},
{id:6, name:"Perks",url:"https://images.unsplash.com/photo-1646753522408-077ef9839300?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwcm9maWxlLXBhZ2V8NjZ8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60",brand:"cadbury"},
{id:7, name:"Perks",url:"https://images.unsplash.com/photo-1646753522408-077ef9839300?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwcm9maWxlLXBhZ2V8NjZ8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60",brand:"cadbury"},

  ]



    return (


        <div>

            <Navbar /><div className="flex  ">





          <div
  className="relative flex h-[80vh] w-full max-w-[20rem] mt-10 ml-12 flex-col rounded-xl bg-white bg-clip-border border border-gray-100 py-4 text-gray-700 shadow-md shadow-blue-gray-900/5">
  <div className="-center text-center ">
    <h5 className="block font-sans text-3xl antialiased font-medium leading-snug tracking-normal text-blue-gray-900 ">
     {prop.name}
    </h5>
  </div>
  {
subcategories.map((subcategory)=>
(

  <nav className="flex min-w-[240px] flex-col  py-2 font-sans text-base font-normal text-blue-gray-700 ">
   <div role="button" key={subcategory.id}
      className="flex items-center w-full p-2 duration-300 hover:scale-x-105   leading-tight transition-all rounded-lg outline-none text-start hover:bg-sky-200 hover:bg-opacity-80 hover:text-blue-gray-900 hover:rounded-[8px]  text-xl ">   
      <div className="grid mr-4 place-items-center w-16  ">
        <img src="https://www.itcstore.in/_next/image?url=https%3A%2F%2Fadmin.itcstore.in%2Fmedia%2Fcatalog%2Fcategory%2Fatta_icon_1_new.png&w=256&q=75"></img>
      </div>
      {subcategory.name}
    </div> 



  </nav>
  ))}
</div>




      <div>  
         

        <section className="w-fit mx-auto grid grid-cols-1 lg:grid-cols-4 md:grid-cols-2 justify-items-center justify-center gap-y-20 gap-x-14 mt-10 mb-5  ml-20" >

      {
  products.map((product)=>(
       

          <div className="w-72 bg-white shadow-md rounded-xl duration-500 hover:scale-105 hover:shadow-xl" key={product.id}>
            <a href={`/pages/dashboard/chocolates/${product.name}`}>
              <img src={product.url} alt="Product" className="h-80 w-72 object-cover rounded-t-xl" />
              <div className="px-4 py-3 w-72">
                <span className="text-gray-400 mr-3 uppercase text-xs">Brand</span>
                <p className="text-lg font-bold text-black truncate block capitalize"> {product.name}</p>
                <div className="flex items-center">
                  <p className="text-lg font-semibold text-black cursor-auto my-3">$149</p>
                  <del>
                    <p className="text-sm text-gray-600 cursor-auto ml-2">$199</p>
                  </del>
                  <div className="ml-auto"><svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="bi bi-bag-plus" viewBox="0 0 16 16">
                    <path fill-rule="evenodd" d="M8 7.5a.5.5 0 0 1 .5.5v1.5H10a.5.5 0 0 1 0 1H8.5V12a.5.5 0 0 1-1 0v-1.5H6a.5.5 0 0 1 0-1h1.5V8a.5.5 0 0 1 .5-.5z" />
                    <path d="M8 1a2.5 2.5 0 0 1 2.5 2.5V4h-5v-.5A2.5 2.5 0 0 1 8 1zm3.5 3v-.5a3.5 3.5 0 1 0-7 0V4H1v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V4h-3.5zM2 5h12v9a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V5z" />
                  </svg></div>
                </div>
              </div>
            </a>
          
         
          
          </div>

          
          
))} 

        </section>
   </div> 
    </div>
        
        
        </div>
    );
};

export default Subcategory;
