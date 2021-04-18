import React from 'react';
import Canvas from '../Canvas';
import {} from '../../utils/Canvas/Sort/index';

type Props = {
  value: number;
  index: number;
};

const TabPanel: React.FC<Props> = ({ value, index }) => {
  const selectTab = (): string => {
    switch (value) {
      case 0:
        return 'Hello sort';
      case 1:
        return 'Pathfinding hello';
      case 2:
        return 'Hello search';
      default:
        return 'Error: index out of range';
    }
  };

  return <div>{selectTab()}</div>;
};

export default TabPanel;
