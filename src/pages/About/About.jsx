import React, { useContext } from 'react'
import aboutpage from '../../media/video/about-video.mp4';
import { LangContext } from '../../context/LangContext';
import { ModeContext } from '../../context/ModeContext';



const About = () => {

    const [lang] = useContext(LangContext);
    const [mode, setMode] = useContext(ModeContext);
    return (
        <div className="about-page">
        <div className="container">
           
               

                    <h1 className='my-5'>{lang ==="az"?"Haqqimizda":"About us"}</h1>
                    <div className="second-page">
                        <div classname="map-page">

                            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d24332.955143305167!2d49.78566260939073!3d40.328603823014994!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40307ef2d0ca64f5%3A0x1a49d38c498337a7!2sBadamdar%2C%20Baku!5e0!3m2!1sen!2saz!4v1726866124249!5m2!1sen!2saz" width={600} height={450} style={{ border: 0 }} allowFullScreen loading="lazy" referrerPolicy="no-referrer-when-downgrade" />

                        </div>

                        <div className="text-page">
                            <button>{lang ==="az"?"Haqqimizda":"About us"}</button>
                            <p>{lang ==="az"?"Blockchain texnologiyası və NFT-lər sənətçilərə və yaradıcılara məhsullarından pul qazanmaq üçün unikal fürsət təklif edir. Məsələn, rəssamlar artıq əsərlərini satmaq üçün qalereyalara və ya kirayə yerlərə getməli deyillər. Bunun əvəzinə o, NFT ilə birbaşa istehlakçıya sata bilər, bu da rəssamın daha çox qazanc əldə etməsinə imkan verir. Hər kəs fərdi fotolara və ya hətta bütün foto kolajlara pulsuz onlayn baxa bilər. Bəs niyə insanlar asanlıqla ekran görüntüsünü və ya yükləyə biləcəyi bir şeyə milyonlarla pul xərcləməyə hazırdırlar? Çünki NFT alıcıya orijinal əşyaya sahib olmaq imkanı verir. Təkcə bu deyil, həm də mülkiyyətin sübutu kimi xidmət edən daxili identifikasiyanı ehtiva edir. Kolleksiyaçılar buəşyanın özündən daha çox qiymətləndirirlər. Kapitala yaradıcılıq yeritməklə NFTlər kripto iqtisadiyyatı daxilində innovasiyaları sürətləndirir. Onlar rəqəmsal hüquqların idarə edilməsini ön plana çıxaran katalizatorlardır, rəssamlara və yaradıcılara işlərindən görünməmiş şəkildə pul qazanmağa imkan verirlər. Beləliklə, NFT-lər rəqəmsal aktivlər aləmini necə başa düşməyimiz və qarşılıqlı əlaqəmizdə paradiqma dəyişikliyinə təkan verir.":"Blockchain technology and NFTs offer artists and creators a unique opportunity to monetize their products. For example, artists no longer have to go to galleries or rental spaces to sell their work. Instead, it can sell directly to the consumer with NFT, allowing the artist to make more profit.Anyone can view individual photos or even entire photo collages online for free. So why are people willing to spend millions on something they can easily screenshot or download? Because NFT allows the buyer to own the original item. Not only that, but it also contains internal identification that serves as proof of ownership. Collectors value these more than the item itself.Injecting creativity into capital, NFTs expedite innovation within the crypto economy. They're the catalysts bringing digital rights management to the forefront, enabling artists and creators to monetize their work in unprecedented ways. Thus, NFTs are fueling a paradigm shift in how we understand and interact with the digital asset realm"}</p>

                        </div>

                    </div>

                    <div className="third-page">
                        <video autoPlay loop muted >
                            <source src={aboutpage} type='video/mp4' />


                        </video>
                    </div>
                </div>
            </div>
       
    )
}

export default About