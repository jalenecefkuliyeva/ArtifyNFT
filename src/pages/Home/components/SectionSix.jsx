import React, { useContext } from 'react'
import { useState } from 'react'
import { FaRegPlusSquare } from "react-icons/fa";
import { FaRegSquareMinus } from "react-icons/fa6";
import { LangContext } from '../../../context/LangContext';
import { ModeContext } from '../../../context/ModeContext';

const SectionSix = () => {

    const [selected, setSelected] = useState(null)
    const [lang] = useContext(LangContext);
    const [mode, setMode] = useContext(ModeContext);

    const toggle = (i) => {
        if (selected === i) {
            return setSelected(null)
        }

        setSelected(i)
    }



    return (

        


        <div className="container-fluid">
            <div className="row">
                <div className="section-six">
                    <div className="">
                        <div className="section-six-one">
                            <h3>{lang ==="az"?"Tez-tez verilən suallar.":"Frequently Aksed Questions"}</h3>
                        </div>
                    </div>
                    <div className="">
                        <div className="section-six-two">
                            <p className='one'>
                             {lang ==="az"?"Oyun NFT-ləri və kolleksiya əşyaları - NFT-lər həmçinin ticarət kartları, virtual ev heyvanları və ya oyundaxili əşyalar kimi rəqəmsal kolleksiya şəklində ola bilər.":"    Below is a list of frequently asked questions and answers from partners and 3D artist"}
                            </p>
                            <p className='two'>{lang ==="az"?"İlk NFT-lərdən biri olan CryptoPunk oyununa aid olan Alien2089 personajı 2021-ci ilin yanvar ayında 7.5 milyon dallara satıldı.":"Please check this FAQ first before contacting us"}</p>
                        </div>

                    </div>
                    <div >
                        <div className="section-six-three ">
                            <div className="faq ">
                                {data.map((item, i) => (
                                    <div className="item">
                                        <div className="title" onClick={() => toggle(i)}>
                                            <h2>{item.question}</h2>
                                            <span>{selected === i ? <FaRegSquareMinus className='minus-icon' /> : <FaRegPlusSquare className='plus-icon' />}</span>
                                        </div>
                                        <div className={selected === i ? 'content show' : 'content'}>
                                            <p>{item.answer}</p>
                                        </div>

                                    </div>

                                ))}

                            </div>




                        </div>

                    </div>
                </div>

            </div>
        </div>





    )
}

const data = [
    {
        question: 'How do NFTs work? ',
        answer:
            'NFTs are created using blockchain technology, typically on the Ethereum network. Each NFT contains unique metadata and ownership details, making it distinguishable from other tokens. This information is stored on the blockchain, ensuring the authenticity and ownership of the NFT.',
    },
    {
        question: 'What is an NFT?',
        answer:
            'NFT stands for Non-Fungible Token. It is a unique digital asset verified using blockchain technology. Unlike cryptocurrencies like Bitcoin or Ethereum, each NFT is distinct and cannot be exchanged on a one-to-one basis.',
    },
    {
        question: 'What can I use NFTs for?',
        answer:
            'NFTs can represent ownership of a variety of digital items, including art, music, videos, in-game items, and virtual real estate. They can also provide access to exclusive content, experiences, and membership benefits.',
    }, {
        question: 'How do I store my NFTs safely?',
        answer:
            'Store your NFTs in a secure digital wallet. Use wallets with strong security features, such as MetaMask or hardware wallets like Ledger. Enable two-factor authentication and keep your private keys and recovery phrases safe.',
    }, {
        question: 'Are NFTs legal?',
        answer:
            'Yes, NFTs are legal in most countries. However, regulations may vary by jurisdiction. It is important to understand the legal implications and tax responsibilities associated with buying, selling, and owning NFTs in your country.',
    }, {
        question: ' Do I own the copyright to an NFT I purchase?',
        answer:
            'Purchasing an NFT gives you ownership of the token and the right to resell it. However, it does not automatically grant you copyright to the underlying digital file. Copyright rights remain with the original creator unless explicitly transferred.',
    },


]




export default SectionSix