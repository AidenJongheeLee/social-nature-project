import React, { Component } from 'react';
import styled from 'styled-components';

import HeaderMsgContainer from './HeaderMsgContainer';
import IconsContainer from './IconsContainer';
import ProductsContainer from './ProductsContainer';
import Footer from './Footer';

class MainContainer extends Component {
  render() {
    return (
      <ContentContainer>
        <HeaderMsgContainer />

        <ShareContainer>
          <TextMsg>
            Do you have friends who
            <br />
            might want this?
          </TextMsg>
          <IconsContainer />
        </ShareContainer>

        <ProductsContainer />

        <Footer />
      </ContentContainer>
    );
  }
}

const ShareContainer = styled.div`
  background-color: #f1f1f1;
  text-align: center;
  padding: 20px 0px;
`;

const TextMsg = styled.h4`
  color: #3b3b3b;
  margin: 0px;
`;

const ContentContainer = styled.div`
  margin-top: 72px;
`;

export default MainContainer;
