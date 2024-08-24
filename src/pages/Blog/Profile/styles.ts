import styled from 'styled-components'

export const ProfileContainer = styled.div`
  background-color: ${(props) => props.theme.colors['base-profile']};
  border-radius: 10px;
  box-shadow: 0px 2px 2px 2px ${(props) => props.theme.colors['base-input']};
  width: 54rem;
  padding: 2rem 2.5rem;
  margin-top: -5rem;

  position: relative;

  display: flex;
  align-items: center;
  gap: 2rem;

  img {
    height: 9.25rem;
    width: 9.25rem;
    border-radius: 8px;
    object-fit: cover;
    flex-shrink: 0;
  }
`

export const ProfileContent = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;

  span {
    font-weight: 700;
    font-size: 1.25rem;
    line-height: 130%;
  }
`

export const IconContent = styled.div`
  margin-top: 1.9rem;

  display: flex;
  gap: 1.5rem;
  align-items: center;
`

export const IconLabel = styled.div`
  display: flex;
  gap: 0.5rem;
  align-items: center;
`

export const GithubLinkContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;

  cursor: pointer;

  position: absolute;
  top: 2rem;
  right: 2.5rem;

  &:hover {
    border-bottom: solid 1px ${(props) => props.theme.colors.blue};
    transition: 0.2s;
  }
`

export const GithubLink = styled.a`
  color: ${(props) => props.theme.colors.blue};
  text-decoration: none;

  font-size: 0.75rem;
`
