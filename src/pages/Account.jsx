import '../style/Account.css';
import PhoneInput from 'react-phone-input-2'
import 'react-phone-input-2/lib/style.css'
import { useState } from "react";
import NavBar from "../components/Navbar";
import Footer from "../components/Footer";

const Account = () => {
    const [phone, setPhone] = useState("");
    const [startTime, setStartTime] = useState("");
    const [endTime, setEndTime] = useState("");

    return (
        <div>
            <NavBar />
            <section className="checkout-section cart-section">
                <div className="auto-container">

                    <div className="row clearfix">

                        <div className="col-md-6 col-sm-12 col-xs-12 column form-column">
                            <div className="styled-heading"><h2>Account Profile</h2></div>
                            <div className="default-form billing-info-form">
                                <form method="post" action="https://st.ourhtmldemo.com/template/laywer-justice/checkout.html">

                                    <div className="row clearfix">

                                        <div className="form-group col-md-12 col-sm-12 col-xs-12">
                                            <div className="field-label">Country*</div>
                                            <input type="text" name="country" value="" />
                                        </div>

                                        <div className="form-group col-md-6 col-sm-6 col-xs-12">
                                            <div className="field-label">Full Name*</div>
                                            <input type="text" name="fname" value="" />
                                        </div>

                                        {/* show eye icon for password */}
                                        <div className="form-group col-md-6 col-sm-6 col-xs-12">
                                            <div className="field-label">Password *</div>
                                            <input type="password" name="lname" value="" />
                                        </div>

                                        <div className="form-group col-md-12 col-sm-12 col-xs-12">
                                            <div className="field-label">Email Address * </div>
                                            <input type="text" name="address-1" value="" placeholder="lawyer@example.com" />
                                        </div>

                                        <div className="form-group col-md-12 col-sm-12 col-xs-12">
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

                                        <div className="form-group col-md-12 col-sm-12 col-xs-12">
                                            <div className="field-label">Profile Picture * </div>

                                            <div className="form-group col-md-12 col-sm-12 col-xs-12">
                                                <label
                                                    style={{
                                                        display: 'inline-block',
                                                        padding: '10px 20px',
                                                        backgroundColor: '#223555',
                                                        color: 'rgb(255, 255, 255)',
                                                        cursor: 'pointer',
                                                        borderRadius: '5px',
                                                        border: '1px solid #dadada',
                                                        fontSize: '14px',
                                                        fontWeight: '700'
                                                    }}
                                                >
                                                    Upload Attachments
                                                    <input
                                                        type="file"
                                                        name="attachments"
                                                        required
                                                        style={{ display: 'none' }}
                                                    />
                                                </label>
                                            </div>

                                            <img src="https://st.ourhtmldemo.com/template/laywer-justice/images/resource/team-image-8.jpg" alt="Profile" className="profile-picture" />
                                        </div>

                                    </div>

                                </form>
                            </div>
                        </div>

                        <div className="col-md-6 col-sm-12 col-xs-12 column form-column">
                            <div className="styled-heading"><h2>Calendar</h2></div>
                            <div className="default-form billing-info-form">
                                <form method="post" action="https://st.ourhtmldemo.com/template/laywer-justice/checkout.html">

                                    <div className="row clearfix">

                                        <div className="form-group col-md-12 col-sm-12 col-xs-12">
                                            <div className="field-label">Days*</div>
                                            <select name="days">
                                                <option value="monday">Monday</option>
                                                <option value="tuesday">Tuesday</option>
                                                <option value="wednesday">Wednesday</option>
                                                <option value="thursday">Thursday</option>
                                                <option value="friday">Friday</option>
                                                <option value="saturday">Saturday</option>
                                                <option value="sunday">Sunday</option>
                                            </select>
                                        </div>

                                        <div className="form-group col-md-6 col-sm-6 col-xs-12">
                                            <div className="field-label">Start Time *</div>
                                            <input
                                                type="time"
                                                value={startTime}
                                                style={{border: "1px solid #ccc", width: "100%"}}
                                                onChange={(e) => setStartTime(e.target.value)}
                                            />
                                        </div>

                                        <div className="form-group col-md-6 col-sm-6 col-xs-12">
                                            <div className="field-label">End Time *</div>
                                            <input
                                                type="time"
                                                value={endTime}
                                                style={{border: "1px solid #ccc", width: "100%"}}
                                                onChange={(e) => setEndTime(e.target.value)}
                                            />
                                        </div>

                                        <div className="form-group col-md-12 col-sm-12 col-xs-12">
                                            <div className="field-label">Price Consultation * </div>
                                            <input type="text" name="price-consultation" value="" placeholder="$100" style={{ border: "1px solid #ccc" }} />
                                        </div>

                                        <div className="form-group col-md-12 col-sm-12 col-xs-12">
                                            <div className="field-label">Cases Won * </div>
                                            <input type="text" name="cases-won" value="" placeholder="30" />
                                        </div>

                                        <div className="form-group col-md-12 col-sm-12 col-xs-12">
                                            <div className="field-label">Speciality *</div>
                                            <select name="speciality">
                                                <option value="criminal-law">Criminal Law</option>
                                                <option value="family-law">Family Law</option>
                                                <option value="corporate-law">Corporate Law</option>
                                                <option value="intellectual-property">Intellectual Property</option>
                                                <option value="personal-injury">Personal Injury</option>
                                            </select>
                                        </div>

                                        <div className="form-group col-md-12 col-sm-12 col-xs-12">
                                            <div className="field-label">Reviews</div>
                                            {/* I want to show ratings stars colord in yellow and the number of reviews in brackets. For example: ★★★★☆ (100 reviews) */}
                                            <div className="reviews">
                                                <span className="star filled">★</span>
                                                <span className="star filled">★</span>
                                                <span className="star filled">★</span>
                                                <span className="star filled">★</span>
                                                <span className="star">☆</span>
                                                <span style={{ marginLeft: '8px' }}>(45 reviews)</span>
                                            </div>
                                        </div>

                                    </div>

                                </form>
                            </div>
                        </div>

                    </div>
                </div >
            </section >
            <Footer />
        </div >
    );
}
export default Account;