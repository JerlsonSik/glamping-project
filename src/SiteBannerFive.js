const SiteBannerFive = () => {
    return ( 
        <div className="container col-lg-8 my-5">
            <div className="row d-flex flex-row-reverse">
                <div class="col-lg-6">
                    <img src="/cooperlake.jpg" class="img-fluid rounded" alt="..."/>
                </div>
                <div class="col-lg-6 d-flex align-items-center justify-content-center">
                    <div className="p-3">
                        <h1 class="display-5 fw-bold mb-3">Cooper Lake</h1>
                    
                        <p class="">The Hideaway at Cooper Lake offers a tranquil escape where you can reconnect with nature
and create lasting memories. Immerse yourself in a safe, remote location.</p>
                        <div class="d-grid gap-2 d-md-flex justify-content-start">
                            <button type="button" class="btn btn-primary btn-lg px-4 me-md-2"><a href="https://www.instagram.com/thehideawaycooperlake/" class="link-light text-decoration-none">Instagram</a></button>
                            <button type="button" class="btn btn-dark btn-lg px-4"><a href="https://www.tiktok.com/@thehideawaycooperlake" class="link-light text-decoration-none">Tiktok</a></button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
     );
}
 
export default SiteBannerFive;