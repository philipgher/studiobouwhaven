import React from 'react';
import { useRouteData } from 'react-static';

const ProjectContainer = () => {
	const { project } = useRouteData();

	return (
		<div>
			<h3>{project.title}</h3>
			<p>{project.description}</p>
		</div>
	);
};

export default ProjectContainer;
