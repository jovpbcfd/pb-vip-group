import Flags from '@/components/flags'

export default function HeroBd() {
    return (
        <div className="w-full max-w-[1230px] mx-auto p-2">
            <div className="mt-2">
                <h1
                    className="bg-[linear-gradient(90deg,#AA670D_0%,#FAD44B_18%,#F7EC95_31%,#FFC946_47%,#FAC026_61%,#FAEA07_73%,#AA670D_88%,#E09127_100%)] bg-clip-text text-transparent 
                                        text-2xl md:text-[40px] text-balance font-[900] uppercase text-center"
                >
                    Level up your game with{' '}
                    <span className="block">pb group vip partner platforms</span>
                </h1>
                <p className="text-white text-center leading-5 text-balance mt-2 mx-auto md:w-[50%] md:text-lg">
                    Experience gaming like never before—PB GROUP VIP partners with Asia’s top
                    platforms to bring exclusive bonuses, luxury features, and top support.
                </p>
            </div>
            <div className="max-w-[800px] mx-auto my-7 md:my-15">
                <Flags country="BD" />
            </div>
            <div className="text-center mt-5 mx-auto md:w-[40%] md:mt-10">
                <p className="text-white leading-5">
                    Ready to Win More and Go Further? Connect with Top Gaming Platforms in Asia and
                    Unlock Premium Rewards.
                </p>
                {/* <div className="p-[1px] mt-4 bg-[linear-gradient(90deg,#2532CD_0%,#8C95FF_100%)] rounded-full overflow-hidden inline-block">
                    <button className="bg-[#1F2460] py-4 px-8 rounded-full text-white font-bold uppercase">
                        contact us
                    </button>
                </div> */}
            </div>
        </div>
    )
}
