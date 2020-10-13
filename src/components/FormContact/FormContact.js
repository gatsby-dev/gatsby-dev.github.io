import React from "react";
import { Button, Col, Form } from "react-bootstrap";
import { FaPaperPlane, FaCheckCircle, FaExclamationCircle } from "react-icons/fa";
import "./FormContact.scss";

const setError = (input, message) => {
	const formGroup = input.parentElement;
	const errorMessage = formGroup.querySelector(".errorMessage");
	errorMessage.innerText = message;
	errorMessage.style.display = "";
	formGroup.classList.remove("success");
	formGroup.classList.add("error");
};

const setSuccess = (input) => {
	const formGroup = input.parentElement;
	formGroup.classList.remove("error");
	formGroup.classList.add("success");
};

const isValidEmail = (email) => {
	// eslint-disable-next-line
	return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(
		email
	);
};

const checkInput = () => {
	let nameContact = document.getElementById("nameContact"),
		emailContact = document.getElementById("emailContact"),
		messageContact = document.getElementById("messageContact"),
		check = false;

	if (!nameContact.value.trim()) {
		check = false;
		setError(nameContact, "Please enter your name");
	} else {
		check = true;
		setSuccess(nameContact);
	}

	if (!emailContact.value.trim()) {
		check = false;
		setError(emailContact, "Please enter your email");
	} else if (!isValidEmail(emailContact.value.trim())) {
		check = false;
		setError(emailContact, "Email is not valid");
	} else {
		check = true;
		setSuccess(emailContact);
	}

	if (!messageContact.value.trim()) {
		check = false;
		setError(messageContact, "Please enter your message");
	} else {
		check = true;
		setSuccess(messageContact);
	}
	return check;
};

const handleSubmit = (event) => {
	event.preventDefault();
	if (checkInput()) {
		document.querySelector(".alertMessage").innerHTML = "Sorry, we haven't completed this feature yet :( ";
	}
};

const FormContact = () => {
	return (
		<Form className="contact-form" noValidate onSubmit={handleSubmit}>
			<Form.Row>
				<Form.Group as={Col} md={6}>
					<Form.Control type="text" id="nameContact" name="nameContact" placeholder="Full name" required />
					<FaCheckCircle className="check-circle" />
					<FaExclamationCircle className="exclamation-circle" />
					<small className="errorMessage"></small>
				</Form.Group>
				<Form.Group as={Col} md={6}>
					<Form.Control type="email" id="emailContact" name="emailContact" placeholder="Email address" required />
					<FaCheckCircle className="check-circle" />
					<FaExclamationCircle className="exclamation-circle" />
					<small className="errorMessage"></small>
				</Form.Group>
				<Form.Group as={Col} md={12}>
					<Form.Control as="textarea" id="messageContact" name="messageContact" rows="4" placeholder="Your message" required />
					<FaCheckCircle className="check-circle" />
					<FaExclamationCircle className="exclamation-circle" />
					<small className="errorMessage"></small>
				</Form.Group>
			</Form.Row>
			<Form.Row>
				<Col md={{ span: 6, offset: 6 }} className="text-right">
					<Button type="submit">
						<FaPaperPlane /> Send message
					</Button>
				</Col>
				<Col md={12}>
					<span className="alertMessage"></span>
				</Col>
			</Form.Row>
		</Form>
	);
};

export default FormContact;
