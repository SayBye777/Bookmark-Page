"use client"
import Image from "next/image"
import { useState } from "react"
import Button from "./Button"

export default function FaqSection() {
    const [faqs, setFaqs] = useState(null)

    const questions = [
        {
            id: 1,
            question: "What is Bookmark?",
            answer: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce tincidunt justo eget ultricies fringilla. Phasellus blandit ipsum quis quam ornare mattis."
        },
        {
            id: 2,
            question: "How can I request a new browser?",
            answer: "Vivamus luctus eros aliquet convallis ultricies. Mauris augue massa, ultricies non ligula. Suspendisse imperdiet..."
        },
        {
            id: 3,
            question: "Is there a mobile app?",
            answer: "Sed consectetur quam id neque fermentum accumsan. Praesent luctus vestibulum dolor..."
        },
        {
            id: 4,
            question: "What about other Chromium browsers?",
            answer: "Integer condimentum ipsum id imperdiet finibus. Vivamus in placerat mi..."
        }
    ]

    const toggleFaq = (id) => {
        setFaqs(faqs === id ? null : id) 
    }

    return (
        <div className="flex flex-col mb-15">
            <div className="lg:w-1/2 w-3/4 mx-auto flex flex-col gap-4">
                <h2 className="lg:w-2/3 mx-auto text-4xl text-center">Frequently Asked Questions</h2>
                <p className="lg:w-1/2 mx-auto text-gray-500 text-center">
                    Here are some of our FAQs. If you have any other questions you'd like answered please feel free to email us.
                </p>            
            </div>

            <div className="lg:w-1/2 w-3/4 flex flex-col mx-auto my-10">
                {questions.map((question) => (
                    <div key={question.id} className="border-b-2 border-gray-300 py-4">
                        <div 
                            className="flex justify-between items-center cursor-pointer"
                            onClick={() => toggleFaq(question.id)}
                        >
                            <h3 className="font-semibold hover:text-red-500">{question.question}</h3>
                            <Image 
                                src="/icon-arrow.svg" 
                                alt="arrow" 
                                width={12} 
                                height={12} 
                                className={`ml-2 transform transition-transform duration-300 ${faqs === question.id ? "rotate-180" : ""}`}
                            />
                        </div>
                        {faqs === question.id && (
                            <p className="mt-2 text-gray-600">{question.answer}</p>
                        )}
                    </div>
                ))}
                
            </div>

            <Button className="mx-auto m-10" label="More Info"/>
        </div>
    )
}
