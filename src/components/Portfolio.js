import React from 'react'
import '../css/Portfolio.css'

 function Portfolio() {
    return (
      
    <div className='main' >
        <div className="container">
    
            <ul className="list">
                           
                <li>
                        <div className="item">
                            <a target='_blank'  rel="noopener noreferrer" href="https://brainhouseanticafe.herokuapp.com/" class="image">
                                {/* <span className="number">20</span> */}
                                <img loading="lazy" src="img/20.jpg"
                                     alt="dd"></img>
                             </a>
                            <span className="title">Brain House</span>
                            {/* <div className="date">20 Ekim 2020</div> */}
                            <div className="actions">
                                <a target='_blank'  rel="noopener noreferrer" href="https://brainhouseanticafe.herokuapp.com/">
                                    View							</a>
                            </div>
                        </div>
                </li>             
                <li>
                        <div className="item">
                            <a target='_blank'  rel="noopener noreferrer" href="https://alizade.herokuapp.com/" class="image">
                                {/* <span className="number">20</span> */}
                                <img loading="lazy" src="img/21.jpg"
                                     alt="dd"></img>
                             </a>
                            <span className="title">Brain House</span>
                            {/* <div className="date">20 Ekim 2020</div> */}
                            <div className="actions">
                                <a target='_blank'  rel="noopener noreferrer" href="https://alizade.herokuapp.com/">
                                    View							</a>
                            </div>
                        </div>
                </li>             
                <li>
                        <div className="item">
                            <a target='_blank'  rel="noopener noreferrer" href="https://sabitalizade.herokuapp.com/" class="image">
                                {/* <span className="number">20</span> */}
                                <img loading="lazy" src="img/22.jpg"
                                     alt="dd"></img>
                             </a>
                            <span className="title">Brain House</span>
                            {/* <div className="date">20 Ekim 2020</div> */}
                            <div className="actions">
                                <a target='_blank'  rel="noopener noreferrer" href="https://sabitalizade.herokuapp.com/">
                                    View							</a>
                            </div>
                        </div>
                </li>             
                           
                       
            </ul>    
        </div>
    </div>
    )
}

export default Portfolio;