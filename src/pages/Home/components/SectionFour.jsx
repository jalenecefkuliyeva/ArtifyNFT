import React, { useContext } from 'react'
import icon from "../../../media/img/download.png"
import { LangContext } from '../../../context/LangContext';
import { ModeContext } from '../../../context/ModeContext';


const SectionFour = () => {
    const [lang] = useContext(LangContext);
    const [mode, setMode] = useContext(ModeContext);
    return (
        <div className="container-fluid">
            <div className="row">
                <div className="section-four">
                    <div className="section-four-one">
                        <h3 className="section-three-h3"> {lang ==="az"?"NFT-niz üçün həllər.":"Complete Solutions for your NFT"}</h3>
                        <p className='first'> {lang ==="az"?"İnternetə çıxışı olan hər kəs blokçeyn texnologiyasının açıq, mərkəzləşdirilməmiş və əlçatan olması sayəsində NFT yarada bilər":"Cyfonii is the premier marketplace for nifties, which are digital items you can"}</p>
                        <p className='second'>{lang ==="az"?"Blokçeyn texnologiyası rəssamlara, musiqiçilərə, oyun tərtibatçılarına və sözün əsl mənasında hər kəsə NFT-lər yaratmağa imkan verdi.":"truly own for yourself"}</p>
                    </div>
                    <div className="container">
                    <div className="section-four-two ">
                        <div class="col-xl-3 col-md-6">
                            <div class="speciality-box">
                                <div class="icon">
                                    <img src={icon} alt="" />
                                </div>
                                <h5 class="title">{lang ==="az"?"Böyük kolleksiya.":"Huge Collection"}</h5>
                                <p>{lang ==="az"?"İncəsənət - Rəqəmsal sənət, o cümlədən şəkillər, interaktiv parçalar NFT şəklində simvollaşdırıla bilər.":"Oficia dese runt mollit anim id est labo met, consectetur adipis"}</p>
                                <h3 class="number">01</h3>
                            </div>
                        </div>

                        <div class="col-xl-3 col-md-6">
                            <div class="speciality-box">
                                <div class="icon">
                                    <img src={icon} alt="" />
                                </div>
                                <h5 class="title">{lang ==="az"?"Yüksək keyfiyyət.":"High Quality"}</h5>
                                <p>{lang ==="az"?"İncəsənət - Rəqəmsal sənət, o cümlədən şəkillər, interaktiv parçalar NFT şəklində simvollaşdırıla bilər.":"Oficia dese runt mollit anim id est labo met, consectetur adipis"}</p>
                                <h3 class="number">02</h3>
                            </div>
                        </div>

                        <div class="col-xl-3 col-md-6">
                            <div class="speciality-box">
                                <div class="icon">
                                    <img src={icon} alt="" />
                                </div>
                                <h5 class="title">{lang ==="az"?"Ən yaxşı resurs.":"Top Resource"}</h5>
                                <p>{lang ==="az"?"İncəsənət - Rəqəmsal sənət, o cümlədən şəkillər, interaktiv parçalar NFT şəklində simvollaşdırıla bilər.":"Oficia dese runt mollit anim id est labo met, consectetur adipis"}</p>
                                <h3 class="number">03</h3>
                            </div>
                        </div>


                        <div class="col-xl-3 col-md-6">
                            <div class="speciality-box">
                                <div class="icon">
                                    <img src={icon} alt="" />
                                </div>
                                <h5 class="title">{lang ==="az"?"Böyük icma.":"Big Community"}</h5>
                                <p>{lang ==="az"?"İncəsənət - Rəqəmsal sənət, o cümlədən şəkillər, interaktiv parçalar NFT şəklində simvollaşdırıla bilər.":"Oficia dese runt mollit anim id est labo met, consectetur adipis"}</p>
                                <h3 class="number">04</h3>
                            </div>
                        </div>
                    </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SectionFour