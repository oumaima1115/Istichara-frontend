import NavBar from "../components/Navbar";
import Footer from "../components/Footer";

const FAQ = () => {

    return (
        <div>
            <NavBar />

            {/*Page Title*/}
            <section className="page-title" style={{ backgroundImage: `url(images/background/pagetitle-bg.jpg)` }}>
                <div className="auto-container">
                    <h1>FAQ</h1>
                </div>
            </section>

            <section className="page-info">
                <div className="auto-container clearfix">
                    <div className="pull-left"><h2>FAQ</h2></div>
                    <div className="pull-right">
                        <ul className="bread-crumb clearfix">
                            <li><a href="/">Home</a></li>
                            <li><a href="/faq">FAQ</a></li>
                        </ul>
                    </div>
                </div>
            </section>

            {/*Page Title*/}
            <section className="tabs-section">
                <div className="auto-container">

                    {/* Tabs Box / Style One */}
                    <div className="tabs-box style-one">
                        <ul className="tab-buttons text-center clearfix">
                            <li className="tab-btn active-btn" data-tab="#tab-one">Law &amp; Justice</li>
                            <li className="tab-btn" data-tab="#tab-two">Criminal Law</li>
                            <li className="tab-btn" data-tab="#tab-three">Family Law</li>
                            <li className="tab-btn" data-tab="#tab-four">Consumer Law</li>
                            <li className="tab-btn" data-tab="#tab-five">Business Law</li>
                        </ul>

                        {/* Tabs Content */}
                        <div className="tabs-content">

                            {/* Tab / Active Tab */}
                            <div className="tab active-tab" id="tab-one">

                                {/* Accordion Box / Accordions Inside Tabs */}
                                <div className="accordion-box style-three">
                                    {/*  Accordion  */}
                                    <div className="accordion accordion-block">
                                        <div className="accord-btn active"><div className="icon-box"><span className="icon fa fa-gear"></span></div><h4>What is the International Court of Justice?</h4></div>
                                        <div className="accord-content collapsed">
                                            <div className="clearfix">
                                                <figure className="image-box">
                                                    <img src="images/resource/default-image-12.jpg" alt="" />
                                                    <a href="#" className="default-overlay-outer">
                                                        <div className="inner">
                                                            <div className="content-layer">
                                                                <div className="icon"><span className="fa fa-link"></span></div>
                                                            </div>
                                                        </div>
                                                    </a>
                                                </figure>
                                                <p>Only States are eligible to appear before the Court in contentious cases.  At present, this  isbasically means the 192 United Nations Member States. The Court has no jurisdiction to deal with applications from individuals, non-governmental organizations, corporations or any other private entity.  It cannot provide them with legal counselling or help them in their sedsw dealings with the authorities of any State whatever. non-governmental organizations, corporations or any other private entity.non-governmental organizations, corporations or any other private entity non-governmental organizations, corporations or any other private entity. . </p>
                                                <p>However, a State may take up the case of one of its nationals and invoke against another State the wrongs which its national claims to have suffered at the hands of the latter;  the dispute then becomes one between States. a State may take up the case of one of its nationals and invoke against another State the wrongs which its national claims to have suffered at the hands of the latter.</p>
                                            </div>
                                        </div>
                                    </div>

                                    {/*  Accordion  */}
                                    <div className="accordion accordion-block">
                                        <div className="accord-btn"><div className="icon-box"><span className="icon fa fa-gear"></span></div><h4>Who may submit cases to the Court?</h4></div>
                                        <div className="accord-content">
                                            <div className="clearfix">
                                                <p>Only States are eligible to appear before the Court in contentious cases.  At present, this  isbasically means the 192 United Nations Member States. The Court has no jurisdiction to deal with applications from individuals, non-governmental organizations, corporations or any other private entity.  It cannot provide them with legal counselling or help them in their sedsw dealings with the authorities of any State whatever. non-governmental organizations, corporations or any other private entity.non-governmental organizations, corporations or any other private entity non-governmental organizations, corporations or any other private entity. . </p>
                                                <p>However, a State may take up the case of one of its nationals and invoke against another State the wrongs which its national claims to have suffered at the hands of the latter;  the dispute then becomes one between States. a State may take up the case of one of its nationals and invoke against another State the wrongs which its national claims to have suffered at the hands of the latter.</p>
                                            </div>
                                        </div>
                                    </div>

                                    {/*  Accordion  */}
                                    <div className="accordion accordion-block">
                                        <div className="accord-btn"><div className="icon-box"><span className="icon fa fa-gear"></span></div><h4>Why are some disputes between States not considered by the Court?</h4></div>
                                        <div className="accord-content">
                                            <div className="clearfix">
                                                <figure className="image-box">
                                                    <img src="images/resource/default-image-12.jpg" alt="" />
                                                    <a href="#" className="default-overlay-outer">
                                                        <div className="inner">
                                                            <div className="content-layer">
                                                                <div className="icon"><span className="fa fa-link"></span></div>
                                                            </div>
                                                        </div>
                                                    </a>
                                                </figure>
                                                <p>Only States are eligible to appear before the Court in contentious cases.  At present, this  isbasically means the 192 United Nations Member States. The Court has no jurisdiction to deal with applications from individuals, non-governmental organizations, corporations or any other private entity.  It cannot provide them with legal counselling or help them in their sedsw dealings with the authorities of any State whatever. non-governmental organizations, corporations or any other private entity.non-governmental organizations, corporations or any other private entity non-governmental organizations, corporations or any other private entity. . </p>
                                                <p>However, a State may take up the case of one of its nationals and invoke against another State the wrongs which its national claims to have suffered at the hands of the latter;  the dispute then becomes one between States. a State may take up the case of one of its nationals and invoke against another State the wrongs which its national claims to have suffered at the hands of the latter.</p>
                                            </div>
                                        </div>
                                    </div>

                                    {/*  Accordion  */}
                                    <div className="accordion accordion-block">
                                        <div className="accord-btn"><div className="icon-box"><span className="icon fa fa-gear"></span></div><h4>Are decisions of the Court binding?</h4></div>
                                        <div className="accord-content">
                                            <div className="clearfix">
                                                <p>Only States are eligible to appear before the Court in contentious cases.  At present, this  isbasically means the 192 United Nations Member States. The Court has no jurisdiction to deal with applications from individuals, non-governmental organizations, corporations or any other private entity.  It cannot provide them with legal counselling or help them in their sedsw dealings with the authorities of any State whatever. non-governmental organizations, corporations or any other private entity.non-governmental organizations, corporations or any other private entity non-governmental organizations, corporations or any other private entity. . </p>
                                                <p>However, a State may take up the case of one of its nationals and invoke against another State the wrongs which its national claims to have suffered at the hands of the latter;  the dispute then becomes one between States. a State may take up the case of one of its nationals and invoke against another State the wrongs which its national claims to have suffered at the hands of the latter.</p>
                                            </div>
                                        </div>
                                    </div>

                                    {/*  Accordion  */}
                                    <div className="accordion accordion-block">
                                        <div className="accord-btn"><div className="icon-box"><span className="icon fa fa-gear"></span></div><h4>How does one attend hearings of the Court?</h4></div>
                                        <div className="accord-content">
                                            <div className="clearfix">
                                                <figure className="image-box">
                                                    <img src="images/resource/default-image-12.jpg" alt="" />
                                                    <a href="#" className="default-overlay-outer">
                                                        <div className="inner">
                                                            <div className="content-layer">
                                                                <div className="icon"><span className="fa fa-link"></span></div>
                                                            </div>
                                                        </div>
                                                    </a>
                                                </figure>
                                                <p>Only States are eligible to appear before the Court in contentious cases.  At present, this  isbasically means the 192 United Nations Member States. The Court has no jurisdiction to deal with applications from individuals, non-governmental organizations, corporations or any other private entity.  It cannot provide them with legal counselling or help them in their sedsw dealings with the authorities of any State whatever. non-governmental organizations, corporations or any other private entity.non-governmental organizations, corporations or any other private entity non-governmental organizations, corporations or any other private entity. . </p>
                                                <p>However, a State may take up the case of one of its nationals and invoke against another State the wrongs which its national claims to have suffered at the hands of the latter;  the dispute then becomes one between States. a State may take up the case of one of its nationals and invoke against another State the wrongs which its national claims to have suffered at the hands of the latter.</p>
                                            </div>
                                        </div>
                                    </div>

                                    {/*  Accordion  */}
                                    <div className="accordion accordion-block">
                                        <div className="accord-btn"><div className="icon-box"><span className="icon fa fa-gear"></span></div><h4>Is it possible to visit the Peace Palace, seat of the Court?</h4></div>
                                        <div className="accord-content">
                                            <div className="clearfix">
                                                <p>Only States are eligible to appear before the Court in contentious cases.  At present, this  isbasically means the 192 United Nations Member States. The Court has no jurisdiction to deal with applications from individuals, non-governmental organizations, corporations or any other private entity.  It cannot provide them with legal counselling or help them in their sedsw dealings with the authorities of any State whatever. non-governmental organizations, corporations or any other private entity.non-governmental organizations, corporations or any other private entity non-governmental organizations, corporations or any other private entity. . </p>
                                                <p>However, a State may take up the case of one of its nationals and invoke against another State the wrongs which its national claims to have suffered at the hands of the latter;  the dispute then becomes one between States. a State may take up the case of one of its nationals and invoke against another State the wrongs which its national claims to have suffered at the hands of the latter.</p>
                                            </div>
                                        </div>
                                    </div>

                                    {/*  Accordion  */}
                                    <div className="accordion accordion-block">
                                        <div className="accord-btn"><div className="icon-box"><span className="icon fa fa-gear"></span></div><h4>How does one apply for a job at the Court?</h4></div>
                                        <div className="accord-content">
                                            <div className="clearfix">
                                                <figure className="image-box">
                                                    <img src="images/resource/default-image-12.jpg" alt="" />
                                                    <a href="#" className="default-overlay-outer">
                                                        <div className="inner">
                                                            <div className="content-layer">
                                                                <div className="icon"><span className="fa fa-link"></span></div>
                                                            </div>
                                                        </div>
                                                    </a>
                                                </figure>
                                                <p>Only States are eligible to appear before the Court in contentious cases.  At present, this  isbasically means the 192 United Nations Member States. The Court has no jurisdiction to deal with applications from individuals, non-governmental organizations, corporations or any other private entity.  It cannot provide them with legal counselling or help them in their sedsw dealings with the authorities of any State whatever. non-governmental organizations, corporations or any other private entity.non-governmental organizations, corporations or any other private entity non-governmental organizations, corporations or any other private entity. . </p>
                                                <p>However, a State may take up the case of one of its nationals and invoke against another State the wrongs which its national claims to have suffered at the hands of the latter;  the dispute then becomes one between States. a State may take up the case of one of its nationals and invoke against another State the wrongs which its national claims to have suffered at the hands of the latter.</p>
                                            </div>
                                        </div>
                                    </div>

                                    {/*  Accordion  */}
                                    <div className="accordion accordion-block">
                                        <div className="accord-btn"><div className="icon-box"><span className="icon fa fa-gear"></span></div><h4>Is this the best major for me if I want to work in law enforcement?</h4></div>
                                        <div className="accord-content">
                                            <div className="clearfix">
                                                <figure className="image-box">
                                                    <img src="images/resource/default-image-12.jpg" alt="" />
                                                    <a href="#" className="default-overlay-outer">
                                                        <div className="inner">
                                                            <div className="content-layer">
                                                                <div className="icon"><span className="fa fa-link"></span></div>
                                                            </div>
                                                        </div>
                                                    </a>
                                                </figure>
                                                <p>Only States are eligible to appear before the Court in contentious cases.  At present, this  isbasically means the 192 United Nations Member States. The Court has no jurisdiction to deal with applications from individuals, non-governmental organizations, corporations or any other private entity.  It cannot provide them with legal counselling or help them in their sedsw dealings with the authorities of any State whatever. non-governmental organizations, corporations or any other private entity.non-governmental organizations, corporations or any other private entity non-governmental organizations, corporations or any other private entity. . </p>
                                                <p>However, a State may take up the case of one of its nationals and invoke against another State the wrongs which its national claims to have suffered at the hands of the latter;  the dispute then becomes one between States. a State may take up the case of one of its nationals and invoke against another State the wrongs which its national claims to have suffered at the hands of the latter.</p>
                                            </div>
                                        </div>
                                    </div>

                                    {/*  Accordion  */}
                                    <div className="accordion accordion-block">
                                        <div className="accord-btn"><div className="icon-box"><span className="icon fa fa-gear"></span></div><h4>Are the consolidated Acts and regulations the official versions?</h4></div>
                                        <div className="accord-content">
                                            <div className="clearfix">
                                                <figure className="image-box">
                                                    <img src="images/resource/default-image-12.jpg" alt="" />
                                                    <a href="#" className="default-overlay-outer">
                                                        <div className="inner">
                                                            <div className="content-layer">
                                                                <div className="icon"><span className="fa fa-link"></span></div>
                                                            </div>
                                                        </div>
                                                    </a>
                                                </figure>
                                                <p>Only States are eligible to appear before the Court in contentious cases.  At present, this  isbasically means the 192 United Nations Member States. The Court has no jurisdiction to deal with applications from individuals, non-governmental organizations, corporations or any other private entity.  It cannot provide them with legal counselling or help them in their sedsw dealings with the authorities of any State whatever. non-governmental organizations, corporations or any other private entity.non-governmental organizations, corporations or any other private entity non-governmental organizations, corporations or any other private entity. . </p>
                                                <p>However, a State may take up the case of one of its nationals and invoke against another State the wrongs which its national claims to have suffered at the hands of the latter;  the dispute then becomes one between States. a State may take up the case of one of its nationals and invoke against another State the wrongs which its national claims to have suffered at the hands of the latter.</p>
                                            </div>
                                        </div>
                                    </div>

                                    {/*  Accordion  */}
                                    <div className="accordion accordion-block">
                                        <div className="accord-btn"><div className="icon-box"><span className="icon fa fa-gear"></span></div><h4>Where can I find more information or assistance?</h4></div>
                                        <div className="accord-content">
                                            <div className="clearfix">
                                                <figure className="image-box">
                                                    <img src="images/resource/default-image-12.jpg" alt="" />
                                                    <a href="#" className="default-overlay-outer">
                                                        <div className="inner">
                                                            <div className="content-layer">
                                                                <div className="icon"><span className="fa fa-link"></span></div>
                                                            </div>
                                                        </div>
                                                    </a>
                                                </figure>
                                                <p>Only States are eligible to appear before the Court in contentious cases.  At present, this  isbasically means the 192 United Nations Member States. The Court has no jurisdiction to deal with applications from individuals, non-governmental organizations, corporations or any other private entity.  It cannot provide them with legal counselling or help them in their sedsw dealings with the authorities of any State whatever. non-governmental organizations, corporations or any other private entity.non-governmental organizations, corporations or any other private entity non-governmental organizations, corporations or any other private entity. . </p>
                                                <p>However, a State may take up the case of one of its nationals and invoke against another State the wrongs which its national claims to have suffered at the hands of the latter;  the dispute then becomes one between States. a State may take up the case of one of its nationals and invoke against another State the wrongs which its national claims to have suffered at the hands of the latter.</p>
                                            </div>
                                        </div>
                                    </div>

                                </div>

                            </div>{/* End Tab  */}

                            {/* Tab */}
                            <div className="tab" id="tab-two">

                                {/* Accordion Box / Accordions Inside Tabs */}
                                <div className="accordion-box style-three">
                                    {/*  Accordion  */}
                                    <div className="accordion accordion-block">
                                        <div className="accord-btn"><div className="icon-box"><span className="icon fa fa-gear"></span></div><h4>What is the International Court of Justice?</h4></div>
                                        <div className="accord-content">
                                            <div className="clearfix">
                                                <figure className="image-box">
                                                    <img src="images/resource/default-image-12.jpg" alt="" />
                                                    <a href="#" className="default-overlay-outer">
                                                        <div className="inner">
                                                            <div className="content-layer">
                                                                <div className="icon"><span className="fa fa-link"></span></div>
                                                            </div>
                                                        </div>
                                                    </a>
                                                </figure>
                                                <p>Only States are eligible to appear before the Court in contentious cases.  At present, this  isbasically means the 192 United Nations Member States. The Court has no jurisdiction to deal with applications from individuals, non-governmental organizations, corporations or any other private entity.  It cannot provide them with legal counselling or help them in their sedsw dealings with the authorities of any State whatever. non-governmental organizations, corporations or any other private entity.non-governmental organizations, corporations or any other private entity non-governmental organizations, corporations or any other private entity. . </p>
                                                <p>However, a State may take up the case of one of its nationals and invoke against another State the wrongs which its national claims to have suffered at the hands of the latter;  the dispute then becomes one between States. a State may take up the case of one of its nationals and invoke against another State the wrongs which its national claims to have suffered at the hands of the latter.</p>
                                            </div>
                                        </div>
                                    </div>

                                    {/*  Accordion  */}
                                    <div className="accordion accordion-block">
                                        <div className="accord-btn"><div className="icon-box"><span className="icon fa fa-gear"></span></div><h4>Who may submit cases to the Court?</h4></div>
                                        <div className="accord-content">
                                            <div className="clearfix">
                                                <p>Only States are eligible to appear before the Court in contentious cases.  At present, this  isbasically means the 192 United Nations Member States. The Court has no jurisdiction to deal with applications from individuals, non-governmental organizations, corporations or any other private entity.  It cannot provide them with legal counselling or help them in their sedsw dealings with the authorities of any State whatever. non-governmental organizations, corporations or any other private entity.non-governmental organizations, corporations or any other private entity non-governmental organizations, corporations or any other private entity. . </p>
                                                <p>However, a State may take up the case of one of its nationals and invoke against another State the wrongs which its national claims to have suffered at the hands of the latter;  the dispute then becomes one between States. a State may take up the case of one of its nationals and invoke against another State the wrongs which its national claims to have suffered at the hands of the latter.</p>
                                            </div>
                                        </div>
                                    </div>

                                    {/*  Accordion  */}
                                    <div className="accordion accordion-block">
                                        <div className="accord-btn"><div className="icon-box"><span className="icon fa fa-gear"></span></div><h4>Why are some disputes between States not considered by the Court?</h4></div>
                                        <div className="accord-content">
                                            <div className="clearfix">
                                                <figure className="image-box">
                                                    <img src="images/resource/default-image-12.jpg" alt="" />
                                                    <a href="#" className="default-overlay-outer">
                                                        <div className="inner">
                                                            <div className="content-layer">
                                                                <div className="icon"><span className="fa fa-link"></span></div>
                                                            </div>
                                                        </div>
                                                    </a>
                                                </figure>
                                                <p>Only States are eligible to appear before the Court in contentious cases.  At present, this  isbasically means the 192 United Nations Member States. The Court has no jurisdiction to deal with applications from individuals, non-governmental organizations, corporations or any other private entity.  It cannot provide them with legal counselling or help them in their sedsw dealings with the authorities of any State whatever. non-governmental organizations, corporations or any other private entity.non-governmental organizations, corporations or any other private entity non-governmental organizations, corporations or any other private entity. . </p>
                                                <p>However, a State may take up the case of one of its nationals and invoke against another State the wrongs which its national claims to have suffered at the hands of the latter;  the dispute then becomes one between States. a State may take up the case of one of its nationals and invoke against another State the wrongs which its national claims to have suffered at the hands of the latter.</p>
                                            </div>
                                        </div>
                                    </div>

                                    {/*  Accordion  */}
                                    <div className="accordion accordion-block">
                                        <div className="accord-btn"><div className="icon-box"><span className="icon fa fa-gear"></span></div><h4>Are decisions of the Court binding?</h4></div>
                                        <div className="accord-content">
                                            <div className="clearfix">
                                                <p>Only States are eligible to appear before the Court in contentious cases.  At present, this  isbasically means the 192 United Nations Member States. The Court has no jurisdiction to deal with applications from individuals, non-governmental organizations, corporations or any other private entity.  It cannot provide them with legal counselling or help them in their sedsw dealings with the authorities of any State whatever. non-governmental organizations, corporations or any other private entity.non-governmental organizations, corporations or any other private entity non-governmental organizations, corporations or any other private entity. . </p>
                                                <p>However, a State may take up the case of one of its nationals and invoke against another State the wrongs which its national claims to have suffered at the hands of the latter;  the dispute then becomes one between States. a State may take up the case of one of its nationals and invoke against another State the wrongs which its national claims to have suffered at the hands of the latter.</p>
                                            </div>
                                        </div>
                                    </div>

                                    {/*  Accordion  */}
                                    <div className="accordion accordion-block">
                                        <div className="accord-btn"><div className="icon-box"><span className="icon fa fa-gear"></span></div><h4>How does one attend hearings of the Court?</h4></div>
                                        <div className="accord-content">
                                            <div className="clearfix">
                                                <figure className="image-box">
                                                    <img src="images/resource/default-image-12.jpg" alt="" />
                                                    <a href="#" className="default-overlay-outer">
                                                        <div className="inner">
                                                            <div className="content-layer">
                                                                <div className="icon"><span className="fa fa-link"></span></div>
                                                            </div>
                                                        </div>
                                                    </a>
                                                </figure>
                                                <p>Only States are eligible to appear before the Court in contentious cases.  At present, this  isbasically means the 192 United Nations Member States. The Court has no jurisdiction to deal with applications from individuals, non-governmental organizations, corporations or any other private entity.  It cannot provide them with legal counselling or help them in their sedsw dealings with the authorities of any State whatever. non-governmental organizations, corporations or any other private entity.non-governmental organizations, corporations or any other private entity non-governmental organizations, corporations or any other private entity. . </p>
                                                <p>However, a State may take up the case of one of its nationals and invoke against another State the wrongs which its national claims to have suffered at the hands of the latter;  the dispute then becomes one between States. a State may take up the case of one of its nationals and invoke against another State the wrongs which its national claims to have suffered at the hands of the latter.</p>
                                            </div>
                                        </div>
                                    </div>

                                    {/*  Accordion  */}
                                    <div className="accordion accordion-block">
                                        <div className="accord-btn"><div className="icon-box"><span className="icon fa fa-gear"></span></div><h4>Is it possible to visit the Peace Palace, seat of the Court?</h4></div>
                                        <div className="accord-content">
                                            <div className="clearfix">
                                                <p>Only States are eligible to appear before the Court in contentious cases.  At present, this  isbasically means the 192 United Nations Member States. The Court has no jurisdiction to deal with applications from individuals, non-governmental organizations, corporations or any other private entity.  It cannot provide them with legal counselling or help them in their sedsw dealings with the authorities of any State whatever. non-governmental organizations, corporations or any other private entity.non-governmental organizations, corporations or any other private entity non-governmental organizations, corporations or any other private entity. . </p>
                                                <p>However, a State may take up the case of one of its nationals and invoke against another State the wrongs which its national claims to have suffered at the hands of the latter;  the dispute then becomes one between States. a State may take up the case of one of its nationals and invoke against another State the wrongs which its national claims to have suffered at the hands of the latter.</p>
                                            </div>
                                        </div>
                                    </div>

                                    {/*  Accordion  */}
                                    <div className="accordion accordion-block">
                                        <div className="accord-btn"><div className="icon-box"><span className="icon fa fa-gear"></span></div><h4>How does one apply for a job at the Court?</h4></div>
                                        <div className="accord-content">
                                            <div className="clearfix">
                                                <figure className="image-box">
                                                    <img src="images/resource/default-image-12.jpg" alt="" />
                                                    <a href="#" className="default-overlay-outer">
                                                        <div className="inner">
                                                            <div className="content-layer">
                                                                <div className="icon"><span className="fa fa-link"></span></div>
                                                            </div>
                                                        </div>
                                                    </a>
                                                </figure>
                                                <p>Only States are eligible to appear before the Court in contentious cases.  At present, this  isbasically means the 192 United Nations Member States. The Court has no jurisdiction to deal with applications from individuals, non-governmental organizations, corporations or any other private entity.  It cannot provide them with legal counselling or help them in their sedsw dealings with the authorities of any State whatever. non-governmental organizations, corporations or any other private entity.non-governmental organizations, corporations or any other private entity non-governmental organizations, corporations or any other private entity. . </p>
                                                <p>However, a State may take up the case of one of its nationals and invoke against another State the wrongs which its national claims to have suffered at the hands of the latter;  the dispute then becomes one between States. a State may take up the case of one of its nationals and invoke against another State the wrongs which its national claims to have suffered at the hands of the latter.</p>
                                            </div>
                                        </div>
                                    </div>

                                    {/*  Accordion  */}
                                    <div className="accordion accordion-block">
                                        <div className="accord-btn"><div className="icon-box"><span className="icon fa fa-gear"></span></div><h4>Is this the best major for me if I want to work in law enforcement?</h4></div>
                                        <div className="accord-content">
                                            <div className="clearfix">
                                                <figure className="image-box">
                                                    <img src="images/resource/default-image-12.jpg" alt="" />
                                                    <a href="#" className="default-overlay-outer">
                                                        <div className="inner">
                                                            <div className="content-layer">
                                                                <div className="icon"><span className="fa fa-link"></span></div>
                                                            </div>
                                                        </div>
                                                    </a>
                                                </figure>
                                                <p>Only States are eligible to appear before the Court in contentious cases.  At present, this  isbasically means the 192 United Nations Member States. The Court has no jurisdiction to deal with applications from individuals, non-governmental organizations, corporations or any other private entity.  It cannot provide them with legal counselling or help them in their sedsw dealings with the authorities of any State whatever. non-governmental organizations, corporations or any other private entity.non-governmental organizations, corporations or any other private entity non-governmental organizations, corporations or any other private entity. . </p>
                                                <p>However, a State may take up the case of one of its nationals and invoke against another State the wrongs which its national claims to have suffered at the hands of the latter;  the dispute then becomes one between States. a State may take up the case of one of its nationals and invoke against another State the wrongs which its national claims to have suffered at the hands of the latter.</p>
                                            </div>
                                        </div>
                                    </div>

                                </div>

                            </div>{/* End Tab  */}

                            {/* Tab */}
                            <div className="tab" id="tab-three">

                                {/* Accordion Box / Accordions Inside Tabs */}
                                <div className="accordion-box style-three">
                                    {/*  Accordion  */}
                                    <div className="accordion accordion-block">
                                        <div className="accord-btn active"><div className="icon-box"><span className="icon fa fa-gear"></span></div><h4>What is the International Court of Justice?</h4></div>
                                        <div className="accord-content collapsed">
                                            <div className="clearfix">
                                                <figure className="image-box">
                                                    <img src="images/resource/default-image-12.jpg" alt="" />
                                                    <a href="#" className="default-overlay-outer">
                                                        <div className="inner">
                                                            <div className="content-layer">
                                                                <div className="icon"><span className="fa fa-link"></span></div>
                                                            </div>
                                                        </div>
                                                    </a>
                                                </figure>
                                                <p>Only States are eligible to appear before the Court in contentious cases.  At present, this  isbasically means the 192 United Nations Member States. The Court has no jurisdiction to deal with applications from individuals, non-governmental organizations, corporations or any other private entity.  It cannot provide them with legal counselling or help them in their sedsw dealings with the authorities of any State whatever. non-governmental organizations, corporations or any other private entity.non-governmental organizations, corporations or any other private entity non-governmental organizations, corporations or any other private entity. . </p>
                                                <p>However, a State may take up the case of one of its nationals and invoke against another State the wrongs which its national claims to have suffered at the hands of the latter;  the dispute then becomes one between States. a State may take up the case of one of its nationals and invoke against another State the wrongs which its national claims to have suffered at the hands of the latter.</p>
                                            </div>
                                        </div>
                                    </div>

                                    {/*  Accordion  */}
                                    <div className="accordion accordion-block">
                                        <div className="accord-btn"><div className="icon-box"><span className="icon fa fa-gear"></span></div><h4>Who may submit cases to the Court?</h4></div>
                                        <div className="accord-content">
                                            <div className="clearfix">
                                                <p>Only States are eligible to appear before the Court in contentious cases.  At present, this  isbasically means the 192 United Nations Member States. The Court has no jurisdiction to deal with applications from individuals, non-governmental organizations, corporations or any other private entity.  It cannot provide them with legal counselling or help them in their sedsw dealings with the authorities of any State whatever. non-governmental organizations, corporations or any other private entity.non-governmental organizations, corporations or any other private entity non-governmental organizations, corporations or any other private entity. . </p>
                                                <p>However, a State may take up the case of one of its nationals and invoke against another State the wrongs which its national claims to have suffered at the hands of the latter;  the dispute then becomes one between States. a State may take up the case of one of its nationals and invoke against another State the wrongs which its national claims to have suffered at the hands of the latter.</p>
                                            </div>
                                        </div>
                                    </div>



                                    {/*  Accordion  */}
                                    <div className="accordion accordion-block">
                                        <div className="accord-btn"><div className="icon-box"><span className="icon fa fa-gear"></span></div><h4>Is it possible to visit the Peace Palace, seat of the Court?</h4></div>
                                        <div className="accord-content">
                                            <div className="clearfix">
                                                <p>Only States are eligible to appear before the Court in contentious cases.  At present, this  isbasically means the 192 United Nations Member States. The Court has no jurisdiction to deal with applications from individuals, non-governmental organizations, corporations or any other private entity.  It cannot provide them with legal counselling or help them in their sedsw dealings with the authorities of any State whatever. non-governmental organizations, corporations or any other private entity.non-governmental organizations, corporations or any other private entity non-governmental organizations, corporations or any other private entity. . </p>
                                                <p>However, a State may take up the case of one of its nationals and invoke against another State the wrongs which its national claims to have suffered at the hands of the latter;  the dispute then becomes one between States. a State may take up the case of one of its nationals and invoke against another State the wrongs which its national claims to have suffered at the hands of the latter.</p>
                                            </div>
                                        </div>
                                    </div>

                                    {/*  Accordion  */}
                                    <div className="accordion accordion-block">
                                        <div className="accord-btn"><div className="icon-box"><span className="icon fa fa-gear"></span></div><h4>How does one apply for a job at the Court?</h4></div>
                                        <div className="accord-content">
                                            <div className="clearfix">
                                                <figure className="image-box">
                                                    <img src="images/resource/default-image-12.jpg" alt="" />
                                                    <a href="#" className="default-overlay-outer">
                                                        <div className="inner">
                                                            <div className="content-layer">
                                                                <div className="icon"><span className="fa fa-link"></span></div>
                                                            </div>
                                                        </div>
                                                    </a>
                                                </figure>
                                                <p>Only States are eligible to appear before the Court in contentious cases.  At present, this  isbasically means the 192 United Nations Member States. The Court has no jurisdiction to deal with applications from individuals, non-governmental organizations, corporations or any other private entity.  It cannot provide them with legal counselling or help them in their sedsw dealings with the authorities of any State whatever. non-governmental organizations, corporations or any other private entity.non-governmental organizations, corporations or any other private entity non-governmental organizations, corporations or any other private entity. . </p>
                                                <p>However, a State may take up the case of one of its nationals and invoke against another State the wrongs which its national claims to have suffered at the hands of the latter;  the dispute then becomes one between States. a State may take up the case of one of its nationals and invoke against another State the wrongs which its national claims to have suffered at the hands of the latter.</p>
                                            </div>
                                        </div>
                                    </div>

                                    {/*  Accordion  */}
                                    <div className="accordion accordion-block">
                                        <div className="accord-btn"><div className="icon-box"><span className="icon fa fa-gear"></span></div><h4>Is this the best major for me if I want to work in law enforcement?</h4></div>
                                        <div className="accord-content">
                                            <div className="clearfix">
                                                <figure className="image-box">
                                                    <img src="images/resource/default-image-12.jpg" alt="" />
                                                    <a href="#" className="default-overlay-outer">
                                                        <div className="inner">
                                                            <div className="content-layer">
                                                                <div className="icon"><span className="fa fa-link"></span></div>
                                                            </div>
                                                        </div>
                                                    </a>
                                                </figure>
                                                <p>Only States are eligible to appear before the Court in contentious cases.  At present, this  isbasically means the 192 United Nations Member States. The Court has no jurisdiction to deal with applications from individuals, non-governmental organizations, corporations or any other private entity.  It cannot provide them with legal counselling or help them in their sedsw dealings with the authorities of any State whatever. non-governmental organizations, corporations or any other private entity.non-governmental organizations, corporations or any other private entity non-governmental organizations, corporations or any other private entity. . </p>
                                                <p>However, a State may take up the case of one of its nationals and invoke against another State the wrongs which its national claims to have suffered at the hands of the latter;  the dispute then becomes one between States. a State may take up the case of one of its nationals and invoke against another State the wrongs which its national claims to have suffered at the hands of the latter.</p>
                                            </div>
                                        </div>
                                    </div>

                                    {/*  Accordion  */}
                                    <div className="accordion accordion-block">
                                        <div className="accord-btn"><div className="icon-box"><span className="icon fa fa-gear"></span></div><h4>Are the consolidated Acts and regulations the official versions?</h4></div>
                                        <div className="accord-content">
                                            <div className="clearfix">
                                                <figure className="image-box">
                                                    <img src="images/resource/default-image-12.jpg" alt="" />
                                                    <a href="#" className="default-overlay-outer">
                                                        <div className="inner">
                                                            <div className="content-layer">
                                                                <div className="icon"><span className="fa fa-link"></span></div>
                                                            </div>
                                                        </div>
                                                    </a>
                                                </figure>
                                                <p>Only States are eligible to appear before the Court in contentious cases.  At present, this  isbasically means the 192 United Nations Member States. The Court has no jurisdiction to deal with applications from individuals, non-governmental organizations, corporations or any other private entity.  It cannot provide them with legal counselling or help them in their sedsw dealings with the authorities of any State whatever. non-governmental organizations, corporations or any other private entity.non-governmental organizations, corporations or any other private entity non-governmental organizations, corporations or any other private entity. . </p>
                                                <p>However, a State may take up the case of one of its nationals and invoke against another State the wrongs which its national claims to have suffered at the hands of the latter;  the dispute then becomes one between States. a State may take up the case of one of its nationals and invoke against another State the wrongs which its national claims to have suffered at the hands of the latter.</p>
                                            </div>
                                        </div>
                                    </div>

                                    {/*  Accordion  */}
                                    <div className="accordion accordion-block">
                                        <div className="accord-btn"><div className="icon-box"><span className="icon fa fa-gear"></span></div><h4>Where can I find more information or assistance?</h4></div>
                                        <div className="accord-content">
                                            <div className="clearfix">
                                                <figure className="image-box">
                                                    <img src="images/resource/default-image-12.jpg" alt="" />
                                                    <a href="#" className="default-overlay-outer">
                                                        <div className="inner">
                                                            <div className="content-layer">
                                                                <div className="icon"><span className="fa fa-link"></span></div>
                                                            </div>
                                                        </div>
                                                    </a>
                                                </figure>
                                                <p>Only States are eligible to appear before the Court in contentious cases.  At present, this  isbasically means the 192 United Nations Member States. The Court has no jurisdiction to deal with applications from individuals, non-governmental organizations, corporations or any other private entity.  It cannot provide them with legal counselling or help them in their sedsw dealings with the authorities of any State whatever. non-governmental organizations, corporations or any other private entity.non-governmental organizations, corporations or any other private entity non-governmental organizations, corporations or any other private entity. . </p>
                                                <p>However, a State may take up the case of one of its nationals and invoke against another State the wrongs which its national claims to have suffered at the hands of the latter;  the dispute then becomes one between States. a State may take up the case of one of its nationals and invoke against another State the wrongs which its national claims to have suffered at the hands of the latter.</p>
                                            </div>
                                        </div>
                                    </div>

                                </div>

                            </div>{/* End Tab  */}

                            {/* Tab */}
                            <div className="tab" id="tab-four">

                                {/* Accordion Box / Accordions Inside Tabs */}
                                <div className="accordion-box style-three">
                                    {/*  Accordion  */}
                                    <div className="accordion accordion-block">
                                        <div className="accord-btn"><div className="icon-box"><span className="icon fa fa-gear"></span></div><h4>What is the International Court of Justice?</h4></div>
                                        <div className="accord-content">
                                            <div className="clearfix">
                                                <figure className="image-box">
                                                    <img src="images/resource/default-image-12.jpg" alt="" />
                                                    <a href="#" className="default-overlay-outer">
                                                        <div className="inner">
                                                            <div className="content-layer">
                                                                <div className="icon"><span className="fa fa-link"></span></div>
                                                            </div>
                                                        </div>
                                                    </a>
                                                </figure>
                                                <p>Only States are eligible to appear before the Court in contentious cases.  At present, this  isbasically means the 192 United Nations Member States. The Court has no jurisdiction to deal with applications from individuals, non-governmental organizations, corporations or any other private entity.  It cannot provide them with legal counselling or help them in their sedsw dealings with the authorities of any State whatever. non-governmental organizations, corporations or any other private entity.non-governmental organizations, corporations or any other private entity non-governmental organizations, corporations or any other private entity. . </p>
                                                <p>However, a State may take up the case of one of its nationals and invoke against another State the wrongs which its national claims to have suffered at the hands of the latter;  the dispute then becomes one between States. a State may take up the case of one of its nationals and invoke against another State the wrongs which its national claims to have suffered at the hands of the latter.</p>
                                            </div>
                                        </div>
                                    </div>

                                    {/*  Accordion  */}
                                    <div className="accordion accordion-block">
                                        <div className="accord-btn"><div className="icon-box"><span className="icon fa fa-gear"></span></div><h4>Who may submit cases to the Court?</h4></div>
                                        <div className="accord-content">
                                            <div className="clearfix">
                                                <p>Only States are eligible to appear before the Court in contentious cases.  At present, this  isbasically means the 192 United Nations Member States. The Court has no jurisdiction to deal with applications from individuals, non-governmental organizations, corporations or any other private entity.  It cannot provide them with legal counselling or help them in their sedsw dealings with the authorities of any State whatever. non-governmental organizations, corporations or any other private entity.non-governmental organizations, corporations or any other private entity non-governmental organizations, corporations or any other private entity. . </p>
                                                <p>However, a State may take up the case of one of its nationals and invoke against another State the wrongs which its national claims to have suffered at the hands of the latter;  the dispute then becomes one between States. a State may take up the case of one of its nationals and invoke against another State the wrongs which its national claims to have suffered at the hands of the latter.</p>
                                            </div>
                                        </div>
                                    </div>

                                    {/*  Accordion  */}
                                    <div className="accordion accordion-block">
                                        <div className="accord-btn"><div className="icon-box"><span className="icon fa fa-gear"></span></div><h4>Why are some disputes between States not considered by the Court?</h4></div>
                                        <div className="accord-content">
                                            <div className="clearfix">
                                                <figure className="image-box">
                                                    <img src="images/resource/default-image-12.jpg" alt="" />
                                                    <a href="#" className="default-overlay-outer">
                                                        <div className="inner">
                                                            <div className="content-layer">
                                                                <div className="icon"><span className="fa fa-link"></span></div>
                                                            </div>
                                                        </div>
                                                    </a>
                                                </figure>
                                                <p>Only States are eligible to appear before the Court in contentious cases.  At present, this  isbasically means the 192 United Nations Member States. The Court has no jurisdiction to deal with applications from individuals, non-governmental organizations, corporations or any other private entity.  It cannot provide them with legal counselling or help them in their sedsw dealings with the authorities of any State whatever. non-governmental organizations, corporations or any other private entity.non-governmental organizations, corporations or any other private entity non-governmental organizations, corporations or any other private entity. . </p>
                                                <p>However, a State may take up the case of one of its nationals and invoke against another State the wrongs which its national claims to have suffered at the hands of the latter;  the dispute then becomes one between States. a State may take up the case of one of its nationals and invoke against another State the wrongs which its national claims to have suffered at the hands of the latter.</p>
                                            </div>
                                        </div>
                                    </div>

                                    {/*  Accordion  */}
                                    <div className="accordion accordion-block">
                                        <div className="accord-btn"><div className="icon-box"><span className="icon fa fa-gear"></span></div><h4>Are decisions of the Court binding?</h4></div>
                                        <div className="accord-content">
                                            <div className="clearfix">
                                                <p>Only States are eligible to appear before the Court in contentious cases.  At present, this  isbasically means the 192 United Nations Member States. The Court has no jurisdiction to deal with applications from individuals, non-governmental organizations, corporations or any other private entity.  It cannot provide them with legal counselling or help them in their sedsw dealings with the authorities of any State whatever. non-governmental organizations, corporations or any other private entity.non-governmental organizations, corporations or any other private entity non-governmental organizations, corporations or any other private entity. . </p>
                                                <p>However, a State may take up the case of one of its nationals and invoke against another State the wrongs which its national claims to have suffered at the hands of the latter;  the dispute then becomes one between States. a State may take up the case of one of its nationals and invoke against another State the wrongs which its national claims to have suffered at the hands of the latter.</p>
                                            </div>
                                        </div>
                                    </div>

                                    {/*  Accordion  */}
                                    <div className="accordion accordion-block">
                                        <div className="accord-btn"><div className="icon-box"><span className="icon fa fa-gear"></span></div><h4>How does one attend hearings of the Court?</h4></div>
                                        <div className="accord-content">
                                            <div className="clearfix">
                                                <figure className="image-box">
                                                    <img src="images/resource/default-image-12.jpg" alt="" />
                                                    <a href="#" className="default-overlay-outer">
                                                        <div className="inner">
                                                            <div className="content-layer">
                                                                <div className="icon"><span className="fa fa-link"></span></div>
                                                            </div>
                                                        </div>
                                                    </a>
                                                </figure>
                                                <p>Only States are eligible to appear before the Court in contentious cases.  At present, this  isbasically means the 192 United Nations Member States. The Court has no jurisdiction to deal with applications from individuals, non-governmental organizations, corporations or any other private entity.  It cannot provide them with legal counselling or help them in their sedsw dealings with the authorities of any State whatever. non-governmental organizations, corporations or any other private entity.non-governmental organizations, corporations or any other private entity non-governmental organizations, corporations or any other private entity. . </p>
                                                <p>However, a State may take up the case of one of its nationals and invoke against another State the wrongs which its national claims to have suffered at the hands of the latter;  the dispute then becomes one between States. a State may take up the case of one of its nationals and invoke against another State the wrongs which its national claims to have suffered at the hands of the latter.</p>
                                            </div>
                                        </div>
                                    </div>

                                    {/*  Accordion  */}
                                    <div className="accordion accordion-block">
                                        <div className="accord-btn"><div className="icon-box"><span className="icon fa fa-gear"></span></div><h4>Is it possible to visit the Peace Palace, seat of the Court?</h4></div>
                                        <div className="accord-content">
                                            <div className="clearfix">
                                                <p>Only States are eligible to appear before the Court in contentious cases.  At present, this  isbasically means the 192 United Nations Member States. The Court has no jurisdiction to deal with applications from individuals, non-governmental organizations, corporations or any other private entity.  It cannot provide them with legal counselling or help them in their sedsw dealings with the authorities of any State whatever. non-governmental organizations, corporations or any other private entity.non-governmental organizations, corporations or any other private entity non-governmental organizations, corporations or any other private entity. . </p>
                                                <p>However, a State may take up the case of one of its nationals and invoke against another State the wrongs which its national claims to have suffered at the hands of the latter;  the dispute then becomes one between States. a State may take up the case of one of its nationals and invoke against another State the wrongs which its national claims to have suffered at the hands of the latter.</p>
                                            </div>
                                        </div>
                                    </div>

                                    {/*  Accordion  */}
                                    <div className="accordion accordion-block">
                                        <div className="accord-btn"><div className="icon-box"><span className="icon fa fa-gear"></span></div><h4>How does one apply for a job at the Court?</h4></div>
                                        <div className="accord-content">
                                            <div className="clearfix">
                                                <figure className="image-box">
                                                    <img src="images/resource/default-image-12.jpg" alt="" />
                                                    <a href="#" className="default-overlay-outer">
                                                        <div className="inner">
                                                            <div className="content-layer">
                                                                <div className="icon"><span className="fa fa-link"></span></div>
                                                            </div>
                                                        </div>
                                                    </a>
                                                </figure>
                                                <p>Only States are eligible to appear before the Court in contentious cases.  At present, this  isbasically means the 192 United Nations Member States. The Court has no jurisdiction to deal with applications from individuals, non-governmental organizations, corporations or any other private entity.  It cannot provide them with legal counselling or help them in their sedsw dealings with the authorities of any State whatever. non-governmental organizations, corporations or any other private entity.non-governmental organizations, corporations or any other private entity non-governmental organizations, corporations or any other private entity. . </p>
                                                <p>However, a State may take up the case of one of its nationals and invoke against another State the wrongs which its national claims to have suffered at the hands of the latter;  the dispute then becomes one between States. a State may take up the case of one of its nationals and invoke against another State the wrongs which its national claims to have suffered at the hands of the latter.</p>
                                            </div>
                                        </div>
                                    </div>

                                </div>

                            </div>{/* End Tab  */}


                            {/* Tab */}
                            <div className="tab" id="tab-five">

                                {/* Accordion Box / Accordions Inside Tabs */}
                                <div className="accordion-box style-three">
                                    {/*  Accordion  */}
                                    <div className="accordion accordion-block">
                                        <div className="accord-btn"><div className="icon-box"><span className="icon fa fa-gear"></span></div><h4>What is the International Court of Justice?</h4></div>
                                        <div className="accord-content">
                                            <div className="clearfix">
                                                <figure className="image-box">
                                                    <img src="images/resource/default-image-12.jpg" alt="" />
                                                    <a href="#" className="default-overlay-outer">
                                                        <div className="inner">
                                                            <div className="content-layer">
                                                                <div className="icon"><span className="fa fa-link"></span></div>
                                                            </div>
                                                        </div>
                                                    </a>
                                                </figure>
                                                <p>Only States are eligible to appear before the Court in contentious cases.  At present, this  isbasically means the 192 United Nations Member States. The Court has no jurisdiction to deal with applications from individuals, non-governmental organizations, corporations or any other private entity.  It cannot provide them with legal counselling or help them in their sedsw dealings with the authorities of any State whatever. non-governmental organizations, corporations or any other private entity.non-governmental organizations, corporations or any other private entity non-governmental organizations, corporations or any other private entity. . </p>
                                                <p>However, a State may take up the case of one of its nationals and invoke against another State the wrongs which its national claims to have suffered at the hands of the latter;  the dispute then becomes one between States. a State may take up the case of one of its nationals and invoke against another State the wrongs which its national claims to have suffered at the hands of the latter.</p>
                                            </div>
                                        </div>
                                    </div>

                                    {/*  Accordion  */}
                                    <div className="accordion accordion-block">
                                        <div className="accord-btn"><div className="icon-box"><span className="icon fa fa-gear"></span></div><h4>Who may submit cases to the Court?</h4></div>
                                        <div className="accord-content">
                                            <div className="clearfix">
                                                <p>Only States are eligible to appear before the Court in contentious cases.  At present, this  isbasically means the 192 United Nations Member States. The Court has no jurisdiction to deal with applications from individuals, non-governmental organizations, corporations or any other private entity.  It cannot provide them with legal counselling or help them in their sedsw dealings with the authorities of any State whatever. non-governmental organizations, corporations or any other private entity.non-governmental organizations, corporations or any other private entity non-governmental organizations, corporations or any other private entity. . </p>
                                                <p>However, a State may take up the case of one of its nationals and invoke against another State the wrongs which its national claims to have suffered at the hands of the latter;  the dispute then becomes one between States. a State may take up the case of one of its nationals and invoke against another State the wrongs which its national claims to have suffered at the hands of the latter.</p>
                                            </div>
                                        </div>
                                    </div>

                                    {/*  Accordion  */}
                                    <div className="accordion accordion-block">
                                        <div className="accord-btn"><div className="icon-box"><span className="icon fa fa-gear"></span></div><h4>Are decisions of the Court binding?</h4></div>
                                        <div className="accord-content">
                                            <div className="clearfix">
                                                <p>Only States are eligible to appear before the Court in contentious cases.  At present, this  isbasically means the 192 United Nations Member States. The Court has no jurisdiction to deal with applications from individuals, non-governmental organizations, corporations or any other private entity.  It cannot provide them with legal counselling or help them in their sedsw dealings with the authorities of any State whatever. non-governmental organizations, corporations or any other private entity.non-governmental organizations, corporations or any other private entity non-governmental organizations, corporations or any other private entity. . </p>
                                                <p>However, a State may take up the case of one of its nationals and invoke against another State the wrongs which its national claims to have suffered at the hands of the latter;  the dispute then becomes one between States. a State may take up the case of one of its nationals and invoke against another State the wrongs which its national claims to have suffered at the hands of the latter.</p>
                                            </div>
                                        </div>
                                    </div>

                                    {/*  Accordion  */}
                                    <div className="accordion accordion-block">
                                        <div className="accord-btn"><div className="icon-box"><span className="icon fa fa-gear"></span></div><h4>How does one attend hearings of the Court?</h4></div>
                                        <div className="accord-content">
                                            <div className="clearfix">
                                                <figure className="image-box">
                                                    <img src="images/resource/default-image-12.jpg" alt="" />
                                                    <a href="#" className="default-overlay-outer">
                                                        <div className="inner">
                                                            <div className="content-layer">
                                                                <div className="icon"><span className="fa fa-link"></span></div>
                                                            </div>
                                                        </div>
                                                    </a>
                                                </figure>
                                                <p>Only States are eligible to appear before the Court in contentious cases.  At present, this  isbasically means the 192 United Nations Member States. The Court has no jurisdiction to deal with applications from individuals, non-governmental organizations, corporations or any other private entity.  It cannot provide them with legal counselling or help them in their sedsw dealings with the authorities of any State whatever. non-governmental organizations, corporations or any other private entity.non-governmental organizations, corporations or any other private entity non-governmental organizations, corporations or any other private entity. . </p>
                                                <p>However, a State may take up the case of one of its nationals and invoke against another State the wrongs which its national claims to have suffered at the hands of the latter;  the dispute then becomes one between States. a State may take up the case of one of its nationals and invoke against another State the wrongs which its national claims to have suffered at the hands of the latter.</p>
                                            </div>
                                        </div>
                                    </div>

                                    {/*  Accordion  */}
                                    <div className="accordion accordion-block">
                                        <div className="accord-btn"><div className="icon-box"><span className="icon fa fa-gear"></span></div><h4>Is it possible to visit the Peace Palace, seat of the Court?</h4></div>
                                        <div className="accord-content">
                                            <div className="clearfix">
                                                <p>Only States are eligible to appear before the Court in contentious cases.  At present, this  isbasically means the 192 United Nations Member States. The Court has no jurisdiction to deal with applications from individuals, non-governmental organizations, corporations or any other private entity.  It cannot provide them with legal counselling or help them in their sedsw dealings with the authorities of any State whatever. non-governmental organizations, corporations or any other private entity.non-governmental organizations, corporations or any other private entity non-governmental organizations, corporations or any other private entity. . </p>
                                                <p>However, a State may take up the case of one of its nationals and invoke against another State the wrongs which its national claims to have suffered at the hands of the latter;  the dispute then becomes one between States. a State may take up the case of one of its nationals and invoke against another State the wrongs which its national claims to have suffered at the hands of the latter.</p>
                                            </div>
                                        </div>
                                    </div>

                                    {/*  Accordion  */}
                                    <div className="accordion accordion-block">
                                        <div className="accord-btn"><div className="icon-box"><span className="icon fa fa-gear"></span></div><h4>How does one apply for a job at the Court?</h4></div>
                                        <div className="accord-content">
                                            <div className="clearfix">
                                                <figure className="image-box">
                                                    <img src="images/resource/default-image-12.jpg" alt="" />
                                                    <a href="#" className="default-overlay-outer">
                                                        <div className="inner">
                                                            <div className="content-layer">
                                                                <div className="icon"><span className="fa fa-link"></span></div>
                                                            </div>
                                                        </div>
                                                    </a>
                                                </figure>
                                                <p>Only States are eligible to appear before the Court in contentious cases.  At present, this  isbasically means the 192 United Nations Member States. The Court has no jurisdiction to deal with applications from individuals, non-governmental organizations, corporations or any other private entity.  It cannot provide them with legal counselling or help them in their sedsw dealings with the authorities of any State whatever. non-governmental organizations, corporations or any other private entity.non-governmental organizations, corporations or any other private entity non-governmental organizations, corporations or any other private entity. . </p>
                                                <p>However, a State may take up the case of one of its nationals and invoke against another State the wrongs which its national claims to have suffered at the hands of the latter;  the dispute then becomes one between States. a State may take up the case of one of its nationals and invoke against another State the wrongs which its national claims to have suffered at the hands of the latter.</p>
                                            </div>
                                        </div>
                                    </div>

                                    {/*  Accordion  */}
                                    <div className="accordion accordion-block">
                                        <div className="accord-btn"><div className="icon-box"><span className="icon fa fa-gear"></span></div><h4>Is this the best major for me if I want to work in law enforcement?</h4></div>
                                        <div className="accord-content">
                                            <div className="clearfix">
                                                <figure className="image-box">
                                                    <img src="images/resource/default-image-12.jpg" alt="" />
                                                    <a href="#" className="default-overlay-outer">
                                                        <div className="inner">
                                                            <div className="content-layer">
                                                                <div className="icon"><span className="fa fa-link"></span></div>
                                                            </div>
                                                        </div>
                                                    </a>
                                                </figure>
                                                <p>Only States are eligible to appear before the Court in contentious cases.  At present, this  isbasically means the 192 United Nations Member States. The Court has no jurisdiction to deal with applications from individuals, non-governmental organizations, corporations or any other private entity.  It cannot provide them with legal counselling or help them in their sedsw dealings with the authorities of any State whatever. non-governmental organizations, corporations or any other private entity.non-governmental organizations, corporations or any other private entity non-governmental organizations, corporations or any other private entity. . </p>
                                                <p>However, a State may take up the case of one of its nationals and invoke against another State the wrongs which its national claims to have suffered at the hands of the latter;  the dispute then becomes one between States. a State may take up the case of one of its nationals and invoke against another State the wrongs which its national claims to have suffered at the hands of the latter.</p>
                                            </div>
                                        </div>
                                    </div>

                                </div>

                            </div>{/* End Tab  */}

                        </div>
                    </div>

                </div>
            </section>


            {/* Default Form Section */}
            <section className="default-form-section" style={{ backgroundImage: `url(images/background/consult-form-bg.jpg)` }}>
                <div className="auto-container">

                    {/* Styled Heading */}
                    <div className="styled-heading centered">
                        <h2>Ask Your Questions Now</h2>
                    </div>

                    <div className="default-form">
                        <form method="post" action="https://st.ourhtmldemo.com/template/laywer-justice/index.html">
                            <div className="row clearfix">
                                <div className="form-group col-md-6 col-sm-12 col-xs-12">
                                    <input type="text" name="name" placeholder="Your Name" required />
                                </div>
                                <div className="form-group col-md-6 col-sm-12 col-xs-12">
                                    <input type="email" name="email" placeholder="Email Address" required />
                                </div>
                                <div className="form-group col-md-12 col-sm-12 col-xs-12">
                                    <textarea name="message" placeholder="Your Question..." required></textarea>
                                </div>
                                <div className="form-group text-center col-md-12 col-sm-12 col-xs-12">
                                    <button type="submit" className="theme-btn btn-style-one">Ask your Question</button>
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
export default FAQ;