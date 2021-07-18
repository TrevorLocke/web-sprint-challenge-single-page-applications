import React from "react";
import { useHistory } from "react-router-dom";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Form from "./components/Form/Form";


const App = () => {
  const history = useHistory();

	const handleClick = () => {
		history.push("/pizza");
	};
  return (
		<>
			<button id="order-pizza" onClick={handleClick}>
				Order Now
			</button>

			<BrowserRouter>
				<Switch>
					<Route exact path="/" component={App} />
					<Route exact path="/pizza" component={Form} />
				</Switch>
			</BrowserRouter>
		</>
	);
};                        
export default App;
