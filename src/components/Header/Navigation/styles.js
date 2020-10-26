import React from 'react';
import styled from 'styled-components';

export const Menu = styled.ul`
    margin: 0;
    padding: 0;
    list-style: none;
    display: flex;
    flex-flow: row;
    align-items: center;
    height: 100%;
`;

export const NavigationItem = styled.li`
  margin: 10px 0;
  padding: 0 10px;
  box-sizing: border-box;
  display: block;
  width: 100%;
`;

export const NavItemA = styled.a`
    text-decoration: none;
    color: #000000;
    font-weight: 600;
`;
