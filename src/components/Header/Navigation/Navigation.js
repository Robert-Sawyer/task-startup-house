import React from 'react'


import {Menu, NavigationItem, NavItemA} from "./styles";

const Navigation = () => (

    <Menu>
        <NavigationItem>
            <NavItemA href='/'>
                Start
            </NavItemA>
        </NavigationItem>
        <NavigationItem>
            <NavItemA href='/myProfile'>
                MyProfile
            </NavItemA>
        </NavigationItem>
    </Menu>
)

export default Navigation;
