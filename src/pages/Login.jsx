import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Footer from "../components/Footer";
import { login } from "../services/api";
import { useAuth } from "../context/AuthContext";
import NavBar2 from "../components/NavBar2";

const Login = () => {
    const [username, setUsername] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState("");
    const { setState } = useAuth();
    const navigate = useNavigate();

    const handleSubmit = async (event) => {
        event.preventDefault();
        setError("");

        if (!email && !username) {
            setError("Please enter your email or username.");
            return;
        }

        if (!password) {
            setError("Please enter your password.");
            return;
        }

        setLoading(true);
        try {
            const payload = { password };
            if (email) payload.email = email;
            if (username) payload.username = username;

            const response = await login(payload);
            const token = response?.data?.token;
            const user = response?.data?.user || null;

            if (!token) {
                throw new Error("Login response did not return a token.");
            }

            localStorage.setItem("token", token);
            setState?.({ user });
            navigate("/");
        } catch (err) {
            setError(err?.response?.data?.message || err.message || "Login failed. Please try again.");
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
                                <div className="form-column column col-lg-6 col-md-6 col-sm-12 col-xs-12" style={{ float: "none", margin: "0 auto" }}>

                                    <div className="d-flex flex-column align-items-center w-100">

                                        {/*Styled Heading*/}
                                        <div className="styled-heading ">
                                            <h2>Login Here</h2>
                                        </div>

                                        {/*Login Form*/}
                                        <div className="styled-form login-form w-100">
                                            <form onSubmit={handleSubmit}>
                                                {error && <div className="form-group" style={{ color: "#d9534f", marginBottom: "20px" }}>{error}</div>}
                                                <div className="form-group">
                                                    <span className="adon-icon"><span className="fa fa-user"></span></span>
                                                    <input
                                                        type="text"
                                                        name="username"
                                                        placeholder="Username"
                                                        value={username}
                                                        onChange={(e) => setUsername(e.target.value)}
                                                    />
                                                </div>
                                                <div className="form-group">
                                                    <span className="adon-icon"><span className="fa fa-envelope-o"></span></span>
                                                    <input
                                                        type="email"
                                                        name="email"
                                                        placeholder="Enter Mail id *"
                                                        value={email}
                                                        onChange={(e) => setEmail(e.target.value)}
                                                    />
                                                </div>
                                                <div className="form-group">
                                                    <span className="adon-icon"><span className="fa fa-unlock-alt"></span></span>
                                                    <input
                                                        type="password"
                                                        name="password"
                                                        placeholder="Enter Password"
                                                        value={password}
                                                        onChange={(e) => setPassword(e.target.value)}
                                                    />
                                                </div>
                                                <div className="clearfix">
                                                    <div className="form-group pull-left">
                                                        <button type="submit" className="theme-btn btn-style-one" disabled={loading}>
                                                            {loading ? "Logging in..." : "Login"}
                                                        </button>
                                                    </div>
                                                    <div className="form-group social-links-two pull-right">
                                                        Or login with <a href="#" className="img-circle facebook"><span className="fa fa-facebook-f"></span></a> <a href="#" className="img-circle twitter"><span className="fa fa-twitter"></span></a> <a href="#" className="img-circle google-plus"><span className="fa fa-google-plus"></span></a>
                                                    </div>
                                                </div>

                                                <div className="clearfix">
                                                    <div className="pull-left">
                                                        <input type="checkbox" id="remember-me" /><label htmlFor="remember-me">&nbsp; Remember Me</label>
                                                    </div>
                                                    <div className="pull-right">
                                                        <a href="register" className="forget">Don't you have an account?</a>
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
export default Login;