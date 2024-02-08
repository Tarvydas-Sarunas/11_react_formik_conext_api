import React from 'react'
import SmartInput from '../ui/SmartInput'
import { useFormik } from 'formik'
import * as Yup from 'yup';

export default function Login() {

const formik = useFormik({
  initialValues: {
    email: '',
    password: '',
  },
  validationSchema: Yup.object({
    email: Yup.string().email().required(),
    password: Yup.string().required(),
  }),
})

  return (
    <div className='container'>
      <h2 className='text-3xl mb-8'>Login</h2>
      <form >
        <SmartInput name={'email'} formik={formik}/>
        <SmartInput name={'password'} formik={formik} type='password'/>
      </form>
    </div>
  )
}
