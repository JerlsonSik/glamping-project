const HomeBannerEight = () => {
    return (
        <>
        <div className="container my-5 g-5">
        <h1 class="display-5 fw-bold text-center">What to expect</h1>
            <p className="text-center">Escape the unexpected at one of our three private glamping sites. Nestled on our sprawling,
            private property, the Hideaway at Cooper Lake is just an hour drive from Chicago or twenty minutes from Valparaiso. Camp in style or host your next private event!
            </p>
            <p className="text-center">A private,
            winding lane leads you to Cooper Lake, our family owned and operated property designed for children and adults, alike. “Unplug” during your stay – but do so with many of
            the comforts of a traditional hotel! If you're enticed by the idea of camping,but don't want to deal with the work that comes with it, glamping (or glamorous camping) is the perfect
            compromis
            </p>
        </div>
            <div className="d-flex justify-content-center align-items-center bg-light pt-3 pb-5">
                
                <div className="row col-12 g5-">
                    <div className="col-md-6">
                    <div class="bg-transparent rounded" style={{backgroundImage: "url(/cooperlake.jpg)", height: "400px", opacity:"100%",backgroundSize:"cover", backgroundPosition:"right 35% bottom 30%"}}>
                        <div style={{backgroundColor: "rgba(0, 0, 0, 0.4)", height:"100%"}}>
                            <div class="d-flex justify-content-center align-items-center h-100 text-white">
                                <div className="text-center">
                                    <h1>Cooper Lake</h1>
                                    <p>Embrace the outdoor</p>
                                    <a class="btn btn-primary btn-lg m-2 fw-bold" href="/cooperlake"
                                    role="button" rel="nofollow">Learn More</a>
                                </div>
                            </div>
                        </div>
                    </div>

                    </div>
                    <div className="col-md-6">
                        <div class="bg-transparent" style={{backgroundImage: "url(/bookasite.jpg)", height: "400px", opacity:"100%", backgroundSize:"cover", backgroundPosition:"center"}}>
                            <div style={{backgroundColor: "rgba(0, 0, 0, 0.4)", height:"100%"}}>
                                <div class="d-flex justify-content-center align-items-center h-100 text-white">
                                    <div className="text-center">
                                        <h1>Book A Site</h1>
                                        <p>Book the hideaway</p>
                                        <a class="btn btn-primary btn-lg m-2 fw-bold" href="/booknow"
                                        role="button" rel="nofollow">Book Now</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            
        </>
     );
}
 
export default HomeBannerEight;