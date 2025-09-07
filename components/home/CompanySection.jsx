import Image from "next/image";

export default function CompanySection() {
    return (
        <div className="py-5 bg-zinc-100 px-20">
            <p className="text-lg font-medium text-center opacity-40 text-2xl lg:text-3xl">Trusted by the world’s best companies</p>
            <div className="container flex flex-wrap items-center justify-between">

                <Image src="/image/air-company-logo.png" width={128} height={128} alt="" className="opacity-40" />
                <Image src="/image/nike.png" width={128} height={128} alt="" className="opacity-40" />
                <Image src="/image/samsung.png" width={128} height={128} alt="" className="opacity-40" />
                <Image src="/image/amazon-pay.png" width={128} height={128} alt="" className="opacity-40" />
            </div>
        </div>
    );
}