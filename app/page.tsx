import FlagConnectors from '@/components/flag-connector'
import Image from 'next/image'

export default function Home() {
    return (
        <div>
            <div className="w-full max-w-[1230px] mx-auto">
                <div>
                    <h1
                        className="bg-[linear-gradient(90deg,#AA670D_0%,#FAD44B_18%,#F7EC95_31%,#FFC946_47%,#FAC026_61%,#FAEA07_73%,#AA670D_88%,#E09127_100%)] bg-clip-text text-transparent 
                text-[40px] font-[900] uppercase text-center"
                    >
                        Level up your game with{' '}
                        <span className="block">pb group vip partner platforms</span>
                    </h1>
                    <p className="text-white text-center">
                        Experience gaming like never before—PB GROUP VIP partners with Asia’s top
                        platforms to bring exclusive bonuses, luxury features, and top support.
                    </p>
                </div>
                <div className="max-w-[800px] mx-auto">
                    <FlagConnectors />
                </div>
            </div>
        </div>
    )
}
