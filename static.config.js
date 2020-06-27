import path from 'path';
import { ProjectsContent } from './src/content/ProjectsContent';
import formatProjectName from './src/utils/formatProjectName';

export default {
	getRoutes: () => {
		return ProjectsContent.map(project => ({
			path: `/project/${formatProjectName(project.title)}`,
			template: 'src/containers/ProjectContainer',
			getData: () => ({
				project,
			}),
		}));
	},
	plugins: [
		require.resolve('react-static-plugin-sass'),
		[
			require.resolve('react-static-plugin-source-filesystem'),
			{
				location: path.resolve('./src/pages'),
			},
		],
		require.resolve('react-static-plugin-reach-router'),
		require.resolve('react-static-plugin-sitemap'),
	],
};
