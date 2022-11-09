'use client';

import { useState } from "react";
import BoundsWrapper from "./boundsWrapper";
import HoverMenu from "./hoverMenu/hoverMenu";
import HoverMenuType from "./hoverMenu/hoverMenuType";
import Link from "./link";

export default function Header({ children }: { children: React.ReactNode }) {
    const [isOpen, setIsOpen] = useState(false);

    const handleClick = () => {
        setIsOpen(!isOpen);
    }

    const closeMenu = () => {
        setIsOpen(false);
    }

    const menuItems = (className: string) => {
        return [
            <div className={className}>
                {headerLink("CCPM – CHEETAH CERTIFIED PROJECT MANAGER", "https://www.cheetahlearning.com/wp/ccpm-cheetah-certified-project-manager/")}
                <div className="md:space-y-2">
                    {headerLink("PMP EXAM PREP", "https://www.cheetahlearning.com/wp/pmp-overview/")}
                    {headerLinkSmall("Virtual Classroom", "https://www.cheetahlearning.com/wp/cheetah-exam-prep-for-the-pmp-exam-virtual/")}
                    {headerLinkSmall("Online", "https://www.cheetahlearning.com/wp/cheetah-pmp-exam-prep-online-program/")}
                    {headerLinkSmall("Group Discounts", "https://www.cheetahlearning.com/wp/furtherfaster/")}
                    {headerLinkSmall("What is a PMP®", "https://www.cheetahlearning.com/wp/becoming-a-pmp/")}
                </div>
                {headerLink("GET CHEETAH AGILE CERTIFIED", "https://www.cheetahlearning.com/wp/cheetah-agile-certified/")}
                <div className="md:space-y-2">
                    {headerLink("AGILE CERTIFICATION", "https://www.cheetahlearning.com/wp/pmi-acp-agile-certified-practicioner/")}
                    {headerLinkSmall("PMI-ACP Online", "https://www.cheetahlearning.com/wp/pmi-acp-agile-certified-practicioner/")}
                </div>
                <div className="md:space-y-2">
                    {headerLink("MAKING THE MOST OF YOUR PMP", "https://www.cheetahlearning.com/wp/furtherfaster/")}
                    {headerLinkSmall("Group PM Training", "https://www.cheetahlearning.com/wp/furtherfaster/")}
                    {headerLinkSmall("Cheetah Leadership - Advance Your Career - Guarenteed", "https://www.cheetahlearning.com/wp/cheetah-leadership-program/")}
                    {headerLinkSmall("Personality Based PM - Create Better Results with Less Effort", "https://www.cheetahlearning.com/wp/ccpm-cheetah-certified-project-manager/")}
                    {headerLinkSmall("Cheetah Negotiations - Get Promoted Cheetah Fast", "https://www.cheetahlearning.com/wp/negskills/")}
                    {headerLinkSmall('Top Ten PDU Courses - Be More than "Just" a PMP - be a Cheetah', "https://www.cheetahlearning.com/wp/top-ten-pdu-classes/")}
                </div>
            </div>,
            <div className={className}>
                <div className="md:space-y-2 md:p-4">
                    {headerLinkSmall("Cheetah Leadership Program", "https://www.cheetahlearning.com/wp/cheetah-leadership-program/")}
                    {headerLinkSmall("Introduction to Cheetah Project Management - For Your Team, Group, or Organization", "https://www.cheetahlearning.com/wp/intropm/")}
                    {headerLinkSmall("Become a CCPM - 60 PDUs", "https://www.cheetahlearning.com/wp/ccpm-cheetah-certified-project-manager/")}
                    {headerLinkSmall("Certified Accelerated Learner Program - 40 PDUs", "https://www.cheetahlearning.com/wp/certified-accelerated-learner/")}
                    {headerLinkSmall("Project Turnaround - 40 PDUs", "https://www.cheetahlearning.com/wp/turnaround/")}
                    {headerLinkSmall("PM of Spring Cleaning - 40 PDUs", "https://www.cheetahlearning.com/wp/springclean/")}
                    {headerLinkSmall("Project Micro Green - 30 PDUs", "https://www.cheetahlearning.com/wp/project-micro-green/")}
                    {headerLinkSmall("Cheetah Family Office - 20 PDUs", "https://www.cheetahlearning.com/wp/office/")}
                    {headerLinkSmall("Effective Virtual Teams - 20 PDUs", "https://www.cheetahlearning.com/wp/effectivevirtual/")}
                    {headerLinkSmall("Effective PM - 20 PDUs", "https://www.cheetahlearning.com/wp/effectivepm/")}
                    {headerLinkSmall("Effective Negotiations - 20 PDUs", "https://www.cheetahlearning.com/wp/negskills/")}
                    {headerLinkSmall("Project ROI - 15 PDUs", "https://www.cheetahlearning.com/wp/project-roi/")}
                    {headerLinkSmall("Peak Performing Mind - 10 PDUs", "https://www.cheetahlearning.com/wp/cheetahfocus/")}
                </div>
                <div className="hidden md:block p-4 bg-acc">
                    <p className="text-bg">To View all of our courses, visit the <a href="https://www.cheetahlearning.com/wp/professional-development-units-pdu-courses/" target="_blank" rel="noopener noreferrer" className="text-main md:hover:opacity-50 transition-all">Course Catalog Page. &rarr;</a></p>
                </div>
            </div>,
            <div className="">
                <div className="md:space-y-2 md:p-4">
                    {headerLinkSmall("Corporate Discounts", "https://www.cheetahlearning.com/wp/furtherfaster/")}
                    {headerLinkSmall("Group Discounts", "https://www.cheetahlearning.com/wp/furtherfaster/")}
                    {headerLinkSmall("Preferred Student Rates", "https://www.cheetahlearning.com/wp/furtherfaster/")}
                </div>
                <div className="hidden md:block p-4 bg-acc">
                    <p className="text-bg">Call (844)800-4PMP to make an appointment today to find out more about these, and other group training options offered by Cheetah.</p>
                </div>
            </div>,
            <div className="">
                <div className="md:space-y-2 md:p-4">
                    {headerLinkSmall("What is a PMP®", "https://www.cheetahlearning.com/wp/becoming-a-pmp/")}
                    {headerLinkSmall("The Cheetah Difference", "https://www.cheetahlearning.com/wp/about/")}
                    {headerLinkSmall("Leadership", "https://www.cheetahlearning.com/wp/about-the-company/")}
                    {headerLinkSmall("Our Clients", "https://www.cheetahlearning.com/wp/our-client/")}
                    {headerLinkSmall("Testimonials", "https://www.cheetahlearning.com/wp/testimonials-2/")}
                    {headerLinkSmall("MEDIA", "https://www.cheetahlearning.com/wp/media/")}
                </div>
            </div>
        ]
    }

    const menuLink = (title: string, href: string, isExternal: boolean = true) => {
        return <Link props={{
            href: href,
            child: <>{title}</>,
            isExternal: isExternal,
            className: "bg-acc-200 text-bg py-2 rounded-md flex px-2 justify-center"
        }} />
    }

    const menuHeader = (title: string) => {
        return <div className="">
            <h3 className="text-2xl font-medium tracking-tighter">{title}</h3>
            <div className="flex bg-gray-400 h-[0.5px]"></div>
        </div>
    }

    const featuredCell = (src: string, alt: string, title: string, desc: string, link: string) => {
        return <div className="bg-stone-100 space-y-2 overflow-clip rounded-md flex flex-col justify-between border border-gray-300">
            <div className="space-y-4">
                <img src={src} alt={alt} className="w-full" />
                <h4 className="text-2xl font-semibold text-center px-4 tracking-tight">{title}</h4>
            </div>
            <p className="font-medium text-center px-4">{desc}</p>
            <Link props={{
                href: link,
                child: <>Learn More &rarr;</>,
                isExternal: true,
                className: "bg-acc-200 w-full py-2 md:py-4 md:hover:bg-acc transition-all text-bg text-center md:text-lg font-medium"
            }} />
        </div>
    }

    const headerLink = (title: string, href: string, isExternal: boolean = true) => {
        return <div className="">
            <Link props={{
                href: href,
                child: <h3>{title}</h3>,
                isExternal: isExternal,
                className: "text-lg md:text-xl font-semibold hover:opacity-50 transition-all"
            }} />
        </div>
    }

    const headerLinkSmall = (title: string, href: string, isExternal: boolean = true) => {
        return <div className="">
            <Link props={{
                href: href,
                child: <p>{title}</p>,
                isExternal: isExternal,
                className: "text-main md:text-lg hover:text-main-200 transition-colors"
            }} />
        </div>
    }
    return <div className="">
        <div className="fixed top-0 z-50">
            {/* <div className="bg-acc-400 h-[50px] w-screen flex items-center justify-between px-4 md:px-8">
                <p className="text-bg text-xl font-medium">844-800-4767</p>
                <Link props={{
                    href: "https://registration.cheetahlearning.com/ASPNET/Login.aspx?Username=&Password=",
                    child: <>Login</>,
                    isExternal: true,
                    className: "text-bg md:hover:text-main transition-all",
                }} />
            </div> */}
            <div className={`bg-acc backdrop-blur-sm h-[50px] items-center w-screen grid place-items-center transition-all duration-300 fixed top-0 left-0`}>
                <div className="flex items-center justify-between max-w-[2000px] w-full px-2 lg:px-20 md:px-10">
                    <p className="text-bg text-xl font-medium">844-800-4767</p>
                    <Link props={{
                        href: "https://registration.cheetahlearning.com/ASPNET/Login.aspx?Username=&Password=",
                        child: <>Login</>,
                        isExternal: true,
                        className: "hidden md:block text-bg md:hover:text-main transition-all",
                    }} />
                    {/* Mobile menu */}
                    {isOpen ? (
                        <button onClick={handleClick} className={`md:hidden text-gray-400 w-10 h-10 focus:outline-none fixed right-2 z-50`}>
                            <span className="sr-only">Open main menu</span>
                            <div
                                className="block w-5 absolute left-1/2 top-1/2   transform  -translate-x-1/2 -translate-y-1/2">
                                <span aria-hidden="true" className={`${isOpen ? 'rotate-45' : '-translate-y-1.5'} block absolute h-0.5 w-5 bg-current transform transition duration-500 ease-in-out`}></span>
                                <span aria-hidden="true"
                                    className={`${isOpen ? 'opacity-0' : ''}  block absolute  h-0.5 w-5 bg-current   transform transition duration-500 ease-in-out`}></span>
                                <span aria-hidden="true"
                                    className={`${isOpen ? "-rotate-45" : "translate-y-1.5"}  block absolute  h-0.5 w-5 bg-current transform  transition duration-500 ease-in-out`}></span>
                            </div>
                        </button>
                    ) : (
                        <button onClick={handleClick} className={`md:hidden text-gray-400 w-10 h-10 relative focus:outline-none z-50`}>
                            <span className="sr-only">Open main menu</span>
                            <div
                                className="block w-5 absolute left-1/2 top-1/2   transform  -translate-x-1/2 -translate-y-1/2">
                                <span aria-hidden="true" className={`${isOpen ? 'rotate-45' : '-translate-y-1.5'} block absolute h-0.5 w-5 bg-current transform transition duration-500 ease-in-out`}></span>
                                <span aria-hidden="true"
                                    className={`${isOpen ? 'opacity-0' : ''}  block absolute  h-0.5 w-5 bg-current   transform transition duration-500 ease-in-out`}></span>
                                <span aria-hidden="true"
                                    className={`${isOpen ? "-rotate-45" : "translate-y-1.5"}  block absolute  h-0.5 w-5 bg-current transform  transition duration-500 ease-in-out`}></span>
                            </div>
                        </button>
                    )}
                    <div
                        className={`top-0 right-0 w-[75vw] py-[75px] pb-4 space-y-2 px-4 bg-gray-200 fixed h-screen z-40 ease-in-out duration-300 border-l border-gray-300 overflow-auto ${isOpen ? "translate-x-0 " : "translate-x-full"} pb-[100px]`}>
                        {menuLink("Home", "/", false)}
                        {menuLink("Login", "https://registration.cheetahlearning.com/ASPNET/Login.aspx?Username=&Password=")}
                        {menuLink("Blog", "https://www.cheetahlearning.com/wp/blog/")}
                        {menuLink("Contact", "https://www.cheetahlearning.com/wp/contact/")}
                        {menuHeader("Courses")}
                        {menuItems("")[0]}
                        {menuHeader("PDUs")}
                        {menuItems("")[1]}
                        {menuHeader("Group Discounts")}
                        {menuItems("")[2]}
                        {menuHeader("About")}
                        {menuItems("")[3]}
                    </div>
                </div>
            </div>
        </div>
        <div className="my-[50px] flex flex-col">
            <BoundsWrapper>
                <div className="mt-4">
                    <div className="text-center grid place-items-center">
                        <h2 className="font-bold text-2xl md:text-3xl tracking-tight">Featured Cheetah Resources</h2>
                        <p className="text-gray-500">Free Cheetah resources to get you started on your PMP certification journey.</p>
                    </div>
                    <div className="grid place-items-center">
                        <div className="relative p-4 md:p-8 grid grid-cols-1 md:grid-cols-2 gap-2 md:gap-4 max-w-[1000px]">
                            {featuredCell("/images/pmp-questions.png", "PMP Practice Questions", "Free PMP Practice Questions", "Do this quick free timed 30 minute baseline exam PMP Practice Test and see if you have what it takes to pass the PMP Exam.", "https://cheetahlearning.ac-page.com/spot-on-pmp-practice-questions")}
                            {featuredCell("/images/goldstandard.png", "Webinar", "Five Quick Steps to Become PMP Certified", "One Hour Webinar to Enable you to Achieve Your Goals 5x Faster, including passing the PMP exam Cheetah FAST", "https://cheetahlearning.easywebinar.live/registration-22")}
                        </div>
                    </div>
                </div>
            </BoundsWrapper>
            <div className="hidden md:block sticky inset-x-0 top-[50px] left-0 bg-main w-screen py-4 z-40">
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
                            content: menuItems("p-4 space-y-4")[0],
                        }} />
                        <HoverMenu props={{
                            title: "PDUs",
                            type: HoverMenuType.header,
                            content: menuItems("")[1],
                        }} />
                        <HoverMenu props={{
                            title: "Group Discounts",
                            type: HoverMenuType.header,
                            content: menuItems("")[2],
                        }} />
                        <HoverMenu props={{
                            title: "About",
                            type: HoverMenuType.header,
                            content: menuItems("")[3],
                        }} />
                        <Link props={{
                            href: "https://www.cheetahlearning.com/wp/blog/",
                            child: <h3>Blog</h3>,
                            isExternal: true,
                            className: "headerItem"
                        }} />
                        <Link props={{
                            href: "https://www.cheetahlearning.com/wp/contact/",
                            child: <h3>Contact</h3>,
                            isExternal: true,
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