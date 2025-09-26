"use client"
import Image from "next/image"
import { useState } from "react"

import Button from "./buttons/button"

export default function TabSection() {
  const tabs = [
    { id: 1, title: "Simple Bookmarking" },
    { id: 2, title: "Speedy Searching" },
    { id: 3, title: "Easy Sharing" }
  ]

  const contentTabs = [
    {
      id: 1,      
      title: "Bookmark in one click",
      text: "Organize your bookmarks however you like. Our simple drag-and-drop interface gives you complete control over how you manage your favourite sites."
    },
    {
      id: 2,      
      title: "Intelligent search",
      text: "Our powerful search feature will help you find saved sites in no time at all. No need to trawl through all of your bookmarks."
    },
    {
      id: 3,
      title: "Share your bookmarks",
      text: "Easily share your bookmarks and collections with others. Create a shareable link that you can send at the click of a button."
    }
  ]

  const [activeTab, setActiveTab] = useState(1)

  return (
    <>
      
      <div className="lg:w-1/2 mx-auto flex flex-col lg:flex-row lg:justify-between">
      <hr className="lg:hidden border-0.5 border-gray-300"/>
        {tabs.map((tab, id) => (
          <div key={id}>
            
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`lg:px-5 cursor-pointer lg:pb-2 ${
                activeTab == tab.id ? "border-b-4 border-red-500" : "border-b-4 border-transparent"
              }`}
            >
              {tab.title}
            </button>
            <hr className="lg:hidden border-0.5 border-gray-300"/>
          </div>                  
        ))}        
      </div>
      <hr className="hidden lg:block -mt-10 w-1/2 mx-auto border-0.5 border-gray-300"/>
      

      
      {contentTabs.map(
        (contentTab) =>
          activeTab == contentTab.id && (
            <div key={contentTab.id} className="my-15 flex flex-col lg:flex-row gap-16">
              
              <div className="lg:w-1/2 relative flex justify-center items-center">
                <div className="absolute -left-10 lg:left-0 lg:top-10 w-[500px] h-[350px] bg-blue-600 rounded-r-full -z-10"></div>
                <Image
                  src={`/illustration-features-tab-${contentTab.id}.svg`}
                  alt="tab image"
                  width={450}
                  height={350}
                  className="relative"
                />
              </div>

              
              <div className="lg:w-1/2 w-3/4 mx-auto flex flex-col items-center gap-4 lg:gap-8">
                <h2 className="text-3xl font-bold">{contentTab.title}</h2>
                <p className="lg:w-1/2 text-gray-500 text-center">{contentTab.text}</p>
                <div className="w-[150px]">
                    <Button label="More Info"/>
                </div>
              </div>
            </div>
          )
      )}
    </>
  )
}
