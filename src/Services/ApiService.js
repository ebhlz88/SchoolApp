import Axios from "axios";
import AuthServive from './AuthService'
const url = 'http://127.0.0.1:8000/';
export default{
    postRequest(path,payload){
        return Axios.post(url+path,payload, {
            headers: this.getAuthHeader() 
        })
    },
    getRequest(path){
        return Axios.post(url+path)
    },
    getAuthHeader(){
        const token = AuthServive.getToken();
        if(token){
            return {
                Authorization : 'token '+token
            }
        }
    }
}