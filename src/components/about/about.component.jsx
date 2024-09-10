import "./about.component.scss";
import Picture from "./../../tonny.jpg";
import CV from "./../../assets/tonny_resume_sp.pdf";

export default function About() {
    return (
        <section id="about-section">
            <div className="px-4 py-5">
                <div className="row g-5 py-5 about-container">
                    <div className="col-8 col-sm-8 col-md-6 col-lg-3 col-xl-3 image-container">
                        <img
                            src={Picture}
                            className="d-block mx-lg-auto img-fluid portfolio-img"
                            alt="Bootstrap Themes"
                            width="700"
                            height="500"
                            loading="lazy"
                        />
                    </div>
                    <div className="col-lg-6 about-info">
                        <h2 className="display-5 lh-1 mb-3">About me</h2>
                        <p className="lead">
                            I'm a Software developer with experience in the design, implementation, testing, and maintenance of software systems. Proficient in multiple platforms, languages, and integrated systems. Experienced with cutting-edge development tools and procedures, with a strong ability to learn and a constant motivation to acquire new knowledge and skills.
                        </p>
                        <a
                            href={CV}
                            target="_blank"
                            className="btn btn-outline-dark cv-btn"
                            rel="noreferrer">
                            Download CV <i className="fas fa-download"></i>
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
}
