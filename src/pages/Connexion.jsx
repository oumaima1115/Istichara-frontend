import { useEffect, useState } from "react";
import Footer from "../components/Footer";
import PhoneInput from 'react-phone-input-2';
import 'react-phone-input-2/lib/style.css';
import '../style/Connecion.css';

const Connexion = () => {

  const [loading, setLoading] = useState(true);
  const [open, setOpen] = useState(false);
  const [phone, setPhone] = useState("");
  const [startTime, setStartTime] = useState("");
  const [endTime, setEndTime] = useState("");
  const [speciality, setSpeciality] = useState("");
  const [role, setRole] = useState("");

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div>
      <div className="page-outer-container">
        <div className="page-wrapper">

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


          </header>{/*End Main Header */}

          {/*Register Section*/}
          <section className="register-section">
            <div className="auto-container">
              <div className="row clearfix">

                {/*Form Column*/}
                <div className="form-column column col-lg-6 col-md-6 col-sm-12 col-xs-12">
                  {/*Styled Heading*/}
                  <div className="styled-heading">
                    <h2>Login Here</h2>
                  </div>

                  {/*Login Form*/}
                  <div className="styled-form login-form">
                    <form method="post" action="https://st.ourhtmldemo.com/template/laywer-justice/index.html">
                      <div className="form-group">
                        <span className="adon-icon"><span className="fa fa-user"></span></span>
                        <input type="text" name="username" placeholder="Your Name *" />
                      </div>
                      <div className="form-group">
                        <span className="adon-icon"><span className="fa fa-envelope-o"></span></span>
                        <input type="email" name="useremil" placeholder="Enter Mail id *" />
                      </div>
                      <div className="form-group">
                        <span className="adon-icon"><span className="fa fa-unlock-alt"></span></span>
                        <input type="password" name="userpassword" placeholder="Enter Password" />
                      </div>
                      <div className="clearfix">
                        <div className="form-group pull-left">
                          <button type="button" className="theme-btn btn-style-one">login</button>
                        </div>
                        <div className="form-group social-links-two pull-right">
                          Or login with <a href="#" className="img-circle facebook"><span className="fa fa-facebook-f"></span></a> <a href="#" className="img-circle twitter"><span className="fa fa-twitter"></span></a> <a href="#" className="img-circle google-plus"><span className="fa fa-google-plus"></span></a>
                        </div>
                      </div>

                      <div className="clearfix">
                        <div className="pull-left">
                          <input type="checkbox" id="remember-me" /><label for="remember-me">&nbsp; Remember Me</label>
                        </div>
                        <div className="pull-right">
                          <a href="#" className="forgot">Forgot Password?</a>
                        </div>
                      </div>

                    </form>
                  </div>

                </div>

                {/*Form Column*/}
                <div className="form-column column col-lg-6 col-md-6 col-sm-12 col-xs-12">
                  {/*Styled Heading*/}
                  <div className="styled-heading">
                    <h2>Register Now</h2>
                  </div>

                  {/*Login Form*/}
                  <div className="styled-form register-form">
                    <form>
                      <div className="row clearfix" style={{ display: 'flex', flexWrap: 'wrap' }}>
                        <div className="form-group col-md-6 col-sm-6 col-xs-12">
                          <div className="field-label">Full Name*</div>
                          <input type="text" name="fname" value="" />
                        </div>

                        {/* show eye icon for password */}
                        <div className="form-group col-md-6 col-sm-6 col-xs-12">
                          <div className="field-label">Password *</div>
                          <input type="password" name="lname" value="" />
                        </div>

                        <div className="form-group col-md-6 col-sm-6 col-xs-12">
                          <div className="field-label">Country*</div>
                          <input type="text" name="country" value="" />
                        </div>

                        <div className="form-group col-md-6 col-sm-6 col-xs-12">
                          <div className="field-label">Email Address * </div>
                          <input type="text" name="address-1" value="" placeholder="attorney@example.com" />
                        </div>

                        <div className="form-group col-md-12 col-sm-12 col-xs-12" >
                          <div className="field-label">Phone Number *</div>
                          <PhoneInput
                            country={'tn'}
                            value={phone}
                            onChange={(value) => setPhone(value)}
                            inputStyle={{
                              width: '100%',
                              paddingLeft: '50px'
                            }}
                          />
                        </div>

                        <div className="form-group col-md-12 col-sm-12 col-xs-12" >
                          <label
                            style={{
                              display: 'inline-block',
                              padding: '10px 20px',
                              backgroundColor: '#223555',
                              color: 'rgb(243, 243, 243)',
                              cursor: 'pointer',
                              borderRadius: '5px',
                              border: '1px solid #dadada',
                              fontWeight: '700',
                            }}
                          >
                            UPLOAD IMAGE
                            <input
                              type="file"
                              name="attachments"
                              required
                              style={{ display: 'none' }}
                            />
                          </label>
                        </div>

                        {/* display a radio button group to select the user type (client or attorney) */}
                        <div className="form-group col-md-12 col-sm-12 col-xs-12">
                          <div className="field-label">I am a *</div>

                          <div className="user-type-selector">
                            <input
                              type="radio"
                              id="client"
                              name="user-type"
                              value="client"
                              checked={role === "client"}
                              onChange={(e) => setRole(e.target.value)}
                            />
                            <label htmlFor="client">👤 Client</label>

                            <input
                              type="radio"
                              id="attorney"
                              name="user-type"
                              value="attorney"
                              checked={role === "attorney"}
                              onChange={(e) => setRole(e.target.value)}
                            />
                            <label htmlFor="attorney">👨‍⚖️ Attorney</label>
                          </div>
                        </div>

                        {role === "attorney" && (
                          <>
                            {/* display a select options to select the user's speciality (for attorneys) , if the speciality is not in the list the user can select "other" and enter it in a text input */}
                            <div className="form-group col-md-12 col-sm-12 col-xs-12" style={{
                              display: "flex",
                              flexDirection: "column",
                              gap: "12px",
                            }}>
                              <label for="speciality">Speciality:</label>
                              <select
                                value={speciality}
                                onChange={(e) => setSpeciality(e.target.value)}
                                name="speciality"
                                id="speciality"
                              >
                                <option value="">Select Speciality</option>
                                <option value="criminal">Criminal Law</option>
                                <option value="family">Family Law</option>
                                <option value="corporate">Corporate Law</option>
                                <option value="other">Other</option>
                              </select>

                              {speciality === "other" && (
                                <input type="text" name="other-speciality" placeholder="Specify your speciality if not listed" />
                              )}

                            </div>

                            <div className="form-group col-md-12 col-sm-12 col-xs-12">
                              <div className="field-label">Days*</div>
                              {/* the select option should be multiple and the user can select multiple days of availability for the attorney */}
                              <div className="day-selector">
                                <input type="checkbox" id="sun" name="days" value="sun" />
                                <label for="sun">Sun</label>
                                <input type="checkbox" id="mon" name="days" value="mon" />
                                <label for="mon">Mon</label>
                                <input type="checkbox" id="tue" name="days" value="tue" />
                                <label for="tue">Tue</label>
                                <input type="checkbox" id="wed" name="days" value="wed" />
                                <label for="wed">Wed</label>
                                <input type="checkbox" id="thu" name="days" value="thu" />
                                <label for="thu">Thu</label>
                                <input type="checkbox" id="fri" name="days" value="fri" />
                                <label for="fri">Fri</label>
                                <input type="checkbox" id="sat" name="days" value="sat" />
                                <label for="sat">Sat</label>
                              </div>
                            </div>

                            <div className="form-group col-md-6 col-sm-6 col-xs-12">
                              <div className="field-label">Start Time *</div>
                              <input
                                type="time"
                                value={startTime}
                                style={{ border: "1px solid #ccc", width: "100%", padding: "8px" }}
                                onChange={(e) => setStartTime(e.target.value)}
                              />
                            </div>

                            <div className="form-group col-md-6 col-sm-6 col-xs-12">
                              <div className="field-label">End Time *</div>
                              <input
                                type="time"
                                value={endTime}
                                style={{ border: "1px solid #ccc", width: "100%", padding: "8px" }}
                                onChange={(e) => setEndTime(e.target.value)}
                              />
                            </div>

                            <div className="form-group col-md-12 col-sm-12 col-xs-12">
                              <div className="field-label">Price Consultation * </div>
                              <input type="text" name="price-consultation" placeholder="$100" style={{ border: "1px solid #ccc" }} />
                            </div>

                            <div className="form-group col-md-12 col-sm-12 col-xs-12">
                              <div className="field-label">Cases Won * </div>
                              <input type="text" name="cases-won" placeholder="30" />
                            </div>
                          </>
                        )}
                        <div className="clearfix">
                          <div className="form-group pull-left">
                            <button type="button" className="theme-btn btn-style-one">Register</button>
                          </div>
                          <div className="form-group padd-top-10 pull-right">
                            * You must be a free registered user to submit content.
                          </div>
                        </div>

                      </div>
                    </form>
                  </div>

                </div>

              </div>
            </div>
          </section>
          <Footer />
        </div>
      </div>
    </div>
  );
}
export default Connexion;