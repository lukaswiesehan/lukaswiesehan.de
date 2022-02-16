import {getProjects} from '@lib/content/work/get-projects'

import {Container} from '@components/container'
import {WorkHeadingSection} from '@components/sections/work-heading-section'
import {ProjectsSection} from '@components/sections/projects-section'

export const getStaticProps = () => {
  const projects = getProjects()

  return {props: {projects}}
}

export const Work = ({projects}) => {
  return (
    <Container
      title="Produktwebsites meiner Kunden - Lukas Wiesehan"
      description="Meine Kunden und ihre Produkte haben die unterschiedlichsten Anforderungen an eine Website. Schau' Dir anhand einiger Projekte an, wie individuell hierauf eingegangen wird."
    >
      <WorkHeadingSection />
      <ProjectsSection projects={projects} />
    </Container>
  )
}

export default Work
