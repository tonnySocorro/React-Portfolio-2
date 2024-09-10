import React, {Component} from "react";
import ProjectDetailsModal from "./project-details.component";
import "./projects.component.scss";

class Projects extends Component {
    constructor(props) {
        super(props);
        this.state = {
            deps: {},
            detailsModalShow: false,
        };
    }

    render() {
        let detailsModalShow = (data) => {
            this.setState({detailsModalShow: true, deps: data});
        };

        let detailsModalClose = () => this.setState({detailsModalShow: false});
        if (this.props.projects) {
            var projects = this.props.projects.map(function (project) {
                return (
                    <div
                        className="col-sm-12 col-md-6 col-lg-4 text-center"
                        key={project.title}
                        style={{cursor: "pointer"}}>
                        <span className="portfolio-item d-block">
                            <div
                                className="foto"
                                onClick={() => detailsModalShow(project)}>
                                <div>
                                    <img
                                        src={project.images[0]}
                                        alt="projectImages"
                                        height="230"
                                        style={{
                                            marginBottom: 0,
                                            paddingBottom: 0,
                                            position: "relative",
                                        }}
                                    />
                                    <span className="project-date">
                                        {project.startDate}
                                    </span>
                                    <br />
                                    <p className="project-title-settings mt-3">
                                        {project.title}
                                    </p>
                                </div>
                            </div>
                        </span>
                    </div>
                );
            });
        }

        return (
            <section id="projects">
                <h2 className="section-title mb-5" style={{color: "black"}}>
                    Projects
                </h2>
                <div className="col-md-12 mx-auto">
                    <div className="row mx-auto">{projects}</div>
                </div>
                <ProjectDetailsModal
                    show={this.state.detailsModalShow}
                    onHide={detailsModalClose}
                    data={this.state.deps}
                />
            </section>
        );
    }
}

export default Projects;
