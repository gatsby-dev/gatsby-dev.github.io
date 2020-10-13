import React from "react";
import "./Timeline.scss";

const renderTimelineItem = (timeline) => {
	return timeline.map((item, index) => {
		return (
			<article key={index} className="timeline__item">
				<h5 className="title title--h5 timeline__title">{item.place}</h5>
				<span className="timeline__period">{item.timeline}</span>
				<p className="timeline__description">{item.description}</p>
			</article>
		);
	});
};

const Timeline = (props) => {
	return <div className="timeline">{renderTimelineItem(props.timeline)}</div>;
};

export default Timeline;
