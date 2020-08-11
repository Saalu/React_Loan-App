import React, { Component } from 'react';

class Form extends Component {
	state = { amount: '', term: '' };

	handleChange = (e) => {
		this.setState({ [e.target.name]: Number(e.target.value) });
	};

	handleSubmit = (e) => {
		e.preventDefault();
		const { amount, term } = this.state;

		this.props.loanInformation(amount, term);
	};

	validateForm = () => {
		const { amount, term } = this.state;
		const notValid = !amount || !term;

		return notValid;
	};

	render() {
		const { amount } = this.state;
		return (
			<form onSubmit={this.handleSubmit}>
				<div className="row">
					<label>Amount </label>
					<input
						onChange={this.handleChange}
						id="name"
						name="amount"
						className="u-full-width"
						type="number"
						placeholder="Eg:3000"
					/>
				</div>
				<div className="row">
					<label>Months to Repay</label>
					<select onChange={this.handleChange} name="term" className="u-full-width">
						<option value="">Select</option>
						<option value="3">3 Months</option>
						<option value="6">6 Months</option>
						<option value="12">12 Months</option>
						<option value="24">24 Months</option>
					</select>
				</div>
				<div>
					<input
						disabled={this.validateForm()}
						type="submit"
						value="Calculate"
						className="button-primary u-full-width"
					/>
				</div>
			</form>
		);
	}
}

export default Form;
