import { useSelector } from "react-redux";
import { useDispatch } from 'react-redux';
import { NavLink } from "react-router-dom";
import logo from "../../Assets/Images/helpLogo.png"
import * as sessionActions from '../../store/session';
import './Navigation.css';
import SearchBar from '../SearchBar';

function Navigation() {
    const sessionUser = useSelector(state => state.session.user);
    let sessionLinks;
    const dispatch = useDispatch();
    const logout = (e) => {
        e.preventDefault();
        dispatch(sessionActions.logout());
    };

    if (sessionUser) {
        sessionLinks = (
            <div id="containerList">
         
                <p id="welcomeMessage">Welcome {sessionUser.username}</p>
                <button onClick={logout} id="logoutbutton">
                            <i className="fa-sharp fa-solid fa-right-from-bracket"></i>
                </button>
            </div>
        );
    } else {
        sessionLinks = (
            <>
                <div id="loginSignup">
                    <NavLink to="/login" id="seslinks" className="navbutton">
                        <i className="fa-sharp fa-solid fa-right-to-bracket"></i>
                    </NavLink>
                    <NavLink to="/signup" id="seslinks" className="navbutton">
                        <i className="fa-sharp fa-solid fa-user-plus"></i>
                    </NavLink>
                </div>

            </>
        );
    }

    return (
        <>
            <ul id="navbar">
                <NavLink exact to="/" className="navbutton">
                    <img src={logo} alt="logo" id="logo"></img>
                </NavLink>
                <SearchBar/>
                    
                <div>
                    {sessionLinks}
                </div>
            </ul>
        </>
    );
}

export default Navigation;