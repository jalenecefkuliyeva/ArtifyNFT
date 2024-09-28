import React from 'react'
import { useSelector } from 'react-redux'
import SingleProduct from '../../components/SingleProduct';

const ProductOutlet = () => {
  const data = useSelector(p => p);
  return (
    <div>
      <div className="container">
        <h1 className='text-center'>Outlet products</h1>
        <div className="row">
          {data.length == 0 ? <p className='alert alert-warning text-center'>No products</p> : data.map(item => (
            <SingleProduct alldata={item} outlet={true} key={item.id} />
          ))}
        </div>
      </div>
    </div>
  )
}

export default ProductOutlet