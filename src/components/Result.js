import React from 'react';

const Result = (props) => {
	return (
		<div className="u-full-width result">
			<h2>Results:</h2>
			<p>The Loan Amount: ${props.amount}</p>
			<p>Time to Repay: {props.term} months</p>
			<p>Total Payment: ${props.total}</p>
			<p>Monthly Payment: ${(props.total / props.term).toFixed(2)}</p>
		</div>
	);
};

export default Result;
