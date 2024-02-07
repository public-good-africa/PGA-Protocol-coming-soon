import Image from "next/image"

function Logo() {
    return (
        <div>
            <Image src='/logo.svg' alt="logo" width='70' height='70'/>
        </div>
    )
}

export default Logo
