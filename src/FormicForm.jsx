import React, { useState } from 'react';
import { useFormik } from 'formik';
import { FormSchema } from './FormScema';
import './style.css'

function FormicForm() {
  const[showpassword,setShowpassword]=useState(false)
  const formikInitialValues = {
    name: '',
    email: '',
    pass:'',
    cpass:''
  };

  const { handleSubmit, handleChange, values, errors ,handleBlur,touched} = useFormik({
    initialValues: formikInitialValues,
    validationSchema: FormSchema,
    onSubmit: (values,action) => {
      console.log(values);
      action.resetForm()
    },
  });

  const showpass=()=>{
    setShowpassword(!showpassword)
  }
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label htmlFor="name">Enter Name</label>
        <input type="text" name="name" onBlur={handleBlur} onChange={handleChange} value={values.name}/>
        <br />
        {errors.name && touched.name? ( <span style={{ color: "red" }}>{errors.name}</span>):null}
        <br />

        <label htmlFor="email">Enter email</label>
        <input type="text" name="email" onBlur={handleBlur} onChange={handleChange} value={values.email}/>
        <br />
        {errors.email && touched.email? ( <span style={{ color: "red" }}>{errors.email}</span>):null}
        <br />

        <label htmlFor="email">Enter Password</label>
        <input type={showpassword?'text':'password'} name="pass" onBlur={handleBlur} onChange={handleChange} value={values.pass}/>
        {errors.pass && touched.pass? ( <span style={{ color: "red" }}>{errors.pass}</span>):null}
        <br />
        <br />
        <button onClick={showpass}>show password</button>
        <br />
        <br />
        <label htmlFor="email">Varify Password</label>
        <input type={showpassword?'text':'password'} name="cpass" onBlur={handleBlur} onChange={handleChange} value={values.cpass}/>
        {errors.cpass && touched.cpass? ( <span style={{ color: "red" }}>{errors.cpass}</span>):null}
      
        <br />
        <br />
        <input type="submit" value="submit" />
      </form>
    </div>
  );
}

export default FormicForm;
