import NavBar from "../components/Navbar";
import Footer from "../components/Footer";

const Connexion = () => {

  return (
    <div>
      <div class="page-outer-container">
        <div class="page-wrapper">

          <NavBar />
          {/*Register Section*/}
          <section class="register-section">
            <div class="auto-container">
              <div class="row clearfix">

                {/*Form Column*/}
                <div class="form-column column col-lg-6 col-md-6 col-sm-12 col-xs-12">
                  {/*Styled Heading*/}
                  <div class="styled-heading">
                    <h2>Login Here</h2>
                  </div>

                  {/*Login Form*/}
                  <div class="styled-form login-form">
                    <form method="post" action="https://st.ourhtmldemo.com/template/laywer-justice/index.html">
                      <div class="form-group">
                        <span class="adon-icon"><span class="fa fa-user"></span></span>
                        <input type="text" name="username" value="" placeholder="Your Name *" />
                      </div>
                      <div class="form-group">
                        <span class="adon-icon"><span class="fa fa-envelope-o"></span></span>
                        <input type="email" name="useremil" value="" placeholder="Enter Mail id *" />
                      </div>
                      <div class="form-group">
                        <span class="adon-icon"><span class="fa fa-unlock-alt"></span></span>
                        <input type="password" name="userpassword" value="" placeholder="Enter Password" />
                      </div>
                      <div class="clearfix">
                        <div class="form-group pull-left">
                          <button type="button" class="theme-btn btn-style-one">login</button>
                        </div>
                        <div class="form-group social-links-two pull-right">
                          Or login with <a href="#" class="img-circle facebook"><span class="fa fa-facebook-f"></span></a> <a href="#" class="img-circle twitter"><span class="fa fa-twitter"></span></a> <a href="#" class="img-circle google-plus"><span class="fa fa-google-plus"></span></a>
                        </div>
                      </div>

                      <div class="clearfix">
                        <div class="pull-left">
                          <input type="checkbox" id="remember-me" /><label for="remember-me">&nbsp; Remember Me</label>
                        </div>
                        <div class="pull-right">
                          <a href="#" class="forgot">Forgot Password?</a>
                        </div>
                      </div>

                    </form>
                  </div>

                </div>

                {/*Form Column*/}
                <div class="form-column column col-lg-6 col-md-6 col-sm-12 col-xs-12">
                  {/*Styled Heading*/}
                  <div class="styled-heading">
                    <h2>Register Now</h2>
                  </div>

                  {/*Login Form*/}
                  <div class="styled-form register-form">
                    <form method="post" action="https://st.ourhtmldemo.com/template/laywer-justice/index.html">
                      <div class="form-group">
                        <span class="adon-icon"><span class="fa fa-user"></span></span>
                        <input type="text" name="username" value="" placeholder="Your Name *" />
                      </div>
                      <div class="form-group">
                        <span class="adon-icon"><span class="fa fa-envelope-o"></span></span>
                        <input type="email" name="useremil" value="" placeholder="Enter Mail id *" />
                      </div>
                      <div class="form-group">
                        <span class="adon-icon"><span class="fa fa-unlock-alt"></span></span>
                        <input type="password" name="userpassword" value="" placeholder="Enter Password" />
                      </div>
                      <div class="clearfix">
                        <div class="form-group pull-left">
                          <button type="button" class="theme-btn btn-style-one">Register</button>
                        </div>
                        <div class="form-group padd-top-10 pull-right">
                          * You must be a free registered user to submit content.
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