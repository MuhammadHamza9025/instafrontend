import React from 'react'
import pic1 from '../Assests/AB Hall2.jpg'

const Task1 = () => {
    return (
        <div>
            <h1 className='text-center font-bold text-4xl'>21-CP-86</h1>

            <div className="flex justify-center  ">

                <table className="border-collapsepse  border-separate border border-black w-2/3 text-left p-1">
                    <tbody>
                        <tr>
                            <td className="border border-black p-2">C.V</td>
                            <td className="border border-black p-2" colSpan="2">
                                <b>Muhammad Hamza</b>
                            </td>
                            <td className="border border-black p-2">Department</td>
                        </tr>
                        <tr>
                            <td className="border border-black p-2">1</td>
                            <td className="border border-black p-2" colSpan="2">
                                21-CP-86
                            </td>
                            <td className="border border-black p-2 text-center" rowSpan="4">
                                <div>
                                    <img src={pic1} alt="" className='h-[170px] w-[100%]' />
                                </div>
                            </td>
                        </tr>
                        <tr>
                            <td className="border border-black p-2">2</td>
                            <td className="border border-black p-2" colSpan="2">
                                Shahzad Ahmed
                            </td>
                        </tr>
                        <tr>
                            <td className="border border-black p-2">3</td>
                            <td className="border border-black p-2" colSpan="2">
                                Computer Engineering
                            </td>
                        </tr>
                        <tr>
                            <td className="border border-black p-2">4</td>
                            <td className="border border-black p-2" colSpan="2">
                                <ul className="list-disc pl-5">
                                    <li>Rawalpindi</li>
                                    <li>Punjab</li>
                                </ul>
                            </td>
                        </tr>
                        <tr>
                            <td className="border border-black p-2">5</td>
                            <td className="border border-black p-2" colSpan="3">
                                Hobbies: Footbal , Cricket
                            </td>
                        </tr>
                        <tr>
                            <td className="border border-black p-2">6</td>
                            <td className="border border-black p-2">
                                Mobile App Development
                            </td>
                            <td className="border border-black p-2">Skills : Mern Stack Development</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default Task1
