
import React, { useContext, useEffect, useState } from 'react';
import SingleProduct from '../../components/SingleProduct';
import { useSelector } from 'react-redux';
import { LangContext } from '../../context/LangContext';
import { ModeContext } from '../../context/ModeContext';

const Products = () => {
    const data = useSelector(p => p);
    const [sortedData, setSortedData] = useState([...data]);
    const [sortOrder, setSortOrder] = useState('asc');
    const [lang] = useContext(LangContext);
    const [mode, setMode] = useContext(ModeContext);

    const handleSort = (order) => {
        setSortOrder(order);

        const sorted = [...sortedData].sort((a, b) => {
            return order === 'asc'
                ? a.title.localeCompare(b.title)
                : b.title.localeCompare(a.title);
        });

        setSortedData(sorted);
    };

    const handleFilter = (category) => {
        if (category === 'all') {
            setSortedData([...data]);
        } else {
            const filtered = data.filter(item => item.title.toUpperCase().includes(category.toUpperCase()));
            setSortedData(filtered);
        }
    };

    useEffect(() => {
        handleFilter('all');
    }, [data]);

    return (
        <div className='products'>
            <div className="product-one">
                <h1>Nfts</h1>
            </div>

            <div className="product-two">
                <ul>
                    <li onClick={() => handleFilter('all')}>All NFTs</li>
                    <li onClick={() => handleFilter('3D Digital Artwork')}>3D Digital Artworks</li>
                    <li onClick={() => handleFilter('Nintendo Switch')}>Nintendo Switch</li>
                    <li onClick={() => handleFilter('The Strange Art')}>The Strange Art</li>
                    <li onClick={() => handleSort('asc')}>A - Z</li>
                    <li onClick={() => handleSort('desc')}>Z - A</li>
                </ul>
            </div>

            <div className="product-three">


                <div className="container">

                    <div className="row row-cols-1 row-cols-md-2 g-4">
                        {sortedData.length === 0 ? (
                            <p className='alert alert-warning text-center'> No Product</p>
                        ) : (
                            sortedData.map((item) => (
                                <SingleProduct alldata={item} key={item.id} />
                            ))
                        )}
                    </div>

                </div>
            </div>
        </div>
    );
};

export default Products;
