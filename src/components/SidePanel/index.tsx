import React from 'react';

import {
  Drawer,
  List,
  ListItem,
  ListItemText,
  Divider,
} from '@material-ui/core';

import { makeStyles, createStyles } from '@material-ui/core/styles';

const SIDE_PANEL_WIDTH = 300;

const useStyles = makeStyles(() =>
  createStyles({
    fillerBox: {
      height: 200,
    },
    drawer: {
      width: SIDE_PANEL_WIDTH,
    },
    drawerPaper: {
      width: SIDE_PANEL_WIDTH,
      paddingTop: 165,
    },
    drawerContainer: {
      overflow: 'auto',
    },
  })
);

const SidePanel = () => {
  const classes = useStyles();

  return (
    <React.Fragment>
      <div className={classes.fillerBox} />
      <Drawer
        variant='permanent'
        className={classes.drawer}
        classes={{
          paper: classes.drawerPaper,
        }}
      >
        <div className={classes.drawerContainer}>
          <List>
            {['Inbox', 'Starred', 'Send email', 'Drafts'].map((text, index) => (
              <ListItem button key={text}>
                <ListItemText primary={text} />
              </ListItem>
            ))}
          </List>
          <Divider />
          <List>
            {['All mail', 'Trash', 'Spam'].map((text, index) => (
              <ListItem button key={text}>
                <ListItemText primary={text} />
              </ListItem>
            ))}
          </List>
        </div>
      </Drawer>
    </React.Fragment>
  );
};

export default SidePanel;
