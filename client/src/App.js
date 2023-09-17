import React, { useState } from 'react';
import { CssBaseline, AppBar, Toolbar, IconButton } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import MiniDrawer from './Sidebar';
import Dashboard from './Dashboard';
// import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'


function App() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  const agents = [
    { id: 1, name: 'Agent 1', customerCount: 10 },
    { id: 2, name: 'Agent 2', customerCount: 5 },
    { id: 3, name: 'Agent 3', customerCount: 8 },
    // Add more agent data
  ];

  return (
    
    <div style={{ display: 'flex' }}>
      <CssBaseline />
      <AppBar position="fixed">
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={toggleSidebar}
            edge="start"
          >
            {isSidebarOpen ? <MenuIcon /> : null}
          </IconButton>
        </Toolbar>
      </AppBar>
      <MiniDrawer  />
      <Routes>
      <Route path="/dashboard" element={<Dashboard />}/>
        {/* <Route path="/settings" component={Settings} />
        <Route path="/reports" component={Reports} /> */}
        {/* Add more routes for your components */}
        </Routes>
     
    </div>
   
  );
}

export default App;
