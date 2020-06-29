import importAll from '../utils/importAll';
import getStringBetween from '../utils/getStringBetween';

export const ProjectCategories = {
	all: 'All',
	hotelsSportEnZorg: 'Hotels sport en zorg',
	utiliteitbouw: 'Utiliteitbouw',
	woningbouw: 'Woningbouw',
};

const getImagesForProject = importFunc => {
	if (!importFunc) {
		return null;
	}

	const imageSources = importAll(importFunc);

	return (imageSources.map(imageSource => ({
		src: imageSource,
		alt: getStringBetween(imageSource, '/static/', '.')
	})));
};

export const ProjectsContent = [
	{
		title: 'Villa Kogelhof',
		description: '',
		images: getImagesForProject(typeof document !== 'undefined' ? require.context('./img/Projects/Villa Kogelhof', false, /\.(png|jpe?g|svg)$/) : null),
		getImages: () => getImagesForProject(typeof document !== 'undefined' ? require.context('./img/Projects/Villa Kogelhof', false, /\.(png|jpe?g|svg)$/) : null),
		category: [ProjectCategories.woningbouw],
	},
	{
		title: 'OWC Noordwestcluster',
		description: 'Ector Hoogstad architecten heeft het ontwerp gemaakt voor de nieuwe onderwijscluster voor onderwijs en wetenschappen te Utrecht. Hierbij verzorgd Studio bouwhaven de kostenbegeleiding en technische ondersteuning bij de verschillende hoogwaardige maar tegelijk budget gevoelige onderdelen van het gebouw. Ook het bestaande Minnaert gebouw wordt geheel verbouwd en deels gerenoveerd.',
		images: getImagesForProject(typeof document !== 'undefined' ? require.context('./img/Projects/OWC Noordwestcluster', false, /\.(png|jpe?g|svg)$/) : null),
		category: [ProjectCategories.utiliteitbouw],
	},
	{
		title: 'Villa Augustus',
		description: '',
		images: getImagesForProject(typeof document !== 'undefined' ? require.context('./img/Projects/Villa Augustus', false, /\.(png|jpe?g|svg)$/) : null),
		category: [ProjectCategories.hotelsSportEnZorg],
	},
	{
		title: 'Koningshof Gouda',
		description: 'Voor het plan Koningshof te Gouda zijn 2 appartementenblokken en 6 rijen eengezinswoningen ontwikkeld. Blauwhoed heeft hiervoor een total engineering opdracht verstrekt waarin constructie installatie en geluid en brandadvies is opgenomen. Ook de budgettaire randvoorwaarden waren streng. Een uitgebreide zoektocht heeft uiteindelijk geleid tot een realistisch uitgangspunt voor de haalbaarheid . Momenteel zijn de werktekeningen geproduceerd en is de bouw gestart.',
		images: getImagesForProject(typeof document !== 'undefined' ? require.context('./img/Projects/Koningshof Gouda', false, /\.(png|jpe?g|svg)$/) : null),
		category: [ProjectCategories.woningbouw],
	},
	{
		title: 'Elektrokern Schuurman',
		description: 'Op basis van het schetsontwerp van de architect Bekkering Adams, is een investeringsraming gemaakt en is de exploitatie bekeken. De gewenste architectonische uitwerking is onder druk komen te staan evenals de financiële haalbaarheid. Ook is een ecologische traject met betonkern activering en bodemopslag systeem door Schuurman vastgesteld. Door optimalisatie van het ontwerp en de uitvoering van met name de constructie en de gevel is het project haalbaar gemaakt.<br />Taken: projectmanagement, de ontwerpbegeleiding en directievoering van het plan.',
		images: getImagesForProject(typeof document !== 'undefined' ? require.context('./img/Projects/Elektrokern Schuurman', false, /\.(png|jpe?g|svg)$/) : null),
		category: [ProjectCategories.utiliteitbouw],
	},
	{
		title: 'Spa hotel L’Europe',
		description: '',
		images: getImagesForProject(typeof document !== 'undefined' ? require.context('./img/Projects/Hotel LEurope', false, /\.(png|jpe?g|svg)$/) : null),
		category: [ProjectCategories.hotelsSportEnZorg],
	},
	{
		title: 'Gemengde toren Gouda Oost',
		description: 'Het stedenbouwkundig ontwerp voor het zuidelijk stempel west en het structuurontwerp voor de Springerslocatie vormen samen een stedelijke ruimte met twee torens en ‘actieve’ plinten aan weerszijden van een plein en aan het uiteinde van de groene ruimte van de Oversteek. Dit is het zoekgebied voor een aantal niet-woonprogramma’s, maar ook voor bijzondere woonvormen. Concreet wordt gekeken naar de inpassingsmogelijkheden van begeleid wonen. In de plint komt een medisch centrum en commerciële ruimten.',
		images: getImagesForProject(typeof document !== 'undefined' ? require.context('./img/Projects/Gemengde toren Gouda Oost', false, /\.(png|jpe?g|svg)$/) : null),
		category: [ProjectCategories.woningbouw],
	},
	{
		title: 'De Bolder',
		description: '',
		images: getImagesForProject(typeof document !== 'undefined' ? require.context('./img/Projects/De Bolder', false, /\.(png|jpe?g|svg)$/) : null),
		category: [ProjectCategories.utiliteitbouw],
	},
	{
		title: 'Clubhuis tennisvereniging IJburg',
		description: '',
		images: getImagesForProject(typeof document !== 'undefined' ? require.context('./img/Projects/Clubhuis tennisvereniging IJburg', false, /\.(png|jpe?g|svg)$/) : null),
		category: [ProjectCategories.utiliteitbouw],
	},
	{
		title: 'Land van Barendreght',
		description: 'Als ontwikkelend aannemer heeft Gebr. Blokland 221 woningen waarvan 91 appartementen ontwikkeld op de voormalige Haust hooimeier locatie in Barendrecht.<br />Het projectmanagement en sturing op de bouwsystemen en bouwkosten was de opdracht. Uiteindelijk is een zeer intensief overleg met de gemeente noodzakelijk geweest om alle s in goede banen te leiden. Met name faseringen ten gevolge van de crisis en overleg over d e de complete infrastructuur is zeer intensief geweest maar met succes afgerond.',
		images: getImagesForProject(typeof document !== 'undefined' ? require.context('./img/Projects/Land van Barendreght', false, /\.(png|jpe?g|svg)$/) : null),
		category: [ProjectCategories.woningbouw],
	},
	{
		title: 'Vredehofplein & bibliotheek Spijkenisse',
		description: 'In 2005 begonnen met de engineering van de bibliotheek te Spijkenisse. Architect is Winny Maas van MVRDV, gevestigd te Rotterdam. Het gebouw kenmerkt zich door de toepassing van een glazen schil op houten spanten. Tussen de houten spanten en de glazen schil zijn tal van voorzieningen opgenomen (zonwering / sprinkler / verwarming). De openbare gebieden van de bibliotheek worden in het geheel uitgevoerd in steenstrips (vloeren / plafonds / wanden / trappen). De boekenkasten worden uitgevoerd in KLP (gerecycled kunststof).<br />Samen met architect MVRDV is het ambitieuze plan voor de boekenberg en 40 appartementen op de parkeergarage in het centrum van Spijkenisse uitgewerkt. De opdracht behelsde de ontwerp en kostenbegeleiding en het maken van de bouwaanvraag, bestek en werktekeningen. Het project is inmiddels opgeleverd.',
		images: getImagesForProject(typeof document !== 'undefined' ? require.context('./img/Projects/Vredehofplein en bibliotheek Spijkenisse', false, /\.(png|jpe?g|svg)$/) : null),
		category: [ProjectCategories.woningbouw, ProjectCategories.utiliteitbouw],
	},
	{
		title: 'Clubhuis Rijswijkse Golfclub',
		description: 'Het nieuwe clubhuis van de Rijswijkse Golfclub is samen met architect Wolbrant van der Vlis ontworpen en in een total engineering constructie compleet uitgewerkt, aanbesteed en begeleid. De ambities van de golfclub stonden in grote spanning met de stedenbouwkundige randvoorwaarden. Toch is er een efficiënt, fraai en bijzonder clubhuis van gemaakt.',
		images: getImagesForProject(typeof document !== 'undefined' ? require.context('./img/Projects/Clubhuis Rijswijkse Golfclub', false, /\.(png|jpe?g|svg)$/) : null),
		category: [ProjectCategories.utiliteitbouw],
	},
	{
		title: 'MC de Grebbe',
		description: 'Samen met Grassodenridder architecten werkt Studio Bouwhaven aan het ontwerp en realisatie van het medisch centrum De Grebbe te Bergen op Zoom. Door Studiobouwhaven worden de volgende werkzaamheden verricht:<br />Bouwkundige , constructieve en installatietechnische engineering in alle fasen van het bouwproces, bouwkosten begeleiding en aanbesteding, alsmede de directievoering tijdens de uitvoering. Het gebouw is inmiddels naar tevredenheid van de opdrachtgevers opgeleverd.',
		images: getImagesForProject(typeof document !== 'undefined' ? require.context('./img/Projects/MC de Grebbe', false, /\.(png|jpe?g|svg)$/) : null),
		category: [ProjectCategories.hotelsSportEnZorg],
	},
	{
		title: 'Merlet college Cuijck',
		description: '',
		images: getImagesForProject(typeof document !== 'undefined' ? require.context('./img/Projects/Merlet college Cuijck', false, /\.(png|jpe?g|svg)$/) : null),
		category: [ProjectCategories.utiliteitbouw],
	},
	{
		title: 'Sociale werkplaats Haegheflor',
		description: 'De Haeghe groep heeft het voormalig kassencomplex van Valstar aan de Orberlaan in monster aangekocht om daar de nieuwe sociale werkplaats in te richten. Naast de verbouw en aanpassing van de kassen en de pootlijn moeten ook werkplaatsen, verwerkingsruimten en faciliteiten voor de medewerkers van Haeghe flor worden gemaakt. De bouw moet openbaar worden aanbesteed om te komen tot een design en build realisatie door een aannemer. Tevens is de planning bijzonder strak in verband met de oplevering van de oude locatie.<br />Taken: Ontwerp, TOTAL ENGINEERING met projectmanagement, kostenbegeleiding, ontwerp en bouwbegeleiding.',
		images: getImagesForProject(typeof document !== 'undefined' ? require.context('./img/Projects/Sociale werkplaats Haegheflor', false, /\.(png|jpe?g|svg)$/) : null),
		category: [ProjectCategories.hotelsSportEnZorg],
	},
	{
		title: 'Villa Bergen',
		description: '',
		images: getImagesForProject(typeof document !== 'undefined' ? require.context('./img/Projects/Villa Bergen', false, /\.(png|jpe?g|svg)$/) : null),
		category: [ProjectCategories.woningbouw],
	},
	{
		title: 'Baltic Tower - Poznan, Poland',
		description: '',
		images: getImagesForProject(typeof document !== 'undefined' ? require.context('./img/Projects/Baltic Tower - Poznan Poland', false, /\.(png|jpe?g|svg)$/) : null),
		category: [ProjectCategories.utiliteitbouw],
	},
];
