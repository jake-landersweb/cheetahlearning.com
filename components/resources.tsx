import BoundsWrapper from "./boundsWrapper";
import Link from "./link";

export default function Resources() {
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

    return <div className="mt-4 md:my-8">
        <div className="text-center grid place-items-center">
            <h2 className="font-bold text-2xl md:text-3xl tracking-tight">Featured Cheetah Resources</h2>
            <p className="text-gray-500">Free Cheetah resources to get you started on your PMP certification journey.</p>
        </div>
        <div className="grid place-items-center pt-4">
            <div className="relative grid grid-cols-1 md:grid-cols-2 gap-2 md:gap-4 max-w-[1000px]">
                {featuredCell("/images/pmp-questions.png", "PMP Practice Questions", "Free PMP Practice Questions", "Do this quick free timed 30 minute baseline exam PMP Practice Test and see if you have what it takes to pass the PMP Exam.", "https://cheetahlearning.ac-page.com/spot-on-pmp-practice-questions")}
                {featuredCell("/images/goldstandard.png", "Webinar", "Five Quick Steps to Become PMP Certified", "One Hour Webinar to Enable you to Achieve Your Goals 5x Faster, including passing the PMP exam Cheetah FAST", "https://cheetahlearning.easywebinar.live/registration-22")}
            </div>
        </div>
    </div>
}