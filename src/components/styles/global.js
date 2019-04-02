import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
  html, body {
    height: 100%;
  }
  
  html {
    font-size: 62.5%;
  }

  body {
    //background-color: #fff;
    font-size: ${props => props.theme.fontSize};
    line-height: ${props => props.theme.lineHeight};
    font-family: ${props => props.theme.fontSans};
    display: flex;
    flex-direction: column;
    height: 100vh; /* Avoid the IE 10-11 \`min-height\` bug. */
    margin: 0;
  }

  header {
    text-align: center;
    position: relative;
  }
  
  .container {
    padding-right: 15px;
    padding-left: 15px;
    margin-right: auto;
    margin-left: auto;

    @media screen and (min-width: 768px) {
      width: 750px;
    }
    @media screen and (min-width: 992px) {
      width: 970px;
    }
    @media screen and (min-width: 1200px) {
      width: 1170px;
    }
  }

  h1, h2, h3, h4, h5, h6 {
    font-family: ${props => props.theme.fontTitle};
    color: #444;
  }

h2 {
  color: #48484b;
  font-size: 2em;
  margin: 2em 0;
}

h2.byline {
  color: #fff;
}

h3 {
  font-size: 1.2em;
  line-height: ${props => props.theme.lineHeight};
  font-weight: bold;
  margin-top: 2em;
  margin-bottom: 2em;
  color: #394656;
}

h4 {
  font-size: 1.2em;
  line-height: ${props => props.theme.lineHeight};
  font-weight: 400;
  color: #48484b;
}

* {
  -webkit-font-smoothing: antialiased;
}

em.green {
  font-style: normal;
  color: lighten(${props => props.theme.brandSuccess}, 0%);
}

em.blue {
  font-style: normal;
  color: lighten(${props => props.theme.colorLink}, 5%);
}


//#index, .features-header, #dashboard, .pricing-header, .support-header {
//  position: relative;
//  //background-image: url('/img/cypress-header-bg.png');
//  background-position: center 200px;
//  background-repeat: no-repeat;
//  background-color: #172432;
//}

// Minimize page flickering for google optimize
// https://support.google.com/360suite/optimize/answer/6262084?authuser=1#step-2
.async-hide { opacity: 0 !important}

.form-group {
  margin-bottom: 0;

  .input-lg {
    margin-bottom: 10px;
  }
}

.ready-banner {
  background-color: ${props => props.theme.colorBackground};
  padding: 6em 0 8em;
  text-align: center;

  h2 {
    margin-bottom: 1em;
  }

  .install-methods {
    margin-top: 0;
  }

  small, p {
    color: #8c9197;

    &>a {
      color: ${props => props.theme.colorLink};
      border-bottom: 1px dashed ${props => props.theme.colorLink};

      &:hover, &:focus, &:active {
        border-bottom: 1px solid ${props => props.theme.colorLink};
        text-decoration: none;
      }
    }
  }
}

.install-methods p {
  margin: 0 1em;

}

.install-npm {
  font-family: monaco, monospace;
  font-size: 1.2em;
  background: #000;
  border-radius: 8px;
  color: ${props => props.theme.ltText};
  padding: 15px;
  text-align: left;

  span {
    display: inline-block;
  }


  .accent {
    color: ${props => props.theme.brandSuccess};
    margin-right: 0;
  }

  .filler {
    background-color: #000;
    border: none;
    outline: 0;
    color: white;
    position: relative;
  }

  .cursor {
    width: 0.5em;
    position: relative;
    top: 1px;
    left: -3px;
    background: yellow; /* same as background */
  }
}

.recommended {
  margin-top: 10px; 
}


.follow-up-banner {
  background-color: #2D3846;
  padding: 4em 0 2em;

  .follow-up {
    position: relative;

    svg {
      position: absolute;
      left: 1em;
      top: 0;
      height: 3em;
      width: 3em;
      fill: #fff;
    }

    h5 {
      margin-top: 2px;
      color: #fff;
      font-weight: 600;
      font-size: 1.2em;

      a {
        color: #fff;
      }
    }

    h5, p {
      margin-left: 7rem;
    }

    p {
      color: #d2d4d6;
      margin-bottom: 2em;
      font-size: 1.05em;
      line-height: 1.6em;
      padding-right: 2em;

      a {
        color: #d2d4d6;
        border-bottom: 1px dashed #a2a4a6;

        &:hover, &:focus, &:active {
          border-bottom: 1px solid #a2a4a6;
          text-decoration: none;
        }
      }
    }
  }

}

