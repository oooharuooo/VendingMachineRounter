import React from 'react';
import {NavLink} from "react-router-dom";
import LinkBackground from "./LinkBackground";

const Lays = () => {
    const goBack = {
        fontSize: "2rem",
    }
    return (
        <div>
        <LinkBackground>
        <NavLink style={goBack} exact to="/">Go Back</NavLink>
        </LinkBackground>
            
            <img src={"https://st2.depositphotos.com/3053449/6553/i/950/depositphotos_65530775-stock-photo-lays-chips.jpg"} alt="Lays" />
        </div>
    )
}

export default Lays
