import React, { use, useState } from 'react'
import './SingleProduct.css'
import { useParams } from 'react-router-dom'
import Navbar from '../../components/navbar/Navbar'
import { allProducts } from '../../data'
import Footer from '../../components/footer/Footer'
const SingleProduct = () => { 
 
 
    const {id} =useParams()
    const product = allProducts.find((product) => product.id === parseInt(id))
 const colors = ['black', 'green', 'red', 'purple','teal']
 const [selectedColor, setSelectedColor ]= useState(null)
 const handleCircleClick = (color) => {
        setSelectedColor(color)
    }
 const sizes = ['XS','S', 'M', 'L', 'XL']
const [selectedSize, setSelectedSize] = useState(null)
const handleSizeClick = (size) => {
    setSelectedSize(size)
}


    return (
   
    <div className='singleProduct-container'>
        <Navbar />
        <div className='singleProduct-wrapper'>
            <div className='singleproduct-imageSection'>
                <img src={product.img} alt="" className='singleProuct-image' />
            </div>
            <div className='singleProduct-infoSection'>
                <h2 className='singleProduct-title'>{product.title}</h2>
                <p className='singleProduct-number'>{product.price}</p>
                <h4 className='description-title'> Description</h4>
                <p className='singleProduct-description'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto odio nihil velit
                     quaerat ea error, quod nesciunt tempore fuga illo.</p>
                     <div className='singleProduct-options'>
                        <div className='colors-section'>
                            <h4>Colors</h4>
                            <div className='colors'>
                                {colors.map((color) => (
                                    <div key={color} className='color-circle' style={{backgroundColor: color, outline:selectedColor === color ? `3px solid ${color}`:""}}
                                    onClick={() => handleCircleClick(color)}

                                    ></div>
                                ))}
                            </div>
                        </div>

<div className='sizes-section'>
    <h4>Size</h4>
   <div className='sizes'>
    {sizes.map((size)=>(<span key={size}
     style={{border: selectedSize === size ? "1px solid #ccc": ""}} onClick={()=> handleSizeClick(size)}>{size}</span>)
)}
   </div>

</div>

                     </div>
<div className='addToCart'>
    <button>Add to cart</button>
</div>

            </div>
        </div>
        <Footer />
    </div>
  )
}

export default SingleProduct