import React, { Component } from 'react';
import './normalize.css';
import './skeleton.css';
import Form from './components/Form';
import Result from './components/Result';
import Message from './components/Message';
import Spinner from './components/Spinner';
import { calculateTotal } from './helper.js';
class App extends Component {
	state = {
		amount: '',
		term: '',
		total: '',
		loading: false
	};
	loanInformation = (amount, term) => {
		const total = calculateTotal(amount, term);

		this.setState(
			{
				loading: true
			},
			() => {
				setTimeout(() => {
					this.setState({
						amount,
						total,
						term,
						loading: false
					});
				}, 80000);
			}
		);
	};

	render() {
		const { amount, term, total, loading } = this.state;

		let component;
		//conditional render of results
		if (total === '' && !loading) {
			component = <Message />;
		} else if (loading) {
			component = <Spinner />;
		} //  else {
		// 	component = <Result amount={amount} term={term} total={total} />;
		// }
		return (
			<div>
				<h1>Loan Calculator</h1>
				<div className="container">
					<Form loanInformation={this.loanInformation} />

					<div className="messages">{component}</div>
				</div>
			</div>
		);
	}
}

export default App;
