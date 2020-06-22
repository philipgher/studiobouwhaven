import React from 'react';
import { Root, Routes } from 'react-static';
import { Link, Router } from 'components/Router';
import './app.css';

const App = () => {
	console.log('rerender');

	if (document) {
		document.body.style.setProperty('--inner-viewport', document.body.clientWidth);
	}

	return (
		<Root>
			<nav>
				<Link to='/'>{'Home'}</Link>
				<Link to='/work'>{'Work'}</Link>
				<Link to='/contact'>{'Contact'}</Link>
			</nav>
			<React.Suspense fallback={<em>{'Loading...'}</em>}>
				<Router>
					<Routes path='*' />
				</Router>
			</React.Suspense>
		</Root>
	);
};

export default App;
