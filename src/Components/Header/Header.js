import React from 'react';
import { useContext } from 'react';
import './Header.css';
import { Link, useLocation } from 'react-router-dom';
import logo from '../../FakeData/Logo.png'
import { handleSignOut } from '../LogInForm/loginManager';
import { UserContext } from '../../App';



const Header = () => {
    const [loggedInUser, setLoggedInUser, user, setUser] = useContext(UserContext);
    const location = useLocation();
    const isLocation = location.pathname === '/' || location.pathname === '/home' || location.pathname === '/booking/sreemangal' || location.pathname === '/booking/sundarban' || location.pathname === '/booking/sajek';

    const signOut = () => {
        window.confirm('Are you sure you want to Log Out?');
        handleSignOut()
        .then(res => {
          setUser(res);
          setLoggedInUser(res);
        });
    }
    
    return (
        <nav className={`container navbar navbar-expand-md px-4 px-md-0 ${isLocation? 'navbar-dark': 'navbar-light'}`}>
            <Link to='/' className='navbar-brand'>
                <img className={`${isLocation? 'logo-white' : ''}`} src={logo} alt=""/>
            </Link>

            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>

            <div className="collapse navbar-collapse text-center" id="navbarSupportedContent">
                {
                    isLocation && <form className="form my-2 my-lg-0">
                        <input className="form-control mr-sm-2" type="search" placeholder="&#xF002; Search Your Destination.." aria-label="Search"/>
                    </form>
                }
                <ul className="navbar-nav ml-auto">
                    <li className="nav-item active">
                        <Link className="nav-link" to="/">News</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to="/">Destination</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to="/">Blog</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to="/">Contact</Link>
                    </li>
                    <li className="nav-item">
                    {
                        loggedInUser.name ? <Link title="Click to LogOut" to="/" className="btn" onClick={signOut}>{loggedInUser.name}</Link> : <Link className="btn" to="/login">LogIn</Link>
                    }
                    </li>
                </ul>
                
  </div>
</nav>
    );
};

export default Header;