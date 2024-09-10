import "./experience.component.scss";
import {
    VerticalTimeline,
    VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";

export default function Experience() {
    return (
        <section id="experience-section">
            <h2 className="display-5 lh-1 mb-5">Experience</h2>
            <VerticalTimeline lineColor={"#1F1F1F"}>
                <VerticalTimelineElement
                    className="vertical-timeline-element--education"
                    date="Dec. 2022 - Present"
                    iconStyle={{background: "rgb(108,117,125)", color: "#fff"}}
                    icon={<i className="fas fa-code timeline-icon"></i>}>
                    <h3 className="vertical-timeline-element-title mb-2">
                        Web Development
                    </h3>
                    <span className="vertical-timeline-element-subtitle mb-3">
                        Universidad de Oviedo
                    </span>
                    <div className="mt-1">
                        <span className="experience-badge me-2 mb-2 badge bg-secondary">
                            Apache Nifi
                        </span>
                        <span className="experience-badge me-2 mb-2 badge bg-secondary">
                            Elastick Stack
                        </span>
                        <span className="experience-badge me-2 mb-2 badge bg-secondary">
                            Ubuntu
                        </span>
                        <span className="experience-badge me-2 mb-2 badge bg-secondary">
                            MySQL
                        </span>
                    </div>
                </VerticalTimelineElement>
                <VerticalTimelineElement
                    className="vertical-timeline-element--education"
                    date="Sept. 2021 - Sept. 2022"
                    iconStyle={{background: "rgb(108,117,125)", color: "#fff"}}
                    icon={<i className="fas fa-code timeline-icon"></i>}>
                    <h3 className="vertical-timeline-element-title mb-2">
                       Junior Software Engineer
                    </h3>
                    <span className="vertical-timeline-element-subtitle mb-3">
                        KODS. AI
                    </span>
                    <div className="mt-1">
                        <span className="experience-badge me-2 mb-2 badge bg-secondary">
                            python
                        </span>
                        <span className="experience-badge me-2 mb-2 badge bg-secondary">
                            XML
                        </span>
                        <span className="experience-badge me-2 mb-2 badge bg-secondary">
                            Json
                        </span>
                        <span className="experience-badge me-2 mb-2 badge bg-secondary">
                            Git
                        </span>
                    </div>
                </VerticalTimelineElement>
                <VerticalTimelineElement
                    className="vertical-timeline-element--education"
                    date="Oct. 2020 - May. 2022"
                    iconStyle={{background: "rgb(108,117,125)", color: "#fff"}}
                    icon={<i className="fas fa-code timeline-icon"></i>}>
                    <h3 className="vertical-timeline-element-title mb-2">
                        Software Development
                    </h3>
                    <span className="vertical-timeline-element-subtitle mb-3">
                        Universidad de La Habana
                    </span>
                    <div className="mt-1">
                        <span className="experience-badge me-2 mb-2 badge bg-secondary">
                            WordPress
                        </span>
                        <span className="experience-badge me-2 mb-2 badge bg-secondary">
                            Drupal
                        </span>
                      
                        <span className="experience-badge me-2 mb-2 badge bg-secondary">
                            Git
                        </span>
                    </div>
                </VerticalTimelineElement>
                <VerticalTimelineElement
                    iconStyle={{background: "rgb(108,117,125)", color: "#fff"}}
                    icon={
                        <i className="fas fa-hourglass-start timeline-icon"></i>
                    }
                />
            </VerticalTimeline>
        </section>
    );
}
