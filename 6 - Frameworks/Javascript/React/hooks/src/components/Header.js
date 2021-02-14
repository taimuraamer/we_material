import React from "react";
import {
  IconButton,
  List,
  ListItem,
  ListItemText,
  AppBar,
  Toolbar,
  Container 
} from "@material-ui/core";
import { Home } from "@material-ui/icons";
import {NavLink} from 'react-router-dom'

const Header = () => {
  const navLinks = [
    { title: `about us`, path: `/about-us` },
    { title: `product`, path: `/product` },
    { title: `blog`, path: `/blog` },
    { title: `contact`, path: `/contact` },
    { title: `faq`, path: `/faq` },
  ];

  return (
    <AppBar position="static">
      <Toolbar>
        <Container>
        <IconButton edge="start" color="inherit" aria-label="home">
          <Home fontSize="large" />
        </IconButton>
        <ul>
          {navLinks.map(({ title, path }) => (            
            <NavLink to={path}>
              <li>{title}</li>
            </NavLink>
          ))}
        </ul>
        </Container>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
