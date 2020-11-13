import React from "react";

import {Dribble, Facebook, Twitter, Github, Linkedin, Instagram} from "../Icons";

const Footer = (props)=>{
    const {firstName, lastName, country} = props;
    return(
        <>
            <h1>
                Hello World my name is {firstName} {lastName} and i'm from {country}
            </h1>

        </>
    )
}

export default Footer;