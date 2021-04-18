import React, { useState } from 'react';

import Navbar from '../../components/Navbar';
import SidePanel from '../../components/SidePanel';
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
      <SidePanel />
      <TabPanel value={selectedTab} index={0} />
    </div>
  );
};

export default Home;
