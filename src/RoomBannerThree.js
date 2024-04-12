import './RoomBannerThree.css'

const RoomBannerThree = () => {
    return ( 
        <div className="container col-lg-8 my-4 RoomBannerThree">
            <div className="wrapper shadow my-2">
                <div className="row">
                    <div className="col-lg-5">
                        <div id="carouselExampleControls" class="carousel slide" data-bs-ride="carousel">
                            <div class="carousel-inner">
                                <div class="carousel-item active">
                                    <img src="/BedroomImage1.jpg" class="d-block" alt="..." />
                                </div>
                                <div class="carousel-item">
                                    <img src="/BedroomImage4.jpg" class="d-block" alt="..." />
                                </div>
                                <div class="carousel-item active">
                                    <img src="/BedroomImage5.jpg" class="d-block" alt="..." />
                                </div>
                                <div class="carousel-item active">
                                    <img src="/BedroomImage6.jpg" class="d-block" alt="..." />
                                </div>
                                <div class="carousel-item">
                                    <img src="/BedroomImage7.jpg" class="d-block" alt="..." />
                                </div>
                                <div class="carousel-item">
                                    <img src="/BedroomImage8.jpg" class="d-block" alt="..." />
                                </div>
                                <div class="carousel-item">
                                <img src="/BedroomImage12.jpg" class="d-block" alt="..." />
                                </div>
                                <div class="carousel-item">
                                    <img src="/BedroomImage14.jpg" class="d-block" alt="..." />
                                </div>
                            </div>
                            <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
                                <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                                <span class="visually-hidden">Previous</span>
                            </button>
                            <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
                                <span class="carousel-control-next-icon" aria-hidden="true"></span>
                                <span class="visually-hidden">Next</span>
                            </button>
                        </div>
                    </div>

                    <div className="col-lg-7 align-self-center">
                        <div className="p-3">
                            <div className="my-3">
                                <p className="fs-2 fw-bold">Round Room</p>
                            </div>                            
                            <table>
                            <tr>
                                <div className="">
                                    <td className="pe-2">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" viewBox="0 0 24 24"><path fill="#4f4f4f" d="M6.75 4h10.5a2.75 2.75 0 0 1 2.745 2.582L20 6.75v3.354a2.752 2.752 0 0 1 1.994 2.459l.006.187v7.5a.75.75 0 0 1-1.493.102l-.007-.102V18h-17v2.25a.75.75 0 0 1-.648.743L2.75 21a.75.75 0 0 1-.743-.648L2 20.25v-7.5c0-1.259.846-2.32 2-2.647V6.75a2.75 2.75 0 0 1 2.582-2.745L6.75 4Zm12.5 7.5H4.75a1.25 1.25 0 0 0-1.244 1.122l-.006.128v3.75h17v-3.75a1.25 1.25 0 0 0-1.122-1.243l-.128-.007Zm-2-6H6.75a1.25 1.25 0 0 0-1.244 1.122L5.5 6.75V10H7a1 1 0 0 1 1-1h2a1 1 0 0 1 .993.883L11 10h2a1 1 0 0 1 1-1h2a1 1 0 0 1 .993.883L17 10h1.5V6.75a1.25 1.25 0 0 0-1.122-1.244L17.25 5.5Z"/></svg>
                                    </td>
                                    <td className="pe-2">
                                        <p className="fw-bold">Bed:</p>
                                    </td>
                                    <td>
                                        <p>1 King Bed + 2 Single Bed</p>
                                    </td>
                                </div>
                            </tr>
                            <tr>
                                <div className="">
                                    <td className="pe-2">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" viewBox="0 0 24 24"><path fill="#4f4f4f" d="M16 11c1.66 0 2.99-1.34 2.99-3S17.66 5 16 5s-3 1.34-3 3s1.34 3 3 3zm-8 0c1.66 0 2.99-1.34 2.99-3S9.66 5 8 5S5 6.34 5 8s1.34 3 3 3zm0 2c-2.33 0-7 1.17-7 3.5V18c0 .55.45 1 1 1h12c.55 0 1-.45 1-1v-1.5c0-2.33-4.67-3.5-7-3.5zm8 0c-.29 0-.62.02-.97.05c.02.01.03.03.04.04c1.14.83 1.93 1.94 1.93 3.41V18c0 .35-.07.69-.18 1H22c.55 0 1-.45 1-1v-1.5c0-2.33-4.67-3.5-7-3.5z"/></svg>
                                    </td>
                                    <td className="pe-2">
                                        <p className="fw-bold overflow-hidden">Capacity:</p>
                                    </td>
                                    <td>
                                        <p>4 people</p>
                                    </td>
                                </div>
                            </tr>
                            <tr>
                                <div>
                                    <td className="pe-2 mb-0">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" viewBox="0 0 24 24"><path fill="#4f4f4f" d="m15.9 18.5l6 1.6l-.4 1.9l-9.4-2.5L2.7 22l-.5-1.9l6-1.6l-6.1-1.6l.5-1.9l9.4 2.5l9.4-2.5l.5 1.9l-6 1.6m.17-10.58c-.16-.22-.36-.42-.57-.59c-.45-.43-1-.74-1.44-1.2C13 5.08 12.79 3.34 13.44 2c-.65.17-1.26.54-1.77.95C9.84 4.46 9.11 7.1 10 9.38c0 .07.04.15.04.24c0 .16-.11.3-.25.38a.512.512 0 0 1-.57-.23c-.8-1.03-.93-2.51-.38-3.7c-1.19.99-1.84 2.65-1.73 4.22c.02.36.07.71.19 1.07c.11.44.29.87.52 1.25c.75 1.25 2.08 2.15 3.5 2.33c1.52.2 3.14-.09 4.31-1.15c1.3-1.2 1.77-3.12 1.08-4.79l-.1-.17c-.14-.33-.33-.63-.57-.9l.03-.01m-2.24 4.55c-.2.18-.52.36-.78.44c-.79.28-1.59-.12-2.05-.6c.84-.2 1.34-.84 1.5-1.48c.11-.58-.11-1.05-.21-1.61c-.08-.53-.07-.99.13-1.49c.13.27.27.55.44.77c.55.72 1.41 1.04 1.59 2c.02.13.05.22.05.33c0 .6-.24 1.24-.68 1.64"/></svg>
                                    </td>
                                    <td className="pe-2">
                                        <p className="fw-bold">Campfire:</p>
                                    </td>
                                    <td>
                                        <p>Available</p>
                                    </td>
                                </div>
                            </tr>
                            <tr>
                                <div>
                                    <td className="pe-2 mb-0">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" viewBox="0 0 24 24"><path fill="#4f4f4f" d="M4.5 12.125q-1.05 0-1.775-.725T2 9.625q0-1.05.725-1.775T4.5 7.125q1.05 0 1.775.725T7 9.625q0 1.05-.725 1.775t-1.775.725Zm4.5-4q-1.05 0-1.775-.725T6.5 5.625q0-1.05.725-1.775T9 3.125q1.05 0 1.775.725t.725 1.775q0 1.05-.725 1.775T9 8.125Zm6 0q-1.05 0-1.775-.725T12.5 5.625q0-1.05.725-1.775T15 3.125q1.05 0 1.775.725t.725 1.775q0 1.05-.725 1.775T15 8.125Zm4.5 4q-1.05 0-1.775-.725T17 9.625q0-1.05.725-1.775t1.775-.725q1.05 0 1.775.725T22 9.625q0 1.05-.725 1.775t-1.775.725Zm-12.85 10q-1.125 0-1.888-.862T4 19.225q0-1.3.888-2.275t1.762-1.925q.725-.775 1.25-1.687t1.25-1.713q.55-.65 1.275-1.075T12 10.125q.85 0 1.575.4t1.275 1.05q.7.8 1.238 1.725t1.262 1.725q.875.95 1.762 1.925T20 19.225q0 1.175-.763 2.038t-1.887.862q-1.35 0-2.675-.225T12 21.675q-1.35 0-2.675.225t-2.675.225Z"/></svg>
                                    </td>
                                    <td className="pe-2">
                                        <p className="fw-bold">Pet Friendly</p>
                                    </td>
                                </div>
                            </tr>
                            
                        </table>
                            <div className='mt-3 d-flex justify-content-between'>
                                <div className='d-flex align-items-center'>
                                    <a class="moredetails" data-bs-toggle="modal" data-bs-target="#exampleModalCenterthree">More Details</a>
                                </div>

                                {/* Anything below this is for modal */}
                                <div class="modal fade" id="exampleModalCenterthree" tabindex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
                                    <div class="modal-dialog modal-dialog-centered" role="document">
                                        <div class="modal-content">
                                            <div class="modal-header">
                                                <h5 class="modal-title" id="exampleModalLongTitle">Round Room</h5>
                                                <button type="button" class="btn-close" data-bs-dismiss="modal" aria-bs-label="Close">
                                                </button>
                                            </div>
                                            <div class="modal-body">
                                                {/* Anything below this is for modal body */}
                                                <div id="carouselExampleControlsinner" class="carousel slide" data-bs-ride="carousel">
                                                    <div class="carousel-inner">
                                                    <div class="carousel-item active">
                                                        <img src="/BedroomImage1.jpg" class="d-block" alt="..." />
                                                    </div>
                                                    <div class="carousel-item">
                                                        <img src="/BedroomImage4.jpg" class="d-block" alt="..." />
                                                    </div>
                                                    <div class="carousel-item active">
                                                        <img src="/BedroomImage5.jpg" class="d-block" alt="..." />
                                                    </div>
                                                    <div class="carousel-item active">
                                                        <img src="/BedroomImage6.jpg" class="d-block" alt="..." />
                                                    </div>
                                                    <div class="carousel-item">
                                                        <img src="/BedroomImage7.jpg" class="d-block" alt="..." />
                                                    </div>
                                                    <div class="carousel-item">
                                                        <img src="/BedroomImage8.jpg" class="d-block" alt="..." />
                                                    </div>
                                                    <div class="carousel-item">
                                                    <img src="/BedroomImage12.jpg" class="d-block" alt="..." />
                                                    </div>
                                                    <div class="carousel-item">
                                                        <img src="/BedroomImage14.jpg" class="d-block" alt="..." />
                                                    </div>
                                                    </div>
                                                    <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleControlsinner" data-bs-slide="prev">
                                                        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                                                        <span class="visually-hidden">Previous</span>
                                                    </button>
                                                    <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleControlsinner" data-bs-slide="next">
                                                        <span class="carousel-control-next-icon" aria-hidden="true"></span>
                                                        <span class="visually-hidden">Next</span>
                                                    </button>
                                                </div>
                                                <div className='mt-3'>
                                                    <h3>Round Room</h3>
                                                    <p>Capactiy: 4  |  Bed: 1 King + 2 Queen  |  Size: 19ft</p>
                                                </div>
                                                <div className='fs-6'>
                                                    <h3>The Area</h3>
                                                    <p>Reconnect with nature at this unforgettable escape. Get out of the ordinary and into our luxe, canvas tent. Located on our private, lake and twenty minutes from The Dunes National Park, Blue Chip Casino and one hour East of Chicago, a quick getaway is easy.
                                                        Request bed combinations for up to four guests.
                                                        Enjoy fishing, hiking, campfires and the stars.
                                                        Inquire about our charcuterie, s'mores platters and other special touches to make your stay memorable.
                                                    </p>

                                                    <h3>The Space</h3>
                                                    <p>
                                                    You will be staying in a 19ft canvas tent. The tent is water repellent. If it’s cold we can provide a wood burning stove. Fire extinguishers and wood for the stove are provided.

                                                    Please note - The hideaway is conveniently located off of a toll road.
                                                    You can hear the cars in the distance. Some people don’t notice it, some are more sensitive to the sounds.

                                                    There is one memory foam queen mattress always in the tent.

                                                    If you need additional beds for up to four guests, Please request either two twin air mattresses or one additional queen air mattress. Please note, in order to accommodate additional beds, stove may have to be removed to make room.

                                                    Extra sheets and blankets are available. In our storage area.

                                                    We provide some cups, small plates and utensils.

                                                    Outside of the tent, enjoy nature! Disconnect! There are rowboats, kayaks, paddle boat and lilly padfor you to use. Please have any child under the age of 12 wear a provided lifejacket.
                                                    Fishing is fantastic on the lake. Largemouth Bass, Bluegill, Catfish and Bluegill are stocked and ready to be caught.

                                                    There are four chairs and a fire pit right on the edge of the water.
                                                    We provide plenty of firewood for you.

                                                    </p>
                                                </div>
                                            </div>
                                            <div class="modal-footer">
                                                <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                                                <button href="https://booking.smoobu.com/9A749585" type="button" class="btn btn-primary">Book Now</button>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className='justify-content-end'>
                                    <a type="button" href="https://booking.smoobu.com/9A749585" class="btn btn-primary">Book Now</a>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </div>
     );
}
 
export default RoomBannerThree;