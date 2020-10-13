import React from "react";
import { NavLink } from "react-router-dom";
import { FaRegUser, FaRegFileAlt, FaCube, FaAddressBook } from "react-icons/fa";
import "./SideNav.scss";

const NavItem = ({ label, icon }) => {
	return (
		<li className="nav__item">
			<NavLink to={`/${label}`}>
				{icon}
				{label}
			</NavLink>
		</li>
	);
};

const SideNav = () => {
	return (
		<div className="sidebar box">
			<ul className="nav">
				<NavItem label="about" icon={<FaRegUser />} />
				<NavItem label="resume" icon={<FaRegFileAlt />} />
				<NavItem label="projects" icon={<FaCube />} />
				<NavItem label="contact" icon={<FaAddressBook />} />
			</ul>
		</div>
	);
};

export default SideNav;
