import React from 'react';
import styled from 'styled-components';

const HeaderMsgContainer = () => (
  <>
    <TextBoxContainer>
      <TextContainer>
        <HeaderMsg>Yay! You get to #trynatural with MyChelle Sunscreen Stick</HeaderMsg>
        <TextMsg>Your item will be shipping mid-June.</TextMsg>
      </TextContainer>
    </TextBoxContainer>
  </>
);

const HeaderMsg = styled.h2`
  color: ${props => props.theme.primaryColor};
  font-weight: 400;
`;

const TextMsg = styled.p`
  color: #3b3b3b;
`;

const TextContainer = styled.div`
  text-align: center;
  padding: 30px;
`;

const TextBoxContainer = styled.div`
  height: 200px;
  width: 100%;
  display: block;
  position: relative;

  &::after {
    content: '';
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    position: absolute;
    z-index: -1;
    opacity: 0.2;
    background-image: url('https://www.socialnature.com/images/invitealreadyaccepted-bg.jpg');
    background-position: center;
    background-size: cover;
  }
`;

export default HeaderMsgContainer;
