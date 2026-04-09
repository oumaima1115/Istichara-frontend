import NavBar from "../components/Navbar";
import Footer from "../components/Footer";
import { createIstichara } from "../services/api";
import React from "react";
import Swal from "sweetalert2";
import { useAuth } from "../context/AuthContext";
import { useEffect } from "react";

const Istichara = () => {
  const { state } = useAuth();
  const [formData, setFormData] = React.useState({
    email: '',
    phone: '',
    speciality: '',
    attorneyId: '',
    clientId: state?.user?.id || '69d775ec0441f27dd1474c2f',
    scheduledDate: '',
    scheduledSlot: '',
    subject: '',
    message: '',
    attachments: null,
    couponCode: '',
  });

  useEffect(() => {
    if (state?.user?.id) {
      setFormData((prev) => ({
        ...prev,
        clientId: state.user.id,
      }));
    }
  }, [state]);

  const handleInputChange = (e) => {
    const { name, value, files, type } = e.target;

    setFormData((prevData) => ({
      ...prevData,
      [name]: type === "file" ? files : value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      console.log("Submitting:", formData);

      const response = await createIstichara(formData);

      console.log("Success:", response.data);

      Swal.fire({
        icon: "success",
        title: "Success!",
        text: "Your istichara request has been submitted successfully.",
      });

    } catch (error) {
      console.error("Error:", error.response?.data);

      Swal.fire({
        icon: "error",
        title: "Error",
        text: error.response?.data?.message || "Something went wrong",
      });
    }
  };
  return (
    <div>
      <NavBar />

      {/*Page Title*/}
      <section className="page-title" style={{ backgroundImage: `url(images/background/pagetitle-bg.jpg)` }}>
        <div className="auto-container">
          <h1>Istichara</h1>
        </div>
      </section>

      <section className="page-info">
        <div className="auto-container clearfix">
          <div className="pull-left"><h2>Istichara</h2></div>
          <div className="pull-right">
            <ul className="bread-crumb clearfix">
              <li><a href="/">Home</a></li>
              <li><a href="/istichara">Istichara</a></li>
            </ul>
          </div>
        </div>
      </section>

      {/*Consultation Section*/}
      <section className="consult-section" style={{ backgroundImage: `url(images/background/consult-form-bg.jpg)` }}>
        <div className="auto-container">

          {/*Styled Heading*/}
          <div className="styled-heading">
            <h2>Request a Consultation</h2>
          </div>

          <figure className="man-image hidden-xs" style={{ top: "0px" }}><img src="images/resource/man-image.png" alt="" /></figure>

          <div className="default-form consultation-form">
            <form onSubmit={handleSubmit}>
              <div className="row clearfix">
                <div className="form-group col-md-6 col-sm-12 col-xs-12">
                  <input type="email" name="email" placeholder="Email" onChange={handleInputChange} required />
                </div>
                <div className="form-group col-md-6 col-sm-12 col-xs-12">
                  <input type="text" name="phone" placeholder="Phone" onChange={handleInputChange} required />
                </div>
                <div className="form-group col-md-6 col-sm-12 col-xs-12">
                  <select name="speciality" onChange={handleInputChange}>
                    <option value="">Select speciality</option>
                    <option value="Criminal Law">Criminal Law</option>
                    <option value="Family Law">Family Law</option>
                  </select>
                </div>
                <div className="form-group col-md-6 col-sm-12 col-xs-12">
                  <select name="attorneyId" onChange={handleInputChange}>
                    <option value="69d1654b9f4ed54721ec39b2">Leila Trabelsi</option>
                    <option value="69d1654b9f4ed54721ec39b3">Sana Khelifi</option>
                  </select>
                </div>

                {/* Date & Slot as select options */}
                <div
                  className="form-group col-md-12 col-sm-12 col-xs-12"
                  style={{ display: 'flex', gap: '20px', marginTop: '15px' }}
                >

                  {/* LEFT COLUMN → Scheduled Date */}
                  <div style={{ flex: 1 }}>
                    <select name="scheduledDate" onChange={handleInputChange}>
                      <option >Select Date</option>
                      <option value="2026-06-05">05 Apr 2026</option>
                      <option value="2026-06-06">06 Apr 2026</option>
                      <option value="2026-06-07">07 Apr 2026</option>
                    </select>
                  </div>

                  {/* RIGHT COLUMN → Scheduled Slot */}
                  <div style={{ flex: 1 }} >
                    <select name="scheduledSlot" onChange={handleInputChange}>
                      <option >Select Time Slot</option>
                      <option value="09:00">09:00 - 10:00</option>
                      <option value="10:00">10:00 - 11:00</option>
                      <option value="11:00">11:00 - 12:00</option>
                      <option value="13:00">13:00 - 14:00</option>
                    </select>
                  </div>

                </div>

                <div className="form-group col-md-12 col-sm-12 col-xs-12">
                  <input type="text" name="subject" placeholder="Subject" onChange={handleInputChange} required />
                </div>
                <div className="form-group col-md-12 col-sm-12 col-xs-12">
                  <textarea name="message" placeholder="Message" onChange={handleInputChange} required></textarea>
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
                      onChange={handleInputChange}
                      required
                      style={{ display: 'none' }}
                    />
                  </label>
                </div>

                {/* make the coupon section and table section start from the same line on the top */}
                <div className="form-group col-md-12 col-sm-12 col-xs-12" style={{ display: 'flex', gap: '20px', flexWrap: 'wrap' }}>

                  <div style={{ display: 'flex', flexWrap: 'wrap', alignItems: 'flex-start', gap: '8px' }}>
                    <input type="text" name="couponCode" placeholder="Coupon Code" onChange={handleInputChange} />
                    <button type="button" className="theme-btn btn-style-one">Apply</button>
                  </div>

                  <div style={{ flex: 1 }}>
                    <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '8px' }}>
                      <span>Consultation Price</span>
                      <span>79$</span>
                    </div>

                    <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '8px' }}>
                      <span>Disscount</span>
                      <span>10%</span>
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