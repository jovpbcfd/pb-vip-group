import Image from 'next/image'
import Link from 'next/link'

export default function Flags({ country }: { country: string }) {
    return (
        <div className="flex items-center justify-center md:gap-x-3">
            <div>
                <Link href="/bangladesh">
                    <Image
                        src={`/img/flag-circles/bd.${country === 'BD' ? 'gif' : 'png'}`}
                        alt="Bangladesh"
                        width={120}
                        height={120}
                        className={`${country === 'BD' ? 'w-[60px] h-[60px] md:w-[120px] md:h-[120px]' : 'w-[60px] h-[60px] md:w-[90px] md:h-[90px]'}`}
                        unoptimized
                    />
                </Link>
            </div>
            <div>
                <Link href="/philippines">
                    <Image
                        src={`/img/flag-circles/ph.${country === 'PH' ? 'gif' : 'png'}`}
                        alt="Bangladesh"
                        width={120}
                        height={120}
                        className={`${country === 'PH' ? 'w-[60px] h-[60px] md:w-[120px] md:h-[120px]' : 'w-[60px] h-[60px] md:w-[90px] md:h-[90px]'}`}
                        unoptimized
                    />
                </Link>
            </div>
            <div>
                <Link href="/">
                    <Image
                        src="/img/flag-circles/pb_vip.png"
                        alt="Bangladesh"
                        width={120}
                        height={120}
                        className="w-[60px] h-[60px] md:w-[90px] md:h-[90px]"
                        unoptimized
                    />
                </Link>
            </div>
            <div>
                <Link href="/vietnam">
                    <Image
                        src={`/img/flag-circles/vn.${country === 'VN' ? 'gif' : 'png'}`}
                        alt="Bangladesh"
                        width={120}
                        height={120}
                        className={`${country === 'VN' ? 'w-[60px] h-[60px] md:w-[120px] md:h-[120px]' : 'w-[60px] h-[60px] md:w-[90px] md:h-[90px]'}`}
                        unoptimized
                    />
                </Link>
            </div>
            <div>
                <Link href="/cambodia">
                    <Image
                        src={`/img/flag-circles/cb.${country === 'CB' ? 'gif' : 'png'}`}
                        alt="Bangladesh"
                        width={120}
                        height={120}
                        className={`${country === 'CB' ? 'w-[60px] h-[60px] md:w-[120px] md:h-[120px]' : 'w-[60px] h-[60px] md:w-[90px] md:h-[90px]'}`}
                        unoptimized
                    />
                </Link>
            </div>
        </div>
    )
}
