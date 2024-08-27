import React, { useState } from 'react'

const Form = () => {

    const [fname, sefname] = useState('')
    const [lastname, setlastname] = useState('')
    const [email, setemail] = useState('')
    const [pwd, setpwd] = useState('')
    const [cpwd, setcpwd] = useState('')
    const handlesubmit = () => {
        const info = { fname, lastname, email, pwd, cpwd }
        console.log(info)
    }
    return (
        <div className='flex justify-center items-center h-[100dvh]  flex-col'>
            <div className='bg-white w-[500px] h-[400px] rounded-md flex flex-col gap-3  items-center justify-center'>
                <div className='flex gap-4 items-center' ><label htmlFor="" className='font-semibold mr-10'> FirstName </label> <input type="text" placeholder='First Name' className='w-[200px] outline-none border-2 p-2' onChange={(e) => sefname(e.target.value)} /> </div>
                <div className='flex gap-4 items-center' ><label htmlFor="" className='font-semibold mr-10'> LastName </label> <input type="text" placeholder='last Name' className='w-[200px] outline-none border-2 p-2' onChange={(e) => setlastname(e.target.value)} /> </div>
                <div className='flex gap-4 items-center' ><label htmlFor="" className='font-semibold mr-10'> Email addr </label> <input type="text" placeholder='Email' className='w-[200px] outline-none border-2 p-2' onChange={(e) => setemail(e.target.value)} /> </div>
                <div className='flex gap-4 items-center' ><label htmlFor="" className='font-semibold mr-10'> Password </label> <input type="text" placeholder='Password' className='w-[200px] outline-none border-2 p-2' onChange={(e) => setpwd(e.target.value)} /> </div>
                <div className='flex gap-4 items-center' ><label htmlFor="" className='font-semibold mr-10'> C_Password </label> <input type="text" placeholder='Confirm password' className='w-[200px] outline-none border-2 p-2' onChange={(e) => setpwd(e.target.value)} /> </div>
                <button className='p-2 border  bg-gray-400' onClick={handlesubmit}>Register</button>
            </div>


        </div>
    )
}

export default Form
