import Image from 'next/image'

const steps = [
    {
        title: 'STEP 1:',
        description:
            'Build a complete business plan from your end. It should contain financial data, ownership proof, verified software documents, and your up-to-date contact details.',
        imagePath: '/img/alliance_join/step_one.png',
    },
    {
        title: 'STEP 2:',
        description:
            "Email your documents to 'lorem ipsum' to apply. We'll notify you once your application is reviewed.",
        imagePath: '/img/alliance_join/step_two.png',
    },
    {
        title: 'STEP 3:',
        description:
            'All applications are carefully reviewed in three stages. A decision will be shared within 3 business days.',
        imagePath: '/img/alliance_join/step_three.png',
    },
]

export default function AllianceJoin() {
    return (
        <div className="w-full max-w-[1230px] mx-auto p-2">
            <div className="text-center">
                <h2
                    className="bg-[linear-gradient(90deg,#AA670D_0%,#FAD44B_18%,#F7EC95_31%,#FFC946_47%,#FAC026_61%,#FAEA07_73%,#AA670D_88%,#E09127_100%)] bg-clip-text text-transparent
                font-[800] text-xl uppercase md:text-[32px]
                "
                >
                    Why choose pb group vip alliance casino?
                </h2>
            </div>
            <div className="py-12 md:py-20">
                <div className="mx-auto flex flex-col md:flex-row items-start justify-between gap-12 px-4 relative">
                    {steps.map((step, index) => (
                        <div key={index} className="flex-1 relative">
                            <div className="bg-[#0f1629]/30 rounded-xl border border-[#8C95FF] shadow-lg p-6 text-center min-h-[170px] relative">
                                <div className="absolute -top-8 left-[80%] -translate-x-1/2 w-16 h-16 flex items-center justify-center z-10">
                                    <Image
                                        src={step.imagePath}
                                        width={80}
                                        height={80}
                                        alt={step.title}
                                    />
                                </div>

                                <h3 className="text-white text-left mb-2 font-[900] uppercase text-lg md:text-2xl">
                                    {step.title}
                                </h3>

                                <p className="text-gray-300 text-sm text-left">
                                    {step.description}
                                </p>
                            </div>

                            {index > 0 && (
                                <div
                                    className="w-3 h-3 rounded-full bg-[#8C95FF] absolute top-[-5px] left-1/2 -translate-x-1/2 md:top-1/2 
                                md:-translate-y-1/2 md:left-[-5px] md:translate-x-0 md:hidden"
                                ></div>
                            )}

                            {index < steps.length - 1 && (
                                <>
                                    <div className="md:hidden absolute left-1/2 top-full h-12 w-[1px] bg-[#8C95FF]"></div>
                                    {/* need fix */}
                                    {/* <div className="hidden md:block overflow-hidden absolute top-1/2 right-0 h-[1px] w-1/2 bg-[#8C95FF]"></div> */}
                                </>
                            )}
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}
