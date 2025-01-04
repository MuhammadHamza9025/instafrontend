import React, { useState } from "react";

export default function Lab3() {
    const [isEditing, setIsEditing] = useState(false);
    const [profile, setProfile] = useState({
        cover: "https://via.placeholder.com/800x200", // Default cover placeholder
        picture: "https://via.placeholder.com/150", // Default profile placeholder
        name: "John Doe",
        bio: "Elevate your profile. Learn how to optimise your profile.",
        socialLinks: ["Twitter", "Instagram"],
    });

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setProfile({ ...profile, [name]: value });
    };

    const handlePictureChange = (e) => {
        const file = e.target.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onload = () => {
                setProfile({ ...profile, picture: reader.result });
            };
            reader.readAsDataURL(file);
        }
    };

    return (
        <div className="min-h-screen bg-gray-100">
            {/* Cover Section */}
            <div className="relative">
                <img
                    src={profile.cover}
                    alt="Cover"
                    className="w-full h-48 object-cover"
                />
                {isEditing && (
                    <div className="absolute top-4 right-4">
                        <label
                            htmlFor="coverInput"
                            className="cursor-pointer bg-blue-500 text-white px-3 py-1 rounded-lg"
                        >
                            Change Cover
                        </label>
                        <input
                            type="file"
                            id="coverInput"
                            className="hidden"
                            onChange={handlePictureChange}
                        />
                    </div>
                )}
            </div>

            {/* Profile Section */}
            <div className="max-w-3xl mx-auto bg-white p-6 shadow-md -mt-16 rounded-lg relative">
                {/* Profile Picture */}
                <div className="relative flex justify-center">
                    <img
                        src={profile.picture}
                        alt="Profile"
                        className="w-24 h-24 rounded-full border-4 border-white object-cover"
                    />
                    {isEditing && (
                        <div className="absolute bottom-0 right-0">
                            <label
                                htmlFor="profilePictureInput"
                                className="cursor-pointer bg-blue-500 text-white px-2 py-1 rounded-full"
                            >
                                Edit
                            </label>
                            <input
                                type="file"
                                id="profilePictureInput"
                                className="hidden"
                                onChange={handlePictureChange}
                            />
                        </div>
                    )}
                </div>

                {/* Name and Bio */}
                <div className="text-center mt-4">
                    {isEditing ? (
                        <input
                            type="text"
                            name="name"
                            value={profile.name}
                            onChange={handleInputChange}
                            className="text-lg font-bold text-gray-800 border-b border-gray-300 focus:outline-none focus:border-blue-500"
                        />
                    ) : (
                        <h1 className="text-lg font-bold text-gray-800">{profile.name}</h1>
                    )}
                    {isEditing ? (
                        <textarea
                            name="bio"
                            value={profile.bio}
                            onChange={handleInputChange}
                            className="mt-2 w-full text-center text-gray-600 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
                        />
                    ) : (
                        <p className="text-gray-600">{profile.bio}</p>
                    )}
                </div>

                {/* Social Links */}
                <div className="mt-4">
                    <h2 className="text-sm font-bold text-gray-700">Social Links</h2>
                    <div className="flex flex-wrap gap-2 mt-2">
                        {profile.socialLinks.map((link, index) => (
                            <span
                                key={index}
                                className="bg-gray-200 px-3 py-1 rounded-full text-sm"
                            >
                                {link}
                            </span>
                        ))}
                        {isEditing && (
                            <button
                                className="bg-blue-500 text-white px-3 py-1 rounded-full text-sm"
                                onClick={() =>
                                    setProfile({
                                        ...profile,
                                        socialLinks: [...profile.socialLinks, "New Link"],
                                    })
                                }
                            >
                                Add Link
                            </button>
                        )}
                    </div>
                </div>
            </div>

            {/* Subscription Section */}
            <div className="max-w-3xl mx-auto bg-white mt-6 p-6 shadow-md rounded-lg">
                <h2 className="text-lg font-bold text-gray-800">Subscription</h2>
                <p className="text-gray-600 mt-2">
                    <span className="font-bold text-green-600">Limited offer:</span> 50%
                    off for 30 days!
                </p>
                <button className="mt-4 w-full bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600 transition">
                    Start Subscription
                </button>
            </div>

            {/* Edit/Save Button */}
            <div className="flex justify-center mt-6">
                <button
                    onClick={() => setIsEditing(!isEditing)}
                    className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition"
                >
                    {isEditing ? "Save Profile" : "Edit Profile"}
                </button>
            </div>
        </div>
    );
}
