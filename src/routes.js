import React from "react";
import { Redirect } from "react-router-dom";
import Resume from "./views/Resume/Resume";
import About from "./views/About/About";
import Projects from "./views/Projects/Projects";
import Contact from "./views/Contact/Contact";
import profile from "./mock/profile.json";

const { about, resume, projects } = profile;
const routes = [
	{
		path: "/",
		exact: true,
		main: () => <Redirect push to="/about" />,
	},
	{
		path: "/about",
		main: () => <About about={about} />,
	},
	{
		path: "/resume",
		main: () => <Resume resume={resume} />,
	},
	{
		path: "/projects",
		main: () => <Projects projects={projects} />,
	},
	{
		path: "/contact",
		main: () => <Contact />,
	},
];

export default routes;
