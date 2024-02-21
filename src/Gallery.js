import './Gallery.css'

const Gallery = () => {
    return ( 
      <div className='container col-lg-8 Gallery'>
         <div className=''>
            <div id="carouselExampleIndicators" class="carousel slide" data-bs-ride="carousel">
               <ol class="carousel-indicators">
                  <li data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" class="active"></li>
                  <li data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1"></li>
                  <li data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2"></li>
               </ol>
               <div class="carousel-inner">
                  <div class="carousel-item active">
                     <img class="d-block w-100" src="/glamping-background.jpg" alt="First slide"/>
                  </div>
                  <div class="carousel-item">
                     <img class="d-block w-100" src="/glamping-three.jpg" alt="Second slide"/>
                  </div>
                  <div class="carousel-item">
                     <img class="d-block " src="/sample-image.jpg" alt="Third slide"/>
                  </div>
               </div>
               <a class="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-bs-slide="prev">
                  <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                  <span class="sr-only">Previous</span>
               </a>
               <a class="carousel-control-next" href="#carouselExampleIndicators" role="button" data-bs-slide="next">
                  <span class="carousel-control-next-icon" aria-hidden="true"></span>
                  <span class="sr-only">Next</span>
               </a>
            </div> 
         </div>  
      </div>  
     );
}
 
export default Gallery;