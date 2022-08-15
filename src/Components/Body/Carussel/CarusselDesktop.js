import React from 'react'
import Main from './../../../Images/image-product-1.jpg'
import Thumb1 from './../../../Images/image-product-1-thumbnail.jpg'
import Thumb2 from './../../../Images/image-product-2-thumbnail.jpg'
import Thumb3 from './../../../Images/image-product-3-thumbnail.jpg'
import Thumb4 from './../../../Images/image-product-4-thumbnail.jpg'
import './../Carussel/CarusselDesktop.css'

const CarusselDesktop = () => {
  return (
    <div className='carussel-container'>
        <img src={Main} className="main-img" alt="Shoe" />
        <div>
            <img src={Thumb1} alt="Shoe" />
            <img src={Thumb2} alt="Shoe" />
            <img src={Thumb3} alt="Shoe" />
            <img src={Thumb4} alt="Shoe" />
        </div>
    </div>
  )
}

export default CarusselDesktop