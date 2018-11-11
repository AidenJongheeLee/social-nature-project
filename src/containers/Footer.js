import React, { Component } from 'react';
import styled from 'styled-components';
import _ from 'lodash';
import { object } from 'prop-types';
import Divider from '@material-ui/core/Divider';
import ListItem from '@material-ui/core/ListItem';
import List from '@material-ui/core/List';
import ListItemText from '@material-ui/core/ListItemText';
import { withStyles } from '@material-ui/core/styles';

class Footer extends Component {
  static propTypes = {
    classes: object.isRequired
  };

  render() {
    const { classes } = this.props;
    return (
      <MainContainer>
        <Label>Company</Label>
        <Divider />

        <List>
          {footerMenus.map(menu => (
            <ListItem key={menu} className={classes.listItem}>
              <ListItemText primary={_.startCase(menu)} />
            </ListItem>
          ))}
        </List>
      </MainContainer>
    );
  }
}

const styles = {
  listItem: {
    cursor: 'pointer',
    padding: '5px 0px'
  }
};

const footerMenus = ['our_story', 'contact_us', 'careers', 'privacy_policy', 'terms_of_service'];

const Label = styled.h3`
  color: ${props => props.theme.primaryColor};
`;

const MainContainer = styled.div`
  background-color: #f5f5f5;
  padding: 25px;
`;

export default withStyles(styles)(Footer);
