import React from 'react'
// Function Components
export default function FuncComp(props:any) {
  return (
    <div>
      <h2>function component demo</h2>
      <hr />
      <p>My name is: {props.name}</p>
      <p>Company: {props.company}</p>
    </div>
  )
}
