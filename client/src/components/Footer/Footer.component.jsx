import React from 'react'
import './Footer.scss'
import ssaavedra from '../../assets/img/Firma-02.png'
import torre from '../../assets/img/torre.png'

export default function Footer() {
    return(
        <div className="footer">
            <p>Made by:</p>
            <a href="santiagosaavedra.com.co">
                <img src={ssaavedra} alt="ssaavedraa" id='ssaavedraa' />
            </a>
            <p>for: </p>
            <a href="torre.co">
                <img src={torre} alt="torre" id='torre' />
            </a>
        </div>
    )
}