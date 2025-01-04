import React from 'react'

const Task3 = () => {
    return (
        <div>
            <h1 class="text-4xl font-bold text-center mb-10">Different Types of Hyperlinks & Media</h1>

            <div class="mb-10">
                <h2 class="text-2xl font-semibold mb-5">Hyperlinks</h2>

                <p class="mb-4">
                    1. <a href="https://www.example.com" class="text-blue-600 underline" target="" rel="noopener noreferrer">Visit Example Website</a> (Basic Link)
                </p>

                <p class="mb-4">
                    2. <a href="mailto:example@example.com" class="text-blue-600 underline">Send an Email</a> (Email Link)
                </p>

                <p class="mb-4">
                    3. <a href="tel:+1234567890" class="text-blue-600 underline">Call Us</a> (Phone Number Link)
                </p>

                <p class="mb-4">
                    4. <a href="#about-section" class="text-blue-600 underline">Go to About Section</a> (Anchor Link)
                </p>

                <p class="mb-4">
                    5. <a href="https://www.wikipedia.org" target="_blank" rel="noopener noreferrer">
                        <img src="https://via.placeholder.com/100" alt="Placeholder Image" class="inline" />
                    </a> (Image Link)
                </p>

                <p class="mb-4">
                    6. <a href="https://www.example.com/sample.pdf" download class="text-blue-600 underline">Download PDF</a> (Download Link)
                </p>

                <p class="mb-4">
                    7. <a href="https://www.example.com" class="text-blue-600 underline" title="Visit Example for more info">Hover over me</a> (Link with Title)
                </p>
            </div>

            <div class="mb-10">
                <h2 class="text-2xl font-semibold mb-5">Audio and Video</h2>

                <p class="mb-4">Audio File:</p>
                <audio controls class="mb-8">
                    <source src="https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3" type="audio/mpeg" />
                    Your browser does not support the audio element.
                </audio>


                <p class="mb-4">Video File:</p>
                <video width="400" controls class="mb-4">
                    <source src="https://www.w3schools.com/html/mov_bbb.mp4" type="video/mp4" />
                    Your browser does not support the video tag.
                </video>
            </div>

            <div id="about-section" class="bg-white p-6 border border-gray-300 rounded-lg mt-10">
                <h2 class="text-2xl font-semibold mb-4">About Section</h2>
                <p>This is the section you scroll to when clicking the anchor link above.</p>
            </div>
        </div>
    )
}

export default Task3
