import Image from "../components/image"
import Link from "../components/link"

export default function Overview() {

    const cell = (src: string, alt: string, title: string, desc: string, linkTitle: string, link: string) => {
        return <div className="bg-stone-100 space-y-2 overflow-clip rounded-md flex flex-col justify-between border border-gray-300">
            <div className="space-y-4">
                <img src={src} alt={alt} className="w-full" />
                <h4 className="text-2xl font-semibold text-center px-4">{title}</h4>
            </div>
            <p className="font-medium md:text-xl text-center my-auto px-4">{desc}</p>
            <div className="p-4 space-y-4">
                <div className="">
                    <a href={link}><p className="bg-acc-200 w-full py-4 rounded-md md:hover:bg-acc transition-all text-bg text-center text-lg font-bold">{linkTitle}</p></a>
                </div>
                <div className="">
                    <a href="https://registration.cheetahlearning.com/rs/courselist1.asp?group_id=364-PMPACVirt&_ga=2.227661405.1131494294.1667843884-1828884416.1667589368"><p className="bg-main w-full py-4 rounded-md md:hover:opacity-50 transition-all text-bg text-center text-lg font-bold">VIEW COURSES</p></a>
                </div>
            </div>
        </div>
    }

    return <div className="grid md:grid-cols-3 gap-4">
        {cell("/images/goldstandard.png", "Gold Standard", "STUDENT RESULTS DRIVE OUR LONGEVITY", "“It’s a great company with a lot of knowledge. I passed the PMP first try the day after the classes completed. When I took the exam I was so prepared that the test felt familiar and I had very few surprises. I would recommend Cheetah Learning if you’re serious about passing the PMP.”", "VIEW TESTIMONIALS", "https://www.cheetahlearning.com/wp/testimonials-2/")}
        {cell("/images/learning_technique.png", "Learning Techniques", "VIRTUAL LIVE PMP EXAM PREP", "Access this course online from the comfort of your home or office, start class on a Monday and become PMP certified by Friday. Prices include all study materials, one-on-one instructor access, PMI application assistance, 35 educational hours required by PMI, and a 100% money back guarantee.", "VIEW COURSE OVERVIEW", "https://www.cheetahlearning.com/wp/pmp-overview/")}
        {cell("/images/learning_technique.png", "Learning Techniques", "ONLINE PMP EXAM PREP", "We offer this program monthly to a limited number of students to maintain a low student to teacher ratio. Prices include assistance in the pre-course to submit your PMP eligibility application to PMI, four weeks one on one coaching to prepare for the PMP exam on your own schedule. This course is ideal for those who can’t block off a Monday-Thursday to participate in the 4-day intensive prep. Students achieve over a 98% pass rate from this program.", "VIEW COURSE OVERVIEW", "https://www.cheetahlearning.com/wp/pmp-overview/")}
    </div>
}