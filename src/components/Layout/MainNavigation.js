import { useContext } from 'react';
import { Link } from 'react-router-dom';
import AuthContext from '../Store/auth-context';

import classes from './MainNavigation.module.css';

const MainNavigation = () => {

  const logouthandler=()=>{
    Autctx.logout()
  }

  const Autctx=useContext(AuthContext)

  const isLoggedIn=Autctx.isLoggedIn

  return (
    <header className={classes.header}>
      <Link to='/'>
        <div className={classes.logo}>React Auth</div>
      </Link>
      <nav>
        <ul>
          {!isLoggedIn && ( <li>
            <Link to='/auth'>Login</Link>
          </li>) }
         {isLoggedIn && ( <li>
            <Link to='/profile'>Profile</Link>
          </li>)}
         {isLoggedIn && (<li>
            <button onClick={logouthandler}>Logout</button>
          </li>)}
          
        </ul>
      </nav>
    </header>
  );
};

export default MainNavigation;
