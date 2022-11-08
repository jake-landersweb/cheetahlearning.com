import Image from "next/image";
import BoundsWrapper from "./boundsWrapper";
import HoverMenu from "./hoverMenu/hoverMenu";
import HoverMenuType from "./hoverMenu/hoverMenuType";
import Link from "./link";

export default function Header({ children }: { children: React.ReactNode }) {
    const resourceClass = "text-2xl md:text-3xl font-medium bg-main-100 grid place-items-center md:hover:bg-main-300 md:hover:text-bg transition-all  px-4 py-1 rounded-md text-center underline"

    const headerLink = (title: string, href: string, isExternal: boolean = true) => {
        return <div className="">
            <Link props={{
                href: href,
                child: <h3>{title}</h3>,
                isExternal: isExternal,
                className: "text-xl font-semibold hover:opacity-50 transition-all"
            }} />
        </div>
    }

    const headerLinkSmall = (title: string, href: string, isExternal: boolean = true) => {
        return <div className="">
            <Link props={{
                href: href,
                child: <p>{title}</p>,
                isExternal: isExternal,
                className: "text-main text-lg hover:text-main-200 transition-colors"
            }} />
        </div>
    }
    return <div className="">
        <div className="fixed top-0 z-50">
            <div className="bg-acc h-[50px] w-screen"></div>
        </div>
        <div className="my-[50px] flex flex-col">
            <BoundsWrapper>
                <div className="relative p-4 md:p-8 grid grid-cols-1 md:grid-cols-3 gap-2 md:gap-4">
                    <div className="grid place-items-center space-y-2">
                        <Image src={"/images/cheetah.png"} alt={"Cheetah Learning Logo"} height={68} width={225} />
                        <p className="font-medium">TOP CHEETAH RESOURCES</p>
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
            <div className="sticky inset-x-0 top-[50px] left-0 bg-main w-screen py-4 z-40">
                <BoundsWrapper>
                    <div className="flex space-x-4 justify-around">
                        <Link props={{
                            href: "/",
                            child: <h3>Home</h3>,
                            isExternal: false,
                            className: "headerItem"
                        }} />
                        <HoverMenu props={{
                            title: "Courses",
                            type: HoverMenuType.header,
                            content: <div className="p-4 space-y-4">
                                {headerLink("CCPM – CHEETAH CERTIFIED PROJECT MANAGER", "#")}
                                <div className="space-y-2">
                                    {headerLink("PMP EXAM PREP", "#")}
                                    {headerLinkSmall("Virtual Classroom", "#")}
                                    {headerLinkSmall("Online", "#")}
                                    {headerLinkSmall("Group Discounts", "#")}
                                    {headerLinkSmall("What is a PMP®", "#")}
                                </div>
                                {headerLink("GET CHEETAH AGILE CERTIFIED", "#")}
                                <div className="space-y-2">
                                    {headerLink("AGILE CERTIFICATION", "#")}
                                    {headerLinkSmall("PMI-ACP Online", "#")}
                                </div>
                                <div className="space-y-2">
                                    {headerLink("MAKING THE MOST OF YOUR PMP", "#")}
                                    {headerLinkSmall("Group PM Training", "#")}
                                    {headerLinkSmall("Cheetah Leadership - Advance Your Career - Guarenteed", "#")}
                                    {headerLinkSmall("Personality Based PM - Create Better Results with Less Effort", "#")}
                                    {headerLinkSmall("Cheetah Negotiations - Get Promoted Cheetah Fast", "#")}
                                    {headerLinkSmall('Top Ten PDU Courses - Be More than "Just" a PMP - be a Cheetah', "#")}
                                </div>
                            </div>
                        }} />
                        <HoverMenu props={{
                            title: "PDUs",
                            type: HoverMenuType.header,
                            content: <div className="">
                                <div className="space-y-2 p-4">
                                    {headerLinkSmall("Cheetah Leadership Program", "#")}
                                    {headerLinkSmall("Introduction to Cheetah Project Management - For Your Team, Group, or Organization", "#")}
                                    {headerLinkSmall("Become a CCPM - 60 PDUs", "#")}
                                    {headerLinkSmall("Certified Accelerated Learner Program - 40 PDUs", "#")}
                                    {headerLinkSmall("Project Turnaround - 40 PDUs", "#")}
                                    {headerLinkSmall("PM of Spring Cleaning - 40 PDUs", "#")}
                                    {headerLinkSmall("Project Micro Green - 30 PDUs", "#")}
                                    {headerLinkSmall("Cheetah Family Office - 20 PDUs", "#")}
                                    {headerLinkSmall("Effective Virtual Teams - 20 PDUs", "#")}
                                    {headerLinkSmall("Effective PM - 20 PDUs", "#")}
                                    {headerLinkSmall("Effective Negotiations - 20 PDUs", "#")}
                                    {headerLinkSmall("Project ROI - 15 PDUs", "#")}
                                    {headerLinkSmall("Peak Performing Mind - 10 PDUs", "#")}
                                </div>
                                <div className="p-4 bg-acc">
                                    <p className="text-bg">To View all of our courses, visit the <a href="#" className="text-main md:hover:opacity-50 transition-all">Course Catalog Page. &rarr;</a></p>
                                </div>
                            </div>
                        }} />
                        <HoverMenu props={{
                            title: "Group Discounts",
                            type: HoverMenuType.header,
                            content: <div className="">
                                <div className="space-y-2 p-4">
                                    {headerLinkSmall("Corporate Discounts", "#")}
                                    {headerLinkSmall("Group Discounts", "#")}
                                    {headerLinkSmall("Preferred Student Rates", "#")}
                                </div>
                                <div className="p-4 bg-acc">
                                    <p className="text-bg">Call (844)800-4PMP to make an appointment today to find out more about these, and other group training options offered by Cheetah.</p>
                                </div>
                            </div>
                        }} />
                        <HoverMenu props={{
                            title: "About",
                            type: HoverMenuType.header,
                            content: <div className="">
                                <div className="space-y-2 p-4">
                                    {headerLinkSmall("What is a PMP®", "#")}
                                    {headerLinkSmall("The Cheetah Difference", "#")}
                                    {headerLinkSmall("Leadership", "#")}
                                    {headerLinkSmall("Our Clients", "#")}
                                    {headerLinkSmall("Testimonials", "#")}
                                    {headerLinkSmall("MEDIA", "#")}
                                </div>
                            </div>
                        }} />
                        <Link props={{
                            href: "/",
                            child: <h3>Blog</h3>,
                            isExternal: false,
                            className: "headerItem"
                        }} />
                        <Link props={{
                            href: "/",
                            child: <h3>Contact</h3>,
                            isExternal: false,
                            className: "headerItem"
                        }} />
                    </div>
                </BoundsWrapper>
            </div>
            <div className="mt-8">
                {children}
            </div>
        </div>
    </div>
}