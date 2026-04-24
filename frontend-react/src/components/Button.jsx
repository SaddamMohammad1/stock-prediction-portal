import React from 'react'

function Button({ text, customClass }) {
  return (
    <>
        <a className={`btn ${customClass}`} href=''>{text}</a>
    </>
  )
}

export default Button