const BookBannerThree = () => {
    return ( 
        <div class="p-3 bg-image" style={{
            backgroundImage: "url(/glamping-background.jpg)", height:"400px"
        }}>
            <div class="mask d-flex justify-content-center align-items-center" style={{backgroundColor: "#00000099"}}>
                
                <div class="container col-md-8">
                        <div class="text-white">
                            <h1 class="display-3">Book Your Stay</h1>
                            <p>Check out which site are available for your booking.</p>
                        </div>
                </div> 
            </div>
            
        </div>
        
     );
}
 
export default BookBannerThree;