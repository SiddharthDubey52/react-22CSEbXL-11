import React from 'react'

const Child = ({name , age}) => {
    // console.log(props)
    // let {name , age} = props
  return (
    <div>
       <h1>{name}</h1>
       <h2>{age}</h2>
    </div>
  )
}

export default Child