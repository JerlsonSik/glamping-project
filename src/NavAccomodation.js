import Button from 'react-bootstrap/Button'; 
import 'bootstrap/dist/js/bootstrap.js';
import "bootstrap/dist/css/bootstrap.min.css"
import './Nav.css'
import React, { useState } from "react";

const NavAccomodation = () => {

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
        

        <div class="p-3 bg-image" style={{
            backgroundImage: "url(/CooperLakeHome.jpg)", height:"400px",backgroundPosition:"right 35% bottom 45%"
        }}>
            <div class="mask justify-content-center align-items-center" style={{backgroundColor: "#00000099"}}>
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
                                <a href="/booknow"><button type='button' className='btn btn-primary ms-3' href="/booknow">Book Now</button></a>
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
                                
                                    <a href="/booknow"><button type='button' className='btn btn-primary' href="/booknow">Book Now</button></a>
                                
                                
                            </div>
                        </div>
                        {/* End of Drop Down Menu */}

                    </div>
                </nav>

                <div class="d-flex justify-content-center align-items-center mt-5">
                    <div class="text-white text-center">
                    <h1 class="mb-3 display-3">Book Now</h1>
                    {/* <p class="mb-4">There are three different "room" in our site, and every of them are special.</p> */}
                    </div>
                </div>
            </div>
        </div>

     );
}
 
export default NavAccomodation;



