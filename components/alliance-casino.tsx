import Image from 'next/image'
import { data } from '@/data/alliance'

export default function AllianceCasino() {
    return (
        <div className="bg-[#060933]/72 my-10">
            <div className="w-full max-w-[1230px] mx-auto px-2 pt-10 pb-15">
                <div className="text-center mb-20">
                    <h2
                        className="bg-[linear-gradient(90deg,#AA670D_0%,#FAD44B_18%,#F7EC95_31%,#FFC946_47%,#FAC026_61%,#FAEA07_73%,#AA670D_88%,#E09127_100%)] bg-clip-text text-transparent
                            font-[800] text-xl uppercase md:text-[32px]
                            "
                    >
                        Why choose pb group vip alliance casino?
                    </h2>
                </div>
                <div className="mt-15 grid grid-cols-1 gap-y-16 gap-x-3 sm:grid-cols-3 md:gap-x-10 md:grid-cols-4">
                    {data.map((item, index) => (
                        <div
                            key={index}
                            className="bg-[linear-gradient(90deg,#2532CD_0%,#8C95FF_100%)] p-[1px] rounded-md relative min-h-[200px]"
                        >
                            <div className="bg-[linear-gradient(90deg,#1F2460_18%,#2E369D_60%,#31399A_100%)] h-full w-full rounded-md">
                                <div
                                    className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2     
                                    "
                                >
                                    <div
                                        className="bg-[linear-gradient(90deg,#AA670D_0%,#FAD44B_18%,#F7EC95_31%,#FFC946_47%,#FAC026_61%,#FAEA07_73%,#AA670D_88%,#E09127_100%)] p-[3px]
                                    rounded-full
                                    "
                                    >
                                        <div className="bg-[#13163B] rounded-full p-3">
                                            <Image
                                                src={item.imgPath}
                                                width={50}
                                                height={50}
                                                alt={item.title}
                                                quality={100}
                                                className="w-[50px] h-[50px]"
                                            />
                                        </div>
                                    </div>
                                </div>
                                <div className="pt-13">
                                    <h3 className="uppercase text-white text-center text-balance font-bold">
                                        {item.title}
                                    </h3>
                                    <p className="text-center text-balance text-white mt-5 pb-3">
                                        {item.description}
                                    </p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}
