import React from "react";
import { Row } from "react-bootstrap";
import Card from "../../components/Card/Card";

const Projects = ({ projects }) => {
	return (
		<div className="box">
			<div className="pb-2">
				<h1 className="title title--h1 title__separate">Projects</h1>
			</div>
			<p>These are my small projects :</p>
			<Row className="gallery-grid">
				{projects.map((project, index) => (
					<Card key={index} project={project} />
				))}
			</Row>
		</div>
	);
};

export default Projects;
