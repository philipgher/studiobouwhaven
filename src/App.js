import React from 'react';
import { Root, Routes } from 'react-static';
import { Link, Router } from 'components/Router';
import './app.scss';
import logo from './content/img/studio bouwhaven.png';
import ScrollToTop from './components/ScrollToTop';
import Footer from './components/Footer';

const App = () => {
	if (typeof document !== 'undefined') {
		document.body.style.setProperty('--inner-viewport', `${document.body.scrollWidth}px`);
	}

	return (
		<Root>
			<ScrollToTop />
			<div className='nav-container'>
				<nav>
					<Link className='nav-logo' to='/'>
						<img src={logo} alt='Studio Bouwhaven total engineering logo' />
					</Link>
					<div>
						<Link to='/contact'>{'Contact'}</Link>
					</div>
				</nav>
			</div>
			<React.Suspense fallback={<em>{'Loading...'}</em>}>
				<Router>
					<Routes path='*' />
				</Router>
			</React.Suspense>
			<Footer />
		</Root>
	);
};

export default App;
