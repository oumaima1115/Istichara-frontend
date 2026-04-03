import NavBar from "../components/Navbar";
import Footer from "../components/Footer";

const NotFound = () => {

  return (
    <div>
      <NavBar />

      {/*Page Title*/}
      <section className="page-title" style={{ backgroundImage: `url(images/background/pagetitle-bg.jpg)` }}>
        <div className="auto-container">
          <h1>Blog single Post</h1>
        </div>
      </section>

      <section className="page-info">
        <div className="auto-container clearfix">
          <div className="pull-left"><h2>News</h2></div>
          <div className="pull-right">
            <ul className="bread-crumb clearfix">
              <li><a href="index.html">Home</a></li>
              <li><a href="practice-areas.html">News</a></li>
              <li>Blog single Post</li>
            </ul>
          </div>
        </div>
      </section>

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