import { Outlet } from 'react-router-dom';
import { Box } from '@mui/material';
import * as React from 'react';
import NavBar from './NavBar';
import Footer from './Footer';
import Column from './Column';

interface PageLayoutProps {
  children: React.ReactNode;
}

const AppLayout = ({ children }: PageLayoutProps) => {
  return (
    <Column height="100vh">
      <NavBar />
      {children}
      <Outlet />
      {/* <Footer /> */}
    </Column>
  );
};

export default AppLayout;
