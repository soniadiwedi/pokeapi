import { Box, Flex, Input, Button, IconButton } from '@chakra-ui/react';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import "./Navbar.css"
import { useNavigate } from "react-router-dom";
import { SearchPage } from './SearchPage';
export const Navbar = () => {
   
  return (
    <Flex justifyContent="center" gap="40px" backgroundColor="pink.900" h="100px" textAlign="center" alignItems="center" fontWeight="bold" fontSize="2xl" color="white">
      <Link to="/">Listing Page</Link>

     
        <SearchPage />
      
      <Link to="/bookmark">Bookmarks Page</Link>
      <Link to="/details/:id">Details Page</Link>
    </Flex>
  );
};
