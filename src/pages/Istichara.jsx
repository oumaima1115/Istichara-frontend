import NavBar from "../components/Navbar";
import Footer from "../components/Footer";
//
/* */
import { useEffect, useState } from "react";
import { getUsers } from "../services/api";

const Istichara = () => {


  // 1️⃣ STATE
  const [users, setUsers] = useState([]);
  const [specialities, setSpecialities] = useState([]);
  const [selectedSpeciality, setSelectedSpeciality] = useState("");
  const [filteredLawyers, setFilteredLawyers] = useState([]);

  // 2️⃣ useEffect → جلب البيانات من backend
  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const res = await getUsers();
        setUsers(res.data);

        const uniqueSpecialities = [
          ...new Set(res.data.map(user => user.speciality))
        ];

        setSpecialities(uniqueSpecialities);

      } catch (err) {
        console.error(err);
      }
    };

    fetchUsers();
  }, []);

  // 3️⃣ useEffect → فلترة المحامين حسب التخصص
  useEffect(() => {
    if (selectedSpeciality) {
      const filtered = users.filter(
        user => user.speciality === selectedSpeciality
      );
      setFilteredLawyers(filtered);
    }
  }, [selectedSpeciality, users]);




  return (
    <div>
      <NavBar />
      {/*Consultation Section*/}
      <section className="consult-section" style={{ backgroundImage: `url(images/background/consult-form-bg.jpg)` }}>
        <div className="auto-container">

          {/*Styled Heading*/}
          <div className="styled-heading">
            <h2>Request a Consultation</h2>
          </div>

          <figure className="man-image hidden-xs" style={{ top: "0px" }}><img src="images/resource/man-image.png" alt="" /></figure>

          <div className="default-form consultation-form">
            <form method="post" action="https://st.ourhtmldemo.com/template/laywer-justice/index.html">
              <div className="row clearfix">
                <div className="form-group col-md-6 col-sm-12 col-xs-12">
                  <input type="email" name="lname" value="" placeholder="Email" required />
                </div>
                <div className="form-group col-md-6 col-sm-12 col-xs-12">
                  <input type="text" name="phone" value="" placeholder="Phone" required />
                </div>
                {/*display this section only if a speciality is selected */}
                {selectedSpeciality && (
                  <div className="form-group col-md-6 col-sm-12 col-xs-12">
                    <select onChange={(e) => setSelectedSpeciality(e.target.value)}>
                      <option>Select Speciality</option>
                      {specialities.map((spec, index) => (
                        <option key={index} value={spec}>
                          {spec}
                        </option>
                      ))}
                    </select>

                  </div>
                )}
                {/*display this section only if a speciality is selected and there are lawyers in that speciality*/}
                {selectedSpeciality && filteredLawyers.length > 0 && (
                  <div className="form-group col-md-6 col-sm-12 col-xs-12">

                    {/* Select المحامين */}
                    <select>
                      <option>Select Lawyer</option>
                      {filteredLawyers.map((lawyer) => (
                        <option key={lawyer._id} value={lawyer._id}>
                          {lawyer.name}
                        </option>
                      ))}
                    </select>

                  </div>
                )}

                {/* Date & Slot as select options */}
                <div
                  className="form-group col-md-12 col-sm-12 col-xs-12"
                  style={{ display: 'flex', gap: '20px', marginTop: '15px' }}
                >

                  {/* LEFT COLUMN → Scheduled Date */}
                  <div style={{ flex: 1 }}>
                    <select name="scheduledDate">
                      <option value="">Select Date</option>
                      <option value="2026-04-05">05 Apr 2026</option>
                      <option value="2026-04-06">06 Apr 2026</option>
                      <option value="2026-04-07">07 Apr 2026</option>
                    </select>
                  </div>

                  {/* RIGHT COLUMN → Scheduled Slot */}
                  <div style={{ flex: 1 }}>
                    <select name="scheduledSlot">
                      <option value="">Select Time Slot</option>
                      <option value="09:00-10:00">09:00 - 10:00</option>
                      <option value="10:00-11:00">10:00 - 11:00</option>
                      <option value="14:00-15:00">14:00 - 15:00</option>
                      <option value="18:00-19:00">18:00 - 19:00</option>
                    </select>
                  </div>

                </div>

                <div className="form-group col-md-12 col-sm-12 col-xs-12">
                  <input type="text" name="message" placeholder="Subject" required />
                </div>
                <div className="form-group col-md-12 col-sm-12 col-xs-12">
                  <textarea name="message" placeholder="Message" required></textarea>
                </div>

                <div className="form-group col-md-12 col-sm-12 col-xs-12">
                  <label
                    style={{
                      display: 'inline-block',
                      padding: '10px 20px',
                      backgroundColor: '#ffffff',
                      color: 'rgb(106 106 106)',
                      cursor: 'pointer',
                      borderRadius: '3px',
                      border: '1px solid #dadada',
                      fontWeight: '400',
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

                {/* make the coupon section and table section start from the same line on the top */}
                <div className="form-group col-md-12 col-sm-12 col-xs-12" style={{ display: 'flex', gap: '20px', flexWrap: 'wrap' }}>

                  <div style={{ display: 'flex', flexWrap: 'wrap', alignItems: 'flex-start', gap: '8px' }}>
                    <input type="text" name="coupon" placeholder="Coupon Code" />
                    <button type="button" className="theme-btn btn-style-one">Apply</button>
                  </div>

                  <div style={{ flex: 1 }}>
                    <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '8px' }}>
                      <span>Price</span>
                      <span>79$</span>
                    </div>

                    <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '8px' }}>
                      <span>Taxes</span>
                      <span>10%</span>
                    </div>

                    <hr style={{ border: '1px solid #ccc', width: '100%', margin: '10px 0' }} />

                    <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: '8px', fontWeight: 'bold' }}>
                      <span>Total</span>
                      <span>87$</span>
                    </div>

                  </div>
                </div>

                <div className="form-group col-md-12 col-sm-12 col-xs-12" style={{ display: 'flex', justifyContent: 'flex-end' }}>
                  <button type="submit" className="theme-btn btn-style-one">Submit Request</button>
                </div>

              </div>
            </form>
          </div>

        </div>
      </section>
      <Footer />
    </div>
  );
}
export default Istichara;