import NavBar from "../components/Navbar";
import Footer from "../components/Footer";

const ContactUs = () => {

    return (
        <div>
            <NavBar />
            <section class="contact-section">
                <div class="auto-container">
                    <div class="row clearfix">

                        <div class="form-column column col-lg-8 col-md-8 col-sm-12 col-xs-12">
                            <div class="styled-heading">
                                <h2>Write Your Message</h2>
                            </div>

                            <div class="text margin-bott-40"><p>Never let the future disturb you. You will meet it, if you have to, with the same weapons of reason which today arm you against. Never let the future disturb you. You will meet it, if you have to, with the same weapons of reason.</p></div>

                            <div class="default-form contact-form">
                                <form id="contact-form" name="contact_form" class="contact-form" action="https://st.ourhtmldemo.com/template/laywer-justice/inc/sendmail.php" method="post">
                                    <div class="row clearfix">
                                        <div class="form-group col-md-6 col-sm-6 col-xs-12">
                                            <input type="text" name="form_name" class="form-control" value="" placeholder="Your Name *" required="" />
                                        </div>
                                        <div class="form-group col-md-6 col-sm-6 col-xs-12">
                                            <input type="email" name="form_email" class="form-control required email" value="" placeholder="Your Mail *" required="" />
                                        </div>
                                        <div class="form-group col-md-6 col-sm-6 col-xs-12">
                                            <input type="text" name="form_phone" class="form-control" value="" placeholder="Phone Number*" required="" />
                                        </div>
                                        <div class="form-group col-md-6 col-sm-6 col-xs-12">
                                            <input type="text" name="form_subject" class="form-control" value="" placeholder="Subject" required="" />
                                        </div>
                                        <div class="form-group col-md-12 col-sm-12 col-xs-12">
                                            <textarea name="form_message" class="form-control textarea required" placeholder="Your Message...."></textarea>
                                        </div>
                                        <div class="form-group text-left col-md-12 col-sm-12 col-xs-12">
                                            <input id="form_botcheck" name="form_botcheck" class="form-control" type="hidden" value="" />
                                            <button class="theme-btn btn-style-one" type="submit" data-loading-text="Please wait...">send Now</button>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>

                        <div class="info-column column col-lg-4 col-md-4 col-sm-8 col-xs-12">
                            <div class="styled-heading">
                                <h2>Get Touch With Us</h2>
                            </div>

                            <div class="contact-info">
                                <div class="info-block">
                                    <h3><span class="icon fa fa-map-marker"></span> Address</h3>
                                    <div class="text"><p>5648, VK 26th Brooke Line Steet, <br />Columbia, SC 29201, London, United Kingdom</p></div>
                                </div>
                                <div class="info-block">
                                    <h3><span class="icon fa fa-phone"></span> Phone</h3>
                                    <div class="text"><p>+123 859 625, +321 569 742 <br />Lawyerjustice@Steelthemes.com</p></div>
                                </div>
                                <div class="info-block">
                                    <h3><span class="icon fa fa-clock-o"></span> Office Hours</h3>
                                    <ul class="hours-list">
                                        <li class="clearfix"><span class="col">Monday</span><span class="col">09.00-17.00</span></li>
                                        <li class="clearfix"><span class="col">Tuesday</span><span class="col">09.00-17.00</span></li>
                                        <li class="clearfix"><span class="col">Wednesday</span><span class="col">09.00-17.00</span></li>
                                        <li class="clearfix"><span class="col">Thursday</span><span class="col">09.00-17.00</span></li>
                                        <li class="clearfix"><span class="col">Friday</span><span class="col">09.00-17.00</span></li>
                                        <li class="clearfix"><span class="col">Saturday</span><span class="col">10.00-13.00</span></li>
                                        <li class="clearfix"><span class="col">Sunday</span><span class="col theme_color">Close</span></li>
                                    </ul>
                                </div>
                            </div>

                        </div>

                    </div>
                </div>
            </section>

            <div style={{ width: '100%', height: '400px' }}>
                <iframe
                    title="map"
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    loading="lazy"
                    allowFullScreen
                    src="https://www.google.com/maps?q=40.712784,-74.005941&z=12&output=embed"
                ></iframe>
            </div>
            <Footer />
        </div>
    );
}
export default ContactUs;