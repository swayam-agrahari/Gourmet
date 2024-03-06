"use client"
import axios from 'axios';
import React, { useState, useEffect } from 'react';

interface Product {
  id: number;
  title: string;
  price:string;
  category:string;
  description:string;
  // Add other properties as needed
}

const Products: React.FC = () => {
  const [data, setData] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("https://fakestoreapi.com/products/category/jewelery");
        setData(response.data);
      } catch (error) {
        console.error("Error fetching data:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []); // Empty dependency array ensures that this effect runs only once, similar to componentDidMount

  return (
    <div>
      {loading ? (
        <p>Loading...</p>
      ) : (
        <ul>
          {data.map(product => (<div>
            <li key={product.id}>{product.title}</li>
            <li> {product.price}</li>
            <li>{product.category}</li>
            <li>{product.description}</li>
            
            
            </div>))}
        </ul>
      )}
    </div>
  );
};

export default Products;
