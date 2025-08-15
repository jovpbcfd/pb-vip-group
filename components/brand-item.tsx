import Image from 'next/image'

type TGameBrandItem = {
    name: string
    brandLogoPath: string
    currencies: {
        path: string
        name: string
    }[]
    giftDescription: string
    payout: number
    winrate: string
    playnowLink: string
    moreDetails: string
}

export default function GameBrandItem({ data }: { data: TGameBrandItem[] }) {
    return (
        <>
            {data.map((item) => (
                <div
                    key={item.name}
                    className="bg-[linear-gradient(90deg,#2532CD_0%,#8C95FF_100%)] p-[1px] rounded-md max-w-[300px] w-full md:max-w-[450px]"
                >
                    <div className="bg-[linear-gradient(90deg,#1F2460_18%,#2E369D_60%,#31399A_100%)] flex items-center flex-col rounded-md pt-5 pb-5">
                        <div className="relative flex items-center">
                            <div className="absolute top-[-26px] md:top-[-28px] md:left-[-50px]">
                                <Image
                                    src="/img/hanging_number.png"
                                    width={111}
                                    height={126}
                                    alt="Hanging Banner"
                                    className="w-[70px] h-[70px] md:w-[111px] md:h-[90px]"
                                />
                            </div>
                            <div className="rounded-full ml-[80px]">
                                <div className="rounded-full">
                                    <Image
                                        src={`/img/brand_logo/${item.brandLogoPath}`}
                                        width={150}
                                        height={102}
                                        alt={`${item.name} logo`}
                                    />
                                </div>
                            </div>
                            <div className="flex items-center ml-2">
                                {item.currencies.map((currency) => (
                                    <Image
                                        key={currency.name}
                                        src={`/img/currency_flag/${currency.path}`}
                                        width={20}
                                        height={20}
                                        alt={currency.name}
                                    />
                                ))}
                            </div>
                        </div>
                        <div className="mt-5">
                            <div className="flex items-center gap-x-2">
                                <Image
                                    src="/img/icons/gift.svg"
                                    width={20}
                                    height={20}
                                    alt="Gift"
                                    className="self-start"
                                />
                                <div className="border-b-[1px] pb-2 mb-2 border-slate-300/30">
                                    <p className="text-white text-xs md:text-lg">
                                        {item.giftDescription}
                                    </p>
                                </div>
                            </div>
                            <div className="flex items-center gap-x-2">
                                <Image
                                    src="/img/icons/clock.svg"
                                    width={20}
                                    height={20}
                                    alt="Gift"
                                />
                                <div className="flex items-center">
                                    <p className="text-xs md:text-lg">
                                        <span className="text-white">Payout:</span>{' '}
                                        <span className="text-[#FCA311]">
                                            {item.payout} minutes
                                        </span>
                                    </p>
                                    <span> </span>
                                    <p className="text-xs md:text-lg">
                                        <span className="text-white">Winrate:</span>
                                        <span className="text-[#FCA311]"> {item.winrate}%</span>
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="w-[90%] mt-5 flex items-center flex-col gap-y-1">
                            <button className="w-full py-[1px] text-white font-bold rounded-full bg-[#FCA311] uppercase shadow-lg">
                                Play now
                            </button>
                            <button className="w-full py-[1px] text-white font-bold rounded-full bg-transparent border-[1px] border-slate-300 uppercase">
                                More details
                            </button>
                        </div>
                    </div>
                </div>
            ))}
        </>
    )
}
