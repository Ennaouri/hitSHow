import React from 'react'

export default function Categorie() {
    return (
        <div>
            <section className="page-section bg-light" id="portfolio">
            <div className="container">
                <div className="text-center">
                    <h2 className="section-heading text-uppercase">Top Categories </h2>
                    <h3 className="section-subheading text-muted">Lorem ipsum dolor sit amet consectetur.</h3>
                </div>
                <div className="row">
                    <div className="col-lg-4 col-sm-6 mb-4">
                        <div className="portfolio-item">
                            <a className="portfolio-link" data-toggle="modal" href="#portfolioModal1">
                                <div className="portfolio-hover">
                                    <div className="portfolio-hover-content"><i className="fas fa-plus fa-3x"></i></div>
                                </div>
                                <img className="img-fluid" src="assets/img/portfolio/rnb.jpg" alt="" width="400" />
                            </a>
                            <div className="portfolio-caption">
                                <div className="portfolio-caption-heading">RnB</div>
                                <div className="portfolio-caption-subheading text-muted">Illustration</div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4 col-sm-6 mb-4">
                        <div className="portfolio-item">
                            <a className="portfolio-link" data-toggle="modal" href="#portfolioModal2">
                                <div className="portfolio-hover">
                                    <div className="portfolio-hover-content"><i className="fas fa-plus fa-3x"></i></div>
                                </div>
                                <img className="img-fluid" src="assets/img/portfolio/pop.png" alt="" />
                            </a>
                            <div className="portfolio-caption">
                                <div className="portfolio-caption-heading">Pop</div>
                                <div className="portfolio-caption-subheading text-muted">Graphic Design</div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4 col-sm-6 mb-4">
                        <div className="portfolio-item">
                            <a className="portfolio-link" data-toggle="modal" href="#portfolioModal3">
                                <div className="portfolio-hover">
                                    <div className="portfolio-hover-content"><i className="fas fa-plus fa-3x"></i></div>
                                </div>
                                <img className="img-fluid" src="assets/img/portfolio/hiphop.jpg" alt="" />
                            </a>
                            <div className="portfolio-caption">
                                <div className="portfolio-caption-heading">Hip Hop</div>
                                <div className="portfolio-caption-subheading text-muted">Identity</div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4 col-sm-6 mb-4 mb-lg-0">
                        <div className="portfolio-item">
                            <a className="portfolio-link" data-toggle="modal" href="#portfolioModal4">
                                <div className="portfolio-hover">
                                    <div className="portfolio-hover-content"><i className="fas fa-plus fa-3x"></i></div>
                                </div>
                                <img className="img-fluid" src="assets/img/portfolio/rock.jpg" alt="" />
                            </a>
                            <div className="portfolio-caption">
                                <div className="portfolio-caption-heading">Rock</div>
                                <div className="portfolio-caption-subheading text-muted">Branding</div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4 col-sm-6 mb-4 mb-sm-0">
                        <div className="portfolio-item">
                            <a className="portfolio-link" data-toggle="modal" href="#portfolioModal5">
                                <div className="portfolio-hover">
                                    <div className="portfolio-hover-content"><i className="fas fa-plus fa-3x"></i></div>
                                </div>
                                <img className="img-fluid" src="assets/img/portfolio/oriental.jpg" alt="" />
                            </a>
                            <div className="portfolio-caption">
                                <div className="portfolio-caption-heading">Oriental</div>
                                <div className="portfolio-caption-subheading text-muted">Website Design</div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4 col-sm-6">
                        <div className="portfolio-item">
                            <a className="portfolio-link" data-toggle="modal" href="#portfolioModal6">
                                <div className="portfolio-hover">
                                    <div className="portfolio-hover-content"><i className="fas fa-plus fa-3x"></i></div>
                                </div>
                                <img className="img-fluid" src="assets/img/portfolio/classical.jpg" alt="" width="400px"/>
                            </a>
                            <div className="portfolio-caption">
                                <div className="portfolio-caption-heading">Classical</div>
                                <div className="portfolio-caption-subheading text-muted">Photography</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        </div>
    )
}
