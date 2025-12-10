import { ProjectsContent } from '@/content/ProjectsContent';
import Image from 'next/image';
import Link from 'next/link';

export async function generateStaticParams() {
  return ProjectsContent.map((project) => ({
    slug: project.slug,
  }))
}

export default async function Page({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = await params;

  const thisProject = ProjectsContent.find(projectInAll => slug === projectInAll.slug);

  let prevProjectIndex = ProjectsContent.findIndex(projectInAll => slug === projectInAll.slug) - 1;

  if (prevProjectIndex < 0) {
    prevProjectIndex = ProjectsContent.length - 1;
  }

  let nextProjectIndex = ProjectsContent.findIndex(projectInAll => slug === projectInAll.slug) + 1;

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
        <Image
          key={image.alt}
          className='project-page-image'
          src={image.src}
          alt={image.alt}
          fill
        />
      ))}
      <div className='other-projects-wrapper'>
        <Link href={ProjectsContent[prevProjectIndex].slug}>
          <p>{'Vorig project'}</p>
          <h3>{ProjectsContent[prevProjectIndex].title}</h3>
        </Link>
        <Link href={ProjectsContent[nextProjectIndex].slug}>
          <p>{'Volgend project'}</p>
          <h3>{ProjectsContent[nextProjectIndex].title}</h3>
        </Link>
      </div>
    </div>
  );
};
