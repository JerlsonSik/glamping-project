const SiteBannerFive = () => {
    return ( 
        <div className="container col-lg-8 my-5">
            <div className="row d-flex flex-row-reverse">
                <div class="col-lg-6">
                    <img src="\Cooper-Lake-Overview.webp" class="img-fluid rounded" alt="..."/>
                </div>
                <div class="col-lg-6 d-flex align-items-center justify-content-center">
                    <div className="p-3">
                        <h1 class="display-5 fw-bold mb-3">Cooper Lake</h1>
                    
                        <p class="">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text evesince the 1500s.
                            Lorem Ipsum is simply dummy text of the printing and type setting industry. Lorem Ipsum has been the industry's standard dummy text ever</p>
                        <div class="d-grid gap-2 d-md-flex justify-content-start">
                            <button type="button" class="btn btn-primary btn-lg px-4 me-md-2"><a href="https://www.linkedin.com/in/jerlsonsik/" class="link-light text-decoration-none">Social Media</a></button>
                            <button type="button" class="btn btn-dark btn-lg px-4"><a href="https://github.com/JerlsonSik" class="link-light text-decoration-none">Tiktok</a></button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
     );
}
 
export default SiteBannerFive;