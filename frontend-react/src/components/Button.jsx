import React from 'react'
import { Link } from 'react-router-dom'

function Button({ text, customClass, url }) {
  return (
    <>
        <Link className={`btn ${customClass}`} to={url}>{text}</Link>
    </>
  )
}

export default Button