import getAltForImage from '../utils/getAltForImage';

export const heroSlides = [
	{
		title: 'Studio Bouwhaven',
		tagline: 'Bouwkundig adviesbureau met total engineering aanpak. Alle adviesdiensten voor het begeleiden van uw bouwproject in één hand.',
		image: 'source',
		alignment: 'primary',
	},
	{
		title: 'Studio Bouwhaven levert het totaalpakket',
		tagline: '',
		image: 'source',
		alignment: 'secondary',
	},
	{
		title: 'Zo veel mogelijk waarde toevoegen aan de leefomgeving van de mens is ons doel.',
		tagline: '',
		image: 'source',
		alignment: 'secondary',
	},
];

heroSlides.forEach((hero) => {
	hero.alt = getAltForImage(hero.image);
});

export const USPs = [
	{
		title: 'Onze uitgangspunten',
		body: 'Bouwen is een maatschappelijk relevante en verantwoordelijke activiteit. Het draagt in belangrijke mate bij aan de kwaliteit van het woon- werk- en leefklimaat van mensen.',
		image: 'source',
	},
	{
		title: 'Aanpak',
		body: 'Wij vormen één aanspreekpunt, hanteren één contract en één prijs. Wij vormen samen met de architect de brug tussen alle externe partijen en de klant. Studio Bouwhaven levert het totaalpakket.',
		image: 'source',
	},
	{
		title: 'Werkzaamheden',
		body: 'Consultancy, het geven van bouwadvies. Management van het proces, kosten en directie. En engineering, bestaande uit tekenwerk, calculatie, bestekken en rapportages.',
		image: 'source',
	},
];

USPs.forEach((usp) => {
	usp.alt = getAltForImage(usp.image);
});