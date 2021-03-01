import React, {FunctionComponent, useEffect, useState} from 'react';
import {Col} from 'react-bootstrap';
import {connect} from 'react-redux';
import styled from 'styled-components';
import {Assets} from '../assets/assets';
import {Button} from '../components/button';
import {resetChallenge} from '../state/actions';
import {Colors, UIStyles, Animations} from '../styles/mixins';
import {IActionReset, IQuestion} from '../types';

/* ====== Containers ====== */


const SectionContainer = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  padding: 70px 20px 63px;
  position: relative;
  min-height: 700px;
  width: 100%;
  background-color: ${Colors.white};
  box-shadow: ${UIStyles.boxShadow};
  border-radius: 15px;
  animation-delay: 400ms;
  ${Animations.fadeIn}
`

const ButtonContainer = styled.div`
  margin-top: 60px;
  display: flex;
  flex-direction: column;
  align-items: center;
`

const ScoreContainer = styled.div`
  margin: 0 auto;
  margin-bottom: 20px;
  font-weight: 600;
  font-style: normal;
  font-family: "Poppins", serif;
  text-align: center;
  font-size: 35px;
  letter-spacing: 0px;
  line-height: 1.2;
  color: ${Colors.black};
`

const QuestionsContainer = styled.div`
`

const QuestionsBox = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  justify-content: flex-start;
  padding: 15px 0;
  border-bottom: 1px solid lightgrey;
`

/* ====== UI Elements ====== */

const Mark = styled.img`
  height: 20px;
  width: 20px;
  margin-right: 40px;
`

/* ====== Text Elements ====== */

const QuestionText = styled.p`
  font-size: 12px;
  text-align: left;
`

/* ====== Components ====== */

interface IResults {
  results: IQuestion[];
  dispatch: (action: IAction) => IActionReset
}

const Results: FunctionComponent = ({ result, questions, dispatch }) => {
  console.log('the results are: ', questions);
  console.log('the result is: ', result);
  
  return (
    <Col lg={{ span: 8, offset: 2 }}>
      <SectionContainer>
        <ScoreContainer>
          You scored
          <br/>
          {result}/10
        </ScoreContainer>
        <QuestionsContainer>
          {questions.map( ({ question, solved }) => (
            <QuestionsBox>
              <Mark src={solved ? Assets.Success : Assets.Fail} />
              <QuestionText dangerouslySetInnerHTML={{__html: question }} /> 
            </QuestionsBox>
          ))}
        </QuestionsContainer>
      </SectionContainer>
      <ButtonContainer>
        <Button clickHandle={ () => dispatch({ type: 'RESET' }) }>
          play again!
        </Button>
      </ButtonContainer>
    </Col>
  )
}

const mapStateToProps = ( state: IState ) => ({
  questions: state.questions,
  result: state.result
});

export default connect(mapStateToProps)(Results);
