import React, { useEffect, useState } from "react";
import axios  from 'axios'
import * as yup from 'yup'



const Form = () => {

	let schema = yup.object().shape({
		name: yup.string().required('name must be at least 2 characters').min(2, 'name must be at least 2 characters'),
		size: yup.number().nullable().required('Please select a size')
		
	})

	const [order, setOrder] = useState([]);
	const [formState, setFormState] = useState({
		name: "",
		sauce: "",
		size: "",
		toppings: "",
		gluten: "",
		specialText: "",
	})

	const [errors, setErrors] = useState({
		name: "",
		sauce: "",
		size: "",
		toppings: "",
		gluten: "",
		specialText: "",
	})

	

	const [isButtonDisabled, setIsButtonDisabled] = useState(true)

	// useEffect(() => {
	// 	schema.isValid(formState).then((valid) => {
	// 		setIsButtonDisabled(!valid);
	// 	})
	// }, [])

	const handleSubmit = (e) => {
		e.preventDefault();
		axios
			.post("https://reqres.in/api/orders", formState)
			.then((response) => {
				setOrder(response.data);
				setFormState({
					name: "",
					sauce: "",
					size: "",
					toppings: "",
					gluten: "",
					specialText: "",
				})
			})
	}

	const handleChange = (e) => {
		e.persist();
		const newForm = {
			...formState,
			[e.target.name]:
			e.target.type === "checkbox" ? e.target.checked : e.target.value
		}
		validateChange(e);
		setFormState(newForm);
		console.log('formState :>> ', formState);
		
	}

	const validateChange = (e) => {
		yup
			.reach(schema, e.target.name)
			.validate(e.target.value)
			.then((valid) => {
				setErrors({ ...errors, [e.target.name]: "" });
			})
			.catch((err) => {
				setErrors({ ...errors, [e.target.name]: err.errors[0] });
			});

		console.log("errors :>> ", errors);
	}


	return (
		<div>
			<div>
				<h1>Build Your Own Pizza</h1>
			</div>
			<form action="" onSubmit={handleSubmit} id='pizza-form'>
				
				<div>
					<label htmlFor="name">
						<h2>Name:</h2>
						<p>
							<bold>Required</bold>
						</p>v  
						<input type="text" name="name" id="name-input" value={formState.name} onChange={handleChange}/>
						{errors.name.length > 0 ? <p className="error">{errors.name}</p> : null}
					</label>
				</div>
				<div>
					<label htmlFor="sauce">
						<h2>Choice of Sauce:</h2>
						<p>
							<bold>Required</bold>
						</p>
						<input type="radio" value="original" name="sauce" onChange={handleChange} /> Original Red
						<input type="radio" value="garlic" name="sauce" onChange={handleChange} /> Garlic Ranch
						<input type="radio" value="bbq" name="sauce" onChange={handleChange} /> BBQ Sauce
						<input type="radio" value="spinach" name="sauce" onChange={handleChange} /> Spinach Alfredo
						{errors.sauce.length > 0 ? <p className="error">{errors.sauce}</p> : null}
					</label>
				</div>
				<div>
					<label htmlFor="size">
						<h2>Choose a size:</h2>
						<p>
							<bold>Required</bold>
						</p>
						<select name="size-options" id="size-dropdown">
							<option value={null}>--Choose Option--</option>
							<option value={1} onChange={handleChange}>Small</option>
							<option value={2} onChange={handleChange}>Medium</option>
							<option value={3} onChange={handleChange}>Large</option>
						</select>
						{errors.size.length > 0 ? <p className="error">{errors.size}</p> : null}
					</label>
				</div>
				<div>
					<label htmlFor="toppings">
						<h2>Add Toppings</h2>
						<p>
							<bold>Choose Up to 10</bold>
						</p>
						<input type="checkbox" value="pepperoni" onChange={handleChange} /> pepperoni
						<input type="checkbox" value="sausage" onChange={handleChange} /> sausage
						<input type="checkbox" value="cda bacon" onChange={handleChange} /> canadian bacon
						<input type="checkbox" value="spicy italian sausage" onChange={handleChange} /> spicy
						italian sausage
						<input type="checkbox" value="grilled chicken" onChange={handleChange} /> grilled chicken
						<input type="checkbox" value="onions" onChange={handleChange} /> onions
						<input type="checkbox" value="green pepper" onChange={handleChange} /> green pepper
						<input type="checkbox" value="diced tomatoes" onChange={handleChange} /> diced tomatoes
						<input type="checkbox" value="black olives" onChange={handleChange} /> black olives
						<input type="checkbox" value="roasted garlic" onChange={handleChange} /> roasted garlic
						<input type="checkbox" value="artichoke hearts" onChange={handleChange} /> artichoke hearts
						<input type="checkbox" value="three cheese" onChange={handleChange} /> three cheese
						<input type="checkbox" value="pineapple" onChange={handleChange} /> pineapple
						<input type="checkbox" value="extra cheese" onChange={handleChange} /> extra cheese
					</label>
				</div>
				<div>
					<label htmlFor="gluten-free">
						<h2>Choice of Substitute</h2>
						<p>
							<bold>Choose up to 1</bold>
						</p>
						<input type="checkbox" value="gluten free" onChange={handleChange} /> "Gluten Free Crust (+
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
							name="specialText"
							onChange={handleChange}
							value={formState.specialText}
						/>
					</label>
				</div>
				<button 
				type="submit" 
				id="order-button" 
				name="submit" 
				onChange={handleChange} 
				disabled={isButtonDisabled}
				>
					{" "}
					Add to Order!
				</button>

				<pre>{JSON.stringify(order, null, 2)}</pre>
			</form>
		</div>
	);
};

export default Form;
