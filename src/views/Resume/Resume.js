import React from "react";
import { Row, Col } from "react-bootstrap";
import { BsFillBriefcaseFill } from "react-icons/bs";
import { ImCog } from "react-icons/im";
import Timeline from "../../components/Timeline/Timeline";
import StraightSkill from "../../components/Skill/StraightItem/StraightItem";
import CircularSkill from "../../components/Skill/CircularItem/CircularItem";

const Resume = ({ resume: { experience, skills } }) => {
	return (
		<div className="box">
			<div className="pb-2">
				<h1 className="title title--h1 title__separate">Resume</h1>
			</div>
			<Row>
				<Col lg={12}>
					<h2 className="title title--h3">
						<BsFillBriefcaseFill /> Experience
					</h2>
					<Timeline timeline={experience} />
				</Col>
				<Col lg={12}>
					<h2 className="title title--h3">
						<ImCog /> Skill metrics
					</h2>
					<div className="box box__border box__flex">
						{skills.map((skill, index) => (
							<CircularSkill key={index} skill={skill} />
						))}
					</div>
					<div className="box box__border">
						{skills.map((skill, index) => (
							<StraightSkill key={index} skill={skill} />
						))}
					</div>
				</Col>
			</Row>
		</div>
	);
};

export default Resume;
