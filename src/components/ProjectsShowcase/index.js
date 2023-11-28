import {Component} from 'react'

import Loader from 'react-loader-spinner'

import OptionItem from '../OptionItem'
import ProjectItem from '../ProjectItem'

import {
  AppContainer,
  HeaderContainer,
  LogoImage,
  ProjectsContainer,
  ProjectsTypeSelect,
  ProjectsListContainer,
  LoaderContainer,
  FailureContainer,
  FailureImage,
  FailureHeading,
  FailureDescription,
  RetryButton,
} from './styledComponents'

const categoriesList = [
  {id: 'ALL', displayText: 'All'},
  {id: 'STATIC', displayText: 'Static'},
  {id: 'RESPONSIVE', displayText: 'Responsive'},
  {id: 'DYNAMIC', displayText: 'Dynamic'},
  {id: 'REACT', displayText: 'React'},
]

const apiStatusConstants = {
  initial: 'INITIAL',
  success: 'SUCCESS',
  inProgress: 'IN_PROGRESS',
  failure: 'FAILURE',
}

class ProjectsShowcase extends Component {
  state = {
    projectsList: [],
    apiStatus: apiStatusConstants.initial,
    categoryId: categoriesList[0].id,
  }

  componentDidMount() {
    this.getAllProjects()
  }

  getAllProjects = async () => {
    this.setState({apiStatus: apiStatusConstants.inProgress})
    const {categoryId} = this.state

    const apiUrl = `https://apis.ccbp.in/ps/projects?category=${categoryId}`
    const options = {
      method: 'GET',
    }

    const response = await fetch(apiUrl, options)
    if (response.ok) {
      const data = await response.json()
      const formattedData = data.projects.map(each => ({
        id: each.id,
        name: each.name,
        imageUrl: each.image_url,
      }))
      this.setState({
        projectsList: formattedData,
        apiStatus: apiStatusConstants.success,
      })
    } else {
      this.setState({apiStatus: apiStatusConstants.failure})
    }
  }

  onChangeCategory = event => {
    this.setState({categoryId: event.target.value}, this.getAllProjects)
  }

  renderLoader = () => (
    <LoaderContainer>
      <div className="loader-container" data-testid="loader">
        <Loader type="ThreeDots" color="#328af2" height="50" width="50" />
      </div>
    </LoaderContainer>
  )

  renderProjectsList = projects => (
    <ProjectsListContainer>
      {projects.map(each => (
        <ProjectItem key={each.id} details={each} />
      ))}
    </ProjectsListContainer>
  )

  renderFailureView = () => (
    <FailureContainer>
      <FailureImage
        src="https://assets.ccbp.in/frontend/react-js/projects-showcase/failure-img.png"
        alt="failure view"
      />
      <FailureHeading>Oops! Something Went Wrong</FailureHeading>
      <FailureDescription>
        We cannot seem to find the page you are looking for.
      </FailureDescription>
      <RetryButton type="button" onClick={this.getAllProjects}>
        Retry
      </RetryButton>
    </FailureContainer>
  )

  getProjectsInfo = () => {
    const {projectsList, apiStatus} = this.state

    switch (apiStatus) {
      case apiStatusConstants.success:
        return this.renderProjectsList(projectsList)
      case apiStatusConstants.inProgress:
        return this.renderLoader()
      case apiStatusConstants.failure:
        return this.renderFailureView()
      default:
        return null
    }
  }

  render() {
    const {categoryId} = this.state
    return (
      <AppContainer>
        <HeaderContainer>
          <LogoImage
            src="https://assets.ccbp.in/frontend/react-js/projects-showcase/website-logo-img.png"
            alt="website logo"
          />
        </HeaderContainer>
        <ProjectsContainer>
          <ProjectsTypeSelect
            value={categoryId}
            onChange={this.onChangeCategory}
          >
            {categoriesList.map(each => (
              <OptionItem key={each.id} details={each} />
            ))}
          </ProjectsTypeSelect>
          {this.getProjectsInfo()}
        </ProjectsContainer>
      </AppContainer>
    )
  }
}

export default ProjectsShowcase
