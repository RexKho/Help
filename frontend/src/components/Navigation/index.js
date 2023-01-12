import { useSelector } from "react-redux";
import ProfileButton from "./ProfileButton";
import { NavLink } from "react-router-dom";
import logo from "../../Assets/Images/helpLogo.png"
import './Navigation.css';


function Navigation() {
    const sessionUser = useSelector(state => state.session.user);
    let sessionLinks;
    if (sessionUser) {
        sessionLinks = (
            <ProfileButton user={sessionUser} />
        );
    } else {
        sessionLinks = (
            <>

                <NavLink to="/login" id="seslinks" className="navbutton">
                    <i className="fa-sharp fa-solid fa-right-to-bracket"></i>
                </NavLink>


                <NavLink to="/signup" id="seslinks" className="navbutton">
                    <i className="fa-sharp fa-solid fa-user-plus"></i>
                </NavLink>

            </>
        );
    }




    return (
        <>
            <ul id="navbar">
                <NavLink exact to="/" className="navbutton">
                    <img src={logo} alt="logo" id="logo"></img>
                    {/* <i className="fa-sharp fa-solid fa-house"></i> */}
                </NavLink>
                <div>
                    {sessionLinks}
                </div>
            </ul>
        </>
    );
}

export default Navigation;