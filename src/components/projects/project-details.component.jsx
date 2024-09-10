import React, {Component} from "react";
import {Modal} from "react-bootstrap";
import AwesomeSlider from "react-awesome-slider";
import AwesomeSliderStyles from "./light-slider.scss";
import AwesomeSliderStyles2 from "./dark-slider.scss";
import "react-awesome-slider/dist/custom-animations/scale-out-animation.css";

class ProjectDetailsModal extends Component {
    render() {
        if (this.props.data) {
            const technologies = this.props.data.technologies;
            const images = this.props.data.images;
            var title = this.props.data.title;
            var description = this.props.data.description;
            var url = this.props.data.url;
            if (this.props.data.technologies) {
                var tech = technologies.map((icons, i) => {
                    return (
                        <li className="list-inline-item" key={i}>
                            <span>
                                <div className="text-center tech-container">
                                    <i className={icons.class}>
                                        <p
                                            className="text-center"
                                            style={{fontSize: "30%"}}>
                                            {icons.name}
                                        </p>
                                    </i>
                                </div>
                            </span>
                        </li>
                    );
                });
                if (this.props.data.images) {
                    var img = images.map((elem, i) => {
                        return <div key={i} data-src={elem} />;
                    });
                }
            }
        }
        return (
            <Modal
                {...this.props}
                size="lg"
                aria-labelledby="contained-modal-title-vcenter"
                centered
                className="modal-inside">
                <span onClick={this.props.onHide} className="modal-close">
                    <i className="fas fa-times fa-3x close-icon"></i>
                </span>
                <div className="col-md-12">
                    <div
                        className="col-md-10 mx-auto"
                        style={{paddingBottom: "50px"}}>
                        <div className="slider-tab">
                            <span
                                className="iconify slider-iconfiy"
                                data-icon="emojione:red-circle"
                                data-inline="false"
                                style={{marginLeft: "5px"}}></span>{" "}
                            &nbsp;{" "}
                            <span
                                className="iconify slider-iconfiy"
                                data-icon="twemoji:yellow-circle"
                                data-inline="false"></span>{" "}
                            &nbsp;{" "}
                            <span
                                className="iconify slider-iconfiy"
                                data-icon="twemoji:green-circle"
                                data-inline="false"></span>
                        </div>
                        <AwesomeSlider
                            cssModule={[
                                AwesomeSliderStyles,
                                AwesomeSliderStyles2,
                            ]}
                            animation="scaleOutAnimation"
                            className="slider-image">
                            {img}
                        </AwesomeSlider>
                    </div>
                    <div className="col-md-10 mx-auto">
                        <div className="modal-title-container">
                            <h3 className="modal-title">{title}</h3>
                            <div className="code-links">
                                {url && url?.preview ? (
                                    <a
                                        href={url?.preview}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="link-href source-button">
                                        <span className="d-none d-lg-inline-block">
                                            View demo &nbsp;
                                        </span>
                                        <i className="fas fa-desktop"></i>
                                    </a>
                                ) : null}
                                {url && url?.github ? (
                                    <a
                                        href={url?.github}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="link-href source-button">
                                        <span className="d-none d-lg-inline-block">
                                            View source &nbsp;
                                        </span>
                                        <i className="fas fa-code"></i>
                                    </a>
                                ) : null}
                                {url && url?.backend ? (
                                    <a
                                        href={url?.backend}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="link-href source-button">
                                        <span className="d-none d-lg-inline-block">
                                            View backend repo &nbsp;
                                        </span>
                                        <i className="fas fa-code"></i>
                                    </a>
                                ) : null}
                                {url && url?.frontend ? (
                                    <a
                                        href={url?.frontend}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="link-href source-button">
                                        <span className="d-none d-lg-inline-block">
                                            View frontend repo &nbsp;
                                        </span>
                                        <i className="fas fa-code"></i>
                                    </a>
                                ) : null}
                            </div>
                        </div>
                        <p className="modal-description">{description}</p>
                        <div className="col-md-12 text-center">
                            <ul className="list-inline mx-auto">{tech}</ul>
                        </div>
                    </div>
                </div>
            </Modal>
        );
    }
}

export default ProjectDetailsModal;
