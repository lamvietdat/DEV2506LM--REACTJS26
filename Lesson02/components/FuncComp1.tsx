import React from 'react'
// Function Components

type Props={
    name:string;
    company:string
}
export default function FuncComp1({name,company}:Props) {
  return (
    <div>
      <h2>function component demo</h2>
      <hr />
      <p>My name is: {name}</p>
      <p>Company: {company}</p>
    </div>
  )
}
