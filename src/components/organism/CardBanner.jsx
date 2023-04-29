import * as SVG from "../../configs/svgs"
import * as COMPONENTS from "../../components"

export default function CardBanner() {
    const benefit = [
        { "images": SVG.Expand, "label": "Expanding the Market" },
        { "images": SVG.Wallet, "label": "Cost-Effective" },
        { "images": SVG.Star, "label": "More Professional" },
        { "images": SVG.Client, "label": "Attract Client" },
    ]

    return (
        <>
            <div className="w-[95%] p-3 mt-20 relative hidden lg:flex lg:justify-center ">
                <img src={SVG.CardBanner} />
                <div className="absolute inset-0 flex flex-col justify-center items-center">
                    <h1 className="text-3xl font-semibold">Benefit of improving your business</h1>
                    <div className="flex justify-around items-center gap-32 mt-12">
                        {
                            benefit.map((index, label) => (
                                <div key={label} className="flex justify-center items-center flex-col gap-2">
                                    <COMPONENTS.Icon>
                                        <img src={index.images} className="w-[52px] h-[52px]" />
                                    </COMPONENTS.Icon>
                                    <h1>{index.label}</h1>
                                </div>
                            ))
                        }
                    </div>
                </div>
            </div>
        </>
    )
}
