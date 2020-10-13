import React from "react";
import { ProgressBar } from "react-bootstrap";
import AnimatedProgressProvider from "../AnimatedProgressProvider";
import "./StraightItem.scss";

const getProgressBarLabel = (skill, percent) => {
	return (
		<div className="progress-text">
			<span>{skill}</span>
			<span>{`${percent} %`}</span>
		</div>
	);
};

const StraightItem = ({ skill: { name, value } }) => {
	return (
		<div className="skill-item">
			<img src={require(`../../../assets/images/${name}.svg`)} alt={name} />
			<AnimatedProgressProvider valueStart={0} valueEnd={value} duration={1.2}>
				{(value) => <ProgressBar animated now={value} label={getProgressBarLabel(name, value)} />}
			</AnimatedProgressProvider>
		</div>
	);
};

export default StraightItem;
