import React from 'react';
import {
  MDBCard,
  MDBCardImage,
  MDBCardBody,
  MDBCardTitle,
  MDBCardText,
  MDBRow,
  MDBCol
} from 'mdb-react-ui-kit';

const HomeBannerSix = () => {
    return ( 
        <div class="px-4 py-5 text-center bg-light" id="about">
        <img class="d-block mx-auto mb-4" src="\glamping.png" alt="" width="100" height="100"></img>
        <h2 class="display-5 fw-bold">How to Enjoy your weekend</h2>
        <p class="display-9 col-md-8 mx-auto">Bring your family and friend with you. Enjoy the water actvity and stunning view over here.</p>
        <a
            data-mdb-ripple-init
            class="btn btn-outline-light btn-lg m-2"
            href="https://mdbootstrap.com/docs/standard/"
            target="_blank"
            role="button"
          >Learn More About Our Site</a>
        </div>
    );
}
 
export default HomeBannerSix;