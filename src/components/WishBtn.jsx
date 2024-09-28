import React from 'react'
import {toast} from 'react-toastify'
import { useWishlist } from 'react-use-wishlist'



const WishBtn = ({ newProducts }) => {

    const { addWishlistItem, removeWishlistItem, inWishlist } = useWishlist();

    

    const toggleWishList = (item) => {
        if (inWishlist(item.id)) {
            removeWishlistItem(item.id);
            toast.error('successfully deleted');

        }

        else {
            addWishlistItem(item);
            toast.success('successfully added');

        }
    };

    return (
        <>
            <button className='button-heart-icon'  onClick={() => toggleWishList(newProducts)}>
                {
                    inWishlist(newProducts.id) ? <i className='white-heart' class="fa-solid fa-heart heart-button"></i> : <i className='black-heart' class="fa-regular fa-heart heart-button"></i>
                }


            </button>
        </>
    )
}

export default WishBtn
