import React, {FunctionComponent, useState} from 'react';
import {Col} from 'react-bootstrap';
import {connect} from 'react-redux';
import styled from 'styled-components';
import {Assets} from '../assets/assets';
import {Button} from '../components/button';
import {Colors, UIStyles, Animations} from '../styles/mixins';
import {IQuestion, IState} from '../types';


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
`

/* ====== UI Elements ====== */

/* ====== Text Elements ====== */

const Category = styled.h5`
  margin-bottom: 30px;
`

const Question = styled.p`
`

/* ====== Components ====== */

interface IQuestions {
  questions: IQuestion[];
  count: number;
}

const Questions: FunctionComponent<IQuestions> = ({ questions = [], count }) => {

  const { question = '', category = '' } = questions[count];

  return (
    <Col lg={{ span: 6, offset: 3 }}>
      <SectionContainer>
        <QuestionContainer>
          <Category>{category}</Category>
          <Question>{question}</Question>
        </QuestionContainer>
          {console.log('questions are: ', questions)}
        <ChoicesContainer>
          <Button>
            True
          </Button>
          <Button>
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
