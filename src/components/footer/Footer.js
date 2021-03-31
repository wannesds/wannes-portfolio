import React from 'react';
import './Footer.scss';

const Footer = () => {

    return(
        <div id="Footer" className="footer-box">
            <div className="footer-section">
                <p>Design by <a href="">Wannes Dieltiens</a> 2020</p>
                <p>contact at <span>wannesdieltiens@gmail.com</span></p>
            </div> 
            {/* <div className="footer-section">
                <p>Donations:</p>
                <p>BTC: <span>3AzCtESGAftXp5qL32Epbhr9RPYbRxCXso</span></p>
                <p>ETH: <span>0xa0d01eb6bf96133fd6a97e82b07d7e5cf7650e10</span></p>
                <p>DOT: <span>13iNtQnxhD1U5c7Q6rQ5CgmDTeKtfrRmvKkDh1meqkiepFTT</span></p>
            </div>          */}
        </div>
    )
}

export default Footer;