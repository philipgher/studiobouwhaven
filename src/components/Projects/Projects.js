import React, { useState } from 'react';
import ProjectGrid from './ProjectGrid';
import { ProjectsContent, ProjectCategories } from '../../content/ProjectsContent';

const Projects = () => {
	const [activeProjects, setActiveProjects] = useState(ProjectsContent);

	const handleClickCategory = category => {
		if (category === ProjectCategories.all) {
			setActiveProjects(ProjectsContent);

			return;
		}

		setActiveProjects(
			ProjectsContent.filter(project => project.category.includes(category))
		);
	};

	return (
		<section className='projects-container'>
			<h2>{'Onze projecten'}</h2>
			<div className='project-categories'>
				{Object.values(ProjectCategories).map(category => (
					<button
						key={category}
						onClick={() => handleClickCategory(category)}
					>
						<h4 className='project-category'>
							{category}
						</h4>
					</button>
				))}
			</div>
			<ProjectGrid projects={activeProjects} />
		</section>
	);
};

export default Projects;