import React from 'react'
import Input from './Input'
import Button from './Button'
import './RightSection.css'

const RightSection = () => {
  return (
    <div className="container"  >
        <Input type={"text"} placeholder={"Enter your email or phone number"}/>
        <Input type={"password"} placeholder={"Enter your password"}/>
        <Button text={"Log In"} width={"400px"} bg={"blue"}/>
        <a className="anchor" href="">forgotten password?</a>
        <hr className="hr" />
        <Button text={"Create a new account"} width={"200px"} bg={"green"}/>


    </div>
  )
}

export default RightSection