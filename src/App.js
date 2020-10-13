import "./App.scss";
import React, { useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Header from "./layouts/Header/Header";
import SideNav from "./layouts/SideNav/SideNav";
import Footer from "./layouts/Footer/Footer";
import profile from "./mock/profile.json";
import routes from "./routes";

const App = () => {
	const [data] = useState(profile);
	return (
		<React.Fragment>
			<div className="header-image" />
			<Container className="gutter-top">
				<Header information={data.information} />
				<Router basename={process.env.PUBLIC_URL}>
					<Row as="main">
						<Col lg={2} as="aside">
							<SideNav />
						</Col>
						<Col lg={10}>
							<Switch>
								{routes.map((route, index) => (
									<Route key={index} path={route.path} exact={route.exact} children={route.main()} />
								))}
							</Switch>
						</Col>
					</Row>
				</Router>
				<Footer />
			</Container>
		</React.Fragment>
	);
};

export default App;
