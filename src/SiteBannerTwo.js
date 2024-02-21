const SiteBannerTwo = () => {
    return ( 
        <div class = "container col-md-8 py-5 bg-white">
            <div class="row flex-lg-row-reverse align-items-center g-5 py-5">
                <div class="col-lg-6">
                    <img src="\Cooper-Lake-Overview.jpg" class="d-block mx-lg-auto img-fluid rounded" alt="Profile Picture" width="700" height="500px" loading="lazy" />
                </div>
                <div class="col-lg-6">
                    <h1 class="display-5 fw-bold lh-1 mb-3">Cooper Lake</h1>
                    <p class="lead">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text evesince the 1500s.
                  Lorem Ipsum is simply dummy text of the printing and type setting industry. Lorem Ipsum has been the industry's standard dummy text ever</p>
                    <div class="d-grid gap-2 d-md-flex justify-content-md-start">
                        <button type="button" class="btn btn-primary btn-lg px-4 me-md-2"><a href="https://www.linkedin.com/in/jerlsonsik/" class="link-light text-decoration-none">Book Now</a></button>
                    </div>
                </div>
            </div>
            <div class="row flex-lg-row align-items-center g-5 py-5">
                <div class="col-lg-6">
                    <img src="\sample-image.jpg" class="d-block mx-lg-auto img-fluid rounded" alt="Profile Picture" width="700" height="500px" loading="lazy" />
                </div>
                <div class="col-lg-6">
                    <h1 class="display-5 fw-bold lh-1 mb-3">Glamping Site</h1>
                    <p class="lead">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text evesince the 1500s.
                  Lorem Ipsum is simply dummy text of the printing and type setting industry. Lorem Ipsum has been the industry's standard dummy text ever</p>
                    <div class="d-grid gap-2 d-md-flex justify-content-md-start">
                        <button type="button" class="btn btn-primary btn-lg px-4 me-md-2"><a href="https://www.linkedin.com/in/jerlsonsik/" class="link-light text-decoration-none">Social Media</a></button>
                        <button type="button" class="btn btn-dark btn-lg px-4"><a href="https://github.com/JerlsonSik" class="link-light text-decoration-none">Tiktok</a></button>
                    </div>
                </div>
            </div>
        </div>
     );
}
 
export default SiteBannerTwo;