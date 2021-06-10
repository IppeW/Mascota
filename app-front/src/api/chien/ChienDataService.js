import axios from 'axios';
import { JPA_API_URL } from '../../Constants';
import AuthenticationService from '../../components/connexion/AuthenticationService'



class ChienDataService {


    retrieveAllChiens(username) {
        return axios.get(`${JPA_API_URL}/${username}/chiens`);

    }

    retrieveChien(username, id) {
        //console.log('executed service')
        return axios.get(`${JPA_API_URL}/${username}/chiens/${id}`);
    }
}
export default new ChienDataService();