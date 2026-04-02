import '../style/Home.css';
import { useEffect } from "react";
import Footer from "../components/Footer";
const Home = () => {

  useEffect(() => {
    const init = () => {
      if (window.jQuery && window.jQuery.fn.revolution) {
        window.jQuery(".revolution-slider .tp-banner").show().revolution({
          delay: 10000,
          startwidth: 1200,
          startheight: 720,
          hideThumbs: 600,
          navigationType: 0,
          navigationArrows: "1",
          navigationStyle: "preview3",
          touchenabled: "on",
          onHoverStop: "off",
          swipe_velocity: 0.7,
          swipe_min_touches: 1,
          swipe_max_touches: 1,
          drag_block_vertical: false,
          parallax: "mouse",
          parallaxBgFreeze: "on",
          parallaxLevels: [7, 4, 3, 2, 5, 4, 3, 2, 1, 0],
          keyboardNavigation: "off",
          navigationHAlign: "center",
          navigationVAlign: "bottom",
          soloArrowLeftHalign: "left",
          soloArrowRightHalign: "right",
          shadow: 0,
          fullWidth: "on",
          fullScreen: "off",
          spinner: "spinner4",
          stopLoop: "off",
          autoHeight: "off",
          forceFullWidth: "on",
          hideThumbsOnMobile: "on",
          hideNavDelayOnMobile: 1500,
          hideBulletsOnMobile: "on",
          hideArrowsOnMobile: "on",
          startWithSlide: 0
        });
      }
    };

    setTimeout(init, 500);
  }, []);

  return (
    <div>
      <div className="page-outer-container">
        <div className="page-wrapper">

          {/* Preloader */}
          {/* <div className="preloader"></div> */}

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
                        <input type="search" name="search" value="" placeholder="Search Your Needs Here" />
                        <button type="submit" name="search" className="theme-btn search-btn"><span className="fa fa-search"></span></button>
                      </div>
                    </form>
                  </div>

                  {/*Language Box*/}
                  <div className="lang-box">
                    <div className="selected-btn sel-btn"><span className="flag-icon" style={{ backgroundImage: "url(/images/icons/icon-flag.png)" }}></span><span className="language-label">English</span><span className="icon fa fa-caret-down"></span></div>
                    <ul className="lang-list">
                      <li><a href="#">English</a></li>
                      <li><a href="#">French</a></li>
                      <li><a href="#">German</a></li>
                      <li><a href="#">Chinese</a></li>
                      <li><a href="#">Arabic</a></li>
                    </ul>
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
                    <figure className="logo"><a href="index.html"><img src="/images/logo.png" alt="" title="Lawyer Justice" /></a></figure>
                  </div>
                  {/*Info Column*/}
                  <div className="info-column pull-left">
                    <p>5648 VK 26th Lane - Florida 26154.</p>
                    <h3>+123.859.1263</h3>
                  </div>
                  {/*Info Column*/}
                  <div className="info-column pull-right">
                    <p>Office Hours: 09.00am - 17.00pm</p>
                    <h3>info@domain.com</h3>
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
                        <li className="current"><a href="index.html">Home</a></li>
                        <li className="dropdown"><a href="about-us.html">About Us</a>
                          <ul>
                            <li><a href="testimonials.html">Testimonials</a></li>
                            <li className="dropdown"><a href="gallery.html">Gallery</a>
                              <ul>
                                <li><a href="gallery.html">Gallery</a></li>
                                <li><a href="gallery-single.html">Gallery Single</a></li>
                              </ul>
                            </li>
                            <li><a href="error.html">404 Page</a></li>
                          </ul>
                        </li>
                        <li className="dropdown"><a href="practice-areas.html">Practice Areas</a>
                          <ul>
                            <li><a href="law-single.html">Consumer Law</a></li>
                            <li><a href="law-single.html">Family Law</a></li>
                            <li><a href="law-single.html">Criminal Law</a></li>
                            <li><a href="law-single.html">Drug Control Law</a></li>
                            <li><a href="law-single.html">Business Law</a></li>
                            <li><a href="law-single.html">Insurance Law</a></li>
                          </ul>
                        </li>
                        <li className="dropdown"><a href="attorneys.html">Attorneys</a>
                          <ul>
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
                          <ul>
                            <li><a href="blog-classNameic.html">Blog classNameic Layout</a></li>
                            <li><a href="blog-list.html">Blog List Layout</a></li>
                            <li><a href="blog-grid.html">Blog Grid Layout</a></li>
                            <li><a href="blog-single.html">Blog Single Post</a></li>
                          </ul>
                        </li>
                        <li className="dropdown"><a href="shop.html">Shop</a>
                          <ul>
                            <li><a href="shop.html">Shop</a></li>
                            <li><a href="shop-single.html">Shop Single</a></li>
                            <li><a href="shopping-cart.html">Shopping Cart</a></li>
                            <li><a href="checkout.html">Checkout</a></li>
                            <li><a href="register-login.html">Register / Login</a></li>
                          </ul>
                        </li>
                        <li><a href="contact-us.html">Contact</a></li>
                      </ul>
                    </div>
                  </nav>{/* Main Menu End*/}

                  <div className="link-box"><a href="#" className="theme-btn">Free Consultation</a></div>

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
                <a href="index.html"><img src="/images/logo-3.png" alt="" /></a>
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


          {/*Main Slider*/}
          <section className="main-slider revolution-slider">

            <div className="tp-banner-container">
              <div className="tp-banner">
                <ul>


                  <li data-transition="fade" data-slotamount="1" data-masterspeed="1000" data-thumb="/images/main-slider/1.jpg" data-saveperformance="off" data-title="Awesome Title Here">
                    <img src="/images/main-slider/1.jpg"
                      alt=""
                      className="rev-slidebg"
                      data-bgposition="center top"
                      data-bgfit="cover"
                      data-bgrepeat="no-repeat"
                    />

                    <div className="tp-caption sfl sfb tp-resizeme"
                      data-x="right" data-hoffset="-15"
                      data-y="center" data-voffset="-120"
                      data-speed="1500"
                      data-start="500"
                      data-easing="easeOutExpo"
                      data-splitin="none"
                      data-splitout="none"
                      data-elementdelay="0.01"
                      data-endelementdelay="0.3"
                      data-endspeed="1200"
                      data-endeasing="Power4.easeIn"
                      style={{ zIndex: 4, maxWidth: "auto", maxHeight: "auto", whiteSpace: "nowrap" }}><h1 className="text-center">We Are Certified Family <br />Law Specialists</h1></div>

                    <div className="tp-caption sfr sfb tp-resizeme"
                      data-x="right" data-hoffset="-80"
                      data-y="center" data-voffset="20"
                      data-speed="1500"
                      data-start="1000"
                      data-easing="easeOutExpo"
                      data-splitin="none"
                      data-splitout="none"
                      data-elementdelay="0.01"
                      data-endelementdelay="0.3"
                      data-endspeed="1200"
                      data-endeasing="Power4.easeIn"
                      style={{ zIndex: 4, maxWidth: "auto", maxHeight: "auto", whiteSpace: "nowrap" }}><div className="text text-center">We Have Helped Thousands of People to Get Relief From National Wide Fights <br />WrongfullDenials. Now They Trusted Our Attorneys.</div></div>

                    <div className="tp-caption sfl sfb tp-resizeme"
                      data-x="right" data-hoffset="-200"
                      data-y="center" data-voffset="110"
                      data-speed="1500"
                      data-start="1500"
                      data-easing="easeOutExpo"
                      data-splitin="none"
                      data-splitout="none"
                      data-elementdelay="0.01"
                      data-endelementdelay="0.3"
                      data-endspeed="1200"
                      data-endeasing="Power4.easeIn"
                      style={{ zIndex: 4, maxWidth: "auto", maxHeight: "auto", whiteSpace: "nowrap" }}><div className="text-center"><a href="#" className="theme-btn btn-style-one">Contact Our Attorneys</a></div></div>

                    <div className="tp-caption sfr sfb tp-resizeme"
                      data-x="right" data-hoffset="-200"
                      data-y="center" data-voffset="180"
                      data-speed="1500"
                      data-start="2000"
                      data-easing="easeOutExpo"
                      data-splitin="none"
                      data-splitout="none"
                      data-elementdelay="0.01"
                      data-endelementdelay="0.3"
                      data-endspeed="1200"
                      data-endeasing="Power4.easeIn"
                      style={{ zIndex: 4, maxWidth: "auto", maxHeight: "auto", whiteSpace: "nowrap" }}><div className="text-center"><a href="#" className="normal-link"><span className="icon flaticon-circle-5"></span> View Our Practice Areas</a></div></div>

                  </li>


                  <li data-transition="fade" data-slotamount="1" data-masterspeed="1000" data-thumb="/images/main-slider/2.jpg" data-saveperformance="off" data-title="Awesome Title Here">
                    <img src="/images/main-slider/2.jpg"
                      alt=""
                      className="rev-slidebg"
                      data-bgposition="center top"
                      data-bgfit="cover"
                      data-bgrepeat="no-repeat"
                    />

                    <div className="tp-caption sfl sfb tp-resizeme"
                      data-x="left" data-hoffset="-270"
                      data-y="bottom" data-voffset="30"
                      data-speed="1500"
                      data-start="500"
                      data-easing="easeOutExpo"
                      data-splitin="none"
                      data-splitout="none"
                      data-elementdelay="0.01"
                      data-endelementdelay="0.3"
                      data-endspeed="1200"
                      data-endeasing="Power4.easeIn"
                      style={{ zIndex: 4, maxWidth: "auto", maxHeight: "auto", whiteSpace: "nowrap" }}><div className="logo-image"><img src="/images/main-slider/man-image.png" alt="" /></div></div>

                    <div className="tp-caption sfr sfb tp-resizeme"
                      data-x="center" data-hoffset="0"
                      data-y="center" data-voffset="-140"
                      data-speed="1500"
                      data-start="1000"
                      data-easing="easeOutExpo"
                      data-splitin="none"
                      data-splitout="none"
                      data-elementdelay="0.01"
                      data-endelementdelay="0.3"
                      data-endspeed="1200"
                      data-endeasing="Power4.easeIn"
                      style={{ zIndex: 4, maxWidth: "auto", maxHeight: "auto", whiteSpace: "nowrap" }}><div className="logo-image"><img src="/images/resource/central-logo.png" alt="" /></div></div>

                    <div className="tp-caption sfl sfb tp-resizeme"
                      data-x="center" data-hoffset="0"
                      data-y="center" data-voffset="0"
                      data-speed="1500"
                      data-start="1000"
                      data-easing="easeOutExpo"
                      data-splitin="none"
                      data-splitout="none"
                      data-elementdelay="0.01"
                      data-endelementdelay="0.3"
                      data-endspeed="1200"
                      data-endeasing="Power4.easeIn"
                      style={{ zIndex: 4, maxWidth: "auto", maxHeight: "auto", whiteSpace: "nowrap" }}><h1 className="text-center">Senior Defence Lawyer <br />L.K. Antony</h1></div>

                    <div className="tp-caption sfr sfb tp-resizeme"
                      data-x="center" data-hoffset="0"
                      data-y="center" data-voffset="110"
                      data-speed="1500"
                      data-start="1000"
                      data-easing="easeOutExpo"
                      data-splitin="none"
                      data-splitout="none"
                      data-elementdelay="0.01"
                      data-endelementdelay="0.3"
                      data-endspeed="1200"
                      data-endeasing="Power4.easeIn"
                      style={{ zIndex: 4, maxWidth: "auto", maxHeight: "auto", whiteSpace: "nowrap" }}><div className="phone-no">Call: +321 589 2369</div></div>

                    <div className="tp-caption sfl sfb tp-resizeme"
                      data-x="center" data-hoffset="0"
                      data-y="center" data-voffset="180"
                      data-speed="1500"
                      data-start="1000"
                      data-easing="easeOutExpo"
                      data-splitin="none"
                      data-splitout="none"
                      data-elementdelay="0.01"
                      data-endelementdelay="0.3"
                      data-endspeed="1200"
                      data-endeasing="Power4.easeIn"
                      style={{ zIndex: 4, maxWidth: "auto", maxHeight: "auto", whiteSpace: "nowrap" }}><div className="text-center"><a href="#" className="theme-btn btn-style-one">Make an Appoinment</a></div></div>


                  </li>


                  <li data-transition="fade" data-slotamount="1" data-masterspeed="1000" data-thumb="/images/main-slider/3.jpg" data-saveperformance="off" data-title="Awesome Title Here">
                    <img src="/images/main-slider/3.jpg"
                      alt=""
                      className="rev-slidebg"
                      data-bgposition="center top"
                      data-bgfit="cover"
                      data-bgrepeat="no-repeat"
                    />


                    <div className="tp-caption sfl sfb tp-resizeme"
                      data-x="left" data-hoffset="15"
                      data-y="center" data-voffset="-150"
                      data-speed="1500"
                      data-start="500"
                      data-easing="easeOutExpo"
                      data-splitin="none"
                      data-splitout="none"
                      data-elementdelay="0.01"
                      data-endelementdelay="0.3"
                      data-endspeed="1200"
                      data-endeasing="Power4.easeIn"
                      style={{ zIndex: 4, maxWidth: "auto", maxHeight: "auto", whiteSpace: "nowrap" }}><div className="smaller-title">We Are Lawyer Justice</div></div>

                    <div className="tp-caption sfl sfb tp-resizeme"
                      data-x="left" data-hoffset="15"
                      data-y="center" data-voffset="-50"
                      data-speed="1500"
                      data-start="1000"
                      data-easing="easeOutExpo"
                      data-splitin="none"
                      data-splitout="none"
                      data-elementdelay="0.01"
                      data-endelementdelay="0.3"
                      data-endspeed="1200"
                      data-endeasing="Power4.easeIn"
                      style={{ zIndex: 4, maxWidth: "auto", maxHeight: "auto", whiteSpace: "nowrap" }}><h1 className="text-left">Attrorneys Fighting For <br />Your Freedom</h1></div>

                    <div className="tp-caption sfl sfb tp-resizeme"
                      data-x="left" data-hoffset="15"
                      data-y="center" data-voffset="60"
                      data-speed="1500"
                      data-start="1500"
                      data-easing="easeOutExpo"
                      data-splitin="none"
                      data-splitout="none"
                      data-elementdelay="0.01"
                      data-endelementdelay="0.3"
                      data-endspeed="1200"
                      data-endeasing="Power4.easeIn"
                      style={{ zIndex: 4, maxWidth: "auto", maxHeight: "auto", whiteSpace: "nowrap" }}><div className="text">We Have Helped Thousands of People to Get Relief From National Wide Fights <br />WrongfullDenials. Now They Trusted Our Attorneys.</div></div>

                    <div className="tp-caption sfl sfb tp-resizeme"
                      data-x="left" data-hoffset="15"
                      data-y="center" data-voffset="150"
                      data-speed="1500"
                      data-start="2000"
                      data-easing="easeOutExpo"
                      data-splitin="none"
                      data-splitout="none"
                      data-elementdelay="0.01"
                      data-endelementdelay="0.3"
                      data-endspeed="1200"
                      data-endeasing="Power4.easeIn"
                      style={{ zIndex: 4, maxWidth: "auto", maxHeight: "auto", whiteSpace: "nowrap" }}><div className="text-center"><a href="#" className="theme-btn btn-style-one">Contact Our Attorneys</a></div></div>

                  </li>

                </ul>

              </div>
            </div>
          </section>


          {/*Services Style One*/}
          <section className="services-style-one">
            <div className="auto-container">
              <div className="row clearfix">

                {/*Default Service Column*/}
                <article className="default-service-column col-md-3 col-sm-6 col-xs-12">
                  <div className="inner-box">
                    <div className="service-header">
                      <div className="icon"><span className="flaticon-medical"></span></div>
                      <h4>Consumer Law</h4>
                      <h3>Prevent From Business Malpractices.</h3>
                    </div>
                    <div className="text-content">
                      <div className="text">
                        <p>Consumer protection is a group sed of laws and organizations ut designed to ensure the rights of consumers as well as fair trade.</p>
                      </div>

                      <a href="#" className="theme-btn btn-style-one">Read More</a>
                    </div>
                  </div>
                </article>

                {/*Default Service Column*/}
                <article className="default-service-column col-md-3 col-sm-6 col-xs-12">
                  <div className="inner-box">
                    <div className="service-header">
                      <div className="icon"><span className="flaticon-people-1"></span></div>
                      <h4>Family Law</h4>
                      <h3>Deals With Family &amp; Domestic Relationship.</h3>
                    </div>
                    <div className="text-content">
                      <div className="text">
                        <p>Family law (also we called matrimonial law) is an area of the law sed that deals with family matters &amp; family domestic relations and ect...</p>
                      </div>

                      <a href="#" className="theme-btn btn-style-one">Read More</a>
                    </div>
                  </div>
                </article>

                {/*Default Service Column*/}
                <article className="default-service-column col-md-3 col-sm-6 col-xs-12">
                  <div className="inner-box">
                    <div className="service-header">
                      <div className="icon"><span className="flaticon-people"></span></div>
                      <h4>Criminal Law</h4>
                      <h3>Is Body of Law, Offence Against Justice. </h3>
                    </div>
                    <div className="text-content">
                      <div className="text">
                        <p>Criminal law or penal law is the body of law that relates to crime. It regulat social conduct and labour proscribes whatever is threatening.</p>
                      </div>

                      <a href="#" className="theme-btn btn-style-one">Read More</a>
                    </div>
                  </div>
                </article>

                {/*Default Service Column*/}
                <article className="default-service-column col-md-3 col-sm-6 col-xs-12">
                  <div className="inner-box">
                    <div className="service-header">
                      <div className="icon"><span className="flaticon-medical-1"></span></div>
                      <h4>Drug Control Law</h4>
                      <h3>Governments prohibit, except under licence.</h3>
                    </div>
                    <div className="text-content">
                      <div className="text">
                        <p>Drug prohibition law is sed prohibition based laww by which is governnments prohibit, except underteh  licence, the production, supply.</p>
                      </div>

                      <a href="#" className="theme-btn btn-style-one">Read More</a>
                    </div>
                  </div>
                </article>

              </div>

              <hr />
            </div>
          </section>


          {/*About Section*/}
          <section className="about-section">
            <div className="auto-container">
              <div className="row clearfix">

                {/*About Company*/}
                <div className="about-company default-column col-lg-6 col-md-12 col-sm-12">
                  <div className="inner-box">
                    <div className="styled-heading">
                      <h2>About Lawyer Justice</h2>
                    </div>
                    <div className="default-text-box">
                      <p>Since 1965, who loves or pursues or desires too obtains Attorneys of itself sed, will because it is pain, but because occasionally utcircumstances occurs ut in which toil and pain can procure him some great pleasure. To se takes a trivials example which was of us ever undertakes laborious physical exercise.</p>
                    </div>

                    {/*Columns Outer*/}
                    <div className="columns-outer clearfix">
                      {/*Image Box*/}
                      <div className="column image-column col-md-4 col-sm-4 col-xs-12">
                        <figure className="image-box wow fadeInLeft" data-wow-delay="0ms" data-wow-duration="1500ms">
                          <img src="/images/resource/default-image-1.jpg" alt="" />
                          <a href="#" className="default-overlay-outer">
                            <div className="inner">
                              <div className="content-layer">
                                <div className="icon"><span className="fa fa-edit"></span></div>
                                <h3>Request a Quote</h3>
                              </div>
                            </div>
                          </a>
                        </figure>
                      </div>

                      {/*Image Box*/}
                      <div className="column image-column col-md-4 col-sm-4 col-xs-12">
                        <figure className="image-box wow fadeInLeft" data-wow-delay="300ms" data-wow-duration="1500ms">
                          <img src="/images/resource/default-image-2.jpg" alt="" />
                          <a href="#" className="default-overlay-outer">
                            <div className="inner">
                              <div className="content-layer">
                                <div className="icon"><span className="fa fa-black-tie"></span></div>
                                <h3>Investigation</h3>
                              </div>
                            </div>
                          </a>
                        </figure>
                      </div>

                      {/*Image Box*/}
                      <div className="column image-column col-md-4 col-sm-4 col-xs-12">
                        <figure className="image-box wow fadeInLeft" data-wow-delay="600ms" data-wow-duration="1500ms">
                          <img src="/images/resource/default-image-3.jpg" alt="" />
                          <a href="#" className="default-overlay-outer">
                            <div className="inner">
                              <div className="content-layer">
                                <div className="icon"><span className="fa fa-gavel"></span></div>
                                <h3>Legal Proceeding</h3>
                              </div>
                            </div>
                          </a>
                        </figure>
                      </div>

                    </div>

                    <div className="line-styled-heading">
                      <h2>Get Free Consultation</h2>
                    </div>
                    <div className="default-text-box">
                      <p>Laboris nisi ut aliquip ex ea commodo consequat duis sed aute irures dolor in some reprehenderit in voluptate velit esse cillum dolore eu fugiate nullas pariatur labour Excepteur sint occaecat cupidatat non proident, sunt inofficia.</p>

                      <div className="quote-text">“We can provide you with a free and confidentioal evaluation”.</div>
                    </div>

                    <div className="clearfix">
                      <div className="pull-left"><a href="#" className="theme-btn btn-style-one">Free Consultation</a></div>
                      <div className="pull-right"><p className="phone-info">For criminal charges: <span className="phone">+123.859.1263</span></p></div>
                    </div>


                  </div>
                </div>

                {/*Company History*/}
                <div className="company-history default-column col-lg-6 col-md-12 col-sm-12">
                  <div className="inner-box">
                    <div className="styled-heading">
                      <h2>Our History</h2>
                    </div>

                    <div className="row clearfix">

                      {/*Timeline Column*/}
                      <div className="timeline-column col-md-6 col-sm-6 col-xs-12">

                        {/*Company Timeline*/}
                        <div className="company-timeline">
                          {/*Timeline Block*/}
                          <article className="timeline-block">
                            <div className="year">1965<div className="curve"><span className="fa fa-caret-down"></span></div></div>
                            <h3>Started at Florida</h3>
                            <div className="text"><p>Best Standard dummy text ever since the dobo 1500s, when and ut sed printer took a galley of type and book.</p></div>
                          </article>

                          {/*Timeline Block*/}
                          <article className="timeline-block">
                            <div className="year">1972<div className="curve"><span className="fa fa-caret-down"></span></div></div>
                            <h3>Best company of the Year</h3>
                            <div className="text"><p>There are many lawyer variations of passages of lorem Ipsum labour  available, but the  have suffered alteration.</p></div>
                          </article>

                          {/*Timeline Block*/}
                          <article className="timeline-block">
                            <div className="year">1978<div className="curve"><span className="fa fa-caret-down"></span></div></div>
                            <h3>Opening new office</h3>
                            <div className="text"><p>If you are going to use a passage of Ipsum, case lawyer justice you need to be sure new office at Mexico City.</p></div>
                          </article>

                        </div>

                      </div>


                      {/*Timeline Column*/}
                      <div className="carousel-column col-md-6 col-sm-6 col-xs-12">

                        {/*Carousel Outer*/}
                        <div className="carousel-outer">
                          {/*Image Carousel*/}
                          <ul className="image-carousel single-item-carousel">
                            <li><a href="/images/resource/default-image-4.jpg" className="lightbox-image" title="Image Caption Here"><img src="/images/resource/default-image-4.jpg" alt="" /></a></li>
                            <li><a href="/images/resource/default-image-4.jpg" className="lightbox-image" title="Image Caption Here"><img src="/images/resource/default-image-4.jpg" alt="" /></a></li>
                            <li><a href="/images/resource/default-image-4.jpg" className="lightbox-image" title="Image Caption Here"><img src="/images/resource/default-image-4.jpg" alt="" /></a></li>
                          </ul>

                        </div>

                        {/*Graph Outer*/}
                        <div className="graph-outer">
                          {/*Progress Chart*/}
                          <div className="chart-outer">
                            <div className="center-text progress-text"><span className="count">845</span><br />Cases</div>
                            <div className="won-text progress-text"><span className="count">755</span><br />Won</div>
                            <div className="hold-text progress-text"><span className="count">35</span><br />Won</div>
                            <div className="running-text progress-text"><span className="count">55</span><br />Running</div>
                          </div>

                        </div>

                      </div>

                    </div>

                  </div>
                </div>

              </div>
            </div>
          </section>


          {/*Two Column Fluid Section*/}
          <section className="two-column-fluid">
            <div className="auto-container">

              <div className="row clearfix">

                {/*Testimonial Column*/}
                <div className="col-lg-7 col-md-6 col-sm-12 col-xs-12 testimonial-column">
                  {/*Bg Image*/}
                  <div className="bg-color-layer"></div>
                  <div className="bg-image-layer" style={{ backgroundImage: `url(/images/background/bg-testimonials.jpg)` }}></div>

                  <div className="inner-box">
                    <div className="carousel-box">
                      <div className="styled-heading"><h2>What Our Clients Say</h2></div>
                      <div className="quote-icon"><span className="fa fa-quote-left"></span></div>
                      {/*Testimonial Carousel*/}
                      <ul className="testimonial-carousel single-item-carousel">

                        {/*Slide Item*/}
                        <li className="slide-item">
                          <div className="slide-text"><p>How to pursue pleasure rationally  consequences that are extremeely painful or again is there anyones who loves or  pursues or desires to obtain pain of itself because its sed great pleasure get well soon.</p></div>
                          <div className="information clearfix">
                            <div className="slide-info pull-left">
                              <figure className="image-thumb"><img src="/images/resource/testi-thumb-1.png" alt="" /></figure>
                              <h3>Alex Carolina</h3>
                              <p>CEO of RJX Solutions</p>
                            </div>
                            <div className="signature pull-right"><img src="/images/resource/signature-image.png" alt="" /></div>
                          </div>
                        </li>

                        {/*Slide Item*/}
                        <li className="slide-item">
                          <div className="slide-text"><p>How to pursue pleasure rationally  consequences that are extremeely painful or again is there anyones who loves or  pursues or desires to obtain pain of itself because its sed great pleasure get well soon.</p></div>
                          <div className="information clearfix">
                            <div className="slide-info pull-left">
                              <figure className="image-thumb"><img src="/images/resource/testi-thumb-1.png" alt="" /></figure>
                              <h3>Alex Carolina</h3>
                              <p>CEO of RJX Solutions</p>
                            </div>
                            <div className="signature pull-right"><img src="/images/resource/signature-image.png" alt="" /></div>
                          </div>
                        </li>

                        {/*Slide Item*/}
                        <li className="slide-item">
                          <div className="slide-text"><p>How to pursue pleasure rationally  consequences that are extremeely painful or again is there anyones who loves or  pursues or desires to obtain pain of itself because its sed great pleasure get well soon.</p></div>
                          <div className="information clearfix">
                            <div className="slide-info pull-left">
                              <figure className="image-thumb"><img src="/images/resource/testi-thumb-1.png" alt="" /></figure>
                              <h3>Alex Carolina</h3>
                              <p>CEO of RJX Solutions</p>
                            </div>
                            <div className="signature pull-right"><img src="/images/resource/signature-image.png" alt="" /></div>
                          </div>
                        </li>

                      </ul>{/*End Testimonial Carousel*/}

                    </div>

                  </div>
                </div>

                {/*Why Us Column*/}
                <div className="col-lg-5 col-md-6 col-sm-12 col-xs-12 whyus-column">
                  <div className="inner-box">
                    <div className="styled-heading"><h2>What Our Clients Say</h2></div>
                    {/*Icon Block*/}
                    <article className="icon-block">
                      <div className="icon wow rollIn" data-wow-delay="300ms" data-wow-duration="1500ms"><span className="flaticon-scale"></span></div>
                      <h3>Fight For Justice</h3>
                      <div className="text"><p>Seeking justice in the world is a  sed significant emotional and investment when we follow this call, we’re deeply.</p></div>
                    </article>

                    {/*Icon Block*/}
                    <article className="icon-block">
                      <div className="icon wow rollIn" data-wow-delay="0ms" data-wow-duration="1500ms"><span className="flaticon-baggage"></span></div>
                      <h3>Best Case Stratergy</h3>
                      <div className="text"><p>Proving liability in plaintiffs’ personal injury and complex civil litigation can be challenging and requires relent.</p></div>
                    </article>

                    {/*Icon Block*/}
                    <article className="icon-block">
                      <div className="icon wow rollIn" data-wow-delay="600ms" data-wow-duration="1500ms"><span className="flaticon-people-2"></span></div>
                      <h3>Experienced Attorneys</h3>
                      <div className="text"><p>Lawyer Justice offers a broad range of opportunities for Speak Experienced attorneys to work you.</p></div>
                    </article>

                  </div>
                </div>

              </div>

            </div>

          </section>


          {/*Team Section*/}
          <section className="team-section">
            <div className="auto-container">

              {/*Styled Heading*/}
              <div className="styled-heading centered">
                <h2>Meet Our Attorneys</h2>
              </div>

              <div className="row clearfix">

                {/*Column*/}
                <article className="column team-member col-lg-3 col-md-3 col-sm-6 col-xs-12 wow fadeInUp" data-wow-delay="0ms" data-wow-duration="1500ms">
                  <div className="inner-box">
                    <figure className="image"><a href="mailto:mail@email.com"><img src="/images/resource/team-image-1.jpg" alt="" /></a></figure>
                    <div className="member-info">
                      <h3>David Vigo Michel</h3>
                      <div className="designation">Family Lawyer</div>
                    </div>
                    <div className="content">
                      <ul className="contact-info">
                        <li><span className="icon fa fa-phone"></span> <a href="#">98765-12-345</a></li>
                        <li><span className="icon fa fa-envelope-o"></span> <a href="#">Davidvigo@domain.com</a></li>
                      </ul>
                      <div className="social-links">
                        <a href="#"><span className="fa fa-facebook-f"></span></a>
                        <a href="#"><span className="fa fa-twitter"></span></a>
                        <a href="#"><span className="fa fa-google-plus"></span></a>
                        <a href="#"><span className="fa fa-linkedin"></span></a>
                      </div>
                    </div>
                  </div>
                </article>

                {/*Column*/}
                <article className="column team-member col-lg-3 col-md-3 col-sm-6 col-xs-12 wow fadeInUp" data-wow-delay="300ms" data-wow-duration="1500ms">
                  <div className="inner-box">
                    <figure className="image"><a href="mailto:mail@email.com"><img src="/images/resource/team-image-2.jpg" alt="" /></a></figure>
                    <div className="member-info">
                      <h3>Jem Stone Lawrence</h3>
                      <div className="designation">Consumer Lawyer</div>
                    </div>
                    <div className="content">
                      <ul className="contact-info">
                        <li><span className="icon fa fa-phone"></span> <a href="#">97877-32-100</a></li>
                        <li><span className="icon fa fa-envelope-o"></span> <a href="#">Jemstone@domain.com</a></li>
                      </ul>
                      <div className="social-links">
                        <a href="#"><span className="fa fa-facebook-f"></span></a>
                        <a href="#"><span className="fa fa-twitter"></span></a>
                        <a href="#"><span className="fa fa-google-plus"></span></a>
                        <a href="#"><span className="fa fa-linkedin"></span></a>
                      </div>
                    </div>
                  </div>
                </article>

                {/*Column*/}
                <article className="column team-member col-lg-3 col-md-3 col-sm-6 col-xs-12 wow fadeInUp" data-wow-delay="600ms" data-wow-duration="1500ms">
                  <div className="inner-box">
                    <figure className="image"><a href="mailto:mail@email.com"><img src="/images/resource/team-image-3.jpg" alt="" /></a></figure>
                    <div className="member-info">
                      <h3>Mercy Van Desosa</h3>
                      <div className="designation">Criminal Lawyer</div>
                    </div>
                    <div className="content">
                      <ul className="contact-info">
                        <li><span className="icon fa fa-phone"></span> <a href="#">97901-23-456</a></li>
                        <li><span className="icon fa fa-envelope-o"></span> <a href="#">Mercydesosa@domain.com</a></li>
                      </ul>
                      <div className="social-links">
                        <a href="#"><span className="fa fa-facebook-f"></span></a>
                        <a href="#"><span className="fa fa-twitter"></span></a>
                        <a href="#"><span className="fa fa-google-plus"></span></a>
                        <a href="#"><span className="fa fa-linkedin"></span></a>
                      </div>
                    </div>
                  </div>
                </article>

                {/*Column*/}
                <article className="column team-member col-lg-3 col-md-3 col-sm-6 col-xs-12 wow fadeInUp" data-wow-delay="900ms" data-wow-duration="1500ms">
                  <div className="inner-box">
                    <figure className="image"><a href="mailto:mail@email.com"><img src="/images/resource/team-image-4.jpg" alt="" /></a></figure>
                    <div className="member-info">
                      <h3>Patrick John Meckey</h3>
                      <div className="designation">Consumer Lawyer</div>
                    </div>
                    <div className="content">
                      <ul className="contact-info">
                        <li><span className="icon fa fa-phone"></span> <a href="#">98765-43-210</a></li>
                        <li><span className="icon fa fa-envelope-o"></span> <a href="#">Patrickmeckey@domain.com</a></li>
                      </ul>
                      <div className="social-links">
                        <a href="#"><span className="fa fa-facebook-f"></span></a>
                        <a href="#"><span className="fa fa-twitter"></span></a>
                        <a href="#"><span className="fa fa-google-plus"></span></a>
                        <a href="#"><span className="fa fa-linkedin"></span></a>
                      </div>
                    </div>
                  </div>
                </article>



              </div>

            </div>
          </section>


          {/*Consultation Section*/}
          <section className="consult-section" style={{ backgroundImage: `url(/images/background/consult-form-bg.jpg)` }}>
            <div className="auto-container">

              {/*Styled Heading*/}
              <div className="styled-heading">
                <h2>Request a Free Consultation</h2>
              </div>

              <figure className="man-image hidden-xs"><img src="/images/resource/man-image.png" alt="" /></figure>

              <div className="default-form consultation-form">
                <form method="post" action="https://st.ourhtmldemo.com/template/laywer-justice/index.html">
                  <div className="row clearfix">
                    <div className="form-group col-md-6 col-sm-12 col-xs-12">
                      <input type="text" name="fname" value="" placeholder="First Name" required />
                    </div>
                    <div className="form-group col-md-6 col-sm-12 col-xs-12">
                      <input type="text" name="lname" value="" placeholder="Last Name" required />
                    </div>
                    <div className="form-group col-md-6 col-sm-12 col-xs-12">
                      <input type="text" name="phone" value="" placeholder="Phone" required />
                    </div>
                    <div className="form-group col-md-6 col-sm-12 col-xs-12">
                      <select name="subject">
                        <option>Criminal Law</option>
                        <option>Family Law</option>
                        <option>Consumer Law</option>
                        <option>Drug Control Law</option>
                      </select>
                    </div>
                    <div className="form-group col-md-12 col-sm-12 col-xs-12">
                      <textarea name="message" placeholder="Message" required></textarea>
                    </div>
                    <div className="form-group col-md-12 col-sm-12 col-xs-12">
                      <button type="submit" className="theme-btn btn-style-one">Send Now</button>
                    </div>
                  </div>
                </form>
              </div>

            </div>
          </section>



          {/*News Section*/}
          <section className="news-section">
            <div className="auto-container">

              {/*Styled Heading*/}
              <div className="styled-heading centered">
                <h2>Our Latest News</h2>
              </div>

              <div className="row clearfix">

                {/*Column*/}
                <article className="column featured-news-column col-md-4 col-sm-6 col-xs-12">
                  <div className="inner-box">
                    <figure className="image-box">
                      <img src="/images/resource/blog-image-1.jpg" alt="" />
                      <a href="#" className="default-overlay-outer">
                        <div className="inner">
                          <div className="content-layer">
                            <div className="link-icon"><span className="fa fa-link"></span></div>
                          </div>
                        </div>
                      </a>
                    </figure>
                    <div className="content">
                      <div className="date">21<br />Aug</div>

                      <div className="tags"><span className="icon fa fa-tags"></span>&ensp; <a href="#">Criminal Law</a>, <a href="#">Kidnapping</a></div>
                      <h3><a href="#">We won against criminal</a></h3>
                      <div className="text"><p>In this, Kidnapping the unlawful taking away or transportation of person against that person's will, usually to hold the person unlawfully.</p></div>
                      <a href="#" className="theme-btn read-more">Read More</a>
                    </div>
                    <ul className="post-info clearfix">
                      <li><span className="author-thumb"><img src="/images/resource/small-author-thumb-1.png" alt="" /></span> <a href="#">Desosa</a></li>
                      <li><span className="fa fa-comments"></span> <a href="#">6 Comments</a></li>
                      <li><span className="fa fa-heart"></span> <a href="#">12 Likes</a></li>
                    </ul>
                  </div>
                </article>

                {/*Column*/}
                <article className="column featured-news-column col-md-4 col-sm-6 col-xs-12">
                  <div className="inner-box">
                    <figure className="image-box">
                      <img src="/images/resource/blog-image-2.jpg" alt="" />
                      <a href="#" className="default-overlay-outer">
                        <div className="inner">
                          <div className="content-layer">
                            <div className="link-icon"><span className="fa fa-link"></span></div>
                          </div>
                        </div>
                      </a>
                    </figure>
                    <div className="content">
                      <div className="date">27<br />Dec</div>

                      <div className="tags"><span className="icon fa fa-tags"></span>&ensp; <a href="#">Family Law</a>, <a href="#">Adultery</a></div>
                      <h3><a href="#">Legal issues regarding paternity</a></h3>
                      <div className="text"><p>Adultery  is extramarital sex that is considered objectionable on social, religious, moral or legal grounds though what sexual activities.</p></div>
                      <a href="#" className="theme-btn read-more">Read More</a>
                    </div>
                    <ul className="post-info clearfix">
                      <li><span className="author-thumb"><img src="/images/resource/small-author-thumb-2.png" alt="" /></span> <a href="#">Mackey</a></li>
                      <li><span className="fa fa-comments"></span> <a href="#">7 Comments</a></li>
                      <li><span className="fa fa-heart"></span> <a href="#">5 Likes</a></li>
                    </ul>
                  </div>
                </article>

                {/*Column*/}
                <article className="column featured-news-column col-md-4 col-sm-6 col-xs-12">
                  <div className="inner-box">
                    <figure className="image-box">
                      <img src="/images/resource/blog-image-3.jpg" alt="" />
                      <a href="#" className="default-overlay-outer">
                        <div className="inner">
                          <div className="content-layer">
                            <div className="link-icon"><span className="fa fa-link"></span></div>
                          </div>
                        </div>
                      </a>
                    </figure>
                    <div className="content">
                      <div className="date">14<br />Jan</div>

                      <div className="tags"><span className="icon fa fa-tags"></span>&ensp; <a href="#">Consumer Law</a>, <a href="#">Privacy</a></div>
                      <h3><a href="#">Judgement, Unfair business</a></h3>
                      <div className="text"><p>Consumer prottection law or consumeer law is considered an area of law that regulates private law relationships between individual.</p></div>
                      <a href="#" className="theme-btn read-more">Read More</a>
                    </div>
                    <ul className="post-info clearfix">
                      <li><span className="author-thumb"><img src="/images/resource/small-author-thumb-3.png" alt="" /></span> <a href="#">Fernando</a></li>
                      <li><span className="fa fa-comments"></span> <a href="#">6 Comments</a></li>
                      <li><span className="fa fa-heart"></span> <a href="#">12 Likes</a></li>
                    </ul>
                  </div>
                </article>

              </div>

            </div>
          </section>


          {/*Sponsors Section*/}
          <section className="sponsors-section">
            <div className="auto-container">
              <div className="slider-outer">
                {/*Sponsors Slider*/}
                <ul className="sponsors-slider">
                  <li><a href="#"><img src="/images/sponsors/1.png" alt="" /></a></li>
                  <li><a href="#"><img src="/images/sponsors/2.png" alt="" /></a></li>
                  <li><a href="#"><img src="/images/sponsors/3.png" alt="" /></a></li>
                  <li><a href="#"><img src="/images/sponsors/4.png" alt="" /></a></li>
                  <li><a href="#"><img src="/images/sponsors/5.png" alt="" /></a></li>
                </ul>
              </div>

            </div>
          </section>


          {/*Info Section*/}
          <section className="info-section">
            <div className="auto-container">
              <div className="row clearfix">

                {/*Info Column*/}
                <article className="info-column col-md-4 col-sm-4 col-xs-12">
                  <div className="inner-box">
                    <div className="icon"><span className="fa fa-map-marker"></span></div>
                    <h3>Visit Our Office</h3>
                    <div className="text"><p>5648, VK 26th Lane Sparks Steet, <br />Opp Joe Park-Florida 26154.</p></div>
                  </div>
                </article>

                {/*Info Column*/}
                <article className="info-column col-md-4 col-sm-4 col-xs-12">
                  <div className="inner-box">
                    <div className="icon"><span className="fa fa-phone"></span></div>
                    <h3>Get Touch With Us</h3>
                    <div className="text"><p>+123 859 625, +321 569 742 <br />Lawyerjustice@Steelthemes.com</p></div>
                  </div>
                </article>

                {/*Info Column*/}
                <article className="info-column col-md-4 col-sm-4 col-xs-12">
                  <div className="inner-box">
                    <div className="icon"><span className="fa fa-clock-o"></span></div>
                    <h3>Office Timing</h3>
                    <div className="text"><p>Monday-Satday: 09.00am to 15.00pm <br />Sunday Holiday</p></div>
                  </div>
                </article>


              </div>
            </div>
          </section>

          {/*Map Section*/}
          <section className="map-section">
            {/*Map Container*/}
            <div className="map-outer">
              {/*Map Canvas*/}
              <div className="map-canvas"
                data-zoom="12"
                data-lat="-37.817085"
                data-lng="144.955631"
                data-type="roadmap"
                data-hue="#ffc400"
                data-title="Envato"
                data-content="Melbourne VIC 3000, Australia<br/><a href='mailto:info@youremail.com'>info@youremail.com</a>"
                style={{ height: "500px" }}>
              </div>

            </div>
          </section>

          <Footer />
        </div>{/*Page Wrapper End*/}
      </div>
    </div>
  );
};

export default Home;