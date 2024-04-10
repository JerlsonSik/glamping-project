import Button from 'react-bootstrap/Button'; 
import 'bootstrap/dist/js/bootstrap.js';
import "bootstrap/dist/css/bootstrap.min.css"
import './Nav.css'
import React, { useState } from "react";
import { set } from 'date-fns';

const Nav = () => {

    const [style,setStyle] = useState("overlaybefore")

    const openNav = () => {
        console.log(style)

        if(style !== "overlay"){
            setStyle("overlay") 
            console.log("overlay")}

        else {
            setStyle("overlaybefore")
            console.log("overlaybefore")}
    }

    return ( 

        <div class="bg-transparent" style={{
            backgroundImage: "url(/CooperLakeHome.jpg)", height: "100vh", opacity:"100%", backgroundSize:"cover", backgroundPosition:"bottom right",
        }}>
            
                <nav class="navbar navbar-expand-lg navbar-dark shadow-none" style={{zIndex: "1"}}>
                    <div class="container">
                        <a class="navbar-brand" href="/home"><img alt="" src="./logo.svg" width="100" height="100"
                        className="d-inline-block align-top" /></a>

                        <button
                        class="navbar-toggler"
                        type="button"
                        onClick={openNav}
                        >
                        <i class="fas fa-bars fa-2x"></i>
                        </button>

                        {/* Normal Menu*/}
                        <div class="justify-content-end navbarone" id="navbarSupportedContent">
                            <ul class="navbar-nav">
                                <li class="nav-item mx-3">
                                    <a class="nav-link active" aria-current="page" href="/home">Home</a>
                                </li>
                                <li class="nav-item mx-3">
                                    <a class="nav-link active" href="/cooperlake">Cooper Lake</a>
                                </li>
                                <a href="/booksite"><button type='button' className='btn btn-primary ms-3' href="/booksite">Book Now</button></a>
                            </ul>
                        </div>

                        {/* Drop Down Menu */}
                        
                        <div className={style}>
                        <button class="navbar-toggler closebtn" type="button">
                        <i class="fas fa-times fa-2x colorbtn" aria-hidden="true" onClick={openNav}></i>
                        </button>
                            <div className='overlaycontent'>
                               
                                    <a class="nav-link active" aria-current="page" href="/home">Home</a>
                                
                                    <a class="nav-link active" href="/cooperlake">Cooper Lake</a>
                                
                                    <a href="/accomodation"><button type='button' className='btn btn-primary' href="/booksite">Book Now</button></a>
                                
                                
                            </div>
                        </div>
                        {/* End of Drop Down Menu */}
                    </div>
                    
                    
                </nav>

                <div class="mask" style={{backgroundColor: "rgba(0, 0, 0, 0.6)"}}>
                    <div class="d-flex justify-content-center align-items-center h-100">
                        <div class="text-white text-center">
                        <h1 class="mb-3">The Hideaway at Cooper Lake</h1>
                        <h5 class="mb-4">Northwest Indiana's Elevated Camping Experience</h5>
                        <a class="btn btn-primary btn-lg m-2 fw-bold" href="/booksite"
                            role="button" rel="nofollow" target="_blank">Book Now</a>
                        <a class="btn btn-danger btn-lg m-2 fw-bold" href="https://airbnb.com/h/thehideawayatcooperlake"
                            target="_blank" role="button">Airbnb</a>
                        <a class="btn btn-secondary btn-lg m-2 fw-bold" href="https://www.hipcamp.com/en-US/land/indiana-the-hideaway-at-cooper-lake-9mxhwz1l"
                            target="_blank" role="button">Hipcamp</a>
                        </div>
                        
                    </div>
                </div>   
        </div>

     );
}
 
export default Nav;



