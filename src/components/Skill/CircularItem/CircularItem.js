import React from "react";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import AnimatedProgressProvider from "../AnimatedProgressProvider";
import "./CircularItem.scss";

function CircularItem({ skill: { name, value, url, color } }) {
	return (
		<a className="circular-skill" href={url} target="_blank" rel="noopener noreferrer">
			<div className="icon">
				<AnimatedProgressProvider valueStart={0} valueEnd={value} duration={1.2}>
					{(value) => (
						<CircularProgressbar
							value={value}
							strokeWidth={8}
							styles={buildStyles({ strokeLinecap: "butt", pathColor: color, pathTransition: "none" })}
						/>
					)}
				</AnimatedProgressProvider>
				<img src={require(`../../../assets/images/${name}.svg`)} alt={name} />
				<span>{value}%</span>
			</div>
			<span>{name}</span>
		</a>
	);
}

export default CircularItem;
