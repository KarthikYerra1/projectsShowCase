import {ListItem, ProjectImage, ProjectName} from './styledComponents'

const ProjectItem = props => {
  const {details} = props
  const {name, imageUrl} = details

  return (
    <ListItem>
      <ProjectImage src={imageUrl} alt={name} />
      <ProjectName>{name}</ProjectName>
    </ListItem>
  )
}

export default ProjectItem
