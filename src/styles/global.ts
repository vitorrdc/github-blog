import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`

* {
  margin: 0 ;
  padding:0 ;
  box-sizing: border-box ;
  font-family: 'Nunito', sans-serif ;
  line-height: 160% ;
}

body {
  -webkit-font-smoothing: antialiased;
  background-color : ${(props) => props.theme.colors['base-background']}  ;
}

input {
  background-color: ${(props) => props.theme.colors['base-input']} ;
}

body, input {
  color: ${(props) => props.theme.colors['base-text']} ;
}


`
