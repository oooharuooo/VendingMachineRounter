import React, { Component } from 'react';
import LinkBackground from "./LinkBackground"
import Cheetos from "./Cheetos";
import Lays from "./Lays";
import Kitkat from "./Kitkat";
import VendingMachine from "./VendingMachine";
import {NavLink} from "react-router-dom";

export default class NavBar extends Component {
    render() {
        const navBar = {
            display: "flex",
            flexDirection: "row",
            backgroundColor: "whitesmoke",
            justifyContent: "space-evenly",
            fontSize: "2rem",
        }
        const activeStyle = {
            fontWeight: "bold",
            color: "mediumorchid"
          };
        return (
            <nav style={navBar}>
                <NavLink exact to="/"  activeStyle={activeStyle}>
                    Home
                </NavLink>
                <NavLink exact to="/Cheetos"  activeStyle={activeStyle}>
                    Cheetos
                </NavLink>
                <NavLink exact to="/Lays"  activeStyle={activeStyle}>
                    Lays
                </NavLink>
                <NavLink exact to="/Kitkat"  activeStyle={activeStyle}>
                    Kitkat
                </NavLink>
            </nav>
        )
    }
}
