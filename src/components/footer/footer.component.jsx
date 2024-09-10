import SocialIcon from "../social-icon/social-icon.component";
import "./footer.component.scss";

const Footer = () => {
    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth",
        });
    };
    return (
        <footer id="site-footer">
            <div className="footer-content">
                <div className="container">
                    <div className="down-below">
                        <div className="contact">
                            <a
                                href="mailto:tonnysocorro@gmail.com"
                                title="Send me an email"
                                rel="me noreferrer"
                                target="_blank">
                                tonnysocorro@gmail.com
                            </a>
                        </div>

                        <ul className="links">
                            <li>
                                <SocialIcon
                                    url="https://github.com/tonnySocorro"
                                    title="@tonnySocorro on GitHub"
                                    icon="fa-github"
                                />
                            </li>
                          
                          
                            
                            <li>
                                <SocialIcon
                                    url="https://www.linkedin.com/in/tonny-socorro-del-pozo"
                                    title="Tonny Socorro on LinkedIn"
                                    icon="fa-linkedin-in"
                                />
                            </li>
                        </ul>

                        <button
                            type="button"
                            className="to-top"
                            onClick={scrollToTop}>
                            <i className="fa fa-arrow-up"></i>
                        </button>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
