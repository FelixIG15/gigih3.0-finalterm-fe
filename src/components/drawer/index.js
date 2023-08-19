import React, { useState } from 'react';
import { Box, Button } from '@chakra-ui/react';
import Sidebar from './commentSidebar';

function SidebarButton(){
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <Box display="flex">
      <Button onClick={toggleSidebar}>Comment</Button>
      <Sidebar isOpen={isSidebarOpen} onClose={toggleSidebar} />
      <Box flexGrow={1} padding="20px">
      </Box>
    </Box>
  );
};

export default SidebarButton;
