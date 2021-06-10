import { NavLink } from 'react-router-dom';

const FooterComponent = () => {
    return (
        <footer className="footer">
            <span className="copyright">©Mascota</span>
            <NavLink className="about" exact to="/about">À propos</NavLink>

        </footer>
    )
}


export default FooterComponent