'use client';
import React, { useState,useEffect } from 'react'
import axios from "axios";

const FavComp = () => {

  const [image, setImage] = useState("");
  const[error, setError] = useState("")

useEffect(() => { 


axios.get("https://pokeapi.co/api/v2/pokemon/blastoise")
  .then(function (response) {
    const data = response;
    const image_url=data.data.sprites.front_default;
    console.log(data.data.sprites.front_default);
    image_url? setImage(image_url) :setError("no image");
  }
  
  
  ).catch(function(error){
    console.log(error)
    setError("errror")
  })
},[])

  return (
    <div>

    
    

    {image  && <img  src={image}/>? <img  src={image}/>:<p>{error}</p> }
    
    
    </div>
  )
}

export default FavComp
