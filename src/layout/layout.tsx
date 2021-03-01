import React, {FunctionComponent} from "react"
import {GlobalStyles} from "../styles/globalStyles"
import { Container } from 'react-bootstrap'
import styled from "styled-components"
import {Assets} from "../assets/assets"
import {Helmet} from "react-helmet"
import 'bootstrap/dist/css/bootstrap.min.css';

const Main = styled.main`
  background-image: url("${Assets.backgroundImage}");
  background-position: center;
  background-size: cover;
  height: 100vh;
  width: 100vw;
  padding: 200px 0px;
`

const Layout: FunctionComponent = ({ children }) => {

  return (
    <>
      <Helmet>
        <link 
          rel="preconnect"
          href="https://fonts.gstatic.com"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600;700;800&display=swap"
          rel="stylesheet"
        />
      </Helmet>

      <GlobalStyles />
      <Main>
        <Container>
          {children}
        </Container>
      </Main>
    </>
  )
}

export default Layout
