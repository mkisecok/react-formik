import * as yup from 'yup'

const validations = yup.object().shape({
    firstName: yup.string().min(3).required(),
    lastName:yup.string().required(),
    
    email: yup.string().email().required(),
    password:yup.string().min(5).required(),
   passwordConfirm:yup.string().oneOf([yup.ref('password')]).required()
    
  });
  export default validations