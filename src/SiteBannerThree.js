const SiteBannerThree = () => {
    return ( 
        <div class="px-4 py-5 text-center bg-light" id="about">
            
            <h2 class="display-5 fw-bold">Site Map</h2>
            <p class="display-9 col-md-8 mx-auto mt-3 mb-5">
            Image below will show you how the site looks like including our bathroom, lake and all other site.</p>

            <div class="p-3 text-center bg-image img-fluid" style={{
                backgroundImage: "url(/site-map.jpg)", height:"500px"
            }}></div>
        
        
        </div>
    );
}
 
export default SiteBannerThree;