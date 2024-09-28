import React, { useContext, useRef, useState } from 'react'
import { useDispatch } from 'react-redux';
import { addProduct } from '../../tools/actions/shopAction';
import swal from 'sweetalert';
import { useNavigate } from 'react-router-dom';
import { LangContext } from '../../context/LangContext';
import { ModeContext } from '../../context/ModeContext';



const ProductForm = ({ onFormSubmit, sendedit }) => {
    const [image, setImage] = useState(sendedit ? sendedit.photo : "");
    const [title, setTitle] = useState(sendedit ? sendedit.title : "");
    const [price, setPrice] = useState(sendedit ? sendedit.price : "");
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const [lang, setLang] = useContext(LangContext);
  const [mode, setMode] = useContext(ModeContext);
    const formSubmitted = e => {
        e.preventDefault();
        if (!image || !title || !price) {
            swal("Please fill input", "", "warning");
        } else {
            onFormSubmit({
                image,title,price
            })
           
        }
    }
    return (
        <div className="container-fluid">
            <div className="row">
                <div className=" d-flex align-items-center justify-content-center ">
                    <form onSubmit={formSubmitted}>
                        <div className="mb-3">
                            <label className="form-label">{lang ==="az"?"Sekil linki":"Photo link"}</label>
                            <input value={image} onChange={e => setImage(e.target.value)} type="text" className="form-control" />
                        </div>

                        <div className="mb-3">
                            <label className="form-label">{lang ==="az"?"Başlıq":"Title"}</label>
                            <input value={title} onChange={e => setTitle(e.target.value)} type="text" className="form-control" />
                        </div>

                        <div className="mb-3">
                            <label className="form-label">{lang ==="az"?"Qiymet":"Price"}</label>
                            <input value={price} onChange={e => setPrice(e.target.value)} type="text" className="form-control" />
                        </div>





                        <button type="submit" className="btn btn-dark">{lang ==="az"?"Elave et":"Add"}</button>
                    </form>
                </div>
            </div>
        </div>

    )
}

export default ProductForm