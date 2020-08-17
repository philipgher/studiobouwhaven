import React from 'react';
import { useRouteData } from 'react-static';
import { ProjectsContent } from '../content/ProjectsContent';

const ProjectContainer = () => {
	const { project } = useRouteData();

	const thisProject = ProjectsContent.find(projectInAll => project.title === projectInAll.title);

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
		</div>
	);
};

export default ProjectContainer;
