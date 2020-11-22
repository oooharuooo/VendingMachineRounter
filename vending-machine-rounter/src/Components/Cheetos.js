import React from 'react';
import LinkBackground from "./LinkBackground";
import {NavLink} from "react-router-dom";

const Cheetos = () => {
  
    return (
        <div>
        <LinkBackground>
            <NavLink exact to="/">Go Back</NavLink>
        </LinkBackground>
            <img src={"https://st2.depositphotos.com/3053449/10879/i/950/depositphotos_108798458-stock-photo-bag-of-chips-from-frito.jpg"} alt ="Cheetos" />
        </div>
    )
}

export default Cheetos;
