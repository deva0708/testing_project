import React from 'react';
import { useFormik } from 'formik';
 
const FormComponent = () => {
  const formik = useFormik({
    initialValues: {
      firstName: '',
      lastName: '',
      password:'',
      email:''
    },
    onSubmit: values => {console.log("formData", values)},
    validate: values =>{
        let errors ={}
        if(!values.firstName)
        {errors.firstName='Required'}
        return errors
    }
  });
 console.log("Error message ", formik.errors)
  return (
    <div>
      <form onSubmit={formik.handleSubmit}>
        <div>
          <label htmlFor="firstName">First Name</label>
          <input
            name="firstName"
            type="text"
            onChange={formik.handleChange}
            value={formik.values.firstName}
          />
        </div>
 
        <div>
          <label htmlFor="lastName">Last Name</label>
          <input
            name="lastName"
            type="text"
            onChange={formik.handleChange}
            value={formik.values.lastName}
          />
        </div>

        <div>
          <label htmlFor="lastName">Password</label>
          <input
            name="password"
            type="pasword"
            onChange={formik.handleChange}
            value={formik.values.password}
          />
        </div>
        <div>
          <label htmlFor="lastName">Email</label>
          <input
            name="email"
            type="text"
            onChange={formik.handleChange}
            value={formik.values.email}
          />
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};
 
export default FormComponent;