import Button from 'react-bootstrap/Button'; 
const HomeBannerThree = () => {
    return ( 
        <div class="px-4 my-5 text-center" id="site">

            <h1 class="display-5 fw-bold">About Site</h1>
            <p>We had 3 different site all with dififerent stunning view that make your day.</p>
            <div class="col-md-8 mx-auto">

                <div class="row mt-5">
                    <div class="col-sm mb-4">
                        <div class="dbox w-100 text-center">
                            <img src="./glamping-three.jpg" alt="glamping-three" class="img-fluid" height={"500px"}/>
                            <p className='my-2'>Our lovely site one is one of the best option to stay with 4 people with a king bed and two single bed on the side.</p>
                            <Button variant="outline-primary" size='md'>Learn More</Button>
                        </div>
                    </div>
                    <div class="col-md mb-4">
                        <div class="dbox w-100 text-center">
                            <img src="./glamping-three.jpg" alt="glamping-three" class="img-fluid" />
                            <p className='my-2'>Our lovely site one is one of the best option to stay with 4 people with a king bed and two single bed on the side.</p>
                            <Button variant="outline-primary" size='md'>Learn More</Button>
                        </div>
                    </div>
                    <div class="col-sm mb-4">
                        <div class="dbox w-100 text-center">
                            <img src="./glamping-three.jpg" alt="glamping-three" class="img-fluid" />
                            <p className='my-2'>Our lovely site one is one of the best option to stay with 4 people with a king bed and two single bed on the side.</p>
                            <Button variant="outline-primary" size='md'>Learn More</Button>
                        </div>
                    </div>

                </div>
                
            

            </div>
        </div>
     );
}
 
export default HomeBannerThree;