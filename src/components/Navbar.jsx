import { useEffect, useState } from "react";
import '../style/Navbar.css';
import { useAuth } from "../context/AuthContext";
import { getProfile } from "../services/api";

const NavBar = () => {

    const [loading, setLoading] = useState(true);
    const [open, setOpen] = useState(false);
    const [profilePic, setProfilePic] = useState(null);
    const { state } = useAuth();

    useEffect(() => {
        const timer = setTimeout(() => {
            setLoading(false);
        }, 1000);

        return () => clearTimeout(timer);
    }, []);

    useEffect(() => {
        const fetchProfile = async () => {
            if (!state.user) {
                setProfilePic(null);
                return;
            }

            try {
                const response = await getProfile();
                const user = response?.data?.data;
                if (user?.profilePic) {
                    const pic = user.profilePic;
                    const imageUrl = pic.startsWith('http') ? pic : `http://localhost:5000/uploads/${pic}`;
                    setProfilePic(imageUrl);
                } else {
                    setProfilePic(null);
                }
            } catch (error) {
                console.error('Failed to load profile picture:', error);
                setProfilePic(null);
            }
        };

        fetchProfile();
    }, [state.user]);

    return (
        <div>
            {/* Preloader */}
            {loading && <div className="preloader"></div>}

            {/* Main Header */}
            <header className="main-header">
                {/* Top Bar */}
                <div className="top-bar">
                    <div className="auto-container clearfix">
                        {/* Top Left */}
                        <div className="top-left">
                            <div className="text">Our &nbsp;<a href="#">No Fee Promise</a>&nbsp; Means, No Cost Until Your Case is Won.</div>
                        </div>

                        {/* Top Right */}
                        <div className="top-right clearfix">

                            {/*Search Box*/}
                            <div className="search-box">
                                <form method="post" action="https://st.ourhtmldemo.com/template/laywer-justice/index.html">
                                    <div className="form-group">
                                        <input type="search" name="search" placeholder="Search Your Needs Here" />
                                        <button type="submit" name="search" className="theme-btn search-btn"><span className="fa fa-search"></span></button>
                                    </div>
                                </form>
                            </div>

                            {/*Language Box*/}
                            <div className="lang-box">
                                <div
                                    className="selected-btn sel-btn"
                                    onClick={() => setOpen(!open)}
                                >
                                    <span
                                        className="flag-icon"
                                        style={{ backgroundImage: `url(images/icons/icon-flag.png)` }}
                                    ></span>

                                    <span className="language-label">English</span>
                                    <span className="icon fa fa-caret-down"></span>
                                </div>

                                {open && (
                                    <ul className={`lang-list ${open ? "open" : ""}`}>
                                        <li><a href="#">English</a></li>
                                        <li><a href="#">French</a></li>
                                        <li><a href="#">German</a></li>
                                        <li><a href="#">Chinese</a></li>
                                        <li><a href="#">Arabic</a></li>
                                    </ul>
                                )}
                            </div>

                        </div>

                    </div>
                </div>{/* Top Bar End */}

                {/*Middle Bar*/}
                <div className="middle-bar">
                    <div className="auto-container">
                        <div className="clearfix">
                            {/*Logo Column*/}
                            <div className="logo-column">
                                <figure className="logo"><a href="index.html"><img src="images/logo.png" alt="Attorney Justice" style={{ height: "112px" }} title="Attorney Justice" /></a></figure>
                            </div>
                            {/*Info Column*/}
                            <div className="info-column pull-left">
                                <p>12 Rue de la Technologie, Tunis.</p>
                                <h3>+216 55 123 456</h3>
                            </div>
                            {/*Info Column*/}
                            <div className="info-column pull-right">
                                <p>Office Hours: 09.00am - 17.00pm</p>
                                <h3>contact@istichara.tn</h3>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Lower Section */}
                <div className="lower-section">
                    <div className="auto-container">

                        {/*Outer Box*/}
                        <div className="outer-box clearfix">

                            {/* Hidden Nav Toggler */}
                            <div className="nav-toggler">
                                <button className="hidden-bar-opener"><span className="icon fa fa-bars"></span></button>
                            </div>{/* / Hidden Nav Toggler */}


                            {/* Main Menu */}
                            <nav className="main-menu">

                                <div className="navbar-header">
                                    {/* Toggle Button */}
                                    <button type="button" className="navbar-toggle" data-toggle="collapse" data-target=".navbar-collapse">
                                        <span className="icon-bar"></span>
                                        <span className="icon-bar"></span>
                                        <span className="icon-bar"></span>
                                    </button>
                                </div>

                                <div className="navbar-collapse collapse clearfix">
                                    <ul className="navigation">
                                        {/* display flex , justify content on the left  */}
                                        <li><a href="/">Home</a></li>
                                        <li><a href="/attorneys">Attorneys</a></li>
                                        {state.user && <li><a href="/istichara">Istichara</a></li>}
                                        {state.user && <li><a href="/profile">Profile</a></li>}
                                        <li><a href="/faq">FAQ</a></li>
                                        <li><a href="/contact-us">Contact</a></li>
                                        {/* on the right side of the navbar */}
                                        {state.user ? (
                                            <li className="user-menu">
                                                <div
                                                    className="user-avatar"
                                                    onClick={() => setOpen(!open)}
                                                >
                                                    <img
                                                        src={profilePic || "/images/resource/author-thumb-4.jpg"}
                                                        alt="user"
                                                    />
                                                </div>

                                                <ul className={`user-dropdown ${open ? "open" : ""}`}>
                                                    <li><a href="/account">Account</a></li>
                                                    <li><a href="/delete-account">Delete Account</a></li>
                                                    <li><a href="/logout">Logout</a></li>
                                                </ul>
                                            </li>
                                        ) : (
                                            <li style={{ display: 'flex', gap: '10px' }}>
                                                <a href="/login" className="theme-btn btn-style-one" style={{ padding: '8px 20px', fontSize: '14px' }}>Sign In</a>
                                                <a href="/register" className="theme-btn btn-style-two" style={{ padding: '8px 20px', fontSize: '14px' }}>Sign Up</a>
                                            </li>
                                        )}
                                    </ul>
                                </div>

                            </nav>{/* Main Menu End*/}

                        </div>
                    </div>
                </div>{/* Lower Section End*/}

            </header>{/*End Main Header */}

            {/* Hidden Bar */}
            <section className="hidden-bar right-align">

                <div className="hidden-bar-closer">
                    <button className="btn"><i className="fa fa-close"></i></button>
                </div>
                {/* Hidden Bar Wrapper */}
                <div className="hidden-bar-wrapper">

                    {/* .logo */}
                    <div className="logo text-center">
                        <a href="index.html"><img src="images/logo-3.png" alt="" /></a>
                    </div>{/* /.logo */}

                    {/* .Side-menu */}
                    <div className="side-menu">
                        {/* .navigation */}
                        <ul className="navigation">
                            <li><a href="index.html">Home</a></li>
                            <li className="dropdown"><a href="about-us.html">About Us</a>
                                <ul className="submenu">
                                    <li><a href="testimonials.html">Testimonials</a></li>
                                    <li className="dropdown"><a href="gallery.html">Gallery</a>
                                        <ul className="submenu">
                                            <li><a href="gallery.html">Gallery</a></li>
                                            <li><a href="gallery-single.html">Gallery Single</a></li>
                                        </ul>
                                    </li>
                                    <li><a href="error.html">404 Page</a></li>
                                </ul>
                            </li>
                            <li className="dropdown"><a href="practice-areas.html">Practice Areas</a>
                                <ul className="submenu">
                                    <li><a href="law-single.html">Cosumer Law</a></li>
                                    <li><a href="law-single.html">Family Law</a></li>
                                    <li><a href="law-single.html">Criminal Law</a></li>
                                    <li><a href="law-single.html">Drug Control Law</a></li>
                                    <li><a href="law-single.html">Business Law</a></li>
                                    <li><a href="law-single.html">Insurance Law</a></li>
                                </ul>
                            </li>
                            <li className="dropdown"><a href="attorneys.html">Attorneys</a>
                                <ul className="submenu">
                                    <li><a href="attorney-single.html">David Vigo Michel</a></li>
                                    <li><a href="attorney-single.html">Jem Stone Lawrence</a></li>
                                    <li><a href="attorney-single.html">Mercy Van Desosa</a></li>
                                    <li><a href="attorney-single.html">Patrick John Meckey</a></li>
                                    <li><a href="attorney-single.html">Nancy Williamson</a></li>
                                    <li><a href="attorney-single.html">Stephen Fernando</a></li>
                                    <li><a href="attorney-single.html">Serina Jaccobs</a></li>
                                    <li><a href="attorney-single.html">Darren Flemming</a></li>
                                </ul>
                            </li>
                            <li><a href="faq.html">FAQ</a></li>
                            <li className="dropdown"><a href="blog-classNameic.html">News</a>
                                <ul className="submenu">
                                    <li><a href="blog-classNameic.html">Blog classNameic Layout</a></li>
                                    <li><a href="blog-list.html">Blog List Layout</a></li>
                                    <li><a href="blog-grid.html">Blog Grid Layout</a></li>
                                    <li><a href="blog-single.html">Blog Single Post</a></li>
                                </ul>
                            </li>
                            <li className="dropdown"><a href="shop.html">Shop</a>
                                <ul className="submenu">
                                    <li><a href="shop.html">Shop</a></li>
                                    <li><a href="shop-single.html">Shop Single</a></li>
                                    <li><a href="shopping-cart.html">Shopping Cart</a></li>
                                    <li><a href="checkout.html">Checkout</a></li>
                                    <li><a href="register-login.html">Register / Login</a></li>
                                </ul>
                            </li>
                            <li><a href="contact-us.html">Contact</a></li>
                        </ul>
                    </div>{/* /.Side-menu */}

                    <div className="social-icons">
                        <ul>
                            <li><a href="#"><i className="fa fa-facebook"></i></a></li>
                            <li><a href="#"><i className="fa fa-twitter"></i></a></li>
                            <li><a href="#"><i className="fa fa-google-plus"></i></a></li>
                            <li><a href="#"><i className="fa fa-linkedin"></i></a></li>
                        </ul>
                    </div>

                </div>{/* / Hidden Bar Wrapper */}
            </section>{/* / Hidden Bar */}


        </div>
    );
}
export default NavBar;