import React from 'react'

const Task2 = () => {
    return (
        <div className="min-h-screen bg-gradient-to-r from-green-300 via-blue-300 to-purple-400 flex flex-col items-center justify-center">
            {/* Page Title */}
            <h2 className="text-center text-white font-extrabold text-5xl mb-6 shadow-md">
                First Page
            </h2>

            {/* City Information Section */}
            <div className="bg-white rounded-lg shadow-lg p-8 w-full max-w-2xl">
                <h1 className="text-4xl font-bold text-center text-blue-600 mb-6">
                    My Beautiful Wah Cantt
                </h1>

                {/* City Information Section */}
                <div className="p-6 border border-gray-200 rounded-lg bg-gray-100">
                    <h2 className="text-3xl font-semibold text-gray-800 mb-4">
                        City Information
                    </h2>
                    <ul className="list-disc ml-6 text-gray-700 text-lg space-y-3">
                        <li><strong>City Name:</strong> Wah Cantt</li>
                        <li><strong>Famous Personality:</strong> Notable personality in the city</li>
                        <li><strong>Famous Festival or Event:</strong> Highlighted city event</li>
                        <li><strong>Famous Dish or Food:</strong> Popular local cuisine</li>
                        <li><strong>City History:</strong> Brief history of the city</li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Task2;
