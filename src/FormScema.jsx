import * as Yup from 'yup'

export const FormSchema=Yup.object({
    name:Yup.string().min(3).max(20).required("name is must"),
    email:Yup.string().email().required("Email is must"),
    pass:Yup.string()
    .required("password is must")
    .matches(/^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/,"enter strong password"),
    cpass:Yup.string().required("confirm password is must")
    .oneOf([Yup.ref('pass'),null],"both password must matched")
})


// https://stackoverflow.com/questions/19605150/regex-for-password-must-contain-at-least-eight-characters-at-least-one-number-a