import React, { useContext } from 'react'
import { LangContext } from '../../context/LangContext';
import { ModeContext } from '../../context/ModeContext';

const Contact = () => {

    const [lang] = useContext(LangContext);
    const [mode, setMode] = useContext(ModeContext);
    return (
        <div className='contact'>

            <h1 className='text-center contact-text '>{lang ==="az"?"Elaqe":"Contact"}</h1>
            <div className="d-flex align-items-center justify-content-center my-5">
                <div className="col-6">
                    <form>
                        <div className="mb-3">
                            <label htmlFor="exampleInputEmail1" className="form-label">{lang ==="az"?"Ad":"Name"}</label>
                            <input type="text" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                        </div>
                        <div className="mb-3">
                            <label className="form-label">{lang ==="az"?"   Soyad":"Surname"}</label>
                            <input type="text" className="form-control" />
                        </div>
                        <div className="mb-3">
                            <label className="form-label">{lang ==="az"?"Telefon nömrəsi":"Phone number"}</label>
                            <input type="tel" className="form-control" />
                        </div>
                        <div className="mb-3">
                            <label className="form-label">Email</label>
                            <input type="text" className="form-control" />
                        </div>

                        <div className="mb-3">
                            <label className="form-label">{lang ==="az"?"Mesaj":"Message"}</label>
                            <div className="form-floating">
                                <textarea className="form-control" placeholder="Leave a comment here" id="floatingTextarea2" style={{ height: 100 }} defaultValue={""} />
                            </div>

                        </div>

                        <button type="submit" className="btn btn-dark">{lang ==="az"?"Gonder":"Send"}</button>
                    </form>
                </div>
            </div>


        </div>
    )
}

export default Contact