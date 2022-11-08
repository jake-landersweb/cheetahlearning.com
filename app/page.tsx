import BoundsWrapper from "../components/boundsWrapper"
import ClassView from "../components/classView/classView"
import Image from "../components/image"
import Link from "../components/link"
import Overview from "./overview"
import getClasses from "../lib/apiRoutes/getClasses"
import CheetahClass from "../lib/data/cheetahClass"
import Training from "./training"
import Featured from "./featured"

export default async function Index() {
    const classData = await getClasses()
    return <div className="space-y-8 md:space-y-16">
        <div className="">
            <BoundsWrapper>
                <div className="p-4 md:p-8 grid place-items-center text-4xl font-semibold text-center">
                    <h2>PMP Pass - GUARANTEED</h2>
                    <p>Cheetah's Accelerated Exam Prep Program</p>
                    <p>Go From 0 to PMP <span className="italic">Cheetah Fast</span></p>
                    <p className="text-lg text-center max-w-2xl pt-4 font-normal text-gray-500">Start class on Monday and become PMP certified by Friday. Over 20 years of Accelerated Learning experience and a 98% pass rate on the PMP exam*</p>
                </div>
                <ClassView classes={JSON.parse(classData)['classes']['class']} />
            </BoundsWrapper>
        </div>
        <div className="bg-white">
            <div className="bg-acc">
                <BoundsWrapper>
                    <div className="space-y-2 text-bg text-center p-6">
                        <h4 className="font-bold text-3xl">The <span className="text-main">Gold Standard</span> In Project Management Education</h4>
                        <p className="text-lg">Cheetah Learning was the first company to offer Accelerated PMP Exam Prep over 20 years ago. We have a consistent 98% pass rate and 95% of our business is referrals from our large and very successful alumni base. Cheetah Learning students and the companies they serve become the top performers in their industries. We offer PMP, PMI-ACP, CAPM, and CCPM prep courses as well as continuing education classes in a variety of project management, negotiations, and accelerated learning topics.</p>
                    </div>
                </BoundsWrapper>
            </div>
            <div className="grid place-items-center">
                <div className="w-[30px] h-[30px] bg-acc rotate-45 -m-[20px]"></div>
            </div>
            <div className="p-8 md:p-16 grid place-items-center">
                <Image props={{
                    src: "/images/clients.jpg",
                    alt: "Cheetah Clients",
                    divClass: "",
                    imgClass: ""
                }} />

            </div>
            <div className="bg-acc p-8 font-bold text-3xl text-bg text-center">
                <p className="mb-8">UNSURE WHICH CREDENTIAL IS RIGHT FOR YOU?</p>
                <Link props={{
                    href: "mailto:jean@cheetahlearning.com",
                    child: <p>CONTACT A CAREER COUNSELOR TO FIND THE RIGHT PROGRAM.</p>,
                    isExternal: true,
                    className: "md:hover:opacity-50 transition-all underline md:hover:no-underline"
                }} />
            </div>
            <div className="grid place-items-center">
                <div className="w-[30px] h-[30px] bg-acc rotate-45 -m-[20px]"></div>
            </div>
        </div>
        <BoundsWrapper>
            <Overview />
        </BoundsWrapper>
        <div className="">
            <div className="bg-acc p-8 font-bold text-3xl text-bg text-center">
                <p className="">CHEETAH LEARNING <span className="text-main">TRAINING</span> LASTS A LIFETIME</p>
            </div>
            <div className="grid place-items-center">
                <div className="w-[30px] h-[30px] bg-acc rotate-45 -m-[20px]"></div>
            </div>
        </div>
        <BoundsWrapper>
            <Training />
        </BoundsWrapper>
        <div className="">
            <div className="bg-acc p-8 font-bold text-3xl text-bg text-center">
                <p className=""><span className="text-main">FEATURED</span> PROJECT MANAGEMENT CERTIFICATIONS</p>
            </div>
            <div className="grid place-items-center">
                <div className="w-[30px] h-[30px] bg-acc rotate-45 -m-[20px]"></div>
            </div>
        </div>
        <BoundsWrapper>
            <Featured />
        </BoundsWrapper>
        <div className="h-[2000px] w-4 bg-green-300"></div>
    </div>
}