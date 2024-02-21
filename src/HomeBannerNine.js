const HomeBannerNine = () => {
    return ( 
        <div class="container mt-5 g-5" id="featured-3">
            
            <h1 class="display-5 fw-bold text-center">What to expect</h1>
            <p className="text-center">Enjoying your days at our private escape site, reconnect with the nature.</p>
            <div class="row g-4 py-5 row-cols-1 row-cols-lg-3">
            <div class="">
                <img class="d-block rounded mb-2" src="\lake.png" alt="" width="100" height="100"></img>
                <h2>Private Lake</h2>
                <p>Paragraph of text beneath the heading to explain the heading. We'll add onto it with another sentence and probably just keep going until we run out of words.</p>
                <a class="btn btn-primary btn-sm fw-bold" href="/site"
                role="button" rel="nofollow">Learn More</a>
            </div>
            <div class="">
                <img class="d-block rounded mb-2" src="\bedroom.png" alt="" width="100" height="100"></img>
                <h2>Comfortable Sleep</h2>
                <p>Paragraph of text beneath the heading to explain the heading. We'll add onto it with another sentence and probably just keep going until we run out of words.</p>
                <a class="btn btn-primary btn-sm fw-bold" href="/site"
                role="button" rel="nofollow">Learn More</a>
            </div>
            <div class="">
                <img class="d-block rounded mb-2" src="\picnic-table.png" alt="" width="100" height="100"></img>
                <h2>Outdoor Dining</h2>
                <p>Paragraph of text beneath the heading to explain the heading. We'll add onto it with another sentence and probably just keep going until we run out of words.</p>
                <a class="btn btn-primary btn-sm fw-bold" href="/site"
                role="button" rel="nofollow">Learn More</a>
            </div>
            </div>
        </div>
     );
}
 
export default HomeBannerNine;