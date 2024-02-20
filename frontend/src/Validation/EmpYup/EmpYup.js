import * as yup from 'yup'

class EmpYup{
    addEmp = yup.object({
        name: yup.string().required(),
        email: yup.string().email().required(),
        storecode: yup.string().required(),
        country : yup.string().required()
    })
    editEmp=yup.object({
        name: yup.string().required(),
        email: yup.string().email().required(),
        storecode: yup.string().required(),
        country : yup.string().required()
    })
}

export default EmpYup = new EmpYup()