import React from 'react';
import {NavLink} from "react-router-dom";
import LinkBackground from "./LinkBackground"

const Kitkat = () => {
    const goBack = {
        fontSize: "2rem",
    }
    return (
        <div>
            <LinkBackground>
                <NavLink style={goBack} exact to="/">Go Back</NavLink>
            </LinkBackground>
            <img src={"https://st2.depositphotos.com/4431055/11854/i/950/depositphotos_118540660-stock-photo-pened-kit-kat-chocolate-bar.jpg"} alt ="kitkat" />
        </div>
    )
}

export default Kitkat
