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
import MenuContent from "./MenuContent";

type HeaderProps = {
  open: boolean;
  toggleMenu: () => void;
};

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
        <MenuContent toggle={toggleMenu} />
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
            <MenuContent toggle={toggleMenu} />
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
