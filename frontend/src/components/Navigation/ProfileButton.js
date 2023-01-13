import React, { useState, useEffect } from "react";
import { useDispatch } from 'react-redux';
import * as sessionActions from '../../store/session';


function ProfileButton({user}){
    const dispatch = useDispatch();
    const [showMenu, setShowMenu] = useState(false);

    const openMenu = () =>{
        if(showMenu) return;
        setShowMenu(true);
    }

    useEffect(()=>{
        if (!showMenu) return;

        const closeMenu = () => {
            setShowMenu(false);
        };
        document.addEventListener('click', closeMenu);

        return () => document.removeEventListener("click", closeMenu);
    }, [showMenu])

    const logout = (e) => {
        e.preventDefault();
        dispatch(sessionActions.logout());
    };

    return (
        <>
        <div id="wholeDropDown">
            <button id = "dropDownButton" onClick={openMenu}>
                <i className="fa-sharp fa-solid fa-user"></i>
            </button>
            {showMenu && (
                <ul className ="profile-dropdown">
                    <li>
                        <button onClick={logout} id="logoutbutton">
                            <i className="fa-sharp fa-solid fa-right-from-bracket"></i>
                        </button>
                    </li>
                </ul>
            )}
        </div>
        </>
    )
}

export default ProfileButton;