export default function SubscribeSection(){
    return (
        <div className="bg-blue-700 text-white py-6 h-auto">
                <div className="lg:w-1/5 w-full lg:mx-auto lg:items-center flex flex-col gap-6">
                    <h3 className="w-1/2 lg:w-full text-center mx-auto uppercase">35.000+ already joined</h3>
                    <p className="w-1/2 lg:w-full mx-auto text-2xl text-center"> Stay up-to-date with what we’re doing</p>
                    <div className="">
                        <form className="flex flex-col lg:flex-row gap-4 lg:mx-0 mx-4">
                            <input type="email" placeholder="Enter your email adress" className="bg-white text-black rounded-lg text-center"/>
                            
                            <button className="px-6 py-2 lg:mx-auto bg-red-600 text-white shadow-lg rounded-lg cursor-pointer border-2 border-transparent
                                  hover:bg-white hover:text-red-600 hover:border-red-600 hover:border-2">Contact Us</button>    
                        </form>
                    </div>
                </div>
        </div>
    )
}