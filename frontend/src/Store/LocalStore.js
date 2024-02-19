class LocalStore{
    storeToken(data) {
        localStorage.setItem('employerToken',data)
    }
    getToken() {
        return localStorage.getItem('employerToken')
    }
    removeToken() {
        localStorage.removeItem('employerToken')
    }
}

export default LocalStore = new LocalStore()