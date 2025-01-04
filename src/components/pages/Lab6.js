import React from 'react';

const Lab6 = () => {
    return (
        <div className="max-w-4xl mx-auto p-6 bg-white shadow-lg rounded-lg">
            <form className="space-y-6">
                {/* User ID */}
                <div className="space-y-1">
                    <label className="block text-sm font-bold text-red-600">
                        * User ID:
                    </label>
                    <input
                        type="text"
                        className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:border-indigo-500"
                        placeholder="Contains only letters (a-z), numbers (0-9), and underscores"
                    />
                </div>

                {/* Password */}
                <div className="space-y-1">
                    <label className="block text-sm font-bold text-red-600">
                        * Password:
                    </label>
                    <input
                        type="password"
                        className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:border-indigo-500"
                        placeholder="4 to 10 characters"
                    />
                </div>

                {/* Retype Password */}
                <div className="space-y-1">
                    <label className="block text-sm font-bold text-red-600">
                        * Re-type Password:
                    </label>
                    <input
                        type="password"
                        className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:border-indigo-500"
                    />
                </div>

                {/* Security Question */}
                <div className="space-y-1">
                    <label className="block text-sm font-bold text-red-600">
                        * Select a question forgetting password:
                    </label>
                    <select className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:border-indigo-500">
                        <option>Select a hit question</option>
                        <option>What is your pet's name?</option>
                        <option>What is your mother's maiden name?</option>
                        <option>What is your favorite color?</option>
                    </select>
                </div>

                {/* Hit Answer */}
                <div className="space-y-1">
                    <label className="block text-sm font-bold text-red-600">
                        * Hit Answer:
                    </label>
                    <input
                        type="text"
                        className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:border-indigo-500"
                        placeholder="Write your answer"
                    />
                </div>

                {/* Date of Birth */}
                <div className="space-y-1">
                    <label className="block text-sm font-bold text-red-600">
                        * Date of Birth:
                    </label>
                    <div className="flex space-x-2">
                        <input
                            type="text"
                            placeholder="DD"
                            className="w-1/3 p-2 border border-gray-300 rounded-md focus:outline-none focus:border-indigo-500"
                        />
                        <input
                            type="text"
                            placeholder="MM"
                            className="w-1/3 p-2 border border-gray-300 rounded-md focus:outline-none focus:border-indigo-500"
                        />
                        <input
                            type="text"
                            placeholder="YYYY"
                            className="w-1/3 p-2 border border-gray-300 rounded-md focus:outline-none focus:border-indigo-500"
                        />
                    </div>
                </div>

                {/* Gender */}
                <div className="space-y-1">
                    <label className="block text-sm font-bold text-red-600">
                        * Gender:
                    </label>
                    <div className="flex space-x-4">
                        <label className="flex items-center">
                            <input type="radio" name="gender" className="mr-2" /> Male
                        </label>
                        <label className="flex items-center">
                            <input type="radio" name="gender" className="mr-2" /> Female
                        </label>
                    </div>
                </div>

                {/* Student Info */}
                <div className="space-y-1">
                    <label className="block text-sm font-bold text-red-600">Student</label>
                    <div className="space-y-2">
                        <div className="flex space-x-2">
                            <input
                                type="text"
                                className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:border-indigo-500"
                                placeholder="First Name"
                            />
                            <input
                                type="text"
                                className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:border-indigo-500"
                                placeholder="Middle Name"
                            />
                            <input
                                type="text"
                                className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:border-indigo-500"
                                placeholder="Last Name"
                            />
                        </div>
                    </div>
                </div>

                {/* Academic Info */}
                <div className="space-y-1">
                    <label className="block text-sm font-bold text-red-600">
                        * Academic Year:
                    </label>
                    <input
                        type="text"
                        className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:border-indigo-500"
                        placeholder="Year"
                    />
                </div>

                {/* Department */}
                <div className="space-y-1">
                    <label className="block text-sm font-bold text-red-600">
                        * Department:
                    </label>
                    <select className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:border-indigo-500">
                        <option>Select Department</option>
                        <option>Civil</option>
                        <option>Mechanical</option>
                        <option>Electrical</option>
                        <option>Computer Science</option>
                        {/* Add other departments here */}
                    </select>
                </div>

                {/* Roll Number */}
                <div className="space-y-1">
                    <label className="block text-sm font-bold text-red-600">
                        * Roll No:
                    </label>
                    <input
                        type="text"
                        className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:border-indigo-500"
                        placeholder="e.g. 2k1_612"
                    />
                </div>

                {/* Submit Button */}
                <div className="space-y-1">
                    <button
                        type="submit"
                        className="w-full p-3 bg-blue-600 text-white rounded-md hover:bg-blue-700"
                    >
                        Submit
                    </button>
                </div>
            </form>
        </div>
    );
};

export default Lab6;
