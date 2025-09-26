import Image from "next/image"  
import Button from "../Button"

export default function OneBrowser({browser, version, margin}) {
  return (
    <div className={`flex-1 ${margin} py-6 flex flex-col gap-6 border border-gray-300 rounded-lg text-center shadow-md`}>
      <Image 
        src={`/logo-${browser.toLowerCase()}.svg`} 
        alt={`${browser} logo`}
        width={100}
        height={100}
        className="mx-auto"
      />

      <div className="flex flex-col gap-2">  
        <h3 className="text-xl font-bold">Add to {browser}</h3>
        <p className="text-gray-600">Minimum version {version}</p>
      </div>

      <Image
        src="/bg-dots.svg"
        alt="dots background"
        width={200}
        height={50}
        className="w-full"
      />

      <Button label="Add & Install Extension"/>
    </div>
  )
}
