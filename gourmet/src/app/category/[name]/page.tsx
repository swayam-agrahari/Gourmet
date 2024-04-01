import Subcategory from '@/app/context/category/subcategory';
import React from 'react'

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
