const BreakPoint = ({ screenSize }) => {
    return (
        // when the screen size change, change the background color and text size
        <div className="mt-16 bg-black max-w-lg mx-auto rounded-lg shadow-xl shadow-blue-500 p-6 sm:bg-green-800 md:bg-purple-800 lg:bg-red-500 xl:bg-yellow-500 2xl:bg-sky-500">
           <h1 className="text-4xl text-white sm:text-lg md:text-xl lg:text-2xl xl:text-3xl 2xl:text-4xl">width: { screenSize }px</h1>
           <p className="text-primary">AM primary color</p>
        </div>
    )
}

export default BreakPoint

//  Breakpoint Classes
//     sm	640px	  @media (min-width: 640px) { ... }
//     md	768px	  @media (min-width: 768px) { ... }
//     lg	1024px	@media (min-width: 1024px) { ... }
//     xl	1280px	@media (min-width: 1280px) { ... }
//     2xl	1536px	@media (min-width: 1536px) { ... }
 