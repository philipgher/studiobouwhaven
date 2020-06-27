import React from 'react';
import { Link } from 'components/Router';
import Masonry from 'react-masonry-css';
import formatProjectName from '../../utils/formatProjectName';

const ProjectGrid = ({ projects }) => {
	console.log();

	return (
		<Masonry
			className='project-list'
			columnClassName='project-list-column'
			breakpointCols={3}
		>
			{projects.map((project) => (
				<Link
					to={`project/${formatProjectName(project.title)}`}
					key={project.title}
					className='project-list-tile'
				>
					<img src={project.images[0].src} alt={project.images[0].alt} />
					<h3 className='project-title'>
						{project.title}
					</h3>
				</Link>
			))}
		</Masonry>
	);
};

export default ProjectGrid;
