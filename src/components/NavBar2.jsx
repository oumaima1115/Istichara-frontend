import { useEffect, useState } from "react";
import '../style/Connecion.css';

const Login = () => {

    const [loading, setLoading] = useState(true);
    const [open, setOpen] = useState(false);

    useEffect(() => {
        const timer = setTimeout(() => {
            setLoading(false);
        }, 2000);

        return () => clearTimeout(timer);
    }, []);

    return (
        <div>

            {/* Preloader */}
            {loading && <div className="preloader"></div>}

            {/* Main Header */}
            <header className="main-header">
                {/* Top Bar */}
                <div className="top-bar">
                    <div className="auto-container clearfix">
                        {/* Top Left */}
                        <div className="top-left">
                            <div className="text">Our &nbsp;<a href="#">No Fee Promise</a>&nbsp; Means, No Cost Until Your Case is Won.</div>
                        </div>

                        {/* Top Right */}
                        <div className="top-right clearfix">

                            {/*Search Box*/}
                            <div className="search-box">
                                <form>
                                    <div className="form-group">
                                        <input type="search" name="search" placeholder="Search Your Needs Here" />
                                        <button type="submit" name="search" className="theme-btn search-btn"><span className="fa fa-search"></span></button>
                                    </div>
                                </form>
                            </div>

                            {/*Language Box*/}
                            <div className="lang-box">
                                <div
                                    className="selected-btn sel-btn"
                                    onClick={() => setOpen(!open)}
                                >
                                    <span
                                        className="flag-icon"
                                        style={{ backgroundImage: `url(images/icons/icon-flag.png)` }}
                                    ></span>

                                    <span className="language-label">English</span>
                                    <span className="icon fa fa-caret-down"></span>
                                </div>

                                {open && (
                                    <ul className={`lang-list ${open ? "open" : ""}`}>
                                        <li><a href="#">English</a></li>
                                        <li><a href="#">French</a></li>
                                        <li><a href="#">German</a></li>
                                        <li><a href="#">Chinese</a></li>
                                        <li><a href="#">Arabic</a></li>
                                    </ul>
                                )}
                            </div>

                        </div>

                    </div>
                </div>{/* Top Bar End */}

                {/*Middle Bar*/}
                <div className="middle-bar">
                    <div className="auto-container">
                        <div className="clearfix">
                            {/*Logo Column*/}
                            <div className="logo-column">
                                <figure className="logo"><a href="index.html"><img src="images/logo.png" alt="Attorney Justice" style={{ height: "112px" }} title="Attorney Justice" /></a></figure>
                            </div>
                            {/*Info Column*/}
                            <div className="info-column pull-left">
                                <p>12 Rue de la Technologie, Tunis.</p>
                                <h3>+216 55 123 456</h3>
                            </div>
                            {/*Info Column*/}
                            <div className="info-column pull-right">
                                <p>Office Hours: 09.00am - 17.00pm</p>
                                <h3>contact@istichara.tn</h3>
                            </div>
                        </div>
                    </div>
                </div>


            </header>{/*End Main Header */}

        </div>
    );
}
export default Login;