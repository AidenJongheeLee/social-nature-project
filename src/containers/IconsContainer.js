import React from 'react';
import styled from 'styled-components';
import Button from '@material-ui/core/Button';
import { withStyles } from '@material-ui/core/styles';
import Email from '@material-ui/icons/Email';
import { object } from 'prop-types';

const IconsContainer = ({ classes }) => (
  <MainContainer>
    <div>
      <Button
        variant="contained"
        className={classes.facebook}
        onClick={() => {
          window.open('https://www.facebook.com/', '_blank');
        }}
      >
        <LogoImage alt="facebook-icon" src={require('images/facebook-logo.jpg')} />
        Share
      </Button>
      <Button
        onClick={() => {
          window.open('https://twitter.com/', '_blank');
        }}
        variant="contained"
        className={classes.icon}
      >
        <LogoImage alt="tweeter-icon" src={require('images/tweeter-icon.jpg')} />
        Tweet
      </Button>
    </div>
    <div>
      <Button
        onClick={() => {
          window.open('https://www.pinterest.ca/', '_blank');
        }}
        variant="contained"
        className={classes.pinButton}
      >
        <PinIcon alt="pin-icon" src={require('images/pin-icon.png')} />
      </Button>
      <Button
        onClick={() => {
          window.location.href = 'mailto:';
        }}
        variant="contained"
        className={classes.icon}
      >
        <Email nativeColor="#e12b4c" className={classes.emailIcon} />
        Email
      </Button>
    </div>
  </MainContainer>
);

IconsContainer.propTypes = {
  classes: object.isRequired
};

const styles = {
  facebook: {
    backgroundColor: '#4159a8',
    textTransform: 'capitalize',
    fontFamily: 'Arial',
    color: '#ffff',
    '&:hover': {
      backgroundColor: '#4159a8'
    },
    margin: '5px',
    width: '90px'
  },
  icon: {
    backgroundColor: '#f5f5f5',
    textTransform: 'capitalize',
    fontFamily: 'Arial',
    margin: '5px',
    width: '90px'
  },
  pinButton: {
    padding: 0,
    margin: '5px'
  },
  emailIcon: {
    marginRight: '5px'
  }
};

const PinIcon = styled.img`
  width: 90px;
  border-radius: 4px;
  height: 40px;
`;

const LogoImage = styled.img`
  width: 25px;
  margin-right: 5px;
`;

const MainContainer = styled.div`
  margin-top: 15px;
`;

export default withStyles(styles)(IconsContainer);
