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
    <div class="px-4 my-5 pb-3 text-center bg-white" id="site">

      <h1 class="display-5 fw-bold">Happy Hideaway Guests</h1>
            
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
              <h5 className='mb-3'>Meredith - Airbnb</h5>
              <p className="text-muted">
                <MDBIcon fas icon="quote-left" className="pe-2" />
                If you are looking for a secluded spot with beautiful views and a fun experience, this is it!!!! The yurt was very clean and so cute!!! We had such a great time, we will definitely be back!
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
              <h5 className="mb-3">Ranya - Airbnb</h5>
              <p className="text-muted">
                <MDBIcon fas icon="quote-left" className="pe-2" />
                Such an awesome getaway, a very unique experience being on a private lake with access to lake amenities. You have everything you need to glamp in a stunning campsite. The host was extremely friendly, went above and beyond to set up a special occasion gift for us! Looking forward to our next visit!
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
              <h5 className="mb-3">Rasa A - Hipcamp</h5>
              <p className="text-muted">
                <MDBIcon fas icon="quote-left" className="pe-2" />
                We enjoyed our stay very much. The yurt was spacious, very clean and comfortable. The beauty and privacy of this site was unparalleled. Natalie has thought of everything to make the stay enjoyable. Loved the fishing and kayaking. Just bring food and drink and relax. Will be back.
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