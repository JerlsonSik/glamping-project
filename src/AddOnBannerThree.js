import {
    MDBCard,
    MDBCardImage,
    MDBCardBody,
    MDBCardTitle,
    MDBCardText,
    MDBRow,
    MDBCol
  } from 'mdb-react-ui-kit';

const AddONBannerThree = () => {
    return ( 
        <div className='bg-light'>
        <div className='container bg-light px-4 my-5 text-center'>
            <MDBRow className='my-3 text-center bg-light'>
                <MDBCol className='mb-3'>
                    <MDBCard className='h-100'>
                    <MDBCardImage
                        src='./glamping-four.jpg'
                        alt='...'
                        position='top'
                    />
                    <MDBCardBody>
                        <MDBCardTitle className='fw-bold'>Propane</MDBCardTitle>
                        <MDBCardText>
                        This is a longer card with supporting text below as a natural lead-in to additional content.
                        This content is a little bit longer.
                        </MDBCardText>
                        <button className='btn btn-primary'>Add</button>
                    </MDBCardBody>
                    </MDBCard>
                </MDBCol>

                <MDBCol className='mb-3'>
                    <MDBCard className='h-100'>
                    <MDBCardImage
                        src='./glamping-background.jpg'
                        alt='...'
                        position='top'
                    />
                    <MDBCardBody>
                        <MDBCardTitle className='fw-bold'>Extra Firewood</MDBCardTitle>
                        <MDBCardText>This is a longer card with supporting text below as a natural lead-in to additional content.
                        This content is a little bit longer.</MDBCardText>
                        <button className='btn btn-primary'>Add</button>
                    </MDBCardBody>
                    </MDBCard>
                </MDBCol>

                <MDBCol className='mb-3'>
                    <MDBCard className='h-100'>
                    <MDBCardImage
                        src='https://mdbootstrap.com/img/new/standard/city/043.webp'
                        alt='...'
                        position='top'
                    />
                    <MDBCardBody>
                        <MDBCardTitle className='fw-bold'>Fishing Bait</MDBCardTitle>
                        <MDBCardText>
                            This is a longer card with supporting text below as a natural lead-in to additional content.
                            This content is a little bit longer.
                        </MDBCardText>
                        <button className='btn btn-primary'>Add</button>
                    </MDBCardBody>
                    </MDBCard>
                </MDBCol>
            </MDBRow>
            <MDBRow className='my-3 text-center bg-light'>
                <MDBCol className='mb-3'>
                    <MDBCard className='h-100'>
                    <MDBCardImage
                        src='./glamping-four.jpg'
                        alt='...'
                        position='top'
                    />
                    <MDBCardBody>
                        <MDBCardTitle className='fw-bold'>Sunblock</MDBCardTitle>
                        <MDBCardText>
                        This is a longer card with supporting text below as a natural lead-in to additional content.
                        This content is a little bit longer.
                        </MDBCardText>
                        <button className='btn btn-primary'>Add</button>
                    </MDBCardBody>
                    </MDBCard>
                </MDBCol>

                <MDBCol className='mb-3'>
                    <MDBCard className='h-100'>
                    <MDBCardImage
                        src='./glamping-background.jpg'
                        alt='...'
                        position='top'
                    />
                    <MDBCardBody>
                        <MDBCardTitle className='fw-bold'>Bug Spray</MDBCardTitle>
                        <MDBCardText>This is a longer card with supporting text below as a natural lead-in to additional content.
                        This content is a little bit longer.</MDBCardText>
                        <button className='btn btn-primary'>Add</button>
                    </MDBCardBody>
                    </MDBCard>
                </MDBCol>

                <MDBCol className='mb-3'>
                    <MDBCard className='h-100'>
                    <MDBCardImage
                        src='https://mdbootstrap.com/img/new/standard/city/043.webp'
                        alt='...'
                        position='top'
                    />
                    <MDBCardBody>
                        <MDBCardTitle className='fw-bold'>Anniversary Delight</MDBCardTitle>
                        <MDBCardText>
                            This is a longer card with supporting text below as a natural lead-in to additional content.
                            This content is a little bit longer.
                        </MDBCardText>
                        <button className='btn btn-primary'>Add</button>
                    </MDBCardBody>
                    </MDBCard>
                </MDBCol>
            </MDBRow>

            
            
        </div>
    </div>
     );
}
 
export default AddONBannerThree;