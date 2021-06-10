import { Component } from "react";
import AuthenticationService from "./connexion/AuthenticationService";


class LoginComponent extends Component {

    constructor(props) {
        super()

        this.state = {
            username: 'meddi',
            password: '',
            hasLoginFailed: false,
            showSuccessMessage: false
        }
        this.handleChange = this.handleChange.bind(this)
        this.loginClicked = this.loginClicked.bind(this)
    }

    handleChange(event) {
        this.setState(
            {
                [event.target.name]
                    : event.target.value
            })
    }

    loginClicked() {
        // if (this.state.username === 'meddi' && this.state.password === 'dummy') {
        //     AuthenticationService.registerSuccessfulLogin(this.state.username, this.state.password);
        //     this.props.history.push(`/welcome/${this.state.username}`)
        // } else {
        //     this.setState({ showSuccessMessage: false })
        //     this.setState({ hasLoginFailed: true });
        // }

        AuthenticationService
            .executeJwtAuthenticationService(this.state.username, this.state.password)
            .then((response) => {
                AuthenticationService.registerSuccessfulLoginForJwt(this.state.username, response.data.token)
                this.props.history.push(`/welcome/${this.state.username}`)
            }).catch(() => {
                this.setState({ showSuccessMessage: false })
                this.setState({ hasLoginFailed: true })
            })

    }

    render() {

        return (
            <div className="card">
                <img src="./image/mascota_logo.png" className="logo" alt="Mascota login"></img>
                <div className="login">
                    <p className="textAccroche">La bible des animaux</p>
                </div>

                {/* <form> */}
                <div className="">
                    {this.state.hasLoginFailed && <div className="labelWarning">Connexion impossible!</div>}
                    <label htmlFor="username" className="labelForm">User Name</label>
                    <input type="text" className="textBox info" id="exampleInputEmail1" aria-describedby="username" name="username" value={this.state.username} onChange={this.handleChange} />
                </div>
                <div className="">
                    <label htmlFor="password" className="labelForm">Password</label>
                    <input type="password" className="textBox info" value={this.state.password} onChange={this.handleChange} name="password" />
                </div>
                {/* <div className="mb-3 form-check">
                        <input type="checkbox" className="form-check-input" id="exampleCheck1" />
                        <label className="form-check-label" for="exampleCheck1">Check me out</label>
                    </div> */}
                <button type="submit" className="bouton" onClick={this.loginClicked}>Connexion</button>
                {/* </form> */}



            </div>


        )
    }
}

export default LoginComponent