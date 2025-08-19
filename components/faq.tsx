'use client'

import { useState } from 'react'

import { questions } from '@/data/faq'

export default function FAQ() {
    const [openIndex, setOpenIndex] = useState<number | null>(null)

    const toggleFAQ = (index: number) => {
        setOpenIndex(openIndex === index ? null : index)
    }

    return (
        <div className="w-full max-w-[900px] mx-auto px-2 py-5 rounded-lg">
            <div className="text-center">
                <h2
                    className="bg-[linear-gradient(90deg,#AA670D_0%,#FAD44B_18%,#F7EC95_31%,#FFC946_47%,#FAC026_61%,#FAEA07_73%,#AA670D_88%,#E09127_100%)] bg-clip-text text-transparent
                    font-[800] text-xl uppercase md:text-[32px]
                    "
                >
                    Frequently ask questions
                </h2>
            </div>
            <div>
                <div className="md:px-24">
                    {questions.map((faq, index) => (
                        <div
                            key={index}
                            className="border border-[#8C95FF] rounded-md text-white my-4"
                        >
                            <h3>
                                <button
                                    onClick={() => toggleFAQ(index)}
                                    className="w-full text-left flex justify-between items-center text-lg font-medium text-gray-900 p-[1rem] md:py-[1.5rem]"
                                    aria-expanded={openIndex === index}
                                    aria-controls={`faq-content-${index}`}
                                >
                                    <span className="text-white">{faq.question}</span>
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        width="24"
                                        height="24"
                                        viewBox="0 0 24 24"
                                        fill="none"
                                        stroke="currentColor"
                                        strokeWidth="2"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        className={`ml-2 transform text-[#8C95FF] transition-transform duration-300 text-white ${
                                            openIndex === index ? 'rotate-180' : 'rotate-0'
                                        }`}
                                        aria-hidden="true"
                                    >
                                        <path d="m18 15-6-6-6 6" />
                                    </svg>
                                </button>
                            </h3>
                            <div
                                id={`faq-content-${index}`}
                                role="region"
                                className={`transition-[max-height] ease-in-out duration-300 overflow-hidden ${
                                    openIndex === index ? 'max-h-50' : 'max-h-0'
                                }`}
                                aria-hidden={openIndex !== index}
                            >
                                <p className="text-white pb-4 md:p-4">{faq.answer}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}
