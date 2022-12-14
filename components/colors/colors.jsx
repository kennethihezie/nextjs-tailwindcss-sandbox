const Colors = () => {
    return (
        <div className='flex flex-col items-center p-6 mx-auto max-w-sm shadow-xl rounded-2xl'>
            <h1 className="text-2xl">Working with colors</h1>
            {/* Default colors  */}
            {/* white, black, red, green, blue, orange, yellow, purple, lime, emerald, teal, cyan, indigo, violet, fuchsia, pink, rose, sky, gray, slate, zinc, neutral, stone, amber,   */}
            {/* white and black have no shades. 
            The rest of the colors you must specify a shade. (the Opacity of your color) */}
            {/* Text Colors  */}
            <p className="text-black p-4">Tailwind Black</p>

            {/* <p className="text-white p-4">Tailwind white</p> */}

            <p className="text-red-500 p-2">Tailwind Red</p>

            <p className="text-green-700 p-2">Tailwind green</p>

            {/* Background Colors  */}

            <p className="bg-orange-300 text-white mb-4 rounded-lg p-2">Tailwind background orange</p>

            <p className="bg-purple-800 text-white mb-4 rounded-lg p-2">Tailwind background purple</p>

            <p className="bg-violet-300 text-white mb-4 rounded-lg p-2">Tailwind background violet</p>

            {/* Text Underline  */}

            <p className="bg-lime-700 text-white mb-4 rounded-lg p-2 underline decoration-black">Tailwind underline lime</p>

            <p className="bg-emerald-800 text-white mb-4 rounded-lg p-2 underline decoration-purple-50">Tailwind emerald purple</p>

            <p className="bg-cyan-500 text-white mb-4 rounded-lg p-2 underline decoration-blue-600">Tailwind cyan violet</p>

            {/* Border Colors  */}

            <input type="email" className="border border-blue-500 mb-4 rounded-lg" />

            <input type="text" className="border border-green-700 rounded-xl" />

            {/* Divide Colors  */}

            <div className="divide-y divide-blue-800 mb-4">
                <div>Item 1 divider</div>
                <div>Item 2 divider</div>
                <div>Item 3 divider</div>
                <div>Item 4 divider</div>
                <div>Item 5 divider</div>
            </div>

            {/* Outline Colors  */}

            <button className="outline outline-red-500 mb-4 rounded-md p-1 outline-2">Hello User</button>
            <button className="outline outline-blue-700 mb-4 rounded-md p-1 outline-2">Hey User</button>

            {/* Box Shadow Colors (Opacity defaults to 100, but you can set it) */}

            <button className="shadow-lg bg-cyan-500 shadow-cyan-500 mb-4 p-1 rounded-lg text-white">
                Subscribe
            </button>

            {/* changing the opacity to 50 */}
            <button className="shadow-lg bg-cyan-500 shadow-purple-500/80 mb-4 p-1 text-white rounded-lg">
                Subscribe
            </button>

            {/* Accent Colors  */}

            <input type="checkbox" className="accent purple-500 mb-2" checked/>
            <input type="checkbox" className="accent cyan-500 mb-4" checked/>


            {/* Arbitrary Colors  */}

            <div className="bg-[#427fab] p-1 rounded-lg text-white">Hello</div>
            <div className="bg-[rbg(255,0,0)]">Hello</div>
            <div className="bg-[steelblue] rounded-lg text-white p-1">Hello</div>

        </div>
    )
}

export default Colors