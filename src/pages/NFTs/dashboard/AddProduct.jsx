
import React, { useContext } from 'react';
import ProductForm from '../ProductForm';
import { useDispatch } from 'react-redux';
import { addProduct } from '../../../tools/actions/shopAction';
import swal from 'sweetalert';
import { useNavigate } from 'react-router-dom';
import { supabase } from '../../../supabase/supabaseClient';
import { ModeContext } from '../../../context/ModeContext';
import { LangContext } from '../../../context/LangContext';

const AddProduct = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [lang, setLang] = useContext(LangContext);
  const [mode, setMode] = useContext(ModeContext);

  return (
    <div className='addProductPage'>
      <h1 className='text-center '>{lang ==="az"?"Məhsul əlavə et":"Add Product"}</h1>
      <ProductForm onFormSubmit={async (fd) => {
      
        const priceAsBigInt = parseInt(fd.price, 10);
        
        if (isNaN(priceAsBigInt)) {
          console.log('Invalid price format');
          swal("Invalid price format", "", "error");
          return;
        }

        const { data, error } = await supabase
          .from('products')
          .insert({
            photo: fd.image,
            title: fd.title,
            price: priceAsBigInt
          });

        console.log('Supabase response:', { data, error });

        if (error) {
          console.log('Error adding product:', error.message);
          swal("Error adding product", error.message, "error");
        } else {
          swal("Product added successfully", "", "success");
          setTimeout(() => {
            navigate('/dashboard');
          }, 1500);
        }
      }} />
    </div>
  );
};

export default AddProduct;
