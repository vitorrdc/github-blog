import styled from 'styled-components'
import { Link } from 'react-router-dom'

export const CardContainer = styled(Link)`
  background-color: ${(props) => props.theme.colors['base-post']};
  border-radius: 10px;
  padding: 2rem;
  border: none;
  cursor: pointer;
  border: 2px solid transparent;
  transition: 0.2s;
  text-decoration: none;

  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 1.25rem;

  &:hover {
    border: 2px solid ${(props) => props.theme.colors['base-span']};
  }
`

export const CardTitle = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 3rem;

  width: 100%;

  div {
    font-weight: 700;
    font-size: 1.25rem;
    color: ${(props) => props.theme.colors['base-title']};
  }

  span {
    color: ${(props) => props.theme.colors['base-span']};
    font-size: 0.875rem;
    width: 6rem;
  }
`

export const CardContent = styled.div`
  font-size: 1rem;
  color: ${(props) => props.theme.colors['base-text']};
  line-height: 160%;
`

export const MarkdownContainer = styled.div`
  display: -webkit-box;
  -webkit-line-clamp: 5;
  -webkit-box-orient: vertical;
  overflow: hidden;
  text-overflow: ellipsis;
  line-height: 160%;
  text-align: left;
`
