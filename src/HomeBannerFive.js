import { useState } from 'react';
import Carousel from 'react-bootstrap/Carousel';
import {
  MDBCarousel,
  MDBCarouselItem,
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBIcon,
} from "mdb-react-ui-kit";



const HomeBannerFive = () => {

  const {index,setIndex} = useState(0)
  
  const handleSelect = (selectedIndex) => {
    setIndex(selectedIndex);
  }

  return ( 
    <div class="px-4 my-5 text-center bg-white" id="site">

      <h1 class="display-5 fw-bold">What Our Guest Said...</h1>
            
    <MDBContainer className="my-5">
    <MDBCarousel showControls dark>

        <MDBCarouselItem className="active text-center">
          {/* <img
            src="https://mdbcdn.b-cdn.net/img/Photos/Avatars/img%20(10).webp"
            alt="avatar"
            className="rounded-circle shadow-1-strong mb-4"
            style={{ width: "150px" }}
          /> */}
          <MDBRow className="d-flex justify-content-center">
            <MDBCol lg="8">
              <h5 className='mb-3'>Maria Kate</h5>
              <p className="text-muted">
                <MDBIcon fas icon="quote-left" className="pe-2" />
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus
                et deleniti nesciunt sint eligendi reprehenderit reiciendis,
                quibusdam illo, beatae quia fugit consequatur laudantium velit
                magnam error. Consectetur distinctio fugit doloremque.
              </p>
            </MDBCol>
          </MDBRow>
          <ul className="list-unstyled d-flex justify-content-center text-warning mb-0">
            <li>
              <MDBIcon fas icon="star" size="sm" />
            </li>
            <li>
              <MDBIcon fas icon="star" size="sm" />
            </li>
            <li>
              <MDBIcon fas icon="star" size="sm" />
            </li>
            <li>
              <MDBIcon fas icon="star" size="sm" />
            </li>
            <li>
              <MDBIcon fas icon="star" size="sm" />
            </li>
          </ul>
        </MDBCarouselItem>

        <MDBCarouselItem className="text-center">
          {/* <img
            src="https://mdbcdn.b-cdn.net/img/Photos/Avatars/img%20(32).webp"
            alt="avatar"
            className="rounded-circle shadow-1-strong mb-4"
            style={{ width: "150px" }}
          /> */}
          <MDBRow className="d-flex justify-content-center">
            <MDBCol lg="8">
              <h5 className="mb-3">John Doe</h5>
              <p className="text-muted">
                <MDBIcon fas icon="quote-left" className="pe-2" />
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus
                et deleniti nesciunt sint eligendi reprehenderit reiciendis.
              </p>
            </MDBCol>
          </MDBRow>
          <ul className="list-unstyled d-flex justify-content-center text-warning mb-0">
            <li>
              <MDBIcon fas icon="star" size="sm" />
            </li>
            <li>
              <MDBIcon fas icon="star" size="sm" />
            </li>
            <li>
              <MDBIcon fas icon="star" size="sm" />
            </li>
            <li>
              <MDBIcon fas icon="star" size="sm" />
            </li>
            <li>
              <MDBIcon fas icon="star" size="sm" />
            </li>
          </ul>
        </MDBCarouselItem>

        <MDBCarouselItem className="text-center">
          {/* <img
            src="https://mdbcdn.b-cdn.net/img/Photos/Avatars/img%20(1).webp"
            alt="avatar"
            className="rounded-circle shadow-1-strong mb-4"
            style={{ width: "150px" }}
          /> */}
          <MDBRow className="d-flex justify-content-center">
            <MDBCol lg="8">
              <h5 className="mb-3">Anna Deynah</h5>
              <p className="text-muted">
                <MDBIcon fas icon="quote-left" className="pe-2" />
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus
                et deleniti nesciunt sint eligendi reprehenderit reiciendis,
                quibusdam illo, beatae quia fugit consequatur laudantium velit
                magnam error. Consectetur distinctio fugit doloremque.
              </p>
            </MDBCol>
          </MDBRow>
          <ul className="list-unstyled d-flex justify-content-center text-warning mb-0">
            <li>
              <MDBIcon fas icon="star" size="sm" />
            </li>
            <li>
              <MDBIcon fas icon="star" size="sm" />
            </li>
            <li>
              <MDBIcon fas icon="star" size="sm" />
            </li>
            <li>
              <MDBIcon fas icon="star" size="sm" />
            </li>
            <li>
              <MDBIcon fas icon="star" size="sm" />
            </li>
          </ul>
        </MDBCarouselItem>
    </MDBCarousel>
  </MDBContainer>
  </div>
  );
}
 
export default HomeBannerFive;