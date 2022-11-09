import React from 'react'

function Demo(props) {
    console.log("DEMO");
  return (
    <div >
        <button onClick={props.onClick}>Demo click</button>
        <div>{props.name}</div>
        <div>{props.age}</div>
    </div>
  )
}

export default React.memo(Demo);

