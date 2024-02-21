import React from "react";

const Banner = () => {
  const myvar = {"url": "https://login.smoobu.com/en/booking-tool/iframe/749585", "baseUrl": "https://login.smoobu.com", "target": "#apartmentIframeAll" }
    return ( 

      

      <div class="p-3 text-center bg-image" style={{
          backgroundImage: "url(/glamping-background.jpg)", height:"800px"
      }}>
      
        <div class="mask" style={{backgroundColor: "#00000099"}}>
          <div class="d-flex justify-content-center align-items-center h-100">
            <div class="text-white">
              <h1 class="mb-3 display-5 fw-bold">Cooper Lake Glamping</h1>
              <h5 class="mb-3 col-md-8 mx-auto display-8">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text evesince the 1500s.
                  Lorem Ipsum is simply dummy text of the printing and type setting industry. Lorem Ipsum has been the industry's standard dummy text ever</h5>
              <a data-mdb-ripple-init class="btn btn-outline-light btn-lg" href="/book" role="button">
                Book Now
              </a>
            </div>
          </div>
        </div>
      </div> 

      

        
     );
}
 
export default Banner;
