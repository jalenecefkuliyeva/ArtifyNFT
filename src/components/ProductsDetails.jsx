


// import React, { useContext, useEffect, useState } from 'react'

// import { Link, useParams } from 'react-router-dom'

// import { useCart } from 'react-use-cart'
// import { useSelector } from 'react-redux'
// import { ModeContext } from '../context/ModeContext'

// const ProductDetails = () => {
//   const { addItem } = useCart()
//   const { id } = useParams()
//   const data = useSelector(p => p)
//   const productDetail = (data || []).find(p => p.id == id)
//   const [mode, setMode] = useContext(ModeContext);


//   return (


//     <div className="product-details ">
//       <div className="card">
//         <img src={productDetail.photo} alt="" />
//         <div className="card-body">
//           <h5 className="card-title">{productDetail.title}</h5>
//           <p className="card-text">Price:{productDetail.price}$</p>
//           <Link to="/products" > <button className='button-back' type="submit"> <span>Back</span></button></Link>
//           <Link
//                   onClick={() => {
//                     if (localStorage.getItem('token')) {
//                       addItem(alldata);
//                       swal('Good job!', 'Product added to basket!', 'success');
//                     } else {
//                       window.location.assign('/login');
//                     }
//                   }}
//                   className="add-to-cart"
//                 >
//                   <span>
//                     <i className="fa-solid fa-cart-shopping"></i>
//                   </span>
//                 </Link>
//                 <Link>
//                   <button className="more-details" type="submit">
//                     <span>
//                       <i className="fa-solid fa-eye"></i> 
//                     </span>
//                   </button>
//                 </Link>
//                 <WishBtn newProducts={alldata} /> 
//         </div>
//       </div>
//     </div>


//   );

 
// }

// export default ProductDetails