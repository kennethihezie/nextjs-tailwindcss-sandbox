const DarkMode = () => {
    return (
        // classNameBy default, you can have your project use 
        // whatever mode your OS is using. You can use "dark:{class}". 
        // You can also set your config to use a class instead of 
        // using your OS modeclassName

        <div className="container mx-auto mt-10 bg-white dark:bg-slate-900 rounded-xl px-6 py-8 shadow-xl">
            <h3 className="text-slate-900 dark:text-white font-medium tracking-tight">Lorem ipsum dolor sit.</h3>
            <p className="text-slate-500 dark:text-slate-400 mt-2 text-sm">Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam dolorum corrupti laudantium magni adipisci numquam quia, aliquid quam asperiores unde distinctio velit eveniet a animi?</p>
            <div className="relative inline-block w-10 mr-2 align-middle select-none transition duration-200 ease-in">
            <input type="checkbox" name="toggle" id="toggle" className="toggle-checkbox absolute block w-6 h-6 rounded-full bg-white border-4 appearance-none cursor-pointer"/>
            <label for="toggle" className="toggle-label block overflow-hidden h-6 rounded-full bg-gray-300 cursor-pointer"></label>
            </div>
            <label for="toggle" className="text-xs text-gray-700">Toggle darkmode</label>
        </div>
    )
}

export default DarkMode