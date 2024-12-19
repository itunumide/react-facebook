import React from 'react'

const Input = ({type, placeholder}) => {
  return (
    <div style={{width:"100%"}}>
        <input type={type} style={{ width:"375px", padding:"12px",borderRadius:"5px", border: "0.5px solid black"}} placeholder={placeholder} />
    </div>
  )
}

export default Input