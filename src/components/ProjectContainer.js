import React from 'react';
import { Link } from './Router';
import { useRouteData } from 'react-static';
import { ProjectsContent } from '../content/ProjectsContent';
import getProductNameLink from '../utils/getProductNameLink';

const ProjectContainer = () => {
	const { project } = useRouteData();

	const thisProject = ProjectsContent.find(projectInAll => project.title === projectInAll.title);

	let prevProjectIndex = ProjectsContent.findIndex(projectInAll => project.title === projectInAll.title) - 1;

	if (prevProjectIndex < 0) {
		prevProjectIndex = ProjectsContent.length - 1;
	}

	let nextProjectIndex = ProjectsContent.findIndex(projectInAll => project.title === projectInAll.title) + 1;

	if (nextProjectIndex > ProjectsContent.length - 1) {
		nextProjectIndex = 0;
	}

	const createMarkup = () => ({
		__html: thisProject.description,
	});

	return (
		<div className='project-page-container'>
			<h3>{thisProject.title}</h3>
			<p dangerouslySetInnerHTML={createMarkup()} />
			{thisProject.images.map(image => (
				<img
					key={image.src}
					className='project-page-image'
					src={image.src}
					alt={image.alt}
				/>
			))}
			<div className='other-projects-wrapper'>
				<Link to={getProductNameLink(ProjectsContent[prevProjectIndex].title)}>
					<p>{'Vorig project'}</p>
					<h3>{ProjectsContent[prevProjectIndex].title}</h3>
				</Link>
				<Link to={getProductNameLink(ProjectsContent[nextProjectIndex].title)}>
					<p>{'Volgend project'}</p>
					<h3>{ProjectsContent[nextProjectIndex].title}</h3>
				</Link>
			</div>
		</div>
	);
};

export default ProjectContainer;
