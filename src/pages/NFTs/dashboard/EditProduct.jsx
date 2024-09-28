import React, { useContext } from 'react'
import ProductForm from '../ProductForm';
import { useNavigate, useParams } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux';
import slugify from 'slugify';
import { editProduct } from '../../../tools/actions/shopAction';
import { LangContext } from '../../../context/LangContext';
import { ModeContext } from '../../../context/ModeContext';

const EditProduct = () => {
    const {slug} = useParams();
    const data = useSelector(p=>p);
    const editdata = data.find(p=>slugify(p.title) === slug);
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const [lang, setLang] = useContext(LangContext);
    const [mode, setMode] = useContext(ModeContext);
  return (
    <div className='editProductPage'>
        <h1 className='text-center'>{lang ==="az"?"Məhsulları düzəliş et":"Edit products"}</h1>
        <ProductForm sendedit={editdata} onFormSubmit={fd=>{
       
          dispatch(editProduct(editdata.id,fd));
          swal("Product update successfull","","success");
          setTimeout(()=>{
              navigate('/dashboard')
          },1500)
        }} />
    </div>
  )
}

export default EditProduct