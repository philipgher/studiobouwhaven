import { useEffect } from 'react';
import { useLocation } from '@reach/router';

const ScrollToTop = () => {
	const { pathname } = useLocation();

	useEffect(() => {
		if (window) {
			window.scrollTo(0, 0);
		}
	}, [pathname]);

	return null;
};

export default ScrollToTop;
