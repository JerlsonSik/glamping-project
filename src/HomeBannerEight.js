const HomeBannerEight = () => {
    return (
        <>
            <div className="d-flex justify-content-center align-items-center bg-light py-5">
                <div className="row col-12 g-5">
                    <div className="col-md-6">
                    <div class="bg-transparent rounded" style={{backgroundImage: "url(/MainImage.webp)", height: "400px", opacity:"100%",backgroundSize:"cover"}}>
                        <div style={{backgroundColor: "rgba(0, 0, 0, 0.4)", height:"100%"}}>
                            <div class="d-flex justify-content-center align-items-center h-100 text-white">
                                <div className="text-center">
                                    <h1>Accomodation</h1>
                                    <p>Find out where you could stay here</p>
                                    <a class="btn btn-primary btn-lg m-2 fw-bold" href="/accomodation"
                                    role="button" rel="nofollow">Learn More</a>
                                </div>
                            </div>
                        </div>
                    </div>

                    </div>
                    <div className="col-md-6">
                        <div class="bg-transparent" style={{backgroundImage: "url(/Cooper-Lake-Overview.webp)", height: "400px", opacity:"100%", backgroundSize:"cover"}}>
                            <div style={{backgroundColor: "rgba(0, 0, 0, 0.4)", height:"100%"}}>
                                <div class="d-flex justify-content-center align-items-center h-100 text-white">
                                    <div className="text-center">
                                        <h1>Cooper Lake Site</h1>
                                        <p>This is a longer card with supporting text below.</p>
                                        <a class="btn btn-primary btn-lg m-2 fw-bold" href="/site"
                                        role="button" rel="nofollow">Learn More</a>
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