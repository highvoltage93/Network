import React, {useState} from 'react';
import './NavBar.css'
import { NavLink } from 'react-router-dom';
import UserLogo from '../Utills/Pictures/user.jpg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSignOutAlt, faHome, faCommentDots, faUserCircle, faBell, faRss, faCog, faTh } from '@fortawesome/free-solid-svg-icons'
import AuthContainer from '../AuthPage/AuthComponent/AuthContainer';
 
const NavBar = (props) => {

    const [edit, setEdit] = useState(false);

    let updateStatus = (e) => {
        setEdit(false)
        props.editStatus(e.target.value)
    }

    return (
        <div className="navbar">
            {
                props.auth && props.user
                    ? <div>
                        <div className="info">
                            <img className="avatar" src={props.user.avatar ? props.user.avatar : UserLogo} alt=""/>
                            <h6>{props.user.name}</h6>
                            <form>
                                {
                                edit 
                                    ? <input onBlur={(e) => updateStatus(e)}  onChange={(e) => props.editStatusValue(e.target.value)}  className="status" value={props.status} 
                                    name="status"/>
                                    : <p onDoubleClick={() => setEdit(true)} className="status">{props.status}</p>
                                }
                            </form>
                        </div>
                        <div className="nav-menu">
                            <NavLink to="/main"><FontAwesomeIcon icon={faHome} />Main Page</NavLink>
                            <NavLink to="/posts"><FontAwesomeIcon icon={faTh} />My Posts</NavLink>
                            <NavLink to="/chat"><FontAwesomeIcon icon={faCommentDots}/>Chat</NavLink>
                            <NavLink to="/myFriends"><FontAwesomeIcon icon={faUserCircle}/>Friends</NavLink>
                            <NavLink to="/notifications"><FontAwesomeIcon icon={faBell}/>Notifications</NavLink>
                            <NavLink to="/news"><FontAwesomeIcon icon={faRss}/>News</NavLink>
                            <NavLink to="/settings"><FontAwesomeIcon icon={faCog}/>Settings</NavLink>
                            <p className="logOut" onClick={props.logOut}><FontAwesomeIcon icon={faSignOutAlt}/>Logout</p>
                        </div>
                        </div>
                    : <AuthContainer/>
            }
            
        </div>
    );
}
 
export default NavBar;