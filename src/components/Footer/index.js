import { LeafRight } from "@Assets/images"
import './footer.css'
export default function Footer() {
    return(
        <footer className="relative mt-20 h-[54px] bottom-0">
            <div className="bg-[#FFAF00] w-[93%] ">
            <p className="text-white font-avenir text-center p-4 text-lg">Copyright @ 2020 Dewe Tour - Muhammad Hafidz Haiqal Putra - NIS. All Rights reserved</p>
            </div>
            <img src={LeafRight} alt="leaf" className="absolute right-0 -bottom-2"/>
        </footer>
    )
}