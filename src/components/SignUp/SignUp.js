import './SignUp.css'
import React from 'react'
import {  useFormik } from 'formik';
import validationSchema from '../validation';


function SignUp() {
    const {handleSubmit,handleChange, handleBlur,values,errors,touched} = useFormik({
        initialValues: {
            firstName: '',
            lastName: '',
            email: '',
            gender:'',
            hobbies:[],
            country:'',
            password:'',
            passwordConfirm:''
        },
        onSubmit: values => {
            console.log(values);
        },
        validationSchema,
      });
      console.log(errors)
   
    return (
        <div>
             <h1>Sign Up</h1>
    
                <form onSubmit={handleSubmit}>
                <label htmlFor="firstName">First Name</label>
                <input  
                name="firstName" 
                placeholder="max" 
                value={values.firstName}
                onChange={handleChange}
                onBlur={handleBlur} />
                {errors.firstName &&  touched.firstName && <div className='errors'>{errors.firstName}</div>}
                <br />
                <br />
        
                <label htmlFor="lastName">Last Name</label>
                <input  
                name="lastName" 
                placeholder="Musterman" 
                value={values.lastName}
                onChange={handleChange}
                onBlur={handleBlur}/>
              {errors.lastName && touched.lastName && <div className='errors'>{errors.lastName}</div>}
                <br />
                <br />
        
                <label htmlFor="email">Email</label>
                <input
                  onChange={handleChange}
                  onBlur={handleBlur}
                  name="email"
                  placeholder="maxmusterman@acme.com"
                  value={values.email}
                  type="email"
                />
                {errors.email && touched.email && <div className='errors'>{errors.email}</div>}
                 <br />
                <br />
                {/* Password and confirmPassword*/}
                <label htmlFor="password">Password</label>
                <input  
                name="password" 
                type='password'
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.password}
                 />
                 {errors.password && touched.password && <div className='errors'>{errors.password}</div>}
                <br />
                <br />
                <label htmlFor="passwordConfirm">Password Confirm</label>
                <input  
                name="passwordConfirm" 
                type='password'
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.passwordConfirm}
               
                />
                 {errors.passwordConfirm && touched.passwordConfirm && <div className='errors'>{errors.passwordConfirm}</div>}
                <br />
                <br />

                {/* Radio input */}
                <label htmlFor="gender">Gender</label>
                <br />
                
                <input
                  onChange={handleChange}
                  onBlur={handleBlur}
                  name="gender"
                  value='male'
                  type='radio'
                />
                <span>Male</span>
                
                 <input
                  onChange={handleChange}
                  onBlur={handleBlur}
                  name="gender"
                  value='female'
                  type='radio'
                /><span>Female</span>
                
                 <input
                  onChange={handleChange}
                  onBlur={handleBlur}
                  name="gender"
                  value='other'
                  type='radio'
                /><span>Other</span>
                <br />
                {errors.gender && touched.gender && <div className='errors'>{errors.gender}</div>}
                <br />
                <br />
                {/* Checkbox */}
                <div><input type="checkbox" name="hobbies" value='Football' onChange={handleChange}/>Footbal</div>
                <div><input type="checkbox" name="hobbies" value='Cinema' onChange={handleChange} />Cinema</div>
                <div><input type="checkbox" name="hobbies" value='Photography' onChange={handleChange}/>Photography</div>
                <br />
                <br />
                {/* Dropdown */}
                <select name="country" value={values.country} onChange={handleChange}>
                    <option value="turkey"  >Turkey</option>
                    <option value="german" >German</option>
                    <option value="usa"  >USA</option>
                </select>

                <br />
                <br />
                <button type="submit">Submit</button>
                <br />
                <br />
                
                
              </form>
              <pre>{JSON.stringify(values,null,2)}</pre>
              

              </div>
        
    )
}

export default SignUp
