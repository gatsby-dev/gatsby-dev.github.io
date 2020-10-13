import React from "react";
import {Col} from "react-bootstrap";
import {FaExternalLinkAlt, FaGithub} from "react-icons/fa";

import "./Card.scss";

const Card = (props) => {
    const {
        project: {id, name, linkProject, linkGithub},
    } = props;

    return (
        <Col as="figure" className="gallery-grid__item" md={6} lg={4}>
            <div className="gallery-grid__image-wrap">
                <img className="gallery-grid__image" src={require("../../assets/images/data-table.png")} alt={id}/>
            </div>
            <figcaption className="gallery-grid__caption">
                <h4 className="title title--h6 gallery-grid__title">{name}</h4>
                <div className="gallery-grid__link">
                    <FaExternalLinkAlt/> link project:&nbsp;
                    <a href={linkProject} target="_blank" rel="noopener noreferrer">
                        {id}
                    </a>
                </div>
                <div className="gallery-grid__link">
                    <FaGithub/> link github:&nbsp;
                    <a href={linkGithub} target="_blank" rel="noopener noreferrer">
                        {id}
                    </a>
                </div>
            </figcaption>
        </Col>
    );
};

export default Card;
