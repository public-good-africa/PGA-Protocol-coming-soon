import Image from "next/image"

function Button() {
    return (
        <button className="bg-[#052e16] p-3 border rounded-full text-white flex text-xs md:text-base">
            Coming Soon
            {/* Join Our Waitlist {' '}<span className="hidden md:block">
                <Image alt="arrow-left" src={'/arrow-left.svg'} width={25} height={25}/>
            </span> */}
        </button>
    )
}

export default Button
