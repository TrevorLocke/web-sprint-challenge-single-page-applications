import React from "react";

const Form = () => {
	return (
		<div>
			<form action="" id="pizza-form">
				<div>
					<h1>Build Your Own Pizza</h1>
				</div>
				<div>
					<label htmlFor="name">
						<h2>Name:</h2>
						<p>
							<bold>Required</bold>
						</p>
						<input type="text" name="name" id="name-input" />
					</label>
				</div>
				<div>
					<label htmlFor="sauce">
						<h2>Choice of Sauce:</h2>
						<p>
							<bold>Required</bold>
						</p>
						<input type="radio" value="original" name="sauce" /> Original Red
						<input type="radio" value="garlic" name="sauce" /> Garlic Ranch
						<input type="radio" value="bbq" name="sauce" /> BBQ Sauce
						<input type="radio" value="spinach" name="sauce" /> Spinach Alfredo
					</label>
				</div>
				<div>
					<label htmlFor="size">
						<h2>Choose a size:</h2>
						<p>
							<bold>Required</bold>
						</p>
						<select name="size-options" id="size-dropdown">
							<option value="">--Choose Option--</option>
							<option value="small">Small</option>
							<option value="medium">Medium</option>
							<option value="Large">Large</option>
						</select>
					</label>
				</div>
				<div>
					<label htmlFor="toppings">
						<h2>Add Toppings</h2>
						<p>
							<bold>Choose Up to 10</bold>
						</p>
						<input type="checkbox" value="pepperoni" /> pepperoni
						<input type="checkbox" value="sausage" /> sausage
						<input type="checkbox" value="cda bacon" /> canadian bacon
						<input type="checkbox" value="spicy italian sausage" /> spicy
						italian sausage
						<input type="checkbox" value="grilled chicken" /> grilled chicken
						<input type="checkbox" value="onions" /> onions
						<input type="checkbox" value="green pepper" /> green pepper
						<input type="checkbox" value="diced tomatoes" /> diced tomatoes
						<input type="checkbox" value="black olives" /> black olives
						<input type="checkbox" value="roasted garlic" /> roasted garlic
						<input type="checkbox" value="artichoke hearts" /> artichoke hearts
						<input type="checkbox" value="three cheese" /> three cheese
						<input type="checkbox" value="pineapple" /> pineapple
						<input type="checkbox" value="extra cheese" /> extra cheese
					</label>
				</div>
				<div>
					<label htmlFor="gluten-free">
						<h2>Choice of Substitute</h2>
						<p>
							<bold>Choose up to 1</bold>
						</p>
						<input type="checkbox" value="gluten free" /> "Gluten Free Crust (+
						$1.00)"
					</label>
				</div>
				<div>
					<label htmlFor="special-instructions">
						<h2>Special Instructions</h2>
						<input
							type="text"
							id="special-text"
							placeholder="Anything else you'd like to add?"
						/>
					</label>
				</div>
				<button type="submit" id="order-button">
					{" "}
					Add to Order
				</button>
			</form>
		</div>
	);
};

export default Form;
