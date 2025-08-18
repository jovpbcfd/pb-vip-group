import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from '@/components/ui/carousel'
import Image from 'next/image'

const SLIDES = [
    {
        imagePath: '/img/brand_ambssador/cc_ba.png',
        name: 'Red Bedonia',
        title: 'Content creator',
    },
    {
        imagePath: '/img/brand_ambssador/cc_ba.png',
        name: 'Red Bedonia',
        title: 'Content creator',
    },
    {
        imagePath: '/img/brand_ambssador/cc_ba.png',
        name: 'Red Bedonia',
        title: 'Content creator',
    },
]

export default function Brandambassador() {
    return (
        <div className="w-full max-w-[1230px] mx-auto p-2">
            <div className="text-center">
                <h2
                    className="bg-[linear-gradient(90deg,#AA670D_0%,#FAD44B_18%,#F7EC95_31%,#FFC946_47%,#FAC026_61%,#FAEA07_73%,#AA670D_88%,#E09127_100%)] bg-clip-text text-transparent
                font-[800] text-xl uppercase md:text-[32px]
                "
                >
                    Brand ambassador
                </h2>
            </div>
            <div className="mx-auto flex items-center mt-10">
                <Carousel
                    className="mx-auto"
                    opts={{
                        align: 'start',
                        loop: true,
                    }}
                >
                    <CarouselContent>
                        {SLIDES.map((item, index) => (
                            <CarouselItem key={index} className=" md:basis-1/2 lg:basis-1/3">
                                <div className="bg-[linear-gradient(90deg,#2532CD_0%,#8C95FF_100%)] p-[1px] rounded-[30px]">
                                    <div className="bg-[linear-gradient(90deg,#404AC6_0%,#2A3181_47%,#11186B_100%)] p-3 rounded-[30px]">
                                        <div>
                                            <Image
                                                src={item.imagePath}
                                                width={300}
                                                height={500}
                                                alt={item.name}
                                            />
                                        </div>
                                        <div className="text-center py-2">
                                            <h3
                                                className="bg-[linear-gradient(90deg,#AA670D_0%,#FAD44B_18%,#F7EC95_31%,#FFC946_47%,#FAC026_61%,#FAEA07_73%,#AA670D_88%,#E09127_100%)] bg-clip-text text-transparent
                font-[800] text-xl uppercase md:text-[24px]
                "
                                            >
                                                {item.name}
                                            </h3>
                                            <p className="text-white uppercase">{item.title}</p>
                                        </div>
                                    </div>
                                </div>
                            </CarouselItem>
                        ))}
                    </CarouselContent>
                    {/* <CarouselPrevious />
                    <CarouselNext /> */}
                </Carousel>
            </div>
        </div>
    )
}
