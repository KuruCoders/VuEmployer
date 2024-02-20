import axios from "axios";
import BaseServices from "../Base/BaseServices";

class EmployeeService {
    constructor() {
        BaseServices.getBaseUrl()
        this.ADDEMP_URL = "/api/collections/employee/records"
    }
    employeeCreate(input) {
        let data = {
            name: input.name,
            email: input.email,
            storecode: input.storecode,
            country:input.country
        }
        return axios.post(this.ADDEMP_URL,data)
    }
    getAllEmp() {
        return axios.get(this.ADDEMP_URL)
    }
    deleteEmp(id) {
        return axios.delete(`${this.ADDEMP_URL}/${id}`)
    }
    getEmpById(id) {
        return axios.get(`${this.ADDEMP_URL}/${id}`)
    }
    updateEmp(input,id) {
        let data = {
            name: input.name,
            email: input.email,
            storecode: input.storecode,
            country:input.country
        }
        return axios.patch(`${this.ADDEMP_URL}/${id}`,data)
    }
}

export default EmployeeService = new EmployeeService()