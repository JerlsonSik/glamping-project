const AddOnBanner = () => {
    return ( 
        <div class="p-3 bg-image" style={{
            backgroundImage: "url(/glamping-background.jpg)", height:"400px"
        }}>
            <div class="mask d-flex justify-content-center align-items-center" style={{backgroundColor: "#00000099"}}>
                
                <div class="container col-md-8">
                        <div class="text-white">
                            <h1 class="display-3">Add Ons</h1>
                            <p>Choose what you want to add to make your trip more perfect!</p>
                        </div>
                </div> 
            </div>
        </div>
     );
}
 
export default AddOnBanner;