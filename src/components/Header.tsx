import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

import {
  Drawer,
  IconButton,
  Typography,
  useMediaQuery,
  useTheme,
} from "@material-ui/core";

import { Menu } from "@material-ui/icons";

type HeaderProps = {
  open: boolean;
  toggleMenu: () => void;
};

/**
 * The menu inner content
 * Both of screens is made with this component
 *
 * @component
 */
const MenuContent = () => {
  const menu = [
    { name: "Home", link: "/" },
    { name: "Future Value", link: "/future-value" },
  ];

  return (
    <MenuStyled>
      <div></div>
      <ul>
        {menu.map((el) => (
          <li key={el.link}>
            <Link to={el.link}>{el.name}</Link>
          </li>
        ))}
      </ul>
      <div></div>
    </MenuStyled>
  );
};

const MenuStyled = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 90vh;
  padding: 1rem;
  color: ${({ theme }) => theme.palette.secondary.main};
  background: ${({ theme }) => theme.palette.primary.main};

  ul {
    margin: 0;
    padding: 0;

    li {
      list-style-type: none;

      a {
        color: inherit;
        font-size: 2rem;
        text-decoration: none;
      }
    }
  }
`;

/**
 * Header Component
 * The goal of this component is to show the
 * navigation of the app in any screen.
 *
 * it...
 * ...should render
 * ...should be expansive
 * ...should be toggleable
 * ...should take to right link
 *
 * @component
 */
const Header = ({ open, toggleMenu }: HeaderProps) => {
  const theme = useTheme();
  const mdUp = useMediaQuery(theme.breakpoints.up("md"));

  return (
    <HeaderStyled id="header">
      {mdUp ? (
        <MenuContent />
      ) : (
        <>
          <Typography className="logo" component={Link} to="/">
            Investment App
          </Typography>
          <div onClick={toggleMenu}>
            <IconButton color="inherit">
              <Menu />
            </IconButton>
          </div>
          <Drawer
            className="menu-drawer"
            anchor="top"
            open={open}
            onClose={toggleMenu}
          >
            <MenuContent />
          </Drawer>
        </>
      )}
    </HeaderStyled>
  );
};

const HeaderStyled = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 1rem;

  .logo {
    color: ${({ theme }) => theme.palette.secondary.main};
    font-size: 1.2rem;
    font-family: "Roboto Mono", monospace;
    text-decoration: none;
  }
`;

export default Header;
