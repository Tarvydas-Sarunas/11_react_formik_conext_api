import axios from "axios"
import { useFormik } from "formik"
import * as Yup from 'yup';
import Btn from "../ui/Btn";


const product = {
  title: "iPhone 9",
  description: "An apple mobile which is nothing like apple",
  price: 549,
  isOnSale: true,
  rating: 4.69,
  stock: 94,
  brand: "Apple",
  category: "smartphones",
  thumbnail: "...",
  adminEmail: "",
}

function SmartInput({name, formik, type = 'text', placeholder}) {
  return (<label className="block mb-4">
  <span className="text-lg block first-letter:uppercase">{name}</span>
  <input onChange={formik.handleChange} onBlur={formik.handleBlur} value={formik.values[name]} name={name} className={`border w-full px-2 py-[5px] rounded-md ${formik.touched[name] && formik.errors[name] ? 'border-red-500 bg-red-50': 'border-slate-300' } `} type={type} placeholder={placeholder || 'Enter ' + name}/>
 {formik.touched[name] && formik.errors[name] && <div className="bg-red-100 text-red-900 px-4 py-1 mt-2 rounded-md"><p>{formik.errors[name]}</p></div>}
</label>)
}

export default function AddProduct() {

const formik = useFormik({
  initialValues: {
    title: 'Iphone 15',
    description: 'very good phone',
    price: '999',
    rating: '4.8',
    stock: '50',
    isOnSale: false,
    brand: "apple",
    category: "smartphones",
    thumbnail: "",
    adminEmail: "admin@mail.com",
  },
validationSchema: Yup.object({
  title: Yup.string().min(3).max(15, 'biski trumpiau please').required(),
  description: Yup.string().min(5).max(500).required(),
  price: Yup.number().min(0).max(99999).required(),
  rating: Yup.number().min(0).max(5).required(),
  stock: Yup.number().min(1).max(1000).required(),
  category: Yup.string().min(5).max(100).required(),
  thumbnail: Yup.string().min(5).max(100).required(),
  brand: Yup.string().min(5).max(100).required(),
  adminEmail: Yup.string().email().required(),

}),

  onSubmit: (values) => {
      // alert(JSON.stringify(values, null, 2))
      // fetch
      // url = 'https://dummyjson.com/products/add'
      sendFetch(values)
      sendAxios(values)
  },
})

function sendAxios(dataToSend) {
  axios.post('https://dummyjson.com/products/add', dataToSend)
  .then((resp) => console.log('resp ===', resp))
  .catch((error) => console.warn('ivyko klaida:', error))
}

function sendFetch(dataToSend) {
  fetch('https://dummyjson.com/products/add', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(dataToSend)
      })
      .then(res => res.json())
      .then((data) => console.log('data ===', data))
      .catch(error => {
      console.warn('ivyko klaida:', error);
      });
}

// console.log('formik values===', formik.values);
console.log('formik errors===', formik.errors);
  return (
    <div className="container mb-96">

      <h2 className="text-4xl my-5">Create new product</h2>
<div>
  <p>Title: {formik.values.title}</p>
</div>
      <form noValidate onSubmit={formik.handleSubmit} className="grid grid-cols-2 gap-x-5">
        {/* one input */}
        <SmartInput name={'title'}  formik={formik}/>
        {/* <label className="block mb-4">
          <span className="text-lg block ">Title</span>
          <input onChange={formik.handleChange} onBlur={formik.handleBlur} value={formik.values.title} name="title" className={`border w-full px-2 py-[5px] rounded-md ${formik.touched.title && formik.errors.title ? 'border-red-500 bg-red-50': 'border-slate-300' } `} type="text" placeholder="Enter Title"/>
         {formik.touched.title && formik.errors.title && <div className="bg-red-100 text-red-900 px-4 py-1 mt-2 rounded-md"><p>{formik.errors.title}</p></div>}
        </label> */}

{/* one input */}
<label className="block mb-4">
          <span className="text-lg block ">Brand</span>
          <select onChange={formik.handleChange} value={formik.values.brand} name="brand" id="brand" className="border w-full px-2 py-[7px] border-slate-300 rounded-md">
          <option value='apple'>Apple</option>
          <option value='samsung'>Samsung</option>
          <option value='honor'>Honor</option>
          </select>
        </label>
        
        {/* one input */}
        <SmartInput name={'price'}  formik={formik} type='number' placeholder='Enter title'/>

        {/* one input */}
        <SmartInput name={'rating'}  formik={formik} type='number'/>

        {/* one input */}
        <SmartInput name={'stock'}  formik={formik} type='number'/>
      
        {/* one input */}
        <SmartInput name={'category'}  formik={formik}/>

        {/* one input */}
        <SmartInput name={'thumbnail'}  formik={formik}/>

        {/* one input */}
        <SmartInput name={'adminEmail'} formik={formik} type='email'/>

{/* one input */}
<label className="block mb-4 col-span-2">
          <span className="text-lg block ">Description</span>
          <textarea onChange={formik.handleChange} value={formik.values.description} name="description" className="border w-full px-2 py-[5px] border-slate-300 rounded-md min-h-20" type="text" placeholder="Enter Description"/>
          {formik.errors.description && <div className="bg-red-100 text-red-900 px-4 py-1 mt-2 rounded-md"><p>{formik.errors.description}</p></div>}
        </label>

        {/* btn */}
        <Btn type="submit">Add</Btn>
      </form>
      </div>
  )
}

