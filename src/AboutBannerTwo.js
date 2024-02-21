const AboutBannerTwo = () => {
    return ( 
        <div class = "container col-md-8 py-5 bg-white">
            <div class="row flex-lg-row-reverse align-items-center g-5 py-5">
                <div class="col-lg-6">
                    <img src="\sample-image.jpg" class="d-block mx-lg-auto img-fluid rounded overflow-hidden" alt="Profile Picture" width="700" height="500px" loading="lazy" />
                </div>
                <div class="col-lg-6">
                    <h1 class="display-5 fw-bold lh-1 mb-3">Meet the Owner</h1>
                    <p class="lead">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text evesince the 1500s.
                  Lorem Ipsum is simply dummy text of the printing and type setting industry. Lorem Ipsum has been the industry's standard dummy text ever</p>
                </div>
            </div>
            

            <div class="row flex-lg-row align-items-center g-5 py-5">
                <div class="col-lg-6">
                    <img src="\sample-image.jpg" class="d-block mx-lg-auto img-fluid rounded overflow-hidden" alt="Profile Picture" width="700" height="500px" loading="lazy" />
                </div>
                <div class="col-lg-6">
                    <h1 class="display-5 fw-bold lh-1 mb-4">Contact Us</h1>
                    <table>
                            <tr>
                                <div className="">
                                    <td className="pe-2">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" viewBox="0 0 24 24"><path fill="#4f4f4f" d="m19.23 15.26l-2.54-.29a1.99 1.99 0 0 0-1.64.57l-1.84 1.84a15.045 15.045 0 0 1-6.59-6.59l1.85-1.85c.43-.43.64-1.03.57-1.64l-.29-2.52a2.001 2.001 0 0 0-1.99-1.77H5.03c-1.13 0-2.07.94-2 2.07c.53 8.54 7.36 15.36 15.89 15.89c1.13.07 2.07-.87 2.07-2v-1.73c.01-1.01-.75-1.86-1.76-1.98"/></svg>
                                    </td>
                                    <td className="pe-2">
                                        <p className="fw-bold">Phone:</p>
                                    </td>
                                    <td>
                                        <p>(+1) 219-405-8435</p>
                                    </td>
                                </div>
                            </tr>
                            <tr>
                                <div className="">
                                    <td className="pe-2">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" viewBox="0 0 24 24"><path fill="#4f4f4f" d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2m0 4l-8 5l-8-5V6l8 5l8-5z"/></svg>
                                    </td>
                                    <td className="pe-2">
                                        <p className="fw-bold">Email:</p>
                                    </td>
                                    <td>
                                        <p>natalie@leeandforbesprovisions.com</p>
                                    </td>
                                </div>
                            </tr>
                            <tr>
                                <div>
                                    <td className="pe-2 mb-0">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" viewBox="0 0 24 24"><path fill="#4f4f4f" d="M12 11.5A2.5 2.5 0 0 1 9.5 9A2.5 2.5 0 0 1 12 6.5A2.5 2.5 0 0 1 14.5 9a2.5 2.5 0 0 1-2.5 2.5M12 2a7 7 0 0 0-7 7c0 5.25 7 13 7 13s7-7.75 7-13a7 7 0 0 0-7-7"/></svg>
                                    </td>
                                    <td className="pe-2">
                                        <p className="fw-bold">Address:</p>
                                    </td>
                                    <td>
                                        <p>1096 S. Otis Road, Westville, IN 46391</p>
                                    </td>
                                </div>
                            </tr>
                    </table>
                </div>
            </div>
        </div>
     );
}
 
export default AboutBannerTwo;