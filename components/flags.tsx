import Image from 'next/image'
import Link from 'next/link'

export default function Flags() {
    return (
        <div className="flex items-center justify-center">
            <div>
                <Link href="/bangladesh">
                    <Image
                        src="/img/flag-circles/bd.gif"
                        alt="Bangladesh"
                        width={120}
                        height={120}
                        className="w-[60px] h-[60px] md:w-[120px] md:h-[120px]"
                        unoptimized
                    />
                </Link>
            </div>
            <div>
                <Link href="/philippines">
                    <Image
                        src="/img/flag-circles/ph.gif"
                        alt="Bangladesh"
                        width={120}
                        height={120}
                        className="w-[60px] h-[60px] md:w-[120px] md:h-[120px]"
                        unoptimized
                    />
                </Link>
            </div>
            <div>
                <Link href="/">
                    <Image
                        src="/img/flag-circles/pb_vip.gif"
                        alt="Bangladesh"
                        width={120}
                        height={120}
                        className="w-[60px] h-[60px] md:w-[120px] md:h-[120px]"
                        unoptimized
                    />
                </Link>
            </div>
            <div>
                <Image
                    src="/img/flag-circles/vn.gif"
                    alt="Bangladesh"
                    width={120}
                    height={120}
                    className="w-[60px] h-[60px] md:w-[120px] md:h-[120px]"
                    unoptimized
                />
            </div>
            <div>
                <Image
                    src="/img/flag-circles/cb.gif"
                    alt="Bangladesh"
                    width={120}
                    height={120}
                    className="w-[60px] h-[60px] md:w-[120px] md:h-[120px]"
                    unoptimized
                />
            </div>
        </div>
    )
}
