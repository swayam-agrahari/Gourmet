import React from 'react'

export default function Categories({params}:{
    params:{
        id:String;
    }
}) {
  return (
    <div>{params.id}</div>
  )
}
