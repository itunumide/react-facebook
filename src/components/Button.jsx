import React from 'react'

const Button = ({bg, text, width}) => {
  return (
    <div><button style={{backgroundColor:bg, color:"white", width:width,padding:"15px",borderRadius:"5px", border:"none",}}>{text}</button></div>
  )
}

export default Button