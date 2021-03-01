import React, {FunctionComponent} from 'react';
import {Col} from 'react-bootstrap';
import styled from 'styled-components';

/* ====== Containers ====== */

const SectionContainer = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  position: relative;
  height: 700px;
  width: 100%;
  border: 1px solid red;
`

const StartContainer = styled.div`
  bottom: 50px;
  border: 1px solid green;
`

/* ====== UI Elements ====== */

const Title = styled.h1`
`

const Subtitle = styled.h2`
`


export const Intro: FunctionComponent = ({ children }) => (
  <Col lg={{ span: 10, offset: 1}}>
    <SectionContainer>
      <Title>Trivia<br/>Challenge</Title>
      <StartContainer>
        <Subtitle>Welcome to trivia Challenger!</Subtitle>
      </StartContainer>
    </SectionContainer>
  </Col>
)
