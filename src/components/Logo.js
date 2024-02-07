import Image from "next/image"

function Logo() {
    return (
        <div>
            <Image src='/logo.svg' alt="logo" width='100' height='100'/>
        </div>
    )
}

export default Logo
