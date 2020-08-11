import React from 'react';
import '../spinner.css';
import '../spinner.gif';
const Spinner = () => {
	return (
		<div className="u-full-width messages">
			<div className="spinner">
				<div className="sk-chase">
					<div className="sk-chase-dot" />
					<div className="sk-chase-dot" />
					<div className="sk-chase-dot" />
					<div className="sk-chase-dot" />
					<div className="sk-chase-dot" />
					<div className="sk-chase-dot" />
				</div>
			</div>
		</div>
	);
};

export default Spinner;
