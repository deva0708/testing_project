import React from 'react';
import { Field,ErrorMessage, Form, Formik } from 'formik';
import * as Yup from 'yup';

const validationschema = Yup.object().shape({
    firstName:Yup.string()
                       .required('first name required'),
    lastName:Yup.string()
                       .required('last name required'),
});

function FormComponentTwo(){

    const initialValues={
        firstName:'',
        lastName:''
    };
    console.log('initialValues',initialValues);

    const handleSubmit=(values)=>{
        setTimeout(() => {
            alert(JSON.stringify(values, null,1))
        }, 500);
    }

  return (
    <Formik initialValues={initialValues}
    validationschema={validationschema}
    onSubmit={handleSubmit}>
        <Form>
            <div>
                <label htmlFor='firstName'>firstName</label>
                <Field type="text" name='firstname' />
                <ErrorMessage name="firstname" component='div'/>
            </div>
            <div>
                <label htmlFor='lastName'>firstName</label>
                <Field type="text" name='lastname' />
                <ErrorMessage name="lastname" component='div'/>
            </div>
            <button type="submit">Submit</button>
        </Form>
    </Formik>
  )
};
 
export default FormComponentTwo;