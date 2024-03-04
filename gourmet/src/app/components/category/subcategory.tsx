"use client"
import React from "react";
import Navbar from "../navbar";
import Product from "../../pages/dashboard/[name]/[product]/page";
import Link from "next/link";
import category from "./category";
type propType = {
    id: String;
    name: String;
    image: String;
};

const Subcategory = (prop: propType) => {
  const products = [
{id:1, name:"Dairy Milk",url:"https://images.unsplash.com/photo-1646753522408-077ef9839300?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwcm9maWxlLXBhZ2V8NjZ8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60",brand:"cadbury"},
{id:2, name:"Kitkat",url:"https://images.unsplash.com/photo-1646753522408-077ef9839300?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwcm9maWxlLXBhZ2V8NjZ8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60",brand:"cadbury"},
{id:3, name:"5 Star",url:"https://images.unsplash.com/photo-1646753522408-077ef9839300?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwcm9maWxlLXBhZ2V8NjZ8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60",brand:"cadbury"},
{id:4, name:"Ferrero Rocher",url:"https://images.unsplash.com/photo-1646753522408-077ef9839300?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwcm9maWxlLXBhZ2V8NjZ8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60",brand:"cadbury"},
{id:5, name:"Snickers",url:"https://images.unsplash.com/photo-1646753522408-077ef9839300?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwcm9maWxlLXBhZ2V8NjZ8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60",brand:"cadbury"},
{id:6, name:"Perks",url:"https://images.unsplash.com/photo-1646753522408-077ef9839300?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwcm9maWxlLXBhZ2V8NjZ8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60",brand:"cadbury"},
{id:7, name:"Perks",url:"https://images.unsplash.com/photo-1646753522408-077ef9839300?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwcm9maWxlLXBhZ2V8NjZ8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60",brand:"cadbury"},

  ]



    return (


        <div>

            <Navbar /><div className="flex  ">


      <div className="">

        <aside className="w-64 ml-4" aria-label="Sidebar">
          <div className=" py-4 mt-10 overflow-y-auto rounded bg-gray-50 dark:bg-gray-800 shadow border border-gray-100 ">
            <ul className="space-y-">

              <li>
                <Link href={{
                  pathname: `/pages/dashboard/${encodeURIComponent(category.name).toLowerCase()}/${encodeURIComponent(category.name)}`
                }} className="flex items-center p-2 text-base font-normal text-gray-900 rounded-lg dark:text-white hover:bg-purple-400 dark:hover:bg-gray-700 hover:rounded-xl">
                  <img src="https://www.itcstore.in/_next/image?url=https%3A%2F%2Fadmin.itcstore.in%2Fmedia%2Fcatalog%2Fcategory%2Fatta_icon_1_new.png&w=96&q=75" />
                  <span className="flex-1 ml-3 whitespace-nowrap text-2xl">Staples</span>

                </Link>
              </li>

              <li>
                <a href="#" className="flex items-center p-2 text-base font-normal text-gray-900 rounded-lg dark:text-white hover:bg-purple-400 hover:rounded-xl dark:hover:bg-gray-700">
                  <img src="https://www.itcstore.in/_next/image?url=https%3A%2F%2Fadmin.itcstore.in%2Fmedia%2Fcatalog%2Fcategory%2Fatta_icon_1_new.png&w=96&q=75" />
                  <span className="flex-1 ml-3 whitespace-nowrap text-2xl">Staples</span>

                </a>
              </li>

              <li>
                <a href="#" className="flex items-center p-2 text-base font-normal text-gray-900 rounded-lg dark:text-white hover:bg-purple-400 hover:rounded-xl dark:hover:bg-gray-700">
                  <img src="https://www.itcstore.in/_next/image?url=https%3A%2F%2Fadmin.itcstore.in%2Fmedia%2Fcatalog%2Fcategory%2Fatta_icon_1_new.png&w=96&q=75" />
                  <span className="flex-1 ml-3 whitespace-nowrap text-2xl">Staples</span>

                </a>
              </li>

              <li>
                <a href="#" className="flex items-center p-2 text-base font-normal text-gray-900 rounded-lg dark:text-white hover:bg-purple-400 hover:rounded-xl dark:hover:bg-gray-700">
                  <img src="https://www.itcstore.in/_next/image?url=https%3A%2F%2Fadmin.itcstore.in%2Fmedia%2Fcatalog%2Fcategory%2Fatta_icon_1_new.png&w=96&q=75" />
                  <span className="flex-1 ml-3 whitespace-nowrap text-2xl">Staples</span>

                </a>
              </li>

              <li>
                <a href="#" className="flex items-center p-2 text-base font-normal text-gray-900 rounded-lg dark:text-white hover:bg-purple-400 hover:rounded-xl dark:hover:bg-gray-700">
                  <img src="https://www.itcstore.in/_next/image?url=https%3A%2F%2Fadmin.itcstore.in%2Fmedia%2Fcatalog%2Fcategory%2Fatta_icon_1_new.png&w=96&q=75" />
                  <span className="flex-1 ml-3 whitespace-nowrap text-2xl">Staples</span>

                </a>
              </li>

              <li>
                <a href="#" className="flex items-center p-2 text-base font-normal text-gray-900 rounded-lg dark:text-white hover:bg-purple-400 hover:rounded-xl dark:hover:bg-gray-700">
                  <img src="https://www.itcstore.in/_next/image?url=https%3A%2F%2Fadmin.itcstore.in%2Fmedia%2Fcatalog%2Fcategory%2Fatta_icon_1_new.png&w=96&q=75" />
                  <span className="flex-1 ml-3 whitespace-nowrap text-2xl">Staples</span>

                </a>
              </li>
              <li>
                <a href="#" className="flex items-center p-2 text-base font-normal text-gray-900 rounded-lg dark:text-white hover:bg-purple-400 hover:rounded-xl dark:hover:bg-gray-700">
                  <img src="https://www.itcstore.in/_next/image?url=https%3A%2F%2Fadmin.itcstore.in%2Fmedia%2Fcatalog%2Fcategory%2Fatta_icon_1_new.png&w=96&q=75" />
                  <span className="flex-1 ml-3 whitespace-nowrap text-2xl">Staples</span>

                </a>
              </li>

            </ul>
          </div>
        </aside>
      </div>
      <div>  
         

        <section className="w-fit mx-auto grid grid-cols-1 lg:grid-cols-4 md:grid-cols-2 justify-items-center justify-center gap-y-20 gap-x-14 mt-10 mb-5  ml-20" >

      {
  products.map((product)=>(
       

          <div className="w-72 bg-white shadow-md rounded-xl duration-500 hover:scale-105 hover:shadow-xl" key={product.id}>
            <a href="#">
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
