import FlagConnectors from '@/components/flag-connector'
import Hero from '@/components/hero-section'
import CtaContact from '@/components/about'
import Image from 'next/image'
import GameBrandItem from '@/components/brand-item'
import { gameBrandItemdata } from '@/data/brands'

export default function Home() {
    return (
        <div className="p-2">
            <Hero />
            <CtaContact />
            <div className="w-full max-w-[1230px] mx-auto">
                <div className="text-center mt-5">
                    <h2
                        className="bg-[linear-gradient(90deg,#AA670D_0%,#FAD44B_18%,#F7EC95_31%,#FFC946_47%,#FAC026_61%,#FAEA07_73%,#AA670D_88%,#E09127_100%)] bg-clip-text text-transparent
                font-[800] text-xl uppercase md:text-[32px]
                "
                    >
                        Pb group vip brands
                    </h2>
                    <div className="mx-auto md:w-[70%] text-center  mt-2 text-white leading-5">
                        <p>
                            PB GROUP VIP does the hard work for you—our team verifies every brand to
                            guarantee a secure and smooth experience. From live sports to casino
                            games, you’ll find the top picks in one place, hassle-free.
                        </p>
                    </div>
                </div>
                <div className="mx-auto mt-6 md:mt-13">
                    <div className="grid grid-cols-1 gap-y-4 place-items-center w-full mx-auto md:max-w-[940px] md:grid-cols-2">
                        <GameBrandItem data={gameBrandItemdata} />
                    </div>
                    <div className="mx-auto bg-[linear-gradient(90deg,#2532CD_0%,#8C95FF_100%)] p-[1px] rounded-md mt-4 max-w-[300px] md:max-w-[400px]">
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
                                <div className="rounded-full ml-[80px] shadow-lg">
                                    <div className="rounded-full">
                                        <Image
                                            src="/img/brand_logo/mvpviva_final.png"
                                            width={150}
                                            height={102}
                                            alt="Mvpviva logo"
                                        />
                                    </div>
                                </div>
                                <div className="flex items-center ml-2">
                                    <Image
                                        src="/img/currency_flag/ph.png"
                                        width={20}
                                        height={20}
                                        alt="Philippine flag"
                                    />
                                    <Image
                                        src="/img/currency_flag/bangla.png"
                                        width={20}
                                        height={20}
                                        alt="Bangladesh flag"
                                    />
                                    <Image
                                        src="/img/currency_flag/viet.png"
                                        width={20}
                                        height={20}
                                        alt="Vietnam flag"
                                    />
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
                                            1,000 Migration Bonus + 777 JDB Free Credit
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
                                            <span className="text-[#FCA311]"> 6 minutes</span>
                                        </p>
                                        <span> </span>
                                        <p className="text-xs md:text-lg">
                                            <span className="text-white">Winrate:</span>
                                            <span className="text-[#FCA311]"> 94.10%</span>
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
                </div>
            </div>
        </div>
    )
}
