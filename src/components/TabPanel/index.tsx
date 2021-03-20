import React from 'react';

type Props = {
  value: number,
  index: number,
};

const TabPanel: React.FC<Props> = ({ value, index }) => {
  return (
    <div>
      {value === index && (
        <h1>{index}</h1>
      )}
    </div>
  )
};

export default TabPanel;
