import Image from "next/image"

const MessageAlert = () => {
    return (
        <div  className='flex items-center p-6 max-w-sm mx-auto bg-white rounded-xl shadow-lg space-x-4 mt-12'>
            {/* <Image
             className="w-12 h-12"
             priority
             src='/images/warning.svg'
             alt=""
            /> */}
            {/* am using img tag here because nextjs image component cannot display the svg without adding height and width */}
            <img className='w-12 h-12'  src="/images/warning.svg" alt="" />
            
            <div>
               <div className="text-xl font-medium text-black">Are you sure</div>
               <p className="text-slate-500">You are about to delete a post</p>
            </div>
        </div>
    )
}

export default MessageAlert