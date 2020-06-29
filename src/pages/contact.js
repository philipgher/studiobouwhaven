import React from 'react';

const Contact = () => (
	<div className='contact-page-container'>
		<div>
			<h3>{'Adres'}</h3>
			<p>{'Wilgenbos 20'}</p>
			<p>{'3311 JX  Dordrecht'}</p>
			<br />
			<h3>{'Directeur'}</h3>
			<p>{'Ruud Ghering'}</p>
			<p>{'ruud@studiobouwhaven.nl'}</p>
			<p>{'+31 6 53638631'}</p>
			<br />
			<h3>{'Projectleider'}</h3>
			<p>{'Carlo Mijnders'}</p>
			<p>{'carlo@studiobouwhaven.nl'}</p>
			<p>{'+31 6 24253973'}</p>
			<br />
		</div>
		<iframe
			title='google map wilgenbos 20'
			src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d187765.9975979125!2d4.4920404331262835!3d51.80508875958671!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47c42eda883ce111%3A0x914a8872b3db9ca7!2sWilgenbos%2020%2C%203311%20JX%20Dordrecht!5e0!3m2!1sen!2snl!4v1593459613190!5m2!1sen!2snl'
			width='600'
			height='450'
			frameborder='0'
			allowfullscreen=''
			aria-hidden='false'
			tabindex='0'>
		</iframe>
	</div>
);

export default Contact;
