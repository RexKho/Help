import githubIcon from "../../Assets/Images/GitHub-logo.png"
import linkedinIcon from "../../Assets/Images/linkedin.png"
import './footer.css';

function Footer(){


    return (
        <div className="footer">
            <h1 id="footerName">Rex's Early Yelp Clone</h1>
            <div className="footerContainer">
                <a href="https://github.com/RexKho" target="_blank" id="github"><img src={githubIcon} alt="github"></img></a>
                <a href="https://www.linkedin.com/in/khorex/" target="_blank" id="linkedin"><img src={linkedinIcon}></img></a>
            </div>
        </div>
    )


}

export default Footer;