import { NavLink } from 'react-router-dom';


const WelcomeComponent = () => {
    return (

        <div className="welcome">
            <h1>Welcome !</h1>
            <NavLink to="/chiens"><div className="menu_canins"></div></NavLink>
            <div>Voir la liste des chiens</div>
        </div>

    )


}

export default WelcomeComponent