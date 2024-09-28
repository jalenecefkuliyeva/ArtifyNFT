import React, { useContext } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { deleteProduct } from '../../../tools/actions/shopAction'
import slugify from 'slugify'
import { supabase } from '../../../supabase/supabaseClient'
import swal from 'sweetalert'
import { ModeContext } from '../../../context/ModeContext'
import { LangContext } from '../../../context/LangContext'

const dashboard = () => {
    const data = useSelector(p => p)
    const dispatch = useDispatch();
    const [lang, setLang] = useContext(LangContext);
    const [mode, setMode] = useContext(ModeContext);
    
    return (
        <div className="dashboardPage">
            <div className="container-fluid">

                <div className=" d-flex align-items-center justify-content-center flex-column">
                    <h1 className='my-5 text'>{lang ==="az"?"Idare Paneli":"Dashboard"}</h1>
                    <div>
                        <Link to="/dashboard/add" className='btn btn-light my-3'>{lang ==="az"?"Elave et":"Add"}</Link>
                    </div>
                   <div className="table-dashboard">
                   <table>
                        <thead>
                            <tr>
                                <th scope="col"></th>
                                <th scope="col">{lang ==="az"?"Şəkil":"Image"}</th>
                                <th scope="col">{lang ==="az"?"Başlıq":"Title"}</th>
                                <th scope="col">{lang ==="az"?"Qiymet":"Price"}</th>
                                <th scope="col">{lang ==="az"?" Düzəliş et":"Edit"}</th>
                                <th scope="col">{lang ==="az"?" Sil":"Delete"}</th>
                            </tr>
                        </thead>
                        <tbody>
                            {data.map((item, count) => (
                                <tr>
                                    <th scope="row">{count + 1}</th>
                                    <td><img src={item.photo} width={70} alt="" /></td>
                                    <td>{item.title}</td>
                                    <td>{item.price}</td>
                                    <td><Link to={`/dashboard/edit/${slugify(item.title)}`} className='btn btn-dark'>{lang ==="az"?" Düzəliş et":"Edit"}</Link></td>
                                    <td><Link className='btn btn-dark' onClick={async () => {
                                        const { data, error } = await supabase.from('products').delete().eq('id', item.id);
                                        if (error) {
                                            console.log(error);
                                        } else {
                                            swal('product was deleted!', "", "success");
                                            setTimeout(() => {
                                                window.location.assign('/dashboard')
                                            }, 1500)
                                        }
                                    }
                                    }>{lang ==="az"?" Sil":"Delete"}</Link></td>

                                </tr>

                            ))}

                        </tbody>
                    </table>
                   </div>
                </div>

            </div>
        </div>



    )
}

export default dashboard
