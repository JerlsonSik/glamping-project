const AboutBanner = () => {
    const today = new Date();

    return ( 
        <div class="p-3 bg-image" style={{
            backgroundImage: "url(/glamping-background.jpg)", height:"400px"
        }}>
            <div class="mask d-flex justify-content-center align-items-center" style={{backgroundColor: "#00000099"}}>
                
                <div class="container col-md-8">
                    <div class="text-white">
                        <h1 class="display-3 mb-4">About Us</h1>
                        <p>There are three different "room" in our site, and every of them are special.</p>
                    </div>
                </div> 
            </div>
        </div>
    );
}
 
export default AboutBanner;