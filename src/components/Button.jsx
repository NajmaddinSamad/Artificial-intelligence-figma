import React from 'react'

const Button = ({valueOfButton,nameOfClass, iconPhoto}) => {
  return (
    <button className={nameOfClass}  >{iconPhoto && <img src={iconPhoto}/>}{valueOfButton}</button>
  )
}

export default Button