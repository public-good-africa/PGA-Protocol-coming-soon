import Image from "next/image"

function Button() {
    return (
        <button className="bg-[#052e16] p-3 border rounded-full text-white flex">
            Join Our Waitlist {' '}<span>
                <Image alt="arrow-left" src={'/arrow-left.svg'} width={25} height={25}/>
            </span>
        </button>
    )
}

export default Button
