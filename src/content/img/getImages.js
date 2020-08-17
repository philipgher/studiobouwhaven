const fs = require('fs');

const baseDir = 'Projects/';
const projectsDir = fs.readdirSync(baseDir);

const formatImageName = (image) => image.replace(/ /g, '').replace(/-/g, '').split('.')[0];

projectsDir.forEach(projectFolder => {
	const imagesInProject = fs.readdirSync(baseDir + projectFolder);

	imagesInProject.forEach(image => {
		/* eslint-disable indent */
		console.log(`import ${formatImageName(image)} from './img/Projects/${projectFolder}/${image}';`);
	});
});

projectsDir.forEach(projectFolder => {
	const imagesInProject = fs.readdirSync(baseDir + projectFolder);

	console.log('images: [');

	imagesInProject.forEach(image => {
		console.log(
`{
	src: ${formatImageName(image)},
	alt: '${projectFolder}',
},`
			);
		});

		console.log('],');
	});
