

import React, { useContext } from 'react';
import { useWishlist } from 'react-use-wishlist';
import SingleProduct from '../components/SingleProduct';
import { LangContext } from '../context/LangContext';
import { ModeContext } from '../context/ModeContext';
import SingleWishProduct from '../components/SingleWishProduct';

const Wishlist = () => {
    const { items } = useWishlist();
    const [lang] = useContext(LangContext);
    const [mode, setMode] = useContext(ModeContext);


    return (
        <div className="whislistPage">
            <div className="container">
                <div className="row">

                    <h1>Wishlist Page</h1>

                    {items.length > 0 ? (
                        items.map((item) => (

                            <SingleWishProduct key={item.id} alldata={item} />
                        ))
                    ) : (
                        <p>Ürün bulunamadı.</p>

                    )}
                </div>
            </div>

        </div>

    );
};

export default Wishlist;
