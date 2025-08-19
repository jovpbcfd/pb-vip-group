import Image from 'next/image'

export default function SecuredAndCertified() {
    return (
        <div className="bg-[#060933]/72 my-10 py-10 px-2 md:py-20">
            <div className="w-full max-w-[900px] mx-auto px-2 py-5 border border-[#8C95FF] rounded-lg md:py-10">
                <div className="text-center">
                    <h2
                        className="bg-[linear-gradient(90deg,#AA670D_0%,#FAD44B_18%,#F7EC95_31%,#FFC946_47%,#FAC026_61%,#FAEA07_73%,#AA670D_88%,#E09127_100%)] bg-clip-text text-transparent
                    font-[800] text-xl uppercase md:text-[32px]
                    "
                    >
                        Secured & certified by
                    </h2>
                </div>
                <div className="flex items-center justify-center gap-x-4 mt-3 md:mt-10">
                    <div className="bg-[linear-gradient(90deg,#1F2460_0%,#2E369D_100%)] border border-[#8C95FF] rounded-full p-1 md:px-6 md:py-2">
                        <Image
                            src="/img/secured_and_certified/pagcor.png"
                            width={84}
                            height={29}
                            alt="Pagcor Logo"
                            className="w-[70px] h-[29px] md:w-[140px] md:h-[60px]"
                        />
                    </div>
                    <div className="bg-[linear-gradient(90deg,#1F2460_0%,#2E369D_100%)] border border-[#8C95FF] rounded-full p-1 md:px-6 md:py-2">
                        <Image
                            src="/img/secured_and_certified/mga.png"
                            width={84}
                            height={29}
                            alt="Pagcor Logo"
                            className="w-[70px] h-[29px] md:w-[140px] md:h-[60px]"
                        />
                    </div>
                    <div className="bg-[linear-gradient(90deg,#1F2460_0%,#2E369D_100%)] border border-[#8C95FF] rounded-full p-1 md:px-6 md:py-2">
                        <Image
                            src="/img/secured_and_certified/gaming_curacao.png"
                            width={84}
                            height={29}
                            alt="Pagcor Logo"
                            className="w-[70px] h-[29px] md:w-[140px] md:h-[60px]"
                        />
                    </div>
                </div>
            </div>
        </div>
    )
}
