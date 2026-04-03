import '../style/lawyers.css';
import NavBar from "../components/Navbar";
import Footer from "../components/Footer";

//
import { useEffect, useState } from "react";
import { getUsers } from "../services/api";
const Lawyers = () => {
//State
// STATE
  const [users, setUsers] = useState([]);
  const [specialities, setSpecialities] = useState([]);
  const [selectedSpecialty, setSelectedSpecialty] = useState('All');
  const [searchTerm, setSearchTerm] = useState('');

  // useEffect → جلب البيانات من backend
  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const res = await getUsers();

        // ⚠️ حسب كيفاش ترجع data من API
        const data = res.data || res;

        setUsers(data);

        // استخراج التخصصات بدون تكرار
        const uniqueSpecialities = [
          ...new Set(data.map(user => user.speciality))
        ];

        setSpecialities(uniqueSpecialities);

      } catch (err) {
        console.error("Error fetching users:", err);
      }
    };

    fetchUsers();
  }, []);
  //End useEffect
//End State

  const allSpecialties = ['All', ...specialities];

  const filteredUsers = users.filter((user) => {
    const matchesSpecialty = selectedSpecialty === 'All' || user.speciality === selectedSpecialty;
    const matchesSearch = user.name.toLowerCase().includes(searchTerm.toLowerCase()) || user.speciality.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesSpecialty && matchesSearch;
  });

  const showSpecialtyInfo = selectedSpecialty !== 'All' && filteredUsers.length > 0;

  return (
    <div>
      <NavBar />
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
              {allSpecialties.map((specialty) => (
                <button
                  key={specialty}
                  className={`filter-btn ${selectedSpecialty === specialty ? 'active' : ''}`}
                  onClick={() => setSelectedSpecialty(specialty)}
                  type="button"
                >
                  {specialty}
                </button>
              ))}
            </div>

            <div>
              <input
                type="text"
                placeholder="Search lawyer..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
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

          {showSpecialtyInfo && (
            <p style={{ textAlign: 'center', marginBottom: '20px' }}>
              Showing {filteredUsers.length} {selectedSpecialty} lawyer(s). Use "All" to reset.
            </p>
          )}

          <div className="row clearfix">
            {filteredUsers.length === 0 ? (
              <div style={{ width: '100%', textAlign: 'center', padding: '30px' }}>
                No lawyers found for this specialty or search term.
              </div>
            ) : (
              filteredUsers.map((user, index) => (
                <article
                  key={user.id || index}
                  className="column team-member col-lg-3 col-md-3 col-sm-6 col-xs-12 wow fadeInUp"
                  data-wow-delay={`${index * 300}ms`}
                  data-wow-duration="1500ms"
                >
                  <div className="inner-box">
                    <figure className="image">
                      <a href={`mailto:${user.email}`}>
                        <img src={user.image || 'images/resource/default.jpg'} alt={user.name} />
                      </a>
                    </figure>
                    <div className="member-info">
                      <h3>{user.name}</h3>
                      <div className="designation">{user.speciality} Lawyer</div>
                    </div>
                    <div className="content">
                      <ul className="contact-info">
                        <li>
                          <span className="icon fa fa-phone" /> <a href={`tel:${user.phone}`}>{user.phone}</a>
                        </li>
                        <li>
                          <span className="icon fa fa-envelope-o" /> <a href={`mailto:${user.email}`}>{user.email}</a>
                        </li>
                      </ul>

                      <div style={{ marginTop: '15px', textAlign: 'center' }}>
                        <button className="theme-btn btn-style-one" type="button">
                          See profile
                        </button>
                      </div>
                    </div>
                  </div>
                </article>
              ))
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
export default Lawyers;