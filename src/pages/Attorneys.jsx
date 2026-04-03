import '../style/Attorneys.css';
import NavBar from "../components/Navbar";
import Footer from "../components/Footer";

const Attorneys = () => {

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

      <section className="team-section">
        <div className="auto-container">

          <div
            style={{
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
              marginBottom: '30px',
              flexWrap: 'wrap',
              gap: '10px'
            }}
          >

            <div style={{ display: 'flex', gap: '10px', flexWrap: 'wrap' }}>
              <button className="filter-btn active">All</button>
              <button className="filter-btn">Family</button>
              <button className="filter-btn">Criminal</button>
              <button className="filter-btn">Consumer</button>
            </div>

            <div>
              <input
                type="text"
                placeholder="Search attorney..."
                style={{
                  padding: '8px 12px',
                  border: '1px solid #ddd',
                  borderRadius: '4px'
                }}
              />
            </div>

          </div>
          <div className="styled-heading centered">
            <h2>Meet Our Attorneys</h2>
          </div>

          <div className="row clearfix">

            <article className="column team-member col-lg-3 col-md-3 col-sm-6 col-xs-12 wow fadeInUp" data-wow-delay="0ms" data-wow-duration="1500ms">
              <div className="inner-box">
                <figure className="image"><a href="mailto:mail@email.com"><img src="images/resource/team-image-1.jpg" alt="" /></a></figure>
                <div className="member-info">
                  <h3>David Vigo Michel</h3>
                  <div className="designation">Family Attorney</div>
                </div>
                <div className="content">
                  <ul className="contact-info">
                    <li><span className="icon fa fa-phone"></span> <a href="#">98765-12-345</a></li>
                    <li><span className="icon fa fa-envelope-o"></span> <a href="#">Davidvigo@domain.com</a></li>
                  </ul>

                  <div style={{ marginTop: '15px', textAlign: 'center' }}>
                    <button className="theme-btn btn-style-one">
                      See profile
                    </button>
                  </div>
                </div>
              </div>
            </article>

            <article className="column team-member col-lg-3 col-md-3 col-sm-6 col-xs-12 wow fadeInUp" data-wow-delay="300ms" data-wow-duration="1500ms">
              <div className="inner-box">
                <figure className="image"><a href="mailto:mail@email.com"><img src="images/resource/team-image-2.jpg" alt="" /></a></figure>
                <div className="member-info">
                  <h3>Jem Stone Lawrence</h3>
                  <div className="designation">Consumer Attorney</div>
                </div>
                <div className="content">
                  <ul className="contact-info">
                    <li><span className="icon fa fa-phone"></span> <a href="#">97877-32-100</a></li>
                    <li><span className="icon fa fa-envelope-o"></span> <a href="#">Jemstone@domain.com</a></li>
                  </ul>

                  <div style={{ marginTop: '15px', textAlign: 'center' }}>
                    <button className="theme-btn btn-style-one">
                      See profile
                    </button>
                  </div>
                </div>
              </div>
            </article>

            <article className="column team-member col-lg-3 col-md-3 col-sm-6 col-xs-12 wow fadeInUp" data-wow-delay="600ms" data-wow-duration="1500ms">
              <div className="inner-box">
                <figure className="image"><a href="mailto:mail@email.com"><img src="images/resource/team-image-3.jpg" alt="" /></a></figure>
                <div className="member-info">
                  <h3>Mercy Van Desosa</h3>
                  <div className="designation">Criminal Attorney</div>
                </div>
                <div className="content">
                  <ul className="contact-info">
                    <li><span className="icon fa fa-phone"></span> <a href="#">97901-23-456</a></li>
                    <li><span className="icon fa fa-envelope-o"></span> <a href="#">Mercydesosa@domain.com</a></li>
                  </ul>

                  <div style={{ marginTop: '15px', textAlign: 'center' }}>
                    <button className="theme-btn btn-style-one">
                      See profile
                    </button>
                  </div>
                </div>
              </div>
            </article>

            <article className="column team-member col-lg-3 col-md-3 col-sm-6 col-xs-12 wow fadeInUp" data-wow-delay="900ms" data-wow-duration="1500ms">
              <div className="inner-box">
                <figure className="image"><a href="mailto:mail@email.com"><img src="images/resource/team-image-4.jpg" alt="" /></a></figure>
                <div className="member-info">
                  <h3>Patrick John Meckey</h3>
                  <div className="designation">Consumer Attorney</div>
                </div>
                <div className="content">
                  <ul className="contact-info">
                    <li><span className="icon fa fa-phone"></span> <a href="#">98765-43-210</a></li>
                    <li><span className="icon fa fa-envelope-o"></span> <a href="#">Patrickmeckey@domain.com</a></li>
                  </ul>

                  <div style={{ marginTop: '15px', textAlign: 'center' }}>
                    <button className="theme-btn btn-style-one">
                      See profile
                    </button>
                  </div>
                </div>
              </div>
            </article>

          </div>

          <div class="styled-pagination text-center">
            <ul>
              <li class="prev"><a href="#"><span class="fa fa-angle-left"></span></a></li>
              <li><a href="#">1</a></li>
              <li><a href="#">2</a></li>
              <li><a href="#">3</a></li>
              <li class="next"><a href="#"><span class="fa fa-angle-right"></span></a></li>
            </ul>
          </div>

        </div>
      </section>
      <Footer />
    </div>
  );
}
export default Attorneys;