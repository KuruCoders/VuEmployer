import * as yup from 'yup'

class AuthYup {
    login = yup.object({
        email: yup.string().email().required(),
        password:yup.string().required()
    })
    register = yup.object({
        name: yup.string().required(),
        email: yup.string().email().required(),
        password: yup.string().min(8).required(),
        telephone:yup.string().matches(/^[0-9]+$/,'Only Number').length(10,'Must be 9 digits').required()
    })
}

export default AuthYup = new AuthYup()