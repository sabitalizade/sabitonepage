import React from 'react'
import '../css/Contact.css'
 const Contact = ()=> {
    return (
        <div className="Contact">
            <ul className="ul">
            <li>
            <a href="tel:+994706717474"><i class="fas fa-mobile"></i><span> Phone:</span> +99470-671-74-74</a>

            </li>
            <li>
            <a href="https://instagram.com/sabitalizade/"><i className="fab fa-instagram"></i><span>  My Instagram:</span> sabitalizade</a>
            </li>
            <li>
            <a href="https://twitter.com/sabitalizada"><i className="fab fa-twitter"></i><span> My Twitter:</span> sabitalizada </a>
            </li>
            <li>
            <a href="https://github.com/sabitalizade/"><i className="fab fa-github"></i> <span> My Github:</span> sabitalizade </a>

            </li>
            </ul>
        </div>
    )
}


export default Contact