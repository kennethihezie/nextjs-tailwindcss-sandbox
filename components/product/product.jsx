import Image from "next/image"

const Product = () => {
    return(
        <div className="flex rounded-lg shadow-lg mx-auto p-16 max-w-lg  mt-16 space-x-8">
            {/* <Image
             className='w-16 h-16'
             priority
             src='/images/headphone.png'
             alt=""
             /> */}
             <img className='w-40' src="/images/headphone.png" alt="" />

             <div>
                <div className="">
                  <p className="bg-black text-white rounded-2xl p-1 pr-2 pl-2 text-sm">Free Shipping</p>
                </div>
                <h1 className="text-black col-span-1 text-xl">Razer Kraken Kitty Edt Gaming Headset Quartz</h1>
             </div>

        </div>
    )
}

export default Product