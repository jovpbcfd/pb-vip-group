import Link from 'next/link'
import Image from 'next/image'

export default function Footer() {
    return (
        <footer className="bg-[linear-gradient(90deg,#202774_0%,#13163B_100%)]">
            <div className="w-full max-w-[1230px] mx-auto px-2 py-10 flex gap-y-10 flex-col items-center justify-between md:flex-row md:gap-y-0">
                <div>
                    <Link href="#">
                        <Image
                            src="/img/PB_GROUP_VIP_LOWER_LOGO.png"
                            width={151}
                            height={97}
                            alt="PB VIP GROUP"
                        />
                    </Link>
                </div>
                <nav>
                    <ul className="flex items-center flex-col gap-y-4 md:flex-row md:gap-y-0">
                        <li>
                            <Link href="#" className="uppercase text-white">
                                About us
                            </Link>
                            <span className="mx-2 text-white hidden md:inline-block">|</span>
                        </li>
                        <li>
                            <Link href="#" className="uppercase text-white">
                                Terms & Conditions
                            </Link>
                            <span className="mx-2 text-white hidden md:inline-block">|</span>
                        </li>
                        <li>
                            <Link href="#" className="uppercase text-white">
                                Privacy Policy
                            </Link>
                            <span className="mx-2 text-white hidden md:inline-block">|</span>
                        </li>
                        <li>
                            <Link href="#" className="uppercase text-white">
                                Contact Us
                            </Link>
                        </li>
                    </ul>
                </nav>
                <div>
                    <div className="flex items-center justify-center gap-x-2 md:justify-start">
                        <div className="bg-[linear-gradient(190deg,#404AC6_0%,#2A3181_47%,#11186B_100%)] border-2 rounded-full border-[#8C95FF] p-2">
                            <Image
                                src="/img/customer_support/fb.png"
                                width={15}
                                height={15}
                                alt="Facebook Logo"
                                className="w-[24px] h-[24px] md:w-[15px] md:h-[15px]"
                            />
                        </div>
                        <div className="bg-[linear-gradient(190deg,#404AC6_0%,#2A3181_47%,#11186B_100%)] border-2 rounded-full border-[#8C95FF] p-2">
                            <Image
                                src="/img/customer_support/ig.png"
                                width={15}
                                height={15}
                                alt="Instagram Logo"
                                className="w-[24px] h-[24px] md:w-[15px] md:h-[15px]"
                            />
                        </div>
                        <div className="bg-[linear-gradient(190deg,#404AC6_0%,#2A3181_47%,#11186B_100%)] border-2 rounded-full border-[#8C95FF] p-2">
                            <Image
                                src="/img/customer_support/tg.png"
                                width={15}
                                height={15}
                                alt="Telegram Logo"
                                className="w-[24px] h-[24px] md:w-[15px] md:h-[15px]"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    )
}
