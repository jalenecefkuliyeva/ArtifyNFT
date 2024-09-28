import React, { useContext } from 'react'
import icon1 from "../../../media/img/icon-1.f92d6716453648917140d0982c1235c8.svg"
import icon2 from "../../../media/img/icon-2.d14354eb7e60d2f3c8ea5cd46c8c5bdc.svg"
import icon3 from "../../../media/img/icon-3.0f1a333637c772f2ac2dc19dfe37278e.svg"
import icon4 from "../../../media/img/icon-4.3362ae6a9dd4e1d14fd1400a55131ba0.svg"
import portfolio from "../../../media/img/portfolio.5c35beca2c37f3ee7eb9.png"
import { LangContext } from '../../../context/LangContext'
import { ModeContext } from '../../../context/ModeContext'

const SectionThree = () => {
  const [lang] = useContext(LangContext);
  const [mode, setMode] = useContext(ModeContext);
  return (
    <div className="container-fluid">
      <div className="row">
        <div className="section-three">

          <div className="section-three-one">
            <h6></h6>
            <h3 className="section-three-h3">{lang ==="az"?" Cyfoniinin bir nomreli":"Become a Cyfonii  "}</h3>
            <h3 className='section-three-h33' >{lang ==="az"?" oyunçusu olun.":"Player Now "}</h3>
          </div>

          <div className="section-three-two">
            <div className="section-three-two-one">

              <div className="col-lg-3 portfolio-box">
                <div className="step"></div>

                <div className="icon">
                  <img src={icon1} alt="" />
                </div>

                <div className="content">
                  <h5> {lang ==="az"?"Cüzdanınızı bağlayın.":"Connect your wallet"}</h5>
                  <p>{lang ==="az"?"Blokçeyn texnologiyası və NFT-lər sənətçilərə və yaradıcılara məhsullarından pul qazanmaq üçün unikal fürsət təklif edir.":"Suspendisse tristique neque a lorem placerat pharetra. Class "} <br /> {lang ==="az"?"Hər kəs fərdi fotolara pulsuz onlayn baxa bilər.":"aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos "}</p>
                </div>

              </div>
              <br />

              <div className="col-lg-3 portfolio-box">
                <div className="step"></div>



                <div className="icon">
                  <img src={icon2} alt="" />
                </div>

                <div className="content">
                  <h5>{lang ==="az"?"NFT-nizi satın alın.":"Buy your NFT "}</h5>
                  <p>{lang ==="az"?"Blokçeyn texnologiyası və NFT-lər sənətçilərə və yaradıcılara məhsullarından pul qazanmaq üçün unikal fürsət təklif edir.":"Suspendisse tristique neque a lorem placerat pharetra. Class "} <br /> {lang ==="az"?"Hər kəs fərdi fotolara pulsuz onlayn baxa bilər.":"aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos "}</p>
                </div>



              </div>

              <br />


              <div className="col-lg-3 portfolio-box">
                <div className="step"></div>



                <div className="icon">
                  <img src={icon3} alt="" />
                </div>

                <div className="content">
                  <h5> {lang ==="az"?"Kolleksiya yaradın.":"Create collection"}</h5>
                  <p>{lang ==="az"?"Blokçeyn texnologiyası və NFT-lər sənətçilərə və yaradıcılara məhsullarından pul qazanmaq üçün unikal fürsət təklif edir.":"Suspendisse tristique neque a lorem placerat pharetra. Class "} <br /> {lang ==="az"?"Hər kəs fərdi fotolara pulsuz onlayn baxa bilər.":"aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos "}</p>
                </div>



              </div>
              <br />

              <div className="col-lg-3 portfolio-box">
                <div className="step"></div>



                <div className="icon">
                  <img src={icon4} alt="" />
                </div>

                <div className="content">
                  <h5>{lang ==="az"?"NFT-nizi satın.":"Sell your NFT "}</h5>
                  <p>{lang ==="az"?"Blokçeyn texnologiyası və NFT-lər sənətçilərə və yaradıcılara məhsullarından pul qazanmaq üçün unikal fürsət təklif edir.":"Suspendisse tristique neque a lorem placerat pharetra. Class "} <br /> {lang ==="az"?"Hər kəs fərdi fotolara pulsuz onlayn baxa bilər.":"aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos "}</p>
                </div>



              </div>


            </div>
            <div className="section-three-two-two">
              <img src={portfolio} alt="" />
            </div>
          </div>

        </div>
      </div>
    </div>
  )
}

export default SectionThree