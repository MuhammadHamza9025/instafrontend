import React, { useState } from 'react'

const Assignment = () => {
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [city, setCity] = useState('')
    const [salary, setSalary] = useState(0)
    const [alldata, setAlldata] = useState([])

    // Track the current row being edited
    const [isEditing, setIsEditing] = useState(false)
    const [editIndex, setEditIndex] = useState(null)

    // Handle submit (for both add and update)
    const handleSubmit = (e) => {
        e.preventDefault()

        const newData = { fullName: name, email, salary, city }

        if (isEditing) {
            // Update existing entry
            const updatedData = alldata.map((item, index) => index === editIndex ? newData : item)
            setAlldata(updatedData)
            setIsEditing(false)
            setEditIndex(null)
        } else {
            // Add new entry
            setAlldata([...alldata, newData])
        }

        // Clear the form
        setName('')
        setEmail('')
        setCity('')
        setSalary(0)
    }

    const handleDelete = (index) => {
        const filteredData = alldata.filter((_, i) => i !== index)
        setAlldata(filteredData)
    }

    const handleEdit = (index) => {
        const data = alldata[index]
        setName(data.fullName)
        setEmail(data.email)
        setCity(data.city)
        setSalary(data.salary)
        setIsEditing(true)
        setEditIndex(index)
    }

    return (
        <>
            <form className='w-[600px] m-auto my-10 p-4 border-2 border-black rounded-md shadow-lg' onSubmit={handleSubmit}>
                <label htmlFor="Name"><b>Full Name</b></label>
                <br />
                <input
                    type="text"
                    placeholder='Enter your name here...'
                    className='p-2 px-4 w-[500px] my-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500'
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                />
                <br />
                <label htmlFor="Email"><b>Email</b></label>
                <br />
                <input
                    type="text"
                    placeholder='Enter your Email here...'
                    className='p-2 px-4 w-[500px] my-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500'
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                />
                <br />
                <label htmlFor="Salary"><b>Salary</b></label>
                <br />
                <input
                    type="number"
                    placeholder='Enter your salary here...'
                    className='p-2 px-4 w-[500px] my-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500'
                    value={salary}
                    onChange={(e) => setSalary(e.target.value)}
                />
                <br />
                <label htmlFor="City"><b>City</b></label>
                <br />
                <input
                    type="text"
                    placeholder='Enter your City here...'
                    className='p-2 px-4 w-[500px] my-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500'
                    value={city}
                    onChange={(e) => setCity(e.target.value)}
                />
                <br />
                <input
                    type="submit"
                    value={isEditing ? 'Update' : 'Submit'}
                    className='p-2 bg-blue-600 text-sm font-semibold text-white cursor-pointer rounded-md hover:bg-blue-700'
                />
            </form>

            {alldata.length > 0 && (
                <div className='w-[600px] m-auto mt-10'>
                    <table className='min-w-full table-auto bg-white shadow-md rounded-lg overflow-hidden'>
                        <thead>
                            <tr className='bg-blue-600 text-white'>
                                <th className='px-4 py-2'>Full Name</th>
                                <th className='px-4 py-2'>Email Id</th>
                                <th className='px-4 py-2'>Salary</th>
                                <th className='px-4 py-2'>City</th>
                                <th className='px-4 py-2'>Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            {alldata.map((item, index) => (
                                <tr key={index} className={`text-center ${index % 2 === 0 ? 'bg-gray-100' : 'bg-white'}`}>
                                    <td className='px-4 py-2'>{item.fullName}</td>
                                    <td className='px-4 py-2'>{item.email}</td>
                                    <td className='px-4 py-2'>{item.salary}</td>
                                    <td className='px-4 py-2'>{item.city}</td>
                                    <td className='px-4 py-2 flex'>
                                        <button onClick={() => handleEdit(index)} className=' bg-black text-white mr-2'>
                                            Edit
                                        </button>
                                        <button onClick={() => handleDelete(index)} className=' bg-black text-white '>
                                            Delete
                                        </button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            )}
        </>
    )
}

export default Assignment
