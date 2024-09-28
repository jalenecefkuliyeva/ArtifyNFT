import React, { useContext } from 'react'
import about1 from "../../../media/img/about-01.png";
import about2 from "../../../media/img/about-02.png";
import about3 from "../../../media/img/about-03.png";
import about4 from "../../../media/img/about-04.png";
import about5 from "../../../media/img/about-05.png";
import { LangContext } from '../../../context/LangContext';
import { Link } from 'react-router-dom';
import { ModeContext } from '../../../context/ModeContext';



const SectionTwo = () => {
    const [lang] = useContext(LangContext);
    const [mode, setMode] = useContext(ModeContext);
    return (
        <div className="container-fluid">
            <div className="row">
                <div className='section-two'>
                  

                    <div className="section-two-one">
                    <div className="col-12 col-sm-6 col-md-6">
                        <img className='about-one' src={about1} alt="" />
                        <img className='about-two' src={about2} alt="" />
                        <img className='about-three' src={about3} alt="" />
                        <img className='about-four' src={about4} alt="" />
                        <div className="test">
                            <img className='about-five' src={about5} alt="" />
                        </div>
                    </div>

                    </div>
                    <div className="section-two-two">
                    <div className="col-12 col-sm-6 col-md-6">
                   
                        <h3>{lang === "az" ? "Yüksək keyfiyyət" : "Hight Quality "} <br />  {lang === "az" ? "Sonraki nesil" : "NFT collections"}</h3>
                        <p className='mb-17'>{lang === "az" ? "Cyfonii, rəqəmsal əşyalar olan nifties üçün əsas bazardır. Burada siz nifties-ləri əldə edə, sata və mübadilə edə bilərsiniz." : "Cyfonii is the premier marketplace for nifties, which are digital items you can "} <br />{lang === "az" ? "özünüzə həqiqətən məxsus olmaq." : " truly own for yourself "}</p>
                        <p className='mb-26 '> {lang === "az" ? "NFT-yə sahib olmaq rəqəmsal olaraq sənət əsərinə və ya dəyərli hesab etdiyiniz hər şeyə sahib olmaq deməkdir." : "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu"}<br /> </p>
                     <Link to="/about" >   <button className='about-us-button' type="submit"> <span>{lang === "az" ? "Haqqımızda daha çox." : "More About Us "}</span></button></Link>
                    </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SectionTwo