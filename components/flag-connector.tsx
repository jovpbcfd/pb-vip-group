import Image from 'next/image'
import Link from 'next/link'

export default function FlagConnectors() {
    return (
        <>
            <div className="relative flex items-center justify-center bg-[url(/img/flag-circles/connector.gif)] bg-no-repeat bg-contain bg-center">
                {/* Center Circle */}
                <div className="flex items-center justify-center">
                    <Link href="#">
                        <Image
                            src="/img/flag-circles/pb_vip.gif"
                            alt="Logo"
                            width={300}
                            height={300}
                            className="w-[100px] h-[100px] md:w-[300px] md:h-[300px]"
                        />
                    </Link>
                </div>

                {/* Top Left */}
                <div className="absolute top-[6%] left-[12%] flex items-center">
                    <div className="overflow-hidden cursor-pointer">
                        <Image
                            src="/img/flag-circles/ph.gif"
                            alt="Philippines"
                            width={80}
                            height={80}
                            className="shadow-lg w-[90px] h-[90px] md:w-[80px] md:h-[80px]"
                        />
                    </div>
                </div>

                {/* Bottom Left */}
                <div className="absolute bottom-[-2%] left-[12%] flex items-center">
                    <div className="overflow-hidden cursor-pointer">
                        <Image
                            src="/img/flag-circles/bd.gif"
                            alt="Bangladesh"
                            width={100}
                            height={100}
                            className="shadow-lg w-[90px] h-[90px] md:w-[150px] md:h-[150px]"
                        />
                    </div>
                </div>
            </div>
        </>
    )
}
