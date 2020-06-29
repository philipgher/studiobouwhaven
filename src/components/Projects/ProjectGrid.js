import React from 'react';
import { Link } from 'components/Router';
import Masonry from 'react-masonry-css';
import getProductNameLink from '../../utils/getProductNameLink';

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
					to={getProductNameLink(project.title)}
					key={project.title}
				>
					<div className='project-list-tile'>
						<img src={project.images[0].src} alt={project.images[0].alt} />
						<div className='project-title-container'>
							<h3 className='project-title'>
								{project.title}
							</h3>
						</div>
					</div>
				</Link>
			))}
		</Masonry>
	);
};

export default ProjectGrid;
