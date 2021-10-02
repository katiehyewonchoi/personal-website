import React from "react"
import linkedin from "../Images/linkedinLogo.svg"
import git from "../Images/GitHub-Mark-64px.png"

function Footer() {
    return (
        <div className="footer">
            <p>I believe in my potential - </p>
            <a href="https://www.linkedin.com/in/katiehchoi/" target="_blank">
                <img className="logo" src={linkedin}></img>
            </a >
            <a href="https://github.com/katiehyewonchoi" target="_blank">
                <img className="logo" src={git}></img>
            </a >

            <p className="copyright">Copyright 2021. Katie Hyewon Choi. All rights reserved.</p>
        </div>

    )
}
export default Footer;

