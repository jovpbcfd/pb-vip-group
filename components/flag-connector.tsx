import Image from 'next/image'
import Link from 'next/link'

export default function FlagConnectors() {
    return (
        <>
            <div className="relative mt-5 flex items-center justify-center bg-[url(/img/flag-circles/connector.gif)] bg-no-repeat bg-contain bg-center">
                {/* Center Circle */}
                <div className="flex items-center justify-center">
                    <Link href="#">
                        <Image
                            src="/img/flag-circles/pb_vip.gif"
                            alt="Logo"
                            width={300}
                            height={300}
                            className="w-[150px] h-[150px] md:w-[300px] md:h-[300px]"
                            unoptimized
                        />
                    </Link>
                </div>

                {/* Top Left */}
                <div className="absolute top-[8%] left-[7%] md:top-[13%] md:left-[18%] flex items-center">
                    <div className="overflow-hidden cursor-pointer">
                        <Image
                            src="/img/flag-circles/ph.gif"
                            alt="Philippines"
                            width={120}
                            height={120}
                            className="shadow-lg w-[60px] h-[60px] md:w-[120px] md:h-[120px]"
                            unoptimized
                        />
                    </div>
                </div>

                {/* Bottom Left */}
                <div className="absolute bottom-[8%] left-[7%] md:bottom-[7%] md:left-[18%] flex items-center">
                    <div className="overflow-hidden cursor-pointer">
                        <Image
                            src="/img/flag-circles/bd.gif"
                            alt="Bangladesh"
                            width={120}
                            height={120}
                            className="shadow-lg w-[60px] h-[60px] md:w-[120px] md:h-[120px]"
                            unoptimized
                        />
                    </div>
                </div>

                {/* Top Right */}
                <div className="absolute top-[8%] right-[7%] md:top-[13%] md:right-[18%] flex items-center">
                    <div className="overflow-hidden cursor-pointer">
                        <Image
                            src="/img/flag-circles/vn.gif"
                            alt="Bangladesh"
                            width={120}
                            height={120}
                            className="shadow-lg w-[60px] h-[60px] md:w-[120px] md:h-[120px]"
                            unoptimized
                        />
                    </div>
                </div>

                {/* Bottom Right */}
                <div className="absolute bottom-[8%] right-[7%] md:bottom-[7%] md:right-[18%] flex items-center">
                    <div className="overflow-hidden cursor-pointer">
                        <Image
                            src="/img/flag-circles/cb.gif"
                            alt="Bangladesh"
                            width={120}
                            height={120}
                            className="shadow-lg w-[60px] h-[60px] md:w-[120px] md:h-[120px]"
                            unoptimized
                        />
                    </div>
                </div>
            </div>
        </>
    )
}
