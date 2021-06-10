import { Route, Redirect } from 'react-router-dom';
import AuthenticationService from "./AuthenticationService.js";

const AuthenticatedRoute = (props) => {

    if (AuthenticationService.isUserLoggedIn()) {
        return <Route {...props} />
    } else {
        return <Redirect to="/login" />
    }

}


export default AuthenticatedRoute