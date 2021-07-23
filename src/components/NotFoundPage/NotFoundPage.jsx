import React from 'react';
import { Link } from 'react-router-dom';

export const NotFoundPage = () => {
	return (
		<div>
				<h1>Page not Found 404</h1>
				<Link to="/">Go to home</Link>
		</div>
	)
}
