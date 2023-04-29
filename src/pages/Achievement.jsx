import * as COMPONENTS from '../components'

export default function Achievement() {
    return (
        <div className='w-full bg-achievement-pattern bg-no-repeat bg-cover py-7 lg:py-14 flex flex-col justify-center items-center'>
            <div className='max-w-[80%] text-2xl lg:text-[42px] tracking-tight mb-14 leading-tight'>
                We are passionate about helping businesses grow and succeed in the digital age. We take pride in our work and strive to exceed your expectations every time.
            </div>
            <COMPONENTS.CardAchievement />
        </div>
    )
}
