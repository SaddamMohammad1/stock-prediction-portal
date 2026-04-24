import React from 'react'
import Button from './Button'

function Main() {
  return (
    <>
        <div className='container'>
            <div className='p-5 text-center bg-light-dark rounded'>
              <h1 className='text-light'>Stock Prediction Portal</h1>
              <p className='text-light lead'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aliquam, explicabo nobis odio rerum ipsa, nostrum praesentium nemo repellat ducimus illo debitis voluptate, ipsum amet accusantium nam libero placeat aperiam dicta.</p>
              <Button text='Login' customClass='btn-outline-info'/>
            </div>
        </div>
    </>
  )
}

export default Main