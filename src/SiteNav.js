import './SiteNav.css'

const SiteNav = () => {
    return (

        <div className="general">
            <div className='headers'>
                <div className="navbars">
                    {/* This is for Logo*/}
                    <div>
                    <a class="navbar-brand" href="/home"><img alt="" src="./glamping.png" width="60" height="60"
                        className="d-inline-block align-top" /></a>
                    </div>

                    {/* This is for Navbar*/}
                    <ul class="links">
                        <li>
                            <a aria-current="page" href="/home">Home</a>
                        </li>
                        <li>
                            <a href="/accomodation">Accomodation</a>
                        </li>
                        <li>
                            <a href="/site">Site</a>
                        </li>
                        <li>
                            <a href="/about">About</a>
                        </li>
                    </ul>

                    <a href="/book" className="action-button">Book Now</a>

                    <div className="toggle-btn">
                    <i class="fas fa-bars"></i>
                    </div>
                </div>
            </div>
        </div>
    );
}
 
export default SiteNav;