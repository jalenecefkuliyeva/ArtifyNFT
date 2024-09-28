
import React, { useContext } from 'react';
import { useCart } from 'react-use-cart';
import swal from 'sweetalert';
import { useNavigate } from 'react-router-dom';
import { LangContext } from '../../context/LangContext';
import { ModeContext } from '../../context/ModeContext';

const Basket = () => {
    const [lang] = useContext(LangContext);
    const [mode] = useContext(ModeContext);
    const {
        isEmpty,
        items,
        emptyCart,
        updateItemQuantity,
        removeItem,
        cartTotal
    } = useCart();

    const navigate = useNavigate();

   
    const checkUser = () => {
        const isLogin = localStorage.getItem('login');
        if (isLogin === 'true') {
            navigate('/checkout');
        } else {
            swal("Uğursuz əməliyyat", "Zəhmət olmasa giriş edin.", "warning");
            navigate('/login'); 
        }
    };

    return (
        <>
            {isEmpty ? (
                <div className='empty-img'>
                    <img src="https://i.gifer.com/3k5W.gif" alt="Empty Cart" />
                </div>
            ) : (
                <div className='container-fluid basket-page'>
                    <h1 className='text'>{lang === "az" ? "Səbət Səhifəsi" : "Basket Page"}</h1>
                    <div className="basket-main">
                        <div>
                            <table className="table">
                                <thead>
                                    <tr>
                                        <th scope="col"></th>
                                        <th scope="col">{lang === "az" ? "Foto" : "Photo"}</th>
                                        <th scope="col">{lang === "az" ? "Başlıq" : "Title"}</th>
                                        <th scope="col">{lang === "az" ? "Qiymət" : "Price"}</th>
                                        <th scope="col">{lang === "az" ? "Kəmiyyət" : "Quantity"}</th>
                                        <th scope="col">{lang === "az" ? "Sil" : "Delete"}</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {items.map((item, index) => (
                                        <tr key={item.id}>
                                            <th scope="row" className='one'>{index + 1}</th>
                                            <td><img width={70} src={item.photo} alt={item.title} /></td>
                                            <td className='three'>{item.title}</td>
                                            <td className='four'>{Math.round(item.price * item.quantity)}$</td>
                                            <td className='five'>
                                                <button onClick={() => updateItemQuantity(item.id, item.quantity - 1)} className='btn btn-light' disabled={item.quantity <= 1}> - </button>
                                                <span className='mx-4'>{item.quantity}</span>
                                                <button onClick={() => updateItemQuantity(item.id, item.quantity + 1)} className='btn btn-light'> + </button>
                                            </td>
                                            <td className='six'>
                                                <button onClick={() => { removeItem(item.id); swal("Product Deleted!", "Product is removed from cart!", "warning"); }} className='button-x'> X </button>
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                            <h4 className='total-price'>{lang === "az" ? "Mehsullar" : "Total price "}: {Math.round(cartTotal)}$</h4>
                            <button onClick={() => emptyCart()} className='empty-button'><span>{lang === "az" ? "Hamısını Sil" : "Clear All"}</span></button>
                        </div>
                     
                        <button className='buy-button' onClick={checkUser}><span>{lang === "az" ? "İndi al" : "Buy Now"}</span></button>
                    </div>
                </div>
            )}
        </>
    );
};

export default Basket;
