import styled from 'styled-components'

export const SearchInputContainer = styled.div`
  width: 54rem;
  display: flex;
  flex-direction: column;

  margin-top: 4.5rem;
  margin-bottom: 3rem;
`

export const Label = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 0.75rem;

  div {
    color: ${(props) => props.theme.colors['base-subtitle']};
    font-size: 1.125rem;
    font-weight: 700;
  }

  span {
    color: ${(props) => props.theme.colors['base-span']};
    font-size: 0.875rem;
  }
`

export const Input = styled.input`
  outline: 0;
  padding: 0.75rem 1rem;
  border-radius: 6px;
  border: solid 1px ${(props) => props.theme.colors['base-border']};

  ::placeholder {
    color: ${(props) => props.theme.colors['base-label']};
    font-size: 1.125rem;
  }

  &:focus {
    border-color: ${(props) => props.theme.colors.blue};
  }
`
