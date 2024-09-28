import React, { useContext } from 'react'
import mainpage from '../../../../src/media/video/main-video3.mp4';
import textLine from '../../../media/img/text-line.png';
import rightImg from '../../../media/img/main-page-right.png';
import logoPage from '../../../media/img/logo-page.png';
import { Link } from 'react-router-dom';
import { LangContext } from '../../../context/LangContext';
import { ModeContext } from '../../../context/ModeContext';


const SectionOne = () => {

  const [lang] = useContext(LangContext);
  const [mode, setMode] = useContext(ModeContext);
  return (
    <div>
      <div className="section-one">
        <video autoPlay loop muted >
          <source src={mainpage} type='video/mp4' />


        </video>

        <div className="main-page-text">
          <h2>{lang ==="az"?"Sonraki nesil":"Collect Next"} <br />
          {lang ==="az"?"Toplayin":"Generation"}  <span class="nft-text">NFTs</span>   <img src={textLine} alt="" /> <br />

            {lang ==="az"?"Bu gun":"Today"}</h2>

          <p>{lang ==="az"?"Cyfonii, özünüz üçün həqiqətən sahib ola biləcəyiniz rəqəmsal  əşyalar olan nifties üçün əsas bazardir.":"Cyfonii is the premier marketplace for nifties, which are digital items you can truly own for yourself "}</p>

          <Link to='/login' className=" section-one-button" > <span>{lang ==="az"?" Bize Qosul":"Get Connected"}</span></Link>
        </div>

        <div className="main-page-img">
          <div className="main-page-img-right">
            <img src={rightImg} alt="" />
          </div>
          <div className="price">
            <div className="icon">
              <img src={logoPage} alt="" />
            </div>
            <div className="content">
              <p>{lang ==="az"?"Cari Təklif":"Current Bid"}</p>
              <h5>2.26 {lang ==="az"?"AZN":"ETH"}</h5>
            </div>
          </div>


        </div>

      </div>



    </div>
  )
}

export default SectionOne