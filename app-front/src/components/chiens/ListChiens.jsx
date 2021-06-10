import { useState, useEffect } from 'react';
import ChienDataService from '../../api/chien/ChienDataService'
import AuthenticationService from '../connexion/AuthenticationService'
import Card from '../Card'
import axios from 'axios';



const ListChiens = () => {

    const [data, setData] = useState([]);

    useEffect(() => {


        let username = AuthenticationService.getLoggedInUserName()
        //ChienDataService.retrieveAllChiens()

        //     .then((res) => setData(res.data))

        axios.get(
            `http://localhost:8080/jpa/${username}/chiens`
        )
            .then((res) => setData(res.data));


        // ChienDataService.retrieveAllChiens()

    }, []);



    let refreshChiens = () => {
        let username = AuthenticationService.getLoggedInUserName()
        ChienDataService.retrieveAllChiens(username)
            .then(
                response => {
                    this.setData({ chiens: response.data })
                }
            )
    }


    return (
        <div className="chiens">
            <ul className="chiensList">

                {data.map((chiens) => (
                    <Card chiens={chiens} key={chiens.id} />
                ))}

            </ul>
        </div>
    )
}



export default ListChiens