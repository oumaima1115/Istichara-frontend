import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../style/Attorneys.css';
import NavBar from "../components/Navbar";
import Footer from "../components/Footer";
import { getUsers } from "../services/api";

const Attorneys = () => {
  const navigate = useNavigate();
  const [attorneys, setAttorneys] = useState([]);
  const [searchText, setSearchText] = useState('');
  const [selectedSpecialty, setSelectedSpecialty] = useState('all');
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const filteredAttorneys = attorneys.filter((attorney) => {
    const query = searchText.trim().toLowerCase();
    const specialty = attorney.specialty ? attorney.specialty.toLowerCase() : '';

    if (selectedSpecialty !== 'all' && selectedSpecialty !== specialty) {
      return false;
    }

    if (!query) return true;
    return [attorney.name, attorney.specialty, attorney.email]
      .filter(Boolean)
      .some((field) => field.toLowerCase().includes(query));
  });

useEffect(() => {
  const fetchAttorneys = async () => {
    try {
      setLoading(true);
      const response = await getUsers();
      const payload = response?.data;
      const users = Array.isArray(payload?.data)
        ? payload.data
        : Array.isArray(payload)
          ? payload
          : [];
      setAttorneys(users.filter((user) => user.role === 'attorney'));
    } catch (err) {
      setError(err?.response?.data?.message || err.message || 'Failed to load attorneys');
    } finally {
      setLoading(false);
    }
  };

  fetchAttorneys();
}, []);

return (
  <div>
    <NavBar />

    {/*Page Title*/}
    <section className="page-title" style={{ backgroundImage: `url(images/background/pagetitle-bg.jpg)` }}>
      <div className="auto-container">
        <h1>Attorneys</h1>
      </div>
    </section>

    <section className="page-info">
      <div className="auto-container clearfix">
        <div className="pull-left"><h2>Attorneys</h2></div>
        <div className="pull-right">
          <ul className="bread-crumb clearfix">
            <li><a href="/">Home</a></li>
            <li><a href="/attorneys">Attorneys</a></li>
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
            <button
              className={`filter-btn ${selectedSpecialty === 'all' ? 'active' : ''}`}
              type="button"
              onClick={() => setSelectedSpecialty('all')}
            >
              All
            </button>
            <button
              className={`filter-btn ${selectedSpecialty === 'family' ? 'active' : ''}`}
              type="button"
              onClick={() => setSelectedSpecialty('family')}
            >
              Family
            </button>
            <button
              className={`filter-btn ${selectedSpecialty === 'criminal' ? 'active' : ''}`}
              type="button"
              onClick={() => setSelectedSpecialty('criminal')}
            >
              Criminal
            </button>
            <button
              className={`filter-btn ${selectedSpecialty === 'consumer' ? 'active' : ''}`}
              type="button"
              onClick={() => setSelectedSpecialty('consumer')}
            >
              Consumer
            </button>
          </div>

          <div>
            <input
              type="text"
              value={searchText}
              onChange={(e) => setSearchText(e.target.value)}
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

        <div className="row clearfix" style={{display: "flex", alignItems: "center", justifyContent: "center"}}>
          {loading ? (
            <div style={{ padding: '30px', textAlign: 'center' }}>
              <p>Loading attorneys...</p>
            </div>
          ) : error ? (
            <div style={{ padding: '30px', textAlign: 'center', color: '#c00' }}>
              <p>{error}</p>
            </div>
          ) : filteredAttorneys.length === 0 ? (
            <div style={{ padding: '30px', textAlign: 'center' }}>
              <p>No attorneys found.</p>
            </div>
          ) : (
            filteredAttorneys.map((attorney, index) => {
              const backendBase = process.env.REACT_APP_API_URL ? process.env.REACT_APP_API_URL.replace(/\/$/, '') : 'http://localhost:5000';
              const imageSrc = attorney.profilePic
                ? attorney.profilePic.startsWith('http')
                  ? attorney.profilePic
                  : `${backendBase}/uploads/${attorney.profilePic}`
                : 'images/resource/team-image-1.jpg';
              const designation = attorney.specialty ? `${attorney.specialty} Attorney` : 'Attorney';

              return (
                <article
                  key={attorney._id || index}
                  className="column team-member col-lg-3 col-md-3 col-sm-6 col-xs-12 wow fadeInUp"
                  data-wow-delay={`${index * 300}ms`}
                  data-wow-duration="1500ms"
                >
                  <div className="inner-box">
                    <figure className="image">
                      <a href={`mailto:${attorney.email}`}>
                        <img src={imageSrc} alt={attorney.name} />
                      </a>
                    </figure>
                    <div className="member-info">
                      <h3>{attorney.name}</h3>
                      <div className="designation">{designation}</div>
                    </div>
                    <div className="content">
                      <ul className="contact-info">
                        <li>
                          <span className="icon fa fa-envelope-o"></span>{' '}
                          <a href={`mailto:${attorney.email}`}>{attorney.email}</a>
                        </li>
                        {attorney.price != null && (
                          <li>
                            <span className="icon fa fa-usd"></span>{' '}
                            <span>{attorney.price} / consultation</span>
                          </li>
                        )}
                        {attorney.cases_won != null && (
                          <li>
                            <span className="icon fa fa-briefcase"></span>{' '}
                            <span>{attorney.cases_won} cases won</span>
                          </li>
                        )}
                      </ul>

                      <div style={{ marginTop: '15px', textAlign: 'center' }}>
                        <button
                          type="button"
                          className="theme-btn btn-style-one"
                          onClick={() => navigate(`/profile/${attorney._id}`)}
                        >
                          See profile
                        </button>
                      </div>
                    </div>
                  </div>
                </article>
              );
            })
          )}
        </div>

        <div className="styled-pagination text-center">
          <ul>
            <li className="prev"><a href="#"><span className="fa fa-angle-left"></span></a></li>
            <li><a href="#">1</a></li>
            <li><a href="#">2</a></li>
            <li><a href="#">3</a></li>
            <li className="next"><a href="#"><span className="fa fa-angle-right"></span></a></li>
          </ul>
        </div>

      </div>
    </section>
    <Footer />
  </div>
);
}
export default Attorneys;