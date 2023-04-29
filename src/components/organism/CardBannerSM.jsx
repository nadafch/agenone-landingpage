import * as SVG from "../../configs/svgs"
import * as COMPONENTS from "../../components"
import { Swiper, SwiperSlide } from "swiper/react"
import { Autoplay, Pagination } from "swiper"
import 'swiper/css'
import "swiper/css/pagination";
import "./styles.css"

export default function CardBannerSM() {
    const benefit = [
        { "images": SVG.Expand, "label": "Expanding the Market" },
        { "images": SVG.Wallet, "label": "Cost-Effective" },
        { "images": SVG.Star, "label": "More Professional" },
        { "images": SVG.Client, "label": "Attract Client" },
    ]
    return (
        <div className="w-full flex justify-center items-center p-3 mt-20 relative lg:hidden ">
            <img src={SVG.CardBannerSM} />
            <div className="absolute z-10 inset-0 flex flex-col justify-center items-center">
                <div className="w-full max-w-[300px]">
                    <h1 className="text-lg font-semibold">Benefit of improving your business</h1>
                    <Swiper
                        spaceBetween={30}
                        centeredSlides={true}
                        autoplay={{ delay: 3000, disableOnInteraction: false }}
                        pagination={{ clickable: true, dynamicBullets: true }}
                        modules={[Autoplay, Pagination]}
                        paginationClass
                        navigation={true}
                        className="mySwiper"
                    >
                        {
                            benefit.map((index, label) => (
                                <SwiperSlide key={label}>
                                    <div key={label} className="flex flex-col gap-2 justify-center items-center mt-5">
                                        <COMPONENTS.Icon>
                                            <img src={index.images} />
                                        </COMPONENTS.Icon>
                                        <h1>{index.label}</h1>
                                    </div>
                                </SwiperSlide>
                            ))
                        }
                    </Swiper>
                </div>
            </div>
        </div>
    )
}
