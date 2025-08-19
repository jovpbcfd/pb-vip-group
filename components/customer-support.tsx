import Image from 'next/image'

export default function CustomerSupport() {
    return (
        <div className="bg-[#060933]/72 mt-10">
            <div className="w-full max-w-[1230px] mx-auto px-2 py-15 rounded-lg flex flex-col-reverse md:py-5 md:flex-row">
                <div className="text-center md:self-center md:text-left">
                    <h2
                        className="bg-[linear-gradient(90deg,#AA670D_0%,#FAD44B_18%,#F7EC95_31%,#FFC946_47%,#FAC026_61%,#FAEA07_73%,#AA670D_88%,#E09127_100%)] bg-clip-text text-transparent
                    font-[800] text-xl uppercase md:text-[32px]
                    "
                    >
                        24/7 Customer Support
                    </h2>
                    <p className="text-white my-5">
                        We at PB GROUP VIP Alliance Platform prioritize player satisfaction and
                        dependable support. Our customer service team is available 24/7 to assist
                        with anything you need—from account help to game concerns—quickly and
                        efficiently.
                    </p>
                    <div className="flex items-center justify-center gap-x-2 md:justify-start">
                        <div className="bg-[linear-gradient(190deg,#404AC6_0%,#2A3181_47%,#11186B_100%)] border-2 rounded-full border-[#8C95FF] p-2">
                            <Image
                                src="/img/customer_support/fb.png"
                                width={30}
                                height={30}
                                alt="Facebook Logo"
                                className="w-[24px] h-[24px] md:w-[30px] md:h-[30px]"
                            />
                        </div>
                        <div className="bg-[linear-gradient(190deg,#404AC6_0%,#2A3181_47%,#11186B_100%)] border-2 rounded-full border-[#8C95FF] p-2">
                            <Image
                                src="/img/customer_support/ig.png"
                                width={30}
                                height={30}
                                alt="Instagram Logo"
                                className="w-[24px] h-[24px] md:w-[30px] md:h-[30px]"
                            />
                        </div>
                        <div className="bg-[linear-gradient(190deg,#404AC6_0%,#2A3181_47%,#11186B_100%)] border-2 rounded-full border-[#8C95FF] p-2">
                            <Image
                                src="/img/customer_support/tg.png"
                                width={30}
                                height={30}
                                alt="Telegram Logo"
                                className="w-[24px] h-[24px] md:w-[30px] md:h-[30px]"
                            />
                        </div>
                    </div>
                </div>
                <div className="flex items-center justify-center mb-3 md:w-full">
                    <Image
                        src="/img/customer_support/24_7_COSTUMER_SUPPORT.png"
                        width={152}
                        height={152}
                        alt="CS banner"
                        className="w-[152px] h-[152px] md:w-[379px] md:h-[379px]"
                    />
                </div>
            </div>
        </div>
    )
}
