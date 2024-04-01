import React from "react";
interface ProductProps {
  params: {
    slug: string;
    subslug: string;
    productslug: string;
  };
}

const Product: React.FC<ProductProps> = ({ params }) => {
  const { slug, subslug, productslug } = params;
  const category = slug;
  const subcategory = subslug;
  const product = productslug;
  return(
  <div>
    <h1>Category: {category}</h1>
    <h2>Subcategory: {subcategory}</h2>
    <h3>Product: {product}</h3>
    <p>Here you can display the description of the selected product.</p>
  </div>);
}
export default Product;