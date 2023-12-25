import { useState } from "react"

const Signup = () => {

    const [formData, setFormData]= useState({
        firstName:'',
        lastName:'',
        email:'',
        password:'',
        promotions:true,
    })

  return (
    <div className='w-full flex justify-between items-center'>
    <div className="flex flex-col">
    <div>

    </div>
    <div>
        
    </div>

    </div>
    <div>
        <img src='./images/signup.png' alt='signup image'/>
    </div>
    </div>
  )
}

export default Signup