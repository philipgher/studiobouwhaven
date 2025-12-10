'use client';
import Image from 'next/image';
import Link from 'next/link';

const ProjectGrid = ({ projects }) => {
	return (
		<div
			className='project-list'
		>
			{projects.map((project) => (
				<Link
					href={`project/${project.slug}`}
					key={project.title}
				>
					<div
						className='project-list-tile'
					>
						<Image
							className='project-list-tile-image'
							src={project.images[0].src}
							alt={project.images[0].alt}
							fill
						/>
						<div className='project-title-container'>
							<h3 className='project-title'>
								{project.title}
							</h3>
						</div>
					</div>
				</Link>
			))}
		</div>
	);
};

export default ProjectGrid;
