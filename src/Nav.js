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
            backgroundImage: "url(/Cooper-Lake.webp)", height: "100vh", opacity:"100%", backgroundSize:"cover"
        }}>
            
                <nav class="navbar navbar-expand-lg navbar-dark shadow-none" style={{zIndex: "1"}}>
                    <div class="container">
                        <a class="navbar-brand" href="/home"><img alt="" src="./glamping.png" width="60" height="60"
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
                                    <a class="nav-link active" href="/accomodation">Accomodation</a>
                                </li>
                                <li class="nav-item mx-3">
                                    <a class="nav-link active" href="/site">Site</a>
                                </li>
                                <li class="nav-item mx-3">
                                    <a class="nav-link active" href="/about">About</a>
                                </li>
                                <a href="https://booking.smoobu.com/9A749585"><button type='button' className='btn btn-primary ms-3' href="https://booking.smoobu.com/9A749585">Book Now</button></a>
                            </ul>
                        </div>

                        {/* Drop Down Menu */}
                        
                        <div className={style}>
                        <button class="navbar-toggler closebtn" type="button">
                        <i class="fas fa-times fa-2x colorbtn" aria-hidden="true" onClick={openNav}></i>
                        </button>
                            <div className='overlaycontent'>
                               
                                    <a class="nav-link active" aria-current="page" href="/home">Home</a>
                                
                                
                                    <a class="nav-link active" href="/accomodation">Accomodation</a>
                                
                                
                                    <a class="nav-link active" href="/site">Site</a>

                                    <a class="nav-link active" href="/about">About</a>
                                
                                    <a href="https://booking.smoobu.com/9A749585"><button type='button' className='btn btn-primary' href="https://booking.smoobu.com/9A749585">Book Now</button></a>
                                
                                
                            </div>
                        </div>
                        {/* End of Drop Down Menu */}
                    </div>
                    
                    
                </nav>

                <div class="mask" style={{backgroundColor: "rgba(0, 0, 0, 0.6)"}}>
                    <div class="d-flex justify-content-center align-items-center h-100">
                        <div class="text-white text-center">
                        <h1 class="mb-3">Cooper Lake Glamping</h1>
                        <h5 class="mb-4">Best Place to Getaway in Indiana</h5>
                        <a class="btn btn-primary btn-lg m-2 fw-bold" href="https://booking.smoobu.com/9A749585"
                            role="button" rel="nofollow" target="_blank">Book Now</a>
                        <a class="btn btn-danger btn-lg m-2 fw-bold" href="https://airbnb.com/h/thehideawayatcooperlake"
                            target="_blank" role="button">Airbnb</a>
                        </div>
                    </div>
                </div>   
        </div>

     );
}
 
export default Nav;



