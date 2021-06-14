import {
  HomePageWrapper,
  Header,
  SubHeader,
  BoxContainer,
  LeftBox,
  RightBox,
  BoxText,
  BoxAnchor,
  BoxLink,
} from './styles'
import { RouteUrls } from '../../Routes'

const GITHUB_URL_CLIENT = '#'
const GITHUB_URL_SERVER = '#'

const HomePage = () => (
  <HomePageWrapper>
    <Header>Welcome Credit Expert</Header>
    <SubHeader>Choose an assignment to view</SubHeader>
    <BoxContainer>
      <LeftBox>
        <BoxText>Shapes and Colors</BoxText>
        <BoxLink to={RouteUrls.shapes}>Demo</BoxLink>
        <BoxAnchor href={GITHUB_URL_CLIENT} target='_blank'>Github</BoxAnchor>
      </LeftBox>
      <RightBox>
        <BoxText>Ant Simulator</BoxText>
        <BoxLink to={RouteUrls.simulation}>Demo</BoxLink>
        <BoxAnchor href={GITHUB_URL_SERVER} target='_blank'>Github</BoxAnchor>
      </RightBox>
    </BoxContainer>
  </HomePageWrapper>
)

export default HomePage
