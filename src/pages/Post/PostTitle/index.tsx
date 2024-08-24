import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub } from '@fortawesome/free-brands-svg-icons'
import {
  faArrowUpRightFromSquare,
  faCalendarDay,
  faComment,
} from '@fortawesome/free-solid-svg-icons'

import {
  ContentContainer,
  GithubLinkDiv,
  GithubLinkElement,
  IconDescription,
  IconsContainer,
  LinksContainer,
  PostTitleContainer,
  StyledLink,
  Title,
} from './styles'

export function PostTitle({ issueTitle }) {
  return (
    <PostTitleContainer>
      <LinksContainer>
        <StyledLink to="/">VOLTAR</StyledLink>
        <GithubLinkDiv>
          <GithubLinkElement href="http://github.com/vitorrdc" target="_blank">
            VER NO GITHUB
          </GithubLinkElement>
          <FontAwesomeIcon
            icon={faArrowUpRightFromSquare}
            color="#3294F8"
            size="sm"
          />
        </GithubLinkDiv>
      </LinksContainer>
      <ContentContainer>
        <Title>{issueTitle}</Title>
        <IconsContainer>
          <IconDescription>
            <FontAwesomeIcon icon={faGithub} size="lg" color="#3A536B" />{' '}
            <span>vitorrdc</span>
          </IconDescription>
          <div>
            <FontAwesomeIcon icon={faCalendarDay} color="#3A536B" />
            <span>Há 1 dia</span>
          </div>
          <div>
            <FontAwesomeIcon icon={faComment} color="#3A536B" />{' '}
            <span>5 comentários</span>
          </div>
        </IconsContainer>
      </ContentContainer>
    </PostTitleContainer>
  )
}
