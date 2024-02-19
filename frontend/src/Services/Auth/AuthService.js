import axios from "axios";
import BaseServices from "../Base/BaseServices";

class AuthService{
    constructor() {
        BaseServices.getBaseUrl()
        this.REGISTER_URL = "/api/collections/users/records"
        this.LOGIN_URL = "/api/collections/users/auth-with-password"
    }
    authRegister(input) {
        let data = {
            name:input.name,
            email:input.email,
            password:input.password,
            passwordConfirm:input.password,
        }
        return axios.post(this.REGISTER_URL,data)
    }
    authLogin(input) {
        let data = {
            identity:input.email,
            password:input.password,
        }
        return axios.post(this.LOGIN_URL,data)
    }
}

export default AuthService = new AuthService()