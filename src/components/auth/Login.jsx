import React, { useState } from 'react'
import SmartInput from '../ui/SmartInput'
import { useFormik } from 'formik'
import * as Yup from 'yup';
import Btn from '../ui/Btn';
import axios from 'axios';

export default function Login({onLogin}) {

  // 1. sukurti state isError
const [isError, setIsError] = useState('')
const [isLoading, setIsLoading] = useState(false)

const formik = useFormik({
  initialValues: {
    email: 'kminchelle',
    password: '0lelplR',
  },
  validationSchema: Yup.object({
    email: Yup.string().min(4).max(255).required(),
    password: Yup.string().required(),
  }),
  onSubmit: ((values) => {
    setIsError('')
    setIsLoading(true)
    console.log('values ===', values);
    sendAxiosRequest({
      password: values.password,
      username: values.email,
    })
  })
})

function sendAxiosRequest(dataToSend) {
  axios.post('https://dummyjson.com/auth/login', dataToSend)
  .then((resp) => {
    console.log('resp ===', resp)
    console.log('resp.data ===', resp.data);
    const {token} = resp.data
    // issaugoti i local storage
    onLogin(token)
    // localStorage.setItem('userToken', token);
    // istrinti klaida
    
// redirectiname kitur
  })
  .catch(error => {
    console.warn('ivyko klaida:', error);
  // 2. set error
  setIsError(error.response.data.message)
  })
  .finally(() => {
    setIsLoading(false)
  })

}

  return (
    <div className='mt-5'>
      <h2 className='text-3xl mb-8'>Login</h2>

{/* 3. shove error in p tag formated as error */}
{isError && <div className="bg-red-100 text-red-900 px-4 py-1 mt-2 rounded-md"><p>{isError}</p></div>}

{isLoading && <h2 className="text-blue-500 border-blue-500 px-4 py-1 mt-2 rounded-md">Loading...</h2>}
      {!isLoading && <form onSubmit={formik.handleSubmit} >
        <SmartInput name={'email'} formik={formik}/>
        <SmartInput name={'password'} formik={formik} type='password'/>
        <Btn type='submit'>Login</Btn>
      </form>}
    </div>
  )
}
