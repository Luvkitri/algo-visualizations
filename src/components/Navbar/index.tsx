import React from 'react';

import { AppBar, Toolbar, Typography, Tabs, Tab } from '@material-ui/core';

import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';

import EqualizerIcon from '@material-ui/icons/Equalizer';
import TrendingUpIcon from '@material-ui/icons/TrendingUp';
import SearchIcon from '@material-ui/icons/Search';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      textAlign: 'center',
      zIndex: theme.zIndex.drawer + 1,
    },
    bar: {
      display: 'inline-block',
      paddingTop: 30,
      paddingBottom: 20,
    },
    title: {
      paddingBottom: 10,
    },
  })
);

type Props = {
  selectedTab: number;
  handleTabChange: (
    event: React.ChangeEvent<Record<string, never>>,
    value: number
  ) => void;
};

const Navbar: React.FC<Props> = ({ selectedTab, handleTabChange }) => {
  const classes = useStyles();

  return (
    <AppBar position='fixed' className={classes.root}>
      <Toolbar className={classes.bar}>
        <Typography variant='h4' className={classes.title}>
          Algorithm-Visualizations
        </Typography>
        <Tabs
          value={selectedTab}
          onChange={handleTabChange}
          aria-label='simple tabs example'
          variant='fullWidth'
        >
          <Tab icon={<EqualizerIcon />} label='Sorting' />
          <Tab icon={<TrendingUpIcon />} label='Pathfinding' />
          <Tab icon={<SearchIcon />} label='Searching' />
        </Tabs>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
