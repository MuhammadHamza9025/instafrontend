import React from 'react';

const Table = () => {
    const data = [
        { name: "Anom", age: 19, gender: "Male" },
        { name: "Megha", age: 19, gender: "Female" },
        { name: "Subham", age: 25, gender: "Male" },
    ]
    return (
        <div className="flex justify-center items-center">
            <table className="table-auto border border-green-600 w-[700px]">
                <thead>
                    <tr>
                        <th className="border-b-2 border-black px-4 py-2">Name</th>
                        <th className="border-b-2 border-black px-4 py-2">Age</th>
                        <th className="border-b-2 border-black px-4 py-2">Gender</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        data.map(e =>

                            <>
                                <tr>
                                    <td className="text-center px-4 py-2">{e.name}</td>
                                    <td className="text-center px-4 py-2">{e.age}</td>
                                    <td className="text-center px-4 py-2">{e.gender}</td>
                                </tr>
                            </>
                        )
                    }


                </tbody>
            </table>
        </div>
    );
};

export default Table;
