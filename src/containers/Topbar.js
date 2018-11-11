import React, { Component } from 'react';
import styled from 'styled-components';
import _ from 'lodash';
import { object } from 'prop-types';
import classNames from 'classnames';

import Drawer from '@material-ui/core/Drawer';
import ListItem from '@material-ui/core/ListItem';
import List from '@material-ui/core/List';
import ListItemText from '@material-ui/core/ListItemText';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import { withStyles } from '@material-ui/core/styles';
import Menu from '@material-ui/icons/Menu';
import Close from '@material-ui/icons/Close';

class Topbar extends Component {
  static propTypes = {
    classes: object.isRequired
  };

  state = {
    isDrawerOpen: false
  };

  handleOpenMenu = () => {
    this.setState(prevState => ({
      isDrawerOpen: !prevState.isDrawerOpen
    }));
  };

  render() {
    const { classes } = this.props;
    const { isDrawerOpen } = this.state;
    const { isMobile } = window;
    return (
      <Drawer
        className={classNames(classes.drawer, {
          [classes.drawerOpen]: isDrawerOpen,
          [classes.drawerClose]: !isDrawerOpen
        })}
        classes={{
          paper: classNames(classes.paper, {
            [classes.drawerOpen]: isDrawerOpen,
            [classes.drawerClose]: !isDrawerOpen
          })
        }}
        variant="permanent"
        anchor="top"
      >
        <ConetentContainer isDrawerOpen={isDrawerOpen}>
          <LogoContainer>
            <Logo src={require('images/logo.png')} alt="Logo" />
          </LogoContainer>

          {isMobile ? (
            <IconButton className={classes.iconButton} onClick={() => this.handleOpenMenu()}>
              {isDrawerOpen ? <Close nativeColor="#e12b4c" /> : <Menu nativeColor="#e12b4c" />}
            </IconButton>
          ) : (
            <ButtonContainer>
              <Button className={classes.signUpButton} variant="contained" color="primary">
                Sign up
              </Button>
              <Button className={classes.button}>Login</Button>
            </ButtonContainer>
          )}
        </ConetentContainer>

        <List
          className={classNames(classes.list, {
            [classes.listDrawerOpen]: isDrawerOpen,
            [classes.listDrwerClose]: !isDrawerOpen && isMobile
          })}
        >
          {menus.map(menu => (
            <ListItem
              key={menu}
              className={classNames(classes.listItem, {
                [classes.listItemDrawerOpen]: isDrawerOpen
              })}
            >
              <ListItemText
                classes={{
                  primary: classes.listText
                }}
                primary={_.startCase(menu)}
              />
            </ListItem>
          ))}
        </List>
      </Drawer>
    );
  }
}

const drawerHeight = 72;

const styles = theme => ({
  drawer: {
    height: drawerHeight,
    whiteSpace: 'nowrap',
    position: 'fixed',
    zIndex: 100
  },
  paper: {
    boxShadow:
      '0px 2px 4px -1px rgba(0, 0, 0, 0.2), 0px 4px 5px 0px rgba(0, 0, 0, 0.14), 0px 1px 10px 0px rgba(0, 0, 0, 0.12);'
  },
  drawerOpen: {
    height: 340,
    transition: theme.transitions.create('height', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen
    })
  },
  drawerClose: {
    height: drawerHeight,
    transition: theme.transitions.create('height', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen
    })
  },
  iconButton: {
    position: 'absolute',
    top: '18px',
    right: '25px'
  },

  list: {
    top: '-25px',
    display: 'flex',
    margin: '20px auto'
  },
  listDrawerOpen: {
    top: 0,
    width: '100%',
    display: 'block'
  },
  listDrwerClose: {
    display: 'none'
  },

  listItem: {
    cursor: 'pointer',
    padding: '0px 12px'
  },
  listItemDrawerOpen: {
    padding: '15px 12px'
  },

  listText: {
    '&:hover': {
      color: '#e42748'
    },
    whiteSpace: 'nowrap',
    fontWeight: 700,
    color: '#5d5d5d'
  },
  signUpButton: {
    color: '#FFF',
    fontWeight: 700
  },
  button: {
    fontWeight: 700,
    marginLeft: 8
  }
});

const LogoContainer = styled.div``;

const ButtonContainer = styled.div``;

const menus = ['try_products', 'how_it_works', 'our_criteria', 'our_story', 'our_blog'];

const ConetentContainer = styled.div`
  display: flex;
  padding: ${props => {
    if (props.theme.isMobile && !props.isDrawerOpen) {
      return '30px 20px 30px 20px';
    }
    return '30px 20px 0px 20px';
  }} 
  align-items: center;
  justify-content: space-between;
`;

const Logo = styled.img`
  width: 140px;
  text-align: left;
  cursor: pointer;
`;

export default withStyles(styles)(Topbar);
