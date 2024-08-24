import styled from 'styled-components'

import { Link } from 'react-router-dom'

export const PostTitleContainer = styled.div`
  background-color: ${(props) => props.theme.colors['base-profile']};
  border-radius: 10px;
  box-shadow: 0px 2px 2px 2px ${(props) => props.theme.colors['base-input']};
  width: 54rem;
  padding: 2rem 2.5rem;
  margin-top: -5.5rem;

  display: flex;
  flex-direction: column;
  gap: 1.25rem;
`

export const LinksContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  color: ${(props) => props.theme.colors.blue};
  text-decoration: none;

  font-size: 0.75rem;
`

export const ContentContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`

export const Title = styled.div`
  color: ${(props) => props.theme.colors['base-title']};
  font-size: 1.5rem;
  font-weight: 700;
`

export const IconsContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 2rem;
`

export const IconDescription = styled.div`
  display: flex;
  gap: 0.5rem;
  align-items: center;
`

export const GithubLinkDiv = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
  border-bottom: solid 1px transparent;

  cursor: pointer;

  &:hover {
    border-bottom: solid 1px ${(props) => props.theme.colors.blue};
    transition: 0.2s;
  }
`

export const GithubLinkElement = styled.a`
  color: ${(props) => props.theme.colors.blue};
  text-decoration: none;
  border-bottom: solid 1px transparent;

  font-size: 0.75rem;
`

export const StyledLink = styled(Link)`
  color: ${(props) => props.theme.colors.blue};
  text-decoration: none;

  font-size: 0.75rem;

  &:hover {
    border-bottom: solid 1px ${(props) => props.theme.colors.blue};
    transition: 0.2s;
  }
`
