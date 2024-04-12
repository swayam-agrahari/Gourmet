"use client"
import Link from 'next/link';
import React,{useState,useEffect} from 'react';
import data from '../../utils/data'




interface CategoryProps {
  params: {
    slug: string;
  };
}

interface Product{
  id:number;
  name:string;
  image:string;
  description:string
}
const Categories: React.FC<CategoryProps> = ({ params }) => {

  const { slug } = params;
  const [categoryName , setCategoryName] = useState("");
  const [productDetails, setProductDetails] = useState<Product[]>([]);

  const getCategoryNames =(data:any)=>{
    const uniqueCategories = [...new  Set(data.map((category:any) => category.name
    ))];
    return uniqueCategories
  }
  const categoryNames = getCategoryNames(data);
  



  const getSubcategoryNames = (data: any,property:String): string[] => {
    const subcategoryNames: string[] = [];

    // Iterate through each category in the data
    data.forEach((category: any) => {
        // Iterate through each subcategory in the current category
        if(category.name === property){
        category.subcategories.forEach((subcategory: any) => {
            // Push the name of the subcategory into the array
            subcategoryNames.push(subcategory.name);
        });
   } });

    // Use Set to remove duplicates, then convert it back to an array
    const uniqueSubcategoryNames = [...new Set(subcategoryNames)];
    return uniqueSubcategoryNames;
}
const subcategoryNames = getSubcategoryNames(data,slug);



const getProductDetails = (data: any, categoryName: string): Product[] => {
    const products: Product[] = [];
    data.forEach((category: any) => {
        category.subcategories.forEach((subcategory: any) => {
            if (subcategory.name === categoryName) {
                products.push(...subcategory.products);
            }
        });
    });
    return products;
}

useEffect(() => {
  // Get the subcategory names for the current slug
  const subcategoryNames = getSubcategoryNames(data, slug);
  // Set the first subcategory name as the initial category name
  setCategoryName(subcategoryNames[0]);
}, [slug]);



const productDetail = getProductDetails(data, categoryName);



  return (
    <div className='parent md:h-screen md:grid md:grid-cols-6'>
      <div className='sidebar md:col-span-1'>
      <div className="relative flex h-[80vh] w-full max-w-[20rem] mt-10 ml-12 flex-col rounded-xl bg-white bg-clip-border border border-gray-100 py-4 text-gray-700 shadow-md shadow-blue-gray-900/5">
        <div className="-center text-center ">
          <h5 className="block font-sans text-3xl antialiased font-medium leading-snug tracking-normal text-blue-gray-900 ">
            {slug}
          </h5>
        </div>
        { 
          subcategoryNames.map((subcategory:any) => (
            <button onClick={()=>{setCategoryName(subcategory)}} >
            <nav key={subcategory} className="flex min-w-[240px] flex-col  py-2 font-sans text-base font-normal text-blue-gray-700 ">
              <div role="button" className="flex items-center w-full p-2 duration-300 hover:scale-x-105   leading-tight transition-all rounded-lg outline-none text-start hover:bg-sky-200 hover:bg-opacity-80 hover:text-blue-gray-900 hover:rounded-[8px]  text-xl hover:overflow-hidden">
                <div className="grid mr-4 place-items-center w-16">
                  <img src="https://www.itcstore.in/_next/image?url=https%3A%2F%2Fadmin.itcstore.in%2Fmedia%2Fcatalog%2Fcategory%2Fatta_icon_1_new.png&w=256&q=75" alt="subcategory-icon" />
                </div>
                
                {subcategory}
                
              </div>
            </nav>
           
            </button>
          ))
        }
      </div>


      </div>

      <div className='main  md:col-span-5'>
          <section className="w-fit mx-auto grid grid-cols-1 lg:grid-cols-4 md:grid-cols-2 justify-items-center justify-center gap-y-20 gap-x-14 mt-10 mb-5  ml-20" >
    {
      productDetail.map((product:any) => (

<Link href={`/category/${slug}/${product.name.toLowerCase()}`}>
        <div className="w-72 bg-white shadow-md rounded-xl duration-500 hover:scale-105 hover:shadow-xl  " key={product.name}>
          
            <img src={product.image} alt="Product" className="h-80 w-72 object-cover rounded-t-xl" />
            <div className="px-4 py-3 w-72">
              <span className="text-gray-400 mr-3 uppercase text-xs">{product.description}</span>
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
        </div>
        </Link>
      ))}
          </section>
      </div>
    </div>
  );
};

export default Categories;
