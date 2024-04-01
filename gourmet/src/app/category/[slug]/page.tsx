import Link from 'next/link';
import React from 'react';

const subcategories = [
  { id: 1, name: "Staples" },
  { id: 2, name: "Chocolates" },
  { id: 3, name: "Personal Care" },
  { id: 4, name: "Frozen & Instant Food" },
  { id: 5, name: "Biscuits & Cakes" },
  { id: 6, name: "Snacks" },
  { id: 7, name: "Dairy & Beverages" },
];

interface Subcategory {
  id: number;
  name: string;
}

interface CategoryProps {
  params: {
    slug: string;
  };
}

const Categories: React.FC<CategoryProps> = ({ params }) => {
  const { slug } = params;

  return (
    <div>
      <div className="relative flex h-[80vh] w-full max-w-[20rem] mt-10 ml-12 flex-col rounded-xl bg-white bg-clip-border border border-gray-100 py-4 text-gray-700 shadow-md shadow-blue-gray-900/5">
        <div className="-center text-center ">
          <h5 className="block font-sans text-3xl antialiased font-medium leading-snug tracking-normal text-blue-gray-900 ">
            {slug}
          </h5>
        </div>
        {
          subcategories.map((subcategory: Subcategory) => (
            <Link href={`/category/${slug}/${subcategory.name.toLowerCase()}`}>
            <nav key={subcategory.id} className="flex min-w-[240px] flex-col  py-2 font-sans text-base font-normal text-blue-gray-700 ">
              <div role="button" className="flex items-center w-full p-2 duration-300 hover:scale-x-105   leading-tight transition-all rounded-lg outline-none text-start hover:bg-sky-200 hover:bg-opacity-80 hover:text-blue-gray-900 hover:rounded-[8px]  text-xl hover:overflow-hidden">
                <div className="grid mr-4 place-items-center w-16">
                  <img src="https://www.itcstore.in/_next/image?url=https%3A%2F%2Fadmin.itcstore.in%2Fmedia%2Fcatalog%2Fcategory%2Fatta_icon_1_new.png&w=256&q=75" alt="subcategory-icon" />
                </div>
                
                {subcategory.name}
                
              </div>
            </nav>
            </Link>
          ))
        }
      </div>
    </div>
  );
};

export default Categories;
