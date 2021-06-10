import LoginComponent from './components/LoginComponent';
import AuthenticatedRoute from './components/connexion/AuthenticatedRoute';
import ListChiens from './components/chiens/ListChiens';
import './styles/index.scss';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import ErrorComponent from './pages/Erreur';
import LogoutComponent from './components/Logout';
import WelcomeComponent from './pages/Welcome';
import Chien from './components/chiens/Chien';
import About from './pages/About';
import HeaderComponent from './components/Header';
import FooterComponent from './components/Footer';

const App = () => {
  return (
    <BrowserRouter>
      <HeaderComponent />
      <Switch>
        <Route path="/" exact component={LoginComponent} />
        <Route path="/login" component={LoginComponent} />
        <AuthenticatedRoute path="/welcome/:name" component={WelcomeComponent} />
        <AuthenticatedRoute path="/chiens" component={ListChiens} />
        <AuthenticatedRoute path="/chien/:id" component={Chien} />
        <AuthenticatedRoute path="/logout" component={LogoutComponent} />
        <Route path="/about" component={About} />
        <Route component={ErrorComponent} />
      </Switch>
      <FooterComponent />
    </BrowserRouter>
  );
}

export default App;
