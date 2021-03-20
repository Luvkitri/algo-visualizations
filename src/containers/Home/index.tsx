import React, { useState } from 'react';

import Navbar from '../../components/Navbar';
import TabPanel from '../../components/TabPanel';

const Home: React.FC = () => {
  const [selectedTab, setSelectedTab] = useState(0);

  const handleTabChange = (
    event: React.ChangeEvent<Record<string, never>>,
    value: number
  ): void => {
    setSelectedTab(value);
  };

  return (
    <div>
      <Navbar selectedTab={selectedTab} handleTabChange={handleTabChange} />
      <TabPanel value={selectedTab} index={0} />
      <TabPanel value={selectedTab} index={1} />
      <TabPanel value={selectedTab} index={2} />
    </div>
  );
};

export default Home;
