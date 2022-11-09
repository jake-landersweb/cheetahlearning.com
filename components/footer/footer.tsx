import Link from '../link';
import styles from './footer.module.css';
import { FiTwitter, FiFacebook, FiYoutube, FiMail } from 'react-icons/fi';
import BoundsWrapper from '../boundsWrapper';

export default function Footer() {

    const cell = (href: string, child: JSX.Element) => {
        return <Link props={{
            href: href,
            child: child,
            isExternal: true,
            className: "text-bg md:hover:text-acc transition-all"
        }} />
    }

    return <footer className="">
        <div className={`${styles.bgImage}`}>
            <div className="space-y-8">
                <div className="grid place-items-center text-2xl font-bold trakcing-tight text-bg text-center">
                    <h4>Move up in Your Career Cheetah FAST</h4>
                    <Link props={{
                        href: 'https://www.cheetahlearning.com/wp/becoming-a-pmp/',
                        child: <>Become a Project Management Professional <br />Click Here to Learn More</>,
                        isExternal: true,
                        className: "underline md:hover:no-underline md:hover:opacity-50 transition-all"
                    }} />
                </div>
                <div className="flex justify-center space-x-8">
                    {cell("https://twitter.com/CheetahLearning", <FiTwitter size={30} />)}
                    {cell("https://facebook.com/CheetahLearning", <FiFacebook size={30} />)}
                    {cell("https://youtube.com/cheetahlearning", <FiYoutube size={30} />)}
                    {cell("mailto:info@cheetahlearning.com", <FiMail size={30} />)}
                </div>
            </div>
        </div>
        <div className="bg-acc-700 p-8 text-gray-400">
            <BoundsWrapper>
                <div className="text-sm space-y-4">
                    <p>&quot; &quot;PMP&quot;, &quot;CAPM&quot; and the PMP and CAPM logos are certification marks of the Project Management Institute which are registered in the United States and other nations. The PMBOK® Guide - 6th Edition is a registered trademark of the Project Management Institute. CHEETAH LEARNING® provides both CAPM and PMP Exam preparation and continuing education for Project Managers.&quot;</p>
                    <div className="grid place-items-center text-small">
                        <p>*Audit Information from internal report using this method:</p>
                        <ul className='list-decimal font-semibold'>
                            <li>Students report exam results to Cheetah Learning</li>
                            <li>Student&apos;s Cheetah instructor verifies their status with PMI</li>
                            <li>Exam results are marked in our system </li>
                        </ul>
                    </div>
                </div>
            </BoundsWrapper>
        </div>
        <div className="bg-acc-800 p-4 w-full">
            <p className='text-sm text-center text-bg'>© Copyright 2022 Cheetah Learning</p>
        </div>
    </footer>
}