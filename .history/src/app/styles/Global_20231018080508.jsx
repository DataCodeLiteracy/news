import { Global, css } from '@emotion/react'

const style = css`
  html,
  body {
    margin: 0;
    padding: 0;
    font-size: 16px;
  }
`

const GlobalStyle = () => <Global styles={styles} />

export default GlobalStyle
