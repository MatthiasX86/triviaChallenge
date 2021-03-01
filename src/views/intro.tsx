import React, {FunctionComponent, useState} from 'react';
import {Col} from 'react-bootstrap';
import {connect} from 'react-redux';
import styled from 'styled-components';
import {Assets} from '../assets/assets';
import {Button} from '../components/button';
import {updateView} from '../state/actions';
import {Animations, Transitions, UIStyles} from '../styles/mixins';
import { IActionView, IActive } from '../types/index';

/* ====== Containers ====== */

const SectionContainer = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  position: relative;
  height: 700px;
  width: 100%;
`

const StartContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-bottom: 100px;
  bottom: 50px;
`
const InstructionsContainer = styled.div<IActive>`
  height: ${ ({ active }) => active
    ? '300px'
    : 'auto'
  };
  width: ${ ({ active }) => active
    ? '400px'
    : '180px'
  };
  flex-direction: ${ ({ active }) => active
    ? 'column'
    : 'row'
  };
  padding: ${ ({ active }) => active
    ? '80px 30px 80px;'
    : '10px 20px'
  };
  position: absolute;
  bottom: 0;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-top: 30px;
  border-radius 30px;
  box-shadow: ${UIStyles.boxShadow};
  background-color: rgba(0, 0, 0, 0.86);
  border-radius: 30px;

  transition: all 300ms ease-out;
  ${Transitions.standardHover};
`

/* ====== UI Elements ====== */

const Title = styled.h1`
`

const Subtitle = styled.h2`
`

const InfoIcon = styled.img<IActive>`
  display: ${ ({ active }) => active
    ? 'none'
    : 'initial'
  };
  height: 25px;
  width: 25px;

  animation-delay: 400ms;
  ${Animations.fadeIn}
`

const CloseIcon = styled.img<IActive>`
  display: ${ ({ active }) => active
    ? 'initial'
    : 'none'
  };

  position: absolute;
  top: 30px;
  right: 30px;
  height: 25px;
  width: 25px;

  animation-delay: 400ms;
  ${Animations.fadeIn}

`

/* ====== Text Elements ====== */

const HowSmallText = styled.h4<IActive>`
  display: ${ ({ active }) => active
    ? 'none'
    : 'initial'
  };

  animation-delay: 400ms;
  ${Animations.fadeIn}
`

const HowLargeText = styled.h3<IActive>`
  display: ${ ({ active }) => active
    ? 'initial'
    : 'none'
  };

  animation-delay: 400ms;
  ${Animations.fadeIn}
`

/* ====== Components ====== */


const HowToPlay: FunctionComponent = () => { 

  const [isActive, setActive] = useState<boolean>(false);

  return (
    <InstructionsContainer
      onClick={() => setActive(!isActive)}
      active={isActive}
    >
      <InfoIcon 
        src={Assets.Info}
        active={isActive}
      />
      <CloseIcon
        src={Assets.CloseIcon}
        active={isActive}
      />
      {isActive
        ? (
          <>
            <HowLargeText active={isActive}>
              You will be presented with 10 true or false questions
            </HowLargeText>
            <HowLargeText active={isActive}>
              Think you can score 100%?
            </HowLargeText>
          </>
        )
        : (
          <HowSmallText active={isActive}>
            How to play
          </HowSmallText>
        )
      }
    </InstructionsContainer>
  )
 }

interface IIntro {
  dispatch: (action: IAction) => IActionView;
}

const Intro: FunctionComponent<IIntro> = ({ dispatch }) => (
  <Col lg={{ span: 10, offset: 1}}>
    <SectionContainer>
      <Title>Trivia<br/>Challenge</Title>
      <StartContainer>
        <Subtitle>Welcome to trivia Challenger!</Subtitle>
        <Button clickHandle={ () => dispatch(updateView('QUESTION')) }>
          Let's play!
        </Button>
        <HowToPlay />
      </StartContainer>
    </SectionContainer>
  </Col>
)

export default connect()(Intro);
