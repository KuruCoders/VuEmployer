import * as yup from 'yup'

class AuthYup {
    login = yup.object({
        email: yup.string().email().required(),
        password:yup.string().required()
    })
}

export default AuthYup = new AuthYup()