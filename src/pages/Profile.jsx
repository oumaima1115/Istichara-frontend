import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import NavBar from "../components/Navbar";
import Footer from "../components/Footer";
import { getProfileById, getUsers } from "../services/api";

const Profile = () => {
  const { id } = useParams();
  const [profile, setProfile] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [similarAttorneys, setSimilarAttorneys] = useState([]);

  useEffect(() => {
    const fetchProfile = async () => {
      try {
        setLoading(true);
        const response = await getProfileById(id);
        const profileData = response?.data?.data || response?.data;
        setProfile(profileData);

        // Fetch similar attorneys if this is an attorney profile
        if (profileData?.role === 'attorney' && profileData?.specialty) {
          const similarResponse = await getUsers({
            specialty: profileData.specialty,
            limit: 5
          });
          const attorneys = similarResponse?.data?.data || [];
          // Filter out the current attorney
          const filteredAttorneys = attorneys.filter(attorney => attorney._id !== id);
          setSimilarAttorneys(filteredAttorneys);
        }
      } catch (err) {
        setError(err?.response?.data?.message || err.message || 'Failed to load profile');
      } finally {
        setLoading(false);
      }
    };

    fetchProfile();
  }, [id]);

  if (loading) {
    return (
      <div>
        <NavBar />
        <div style={{ padding: '50px', textAlign: 'center' }}>
          <p>Loading profile...</p>
        </div>
        <Footer />
      </div>
    );
  }

  if (error) {
    return (
      <div>
        <NavBar />
        <div style={{ padding: '50px', textAlign: 'center', color: '#c00' }}>
          <p>{error}</p>
        </div>
        <Footer />
      </div>
    );
  }

  if (!profile) {
    return (
      <div>
        <NavBar />
        <div style={{ padding: '50px', textAlign: 'center' }}>
          <p>Profile not found.</p>
        </div>
        <Footer />
      </div>
    );
  }

  const backendBase = process.env.REACT_APP_API_URL ? process.env.REACT_APP_API_URL.replace(/\/$/, '') : 'http://localhost:5000';
  const imageSrc = profile.profilePic
    ? profile.profilePic.startsWith('http')
      ? profile.profilePic
      : `${backendBase}/uploads/${profile.profilePic}`
    : 'images/resource/team-image-9.jpg';
  const designation = profile.specialty ? `${profile.specialty} Attorney` : 'Attorney';

  return (
    <div>
      <NavBar />

      <div className="sidebar-page-container">
        <div className="auto-container">
          <div className="row clearfix">

            <div className="col-lg-9 col-md-8 col-sm-12 col-xs-12 pull-right">
              <section className="attorney-single">
                <div className="basic-details">
                  <div className="row clearfix">
                    <div className="image-column col-md-5 col-sm-6 col-xs-12">
                      <figure className="image-box"><img className="img-responsive" src={imageSrc} alt={profile.name} /></figure>
                    </div>
                    <div className="info-column col-md-7 col-sm-6 col-xs-12">
                      <div className="info-header clearfix">
                        <div className="member-info pull-left">
                          <h3>{profile.name}</h3>
                          <div className="designation">{designation}</div>
                        </div>

                        <ul className="contact-info pull-right">
                          <li><span className="icon fa fa-envelope-o"></span> <a href={`mailto:${profile.email}`}>{profile.email}</a></li>
                          {profile.price != null && (
                            <li><span className="icon fa fa-usd"></span> {profile.price} / consultation</li>
                          )}
                        </ul>

                      </div>

                      <div className="text">
                        <p>{profile.role === 'attorney' ? `Experienced ${profile.specialty || 'law'} attorney with ${profile.cases_won || 0} cases won.` : 'Client profile.'}, Skilled in handling a wide range of cases with professionalism and attention to detail. Focused on protecting client rights, providing clear legal guidance, and achieving the best possible outcomes.</p>
                      </div>

                      <div className="styled-heading margin-bott-20"><h2>My Objective</h2></div>
                      <div className="text">
                        <p>{profile.role === 'attorney' ? `To provide excellent legal services in ${profile.specialty || 'various'} areas of law.` : 'Seeking reliable legal assistance.'} Motivated legal professional committed to justice and client advocacy. Aims to build trust through integrity, strong communication, and consistent results while handling each case with care and precision.</p>
                      </div>

                      <figure className="signature margin-bott-20"><img src="images/resource/signature-image-2.png" alt="" /></figure>

                      <div className="clearfix">
                        <div className="pull-left padd-right-20"><Link to="/istichara" className="theme-btn btn-style-one">For Appointment</Link></div>
                        <div className="pull-left">
                          <div className="social-links">
                            <a href="#"><span className="fa fa-facebook-f"></span></a>
                            <a href="#"><span className="fa fa-twitter"></span></a>
                            <a href="#"><span className="fa fa-google-plus"></span></a>
                            <a href="#"><span className="fa fa-linkedin"></span></a>
                          </div>
                        </div>
                      </div>

                    </div>
                  </div>
                </div>


                {/*Education*/}
                <div className="education-info">
                  <div className="styled-heading"><h2>About Education</h2></div>
                  <ul className="styled-list-three">
                    <li><strong>University of Oxford School of Law, J.D., 1968 -</strong> Stephen Flemming is a seasoned and its aggressivee attorneydevotes 100% of his practice to criminal defense.Gang Related Attempted Murder to a first time DUI, he has the experience and knowledge to handle the broadesting.</li>
                    <li><strong>University of Oxford, BA., 1965 -</strong> Aggressive attorneydevotes  of his practice seds ut to criminal defensse.Gang Related Attempted Murdeer to a first time DUI, he has the experience and knowledge to handle the broadesting range of criminal matters is a long established fact that a reader will be distracted.</li>

                  </ul>
                </div>


                {/*Bars*/}
                <div className="bars-info">
                  <div className="styled-heading"><h2>Bar Admissions</h2></div>
                  <ul className="styled-list-three">
                    <li><strong>District of Mexico -</strong> It is a long established fact that a reader will be distracteed by the readable content of a page when looking at its layout the point of using lorem Ipsum is that it has a more-or-less seds normal distriibution he point of using  admissions in the bar admission.</li>
                    <li><strong>Watican City -</strong> There are many variations of passages of Lorem Ipsum availablee, but the majority have suffered attorney alteration in some form, by injected humour, or randomised words which don't look even slightly believable.</li>

                  </ul>
                </div>


                {/*Court*/}
                <div className="court-info">
                  <div className="styled-heading"><h2>Court Admissions</h2></div>
                  <ul className="styled-list-three">
                    <li>UK Supreme Court - There are many variations of passages of Lorem Ipsum available ut, but the majority have suffered alteration in some form by injected humour, or randomised words which don't look even the slightly believable if you are going to use a passage of Lorem Ipsums, you need in the middle the  UK Supreme Court.</li>

                  </ul>
                </div>

                {/*Court*/}
                <div className="professional-info">
                  <div className="styled-heading"><h2>Professional Affiliations</h2></div>
                  <ul className="styled-list-three">
                    <li><strong>Board of Director of St.Pauls Pediatric AIDS Foundation.</strong></li>
                    <li><strong>Advisory Board, Food and Drug Law Institute.</strong></li>
                    <li><strong>Advisory Board, World Food Regulation Review.</strong></li>
                  </ul>
                </div>


                {/*Honors and Awards*/}
                <div className="awards-info">
                  <div className="styled-heading"><h2>Honors and Awards</h2></div>
                  <div className="text">
                    <p>It is a long established fact that a reader will be distracted by the readable content of a pages is when looking at its layoutt he point sed of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable nd a search for lorem ipsum will uncover in their infancy.</p>
                  </div>
                </div>

              </section>
            </div>
            <div className="col-lg-3 col-md-4 col-sm-12 col-xs-12 pull-left">
              <aside className="sidebar">

                <div className="widget sidebar-widget styled-nav">
                  <div className="styled-heading"><h2>Similar Attorneys</h2></div>
                  <nav className="nav-outer">
                    <ul>
                      <li><Link to="/attorneys">Meet Similar Attorneys</Link></li>
                      {profile?.role === 'attorney' && (
                        <li className={id ? 'current' : ''}>
                          <Link to={id ? `/profile/${id}` : "/profile"}>{profile.name}</Link>
                        </li>
                      )}
                      {similarAttorneys.map((attorney) => (
                        <li key={attorney._id}>
                          <Link to={`/profile/${attorney._id}`}>{attorney.name}</Link>
                        </li>
                      ))}
                      {similarAttorneys.length === 0 && profile?.role === 'attorney' && (
                        <li><span style={{ color: '#999', fontStyle: 'italic' }}>No similar attorneys found</span></li>
                      )}
                    </ul>
                  </nav>
                </div>

              </aside>
            </div>

          </div>
        </div>
      </div>

      <section className="default-form-section" style={{ backgroundImage: "url(images/background/consult-form-bg.jpg)" }}>
        <div className="auto-container">

          <div className="styled-heading centered">
            <h2>Get Touch With Me</h2>
          </div>

          <div className="default-form">
            <form>
              <div className="row clearfix">
                <div className="form-group col-md-6 col-sm-12 col-xs-12">
                  <input type="text" name="name" placeholder="Your Name" required />
                </div>
                <div className="form-group col-md-6 col-sm-12 col-xs-12">
                  <input type="email" name="email" placeholder="Email Address" required />
                </div>
                <div className="form-group col-md-12 col-sm-12 col-xs-12">
                  <textarea name="message" placeholder="Your Message..." required></textarea>
                </div>
                <div className="form-group text-center col-md-12 col-sm-12 col-xs-12">
                  <button type="submit" className="theme-btn btn-style-one">Send Message</button>
                </div>
              </div>
            </form>
          </div>

        </div>
      </section>

      <Footer />
    </div>
  );
};
export default Profile;