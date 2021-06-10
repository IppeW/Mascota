import AuthenticationService from './connexion/AuthenticationService';
import { NavLink } from 'react-router-dom';
import { withRouter } from 'react-router';

const HeaderComponent = () => {

    const isUserLoggedIn = AuthenticationService.isUserLoggedIn()

    return (
        <header>
            <nav className="header">
                <NavLink to="Mascota.fr" className="">Logo</NavLink>
                <ul className="">
                    {isUserLoggedIn && <NavLink className="" exact to="/welcome/meddi">Home</NavLink>}
                    {isUserLoggedIn && <NavLink className="" exact to="/chiens">Chiens</NavLink>}
                </ul>
                <ul className="">
                    {!isUserLoggedIn && <NavLink className="" exact to="/login">Login</NavLink>}
                    {isUserLoggedIn && <NavLink className="" exact to="/logout" onClick={AuthenticationService.logout}>Logout</NavLink>}
                </ul>
            </nav>
        </header>

    )
}



export default withRouter(HeaderComponent)