import Image from "next/image"

function Logo() {
    return (
        <div>
            <Image src='/logo.svg' alt="logo" width='50' height='50'/>
        </div>
    )
}

export default Logo
