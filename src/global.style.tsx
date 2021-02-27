import { createGlobalStyle, css } from 'styled-components'

export default createGlobalStyle`
  :root {
    --primary-color: #4F58DF;
    --secondary-color: #FF671A;
    --border-color: #DCDCDC;
    --box-shadow: 0 4px 8px 0 rgb(0 0 0 / 10%), 0 10px 13px 0 rgb(0 0 0 / 11%);
  }

  body {
    margin: 0;
    font-family: 'Open Sans Condensed', sans-serif;
  }

  #root {
    min-height: 100vh;
    display: flex;
    flex-direction: column;
  }

  a {
    color: inherit;
    text-decoration: none;
  }

  * {
    box-sizing: border-box;
  }
`

const mediaSizeBreakpoints = {
  sm: '300px',
  md: '500px',
  lg: '800px',
  xl: '1000px',
}

export const mediaQueries = (key: keyof typeof mediaSizeBreakpoints) => {
  return (style: ReturnType<typeof css>) =>
    css`
      @media (min-width: ${mediaSizeBreakpoints[key]}) {
        ${style}
      }
    `
}
