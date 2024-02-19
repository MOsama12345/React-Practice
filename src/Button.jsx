import React from 'react'

export default function Button(props) {
const Counter = () =>{props.clickF(props.click+1)}
return (
    <button onClick={Counter}>{props.click} Clicks</button>
  )
}
