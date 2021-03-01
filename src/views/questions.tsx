import React, {FunctionComponent, useEffect, useState} from 'react';
import {Col} from 'react-bootstrap';
import {connect} from 'react-redux';
import styled from 'styled-components';
import {Assets} from '../assets/assets';
import {Button} from '../components/button';
import {answerQuestion, updateView} from '../state/actions';
import {Colors, UIStyles, Animations} from '../styles/mixins';
import {IAction, IActionAnswer, IQuestion, IState} from '../types';


/* ====== Containers ====== */

const SectionContainer = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  padding: 90px 20px 63px;
  position: relative;
  min-height: 700px;
  width: 100%;
  background-color: ${Colors.white};
  box-shadow: ${UIStyles.boxShadow};
  border-radius: 15px;
  animation-delay: 400ms;
  ${Animations.fadeIn}
`

const QuestionContainer = styled.div`
  margin-bottom: 50px;
  text-align: center;
`

const ChoicesContainer = styled.div`
  margin-top: 60px;
  display: flex;
  height: 160px;
  flex-direction: column;
  justify-content: space-between;
`

const CountContainer = styled.div`
  position: absolute;
  top: 30px;
  left: 30px;
`


/* ====== Text Elements ====== */

const Category = styled.h5`
  margin-bottom: 30px;
`

const Question = styled.p`
`

const QuestionsCount = styled.span`
  letter-spacing: 0px;
  line-height: 1.5;
  color: ${Colors.darkGray};
  font-weight: 600;
  font-family: "Inter-SemiBold", "Inter", sans-serif;
  font-size: 14px;
`

/* ====== Components ====== */

interface IQuestions {
  questions: IQuestion[];
  count: number;
  dispatch: (action: IAction) => IActionAnswer
}

const Questions: FunctionComponent<IQuestions> = ({ questions = [], count, dispatch }) => {

  const isOutOfBounds = count > 9;

  if (isOutOfBounds) {
    dispatch( updateView('COMPLETED') );
  }

  const { question, category, correct_answer } = questions[isOutOfBounds ? 9 : count];

  const isCorrect = ( choice: 'True' | 'False' ) => choice === correct_answer;

  return (
    <Col lg={{ span: 6, offset: 3 }}>
      <SectionContainer>
        <CountContainer>
          <QuestionsCount>{count + 1}/10</QuestionsCount>
        </CountContainer>
        <QuestionContainer>
          <Category>{category}</Category>
          <Question dangerouslySetInnerHTML={{__html: question }} />
        </QuestionContainer>
        <ChoicesContainer>
          <Button clickHandle={() => dispatch( answerQuestion(count, isCorrect('True')) )}>
            True
          </Button >
          <Button clickHandle={() => dispatch( answerQuestion(count, isCorrect('False')) )}>
            False
          </Button>
        </ChoicesContainer>
      </SectionContainer>
    </Col>
  )
}

const mapStateToProps = ( state: IState ) => ({
  questions: state.questions,
  count: state.count
})

export default connect(mapStateToProps)(Questions);
