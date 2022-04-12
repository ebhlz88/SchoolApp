import jwt_decode from 'jwt-decode';

// import Helper
import CommonHelper from '../Helpers/Common';
class AuthService{
    token;
    constructor(){
        this.token = localStorage.getItem('access_token');

    }
    getToken(){
        return this.token
    }
    setAccessToken(access_token){
        localStorage.setItem('access_token', access_token)
        this.token = access_token
    }
    logout(){
        localStorage.removeItem('access_token')
        this.token = undefined
    }
    isAuthorized(){
        if(!CommonHelper.isEmpty(this.token)){
            const jwt_token = jwt_decode(this.token);
            if(jwt_token.exp > Date.now()/1000){
                return true
            }
            return false
        }
        else{ return false }
    }

    
}
export default new AuthService();