import React from 'react';
import { MDBFooter, MDBContainer, MDBRow, MDBCol, MDBIcon } from 'mdb-react-ui-kit';
import Map from './Map';

const Footer = () => {
    return ( 
    <MDBFooter bgColor='light' className='text-center text-lg-start text-muted'>
    <section className='d-flex justify-content-center justify-content-lg-between p-4 border-bottom'>
      <div className='me-5 d-none d-lg-block'>
        <span>Get connected with us on social networks:</span>
      </div>

      <div>
        {/* <a href='' className='me-4 text-reset'>
          <MDBIcon fab icon="facebook-f" />
        </a> */}
        <a href='https://www.tiktok.com/@thehideawaycooperlake' className='me-4 text-reset'>
          <MDBIcon fab icon="tiktok" />
        </a>
        <a href='https://www.instagram.com/thehideawaycooperlake/' className='me-4 text-reset'>
          <MDBIcon fab icon="instagram" />
        </a>
        <a href='https://airbnb.com/h/thehideawayatcooperlake' className='me-4 text-reset'>
          <MDBIcon fab icon="airbnb" />
        </a>
      </div>
    </section>

    <section className=''>
      <MDBContainer className='text-center text-md-start mt-5'>
        <MDBRow className='mt-3'>
          <MDBCol md="3" lg="4" xl="3" className='mx-auto mb-4'>
            <h6 className='text-uppercase fw-bold mb-4'>
              <MDBIcon icon="gem" className="me-3" />
              Cooper Lake
            </h6>
            {/* <p>
            Escape the unexpected at one of our three private glamping sites. Nestled on our sprawling, private property, the Hideaway at Cooper Lake is just an hour drive from Chicago or twenty minutes from Valparaiso. Camp in style or host your next private event!
            </p> */}
            <Map />
          </MDBCol>

          <MDBCol md="2" lg="2" xl="2" className='mx-auto mb-4'>
            <h6 className='text-uppercase fw-bold mb-4'>Page</h6>
            <p>
              <a href='/home' className='text-reset'>
                Home
              </a>
            </p>
            <p>
              <a href='/cooperlake' className='text-reset'>
                Cooper Lake
              </a>
            </p>
            <p>
              <a href='/booksite' className='text-reset'>
                Book Now
              </a>
            </p>
          </MDBCol>

          <MDBCol md="3" lg="2" xl="2" className='mx-auto mb-4'>
            <h6 className='text-uppercase fw-bold mb-4'>Useful links</h6>
            <p>
              <a href='/booksite' className='text-reset'>
                Book Now
              </a>
            </p>
            <p>
              <a href='https://airbnb.com/h/thehideawayatcooperlake' className='text-reset'>
                Airbnb
              </a>
            </p>
            <p>
              <a href='https://www.hipcamp.com/en-US/land/indiana-the-hideaway-at-cooper-lake-9mxhwz1l' className='text-reset'>
                Hipcamp
              </a>
            </p>
          </MDBCol>

          <MDBCol md="4" lg="3" xl="3" className='mx-auto mb-md-0 mb-4'>
            <h6 className='text-uppercase fw-bold mb-4'>Contact</h6>
            <p>
              <MDBIcon icon="home" className="me-2" />
              1096 S. Otis Road, Westville, IN 46391
            </p>
            <p>
              <MDBIcon icon="envelope" className="me-3" />
              natalie@leeandforbesprovisions.com 
            </p>
            
          </MDBCol>
        </MDBRow>
      </MDBContainer>
    </section>

    <div className='text-center p-4' style={{ backgroundColor: 'rgba(0, 0, 0, 0.05)' }}>
      © 2024 Copyright: 
      <a className='text-reset fw-bold' href='https://mdbootstrap.com/'>
        The Hideway Cooper Lake
      </a>
    </div>
  </MDBFooter> 
  );
}
 
export default Footer;