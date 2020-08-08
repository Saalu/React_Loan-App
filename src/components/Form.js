import React, { Component } from 'react';

class Form extends Component {
	render() {
		return (
			<form>
				<div className="row">
					<label>Amount</label>
					<input name="amount" class="u-full-width" type="number" placeholder="Eg:3000" />
				</div>
			</form>
		);
	}
}

export default Form;
