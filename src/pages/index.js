import React, { useState, useEffect } from 'react';
import { heroSlides } from '../content/HomeContent';
import { USPs } from '../content/HomeContent';
import Projects from '../components/Projects/Projects';

const Home = () => {
	const [currentHeroIndex, setCurrentHero] = useState(0);

	useEffect(() => {
		const heroInterval = setTimeout(() => {
			setCurrentHero(currentHeroIndex === heroSlides.length - 1 ? 0 : currentHeroIndex + 1);
		}, 5000);

		return () => {
			clearTimeout(heroInterval);
		};
	}, [currentHeroIndex]);

	const currentHero = heroSlides[currentHeroIndex];

	return (
		<>
			<section className='hero'>
				<img className='hero-image' src={currentHero.image} alt={currentHero.alt} />
				<div className='hero-text'>
					<h1>{currentHero.title}</h1>
					<h2>{currentHero.tagline}</h2>
				</div>
			</section>
			<section className='usp-container'>
				{USPs.map(usp => (
					<div key={usp.title} className='usp'>
						<h3>{usp.title}</h3>
						<img className='usp-icon' src={usp.image} alt={usp.alt} />
						<p>{usp.body}</p>
					</div>
				))}
			</section>
			<Projects />
		</>
	);
};

export default Home;
