import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

import { IconButton } from "@material-ui/core";
import { Close } from "@material-ui/icons";

/**
 * The menu inner content
 * Both of screens is made with this component
 *
 * @component
 */
type MenuContentProps = {
  toggle: () => void;
};

const MenuContent = ({ toggle }: MenuContentProps) => {
  const menu = [
    { name: "Home", link: "/" },
    { name: "Future Value", link: "/future-value" },
  ];

  const handleClose = () => toggle();

  return (
    <MenuStyled>
      <div>
        <IconButton className="close" onClick={handleClose}>
          <Close />
        </IconButton>
      </div>
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
  width: 100%;
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

  .close {
    display: flex;
    justify-content: flex-end;
    width: 100%;
    color: ${({ theme }) => theme.palette.secondary.main};
  }
`;

export default MenuContent;
