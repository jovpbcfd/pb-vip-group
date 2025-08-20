import GameBrandItem from '@/components/brand-item'
import { gameBrandItemdataPh } from '@/data/brands-ph'

export default function GroupVipBrandsPh() {
    return (
        <div className="w-full max-w-[1230px] mx-auto p-2 mb-10">
            <div className="text-center mt-5">
                <h2
                    className="bg-[linear-gradient(90deg,#AA670D_0%,#FAD44B_18%,#F7EC95_31%,#FFC946_47%,#FAC026_61%,#FAEA07_73%,#AA670D_88%,#E09127_100%)] bg-clip-text text-transparent
                                font-[800] text-xl uppercase md:text-[32px]
                                "
                >
                    Pb group vip brands
                </h2>
                <div className="mx-auto md:w-[70%] text-center  mt-2 text-white leading-5">
                    <p>
                        PB GROUP VIP does the hard work for you—our team verifies every brand to
                        guarantee a secure and smooth experience. From live sports to casino games,
                        you’ll find the top picks in one place, hassle-free.
                    </p>
                </div>
            </div>
            <div className="mx-auto mt-6 md:mt-13">
                <div className="grid grid-cols-1 gap-y-4 place-items-center w-full mx-auto md:max-w-[940px] md:grid-cols-2">
                    <GameBrandItem data={gameBrandItemdataPh} />
                </div>
            </div>
        </div>
    )
}
