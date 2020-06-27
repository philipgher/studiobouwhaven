import React from 'react';
import Masonry from 'react-masonry-css';

const ProjectGrid = ({ projects }) => {
	console.log('wft');

	return (
		<Masonry
			className='project-list'
			columnClassName='project-list-column'
			breakpointCols={3}
		>
			{projects.map((project) => (
				<div key={project.title} className='project-list-tile'>
					<img src={project.images[0].src} alt={project.images[0].alt} />
					<h3 className='project-title'>
						{project.title}
					</h3>
				</div>
			))}
		</Masonry>
	);
};

export default ProjectGrid;