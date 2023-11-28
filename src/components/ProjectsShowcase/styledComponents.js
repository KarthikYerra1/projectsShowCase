import styled from 'styled-components'

export const AppContainer = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
`
export const HeaderContainer = styled.div`
  background-color: #f1f5f9;
  background-size: cover;
  padding: 15px 70px;
`
export const LogoImage = styled.img`
  height: 55px;
`

export const ProjectsContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 40px 60px;
`
export const ProjectsTypeSelect = styled.select`
  height: 40px;
  width: 30%;
  border: solid 1px #cbd5e1;
  border-radius: 6px;
  cursor: pointer;
  outline: none;
  padding-left: 15px;
  padding-right: 15px;
`

export const ProjectsListContainer = styled.ul`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  margin: 0;
  padding: 0;
  list-style-type: none;
  margin-top: 20px;
`

export const LoaderContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  height: 75vh;
`

export const FailureContainer = styled(LoaderContainer)`
  flex-direction: column;
  font-family: 'Roboto';
`

export const FailureImage = styled.img`
  height: 50%;
  margin-bottom: 20px;
`

export const FailureHeading = styled.h1`
  color: #475569;
  font-size: 30px;
  font-weight: 700;
  margin: 0;
  padding: 0;
`

export const FailureDescription = styled.p`
  color: #475569;
  font-size: 18px;
  margin-top: 20px;
`
export const RetryButton = styled.button`
  height: 40px;
  padding: 10px;
  color: #fff;
  background-color: #328af2;
  border-style: none;
  width: 90px;
  border-radius: 5px;
  cursor: pointer;
  outline: none;
  font-family: 'Roboto';
`
