import React from "react";
import { Col, Row } from "react-bootstrap";
import { FaGraduationCap } from "react-icons/fa";
import Timeline from "../../components/Timeline/Timeline";
import "./About.scss";

const About = ({ about }) => {
	const { introduction, education } = about;
	return (
		<div className="box">
			<div className="pb-0 pb-sm-2">
				<h1 className="title title--h1 title__separate">About Me</h1>
				<Row>
					<Col lg={12} className="introduce">
						<p>{introduction}</p>
					</Col>
					<Col lg={12}>
						<h2 className="title title--h3">
							<FaGraduationCap /> Education
						</h2>
						<Timeline timeline={education} />
					</Col>
				</Row>
			</div>
		</div>
	);
};

export default About;
