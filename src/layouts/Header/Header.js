import React, { Component } from "react";
import "./Header.scss"
import { FaBirthdayCake, FaGithub, FaLinkedin, FaMobileAlt, FaMapMarkerAlt } from "react-icons/fa";
import { SiGmail } from "react-icons/si";
import Avatar from "../../components/Avatar/Avatar";

class Header extends Component {
	render() {
		const {
			information: { avatar, fullName, apply, github, linkedin, dateOfBirth, gmail, location, phoneNumber },
		} = this.props;

		return (
			<header className="header box">
				<div className="header__left">
					<Avatar url={avatar} />
					<div className="header__base-info">
						<h4>{fullName}</h4>
						<div className="status">{apply}</div>
						<ul className="header__social">
							<li>
								<a href="https://github.com/gatsby-dev" target="_blank" rel="noopener noreferrer">
									<FaGithub color="#24292e" />
									{github}
								</a>
							</li>
							<li>
								<a href="https://www.linkedin.com/in/tai-minh-99b784199/" target="_blank" rel="noopener noreferrer">
									<FaLinkedin color="#0077b5" />
									{linkedin}
								</a>
							</li>
						</ul>
					</div>
				</div>
				<div className="header__right">
					<ul className="header__contact">
						<li>
							<span className="overhead">
								<SiGmail color="#f14336" /> Email
							</span>
							<a href={`mailto:${gmail}`}>{gmail}</a>
						</li>
						<li>
							<span className="overhead">
								<FaMobileAlt color="#3b4b5e" /> Phone
							</span>
							<a href={`tel:${phoneNumber}`}>{phoneNumber}</a>
						</li>
					</ul>
					<ul className="header__contact">
						<li>
							<span className="overhead">
								<FaBirthdayCake color="#f783ac" /> D.O.B
							</span>
							{dateOfBirth}
						</li>
						<li>
							<span className="overhead">
								<FaMapMarkerAlt color="#ed4c5a" /> Location
							</span>
							{location}
						</li>
					</ul>
				</div>
			</header>
		);
	}
}

export default Header;
