import NavBar from "../components/Navbar";
import Footer from "../components/Footer";

const NotFound = () => {

  return (
    <div>
      <NavBar />

      <section class="error-section">
        <div class="auto-container">

          <div class="text-content">
            <div class="bigger-text">404</div>
            <div class="medium-text">Oops, the page you are looking for does not exit.</div>
            <div class="text">
              <p>The Site is Currently Unavailable, Please Try Again Soon, or ContactSupport if You Need a Help.</p>
            </div>

            <a href="#" class="theme-btn btn-style-one">Back To Home</a> &ensp; <a href="#" class="theme-btn btn-style-two">Support Team</a>
          </div>

          <figure class="image-box"><img src="images/resource/error-group-image.png" alt="" /></figure>

        </div>
      </section>
      <Footer />
    </div>
  );
}
export default NotFound;