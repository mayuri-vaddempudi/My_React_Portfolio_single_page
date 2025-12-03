import React from "react";
import { BsLinkedin } from "react-icons/bs";
import { BsGithub } from "react-icons/bs";
import { RxTriangleRight } from "react-icons/rx";

export default function HeaderSocials() {
    return (
        <div className="header_socials">
            <a href="https://www.linkedin.com/in/mayuri-vaddempudi/" target="_blank"><BsLinkedin /></a>
            <a href="https://github.com/mayuri2018" target="_blank"><BsGithub /></a>
            <a href="https://vercel.com/mayurivijayagmailcoms-projects" target="_blank"><RxTriangleRight /></a>
        </div>
    )
}