.list-unstyled {
  list-style: none;
}

.list-inline {
  li {
    display: inline;
  }
}

#content-wrap {
  background: ${props => props.theme.white};
  border-top: 1px solid ${props => props.theme.colorBackground};
  border-bottom: 1px solid ${props => props.theme.colorBackground};
  margin: -1px 0;
}

.main-content-wrapper {
  background-color: #fff;
  padding: 75px 0;

  h3 {
    font-size: 26px;
    line-height: ${props => props.theme.lineHeight};
    font-weight: normal;
    margin-bottom: 65px;
  }

  h4 {
    font-size: 1.2em;
    line-height: ${props => props.theme.lineHeight};
    font-weight: bold;
  }

  p {
    font-size: 16px;
    line-height: ${props => props.theme.lineHeight};
    color: ${props => props.theme.colorDefault};
    font-weight: 300;
    margin-bottom: 50px;
  }

  a:not(.btn) {
    color: ${props => props.theme.colorLink};
  }

  .faq-row .faq-wrapper:nth-of-type(odd) {
    clear: both;
  }
}

.faq-wrapper {
  .fa-angle-right {
    padding-left: 10px;
    padding-right: 5px;
  }
  h4,p {
    line-height: 1.8em;
    margin-right: 25px;
  }
}

#container {
  transition: 0.4s;
  flex: 1 0 auto;
}

#hero {
  padding: 55px 0 55px;
  text-align: center;

  h1.tagline {
    line-height: 70px;
    color: ${props => props.theme.white};
    font-size: 4em;
    font-weight: 600;
    margin: 40px 0 15px;
  }

  h2.byline {
    font-weight: 400;
    font-size: 1.5em;
    color: #c7cad1;
    line-height: 1.7em;
    margin: 0 0 15px;
    position: relative;
  }

  p, p>a, h5, small {
    color: #fff;
  }

  p>a {
    border-bottom: 1px dotted #fff;
    transition: 0.2s;

    &:hover {
      border-bottom: 1px solid #fff;
      text-decoration: none;
    }
  }
}

h5 {
  margin-top: 30px;

  &.green-dash, &.blue-dash {
    font-size: 1em;
    text-align: center;
    margin-bottom: 10px;

    &:before, &:after {
      content: "";
      top: 37px;
      position: absolute;
      opacity: 0.2;
    }

    &:before {
      left: 50px;
    }

    &:after {
      right: 50px;
    }
  }

  &.green-dash {
    color: ${props => props.theme.brandSuccess};

    &:before, &:after {
      width: 20%;
      border: 1px solid ${props => props.theme.brandSuccess};
    }
  }

  &.blue-dash {
    color: ${props => props.theme.colorLink};

    &:before, &:after {
      width: 30%;
      border: 1px solid ${props => props.theme.colorLink};
    }
  }
}

.bash-wrapper {
  background-color: #101012;
  padding: 15px 20px;
  color: ${props => props.theme.white90};
  font-size: 1.2em;
  font-family: ${props => props.theme.fontMono};
  border-radius: 60px;
  display: inline-block;
  margin-bottom: 10px;
  letter-spacing: 1.2px;

  &:before {
    content: "$";
    position: relative;
    color: ${props => props.theme.brandSuccess};
    margin-right: 5px;
  }
}

.social-sharing-buttons {
  margin-top: -8px;
  margin-bottom: 10px;
  .social-sharing-button {
    display: inline; 
    margin-right: 10px;
  }

  .twitter-share-button {
    position: relative !important;
    top: 8px;
  }
}

.thanks {
  h1 {
    color: #444;
  }
}

.btn {
  padding: 0 15px;
  color: #fff;
  outline: none;
  border: none;
  cursor: pointer;
  font-size: 1.4rem;
  line-height: 3rem;
  font-weight: 700;
  background-color: ${props => props.theme.green};

  &:hover {
    background-color: ${props => props.theme.darkGreen};
  }
}
`
