import React from "react";
import "./Avatar.scss";

const Avatar = () => {
	return (
		<div className="header__avatar">
			<img src={require("../../assets/images/avatar.jpg")} alt="avatar" />
		</div>
	);
};

export default Avatar;
