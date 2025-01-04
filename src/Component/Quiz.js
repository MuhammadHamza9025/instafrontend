import React, { useEffect, useState } from 'react';
import { json, useNavigate } from 'react-router-dom';

const Quiz = () => {
    const navigate = useNavigate()
    const [data, setdata] = useState([])
    const [formData, setFormData] = useState({
        studentName: '',
        fatherName: '',
        address: '',
        gpa: '',
        email: '',
        phone: '',
        gender: 'Male',
        degree: '',
        grade: '',
        institution: '',
        feedback: '',
        agreement: false,
    });

    const handleChange = (e) => {
        const { name, value, type, checked } = e.target;
        setFormData({
            ...formData,
            [name]: type === 'checkbox' ? checked : value,
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(formData);

        if (!formData.gpa || !formData.email || !formData.studentName) { alert('fields missing , GPA !') }
        else {
            localStorage.setItem('info', JSON.stringify(formData))
            navigate('/success')
        }
    };


    useEffect(() => {
        const storedData = localStorage.getItem('info');
        if (storedData) {
            return setdata(JSON.parse(storedData))
            console.log(data)  // Parse the string back into an object
        }

    }, [])
    return (
        <>
            <div className='bg-blue-100 py-10'>
                <h1 className='text-center text-3xl font-semibold mb-6'>Students Registration Form</h1>
                <div className="flex justify-center bg-blue-200 py-8">
                    <form
                        onSubmit={handleSubmit}
                        className="bg-blue-50 shadow-md rounded px-8 pt-6 pb-8 w-full max-w-md border border-blue-300"
                    >
                        <h2 className="text-xl font-bold mb-4">Personal Information</h2>

                        <div className="mb-4">
                            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="studentName">
                                *Student Name:
                            </label>
                            <input
                                type="text"
                                name="studentName"
                                id="studentName"
                                value={formData.studentName}
                                placeholder='Enter Text Here...'
                                onChange={handleChange}
                                className="shadow border rounded w-full py-2 px-3 text-gray-700"
                                required
                            />
                        </div>

                        <div className="mb-4">
                            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="fatherName">
                                *Student's Father Name:
                            </label>
                            <input
                                type="text"
                                placeholder='Enter Text Here...'
                                name="fatherName"
                                id="fatherName"
                                value={formData.fatherName}
                                onChange={handleChange}
                                className="shadow border rounded w-full py-2 px-3 text-gray-700"
                            />
                        </div>

                        <div className="mb-4">
                            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="address">
                                Home Address:
                            </label>
                            <input
                                type="text"
                                placeholder='Enter Text Here...'
                                name="address"
                                id="address"
                                value={formData.address}
                                onChange={handleChange}
                                className="shadow border rounded w-full py-2 px-3 text-gray-700"
                            />
                        </div>

                        <div className="mb-4">
                            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
                                *Email Address:
                            </label>
                            <input
                                type="email"
                                placeholder='Enter email Here...'
                                name="email"
                                id="email"
                                value={formData.email}
                                onChange={handleChange}
                                className="shadow border rounded w-full py-2 px-3 text-gray-700"
                                required
                            />
                        </div>

                        <div className="mb-4">
                            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="phone">
                                Telephone No:
                            </label>
                            <input
                                type="text"
                                name="phone"
                                placeholder='Enter phone Here...'
                                id="phone"
                                value={formData.phone}
                                onChange={handleChange}
                                className="shadow border rounded w-full py-2 px-3 text-gray-700"
                            />
                        </div>

                        <div className="mb-4">
                            <label className="block text-gray-700 text-sm font-bold mb-2">Gender:</label>
                            <div className="flex items-center">
                                <label className="inline-flex items-center mr-4">
                                    <input
                                        type="radio"
                                        name="gender"
                                        value="Male"
                                        onChange={handleChange}
                                        className="mr-2"
                                    />
                                    Male
                                </label>
                                <label className="inline-flex items-center">
                                    <input
                                        type="radio"
                                        name="gender"
                                        value="Female"
                                        onChange={handleChange}
                                        className="mr-2"
                                    />
                                    Female
                                </label>
                            </div>
                        </div>

                        <h2 className="text-xl font-bold mb-4">Educational Information</h2>

                        <div className="mb-4">
                            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="degree">
                                Degree:
                            </label>
                            <select
                                name="degree"
                                id="degree"
                                value={formData.degree}
                                onChange={handleChange}
                                className="shadow border rounded w-full py-2 px-3 text-gray-700"
                            >
                                <option value="">-- Select --</option>
                                <option value="Computer Science">Computer Science</option>
                                <option value="Business Administration">Business Administration</option>
                                <option value="Others">Others</option>
                            </select>
                        </div>

                        <div className="mb-4">
                            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="grade">
                                Grade:
                            </label>
                            <input
                                type="text"
                                name="grade"
                                id="grade"
                                value={formData.grade}
                                onChange={handleChange}
                                className="shadow border rounded w-full py-2 px-3 text-gray-700"
                            />
                        </div>

                        <div className="mb-4">
                            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="gpa">
                                *GPA:
                            </label>
                            <input
                                type="number"
                                name="gpa"
                                id="gpa"
                                value={formData.gpa}
                                onChange={handleChange}
                                className="shadow border rounded w-full py-2 px-3 text-gray-700"
                            />
                        </div>

                        <div className="mb-4">
                            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="institution">
                                Institution:
                            </label>
                            <select
                                name="institution"
                                id="institution"
                                value={formData.institution}
                                onChange={handleChange}
                                className="shadow border rounded w-full py-2 px-3 text-gray-700"
                            >
                                <option value="">-- Select --</option>
                                <option value="University A">University A</option>
                                <option value="University B">University B</option>
                                <option value="University C">University C</option>
                            </select>
                        </div>

                        <h2 className="text-xl font-bold mb-4">For Feedback</h2>

                        <div className="mb-4">
                            <textarea
                                name="feedback"
                                id="feedback"
                                value={formData.feedback}
                                onChange={handleChange}
                                placeholder="Enter text here"
                                className="shadow border rounded w-full py-2 px-3 text-gray-700"
                                rows="3"
                            />
                        </div>

                        <div className="mb-4">
                            <label className="inline-flex items-center">
                                <input
                                    type="checkbox"
                                    name="agreement"
                                    checked={formData.agreement}
                                    onChange={handleChange}
                                    className="mr-2"
                                />
                                All above information is valid and fields are filled.
                            </label>
                        </div>

                        <div className="flex items-center justify-between">
                            <button
                                type="submit"
                                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none"
                            >
                                Submit
                            </button>
                        </div>
                    </form>
                </div>
            </div>

        </>
    );
};

export default Quiz;
