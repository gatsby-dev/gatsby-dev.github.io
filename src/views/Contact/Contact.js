import React from "react";
import { FaMapMarkerAlt, FaEnvelope } from "react-icons/fa";
import FormContact from "../../components/FormContact/FormContact";
import "./Contact.scss";

const Contact = () => {
	return (
		<div className="box">
			<div className="pb-2">
				<h1 className="title title--h1 title__separate">Contact</h1>
			</div>
			<h2 className="title title--h3">
				<FaMapMarkerAlt /> Location
			</h2>
			<div className="map">
				<iframe
					title="location"
					src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3918.6218579916576!2d106.62789441462316!3d10.840222992278266!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31752980911b2353%3A0x384234a4a5afc812!2zMTEyIMSQxrDhu51uZyBOZ3V54buFbiBWxINuIFF1w6EsIMSQw7RuZyBIxrBuZyBUaHXhuq1uLCBRdeG6rW4gMTIsIFRow6BuaCBwaOG7kSBI4buTIENow60gTWluaCwgVmnhu4d0IE5hbQ!5e0!3m2!1svi!2s!4v1600164615566!5m2!1svi!2s"
					frameBorder={0}
					style={{ border: 0 }}
					allowFullScreen
					aria-hidden="false"
					tabIndex={0}
				/>
			</div>
			<h2 className="title title--h3">
				<FaEnvelope /> Contact Form
			</h2>
			<FormContact />
		</div>
	);
};

export default Contact;
