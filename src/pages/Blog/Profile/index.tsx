import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub } from '@fortawesome/free-brands-svg-icons'

import {
  GithubLink,
  GithubLinkContainer,
  IconContent,
  IconLabel,
  ProfileContainer,
  ProfileContent,
} from './styles'
import {
  faArrowUpRightFromSquare,
  faUserGroup,
} from '@fortawesome/free-solid-svg-icons'
import { useContext } from 'react'
import { UserContext } from '../../../context/UserContext'

export function Profile() {
  const { userData } = useContext(UserContext)

  return (
    <>
      {userData.map((user) => {
        return (
          <ProfileContainer key={user.name}>
            <img src={user.picture} alt=" " />
            <ProfileContent>
              <span>{user.name}</span>
              <div>{user.bio}</div>
              <IconContent>
                <IconLabel>
                  <FontAwesomeIcon icon={faGithub} size="lg" color="#3A536B" />
                  <div>{user.username}</div>
                </IconLabel>
                <IconLabel>
                  <FontAwesomeIcon icon={faUserGroup} color="#3A536B" />
                  <div>{`${user.followers} seguidores`}</div>
                </IconLabel>
              </IconContent>
            </ProfileContent>
            <GithubLinkContainer>
              <GithubLink
                href="http://github.com/vitorrdc"
                target="_blank"
                rel="noreferrer"
              >
                GITHUB
              </GithubLink>
              <FontAwesomeIcon
                icon={faArrowUpRightFromSquare}
                color="#3294F8"
                size="sm"
              />
            </GithubLinkContainer>
          </ProfileContainer>
        )
      })}
    </>
  )
}
