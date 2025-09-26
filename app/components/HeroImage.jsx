import Image from "next/image"

export default function HeroImage() {
  return (
    <div className="lg:w-1/2 relative flex justify-center items-center">
      
      <div className="absolute left-10 lg:left-50 top-20 lg:top-30 w-[500px] h-[300px] bg-blue-600 rounded-l-full"></div>

      
      <Image 
        src="/illustration-hero.svg" 
        alt="hero image" 
        width={600} 
        height={400} 
        className="relative z-10"
      />
    </div>
  )
}
