import React from 'react';
import { Link } from 'components/Router';

export default () => (
	<div className='hero not-found'>
		<h3>{'Deze pagina is niet gevonden, wellicht is de pagina die u zocht verplaatst'}</h3>
		<Link to='/'>{'Ga naar de homepagina'}</Link>
	</div>
);
