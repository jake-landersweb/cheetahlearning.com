import BoundsWrapper from "../components/boundsWrapper"
import ClassView from "../components/classView/classView"
import Image from "../components/image"
import Link from "../components/link"
import getClasses from "../lib/apiRoutes/getClasses"
import Separator from "../components/separator"
import NewsLetter from "../components/newsletter"
import Overview from "../components/overview"
import Training from "../components/training"
import Featured from "../components/featured/features"
import { GetServerSideProps, InferGetServerSidePropsType } from "next"
import Resources from "../components/resources"
import Field from "../components/field"
import TrustPilot from "../components/trustPilot"

export const getServerSideProps: GetServerSideProps = async (context) => {

    const classData = await getClasses()
    return {
        props: {
            classData
        }
    }
}

export default function Index({ classData }: InferGetServerSidePropsType<typeof getServerSideProps>) {
    return <div className="space-y-8 md:space-y-16">
        <div className="">
            <BoundsWrapper>
                <div className="p-4 md:p-8 grid place-items-center text-3xl md:text-4xl font-semibold text-center tracking-tight">
                    <h2 className="font-bold">PMP Pass - GUARANTEED</h2>
                    <p>Cheetah&apos;s Accelerated Exam Prep Program</p>
                    <p>Go From 0 to PMP <span className="italic">Cheetah Fast</span></p>
                    <p className="text-lg text-center max-w-2xl pt-4 font-normal text-gray-500">Start class on Monday and become PMP certified by Friday. Over 20 years of Accelerated Learning experience and a 98% pass rate on the PMP exam*</p>
                </div>
                <div className="lg:flex lg:flex-row-reverse">
                    <ClassView classes={JSON.parse(classData)['classes']['class']} />
                    <TrustPilot />
                </div>
                <div className="">
                    <Resources />
                </div>
            </BoundsWrapper>
        </div>
        <div className="bg-white">
            <Separator>
                <BoundsWrapper>
                    <div className="space-y-2 text-bg text-center">
                        <h4 className="font-bold text-3xl">The <span className="text-main">Gold Standard</span> In Project Management Education</h4>
                        <p className="text-base md:text-lg">Cheetah Learning was the first company to offer Accelerated PMP Exam Prep over 20 years ago. We have a consistent 98% pass rate and 95% of our business is referrals from our large and very successful alumni base. Cheetah Learning students and the companies they serve become the top performers in their industries. We offer PMP, PMI-ACP, CAPM, and CCPM prep courses as well as continuing education classes in a variety of project management, negotiations, and accelerated learning topics.</p>
                    </div>
                </BoundsWrapper>
            </Separator>
            <div className="p-8 md:p-16 grid place-items-center">
                <Image props={{
                    src: "/images/clients.jpg",
                    alt: "Cheetah Clients",
                    divClass: "",
                    imgClass: ""
                }} />

            </div>
            <Separator>
                <p className="mb-8">UNSURE WHICH CREDENTIAL IS RIGHT FOR YOU?</p>
                <Link props={{
                    href: "mailto:jean@cheetahlearning.com",
                    child: <p>CONTACT A CAREER COUNSELOR TO FIND THE RIGHT PROGRAM.</p>,
                    isExternal: true,
                    className: "md:hover:opacity-50 transition-all underline md:hover:no-underline"
                }} />
            </Separator>
        </div>
        <BoundsWrapper>
            <Overview />
        </BoundsWrapper>
        <Separator>
            <p className="">CHEETAH LEARNING <span className="text-main">TRAINING</span> LASTS A LIFETIME</p>
        </Separator>
        <BoundsWrapper>
            <Training />
        </BoundsWrapper>
        <Separator>
            <p className=""><span className="text-main">FEATURED</span> PROJECT MANAGEMENT CERTIFICATIONS</p>
        </Separator>
        <BoundsWrapper>
            <Featured />
        </BoundsWrapper>
        <NewsLetter />
    </div>
}