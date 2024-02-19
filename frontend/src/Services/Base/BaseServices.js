import axios from 'axios'
import LocalStore from '@/Store/LocalStore'

class BaseService{
    constructor() {
        axios.defaults.baseURL="https://lets-connect.pockethost.io"
    }
    getHeader() {
        return{headers:{Authorizatin:`Bearer ${LocalStore.getToken()}`}}
    }
    getBaseUrl() {
        return this.baseURL;
    }
}

export default BaseService = new BaseService()