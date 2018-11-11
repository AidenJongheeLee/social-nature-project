/* eslint-disable import/no-dynamic-require */
import React, { Component } from 'react';
import { object } from 'prop-types';
import { Row, Col } from 'react-flexbox-grid';
import styled from 'styled-components';
import Divider from '@material-ui/core/Divider';
import Button from '@material-ui/core/Button';
import { withStyles } from '@material-ui/core/styles';

import { FakeData } from 'stores';

class ProductsContainer extends Component {
  static propTypes = {
    classes: object.isRequired
  };

  render() {
    const { classes } = this.props;
    const { products } = FakeData;
    return (
      <MainContainer>
        <MainMsg>Want to get more natural products?</MainMsg>
        <DescText>Good News! You pre-qualify for these natural products:</DescText>
        <Divider />

        <Row>
          {products.map((product, index) => (
            <Col lg={4} md={4} sm={6} xs={12} key={product.name}>
              <ProductImg src={require(`images/product${index + 1}.png`)} alt="product-image" />
              <Button variant="contained" className={classes.button}>
                Want it
              </Button>
              <ProductText productTitle>{product.name}</ProductText>
              <ProductText>{product.company}</ProductText>
            </Col>
          ))}
        </Row>
      </MainContainer>
    );
  }
}

const styles = {
  button: {
    marginTop: 15,
    float: 'right',
    backgroundColor: '#e12b4c',
    color: '#ffffff',
    fontFamily: 'Roboto',
    '&:hover': {
      backgroundColor: '#e12b4c'
    }
  }
};

const ProductText = styled.p`
  color: ${props => (props.productTitle ? props.theme.primaryColor : '#5d5d5d')};
  text-align: left;
  margin: 10px 0px;
  object-fit: contain;
`;

const ProductImg = styled.img`
  width: 100%;
  border: 1px solid #ccc;
  height: 400px;
  margin-top: 20px;
`;

const MainContainer = styled.div`
  padding: 20px;
  text-align: center;
`;

const MainMsg = styled.h3`
  color: ${props => props.theme.primaryColor};
  text-align: ${props => (props.theme.isMobile ? 'left' : 'center')};
`;

const DescText = styled.p`
  color: #3b3b3b;
  text-align: ${props => (props.theme.isMobile ? 'left' : 'center')};
`;

export default withStyles(styles)(ProductsContainer);
