const HomeBannerSeven = () => {
    return ( 
        <div class="p-3 text-center bg-image" style={{
            backgroundImage: "url(/glamping-background.jpg)", height:"300px"
        }}>
        
        <div class="mask" style={{backgroundColor: "#00000099"}}>
            <div class="d-flex justify-content-center align-items-center h-100">
        <div class="text-white">
          <h1 class="mb-3">It is all about the lake</h1>
          <h5 class="mb-4">Our Cooper Lake have more than 500 arces, living with a lot of differnet fishes that make the best place to fish and get around with.</h5>
          <a
            data-mdb-ripple-init
            class="btn btn-outline-light btn-lg m-2"
            href="https://www.youtube.com/watch?v=c9B4TPnak1A"
            role="button"
            rel="nofollow"
            target="_blank"
          >Book Now</a
          >
          <a
            data-mdb-ripple-init
            class="btn btn-outline-light btn-lg m-2"
            href="https://mdbootstrap.com/docs/standard/"
            target="_blank"
            role="button"
          >Learn More About Our Site</a
          >
        </div>
      </div>
    </div>
        </div> 
     );
}
 
export default HomeBannerSeven;