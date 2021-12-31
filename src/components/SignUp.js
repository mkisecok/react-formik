import './SignUp.css'
import React from 'react'
import { Formik} from 'formik';

function SignUp() {
   
    return (
        <div>
             <h1>Sign Up</h1>
    <Formik
      initialValues={{
        firstName: '',
        lastName: '',
        email: '',
        gender:'',
        hobies:[],
        country:'',
      }}
      onSubmit={(values) => {
       
      console.log(values);
      }}
    >
        {
            ({handleSubmit,handleChange,values})=>(
                <form onSubmit={handleSubmit}>
                <label htmlFor="firstName">First Name</label>
                <input  
                name="firstName" 
                placeholder="max" 
                value={values.firstName}
                onChange={handleChange} />
                <br />
                <br />
        
                <label htmlFor="lastName">Last Name</label>
                <input  
                name="lastName" 
                placeholder="Musterman" 
                value={values.lastName}
                onChange={handleChange}/>
        
                <br />
                <br />
        
                <label htmlFor="email">Email</label>
                <input
                  onChange={handleChange}
                  name="email"
                  placeholder="maxmusterman@acme.com"
                  value={values.email}
                  type="email"
                />
                 <br />
                <br />

                {/* Radio input */}
                <label htmlFor="gender">Gender</label>
                <br />
                
                <input
                  onChange={handleChange}
                  name="gender"
                  value='male'
                  type='radio'
                />
                <span>Male</span>
                
                 <input
                  onChange={handleChange}
                  name="gender"
                  value='female'
                  type='radio'
                /><span>Female</span>
                
                 <input
                  onChange={handleChange}
                  name="gender"
                  value='other'
                  type='radio'
                /><span>Other</span>
                <br />
                <br />

                {/* Checkbox */}
                <div><input type="checkbox" name="hobies" value='Football' onChange={handleChange}/>Footbal</div>
                <div><input type="checkbox" name="hobies" value='Cinema' onChange={handleChange} />Cinema</div>
                <div><input type="checkbox" name="hobies" value='Photography' onChange={handleChange}/>Photography</div>
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
                {JSON.stringify(values)}
              </form>
            )
        }
     
    </Formik>
        </div>
    )
}

export default SignUp
