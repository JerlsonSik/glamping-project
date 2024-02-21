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

const HomeBannerFour = () => {
    return ( 
        <div className='px-4 my-5 text-center'>
    <h1 class="display-5 fw-bold">What to do here...</h1>
    <p>We had 3 different site all with dififerent stunning view that make your day.</p>
    <MDBRow className='my-5 text-center bg-white'>
      <MDBCol className='mb-3'>
        <MDBCard className='h-100'>
          <MDBCardImage
            src='./glamping-four.jpg'
            alt='...'
            position='top'
            style={{maxHeight:"300px"}}
          />
          <MDBCardBody>
            <MDBCardTitle className='fw-bold'>Campfire</MDBCardTitle>
            <MDBCardText>
              This is a longer card with supporting text below as a natural lead-in to additional content.
              This content is a little bit longer.
            </MDBCardText>
          </MDBCardBody>
        </MDBCard>
      </MDBCol>
      <MDBCol className='mb-3'>
        <MDBCard className='h-100'>
          <MDBCardImage
            src='./Dining.jpg'
            alt='...'
            position='top'
            style={{maxHeight:"300px"}}
          />
          <MDBCardBody>
            <MDBCardTitle className='fw-bold'>Dining</MDBCardTitle>
            <MDBCardText>This is a longer card with supporting text below as a natural lead-in to additional content.
              This content is a little bit longer.</MDBCardText>
          </MDBCardBody>
        </MDBCard>
      </MDBCol>
      <MDBCol className='mb-3'>
        <MDBCard className='h-100'>
          <MDBCardImage
            src='Fishing.jpg'
            alt='...'
            position='top'
            style={{maxHeight:"300px"}}
          />
          <MDBCardBody>
            <MDBCardTitle className='fw-bold'>Fishing</MDBCardTitle>
            <MDBCardText>
                This is a longer card with supporting text below as a natural lead-in to additional content.
                This content is a little bit longer.
            </MDBCardText>
          </MDBCardBody>
        </MDBCard>
      </MDBCol>
      <MDBCol className='mb-3'>
        <MDBCard className='h-100'>
          <MDBCardImage
            src='./Kayaking.jpg'
            alt='...'
            position='top'
            style={{maxHeight:"300px"}}
          />
          <MDBCardBody>
            <MDBCardTitle className='fw-bold'>Kayaking</MDBCardTitle>
            <MDBCardText>
              This is a longer card with supporting text below as a natural lead-in to additional content.
              This content is a little bit longer.
            </MDBCardText>
          </MDBCardBody>
        </MDBCard>
      </MDBCol>
    </MDBRow>
    </div>
     );
}
 
export default HomeBannerFour;

// import Button from 'react-bootstrap/Button'; 
// const HomeBannerFour = () => {
//     return ( 
//         <div class="px-4 my-5 text-center bg-light" id="site">

//             <h1 class="display-5 fw-bold">What to expect</h1>
            
//             <div class="mx-auto">

//                 <div class="row mt-5">
//                     <div class="col-sm mb-4 ">
//                         <div class="dbox w-100 text-center bg-white">
//                             <img src="./glamping-four.jpg" alt="glamping-three" class="img-fluid" height={"500px"}/>
//                             <h4 className='fw-bold mt-2'>Camping</h4>
//                             <p className='my-2'>Our lovely site one is one of the best option to stay with 4 people with a king bed and two single bed on the side.</p>
                            
//                         </div>
//                     </div>
//                     <div class="col-sm mb-4">
//                         <div class="dbox w-100 text-center bg-white">
//                             <img src="./glamping-four.jpg" alt="glamping-three" class="img-fluid" />
//                             <h4 className='fw-bold mt-2'>Fishing</h4>
//                             <p className='my-2'>Our lovely site one is one of the best option to stay with 4 people with a king bed and two single bed on the side.</p>
                            
//                         </div>
//                     </div>
//                     <div class="col-sm mb-4">
//                         <div class="dbox w-100 text-center bg-white">
//                             <img src="./glamping-four.jpg" alt="glamping-three" class="img-fluid" />
//                             <h4 className='fw-bold mt-2'>Kayaking</h4>
//                             <p className='my-2'>Our lovely site one is one of the best option to stay with 4 people with a king bed and two single bed on the side.</p>
                            
//                         </div>
//                     </div>
//                     <div class="col-sm mb-4">
//                         <div class="dbox w-100 text-center bg-white">
//                             <img src="./glamping-four.jpg" alt="glamping-three" class="img-fluid" />
//                             <h4 className='fw-bold mt-2'>Campfire</h4>
//                             <p className='my-2'>Our lovely site one is one of the best option to stay with 4 people with a king bed and two single bed on the side.</p>
                        
//                         </div>
//                     </div>

//                 </div>

//             </div>
//         </div>
//     );
// }
 
// export default HomeBannerFour;