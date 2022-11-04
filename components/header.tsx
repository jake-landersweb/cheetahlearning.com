import Image from "next/image";
import BoundsWrapper from "./boundsWrapper";
import Link from "./link";

export default function Header({ children }: { children: React.ReactNode }) {
    const resourceClass = "text-2xl md:text-3xl font-medium bg-main-100 grid place-items-center md:hover:bg-main-300 md:hover:text-bg transition-all  px-4 py-1 rounded-md text-center underline"
    return <div className="">
        <div className="fixed top-0 z-50">
            <div className="bg-acc h-[50px] w-screen"></div>
        </div>
        <div className="my-[50px] flex flex-col">
            <BoundsWrapper>
                <div className="relative p-4 md:p-8 grid grid-cols-1 md:grid-cols-3 gap-2 md:gap-4">
                    <div className="grid place-items-center space-y-2">
                        <Image src={"/images/cheetah.png"} alt={"Cheetah Learning Logo"} height={68} width={225} />
                        <p>Top Cheetah Resources</p>
                    </div>
                    <Link props={{
                        href: "",
                        child: <h2 className="">Free PMP Practice Questions &rarr;</h2>,
                        isExternal: true,
                        className: "resourceCell"
                    }} />
                    <Link props={{
                        href: "",
                        child: <h2 className="">Five Quick Steps to Become PMP Certified</h2>,
                        isExternal: true,
                        className: "resourceCell"
                    }} />
                </div>
            </BoundsWrapper>
            <div className="sticky inset-x-0 top-[50px] left-0 bg-main h-[75px] w-screen">

            </div>
            <div className="mt-8">
                {children}
            </div>
        </div>
    </div>
}