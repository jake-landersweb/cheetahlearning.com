import Image from "next/image";
import React from "react"
import Footer from "../components/footer/footer";
import Header from "../components/header";
import "../styles/globals.css";

const Root = ({ children }: { children: React.ReactNode }) => {
    return (
        <html style={{ "scrollPaddingTop": "60px" }} lang="en" className="scroll-smooth text-txt bg-bg">
            <head>
                <title>Cheetah Learning - PMP Training</title>
                <meta charSet="UTF-8" />
                <meta
                    name="viewport"
                    content="width=device-width, initial-scale=1.0"
                />
                <meta
                    name="description"
                    content="Cheetah Learning focuses on accelerated learning techniques to get you to a new level of your project management career. Enroll in your first course today!"
                />
                <meta name="author" content="me@jakelanders.com" />
                <meta
                    name="keywords"
                    content="PMP Exam Prep, Project Management Education, PDU Courses, Online PMP® Exam Prep, Classroom PMP® Exam Prep, Pass PMP® Exam"
                    id="keywords"
                />
                <meta name="copyright" content="Landersweb, LLC" />
                <meta name="robots" content="follow" />
            </head>
            <body>
                <div className="">
                    {/* HEADER SECTION */}

                    {/** HEADER */}
                    <Header>
                        {children}
                    </Header>
                    <div className="">
                        <Footer />
                    </div>
                </div>
            </body>
        </html>
    );
}

export default Root