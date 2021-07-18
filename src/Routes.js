import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import App from "./App";
import Form from "./components/Form/Form";

const Routes = () => {
	return (
		<BrowserRouter>
			<Switch>
				<Route exact path="/" component={App} />
				<Route exact path="/pizza" component={Form} />
			</Switch>
		</BrowserRouter>
	);
};

export default Routes;
