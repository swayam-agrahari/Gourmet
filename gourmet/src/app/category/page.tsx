import React from 'react'

import Subcategory from '../context/category/subcategory'
export default function Categories({params}:{
  params:{
      id:String;
      name:String;
    image:String;

  }
}) {
return (
  <div>
  <Subcategory id={params.id} name={params.name} image={params.image}/>

  </div>
)
}