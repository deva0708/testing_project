// App.js (or any other component where you want to use the form)

import React from 'react';
import { Formik, Form, Field } from 'formik';
import * as Yup from 'yup';
import Select from 'react-select';

const initialValues = {
  username: '',
  password: '',
  email:'',
  contact:'',
  city: '',
  webServer: null,
  role: '',
  singleSignOn: {
    mail: false,
    payroll: false,
    selfService: false
  }
};

console.log("initialValues",initialValues)

const validationSchema = Yup.object().shape({
  username: Yup.string()
    .required('Username is required'),
  password: Yup.string()
    .required('Password is required'),
  email: Yup.string()
  .email('Invalid emaiil address')
    .required('Should accept only valid email ID'),
  contact: Yup.string()
  .matches(/^[0-9]{10}$/, 'Mobile number must be exactly 10 digits')
    .required('must be only numbers and must be exactly 10 digits'),
  city: Yup.string()
    .required('City of employment is required'),
  webServer: Yup.object()
    .shape({
      value: Yup.string(),
      label: Yup.string()
    })
    .nullable()
    .required('Web server selection is required'),
  role: Yup.string()
    .required('Role is required'),
  singleSignOn: Yup.object().shape({
    mail: Yup.boolean(),
    payroll: Yup.boolean(),
    selfService: Yup.boolean()
  })
});

const options = [
  { value: 'apache', label: 'Apache' },
  { value: 'nginx', label: 'NGINX' },
  { value: 'tomcat', label: 'Tomcat' },
  { value: 'iis', label: 'IIS' }
];

const roles = ['admin', 'engineer', 'manager', 'guest'];

const handleSubmit=(values,{setSubmitting})=>{
    setTimeout(() => {
        alert(JSON.stringify(values, null, 2));
        setSubmitting(false);
      }, 500);
}
console.log("handleSubmit",handleSubmit)


function FormComponentThree() {
    return(
  <div>
    <h1>Formik Form with Yup Validation</h1>
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={handleSubmit}
    >
      {({ isSubmitting, errors, touched }) => (
        <Form>
          <div>
            <label htmlFor="username">Username</label>
            <Field type="text" name="username" />
            {errors.username && touched.username && <div>{errors.username}</div>}
          </div>

          <div>
            <label htmlFor="password">Password</label>
            <Field type="password" name="password" />
            {errors.password && touched.password && <div>{errors.password}</div>}
          </div>

          <div>
            <label htmlFor="email">Email</label>
            <Field type="email" name="email" />
            {errors.email && touched.email && <div>{errors.email}</div>}
          </div>

          <div>
            <label htmlFor="contact">Contact</label>
            <Field type="number " name="contact" />
            {errors.contact && touched.contact && <div>{errors.contact}</div>}
          </div>

          <div>
            <label htmlFor="city">City of Employment</label>
            <Field type="text" name="city" />
            {errors.city && touched.city && <div>{errors.city}</div>}
          </div>

          <div>
            <label htmlFor="webServer">Web Server</label>
            <Field
           name="webServer"
           render={({ field, form }) => (
           <Select
           options={options}
           value={field.value}
           onChange={(option) => form.setFieldValue('webServer', option)}
           onBlur={field.onBlur}
            />
             )}
            />
            {errors.webServer && touched.webServer && <div>{errors.webServer}</div>}
          </div>

          <div>
            <label>Specify your role</label>
            <div>
              {roles.map(role => (
                <label key={role}>
                  <Field type="radio" name="role" value={role} />
                  {role}
                </label>
              ))}
            </div>
            {errors.role && touched.role && <div>{errors.role}</div>}
          </div>

          <div>
            <label>Single Sign On to the following:</label>
            <div>
              <label>
                <Field type="checkbox" name="singleSignOn.mail" />
                Mail
              </label>
              <label>
                <Field type="checkbox" name="singleSignOn.payroll" />
                Payroll
              </label>
              <label>
                <Field type="checkbox" name="singleSignOn.selfService" />
                Self-Service
              </label>
            </div>
            {errors.singleSignOn && touched.singleSignOn && (
              <div>{Object.values(errors.singleSignOn).join(', ')}</div>
            )}
          </div>

          <button type="submit" disabled={isSubmitting}>Login</button>
          <button type="reset">Reset</button>
        </Form>
      )}
    </Formik>
  </div>
);
}

export default FormComponentThree;