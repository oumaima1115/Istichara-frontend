import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Footer from "../components/Footer";
import NavBar2 from "../components/NavBar2";
import PhoneInput from 'react-phone-input-2';
import 'react-phone-input-2/lib/style.css';
import '../style/Connecion.css';
import { signup } from "../services/api";

const Register = () => {
    const navigate = useNavigate();

    const [fullName, setFullName] = useState("");
    const [password, setPassword] = useState("");
    const [country, setCountry] = useState("");
    const [email, setEmail] = useState("");
    const [phone, setPhone] = useState("");
    const [startTime, setStartTime] = useState("");
    const [endTime, setEndTime] = useState("");
    const [speciality, setSpeciality] = useState("");
    const [role, setRole] = useState("");
    const [priceConsultation, setPriceConsultation] = useState("");
    const [casesWon, setCasesWon] = useState("");
    const [selectedDays, setSelectedDays] = useState([]);
    const [attachment, setAttachment] = useState(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState("");

    const handleDayToggle = (value) => {
        setSelectedDays((prev) =>
            prev.includes(value) ? prev.filter((day) => day !== value) : [...prev, value]
        );
    };

    const handleSubmit = async (event) => {
        event.preventDefault();
        setError("");

        if (!fullName || !email || !password || !country || !role) {
            setError("Please fill in all required fields.");
            return;
        }

        if (role === "attorney" && !speciality) {
            setError("Please select your speciality.");
            return;
        }

        setLoading(true);
        try {
            const payload = {
                name: fullName,
                email,
                password,
                country,
                phone,
                role,
                ...(role === "attorney" && {
                    specialty: speciality,
                    days: selectedDays,
                    startTime,
                    endTime,
                    price: priceConsultation,
                    cases_won: casesWon,
                }),
            };

            const formData = new FormData();

            if (attachment) {
                formData.append('profilePic', attachment);
            }

            Object.entries(payload).forEach(([key, value]) => {
                if (value !== undefined && value !== null) {
                    formData.append(key, typeof value === 'object' ? JSON.stringify(value) : value);
                }
            });

            console.log('signup payload', {
                ...payload,
                attachment: attachment ? attachment.name : null,
            });
            for (const [key, value] of formData.entries()) {
                console.log('formData entry', key, value);
            }

            const response = await signup(formData);
            console.log('signup response', response?.data);

            // Signup successful, but no auto-login
            alert("Account created successfully! Please log in.");
            navigate("/login");
        } catch (err) {
            setError(err?.response?.data?.message || err.message || "Signup failed");
        } finally {
            setLoading(false);
        }
    };

    return (
        <div>
            <NavBar2 />
            <div className="page-outer-container">
                <div className="page-wrapper">

                    {/*Register Section*/}
                    <section className="register-section">
                        <div className="auto-container">
                            <div className="row clearfix">

                                {/*Form Column*/}
                                <div className="form-column column col-lg-12 col-md-12 col-sm-12 col-xs-12" style={{ float: "none", margin: "0 auto" }}>
                                    {/*Styled Heading*/}

                                    <div className="d-flex flex-column align-items-center w-100">
                                        
                                        {/*Styled Heading*/}
                                        <div className="styled-heading centered">
                                            <h2>Register Now</h2>
                                        </div>

                                        {/*Login Form*/}
                                        <div className="styled-form register-form">
                                            <form onSubmit={handleSubmit}>
                                                {error && <div style={{ color: '#d9534f', marginBottom: '20px' }}>{error}</div>}
                                                <div className="row clearfix" style={{
                                                    display: 'flex',
                                                    flexWrap: role === 'attorney' ? 'nowrap' : 'wrap',
                                                    justifyContent: role === 'attorney' ? 'flex-start' : 'center',
                                                    gap: role === 'attorney' ? '15px' : '30px'
                                                }}>

                                                    {/*Left side Form*/}
                                                    <div className="form-column column col-lg-6 col-md-6 col-sm-12 col-xs-12" style={{
                                                        float: 'none',
                                                        margin: role === 'client' || role === '' ? '0 auto' : undefined,
                                                        flex: role === 'attorney' ? '0 0 48%' : '0 0 100%',
                                                        maxWidth: role === 'attorney' ? '48%' : '640px',
                                                        width: role === 'attorney' ? '48%' : '100%',
                                                        boxSizing: 'border-box'
                                                    }}>
                                                        <div className="form-group col-md-6 col-sm-6 col-xs-12">
                                                            <div className="field-label">Full Name*</div>
                                                            <input
                                                                type="text"
                                                                name="fullName"
                                                                value={fullName}
                                                                onChange={(e) => setFullName(e.target.value)}
                                                            />
                                                        </div>

                                                        <div className="form-group col-md-6 col-sm-6 col-xs-12">
                                                            <div className="field-label">Password *</div>
                                                            <input
                                                                type="password"
                                                                name="password"
                                                                value={password}
                                                                onChange={(e) => setPassword(e.target.value)}
                                                            />
                                                        </div>

                                                        <div className="form-group col-md-6 col-sm-6 col-xs-12">
                                                            <div className="field-label">Country*</div>
                                                            <input
                                                                type="text"
                                                                name="country"
                                                                value={country}
                                                                onChange={(e) => setCountry(e.target.value)}
                                                            />
                                                        </div>

                                                        <div className="form-group col-md-6 col-sm-6 col-xs-12">
                                                            <div className="field-label">Email Address * </div>
                                                            <input
                                                                type="email"
                                                                name="email"
                                                                value={email}
                                                                placeholder="attorney@example.com"
                                                                onChange={(e) => setEmail(e.target.value)}
                                                            />
                                                        </div>

                                                        <div className="form-group col-md-6 col-sm-6 col-xs-12" >
                                                            <div className="field-label">Phone Number *</div>
                                                            <PhoneInput
                                                                country={'tn'}
                                                                value={phone}
                                                                onChange={(value) => setPhone(value)}
                                                                inputStyle={{
                                                                    width: '100%',
                                                                    paddingLeft: '50px'
                                                                }}
                                                            />
                                                        </div>

                                                        <div className="form-group col-md-6 col-sm-6 col-xs-12" >
                                                            <div className="field-label">Profile Picture * </div>
                                                            <label
                                                                style={{
                                                                    display: 'inline-block',
                                                                    padding: '10px 20px',
                                                                    backgroundColor: '#223555',
                                                                    color: 'rgb(243, 243, 243)',
                                                                    cursor: 'pointer',
                                                                    borderRadius: '5px',
                                                                    border: '1px solid #dadada',
                                                                    fontWeight: '700',
                                                                }}
                                                            >
                                                                {attachment ? attachment.name : 'UPLOAD IMAGE'}
                                                                <input
                                                                    type="file"
                                                                    name="attachments"
                                                                    required
                                                                    style={{ display: 'none' }}
                                                                    onChange={(e) => setAttachment(e.target.files?.[0] || null)}
                                                                />
                                                            </label>
                                                        </div>

                                                        {/* display a radio button group to select the user type (client or attorney) */}
                                                        <div className="form-group col-md-12 col-sm-12 col-xs-12">
                                                            <div className="field-label">I am a *</div>

                                                            <div className="user-type-selector" style={{ display: 'flex', flexDirection: 'row', gap: '12px' }}>
                                                                {/* make these labels fill the width of the container and display them in a column with some gap between them */}
                                                                <input
                                                                    type="radio"
                                                                    id="client"
                                                                    name="user-type"
                                                                    value="client"
                                                                    checked={role === "client"}
                                                                    onChange={(e) => setRole(e.target.value)}
                                                                />
                                                                <label htmlFor="client" style={{ width: '100%' }}>👤 Client</label>

                                                                <input
                                                                    type="radio"
                                                                    id="attorney"
                                                                    name="user-type"
                                                                    value="attorney"
                                                                    checked={role === "attorney"}
                                                                    onChange={(e) => setRole(e.target.value)}
                                                                />
                                                                <label htmlFor="attorney" style={{ width: '100%' }}>👨‍⚖️ Attorney</label>

                                                            </div>
                                                        </div>

                                                        {role === "client" && (
                                                            <div className="form-group col-md-12 col-sm-12 col-xs-12">
                                                                <div className="form-group pull-left">
                                                                    <button type="submit" className="theme-btn btn-style-one" disabled={loading}>
                                                                        {loading ? 'Registering...' : 'Register'}
                                                                    </button>
                                                                </div>
                                                                <div className="form-group padd-top-10 pull-right">
                                                                    * You have an account ? <a href="/login" className="forget">Login here</a>
                                                                </div>
                                                            </div>
                                                        )}


                                                    </div>

                                                    {/*Right section Form*/}
                                                    <div className="form-column column col-lg-6 col-md-6 col-sm-12 col-xs-12" style={{
                                                        display: role === 'attorney' ? 'block' : 'none',
                                                        flex: role === 'attorney' ? '0 0 48%' : 'none',
                                                        maxWidth: role === 'attorney' ? '48%' : 'none',
                                                        width: role === 'attorney' ? '48%' : 'auto',
                                                        boxSizing: 'border-box'
                                                    }}>

                                                        {role === "attorney" && (
                                                            <>
                                                                {/* display a select options to select the user's speciality (for attorneys) , if the speciality is not in the list the user can select "other" and enter it in a text input */}
                                                                <div className="form-group col-md-12 col-sm-12 col-xs-12" style={{
                                                                    display: "flex",
                                                                    flexDirection: "column",
                                                                    gap: "12px",
                                                                }}>
                                                                    <label for="speciality">Speciality:</label>
                                                                    <select
                                                                        value={speciality}
                                                                        onChange={(e) => setSpeciality(e.target.value)}
                                                                        name="speciality"
                                                                        id="speciality"
                                                                    >
                                                                        <option >Select Speciality</option>
                                                                        <option value="criminal">Criminal Law</option>
                                                                        <option value="family">Family Law</option>
                                                                        <option value="corporate">Corporate Law</option>
                                                                        <option value="other">Other</option>
                                                                    </select>

                                                                    {speciality === "other" && (
                                                                        <input type="text" name="other-speciality" placeholder="Specify your speciality if not listed" />
                                                                    )}

                                                                </div>

                                                                <div className="form-group col-md-12 col-sm-12 col-xs-12">
                                                                    <div className="field-label">Days*</div>
                                                                    {/* the select option should be multiple and the user can select multiple days of availability for the attorney */}
                                                                    <div className="day-selector">
                                                                        <input type="checkbox" id="sun" name="days" value="Sunday"
                                                                            checked={selectedDays.includes("Sunday")}
                                                                            onChange={(e) => handleDayToggle(e.target.value)}
                                                                        />
                                                                        <label for="sun">Sun</label>
                                                                        <input type="checkbox" id="mon" name="days" value="Monday"
                                                                            checked={selectedDays.includes("Monday")}
                                                                            onChange={(e) => handleDayToggle(e.target.value)}
                                                                        />
                                                                        <label for="mon">Mon</label>
                                                                        <input type="checkbox" id="tue" name="days" value="Tuesday"
                                                                            checked={selectedDays.includes("Tuesday")}
                                                                            onChange={(e) => handleDayToggle(e.target.value)}
                                                                        />
                                                                        <label for="tue">Tue</label>
                                                                        <input type="checkbox" id="wed" name="days" value="Wednesday"
                                                                            checked={selectedDays.includes("Wednesday")}
                                                                            onChange={(e) => handleDayToggle(e.target.value)}
                                                                        />
                                                                        <label for="wed">Wed</label>
                                                                        <input type="checkbox" id="thu" name="days" value="Thursday"
                                                                            checked={selectedDays.includes("Thursday")}
                                                                            onChange={(e) => handleDayToggle(e.target.value)}
                                                                        />
                                                                        <label for="thu">Thu</label>
                                                                        <input type="checkbox" id="fri" name="days" value="Friday"
                                                                            checked={selectedDays.includes("Friday")}
                                                                            onChange={(e) => handleDayToggle(e.target.value)}
                                                                        />
                                                                        <label for="fri">Fri</label>
                                                                        <input type="checkbox" id="sat" name="days" value="Saturday"
                                                                            checked={selectedDays.includes("Saturday")}
                                                                            onChange={(e) => handleDayToggle(e.target.value)}
                                                                        />
                                                                        <label for="sat">Sat</label>
                                                                    </div>
                                                                </div>

                                                                <div className="form-group col-md-6 col-sm-6 col-xs-12">
                                                                    <div className="field-label">Start Time *</div>
                                                                    <input
                                                                        type="time"
                                                                        value={startTime}
                                                                        style={{ border: "1px solid #ccc", width: "100%", padding: "8px" }}
                                                                        onChange={(e) => setStartTime(e.target.value)}
                                                                    />
                                                                </div>

                                                                <div className="form-group col-md-6 col-sm-6 col-xs-12">
                                                                    <div className="field-label">End Time *</div>
                                                                    <input
                                                                        type="time"
                                                                        value={endTime}
                                                                        style={{ border: "1px solid #ccc", width: "100%", padding: "8px" }}
                                                                        onChange={(e) => setEndTime(e.target.value)}
                                                                    />
                                                                </div>

                                                                <div className="form-group col-md-12 col-sm-12 col-xs-12">
                                                                    <div className="field-label">Price Consultation * </div>
                                                                    <input type="number" name="price-consultation" placeholder="100"
                                                                        onChange={(e) => setPriceConsultation(e.target.value)}
                                                                        style={{ border: "1px solid #ccc" }} />
                                                                </div>

                                                                <div className="form-group col-md-12 col-sm-12 col-xs-12">
                                                                    <div className="field-label">Cases Won * </div>
                                                                    <input type="number" name="cases-won" placeholder="30"
                                                                        onChange={(e) => setCasesWon(e.target.value)} />
                                                                </div>

                                                                <div className="form-group col-md-12 col-sm-12 col-xs-12">
                                                                    <div className="form-group pull-left">
                                                                        <button type="submit" className="theme-btn btn-style-one" disabled={loading}>
                                                                            {loading ? 'Registering...' : 'Register'}
                                                                        </button>
                                                                    </div>
                                                                    <div className="form-group padd-top-10 pull-right">
                                                                        * You have an account ? <a href="/login" className="forget">Login here</a>
                                                                    </div>
                                                                </div>
                                                            </>
                                                        )}

                                                    </div>
                                                </div>
                                            </form>
                                        </div>
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
export default Register;