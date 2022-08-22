import React from 'react'

function DetailBox(props) {
    console.log(props.logo)
  return (
    <div className='carousel-box'>
        {<props.logo/>}
   <h6>{props.title}</h6>
   <p>{props.detail}</p>
    </div>
  )
}

export default DetailBox