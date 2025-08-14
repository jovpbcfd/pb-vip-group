'use client'

import { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'

import { CloseMobileMenu, OpenMobileMenu } from './menu'

export default function Header() {
    const [isOpen, setIsOpen] = useState(false)
    return (
        <header className="bg-linear-to-t from-[#13163B] to-[#202774] transition-all duration-300 ease-in-out">
            <div className="transition-shadow duration-300 shadow-lg">
                <div className="w-full max-w-[1230px] mx-auto flex items-center justify-between p-3 md:py-5">
                    <div className="flex items-center gap-x-2">
                        <div className="md:hidden">
                            <button onClick={() => setIsOpen(true)} aria-label="Open menu">
                                <OpenMobileMenu />
                            </button>
                        </div>
                        <Link href="#">
                            <Image
                                src="/img/PB_GROUP_VIP_LOGO.png"
                                width={225}
                                height={50}
                                alt="PB VIP GROUP"
                                className="w-[100px] md:w-[225px]"
                            />
                        </Link>
                    </div>
                    <div className="flex items-center gap-x-2">
                        <nav className="hidden md:block">
                            <ul className="flex items-center uppercase gap-x-5 text-white">
                                <li>
                                    <Link href="#">leaderboard</Link>
                                </li>
                                <li>
                                    <Link href="#">live score</Link>
                                </li>
                                <li>
                                    <Link href="#">top casino app</Link>
                                </li>
                            </ul>
                        </nav>
                        <button className="text-white">FLAG_BUTTON</button>
                    </div>
                </div>
            </div>
            <div
                className={`fixed top-0 left-0 h-full w-64 bg-[#202774] text-white z-50 transform transition-transform duration-300 ease-in-out ${
                    isOpen ? 'translate-x-0' : '-translate-x-full'
                }`}
            >
                <div className="bg-linear-to-t from-[#13163B] to-[#202774] flex  justify-between items-center p-4 border-b border-gray-600">
                    <span className="text-lg font-bold">Menu</span>
                    <button onClick={() => setIsOpen(false)} aria-label="Close menu">
                        <CloseMobileMenu />
                    </button>
                </div>

                <ul className="flex flex-col p-4 space-y-4 uppercase">
                    <li>
                        <Link href="#" onClick={() => setIsOpen(false)}>
                            leaderboard
                        </Link>
                    </li>
                    <li>
                        <Link href="#" onClick={() => setIsOpen(false)}>
                            live score
                        </Link>
                    </li>
                    <li>
                        <Link href="#" onClick={() => setIsOpen(false)}>
                            top casino app
                        </Link>
                    </li>
                </ul>
            </div>
            {/* overlay */}
            {isOpen && (
                <div
                    className="fixed inset-0 bg-black bg-opacity-10 z-40"
                    onClick={() => setIsOpen(false)}
                />
            )}
        </header>
    )
}
