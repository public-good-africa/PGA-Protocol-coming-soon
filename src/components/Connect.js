import Image from "next/image";

function Connect() {
    return (
        <div className="flex flex-col justify-center items-center font-extralight text-xl">
            <p>{"Together, let's craft a story of change and progress fuelled by web3 and powered by Public Good Funding"}</p>
            <div>
                <Image alt="conect-image" src={'/connect.svg'} width={'1000'} height={'600'}/>
            </div>
        </div>
    )
}

export default Connect;