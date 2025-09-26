import Image from "next/image"

export default function Footer (){
    return(
        <footer className="bg-blue-900 py-10">
            <div className="w-4/5 mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
                
                
                <div className="flex flex-col md:flex-row items-center justify-center gap-6">
                    <Image src="/logo-bookmark.svg" alt="logo" width={120} height={40} className="cursor-pointer items-center"/>
                    <ul className="flex flex-col items-center lg:flex-row gap-6 uppercase text-white text-sm tracking-wide">
                        <li className="cursor-pointer hover:text-red-500">Features</li>
                        <li className="cursor-pointer hover:text-red-500">Pricing</li>
                        <li className="cursor-pointer hover:text-red-500">Contact</li>
                    </ul>
                </div>

                
                <div className="flex gap-6">
                    <Image src="/icon-facebook.svg" alt="facebook" width={24} height={24} className="cursor-pointer hover:opacity-75"/>
                    <Image src="/icon-twitter.svg" alt="twitter" width={24} height={24} className="cursor-pointer hover:opacity-75"/>
                </div>

            </div>
        </footer>
    )
}
