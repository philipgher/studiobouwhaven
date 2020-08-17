import React from 'react';
import { Link } from 'components/Router';
import Masonry from 'react-masonry-css';
import getProductNameLink from '../../utils/getProductNameLink';

const ProjectGrid = ({ projects }) => {
	const amtColumns = typeof window !== 'undefined' ? window.screen.width < 670 ? 1 : 3 : 1;

	return (
		<Masonry
			className='project-list'
			columnClassName='project-list-column'
			breakpointCols={amtColumns}
		>
			{projects.map((project) => (
				<Link
					to={getProductNameLink(project.title)}
					key={project.title}
				>
					<div className='project-list-tile'>
						<img
							className='project-list-tile-image'
							src={project.images[0].src}
							alt={project.images[0].alt}
						/>
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
