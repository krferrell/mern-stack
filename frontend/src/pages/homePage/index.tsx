import React from 'react';
import { StyledHomePage } from './styles';
import LogoutButton from '../../components/logoutButton';

const HomePage = () => {
  return (
    <StyledHomePage>
      <h1>Home Page</h1>
      <LogoutButton />
    </StyledHomePage>
  );
};

export default HomePage;
