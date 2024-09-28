import React from 'react';
import { Link } from 'react-router-dom';
import { useCart } from 'react-use-cart';
import WishBtn from './WishBtn';

const SingleProduct = ({ alldata, outlet }) => {
  const { addItem } = useCart();

  if (!alldata) {
    return <div>Ürün bulunamadı.</div>;
  }

  const handleAddToCart = (product) => {
    addItem(product);
    alert(`${product.title} Products added successfully!`);
  };

  return (
    <div className="col-12 col-sm-6 col-md-4">
      <div className="singleProduct">
        <div className="card">
          <img src={alldata.photo} height={300} className="card-img-top" alt={alldata.title} />
          <div className="card-body">
            <h5 className="card-title">{alldata.title}</h5>
            <p className="card-text">{alldata.price}$</p>
          
            {alldata.stock > 0 ? (
              <div className="details">
                <Link
                  onClick={() => handleAddToCart(alldata)}
                  className="add-to-cart"
                >
                  <span>
                    <i className="fa-solid fa-cart-shopping"></i>
                  </span>
                </Link>
                <Link >
                  {/* <button className="more-details" type="submit">
                    <span>
                      <i className="fa-solid fa-eye"></i> 
                    </span>
                  </button> */}
                </Link>
                <WishBtn newProducts={alldata} /> 
              </div>
            ) : (
              <p style={{ color: 'red' }}>Out of Stock</p>  
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default SingleProduct;
