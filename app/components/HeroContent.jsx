import Button from "./buttons/button";

export default function HeroContent() {
  return (
    <div className="py-10 lg:w-1/2">
        <div className="flex flex-col gap-6 my-20 items-center w-full lg:w-2/3 lg:items-start p-6 lg:p-0">
            <h1 className="capitalize font-bold text-4xl text-center"> A simple bookmaker manager</h1>
            <p className="text-center">A clean and simple interface to organize your favourite websites. 
            Open a new browser tab and see your sites load instantly. Try it for free.</p>
            <div className="flex gap-4 text-center mx-auto">
                <Button label="Get it on Chrome" color="bg-blue-500 text-white"/>
                <button className="px-6 py-2 mx-auto bg-white text-black shadow-lg rounded-lg cursor-pointer border-2 border-transparent
                                   hover:border-black hover:border-2">Get it on Firefox</button>          
            </div>
        </div>

    </div>
  )
}