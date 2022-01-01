import * as yup from 'yup'

const validations = yup.object().shape({
    firstName: yup.string().min(3, 'Your name must have min 3 character').required(),
    lastName:yup.string().required(),
    email: yup.string().email().required(),
    gender:yup.string().oneOf(['male','female','other']).required() ,
    password:yup.string().min(5).required(),
    passwordConfirm:yup.string().oneOf([yup.ref('password')],'Thats not a same with your password').required(),
    
  });
  export default validations