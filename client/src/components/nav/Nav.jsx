import { Link } from "react-router-dom";
import "./nav.css"

export default function Nav() {
    const user = false;
    return (
        <div className="nav">
            <div className="navLeft">
                <i className="navIcon fab fa-linkedin"></i>
                <i className="navIcon fas fa-envelope-square"></i>
            </div>
            <div className="navCenter">
                <ul className="navList">
                    <li className="navListItem"><Link className="link" to="/">HOME</Link></li>
                    <li className="navListItem"><Link className="link" to="/">CONTACT</Link></li>
                    <li className="navListItem"><Link className="link" to="/write">WRITE</Link></li>
                    <li className="navListItem">
                        {user && "LOGOUT"}
                    </li>
                </ul>
            </div>
            <div className="navRight">
                {
                    user ? (
                        <img 
                            className="navImg"
                            src="https://pbs.twimg.com/media/C7ie45-XwAQaCUq.jpg" 
                            alt="" />
                    ) : (
                        <ul className="navList">
                            <li className="navListItem"><Link className="link" to="/login">LOGIN</Link></li>
                            <li className="navListItem"><Link className="link" to="/register">REGISTER</Link></li>
                        </ul>
                    )
                }
                
                <i className="navSearch fas fa-search"></i>
            </div>
        </div>
    )
}
