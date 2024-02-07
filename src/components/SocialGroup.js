import Image from "next/image"

function SocialGroup() {
    return (
        <div className="flex gap-5">
            <span>
                {/* <Image alt="social-icon" src={'/telegram.svg'} width={100} height={100} /> */}
                T
            </span>
            <span>
                {/* <Image alt="social-icon" src={'/twitter.svg'} width={50} height={50} /> */}
                X
            </span>
            <span>
                {/* <Image alt="social-icon" src={'/telegram.svg'} width={50} height={50} /> */}
                N
            </span>
        </div>
    )
}

export default SocialGroup
