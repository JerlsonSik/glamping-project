const SiteBanner = () => {
    return ( 
        <div class="p-3 bg-image" style={{
            backgroundImage: "url(/glamping-background.jpg)", height:"400px"
        }}>
            <div class="mask d-flex justify-content-center align-items-center" style={{backgroundColor: "#00000099"}}>
                
                <div class="container col-md-8">
                        <div class="text-white">
                            <h1 class="display-3 mb-4">Glamping Site</h1>
                            {/* <p>It is always good to go into the nature.</p> */}
                        </div>
                </div> 
            </div>
        </div>
    );
}
 
export default SiteBanner;