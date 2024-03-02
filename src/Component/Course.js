import axios from 'axios';
import React, { useEffect, useState } from 'react'
import Col from './Col.css'
function Course() {
  const pageLimit=9;
const apiPath="https://dummyjson.com/products"
const [products,setProducts]=useState([])


const getProduct= () => {
  let pageNo=1;
  const Que= "?page="+pageNo+"&limit="+pageLimit;
  const final=apiPath+Que
  axios.get(final)
  .then((res)=>{
    const apires= res?.data.products
  

    // console.log(apires)
    setProducts(apires)
  }).catch((error)=>{
    console.log(error)
  })
}
useEffect( ()=>{
getProduct()
},[])
  
  return (
    
    <>
    <div className="pop">
      {products.map((items,key)=>{
        return(
          <div className='popList' key={key}>
            <p className='brand'>{items.brand}</p>
            <div>
              <img  className='cimg' src={items.images[0]} alt="het"/>
              <img  className='cimg'src={items.images[1]} alt="het"/>
              <img className='cimg' src={items.images[2]} alt="het"/>

            </div>
            <p>Catagory:{items.category}</p>
            <p>Description:{items.description}</p>
            <div className='Plist'>
            <p>Discount(%):{items.discountPercentage}</p>
            <p>Price:${items.price}</p>
            <p>Stock:{items.stock}</p>
            <p>ratting:{items.rating}</p>
            <hr/>
            </div>
          </div>
        )
      })}
    </div>
    </>
  
  )
}

export default Course
