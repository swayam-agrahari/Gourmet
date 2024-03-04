import React from "react";

export default function Products({ params }:
   { params: { name: string,
   } }) {
  return <div>{params.name}</div>;
}
