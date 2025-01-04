import React from 'react'

const Task2b = () => {
    return (
        <div>
            <div className="container mx-auto p-5">
                {/* Heading */}
                <h1 className="text-3xl font-bold text-center my-4">
                    History of Wah Cantt
                </h1>

                {/* Paragraph about the City's History */}
                <div className="mt-8">
                    <p className="text-lg leading-relaxed">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita placeat labore, dicta asperiores qui quae eveniet obcaecati fugit odio harum natus non veniam, necessitatibus excepturi eum libero animi similique, cum voluptatem quibusdam magnam dignissimos itaque magni. Obcaecati, ipsam sit. Libero corporis accusamus voluptatibus cum eum fugit deserunt, numquam facilis possimus repellat doloremque reprehenderit temporibus nisi corrupti perferendis voluptate velit fuga impedit minus. Saepe soluta ex repudiandae autem quaerat accusantium libero voluptatem amet! Explicabo quam atque suscipit vel! Minus nihil inventore dicta quos magni architecto tenetur illo placeat porro fugit modi facilis, officia, sint deleniti reprehenderit expedita aperiam a alias sapiente!
                    </p>
                </div>

                {/* Link to the consulted website */}
                <div className="mt-5">
                    <p>
                        For more details about the city's history, you can visit:
                        <a
                            href="https://en.wikipedia.org/wiki/Wah_Cantonment"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-blue-600 underline ml-1"
                        >
                            History of Wah Cantt
                        </a>
                    </p>
                </div>

                {/* Email Link to Developer */}
                <div className="mt-5">
                    <p>
                        If you have any questions or suggestions, feel free to email the developer:
                        <a
                            href="mailto:developer@example.com"
                            className="text-blue-600 underline ml-1"
                        >
                            developer@example.com
                        </a>
                    </p>
                </div>
            </div>

        </div>
    )
}

export default Task2b
