import React from "react";
import Link from "next/link";
import { IoChevronDownOutline } from "react-icons/io5";


const Category = () => {
  // Define an array to store category data (replace with your actual data)
  const categories = [
    {id:1, name: "Chocolates", image: "https://www.itcstore.in/_next/image?url=https%3A%2F%2Fadmin.itcstore.in%2Fmedia%2Fcatalog%2Fcategory%2Fdesert_1_1__1.png&w=1920&q=75" },
    {id:2, name: "Health Care", image: "https://www.itcstore.in/_next/image?url=https%3A%2F%2Fadmin.itcstore.in%2Fmedia%2Fcatalog%2Fcategory%2Fdesert_1_1__1.png&w=1920&q=75" },
    {id:3, name: "Health Care", image: "https://www.itcstore.in/_next/image?url=https%3A%2F%2Fadmin.itcstore.in%2Fmedia%2Fcatalog%2Fcategory%2Fdesert_1_1__1.png&w=1920&q=75" },
    {id:4, name: "Health Care", image: "https://www.itcstore.in/_next/image?url=https%3A%2F%2Fadmin.itcstore.in%2Fmedia%2Fcatalog%2Fcategory%2Fdesert_1_1__1.png&w=1920&q=75" },
    {id:5, name: "Health Care", image: "https://www.itcstore.in/_next/image?url=https%3A%2F%2Fadmin.itcstore.in%2Fmedia%2Fcatalog%2Fcategory%2Fdesert_1_1__1.png&w=1920&q=75" },
    {id:6, name: "Health Care", image: "https://www.itcstore.in/_next/image?url=https%3A%2F%2Fadmin.itcstore.in%2Fmedia%2Fcatalog%2Fcategory%2Fdesert_1_1__1.png&w=1920&q=75" },
    {id:7, name: "Health Care", image: "https://www.itcstore.in/_next/image?url=https%3A%2F%2Fadmin.itcstore.in%2Fmedia%2Fcatalog%2Fcategory%2Fdesert_1_1__1.png&w=1920&q=75" },
    
    // Add more categories as needed
  ];

  return (
    
    <div>
      <h1 className="text-4xl ml-36 mt-01 pb-4 font-semibold text-black">
        Category
      </h1>

      <div className="border border-gray-200 shadow-md max-w-[1600px] ml-36 h-66 flex flex-row">
        {categories.map((category) => (
          <div className="mb-4 cursor-pointer" key={category.name}>
            {/* Use the Link component from Next.js for dynamic routing */}
            <Link
              href={`/pages/dashboard/${encodeURIComponent(category.id)}`}
            >
              
                <img
                  src={category.image}
                  className="w-auto h-56 relative"
                  alt={category.name}
                />
                <p className="font-semibold text-center text-xl flex flex-row items-center ml-10">
                  {category.name} <IoChevronDownOutline className="pt-1 ml-1 w-6 h-8" />
                </p>
              
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Category;