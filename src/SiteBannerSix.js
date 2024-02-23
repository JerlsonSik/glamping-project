import './SiteBannerSix.css'

const SiteBannerSix = () => {
    return ( 
        <div className="SiteBannerSix overlays">
            <div>
                <button class="navbar-toggler closebtn" type="button">
                <i class="fas fa-times fa-2x colorbtn" aria-hidden="true" ></i>
                </button>
            </div>
            <div className="align-self-center">
            <div id="carouselExampleControls" class="carousel slide align-self-center" data-bs-ride="carousel">
                        <div class="carousel-inner text-center">
                            <div class="carousel-item active">
                                <img class="w-50" src="./sample-image.jpg" alt="First slide"/>
                            </div>
                            <div class="carousel-item active">
                                <img class="w-50" src="./glamping-three.jpg" alt="Second slide"/>
                            </div>
                            
                        </div>
                        <a class="carousel-control-prev d-flex align-items-center" href="#carouselExampleControls" role="button" data-bs-slide="prev">
                            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                            <span class="sr-only">Previous</span>
                        </a>
                        <a class="carousel-control-next d-flex align-items-center" href="#carouselExampleControls" role="button" data-bs-slide="next">
                            <span class="carousel-control-next-icon" aria-hidden="true"></span>
                            <span class="sr-only">Next</span>
                        </a>
                    </div>
                    </div>
        </div>
            
     );
}
 
export default SiteBannerSix;

{/* <div className='overlays d-flex align-items-center justify-content-center h-100'>
                    <div id="carouselExampleControls" class="carousel slide" data-bs-ride="carousel">
                        <div class="carousel-inner text-center">
                            <div class="carousel-item active">
                                <img class="w-50" src="./sample-image.jpg" alt="First slide"/>
                            </div>
                            <div class="carousel-item active">
                                <img class="w-50" src="./glamping-three.jpg" alt="Second slide"/>
                            </div>
                            
                        </div>
                        <a class="carousel-control-prev d-flex align-items-center" href="#carouselExampleControls" role="button" data-bs-slide="prev">
                            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                            <span class="sr-only">Previous</span>
                        </a>
                        <a class="carousel-control-next d-flex align-items-center" href="#carouselExampleControls" role="button" data-bs-slide="next">
                            <span class="carousel-control-next-icon" aria-hidden="true"></span>
                            <span class="sr-only">Next</span>
                        </a>
                    </div>
            </div> */}