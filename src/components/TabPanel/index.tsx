import React from 'react';
import SortCanvas from '../SortCanvas';

type Props = {
  value: number,
  index: number,
};

const TabPanel: React.FC<Props> = ({ value, index }) => {
  return (
    <div>
      {value === index && (
        <SortCanvas />
      )}
    </div>
  )
};

export default TabPanel;
